/**
 * @properties={typeid:24,uuid:"14862867-9376-40B0-815D-88016E9AE66A"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.proveedores_main)
}

/**
 * @properties={typeid:24,uuid:"F13399FD-748A-41A8-AD25-4D9DAB85E08D"}
 */
function onActioGrabar() {
	
	databaseManager.saveData()
	application.showForm(forms.proveedores_main)
}



/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"676A83FB-5720-41A3-A1CD-0E8F9A183E9C"}
 */
function onShow(firstShow) {
	//globals.asignarPermisos(controller.getName())
	if(scopes.usuario.vg_permiso_lectura == 0){
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.")
	}
	
	elements.btn_grabar.enabled = true
	if(scopes.usuario.vg_permiso_modificar == 0){
		elements.btn_grabar.enabled = false
	}
	
	
	
	
	
	forms.proveedor_hist_nuevo.vl_proveedor = proveedor_id
	
	
	//Adjuntos
	globals.vg_adjunto_clave = "proveedor"
	globals.vg_adjunto_clave_id	= foundset.proveedor_id
	
	
}
