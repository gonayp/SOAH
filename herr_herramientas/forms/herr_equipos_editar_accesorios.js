
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"347605ED-3077-4496-8830-37CEDBC2DF22"}
 */
function onActionNuevoAccesorio(event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.herr_equipos_accesorio_nuevo );

}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"34AC26A6-E9EE-4558-AB97-0D5029EDD42B"}
 * @SuppressWarnings(wrongparameters)
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	
	if (scopes.usuario.vg_permiso_modificar == 0) {
		plugins.webnotificationsToastr.warning("Sin permisos para editar","",globals.vg_toast_options)
		return
	}
	
	else{
		var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.herr_equipos_accesorios_editar );
	}

}
