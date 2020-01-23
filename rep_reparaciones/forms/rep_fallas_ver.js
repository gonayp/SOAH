/**
 * @properties={typeid:24,uuid:"06A9A442-686F-4D4E-9793-752C8D3A127D"}
 */
function onActionVolver() {
	application.showForm(forms.rep_fallas)
}

/**
 * @properties={typeid:24,uuid:"7959569B-4F04-4269-94C9-128AD0498037"}
 */
function onActioGrabar() {
	
	if (falla_codigo == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de codigo.", "", globals.vg_toast_options)
		controller.focusField("f_codigo", true)
		return
	}
	
	if (falla_nombre == null || falla_nombre == "") {
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
 * @properties={typeid:24,uuid:"D4B6E46F-EBB1-4542-AEBF-7D2C9749754C"}
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
 * @properties={typeid:24,uuid:"E106B9B7-C108-4243-B5D6-8ABA88EC26CA"}
 */
function onActioBorrar() {
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar  ' + foundset.falla_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			onActionVolver()
		}
}
