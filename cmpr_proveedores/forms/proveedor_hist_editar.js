/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"8F1821E8-58AD-43FB-8693-255BF4B1FFFF"}
 */
function onShow(firstShow) {
	foundset.loadRecords(forms.proveedor_editar_historico.foundset.proveedor_hist_id)
	
	elements.btn_1.enabled = true
	if(scopes.usuario.vg_permiso_modificar == 0){
		elements.btn_1.enabled = false
	}
	
	elements.f_estado.enabled = true
	elements.f_fecha.enabled = true
	elements.f_tipo.enabled = true
	if(hist_tipo == 4 || hist_tipo == 6 || hist_tipo == 7 || hist_tipo == 8){//si es un comprobante
		elements.f_estado.enabled = false
		elements.f_fecha.enabled = false
		elements.f_tipo.enabled = false
	}
}

/**
 * @properties={typeid:24,uuid:"B9DE414F-E462-44BC-86DE-5D8FA9D932FF"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"AAC1D902-7BFA-4A36-8208-A97ED80F261C"}
 */
function onActioGrabar() {
	
	
	databaseManager.saveData()
	
	application.getWindow('Dialog').hide()
	
}
