
/**
 * @properties={typeid:24,uuid:"D0F5B7D6-0DDC-4450-9DC2-400BDDD7E5AF"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.herr_herramientas)
}

/**
 * @properties={typeid:24,uuid:"C7D1A23F-1D0B-4220-AD7E-F1A932878921"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(herramienta_codigo == null){
		plugins.webnotificationsToastr.error("Falta el código de la herramienta.","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	
	if(herramienta_nombre == null || herramienta_nombre == ""){
		plugins.webnotificationsToastr.error("Falta el nombre de la herramienta.","",globals.vg_toast_options)
		controller.focusField("f_nombre",true)
		return
	}
	
	databaseManager.saveData()
	application.showForm(forms.herr_herramientas)
}

/**
 * @properties={typeid:24,uuid:"89AE7511-EF07-4F9F-B9B0-9E1F9A255008"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioBorrar() {
	
	if(herr_herramientas_to_herr_equipo.getSize() > 0){
		plugins.webnotificationsToastr.error("Hay equipos que son de este tipo de herramienta, no se puede eliminar.","",globals.vg_toast_options)
		return
	}
	
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar  la herramienta ' + foundset.herramienta_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			application.showForm(forms.herr_herramientas )
		}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7FADB9BA-49E7-44F1-9F9A-43065EF22994"}
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
