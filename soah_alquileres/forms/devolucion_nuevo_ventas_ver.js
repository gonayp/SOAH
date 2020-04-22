/**
 * @properties={typeid:24,uuid:"1F8B47BA-25FF-4496-8CB4-60C6EE8F3AD3"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"7079B7BA-FDC3-420F-9A01-8DCB2A4BCFD2"}
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
	
	foundset.producto_total = producto_cantidad * producto_precio
	
	databaseManager.saveData()
	
	forms.devolucion_nuevo.calculoTotales()
	
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B7BF223-C380-4485-9845-1E3495C3B84D"}
 */
function onShow(firstShow, event) {
	
	
	controller.focusField("f_cantidad",true)
}

/**
 * @properties={typeid:24,uuid:"5E86349B-DF18-4FC9-9795-8AC69840E136"}
 */
function onActioBorrar() {
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar el producto  ' + foundset.producto_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			forms.devolucion_nuevo.calculoTotales()
			application.getWindow('Dialog').hide()
		}
}
