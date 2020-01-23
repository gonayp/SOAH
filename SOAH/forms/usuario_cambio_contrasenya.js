/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A4725FF4-852A-4D3F-A9E9-30DA790A034D"}
 */
var vl_pass_anterior = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B3EDB5DA-E7B4-40C0-9E1F-6ACB42D2650F"}
 */
var vl_pass_confir = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E1C646F5-EA8E-48E2-A9FA-0412558D70A6"}
 */
var vl_pas = null;

/**
 * @properties={typeid:24,uuid:"AD6C59DF-A4BE-4709-8FBF-EE770BF0A83F"}
 */
function onActionVolver() {
	vl_pas= null
	vl_pass_confir = null
	application.getWindow('Dialog_pass').hide()
}

/**
 * @properties={typeid:24,uuid:"261E1C0F-4309-471A-AE8E-0600E582F4D0"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	/** @type {JSFoundSet<db:/gpp/usuarios>} */
	var fs_usuarios = databaseManager.getFoundSet('gpp', 'usuarios')
	
	fs_usuarios.loadRecords(scopes.usuario.vg_usuario_id)
	
	if(vl_pass_anterior == null || vl_pass_anterior == ""){
		plugins.webnotificationsToastr.error("Falta rellenar el campo de contraseña actual.","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	
	
	if(vl_pas == null || vl_pas == ""){
		plugins.webnotificationsToastr.error("Falta rellenar el campo de contraseña.","",globals.vg_toast_options)
		controller.focusField("f_pass",true)
		return
	}
	
	if(vl_pass_confir == null || vl_pass_confir == ""){
		plugins.webnotificationsToastr.error("Falta rellenar el campo de confirmar contraseña.","",globals.vg_toast_options)
		controller.focusField("f_confir",true)
		return
	}
	
	if(vl_pas != vl_pass_confir){
		plugins.webnotificationsToastr.error("Las contraseñas de los dos campos de nueva contraseña tienen que ser iguales.","",globals.vg_toast_options)
		controller.focusField("f_pass",true)
		return
	}
	
	if(fs_usuarios.getSize() > 0){
		if(fs_usuarios.usuario_password != vl_pass_anterior){
			plugins.webnotificationsToastr.error("El campo de contraseña actual no coincide con la contraseña actual.","",globals.vg_toast_options)
			controller.focusFirstField()
			return
		}
	
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
 * @properties={typeid:24,uuid:"980E44AD-7215-45C2-A4A5-BB0BED0BB148"}
 */
function onShow(firstShow, event) {
	controller.focusFirstField()
}
