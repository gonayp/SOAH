
/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"243BCCD6-87F0-4701-A8BD-20F784208DCA"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	
	if(scopes.usuario.vg_permiso_administracion == 1){
	
		forms.core_codigos_d_comprobante_datos.foundset.loadRecords(foundset.codigo_id)
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.core_codigos_d_comprobante_datos );
	}

}
