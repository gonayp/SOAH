
/**
 * @properties={typeid:24,uuid:"A42C4BEF-1798-46D2-845E-01CDCE4AA174"}
 */
function onActionVolver() {
	databaseManager.saveData()
	application.showForm(forms.herr_accesorios)
}

/**
 * @properties={typeid:24,uuid:"C99C0427-55B3-42D8-AC41-90FB638F81AA"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioBorrar() {
	
	if(foundset.herr_accesorios_to_herr_accesorios_d_equipo.getSize() > 0){
		plugins.webnotificationsToastr.error("No se puede borrar porque este accesorio esta asignado a almenos un equipo","",globals.vg_toast_options)
		return
	}
	
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar el accesorio ' + foundset.accesorio_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			application.showForm(forms.herr_accesorios )
		}
}

/**
 * @properties={typeid:24,uuid:"FEC7DA91-F0A8-4637-8DEE-5CF5FD6614C0"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(accesorio_nombre == null || accesorio_nombre == ""){
		plugins.webnotificationsToastr.error("EL nombre del accesorio no puede estar vacio","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	
	databaseManager.saveData()
	application.showForm(forms.herr_accesorios)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7425E69F-E4EC-4A58-A9F9-F66BEED88869"}
 */
function onShow(firstShow, event) {

	
	elements.btn_grabar.enabled = true
	if (scopes.usuario.vg_permiso_modificar == 0) {
		elements.btn_grabar.enabled = false
	}
	
	elements.btn_borrar.enabled = true
	if (scopes.usuario.vg_permiso_borrar == 0) {
		elements.btn_borrar.enabled = false
	}
	
	controller.focusFirstField()
}
