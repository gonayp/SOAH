/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"748A13BE-2E8A-446C-BCBC-1D25220AD3F5"}
 */
var vl_nombre = null;


/**
 * @properties={typeid:24,uuid:"5E59BAA9-A498-41ED-8C45-466A0068A04C"}
 */
function onActionVolver() {
	vl_nombre = null
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"5D164FAC-5796-4AB8-ABBA-D8DD3793190A"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	if(vl_nombre == null || vl_nombre == ""){
		plugins.webnotificationsToastr.error("Falta el nombre del accesorio.","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	
	/** @type {JSFoundSet<db:/gpp/herr_accesorios>} */
	var fs_accesorio = databaseManager.getFoundSet('gpp', 'herr_accesorios')
	
	fs_accesorio.newRecord()
	fs_accesorio.company_id				= scopes.usuario.vg_company_id
	fs_accesorio.accesorio_estado		= 1
	fs_accesorio.accesorio_nombre		= vl_nombre
	
	databaseManager.saveData()
	
	forms.herr_accesorios.foundset.loadAllRecords()
	
	onActionVolver()
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"50EB840B-F0EC-4B34-8657-B393399888E6"}
 */
function onShow(firstShow, event) {
	controller.focusFirstField()
}
