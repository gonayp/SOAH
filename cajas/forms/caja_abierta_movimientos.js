
/**
 * @properties={typeid:24,uuid:"D6D201AD-68A1-4F20-825E-371E87108655"}
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
 * @properties={typeid:24,uuid:"9FF66E55-5C86-493C-B32F-03CA1627548E"}
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

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"441B4CFA-188E-4349-BA5F-B65E1FFD3FB3"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	foundset.find()
	foundset.tipo = " 1 || 2 || 3"
	foundset.search()
}
