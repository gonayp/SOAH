/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7A21DDEA-85BC-4008-9701-FE4499481468"}
 */
var vl_nombre = null;

/**
 * @properties={typeid:24,uuid:"CEC2EAC2-AEE8-47A7-9748-308CE5BADA57"}
 */
function onActionVolver() {
	vl_nombre = null
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"AECE9BFB-ACEB-466E-B2DA-1B52EEF15BDE"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	if(vl_nombre == null || vl_nombre == ""){
		plugins.webnotificationsToastr.error("Falta el nombre del tipo de alimentación.","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	
	/** @type {JSFoundSet<db:/gpp/herr_alimentacion>} */
	var fs_alimentacion = databaseManager.getFoundSet('gpp', 'herr_alimentacion')
	
	fs_alimentacion.newRecord()
	fs_alimentacion.company_id				= scopes.usuario.vg_company_id
	fs_alimentacion.alimentacion_nombre		= vl_nombre
	
	databaseManager.saveData()
	
	forms.herr_alimentacion.foundset.loadAllRecords()
	
	onActionVolver()
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3439882B-8E58-4DA4-AE72-4A4771B4CCF5"}
 */
function onShow(firstShow, event) {
	controller.focusFirstField()
}
