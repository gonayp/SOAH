/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"972A2878-B928-43A9-8004-08F755A8F242"}
 */
function onShow(firstShow) {
	//foundset.loadRecords(forms.herr_equipos_editar_historico.foundset.)
	
	elements.btn_1.enabled = true
	if(scopes.usuario.vg_permiso_modificar == 0){
		elements.btn_1.enabled = false
	}
	
	elements.btn_alquiler.enabled = false
	elements.btn_reparacion.enabled = false
	if(comp_id != null){//Si esta alquilado
		elements.btn_alquiler.enabled = true
	}
	if(reparacion_id != null){//Si esta en reparacion
		elements.btn_reparacion.enabled = true
	}
	
}

/**
 * @properties={typeid:24,uuid:"83AC63B0-1B24-4456-B3AA-AEBB70AED7EA"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"9DBC31ED-21AB-435D-8694-4AC08BECFB76"}
 */
function onActioGrabar() {
	
	
	databaseManager.saveData()
	
	application.getWindow('Dialog').hide()
	
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"CB117A3E-BEF5-4983-A46D-CE62437CA32D"}
 */
function onActionVerAlquiler(event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= '';
	win.show( forms.herr_equipos_editar_datos_alqu );

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"307AC470-9686-43ED-B664-CF04D48BD9E3"}
 */
function onActionVerReparacion(event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= '';
	win.show( 'rep_reparacion_detalle' );

}
