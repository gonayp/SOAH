
/**
 * @properties={typeid:24,uuid:"9ED6B35C-5D39-4A0B-997B-515225A3782F"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.core_puntos_d_venta)
}

/**
 * @properties={typeid:24,uuid:"4E1B1D87-4E65-43C6-BDB7-BDF98F0373B2"}
 */
function onActioGrabar() {
	databaseManager.saveData()
	application.showForm(forms.core_puntos_d_venta)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"808A6E78-83AD-47A7-929D-BFAFFA6C7885"}
 */
function onShow(firstShow, event) {
	
	
	elements.btn_guardar.enabled = true
	if (scopes.usuario.vg_permiso_modificar == 0) {
		elements.btn_guardar.enabled = false
	}
	
}
