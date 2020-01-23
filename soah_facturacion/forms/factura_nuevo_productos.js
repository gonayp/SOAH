/**
 * @properties={typeid:24,uuid:"2C58F54C-9AF9-4903-B2E2-69F9FBAC4390"}
 */
function onActionCargaManual() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.factura_nuevo_productos_nuevo );
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"16A1CAF3-012E-49D8-BB8A-1B2B8F637F4A"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	
	
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= '';
	
	if(producto_id == null){
		win.show( forms.factura_nuevo_productos_ver );
	}
	else{
		
		win.show( forms.factura_nuevo_productos_ver_prod );
	}

}

/**
 * @properties={typeid:24,uuid:"550F94A7-AA35-45E5-BEEA-A95677123487"}
 */
function onActionNuevoEquipo() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.factura_nuevo_productos_nuevo_prod );
}
