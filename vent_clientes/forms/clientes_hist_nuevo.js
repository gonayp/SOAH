/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"744017C9-1584-4AE9-818B-D102AAAD7351",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C606FE00-B87F-416F-B8FB-BD05491A7DA5",variableType:4}
 */
var vl_estado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6E9A13C8-CF8A-4B61-BA72-22B07735FA82"}
 */
var vl_observacion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9AC7BE0F-1B0A-449D-9F75-3F529F2F1177",variableType:4}
 */
var vl_hist_tipo = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"001399D2-9DBA-4C24-BAC7-7FAFA8D88F3C",variableType:93}
 */
var vl_fecha = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"692CB87B-104E-42AA-81CA-95D66DF73D5D"}
 */
function onShow(firstShow) {
	vl_estado = 1
	vl_hist_tipo = 1
	vl_observacion = null
	vl_fecha = application.getServerTimeStamp()
}

/**
 * @properties={typeid:24,uuid:"38AEC443-7CD5-4700-9AF1-B7FE4DAEC7EA"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"E14DF5E5-269D-4316-82FA-EC138D0E39C0"}
 */
function onActioGrabar() {
	
	/** @type {JSFoundSet<db:/gpp/vent_historicos_cliente>} */
	var fs_historico = databaseManager.getFoundSet('gpp', 'vent_historicos_cliente')
	fs_historico.newRecord()
	fs_historico.cliente_id			= vl_cliente
	fs_historico.company_id			= scopes.usuario.vg_company_id
	fs_historico.hist_fecha			= vl_fecha
	fs_historico.hist_observacion	= vl_observacion
	fs_historico.hist_tipo			= vl_hist_tipo
	fs_historico.hist_estado		= vl_estado
	databaseManager.saveData()
	
	forms.clientes_editar_historico.foundset.loadAllRecords()
	forms.clientes_editar_historico.foundset.sort("hist_fecha desc")
	onActionVolver()
	
}
