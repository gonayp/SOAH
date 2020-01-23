
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7D862F50-36D1-48DD-8CB7-CAAE241BAF3F"}
 */
function onShow(firstShow, event) {
	foundset.newRecord()
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"3F73AE1C-1031-4D89-87EF-2FCE847DAD1B"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"B4E30809-E691-49B8-859A-6927711A95E7"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(herramienta_asociada_id == null){
		plugins.webnotificationsToastr.error("Falta seleccionar una herramienta","",globals.vg_toast_options)
		return
	}
	
	herramienta_id = forms.herr_herramientas_editar.foundset.herramienta_id
	company_id     = scopes.usuario.vg_company_id
	
	databaseManager.saveData()
	forms.herr_herramientas_asociadas.foundset.loadAllRecords()
	application.getWindow('Dialog').hide()
}
