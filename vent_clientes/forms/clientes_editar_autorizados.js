
/**
 * @properties={typeid:24,uuid:"7E557952-0422-45CC-AD7D-F40BDAB152B0"}
 */
function onActionNuevoAutorizado() {
	
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.clientes_autorizados_nuevo );
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"E896D7CD-C9CC-4571-89DD-08C64EB8DE40"}
 * @SuppressWarnings(wrongparameters)
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	if(scopes.usuario.vg_permiso_modificar == 1){
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= '';
	win.show( forms.clientes_autorizados_editar );
	}
	else
		plugins.webnotificationsToastr.warning("Sin permisos","",globals.vg_toast_options)

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"7CCF663A-6E70-478B-8C29-8433C08D927F"}
 */
function onShow(firstShow) {
	elements.btn_nuevo_autorizado.enabled = true
	if(scopes.usuario.vg_permiso_crear == 0){
		elements.btn_nuevo_autorizado.enabled = false
	}
}
