/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EDA80893-4D8E-48A9-BEFE-31DB3EC0869D"}
 */
function onShow(firstShow, event) {

	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"90067A71-E4C8-466D-A0A5-5B53A05B8503"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"DCA23DDC-4148-410F-BE1A-2FEFF2BBFDE9"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(herramienta_asociada_id == null){
		plugins.webnotificationsToastr.error("Falta seleccionar una herramienta","",globals.vg_toast_options)
		return
	}
	
	databaseManager.saveData()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"2760ED37-86E1-421E-830A-ADA15590BFA7"}
 */
function onActioBorrar() {
	foundset.deleteRecord()
	databaseManager.saveData()
	application.getWindow('Dialog').hide()
}
