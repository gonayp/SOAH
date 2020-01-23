/**
 * @properties={typeid:24,uuid:"8E22D12E-F716-466B-B5CA-B33542F146C5"}
 */
function onActionVolver() {
	application.getWindow('Dialog2').hide()
	}

/**
 * @properties={typeid:24,uuid:"40170827-CF40-4647-86AB-005F70AD0D31"}
 * @AllowToRunInFind
 */
function filtrar(p_herramienta_id) {
	
	foundset.find()
	herramienta_id				= p_herramienta_id
	foundset.search()
	
	foundset.sort("herramienta_id, marca_id, modelo_id asc")
}



/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"AADBAE9F-E220-48CB-8F11-4A4701539B88"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	addHerramienta()

}

/**
 * @properties={typeid:24,uuid:"5B1A62A1-F383-4DCC-9BC2-FD35FC9DE074"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function addHerramienta() {
	forms.alquiler_nuevo_herramienta_asociada.filtrar(foundset.herramienta_asociada_id)
	var win_ = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win_.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win_.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win_.resizable = false
		win_.title= '';
		win_.show( forms.alquiler_nuevo_herramienta_asociada );
}
