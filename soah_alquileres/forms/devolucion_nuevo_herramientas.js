/**
 *
 * @properties={typeid:24,uuid:"5A0BC939-62C2-4FC2-A426-7CA847DDA48D"}
 * @SuppressWarnings(wrongparameters)
 */
function onActionNuevoEquipo() {
	if(forms.devolucion_nuevo.vl_cliente == null){
		plugins.webnotificationsToastr.error("Primero hay que seleccionar un cliente.","",globals.vg_toast_options)
		return
	}
	
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.devolucion_nuevo_buscar_herramienta );

}

/**
 *
 * @properties={typeid:24,uuid:"856CC68B-0C2A-4564-A297-E747AB992D1F"}
 */
function onActionNuevoCodBarras() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.devolucion_nuevo_add_herra );
}

/**
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 *
 * @properties={typeid:24,uuid:"ADC37C1B-4DCE-4DF1-9696-6284C160CFE3"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	
	if(columnindex == 10){
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.devolucion_nuevo_ver_herramienta_comentario );
	}
	else{
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.devolucion_nuevo_ver_herramienta );
	}
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
 * @properties={typeid:24,uuid:"4BA5703F-2B02-4526-9579-91529D9CEB03"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	if(columnindex == 13){
		if(calc_seleccionado == 1) calc_seleccionado = 0
		else calc_seleccionado = 1
	}

}
