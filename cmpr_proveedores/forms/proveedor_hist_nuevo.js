/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"01EFF447-AADE-46AD-888F-FBDCAC1DBC02",variableType:4}
 */
var vl_proveedor = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"43381781-775E-431B-832A-35B1B56A566B",variableType:4}
 */
var vl_estado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F7BAA8C9-EFDC-4267-9285-D82A3C706391"}
 */
var vl_observacion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0E9ED7A6-88D5-4CE3-9D02-E193C661E35E",variableType:4}
 */
var vl_hist_tipo = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"CD70130A-791C-498E-AAF0-D741E8CAA250",variableType:93}
 */
var vl_fecha = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"B7168A6C-3EFD-49EE-A34F-BFD1FCAD39D2"}
 */
function onShow(firstShow) {
	vl_estado = 1
	vl_hist_tipo = 1
	vl_observacion = null
	vl_fecha = application.getServerTimeStamp()
}

/**
 * @properties={typeid:24,uuid:"62FB97A1-67E4-443C-8004-4864B9447162"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"22B1834C-8F9C-4EF0-8044-CE4D14D47A41"}
 */
function onActioGrabar() {
	
	/** @type {JSFoundSet<db:/gpp/vent_historicos_cliente>} */
	var fs_historico = databaseManager.getFoundSet('gpp', 'vent_historicos_cliente')
	fs_historico.newRecord()
	fs_historico.cliente_id			= vl_proveedor
	fs_historico.company_id			= scopes.usuario.vg_company_id
	fs_historico.hist_fecha			= vl_fecha
	fs_historico.hist_observacion	= vl_observacion
	fs_historico.hist_tipo			= vl_hist_tipo
	fs_historico.hist_estado		= vl_estado
	databaseManager.saveData()
	
	forms.proveedor_editar_historico.foundset.loadAllRecords()
	forms.proveedor_editar_historico.foundset.sort("hist_fecha desc")
	onActionVolver()
	
}
