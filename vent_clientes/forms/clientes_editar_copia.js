
/**
 * @properties={typeid:24,uuid:"7A00482F-CA49-4631-AD43-8A0CBC08C333"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.clientes_main)
}

/**
 * @properties={typeid:24,uuid:"014F9485-C900-4E5F-8429-AC1B2D96C315"}
 */
function onActioGrabar() {
	facturar_a_cliente_id = forms.clientes_editar_datos.vl_facturar_a_cliente_id
	databaseManager.saveData()
	application.showForm(forms.clientes_main)
}

/**
 * @properties={typeid:24,uuid:"D33D6841-7281-43C1-91DB-F8ED83F29D60"}
 */
function onActioBorrar() {
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar el cliente ' + foundset.cliente_codigo + '?', 'Si', 'No')
	if (PressedButton == 'Si') { //function
	
		foundset.deleteRecord()
		databaseManager.saveData()
		application.showForm(forms.clientes_main )
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"5E3637C2-8B33-4B2A-9BC6-46AD95068A0E"}
 */
function onShow(firstShow) {
	//globals.asignarPermisos(controller.getName())
	if(scopes.usuario.vg_permiso_lectura == 0){
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.")
	}
	
	elements.btn_grabar.enabled = true
	if(scopes.usuario.vg_permiso_modificar == 0){
		elements.btn_grabar.enabled = false
	}
	
	elements.btn_borrar.enabled = true
	if(scopes.usuario.vg_permiso_borrar == 0){
		elements.btn_borrar.enabled = false
	}
	
}
