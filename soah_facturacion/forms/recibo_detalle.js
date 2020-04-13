/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"913D5A88-AA1D-4581-9AEE-8DB83A0A4A67",variableType:8}
 */
var vl_subtotal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AA907266-9A41-4C26-BB19-47C00CCAEBBE",variableType:8}
 */
var vl_total = null;

/**
 * Perform the element default action.
 *
 *
 *
 * @properties={typeid:24,uuid:"B7079A4B-10D3-4B98-A8E2-036587B53603"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"74653ACE-9ACA-4399-96ED-1BCBB10FFA90"}
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
 * @properties={typeid:24,uuid:"E4370565-1949-4D85-82DE-5A220F58FA2A"}
 */
function onShow(firstShow, event) {
	calculoTotales()
	scopes.globals.vg_tipo_comprobante = foundset.comp_codigo
}

/**
 * @properties={typeid:24,uuid:"E8018797-5CD3-4C3F-A81E-C8C7C3BF315F"}
 */
function onActionImprimir() {
	globals.imprimirReporteJasper("gpp","vent_recibo.jasper","",plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW, {
		comp_id: comp_id,
		comp_imp_letras: globals.convertirNumeroALetras(comp_imp_total)})
}

/**
 *
 * @properties={typeid:24,uuid:"E9FD3AA9-4795-45E3-8078-04A9414C4D21"}
 */
function onActionMail() {
	
	var adjuntos = new Array()
	var titulo   = foundset.calc_num_compr_sin_codig +'.pdf'
	
	adjuntos.push(plugins.mail.createBinaryAttachment(titulo,plugins.jasperPluginRMI.runReport('gpp',"vent_recibo.jasper", "", plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF, 
		{comp_id: comp_id,
			comp_imp_letras: globals.convertirNumeroALetras(comp_imp_total)}))) 
			
	globals.enviarMail(foundset.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_mail,"","Recibo"+foundset.calc_num_compr_sin_codig,"Adjuntamos recibos:",adjuntos)

}
