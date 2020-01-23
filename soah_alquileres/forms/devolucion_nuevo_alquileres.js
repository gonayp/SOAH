/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4B807A3C-3E77-4FE2-8DFC-44806474ADBA"}
 */
function onShow(firstShow, event) {
	if(forms.devolucion_nuevo.vl_cliente == null){
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
 * @properties={typeid:24,uuid:"0696B1DC-6A7A-422E-A548-AFFE27D373AF"}
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
