
/**
 * @properties={typeid:24,uuid:"9A869CD7-CAD3-4440-BE2C-248B6616D74A"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"94F852EF-8DE5-443F-8B35-861F7AD878D8"}
 */
function onShow(firstShow) {
	foundset.loadRecords(forms.clientes_editar_autorizados.foundset.autorizado_id)
	
	elements.btn_1.enabled = true
	if(scopes.usuario.vg_permiso_modificar == 0){
		elements.btn_1.enabled = false
	}
	
	elements.btn_borrar.enabled = true
	if(scopes.usuario.vg_permiso_borrar == 0){
		elements.btn_borrar.enabled = false
	}
}

/**
 * @properties={typeid:24,uuid:"7D0F5E2F-6EC7-4754-A091-EC763B578C38"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	if(foundset.vent_autorizados_to_core.core_nombre == null || foundset.vent_autorizados_to_core.core_nombre == ""){
		plugins.webnotificationsToastr.error("El campo de nombre no puede estar vacio.", "",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	
	databaseManager.saveData()
	
	application.getWindow('Dialog').hide()
}

/**
 *
 * @properties={typeid:24,uuid:"6CE39CE9-1B9B-4BA9-8419-AE1E2CFA15F4"}
 */
function onActionBorrar() {
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar el autorizado  ' + foundset.vent_autorizados_to_core.core_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			application.getWindow('Dialog').hide()
		}

}
