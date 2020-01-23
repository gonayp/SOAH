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
