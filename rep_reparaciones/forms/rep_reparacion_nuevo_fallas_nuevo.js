/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7DD266C6-72CB-49BE-A841-B6AF02EF0548"}
 */
var vl_observacion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"884F8493-384C-4E36-92E8-612B403AD029",variableType:4}
 */
var vl_falla = null;


/**
 * @properties={typeid:24,uuid:"FA905225-CB55-49F3-880A-DD5ED886D8DF"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"4D869F3F-E6DE-4896-9617-073550CFE5A1"}
 */
function onActioGrabar() {
	if (vl_falla == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de falla.", "", globals.vg_toast_options)
		controller.focusField("f_vl_falla", true)
		return
	}
	
	grabar()
	
	onActionVolver()
	
}


/**
 * @properties={typeid:24,uuid:"629246C8-3836-4863-9987-3BC5DAFCA1A0"}
 */
function grabar(){
	
	/** @type {JSFoundSet<db:/gpp/rep_fallas>} */
	var fs_rep_fallas = databaseManager.getFoundSet('gpp', 'rep_fallas')
	fs_rep_fallas.loadRecords(vl_falla)
	
	forms.rep_reparacion_nuevo_fallas.foundset.newRecord()
	forms.rep_reparacion_nuevo_fallas.foundset.falla_id			= vl_falla
	forms.rep_reparacion_nuevo_fallas.foundset.falla_observacion= vl_observacion
	forms.rep_reparacion_nuevo_fallas.foundset.falla_nombre		= fs_rep_fallas.falla_nombre
	databaseManager.saveData()
	
}


/**
 * @properties={typeid:24,uuid:"29D14B16-B693-4B34-8059-7A99D9324B2B"}
 */
function onActioGrabarOtra() {
	if (vl_falla == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de falla.", "", globals.vg_toast_options)
		controller.focusField("f_vl_falla", true)
		return
	}
	
	grabar()
	
	inicializar()
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E63022EB-4AF6-44EC-A86A-68545BCA7FBE"}
 */
function onShow(firstShow, event) {
	inicializar()
}

/**
 * @properties={typeid:24,uuid:"F955AF61-A12C-4DF4-AE03-92CFC767B02D"}
 */
function inicializar(){
	vl_falla = null
	vl_observacion = null
	
	controller.focusFirstField()
}
