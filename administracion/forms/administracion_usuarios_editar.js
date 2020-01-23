/**
 * @properties={typeid:24,uuid:"3A726165-16CD-44FA-A06B-B1C9B3166A8A"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.administracion_usuarios)
}

/**
 * @properties={typeid:24,uuid:"00F4D134-29F6-447B-8EA1-3CD8F5619295"}
 */
function onActioGrabar() {
	
	databaseManager.saveData()
	application.showForm(forms.administracion_usuarios)
}

/**
 * @properties={typeid:24,uuid:"BBAFEB67-552F-4ABD-8C4F-47FC20F8E809"}
 */
function onActioBorrar() {
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar el usuario ' + foundset.usuario_login + '?', 'Si', 'No')
	if (PressedButton == 'Si') { //function
	
		//falta borrar tabla de permisos
		foundset.usuarios_to_core.deleteRecord()
		foundset.deleteRecord()
		databaseManager.saveData()
		application.showForm(forms.administracion_usuarios )
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"0411935A-55AD-4740-A074-FDCF159C6EA1"}
 */
function onShow(firstShow) {
	controller.focusFirstField()
	
	
}
