

/**
 *
 * @properties={typeid:24,uuid:"43C7B302-1CDA-442F-9080-E168EBCD9827"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"93BBF666-B7A7-4AA2-9F23-8F99F693A9C5"}
 */
function onActionGrabar(event) {
	
	if (producto_id == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de producto.", "", globals.vg_toast_options)
		controller.focusField("f_producto", true)
		return
	}
	
	if (deposito_id == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de deposito.", "", globals.vg_toast_options)
		controller.focusField("f_deposito", true)
		return
	}
	
	
	databaseManager.saveData()
	
	application.getWindow('Dialog').hide()

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BDDB1992-439E-4295-8A25-1CC233CF3685"}
 */
function onShow(firstShow, event) {

	
	
	controller.focusFirstField()
}
