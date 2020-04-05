/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"63FAE9D2-ABAE-46DA-8F90-7BEE53AD487E"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	foundset.find()
	foundset.cliente_id = globals.vg_cliente
	foundset.comp_codigo = 90
	foundset.comp_id_padre = '^='
	foundset.search()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"7435E1D9-73BD-4FE9-854B-DEE81575C9D1"}
 */
function onActionVolver(event) {
	application.getWindow('Dialog').hide()

}

/**
 *
 * @properties={typeid:24,uuid:"0A9C2D11-3850-4829-9CB8-1E124F104478"}
 */
function onActionAdd() {
	
	forms.factura_formas_de_pago_detalle.foundset.newRecord()
	//forms.factura_formas_de_pago_detalle.foundset.fp_banco 			= foundset.banco_id
	//forms.factura_formas_de_pago_detalle.foundset.fp_banco_nombre  	= foundset.cheq_cheques_to_bancos.banco_nombre
	forms.factura_formas_de_pago_detalle.foundset.fp_fecha			= foundset.comp_fecha_emision
	forms.factura_formas_de_pago_detalle.foundset.fp_importe		= foundset.comp_imp_total
	forms.factura_formas_de_pago_detalle.foundset.fp_numero			= foundset.calc_num_compr_sin_codig
	forms.factura_formas_de_pago_detalle.foundset.fp_tipo			= 6 //anticipo
	forms.factura_formas_de_pago_detalle.foundset.fp_anticipo_id	= foundset.comp_id
	
	databaseManager.saveData()
	
	forms.factura_formas_de_pago.vl_anticipos += foundset.comp_imp_total
	forms.factura_formas_de_pago.onDataChangePagos()
	
	application.getWindow('Dialog').hide()
	

}
