
/**
 * @properties={typeid:24,uuid:"A3AC494E-9256-4C57-9E4A-AA941AD0A8B5"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"2DA4D790-7FD6-4B84-8F23-0CBCFE87AE2C"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(obra_codigo == null){
		plugins.webnotificationsToastr.error("Falta el campo código.","",globals.vg_toast_options)
		controller.focusFirstField()
	}
	databaseManager.saveData()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"8E491D9A-04F5-4690-8546-DAB3452A909A"}
 */
function onActioBorrar() {
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar  ' + foundset.obra_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			application.getWindow('Dialog').hide()
		}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"8F7EB572-4377-4A77-A9F2-B8E58AE16B0B"}
 */
function onShow(firstShow) {
	foundset.loadRecords(forms.clientes_editar_obras.foundset.obra_id)
	
	elements.btn_grabar.enabled = true
	if(scopes.usuario.vg_permiso_modificar == 0){
		elements.btn_grabar.enabled = false
	}
	elements.btn_borrar.enabled = true
	if(scopes.usuario.vg_permiso_borrar == 0){
		elements.btn_borrar.enabled = false
	}
}
