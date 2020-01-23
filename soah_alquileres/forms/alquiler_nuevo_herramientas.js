
/**
 *
 * @properties={typeid:24,uuid:"C6C715AB-6ED5-44FB-9E3A-B2B0DDAB0387"}
 */
function onActionNuevoEquipo() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.alquiler_nuevo_buscar_herramienta );

}

/**
 *
 * @properties={typeid:24,uuid:"2168BC9E-97C1-41C7-B2C8-E7CCA5810A42"}
 */
function onActionNuevoCodBarras() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.alquiler_nuevo_add_herra );
}

/**
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 *
 * @properties={typeid:24,uuid:"68A69B32-E7C4-4C89-8F6F-22F4BEA1B02D"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.alquiler_nuevo_ver_herramienta );

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
 * @properties={typeid:24,uuid:"1EE931C4-014D-4E2E-91E9-E756B6947AFD"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	if(columnindex == 0 && herramientas_asociadas == 1){
		if(databaseManager.hasRecords(foundset.mem_vent_comprobante_equipos_to_herr_equipo.herr_equipo_to_herr_herramientas.herr_herramientas_to_herr_herramientas_asociadas)){
			if(foundset.mem_vent_comprobante_equipos_to_herr_equipo.herr_equipo_to_herr_herramientas.herr_herramientas_to_herr_herramientas_asociadas.getSize() > 1){
				forms.alquiler_nuevo_herramienta_asociadas.filtrar(foundset.mem_vent_comprobante_equipos_to_herr_equipo.herramienta_id)
				var win = application.createWindow("Dialog2", JSWindow.MODAL_DIALOG);
					win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
					win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
					win.resizable = false
					win.title= '';
					win.show( forms.alquiler_nuevo_herramienta_asociadas );
			}
			else{//Si solo tiene una herramienta asociada la añadimos  directamente
				forms.alquiler_nuevo_herramienta_asociada.filtrar(foundset.mem_vent_comprobante_equipos_to_herr_equipo.herr_equipo_to_herr_herramientas.herr_herramientas_to_herr_herramientas_asociadas.herramienta_asociada_id)
				var win_ = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
					win_.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
					win_.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
					win_.resizable = false
					win_.title= '';
					win_.show( forms.alquiler_nuevo_herramienta_asociada );
			}
		}
	}

}
