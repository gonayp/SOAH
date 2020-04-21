/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4AD1FC22-E702-47E7-9199-1A088AA845BF",variableType:8}
 */
var vl_subtotal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FDA73AE2-4BB5-4884-A19B-4AABDA8FF406",variableType:8}
 */
var vl_total = null;

/**
 * Perform the element default action.
 *
 *
 *
 * @properties={typeid:24,uuid:"37FB24D6-74E3-4E32-9673-A4CA04A5C29C"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"A617F1A1-EF24-45F1-B8AC-75BE65B10306"}
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
 * @properties={typeid:24,uuid:"6AC12E0A-B0EC-4B09-819F-97B1EBF21564"}
 */
function onShow(firstShow, event) {
	calculoTotales()
	scopes.globals.vg_tipo_comprobante = foundset.comp_codigo
}

/**
 * @properties={typeid:24,uuid:"A7ABC504-6C45-45D1-887A-D9A7EBC27EE3"}
 */
function onActionImprimir() {
	globals.imprimirReporteJasper("gpp","vent_recibo.jasper","",plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW, {
		comp_id: comp_id,
		comp_imp_letras: globals.convertirNumeroALetras(comp_imp_total)})
}

/**
 *
 * @properties={typeid:24,uuid:"3DCC44DD-3688-4CF3-AF3B-D55EAB2DF09B"}
 */
function onActionMail() {
	
	var adjuntos = new Array()
	var titulo   = foundset.calc_num_compr_sin_codig +'.pdf'
	
	adjuntos.push(plugins.mail.createBinaryAttachment(titulo,plugins.jasperPluginRMI.runReport('gpp',"vent_recibo.jasper", "", plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF, 
		{comp_id: comp_id,
			comp_imp_letras: globals.convertirNumeroALetras(comp_imp_total)}))) 
			
	globals.enviarMail(foundset.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_mail,"","Recibo"+foundset.calc_num_compr_sin_codig,"Adjuntamos recibos:",adjuntos)

}
