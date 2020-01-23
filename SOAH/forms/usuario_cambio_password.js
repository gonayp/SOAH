/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B9BC09E0-30FE-4DA9-9242-4EECCAA5F7ED"}
 */
var vl_pass_confir = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4AA30217-2259-43E2-B5B8-26A96B2C2D7E"}
 */
var vl_pas = null;


/**
 * @properties={typeid:24,uuid:"1B412DCE-BFDF-457F-8544-4E9F218D6DDE"}
 */
function onActionVolver() {
	vl_pas= null
	vl_pass_confir = null
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"8C877BF2-5D4C-4657-A141-C6B3431624B7"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(vl_pas == null || vl_pas == ""){
		plugins.webnotificationsToastr.error("Falta rellenar el campo de contraseña.","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	
	if(vl_pass_confir == null || vl_pass_confir == ""){
		plugins.webnotificationsToastr.error("Falta rellenar el campo de confirmar contraseña.","",globals.vg_toast_options)
		controller.focusField("f_confir",true)
		return
	}
	
	if(vl_pas != vl_pass_confir){
		plugins.webnotificationsToastr.error("Las contraseñas de los dos campos tienen que ser iguales.","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	
	/** @type {JSFoundSet<db:/gpp/usuarios>} */
	var fs_usuarios = databaseManager.getFoundSet('gpp', 'usuarios')
	
	fs_usuarios.loadRecords(scopes.usuario.vg_usuario_id)
	
	if(fs_usuarios.getSize() > 0){
		fs_usuarios.usuario_password	= vl_pas
		databaseManager.saveData()
	}
	
	onActionVolver()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"03057716-BB26-470E-91B4-4EBFB457D2FC"}
 */
function onShow(firstShow, event) {
	controller.focusFirstField()
}
