/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"79B20040-54AF-4528-A891-07FA518DFCDE"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	
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
 * @properties={typeid:24,uuid:"E7786F0F-E6C2-4D85-B024-0EC9826FE0B2"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	if(columnindex == 5){
		forms.factura_devolucion_nuevo_forma_pago.vl_cheques -= fp_importe
		forms.factura_devolucion_nuevo_forma_pago.onDataChangePagos()
		
		foundset.deleteRecord()
		
	}

}
