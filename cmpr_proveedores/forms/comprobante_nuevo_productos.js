/**
 * @properties={typeid:24,uuid:"DC67093D-4242-44ED-AD4F-892512A1E3D1"}
 */
function onActionCargaManual() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.comprobante_nuevo_productos_nuevo );
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"4B6ACBEC-CADD-4C83-84F1-E9E9D4372B4E"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	
	
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= '';
	
	
	win.show( forms.comprobante_nuevo_productos_ver );
	
	

}

