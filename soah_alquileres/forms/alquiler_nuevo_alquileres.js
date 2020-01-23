
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"728A5A27-1952-4D1A-A7E0-93B32F9F54F4"}
 */
function onShow(firstShow, event) {
	if(forms.alquiler_nuevo.vl_cliente == null){
		foundset.clear()
	}
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"ADE1A131-C49F-49D3-8323-07E47CA1441B"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	forms.alquiler_detalle.foundset.loadRecords(foundset.comp_id)
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= '';
	win.show( forms.alquiler_detalle );

}
