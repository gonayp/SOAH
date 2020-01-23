/**
 * @properties={typeid:24,uuid:"2E60FDAE-D564-47AE-A66B-EE05B0AC6E96"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.herr_modelos)
}

/**
 * @properties={typeid:24,uuid:"DF130B87-92B0-4C97-81E9-DD02B927655D"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	if(modelo_codigo == null){
		plugins.webnotificationsToastr.error("Falta el código del modelo","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	if(modelo_nombre == null || modelo_nombre == ""){
		plugins.webnotificationsToastr.error("Falta el nombre del modelo.","",globals.vg_toast_options)
		controller.focusField("f_nombre",true)
		return
	}
	
	databaseManager.saveData()
	
	application.showForm(forms.herr_modelos)
}

/**
 * @properties={typeid:24,uuid:"F524E917-E344-49AB-8725-4D32F1DDFFF8"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioBorrar() {
	
	if(herr_marca_to_herr_equipo.getSize() > 0){
		plugins.webnotificationsToastr.error("Hay equipos que tienen este modelo, no se puede borrar.","",globals.vg_toast_options)
		return
	}
	
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar el modelo ' + foundset.modelo_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			application.showForm(forms.herr_modelos )
		}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4EABE565-07CF-485B-A98D-BF8C2D16FA31"}
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
