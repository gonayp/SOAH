/**
 * @properties={typeid:24,uuid:"6B1C4AA1-D17A-453A-AF34-E957A8605B5E"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.obras_main)
}

/**
 * @properties={typeid:24,uuid:"B820A9F0-21AE-4AE9-AF30-F00F51975AA0"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if (obra_nombre == null || obra_nombre == "") {
		plugins.webnotificationsToastr.error("Falta completar el campo de nombre.", "", globals.vg_toast_options)
		controller.focusField("f_nombre", true)
		return
	}
	
	databaseManager.saveData()
	application.showForm(forms.obras_main)
}

/**
 * @properties={typeid:24,uuid:"EAA8FD18-139F-4996-8332-B0FA40C9C808"}
 */
function onActioBorrar() {
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar  ' + foundset.obra_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			application.showForm(forms.obras_main)
		}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"DC97E917-CDFD-4A35-88BE-6FEB4FC14F69"}
 */
function onShow(firstShow) {
	//foundset.loadRecords(forms.clientes_editar_obras.foundset.obra_id)
	
	elements.btn_grabar.enabled = true
	if(scopes.usuario.vg_permiso_modificar == 0){
		elements.btn_grabar.enabled = false
	}
	elements.btn_borrar.enabled = true
	if(scopes.usuario.vg_permiso_borrar == 0){
		elements.btn_borrar.enabled = false
	}
}
