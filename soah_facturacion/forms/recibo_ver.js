/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"40059B84-1688-4575-B46C-849DC3AC5CDB",variableType:8}
 */
var vl_subtotal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E64D7FF2-E22D-431E-89DA-C102B00E87E5",variableType:8}
 */
var vl_total = null;

/**
 * Perform the element default action.
 *
 *
 *
 * @properties={typeid:24,uuid:"18A6D97E-17D1-4A52-AF78-661D685AE134"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.recibos_main)
}

/**
 * @properties={typeid:24,uuid:"374ED040-2823-4491-BDDE-B8F69D234503"}
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
 * @properties={typeid:24,uuid:"0F7247EF-1335-41F9-9284-23188E044139"}
 */
function onShow(firstShow, event) {
	calculoTotales()
	scopes.globals.vg_tipo_comprobante = foundset.comp_codigo
}

/**
 * @properties={typeid:24,uuid:"8C2ED727-2DB1-4AFB-8F14-CF2E3F88F021"}
 */
function onActionImprimir() {
	globals.imprimirReporteJasper("gpp","vent_recibo.jasper","",plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW, {
		comp_id: comp_id,
		comp_imp_letras: globals.convertirNumeroALetras(comp_imp_total)})
}

/**
 *
 * @properties={typeid:24,uuid:"8B557B49-BF22-4611-A963-C80B5184E004"}
 */
function onActionMail() {
	
	var adjuntos = new Array()
	var titulo   = foundset.calc_num_compr_sin_codig +'.pdf'
	
	adjuntos.push(plugins.mail.createBinaryAttachment(titulo,plugins.jasperPluginRMI.runReport('gpp',"vent_recibo.jasper", "", plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF, 
		{comp_id: comp_id,
			comp_imp_letras: globals.convertirNumeroALetras(comp_imp_total)}))) 
			
	globals.enviarMail(foundset.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_mail,"","Recibo"+foundset.calc_num_compr_sin_codig,"Adjuntamos recibos:",adjuntos)

}
