
/**
 * @properties={typeid:24,uuid:"9A0918CD-3529-4D68-A089-BA45085951BA"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.administracion_funciones)
}

/**
 * @properties={typeid:24,uuid:"43EF316D-9A42-49F2-82CE-A93436B51866"}
 */
function onActionGuardar() {
	databaseManager.saveData()
	application.showForm(forms.administracion_funciones)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"7526082D-D87C-4A71-AF2E-A525BB02FBF6"}
 */
function onShow(firstShow) {
	if(scopes.usuario.vg_super_usuario != 1){
		elements.f_nombre.enabled = false
		elements.f_nomenclatura.enabled = false
		elements.btn_borrar.visible = false
	}
}

/**
 * @properties={typeid:24,uuid:"F11DE06F-BA26-4844-BB68-169C22B752B0"}
 */
function onActionBorrar() {
	
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar la función ' + foundset.formulario_nombre + '?', 'Si', 'No')
	if (PressedButton == 'Si') { //function
	
		foundset.usuarios_formularios_to_usuarios_permisos.deleteAllRecords()
		foundset.deleteRecord()
		databaseManager.saveData()
		application.showForm(forms.administracion_funciones)
	}
}
