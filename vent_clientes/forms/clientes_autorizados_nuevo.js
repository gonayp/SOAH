/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B3E1EEA1-305A-4783-9163-C9F2BC08B78B",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"12E4C77E-B47B-4349-A0B5-AACB7A41798C",variableType:4}
 */
var vl_cod_postal = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"04CFF15F-904A-492A-8D14-8601DE16DE03"}
 */
var vl_mail = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BBDB576B-8920-4CEF-8409-04667D69F846"}
 */
var vl_celular = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"91844A2E-4F8A-4F32-B12B-8BC1A6BDE5CF"}
 */
var vl_doc_num = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"36160BB0-7123-4355-B5A6-3119961B164C",variableType:4}
 */
var vl_doc_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"59010F6F-629C-4BA9-AD89-58B8805A3F7B"}
 */
var vl_telefono = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"021938A8-B083-4731-B27B-A1B0F90F3332",variableType:4}
 */
var vl_estado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AFE72A81-CAED-47ED-A5BA-F8FC45EE379C"}
 */
var vl_observacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1CA06E49-0EB5-4AD8-BB2D-4C66DC471CDE"}
 */
var vl_nombre = null;


/**
 * @properties={typeid:24,uuid:"250712D6-905C-48F8-81B5-B5ED46F0B35D"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"9A82626D-5EC4-4303-91E8-D327A4642ED2"}
 */
function onShow(firstShow) {
	vl_doc_num = null;
	vl_doc_id = null;
	vl_telefono = null
	vl_estado = 1;
	vl_observacion = null;
	vl_nombre = null;
}

/**
 * @properties={typeid:24,uuid:"6A60BAF3-2B85-4901-A92E-20D57EF3DD4F"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	if(vl_nombre == null || vl_nombre == ""){
		plugins.webnotificationsToastr.error("El campo de nombre no puede estar vacio.", "",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	
	/** @type {JSFoundSet<db:/gpp/core>} */
	var fs_core = databaseManager.getFoundSet('gpp', 'core')
	fs_core.newRecord()
	fs_core.company_id						= scopes.usuario.vg_company_id
	fs_core.core_celular					= vl_celular
	fs_core.core_mail						= vl_mail
	fs_core.core_nombre						= vl_nombre
	fs_core.core_num_doc					= vl_doc_num
	fs_core.core_telefono					= vl_telefono
	fs_core.tipo_doc_id						= vl_doc_id
	fs_core.cod_postal_id					= vl_cod_postal
	databaseManager.saveData(fs_core)
	
	
	/** @type {JSFoundSet<db:/gpp/vent_autorizados>} */
	var fs_autorizados = databaseManager.getFoundSet('gpp', 'vent_autorizados')
	fs_autorizados.newRecord()
	fs_autorizados.autorizado_estado		= vl_estado
	fs_autorizados.autorizado_observacion	= vl_observacion
	fs_autorizados.cliente_id				= vl_cliente
	fs_autorizados.company_id				= scopes.usuario.vg_company_id
	fs_autorizados.core_id					= fs_core.core_id
	databaseManager.saveData()
	
	onActionVolver()
}

