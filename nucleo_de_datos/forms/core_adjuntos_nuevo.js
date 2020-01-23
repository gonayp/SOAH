/**
 * @properties={typeid:35,uuid:"2E6B6BB3-AB3D-4673-9A14-C43C3FBE9261",variableType:-4}
 */
var vl_dato = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"06114078-C4EF-4119-B2F3-1A74758ABF9B"}
 */
var vl_observaciones = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5B46B612-C237-469A-9B36-4A9F8E9BD3D4"}
 */
var vl_nombre = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1F249B1A-8231-4FF3-92DB-C771936EF046"}
 */
function onShow(firstShow, event) {
	vl_nombre = null
	vl_observaciones = null
	vl_dato = null
}

/**
 * @properties={typeid:24,uuid:"82116EF1-719B-4A61-BE65-FD1C209D6474"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"B89B1E2A-3FDC-478E-B58A-7314B25FB7C0"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(vl_nombre == null || vl_nombre == ""){
		plugins.webnotificationsToastr.error("Falta un nombre para el adjunto","",globals.vg_toast_options)
		return
	}
	
	if(vl_dato == null ){
		plugins.webnotificationsToastr.error("Falta cargar un adjunto","",globals.vg_toast_options)
		return
	}
	
	/** @type {JSFoundSet<db:/gpp/core_adjuntos>} */
	var fs_core_adjuntos = databaseManager.getFoundSet('gpp', 'core_adjuntos')
	
	fs_core_adjuntos.newRecord()
	fs_core_adjuntos.adjunto_clave			= globals.vg_adjunto_clave
	fs_core_adjuntos.adjunto_clave_id		= globals.vg_adjunto_clave_id
	fs_core_adjuntos.company_id				= scopes.usuario.vg_company_id
	fs_core_adjuntos.adjunto_dato			= vl_dato
	fs_core_adjuntos.adjunto_fecha			= new Date
	fs_core_adjuntos.adjunto_nombre			= vl_nombre
	fs_core_adjuntos.adjunto_observacion	= vl_observaciones
	
	databaseManager.saveData()
	
	forms.core_adjuntos.filtrar()
	
	onActionVolver()
}
