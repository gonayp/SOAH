/**
 * @properties={typeid:24,uuid:"DA81D559-AA08-433F-B031-4D21A401D2CA"}
 */
function onActionNuevo() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.rep_reparacion_ver_fallas_nuevo );
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
 * @properties={typeid:24,uuid:"F8E2780B-578F-4CEE-A11B-F5CD7DD0B4D3"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	if(columnindex == 2){
		var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar  \"' + foundset.rep_fallas_reparacion_to_rep_fallas.falla_nombre + '\"?', 'Si', 'No')
			if (PressedButton == 'Si') { //function
			
				foundset.deleteRecord()
				databaseManager.saveData()
			}
	}

}
