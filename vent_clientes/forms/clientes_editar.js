/**
 * @properties={typeid:24,uuid:"67085922-49C1-4CF8-B77F-70FA47F1ECC3"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.clientes_main)
}

/**
 * @properties={typeid:24,uuid:"973A6634-C9CB-4B20-8CEB-677428746C2B"}
 */
function onActioGrabar() {
	facturar_a_cliente_id = forms.clientes_editar_datos.vl_facturar_a_cliente_id
	databaseManager.saveData()
	application.showForm(forms.clientes_main)
}

/**
 * @properties={typeid:24,uuid:"8D418949-F96B-4622-A630-C15E3DDE4538"}
 */
function onActioBorrar() {
	
	
	
	
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar el cliente ' + foundset.cliente_codigo + '?', 'Si', 'No')
	if (PressedButton == 'Si') { //function
	
		foundset.vent_clientes_to_core.deleteRecord()
		
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
 * @properties={typeid:24,uuid:"E84DF958-FB09-4B20-931C-E5B85173E7D2"}
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
	
	
	forms.clientes_autorizados_nuevo.vl_cliente = cliente_id
	forms.clientes_hist_nuevo.vl_cliente = cliente_id
	forms.clientes_obras_nuevo .vl_cliente = cliente_id
	
	
	//Adjuntos
	globals.vg_adjunto_clave = "cliente"
	globals.vg_adjunto_clave_id	= foundset.cliente_id
	
	
}



