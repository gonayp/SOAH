/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8822CE32-CA10-4F67-908A-CC40220E1A21"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	foundset.find()
	foundset.cliente_id = globals.vg_cliente
	foundset.comp_id = '^='
	foundset.search()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"AF7C7A3A-D367-4A86-B697-74D7927727A0"}
 */
function onActionVolver(event) {
	application.getWindow('Dialog').hide()

}

/**
 *
 * @properties={typeid:24,uuid:"0490A2B5-285E-4494-BDBE-85A47F59C489"}
 */
function onActionAdd() {
	
	forms.factura_formas_de_pago_detalle.foundset.newRecord()
	forms.factura_formas_de_pago_detalle.foundset.fp_banco 			= foundset.banco_id
	forms.factura_formas_de_pago_detalle.foundset.fp_banco_nombre  	= foundset.cheq_cheques_to_bancos.banco_nombre
	forms.factura_formas_de_pago_detalle.foundset.fp_fecha			= foundset.cheque_fecha_vencimiento
	forms.factura_formas_de_pago_detalle.foundset.fp_importe		= foundset.cheque_importe
	forms.factura_formas_de_pago_detalle.foundset.fp_numero			= foundset.cheque_numero
	forms.factura_formas_de_pago_detalle.foundset.fp_tipo			= 2 //cheque
	forms.factura_formas_de_pago_detalle.foundset.fp_cheque_id		= foundset.cheque_id
	
	databaseManager.saveData()
	
	forms.factura_formas_de_pago.vl_cheques += cheque_importe
	forms.factura_formas_de_pago.onDataChangePagos()
	
	application.getWindow('Dialog').hide()
	

}
