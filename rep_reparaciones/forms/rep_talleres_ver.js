

/**
 * @properties={typeid:24,uuid:"7AB0B539-5641-4851-8AE5-0ABA165FB247"}
 */
function onActionVolver() {
	application.showForm(forms.rep_talleres)
}



/**
 * @properties={typeid:24,uuid:"E4BDF3DA-937E-4764-B2E0-982F6C2EB0E9"}
 */
function onActioGrabar() {
	
	if (taller_codigo == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de codigo.", "", globals.vg_toast_options)
		controller.focusField("f_codigo", true)
		return
	}
	
	if (taller_nombre == null || taller_nombre == "") {
		plugins.webnotificationsToastr.error("Falta completar el campo de nombre.", "", globals.vg_toast_options)
		controller.focusField("f_nombre", true)
		return
	}
	
	
	databaseManager.saveData()

	
	onActionVolver()
	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E2701C14-9A40-46D7-AAA3-9E04115141B8"}
 */
function onShow(firstShow, event) {
	
	
	
	elements.btn_grabar.enabled = true
	if (scopes.usuario.vg_permiso_modificar == 0) {
		elements.btn_grabar.enabled = false
	}
	
	elements.btn_birrar.enabled = true
	if (scopes.usuario.vg_permiso_borrar == 0) {
		elements.btn_birrar.enabled = false
	}
	
	controller.focusField("f_nombre", true)
	
	
}


/**
 * @properties={typeid:24,uuid:"12037713-A486-46A3-AF70-FB8119E42B6E"}
 */
function onActioBorrar() {
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar  ' + foundset.taller_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			onActionVolver()
		}
}
