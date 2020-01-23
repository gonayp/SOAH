

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3452DBBB-1D18-45FC-89AB-83B5681210FB",variableType:4}
 */
var vg_punto_venta = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8DC9F33B-5F79-4C95-9DA3-90F412D3C5B9",variableType:4}
 */
var vg_permiso_administracion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5ECDCA1F-7D3E-43CA-9939-6AC8E781FF6F",variableType:4}
 */
var vg_permiso_imprimir = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"78BABFDC-8091-4F58-BEBF-18F95DE92CEE",variableType:4}
 */
var vg_permiso_borrar = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"08221972-21CC-4EAB-B334-B1444D5DE806",variableType:4}
 */
var vg_permiso_modificar = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6234A844-E451-4169-A871-01F5AD7CA5E3",variableType:4}
 */
var vg_permiso_crear = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"87FD3D6E-4286-4D6B-9C79-21C3CA7B6694",variableType:4}
 */
var vg_permiso_lectura = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BC3A7722-C583-4B0F-A5CB-47F50EC9E1C5",variableType:4}
 */
var vg_super_usuario = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E3E22CB8-A8E4-41C0-98F0-14438F0C5E65",variableType:4}
 */
var vg_company_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2E149C02-EB42-4647-A518-C1B63721ECD1",variableType:4}
 */
var vg_usuario_id = null;

/**
 * 
 * @param {String} user
 * @param {String} pass
 *
 * @properties={typeid:24,uuid:"6D4A12E6-FA4D-42FE-9E13-DA059D4EB6F6"}
 * @AllowToRunInFind
 */
function crearUsuario(user,pass){
	
	/** @type {JSFoundSet<db:/gpp/usuarios>} */
	var fs_usuarios = databaseManager.getFoundSet('gpp', 'usuarios')
	
	fs_usuarios.find()
	fs_usuarios.usuario_login		= user
	fs_usuarios.usuario_password	= pass
	fs_usuarios.search()
	
	if(fs_usuarios.getSize() > 0){
		
		vg_usuario_id 		= fs_usuarios.usuario_id
		vg_company_id 		= fs_usuarios.company_id
		vg_super_usuario	= fs_usuarios.usuario_super
		vg_punto_venta		= fs_usuarios.usuario_pv
		
		
		
		databaseManager.addTableFilterParam('gpp', null, 'company_id', '=', vg_company_id)
	}
	
	

	
	
}
