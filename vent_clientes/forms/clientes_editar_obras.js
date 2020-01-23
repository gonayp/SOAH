
/**
 * @properties={typeid:24,uuid:"5D5B5164-5857-4B74-8734-DB54B6844E52"}
 */
function onActionNuevaObra() {
	
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.clientes_obras_nuevo );
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"6697F693-026F-4F0F-8375-503E43F1A60A"}
 * @SuppressWarnings(wrongparameters)
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	if(scopes.usuario.vg_permiso_modificar == 1){
		var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.clientes_obras_editar );
	}
	else
		plugins.webnotificationsToastr.warning("Sin permisos","",globals.vg_toast_options)

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"12A3FCB8-9DBE-4914-85A4-A0ACFF42F3B8"}
 */
function onShow(firstShow, event) {
	foundset.sort('obra_fecha_inicio desc')
	
	elements.btn_nueva_obra.enabled = true
	if(scopes.usuario.vg_permiso_crear == 0){
		elements.btn_nueva_obra.enabled = false
	}
}
