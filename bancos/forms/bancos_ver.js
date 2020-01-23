

/**
 * @properties={typeid:24,uuid:"EF8F0204-5553-4761-A22C-7C0DB4FA3E1B"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.bancos_main)
}



/**
 * @properties={typeid:24,uuid:"52434915-F794-4977-BF36-A30BC730B359"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	if (banco_codigo == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de código.", "", globals.vg_toast_options)
		controller.focusField("f_codigo", true)
		return
	}
	
	if (banco_nombre == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de nombre.", "", globals.vg_toast_options)
		controller.focusField("f_nombre", true)
		return
	}
	
	
	databaseManager.saveData()
	
	
	application.showForm(forms.bancos_main)
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2BD30DA7-1DC4-4CD5-9B52-6322B0013C8B"}
 */
function onShow(firstShow, event) {
	

	
	elements.btn_nuevo.enabled = true
	if (scopes.usuario.vg_permiso_modificar == 0) {
		elements.btn_nuevo.enabled = false
	}
	

		
	controller.focusFirstField()
}

