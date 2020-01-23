
/**
 * @properties={typeid:24,uuid:"59741B77-19F4-448E-87CB-5A07E920D8E5"}
 */
function onActionNuevo() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.rep_reparacion_nuevo_fallas_nuevo );
}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given) or.
 * when the ENTER key is used then only the selected foundset index is given
 * Use the record to exactly match where the user clicked on
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"1F56F601-7689-4023-9A9F-17BB5221C76E"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	if(columnindex == 2){
		foundset.deleteRecord()
		databaseManager.saveData()
	}

}
