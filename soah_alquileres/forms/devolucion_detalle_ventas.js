/**
 * @properties={typeid:24,uuid:"89FE177F-7CA4-474C-91A4-3FECB3D9D48C"}
 */
function onActionCargaManual() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.devolucion_ver_ventas_nuevo );
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"2CDA77F3-CCB5-4A30-9676-E158C3C9AC11"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	if(scopes.usuario.vg_permiso_modificar == 1 && forms.devolucion_ver.foundset.comp_estado_id == 5){
		if(producto_id == null){
			forms.devolucion_ver_ventas_ver.foundset.loadRecords(foundset.comp_producto_id)
			var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
				win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
				win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
				win.resizable = false
				win.title= '';
				win.show( forms.devolucion_ver_ventas_ver );
		}
		else{
			forms.devolucion_ver_ventas_ver_prod.foundset.loadRecords(foundset.comp_producto_id)
			var win_ = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
				win_.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
				win_.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
				win_.resizable = false
				win_.title= '';
				win_.show( forms.devolucion_ver_ventas_ver_prod );
		}
	}

}

/**
 * @properties={typeid:24,uuid:"B718D5D2-825E-4EE2-9C54-33CCF6FE2C76"}
 */
function onActionNuevoEquipo() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.devolucion_ver_ventas_nuevo_prod );
}
