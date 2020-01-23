
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7B398F6E-1B08-4460-A591-6112C2C3439D"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"5AA5FB52-F64B-4341-A68B-BC9B9545988A"}
 */
function onActionNuevo() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.core_adjuntos_nuevo );
}


/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"4167732A-2C96-45C0-854E-CB150A50F48F"}
 */
function filtrar(){
	foundset.find()
	foundset.adjunto_clave = globals.vg_adjunto_clave
	foundset.adjunto_clave_id = globals.vg_adjunto_clave_id
	foundset.search()
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"624BE891-B1E8-45A5-A533-2D7E6E5D4DA7"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.core_adjuntos_ver );

}
