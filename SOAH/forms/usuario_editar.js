/**
 * @properties={typeid:24,uuid:"9B191AF6-4C4A-41CF-8564-DE0ED406905D"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"FA598458-E02B-4D90-8E13-080C75673CF5"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(usuario_login == null || usuario_login == ""){
		plugins.webnotificationsToastr.error("El usuario de login no puede estar vacio.","",globals.vg_toast_options)
		return
	}
	
	databaseManager.saveData()
	application.getWindow('Dialog').hide()
}



/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"98D70689-5190-4EDC-AB20-5F75BD3D4EA4"}
 */
function onShow(firstShow) {
	controller.focusFirstField()
	
	foundset.loadRecords(scopes.usuario.vg_usuario_id)
	
}

/**
 * @properties={typeid:24,uuid:"D470031E-6EF5-4681-AF4C-136F723EFBE9"}
 */
function onActionResetearPassw() {
	var win = application.createWindow("Dialog_pass", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.usuario_cambio_contrasenya );
}
