/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5D9C63AA-D7D0-4EAB-9453-DED7AB2C4188",variableType:8}
 */
var vl_saldo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FDDFBE01-7099-454B-9072-90E4602FCF7E"}
 */
var vl_form_padre = null;




/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"46627B23-2FCC-4562-BCE6-55E131CFF1CC",variableType:8}
 */
var vl_subtotal= null;



/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F121DA53-BE3B-41E2-88C3-20E4B56BB03D",variableType:8}
 */
var vl_total = null;


/**
 * Perform the element default action.
 *
 *
 *
 * @properties={typeid:24,uuid:"2EA4850A-F6CD-4D92-A76B-8434BA4FDDF9"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	if(vl_form_padre == null){
		application.showForm(forms.facturacion_main)
	}
	else{
		application.showForm(vl_form_padre)
		vl_form_padre = null
	}
}



/**
 * @properties={typeid:24,uuid:"40957C0F-59A1-42EE-90FF-1564A06C735B"}
 */
function calculoTotales(){
	vl_subtotal = comp_imp_alqu + comp_imp_ventas
	
	vl_saldo = scopes.facturacion.calcularSaldoComprobante(foundset.getSelectedRecord())
	
	elements.f_saldo.bgcolor = '#C0F0C3'
	if(vl_saldo < foundset.comp_imp_total){
		elements.f_saldo.bgcolor = '#FFC3C3'
	}
	else{
		vl_saldo = foundset.comp_imp_total
	}

}



/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"54DD41D2-1E77-4A06-9197-490788C4D41A"}
 */
function onShow(firstShow, event) {
	calculoTotales()
	scopes.globals.vg_tipo_comprobante = foundset.comp_codigo
}

/**
 * @properties={typeid:24,uuid:"78095DF5-2739-4C1E-8DE1-9FAFC5F94A1C"}
 */
function onActionImprimir() {
	
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', 'Selecciona tipo de reporte para imprimir', 'Normal', 'Detallado')
	if (PressedButton == 'Normal') { 
		globals.imprimirReporteJasper("gpp","vent_factura_devolucion.jasper","",plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW, {
			comp_id: comp_id,
			comp_imp_letras: globals.convertirNumeroALetras(comp_imp_total)})
	}
	else{
		globals.imprimirReporteJasper("gpp","vent_factura_detallada.jasper","",plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW, {
			comp_id: comp_id,
			comp_imp_letras: globals.convertirNumeroALetras(comp_imp_total)})
	}
	
	
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"4EF7CCFB-A95B-4074-B29E-BE4E5E3678C3"}
 */
function onActionMail() {
	var adjuntos = new Array()
	var titulo   = foundset.calc_num_compr_sin_codig +'.pdf'
	
	adjuntos.push(plugins.mail.createBinaryAttachment(titulo,plugins.jasperPluginRMI.runReport('gpp',"vent_factura_devolucion.jasper", "", plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF, 
		{comp_id: comp_id,
			comp_imp_letras: globals.convertirNumeroALetras(comp_imp_total)}))) 
			
	titulo   = foundset.calc_num_compr_sin_codig +'_detallado.pdf'
	adjuntos.push(plugins.mail.createBinaryAttachment(titulo,plugins.jasperPluginRMI.runReport('gpp',"vent_factura_detallada.jasper", "", plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF, 
		{comp_id: comp_id,
			comp_imp_letras: globals.convertirNumeroALetras(comp_imp_total)})))
			
	globals.enviarMail(foundset.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_mail,"","Factura "+foundset.calc_num_compr_sin_codig,"Adjuntamos facturas:",adjuntos)


}
