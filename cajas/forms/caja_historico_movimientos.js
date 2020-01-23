/**
 * @properties={typeid:24,uuid:"167E2289-FF2C-4332-86C3-FE57B52B6D09"}
 */
function onActionNuevo() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.caja_movimiento_manual_nuevo );
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"972CB418-A25F-454B-B920-25D963521A97"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	if(foundset.tipo == 3){
		
				
		var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
			win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
			win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
			win.resizable = false
			win.title= '';
			win.show( forms.caja_movimiento_manual_ver );
	}

}
