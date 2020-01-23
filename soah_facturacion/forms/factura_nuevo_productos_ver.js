/**
 * @properties={typeid:24,uuid:"E44E0319-CB88-406B-9B14-D1B445BCB6CB"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"9CD9E61F-AD65-4826-BAC3-99F8F1D2EC6D"}
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
	
	forms.factura_nuevo.calculoTotales()
	
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EAFB0906-E6F2-4A2C-B001-AAEA4E0993E8"}
 */
function onShow(firstShow, event) {
	
	
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"6AF09C93-3F5C-448A-ADC5-52173B21BD01"}
 */
function onActioBorrar() {
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar el producto  ' + foundset.producto_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			forms.factura_nuevo.calculoTotales()
			application.getWindow('Dialog').hide()
		}
}
