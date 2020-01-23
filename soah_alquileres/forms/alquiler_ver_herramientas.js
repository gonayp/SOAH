/**
 *
 * @properties={typeid:24,uuid:"61F1A16D-91B0-4AF4-AC91-FF51FACF4ABC"}
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
 * @properties={typeid:24,uuid:"679D0B8F-7CC4-4A79-9436-20BAA4865079"}
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
 * @properties={typeid:24,uuid:"CABA2D0F-48A3-44D9-ABB1-06950FA28729"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	forms.alquiler_ver_ver_herramienta.foundset.loadRecords(foundset.comp_herramienta_id)
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.alquiler_ver_ver_herramienta );

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"772C3C21-F1BA-4C9E-BB59-5FD94322D6F4"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	foundset.loadAllRecords()
	
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} */
	var fs_herramientas = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myHerramienta = foundset.getRecord(index);
		fs_herramientas.find()
		fs_herramientas.equipo_id = myHerramienta.equipo_id
		fs_herramientas.vent_comprobante_herramientas_to_vent_comprobantes.comp_codigo = 2
		fs_herramientas.comp_id_padre = forms.alquiler_ver.foundset.comp_id
		fs_herramientas.search()
		if(databaseManager.hasRecords(fs_herramientas)){
			myHerramienta.calc_comprobante_devolucion = fs_herramientas.vent_comprobante_herramientas_to_vent_comprobantes.calc_num_compr_sin_codig + "    " + 
														utils.dateFormat(fs_herramientas.vent_comprobante_herramientas_to_vent_comprobantes.comp_fecha_emision, 'dd/MM/yy')
		}
	}
	
	
	
	
}


