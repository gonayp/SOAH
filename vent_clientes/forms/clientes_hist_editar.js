

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"22AF1217-54E6-4A8E-9829-FF2F6354154D"}
 */
function onShow(firstShow) {
	foundset.loadRecords(forms.clientes_editar_historico.foundset.cliente_hist_id)
	
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
 * @properties={typeid:24,uuid:"EAEC5EDA-9398-4872-9991-445102E7F1C2"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"5B58A16E-90BE-48BA-83E1-50A81DFA2371"}
 */
function onActioGrabar() {
	
	
	databaseManager.saveData()
	
	application.getWindow('Dialog').hide()
	
}


