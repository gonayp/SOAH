/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"97BAEB61-9EE3-435F-9D18-D1C0BF4BB7CB",variableType:8}
 */
var vl_subtotal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"261291E0-78AE-47B0-8ED0-CABF5BB33068",variableType:8}
 */
var vl_total = null;

/**
 * Perform the element default action.
 *
 *
 *
 * @properties={typeid:24,uuid:"317537CC-A41A-4830-9C89-920FBF407168"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.anticipos_main)
}

/**
 * @properties={typeid:24,uuid:"D42E8C94-422A-4835-AD73-B0667408A00C"}
 */
function calculoTotales(){
	vl_subtotal = comp_imp_alqu + comp_imp_ventas

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FF5F1FF6-36B2-4E3A-AA3F-4325FB47387D"}
 */
function onShow(firstShow, event) {
	calculoTotales()
	scopes.globals.vg_tipo_comprobante = foundset.comp_codigo
}

/**
 * @properties={typeid:24,uuid:"A443EC81-109C-4BDE-B41E-96ED3313C8E1"}
 */
function onActionImprimir() {
	globals.imprimirReporteJasper("gpp","vent_recibo.jasper","",plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW, {
		comp_id: comp_id,
		comp_imp_letras: globals.convertirNumeroALetras(comp_imp_total)})
}

/**
 *
 * @properties={typeid:24,uuid:"B34D24C0-5053-47D5-9ECB-C554EBA3C387"}
 */
function onActionMail() {
	
	var adjuntos = new Array()
	var titulo   = foundset.calc_num_compr_sin_codig +'.pdf'
	
	adjuntos.push(plugins.mail.createBinaryAttachment(titulo,plugins.jasperPluginRMI.runReport('gpp',"vent_recibo.jasper", "", plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF, 
		{comp_id: comp_id,
			comp_imp_letras: globals.convertirNumeroALetras(comp_imp_total)}))) 
			
	globals.enviarMail(foundset.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_mail,"","Recibo"+foundset.calc_num_compr_sin_codig,"Adjuntamos recibos:",adjuntos)

}
