

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"88BD017B-C70A-48BE-B323-1D2DF6966BA1"}
 */
var vl_observacion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D0806C24-7756-43B8-A1CB-99306DCCF1AC",variableType:4}
 */
var vl_hist_tipo = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"57E2C2E3-308E-43B2-BD0D-2220330B3422",variableType:93}
 */
var vl_fecha = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"8DDED6EC-722D-4A9A-88E0-0E8583EC8A63"}
 */
function onShow(firstShow) {
	vl_hist_tipo = 1
	vl_observacion = null
	vl_fecha = application.getServerTimeStamp()
}

/**
 * @properties={typeid:24,uuid:"3F9F7CF3-B3FD-449B-AEE6-A87747D2F619"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"2F4FF8ED-BAC3-41A0-9A17-1AFE02DD8A53"}
 */
function onActioGrabar() {
	
	
	forms.herr_equipos_editar_historico.foundset.newRecord()
	forms.herr_equipos_editar_historico.foundset.equipo_id			= forms.herr_equipos_editar.foundset.equipo_id
	forms.herr_equipos_editar_historico.foundset.company_id			= scopes.usuario.vg_company_id
	forms.herr_equipos_editar_historico.foundset.hist_fecha			= vl_fecha
	forms.herr_equipos_editar_historico.foundset.hist_observacion	= vl_observacion
	forms.herr_equipos_editar_historico.foundset.hist_tipo			= vl_hist_tipo
	databaseManager.saveData()
	
	
	onActionVolver()
	
}
