/**
 * @properties={typeid:24,uuid:"51AB8960-40BD-4D26-978E-E020BB837EFD"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"C196062F-E0F3-473C-9A31-699E90E2802D"}
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
	
	producto_total = producto_cantidad * producto_precio
	
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
 * @properties={typeid:24,uuid:"CFC420CB-588E-4E93-9016-0775DB2AA5C6"}
 */
function onShow(firstShow, event) {
	
	
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"F2D81F61-3F75-4161-AD9E-8F09F7E0FEDE"}
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
