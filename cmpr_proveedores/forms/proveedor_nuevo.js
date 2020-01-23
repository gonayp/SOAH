/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1B6D1270-063B-48F7-A33A-FD780BC9808A",variableType:4}
 */
var vl_tipo_afip = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D1C4A26A-5CA7-4772-99BB-C645966E8675"}
 */
var vl_doc_num = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CF23EE66-EB77-44FE-B650-0733B7FB01F6",variableType:4}
 */
var vl_doc_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2C32017A-79B1-4279-9371-C6D62E240AF3"}
 */
var vl_observacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"48A451BF-F416-40E0-9867-AC8E9D097290"}
 */
var vl_fax = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"795EEA57-57B9-4FB5-8609-4F23F5F066A5"}
 */
var vl_web = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4FC3D45D-81F2-43FB-904F-A24074D0B1BC"}
 */
var vl_mail = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B27F7689-54BF-4DCE-A679-6DA726582252"}
 */
var vl_celular = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1AB01BB1-F545-46B1-AA28-8A912E904A68"}
 */
var vl_telefono = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8FCC90B5-923B-482F-AEE1-89D389AC2206",variableType:4}
 */
var vl_pais = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AD452C5C-C9A3-49D8-B269-9E792C18BD23",variableType:4}
 */
var vl_provincia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F47F3C64-2940-4262-80BE-15A794538496",variableType:4}
 */
var vl_cod_postal = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9A5DB0F5-55F0-4A51-8CA5-E875076A944A"}
 */
var vl_direccion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8C116CF7-FD40-4BC6-978E-EF187422DA31"}
 */
var vl_nombre = null;



/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0DA5D58B-66F9-4D00-B124-64D3037E7108",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"5D7C5B77-2580-4239-BBBC-D31A7FD4DB3B"}
 */
function onActionVolver() {
	application.showForm(forms.proveedores_main)
}

/**
 * @properties={typeid:24,uuid:"3B5738D1-085E-48AF-BA27-F196203F20E9"}
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
		fs_core.company_id			= scopes.usuario.vg_company_id
		databaseManager.saveData(fs_core)
		
		
		/** @type {JSFoundSet<db:/gpp/cmpr_proveedores>} */
		var fs_proveedores = databaseManager.getFoundSet('gpp', 'cmpr_proveedores')
		fs_proveedores.newRecord()
		
		fs_proveedores.proveedor_codigo 		= vl_codigo
		fs_proveedores.proveedor_estado			= 1
		fs_proveedores.proveedor_observacion	= vl_observacion
		fs_proveedores.company_id				= scopes.usuario.vg_company_id
		fs_proveedores.core_id					= fs_core.core_id
		databaseManager.saveData(fs_proveedores)
		
		inicializarVariables()
		forms.proveedores_main.filtrar()
		application.showForm(forms.proveedores_main)
		
	}
}

/**
 * @return 
 * @properties={typeid:24,uuid:"220F4626-022B-4E34-B662-D3D783AB0A20"}
 * @AllowToRunInFind
 */
function validarDatos(){
	
	var validado = 1
	var mensaje = ""
	var numerador = 1
	
	if (vl_codigo == null){
		validado = 0
		mensaje += numerador +". El Código del proveedor no puede estar vacio. "+"\n"
		numerador++
	}
	else{
		/** @type {JSFoundSet<db:/gpp/cmpr_proveedores>} */
		var fs_proveedores = databaseManager.getFoundSet('gpp', 'cmpr_proveedores')
		fs_proveedores.find()
		fs_proveedores.proveedor_codigo = vl_codigo
		fs_proveedores.search()
		
		if (fs_proveedores.getSize() > 0){
			validado = 0
			mensaje += numerador +". El Código del proveedor ya existe. "+"\n"
			numerador++
		}
	}
	
	if(vl_nombre == null || vl_nombre == ""){
		validado = 0
		mensaje += numerador +". El Nombre del proveedor no puede estar vacio. "+"\n"
		numerador++
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
 * @properties={typeid:24,uuid:"E090F7AA-E455-43CF-8D1B-C035F64BF37D"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow) {
	
	globals.asignarPermisos(controller.getName())
	if(scopes.usuario.vg_permiso_lectura == 0 || scopes.usuario.vg_permiso_crear == 0){
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.","",globals.vg_toast_options)
		return
	}
	
	//inicializarVariables()
	generarProximoCodigo()
	controller.focusFirstField()
	
	
}

/**
 * @properties={typeid:24,uuid:"C76DC3EB-5010-40DA-A0A5-EC53F65994B8"}
 */
function generarProximoCodigo(){
	vl_codigo = 1
	/** @type {JSFoundSet<db:/gpp/cmpr_proveedores>} */
	var fs_proveedores = databaseManager.getFoundSet('gpp', 'cmpr_proveedores')
	fs_proveedores.loadAllRecords()
	fs_proveedores.sort('cliente_codigo desc')
	if(fs_proveedores.getSize() > 0)
		vl_codigo = fs_proveedores.proveedor_codigo +1
}

/**
 * @properties={typeid:24,uuid:"B031D62C-DBF1-4D26-959E-11874B817117"}
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
	vl_codigo = null;
	vl_observacion = null
}

/**
 * @properties={typeid:24,uuid:"B27724AA-5C0D-4975-82F0-2E77A24DCCE9"}
 */
function onActionCancelar() {
	inicializarVariables()
	onActionVolver()
}
