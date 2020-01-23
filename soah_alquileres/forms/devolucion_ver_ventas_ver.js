
/**
 * @properties={typeid:24,uuid:"6068A150-CD4F-4197-833B-0A3F07932C09"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"92407123-15BA-4CFB-AAF8-00914578B87F"}
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
 * @properties={typeid:24,uuid:"3FF6EB51-5062-43D6-94CD-2FEDAC1794F0"}
 */
function onShow(firstShow, event) {
	
	
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"7D725498-5725-4FD6-BF9F-9917C71F1174"}
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
