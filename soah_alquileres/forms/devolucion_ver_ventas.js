/**
 * @properties={typeid:24,uuid:"8DAE1307-B8B4-441D-AD0B-ECBBCE448A66"}
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
 * @properties={typeid:24,uuid:"A98E5C98-0500-403C-85EA-653B00FC1DF6"}
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
 * @properties={typeid:24,uuid:"048502DE-91FF-49CA-A46B-FFC0A5ED1180"}
 */
function onActionNuevoEquipo() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.devolucion_ver_ventas_nuevo_prod );
}
