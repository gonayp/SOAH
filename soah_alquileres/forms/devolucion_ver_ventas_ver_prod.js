/**
 * @properties={typeid:24,uuid:"6FE0A6D5-C5FA-4C55-B9D3-271AC09C37FF"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"5FC6DD9D-882B-4311-AE90-CC7C21F7277C"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if (comp_prod_nombre == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de nombre.", "", globals.vg_toast_options)
		controller.focusField("f_nombre", true)
		return
	}
	
	if (comp_cantidad == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de cantidad.", "", globals.vg_toast_options)
		controller.focusField("f_cantidad", true)
		return
	}
	
	if (comp_precio == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de precio.", "", globals.vg_toast_options)
		controller.focusField("f_precio", true)
		return
	}
	
	databaseManager.saveData()
	
	forms.devolucion_ver.calculoTotales()
	
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"26036B5E-FBD2-44A1-AA23-807FEF8BDCF5"}
 */
function onShow(firstShow, event) {
	
	
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"952224E8-17C9-424B-B475-A0FDEB21FF5C"}
 */
function onActioBorrar() {
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar el producto  ' + foundset.comp_prod_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			forms.devolucion_ver.calculoTotales()
			application.getWindow('Dialog').hide()
		}
}
