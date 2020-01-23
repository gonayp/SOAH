/**
 * @properties={typeid:24,uuid:"C6CFF69E-C42E-4ABA-9DC8-55B2D52A63CF"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"3C4F31B3-F889-4F63-A870-A38DBB3CDE79"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if (foundset.producto_nombre == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de nombre.", "", globals.vg_toast_options)
		controller.focusField("f_nombre", true)
		return
	}
	
	if (producto_cantidad == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de cantidad.", "", globals.vg_toast_options)
		controller.focusField("f_cantidad", true)
		return
	}
	
	if (producto_precio == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de precio.", "", globals.vg_toast_options)
		controller.focusField("f_precio", true)
		return
	}
	
	databaseManager.saveData()
	
	forms.comprobante_nuevo.calculoTotales()
	
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"98142221-FD2C-4232-BF48-709CF76F6A4F"}
 */
function onShow(firstShow, event) {
	
	
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"E05D1816-1F62-4E65-88AE-7DC037DA6E76"}
 */
function onActioBorrar() {
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar el producto  ' + foundset.producto_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			forms.comprobante_nuevo.calculoTotales()
			application.getWindow('Dialog').hide()
		}
}
