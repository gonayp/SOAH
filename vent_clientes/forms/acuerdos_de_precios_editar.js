
/**
 * @properties={typeid:24,uuid:"81BB3BB6-2FE9-4998-8E9A-D5BD8CA9506E"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.acuerdos_de_precios)
}

/**
 * @properties={typeid:24,uuid:"81B7A815-DB12-4687-B51A-C94CD61EE56F"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(acuerdo_precios_nombre == null || acuerdo_precios_nombre== ""){
		plugins.webnotificationsToastr.error("Falta el nombre del acuerdo de precios.","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	if(acuerdo_precios_valor == null && acuerdo_precios_porcentaje == null){
		plugins.webnotificationsToastr.error("Falta un valor o porcentaje para el acuerdo de precios.","",globals.vg_toast_options)
		controller.focusField("f_valor",true)
		return
	}
	
	databaseManager.saveData()
	application.showForm(forms.acuerdos_de_precios)
}

/**
 *
 * @properties={typeid:24,uuid:"3E3DDF8B-ADF3-44EE-93F7-26093326E866"}
 */
function habilitarCampos() {
	elements.f_porcentaje.enabled = false
	elements.f_valor.enabled = true
	if(acuerdo_precios_tipo == 1){
		elements.f_porcentaje.enabled = true
		elements.f_valor.enabled = false
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FF466D9E-7C52-48F4-9A12-DA9176E1D99B"}
 */
function onShow(firstShow, event) {
	habilitarCampos()
	controller.focusFirstField()
	
	
	elements.btn_guardar.enabled = false
	if(scopes.usuario.vg_permiso_modificar == 1){
		elements.btn_guardar.enabled = true
	}
	
	elements.btn_borrar.enabled = false
	if(scopes.usuario.vg_permiso_borrar == 1){
		elements.btn_borrar.enabled = true
	}
}

/**
 * @properties={typeid:24,uuid:"5A426348-9415-497C-BB07-D19C541BC687"}
 */
function onActioBorrar() {
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar el acuerdo de precios ' + acuerdo_precios_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			application.showForm(forms.acuerdos_de_precios )
		}
}
