
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1DE28671-CE58-4D55-8ACB-E0F1BA378389"}
 */
function onShow(firstShow, event) {
	foundset.loadRecords(forms.herr_equipos_editar_accesorios.foundset.accesorio_d_equipo_id)
}

/**
 * @properties={typeid:24,uuid:"EB0A1FDF-3766-44B3-AD9C-2EA65A1903C8"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"434A89A1-7905-47CC-A378-BEB55C2FB5EE"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if (accesorio_id == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de accesorio.", "", globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	
	databaseManager.saveData()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"F4C07983-2B39-4B06-AE57-7C422CB3D14A"}
 */
function onActioBorrar() {
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar el accesorio ' + foundset.herr_accesorios_d_equipo_to_herr_accesorios.accesorio_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			application.getWindow('Dialog').hide()
		}
}
