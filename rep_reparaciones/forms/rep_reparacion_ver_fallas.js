/**
 * @properties={typeid:24,uuid:"B9470957-9AC1-42BD-8323-61FB2F7CE5E4"}
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
 * @properties={typeid:24,uuid:"0AC85E75-BA97-46F6-85B5-827D31B91E90"}
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
