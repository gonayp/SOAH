
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7F656F99-E605-4AF6-A79A-3D2481A7B2C7"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	foundset.find()
	foundset.cliente_id = forms.factura_devolucion_nuevo.vl_cliente
	foundset.comp_id = '^='
	foundset.search()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"156DCE40-9063-403E-B6BB-C237B97C9C07"}
 */
function onActionVolver(event) {
	application.getWindow('Dialog').hide()

}



/**
 *
 * @properties={typeid:24,uuid:"7BEC8B54-96ED-4C60-9886-A0683A888A51"}
 */
function onActionAdd() {
	forms.factura_devolucion_nuevo_forma_pago_detalle.foundset.newRecord()
	forms.factura_devolucion_nuevo_forma_pago_detalle.foundset.fp_banco 		= banco_id
	forms.factura_devolucion_nuevo_forma_pago_detalle.foundset.fp_banco_nombre  = cheq_cheques_to_bancos.banco_nombre
	forms.factura_devolucion_nuevo_forma_pago_detalle.foundset.fp_fecha			= cheque_fecha_vencimiento
	forms.factura_devolucion_nuevo_forma_pago_detalle.foundset.fp_importe		= cheque_importe
	forms.factura_devolucion_nuevo_forma_pago_detalle.foundset.fp_numero		= cheque_numero
	forms.factura_devolucion_nuevo_forma_pago_detalle.foundset.fp_tipo			= 2 //cheque
	forms.factura_devolucion_nuevo_forma_pago_detalle.foundset.fp_cheque_id		= cheque_id
	
	databaseManager.saveData()
	
	forms.factura_devolucion_nuevo_forma_pago.vl_cheques += cheque_importe
	forms.factura_devolucion_nuevo_forma_pago.onDataChangePagos()
	
	application.getWindow('Dialog').hide()
	

}
