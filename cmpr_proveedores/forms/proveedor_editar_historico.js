/**
 * @properties={typeid:24,uuid:"83C531F0-0423-4FF6-8B7F-A361FC128AEB"}
 */
function onActionNuevaHistoria() {
	
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.proveedor_hist_nuevo );
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"72CBEE0B-B625-46A4-BB2A-5217B57CD16E"}
 * @SuppressWarnings(wrongparameters)
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	if(scopes.usuario.vg_permiso_modificar == 1){
		var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.proveedor_hist_editar );
	}
	else{
		plugins.webnotificationsToastr.warning("Sin permisos","",globals.vg_toast_options)
	}

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"300436C8-3737-455D-8698-77E4BE8FE224"}
 */
function onShow(firstShow) {
	
	foundset.sort('hist_fecha desc')
	
	elements.btn_nuevo_registro.enabled = true
	if(scopes.usuario.vg_permiso_crear == 0){
		elements.btn_nuevo_registro.enabled = false
	}
}
