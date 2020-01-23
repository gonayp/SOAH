
/**
 * @properties={typeid:24,uuid:"212FF032-95B5-4B4D-8A7F-6DBB83889846"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.deposito_main)
}


/**
 * @param firstShow
 *
 * @properties={typeid:24,uuid:"FF6E6FD5-2B3D-4725-9D4C-260DDC11B080"}
 */
function onShow(firstShow) {
	
	controller.focusFirstField()
	
	globals.vg_deposito	= foundset.deposito_id
	
	
}

/**
 * @properties={typeid:24,uuid:"24684B48-8656-44A3-823E-E84294E7C1BE"}
 */
function onActioGrabar() {
	
	if(deposito_nombre == null || deposito_nombre == ""){
		plugins.webnotificationsToastr.error("El nombre del depósito no puede estar vacio.","",scopes.globals.vg_toast_options)
		controller.focusField('f_nombre',true)
		return
	}
	
	databaseManager.saveData()
	
	application.showForm(forms.deposito_main)
	
}
