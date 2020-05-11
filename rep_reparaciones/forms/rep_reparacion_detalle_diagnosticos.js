/**
 * @properties={typeid:24,uuid:"9B3CA272-A194-4CD8-9D43-114CBBD7366B"}
 */
function onActionNuevo() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.rep_reparacion_ver_diagnostico_nuevo );
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
 * @properties={typeid:24,uuid:"18F59E1D-027D-4230-BE7F-B49D05A0CC7A"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	if(columnindex == 2){
		var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar  \"' + foundset.concepto_observacion + '\"?', 'Si', 'No')
			if (PressedButton == 'Si') { //function
			
				foundset.deleteRecord()
				databaseManager.saveData()
			}
	}

}
