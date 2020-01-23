

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"10FF5783-1911-46AE-9097-C71EC260D39C"}
 */
function onShow(firstShow, event) {
	
}

/**
 * @properties={typeid:24,uuid:"354B2FDE-E9BB-4690-8D9A-E307744E2322"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"83E74B8A-6341-4B9C-A39A-1B533085FF43"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(adjunto_nombre == null || adjunto_nombre == ""){
		plugins.webnotificationsToastr.error("Falta un nombre para el adjunto","",globals.vg_toast_options)
		return
	}
	
	if(adjunto_dato == null ){
		plugins.webnotificationsToastr.error("Falta cargar un adjunto","",globals.vg_toast_options)
		return
	}
	
	
	databaseManager.saveData()

	
	onActionVolver()
}
