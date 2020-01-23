
/**
 * @properties={typeid:24,uuid:"5F7949B0-7CD8-4508-BB9B-868D5C9EB46B"}
 */
function onActionCargaManual() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.devolucion_nuevo_ventas_nuevo );
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"43D11C52-DE81-44D1-B644-2675B93BB903"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	
	
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= '';
	
	if(producto_id == null){
		win.show( forms.devolucion_nuevo_ventas_ver );
	}
	else{
		
		win.show( forms.devolucion_nuevo_ventas_ver_prod );
	}

}

/**
 * @properties={typeid:24,uuid:"2122F6D2-2035-4F11-9112-066092F36584"}
 */
function onActionNuevoEquipo() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.devolucion_nuevo_ventas_nuevo_prod );
}
