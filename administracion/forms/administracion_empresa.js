
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"75F1BE92-52B6-48D3-9A67-D11259C7E9F7"}
 */
function onActionVolver(event) {
	application.showForm(forms.administracion_main)

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C06FE038-655E-4CE9-B8B3-152004A9D5B8"}
 */
function onActionGrabar(event) {
	databaseManager.saveData()
	application.showForm(forms.administracion_main)

}
