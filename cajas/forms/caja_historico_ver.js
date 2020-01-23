/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"94D1BEEF-4EDD-4B35-849F-B299A6C29E7B",variableType:8}
 */
var vl_saldo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D1264151-4DF5-413C-9132-5C93812DDC59",variableType:8}
 */
var vl_egresos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9B88DB19-8BE7-4DB4-9EAD-06C62DD34DB1",variableType:8}
 */
var vl_ingresos = null;

/**
 * @properties={typeid:24,uuid:"9D9796BB-B447-44BB-A2B9-3B19620CFAB5"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.caja_historicos)
}





/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"8704B665-6A66-4492-ABC2-2B3BF72D4AAF"}
 * @SuppressWarnings(wrongparameters)
 * @AllowToRunInFind
 */
function onShow(firstShow) {
	

	borrarDatosTemporales()
	
	
	leerMovimientos()
	
	calcularTotal()
	
	
}

/**
 * @properties={typeid:24,uuid:"214584FF-71F5-4706-ABB9-98C3BFA57590"}
 */
function borrarDatosTemporales(){
	
	forms.caja_historico_movimientos.foundset.deleteAllRecords()
	databaseManager.saveData()
	
}



/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"FB7C3AAD-BFE5-440F-8B3D-61AF1588B7B4"}
 */
function leerMovimientos(){
	
	
	//Facturas y recibos de clientes
	/** @type {JSFoundSet<db:/gpp/vent_comp_forma_pago>} */
	var fs_formas_d_pago = databaseManager.getFoundSet('gpp', 'vent_comp_forma_pago')
	
	
	fs_formas_d_pago.find()
	fs_formas_d_pago.forma_pago_id		= 1 //Efectivo
	fs_formas_d_pago.caja_id			= foundset.caja_id //Caja asignada
	fs_formas_d_pago.vent_comp_forma_pago_to_vent_comprobantes.comp_codigo			= "5 || 3 || 4" //facturas y recibos
	fs_formas_d_pago.vent_comp_forma_pago_to_vent_comprobantes.comp_fecha_emision 	= utils.dateFormat(foundset.caja_fecha_inicio, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(foundset.caja_fecha_final, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	fs_formas_d_pago.search()
	
	var nCompCount = 0
	nCompCount = databaseManager.getFoundSetCount(fs_formas_d_pago);
	for (var i = 1; i <= nCompCount; i++) {
		var myFormaPago = fs_formas_d_pago.getRecord(i);
		forms.caja_abierta_movimientos.foundset.newRecord()
		forms.caja_abierta_movimientos.foundset.descripcion	= myFormaPago.vent_comp_forma_pago_to_vent_comprobantes.calc_num_comprobante +" - "+ myFormaPago.vent_comp_forma_pago_to_vent_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_nombre
		forms.caja_abierta_movimientos.foundset.fecha		= myFormaPago.vent_comp_forma_pago_to_vent_comprobantes.comp_fecha_emision
		forms.caja_abierta_movimientos.foundset.id			= myFormaPago.comp_id
		forms.caja_abierta_movimientos.foundset.tipo		= 1 //Efectivo clientes
		forms.caja_abierta_movimientos.foundset.importe_ing	= myFormaPago.forma_pago_imp
		forms.caja_abierta_movimientos.foundset.importe_egr	= 0
		
		databaseManager.saveData()
	}
	
	
	//Leer movimientos manuales
	/** @type {JSFoundSet<db:/gpp/caja_movimiento>} */
	var fs_caja_movimiento = databaseManager.getFoundSet('gpp', 'caja_movimiento')
	fs_caja_movimiento.find()
	fs_caja_movimiento.caja_id 		= foundset.caja_id
	fs_caja_movimiento.mov_fecha 	= utils.dateFormat(foundset.caja_fecha_inicio, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(foundset.caja_fecha_final, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	fs_caja_movimiento.search()
	
	var nMovCount = 0
	nMovCount = databaseManager.getFoundSetCount(fs_caja_movimiento);
	for (var j = 1; j <= nMovCount; j++) {
		var myMovimiento = fs_caja_movimiento.getRecord(j);
		forms.caja_abierta_movimientos.foundset.newRecord()
		forms.caja_abierta_movimientos.foundset.descripcion	= myMovimiento.mov_descripcion
		forms.caja_abierta_movimientos.foundset.fecha		= myMovimiento.mov_fecha
		forms.caja_abierta_movimientos.foundset.id			= myMovimiento.caja_mov_id
		forms.caja_abierta_movimientos.foundset.tipo		= 3 //movimientos manuales
		if(myMovimiento.mov_tipo == 1){
			forms.caja_abierta_movimientos.foundset.importe_ing	= myMovimiento.mov_importe
			forms.caja_abierta_movimientos.foundset.importe_egr	= 0
		}
		else{
			forms.caja_abierta_movimientos.foundset.importe_ing	= 0
			forms.caja_abierta_movimientos.foundset.importe_egr	= myMovimiento.mov_importe
		}
		
		databaseManager.saveData()
	}
	
	
}

/**
 * @properties={typeid:24,uuid:"98C214A0-FB79-42DC-95C8-54AF32973161"}
 */
function calcularTotal(){
	vl_ingresos = 0
	vl_egresos = 0
	vl_saldo = 0
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.caja_historico_movimientos.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myMovimiento = forms.caja_historico_movimientos.foundset.getRecord(index);
		vl_ingresos += myMovimiento.importe_ing
		vl_egresos += myMovimiento.importe_egr
	}
	
	
	foundset.caja_importe_cierre = Math.round( ((foundset.caja_importe_inicial + vl_ingresos) - vl_egresos)*100)/100
	vl_saldo = vl_ingresos - vl_egresos
	
}


/**
 * @properties={typeid:24,uuid:"52D540B3-5E99-496E-9C45-64C604EC812E"}
 */
function onActionVerRecuento() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.caja_historico_recuento );
}
