
/**
 * @properties={typeid:24,uuid:"F0186A73-228A-4F71-A6AB-6CE4213BF808"}
 */
function onActionVolver() {
	databaseManager.saveData()
	application.showForm(forms.herr_categorias)
}

/**
 * @properties={typeid:24,uuid:"8805ED6F-656C-4B97-B0FA-59B7B54EC1F7"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {

	if(categoria_codigo == null){
		plugins.webnotificationsToastr.error("Falta el código de la categoría.","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	if(categoria_nombre == null || categoria_nombre == ""){
		plugins.webnotificationsToastr.error("Falta el nombre de la categoría.","",globals.vg_toast_options)
		controller.focusField("f_nombre",true)
		return
	}
	
	
	databaseManager.saveData()
	application.showForm(forms.herr_categorias)
}

/**
 * @properties={typeid:24,uuid:"3660284D-3F7E-4DAD-B544-036961746723"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioBorrar() {
	
	if(herr_categoria_to_herr_herramientas.getSize() > 0){
		plugins.webnotificationsToastr.error("Hay herramientas que usan esta categoría, no se puede eliminar.","",globals.vg_toast_options)
		return
	}
	
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar la categoía ' + categoria_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			application.showForm(forms.herr_categorias )
		}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E395D890-16C5-4155-B3E4-AB6936130D2A"}
 */
function onShow(firstShow, event) {
	
	elements.btn_grabar.enabled = true
	if (scopes.usuario.vg_permiso_modificar == 0) {
		elements.btn_grabar.enabled = false
	}
	
	elements.btn_borrar.enabled = true
	if (scopes.usuario.vg_permiso_borrar == 0) {
		elements.btn_borrar.enabled = false
	}
	
	controller.focusFirstField()
}
