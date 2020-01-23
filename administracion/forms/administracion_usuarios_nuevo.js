/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6D9F5186-40A9-4C02-ADFE-1D5CB97AD6DA",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"913FE296-E2E3-431D-99DF-C47E6D18B41B"}
 */
var vl_login = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CADAB12D-BA08-4133-AA55-451FA4E10995",variableType:4}
 */
var vl_tipo_afip = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F2538D4A-8A24-4309-BE0B-66F42D5AC9C7"}
 */
var vl_doc_num = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"94C620CE-7379-490C-BDA8-D78E65A2829B",variableType:4}
 */
var vl_doc_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A3E1BD73-39F1-4400-BD00-0F2668D9EB6A"}
 */
var vl_observacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F28C9C5B-9B77-4296-9629-9AA33325C7D4"}
 */
var vl_fax = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5810C02C-465B-46A2-8422-15F55692E904"}
 */
var vl_web = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1DF63269-C461-4BE7-BD86-BC1302765F51"}
 */
var vl_mail = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9689616A-DEEC-4D0A-83B2-D1CA6FE07535"}
 */
var vl_celular = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"05F9736B-06FC-4CB9-8539-7227075DF510"}
 */
var vl_telefono = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E3E67BD0-3D0B-4162-8630-6A61DFB8FD02",variableType:4}
 */
var vl_pais = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A0C73695-FB32-494D-A7A8-FD4BAA30BDCE",variableType:4}
 */
var vl_provincia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A6A481CE-C64C-4FA2-865A-BCC117BD27B4",variableType:4}
 */
var vl_cod_postal = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"47479A1D-9188-4440-97B2-999DA2CA0B5A"}
 */
var vl_direccion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F997EA3D-12D5-4C74-A914-71673D4B6C4C"}
 */
var vl_nombre = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"185ADF52-4F46-4E14-B9D9-890CB1F2CCFB"}
 */
var cl_razon_social = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6A439F58-3F89-416B-9495-573332A8AA3F",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"543F428A-C10E-4428-A9B8-D6796A63C11A"}
 */
function onActionVolver() {
	application.showForm(forms.administracion_usuarios)
}

/**
 * @properties={typeid:24,uuid:"87C80BAD-533E-492D-9A7E-EAC0501CA953"}
 */
function onActioGuardar() {
	if(validarDatos()){
		
		/** @type {JSFoundSet<db:/gpp/core>} */
		var fs_core = databaseManager.getFoundSet('gpp', 'core')
		fs_core.newRecord()
		fs_core.core_fax 			= vl_fax 
		fs_core.core_web			= vl_web 
		fs_core.core_mail			= vl_mail 
		fs_core.core_celular 		= vl_celular 
		fs_core.core_telefono		= vl_telefono 
		fs_core.cod_postal_id		= vl_cod_postal
		fs_core.core_direccion		= vl_direccion 
		fs_core.core_nombre			= vl_nombre 
		fs_core.core_razon_social	= cl_razon_social 
		fs_core.company_id			= scopes.usuario.vg_company_id
		databaseManager.saveData(fs_core)
		
		
		/** @type {JSFoundSet<db:/gpp/usuarios>} */
		var fs_usuarios = databaseManager.getFoundSet('gpp', 'usuarios')
		fs_usuarios.newRecord()
		
		fs_usuarios.usuario_estado		= 1
		fs_usuarios.company_id			= scopes.usuario.vg_company_id
		fs_usuarios.core_id				= fs_core.core_id
		fs_usuarios.usuario_login		= vl_login
		fs_usuarios.usuario_password	= "123456"
		fs_usuarios.usuario_super		= 0
		fs_usuarios.usuario_tipo		= vl_tipo
		fs_usuarios.usuario_pv			= 1
		databaseManager.saveData(fs_usuarios)
		
		
		//Otorgar permisos basicos
		/** @type {JSFoundSet<db:/gpp/usuarios_formularios>} */
		var fs_usuarios_formmularios = databaseManager.getFoundSet('gpp', 'usuarios_formularios')
		
		/** @type {JSFoundSet<db:/gpp/usuarios_permisos>} */
		var fs_usuarios_permisos = databaseManager.getFoundSet('gpp', 'usuarios_permisos')
		
		fs_usuarios_formmularios.loadAllRecords()
		var nRecordCount = 0
		nRecordCount = databaseManager.getFoundSetCount(fs_usuarios_formmularios);
		for (var index = 1; index <= nRecordCount; index++) {
			var myFormulario = fs_usuarios_formmularios.getRecord(index);
			fs_usuarios_permisos.newRecord()
			fs_usuarios_permisos.company_id				= scopes.usuario.vg_company_id
			fs_usuarios_permisos.formulario_id			= myFormulario.formulario_id
			fs_usuarios_permisos.usuario_id				= fs_usuarios.usuario_id
			fs_usuarios_permisos.prmiso_admin			= 0
			fs_usuarios_permisos.prmiso_crear			= 0
			fs_usuarios_permisos.prmiso_modificar		= 0
			fs_usuarios_permisos.prmiso_borrar			= 0
			fs_usuarios_permisos.prmiso_imprimir		= 0
			fs_usuarios_permisos.prmiso_lectura			= 1
			databaseManager.saveData(fs_usuarios_permisos)
		}
		
		
		inicializarVariables()
		forms.administracion_usuarios.filtrar()
		application.showForm(forms.administracion_usuarios)
		
	}
}

/**
 * @return 
 * @properties={typeid:24,uuid:"30E1ECCF-018B-4BA0-9818-49C1AA368421"}
 * @AllowToRunInFind
 */
function validarDatos(){
	
	var validado = 1
	var mensaje = ""
	var numerador = 1
	
	
	if(vl_nombre == null || vl_nombre == ""){
		validado = 0
		mensaje += numerador +". El Nombre del usuario no puede estar vacio. "+"\n"
		numerador++
	}
	

	
	if (vl_login == null || vl_login == ""){
		validado = 0
		mensaje += numerador +". El usuario para hacer login no puede estar vacio. "+"\n"
		numerador++
	}
	else{
		/** @type {JSFoundSet<db:/gpp/usuarios>} */
		var fs_usuarios = databaseManager.getFoundSet('gpp', 'usuarios')
		fs_usuarios.find()
		fs_usuarios.usuario_login = vl_login
		fs_usuarios.search()
		
		if (fs_usuarios.getSize() > 0){
			validado = 0
			mensaje += numerador +". El login de usuario ya existe. "+"\n"
			numerador++
		}
	}
	
	
	
	if(validado == 0)
		plugins.dialogs.showErrorDialog("Verificar Campos",mensaje)
	
	return validado
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"F0B82778-4B4D-4CD7-9531-30C5CD808E78"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow) {
	
	if(firstShow)
		inicializarVariables()
		
	controller.focusFirstField()
	
	
}


/**
 * @properties={typeid:24,uuid:"DEF61B10-0B8A-45A6-B33B-798D754C920C"}
 */
function inicializarVariables(){
	vl_fax = null;
	vl_web = null;
	vl_mail = null;
	vl_celular = null;
	vl_telefono = null;
	vl_pais = null;
	vl_provincia = null;
	vl_cod_postal = null;
	vl_direccion = null;
	vl_nombre = null;
	cl_razon_social = null;
	vl_codigo = null;
	vl_observacion = null
	vl_login		= null
	vl_tipo			= 1
}

/**
 * @properties={typeid:24,uuid:"8A0A0FA7-9D47-40CA-BED2-76E2C12519C4"}
 */
function onActionCancelar() {
	inicializarVariables()
	onActionVolver()
}
