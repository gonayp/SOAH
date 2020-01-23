/**
 *
 * @properties={typeid:24,uuid:"E362EDFD-AAB7-4B3D-8B76-D2D3A69D0716"}
 */
function onActionNuevoEquipo() {
	
	
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.devolucion_ver_buscar_herramienta );

}

/**
 *
 * @properties={typeid:24,uuid:"C972ADFF-3B56-4D61-8EB4-E55F734BA159"}
 */
function onActionNuevoCodBarras() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.devolucion_ver_add_herra );
}

/**
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 *
 * @properties={typeid:24,uuid:"DCAD1579-58D0-4407-8A02-FE0A94B7F8D7"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	if(scopes.usuario.vg_permiso_modificar == 1 && forms.devolucion_ver.foundset.comp_estado_id == 5){
	
		forms.devolucion_ver_ver_herramienta.foundset.loadRecords(foundset.comp_herramienta_id)
		
		var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
			win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
			win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
			win.resizable = false
			win.title= '';
			win.show( forms.devolucion_ver_ver_herramienta );
	}

}
