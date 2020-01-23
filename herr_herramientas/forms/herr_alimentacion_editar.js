/**
 * @properties={typeid:24,uuid:"43F315EC-DF80-4CF5-9526-B1A4710F8EE0"}
 */
function onActionVolver() {
	databaseManager.saveData()
	application.showForm(forms.herr_alimentacion)
}

/**
 * @properties={typeid:24,uuid:"B350D3E7-3128-4C22-8115-8703A24FFB25"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioBorrar() {
	
	if(herr_alimentacion_to_herr_equipo.getSize() > 0){
		plugins.webnotificationsToastr.error("No se puede borrar porque estetipo de alimentación esta asignado a almenos un equipo","",globals.vg_toast_options)
		return
	}
	
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar el tipo de alimentacion ' + foundset.alimentacion_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			application.showForm(forms.herr_alimentacion )
		}
}

/**
 * @properties={typeid:24,uuid:"5E56C3D3-B83B-492E-A4A7-E1D11545688C"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(alimentacion_nombre == null || alimentacion_nombre == ""){
		plugins.webnotificationsToastr.error("EL nombre del tipo de alimentación no puede estar vacio","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	
	databaseManager.saveData()
	application.showForm(forms.herr_alimentacion)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D6FBB90E-53EA-41E9-8159-8C8FFDA55DB9"}
 */
function onShow(firstShow, event) {

	
	elements.btn_grabar.enabled = true
	if (scopes.usuario.vg_permiso_modificar == 0) {
		elements.btn_grabar.enabled = false
	}
	
	elements.btn_borrar.enabled = true
	if (scopes.usuario.vg_permiso_borrar == 0) {
		elements.btn_borrar.enabled = false
	}
	
	controller.focusFirstField()
}
