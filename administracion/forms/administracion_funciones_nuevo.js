/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4315873F-83FD-4044-8DD1-5A5C5A114C52"}
 */
var vl_nomenclatura = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FA174971-AD8A-4805-B66F-864F7D672226"}
 */
var vl_nombre = null;


/**
 * @properties={typeid:24,uuid:"8A3A7340-6D77-4F5D-A63F-0007A0F3B8EF"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"473C6719-0B94-4F12-A003-6F89522AE475"}
 */
function onShow(firstShow) {
	vl_nombre = null
	vl_nomenclatura = null
	controller.focusFirstField()
}

/**
 * 
 *
 * @properties={typeid:24,uuid:"A67460B5-CDA2-4246-A027-DA75DCCF881B"}
 */
function onActionGuardar() {
	
	if(vl_nombre == null || vl_nombre == ""){
		plugins.webnotificationsToastr.error("El nombre de la funcion no puede estar vacio.")
		return
	}
	if(vl_nomenclatura == null || vl_nomenclatura == ""){
		plugins.webnotificationsToastr.error("El nombre del formulario de referencia no puede estar vacio.")
		return
	}
	
	
	/** @type {JSFoundSet<db:/gpp/usuarios_formularios>} */
	var fs_funciones = databaseManager.getFoundSet('gpp', 'usuarios_formularios')
	fs_funciones.newRecord()
	fs_funciones.company_id					= scopes.usuario.vg_company_id
	fs_funciones.formulario_nombre			= vl_nombre
	fs_funciones.formulario_nomenclatura	= vl_nomenclatura
	databaseManager.saveData()
	
	/** @type {JSFoundSet<db:/gpp/usuarios_permisos>} */
	var fs_permisos = databaseManager.getFoundSet('gpp', 'usuarios_permisos')
	
	/** @type {JSFoundSet<db:/gpp/usuarios>} */
	var fs_usuarios = databaseManager.getFoundSet('gpp', 'usuarios')
	fs_usuarios.loadAllRecords()
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(fs_usuarios);
	for (var index = 1; index <= nRecordCount; index++) {
		var myUsuario = fs_usuarios.getRecord(index);
		fs_permisos.newRecord()
		fs_permisos.company_id				= scopes.usuario.vg_company_id
		fs_permisos.formulario_id			= fs_funciones.formulario_id
		fs_permisos.usuario_id				= myUsuario.usuario_id
		fs_permisos.prmiso_lectura			= 1
		fs_permisos.prmiso_crear			= 0
		fs_permisos.prmiso_modificar		= 0
		fs_permisos.prmiso_borrar			= 0
		fs_permisos.prmiso_imprimir			= 0
		fs_permisos.prmiso_admin			= 0
		databaseManager.saveData(fs_permisos)
	}
	
	
	onActionVolver()

}
