/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E401FBF8-7E55-46F2-B124-717F1AF9331C",variableType:93}
 */
var vl_fecha = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"74F27BFF-4BC3-4D61-AAEF-E87DCB2574FE"}
 */
var vl_descripcion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BED60BBB-A542-4743-8542-31B55261A99E",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2A5A5056-1DD7-4D0C-9E0E-FED5C57587DA",variableType:8}
 */
var vl_importe = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"775A6DE0-3518-4341-BD28-426DA963885E"}
 */
function onShow(firstShow, event) {
	vl_descripcion = null
	vl_importe = 0
	vl_tipo = 2
	vl_fecha = application.getServerTimeStamp()
	
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"39B2875C-B792-4250-9F41-5E67D3A5618D"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"FF28DB84-98DD-4999-9831-EB37A37D106A"}
 */
function onActioGrabar() {
	
	
	/** @type {JSFoundSet<db:/gpp/caja_movimiento>} */
	var fs_caja_movimiento = databaseManager.getFoundSet('gpp', 'caja_movimiento')
	fs_caja_movimiento.newRecord()
	fs_caja_movimiento.company_id				= scopes.usuario.vg_company_id
	fs_caja_movimiento.mov_descripcion			= vl_descripcion
	fs_caja_movimiento.mov_fecha				= vl_fecha
	fs_caja_movimiento.mov_importe				= vl_importe
	fs_caja_movimiento.mov_tipo					= vl_tipo
	
	databaseManager.saveData()
	
	forms.caja_abierta_movimientos.foundset.newRecord()
	forms.caja_abierta_movimientos.foundset.descripcion	= vl_descripcion
	forms.caja_abierta_movimientos.foundset.fecha		= vl_fecha
	forms.caja_abierta_movimientos.foundset.id			= fs_caja_movimiento.caja_mov_id
	forms.caja_abierta_movimientos.foundset.tipo		= 3 //movimiento manual
	if(vl_tipo == 1){
		forms.caja_abierta_movimientos.foundset.importe_ing	= vl_importe
		forms.caja_abierta_movimientos.foundset.importe_egr	= 0
	}
	else{
		forms.caja_abierta_movimientos.foundset.importe_ing	= 0
		forms.caja_abierta_movimientos.foundset.importe_egr	= vl_importe
	}
	
	databaseManager.saveData()
	
	
	forms.caja_main.calcularTotal()
	
	onActionVolver()
}
