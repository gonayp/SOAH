/**
 *
 * @properties={typeid:24,uuid:"D93C5DA0-94CE-4A33-8F9E-27A9B3009410"}
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
 * @properties={typeid:24,uuid:"479982F5-84A4-462A-A36F-38D1189780D7"}
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
 * @properties={typeid:24,uuid:"E9B8608B-FEB2-438A-BADF-AF91BA4C1C59"}
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
