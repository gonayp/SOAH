/**
 * @properties={typeid:24,uuid:"1A62E7C1-DF0F-4321-9F36-3E13484D432C"}
 */
function onActionVolver() {
	databaseManager.saveData()
	application.showForm(forms.prod_categorias)
}

/**
 * @properties={typeid:24,uuid:"8E9AC6C1-4ABE-47D3-802C-F95E6B16EB2F"}
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
	application.showForm(forms.prod_categorias)
}

/**
 * @properties={typeid:24,uuid:"D52E8B51-B79A-42CA-B51F-556003804EFC"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioBorrar() {
	
	if(prod_categoria_to_prod_productos.getSize() > 0){
		plugins.webnotificationsToastr.error("Hay productos que usan esta categoría, no se puede eliminar.","",globals.vg_toast_options)
		return
	}
	
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar la categoía ' + categoria_nombre + '?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			foundset.deleteRecord()
			databaseManager.saveData()
			application.showForm(forms.prod_categorias )
		}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"78A36F79-3C5F-492B-96E6-450A602A8628"}
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
