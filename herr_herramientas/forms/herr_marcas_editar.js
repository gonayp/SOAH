
/**
 * @properties={typeid:24,uuid:"8F9C6DE3-C3F7-4F4B-BF5A-3DDC3AFE317D"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.herr_marcas)
}

/**
 * @properties={typeid:24,uuid:"D8E344C4-C5E8-48AD-99A7-00EF9722B5CD"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	if(marca_codigo == null){
		plugins.webnotificationsToastr.error("Falta el código de la marca","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	if(marca_nombre == null || marca_nombre == ""){
		plugins.webnotificationsToastr.error("Falta el nombre de la marca.","",globals.vg_toast_options)
		controller.focusField("f_nombre",true)
		return
	}
	
	databaseManager.saveData()
	
	application.showForm(forms.herr_marcas)
}

/**
 * @properties={typeid:24,uuid:"C2E591D0-35FD-4C7B-9C07-9C5F6DCFB25B"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioBorrar() {
	
	if(herr_marca_to_herr_equipo.getSize() > 0){
		plugins.webnotificationsToastr.error("Hay equipos que tienen esta marca, no se puede borrar.","",globals.vg_toast_options)
		return
	}
	
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar la marca ' + foundset.marca_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			application.showForm(forms.herr_marcas )
		}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7F1194E8-49EF-44FD-B5B7-BB9F53C9E8D8"}
 */
function onShow(firstShow, event) {

	
	elements.btn_guardar.enabled = true
	if (scopes.usuario.vg_permiso_modificar == 0) {
		elements.btn_guardar.enabled = false
	}
	
	elements.btn_borrar.enabled = true
	if (scopes.usuario.vg_permiso_borrar == 0) {
		elements.btn_borrar.enabled = false
	}
	
	controller.focusFirstField()
}
