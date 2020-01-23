

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"464F5B4F-D613-4E67-BFE2-215D4CBB5C9B"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	
	if(columnindex == 8){
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.factura_devolucion_nuevo_herramientas_dias );
	}
	else{
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.factura_devolucion_nuevo_herramientas_ver );
	}

}
