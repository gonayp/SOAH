/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D6A81815-73A0-4CE1-AF03-75ACC9D3432F",variableType:4}
 */
var vl_tipo_afip = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"97998E0B-3CBA-4252-B3E1-6C9053D29262"}
 */
var vl_doc_num = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A026C7A5-823A-4F11-B477-62BDDB96BF15",variableType:4}
 */
var vl_doc_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C2BEBAE8-3F21-4F24-8CEE-1B653D883B12"}
 */
var vl_observacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E8854271-8CA5-4272-B024-9310E1F9345F"}
 */
var vl_fax = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3337220D-A4A7-4939-B4C5-7A8C29A3260E"}
 */
var vl_web = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"35E66FA6-DBF7-42F2-B0FC-702165151E91"}
 */
var vl_mail = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"59E5CA46-6174-4923-B7FF-991D442E0946"}
 */
var vl_celular = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FBECAA35-88E3-47FC-87CC-CE74DCE04E08"}
 */
var vl_telefono = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"95140247-302C-486E-80AC-8A90648B2882",variableType:4}
 */
var vl_pais = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F2A59150-85FA-4CB0-92CF-AFA403E861DB",variableType:4}
 */
var vl_provincia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4761DBBF-E980-462F-9F9F-DB5435C7410A",variableType:4}
 */
var vl_cod_postal = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FE5BE378-EB37-48B4-B933-B1EC8AF382AF"}
 */
var vl_direccion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"21F0D10A-DCF9-47AE-8D0B-FE45DCBF3D65"}
 */
var vl_nombre = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"55B22638-8302-42D4-B619-6B046F299679"}
 */
var cl_razon_social = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"57BF08F4-212C-4354-ACB8-87DE46748DAC",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"AF2B59AF-A6B7-436E-85CE-D6D568276B5D"}
 */
function onActionVolver() {
	application.showForm(forms.clientes_main)
}

/**
 * @properties={typeid:24,uuid:"27ECF436-6423-47CB-92C0-78127733E596"}
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
		
		
		/** @type {JSFoundSet<db:/gpp/vent_clientes>} */
		var fs_clientes = databaseManager.getFoundSet('gpp', 'vent_clientes')
		fs_clientes.newRecord()
		
		fs_clientes.cliente_codigo 		= vl_codigo
		fs_clientes.cliente_estado		= 1
		fs_clientes.cliente_f_g			= new Date()
		fs_clientes.cliente_factura_pendiente	= 0
		fs_clientes.cliente_facturacion_mensual = 0
		fs_clientes.cliente_o_g			= scopes.usuario.vg_usuario_id
		fs_clientes.cliente_observacion	= vl_observacion
		fs_clientes.company_id			= scopes.usuario.vg_company_id
		fs_clientes.core_id				= fs_core.core_id
		databaseManager.saveData(fs_clientes)
		
		inicializarVariables()
		forms.clientes_main.filtrar()
		application.showForm(forms.clientes_main)
		
	}
}

/**
 * @return 
 * @properties={typeid:24,uuid:"4C0C9B93-42B4-4384-A7F2-29D4CA9E4240"}
 * @AllowToRunInFind
 */
function validarDatos(){
	
	var validado = 1
	var mensaje = ""
	var numerador = 1
	
	if (vl_codigo == null){
		validado = 0
		mensaje += numerador +". El Código del cliente no puede estar vacio. "+"\n"
		numerador++
	}
	else{
		/** @type {JSFoundSet<db:/gpp/vent_clientes>} */
		var fs_clientes = databaseManager.getFoundSet('gpp', 'vent_clientes')
		fs_clientes.find()
		fs_clientes.cliente_codigo = vl_codigo
		fs_clientes.search()
		
		if (fs_clientes.getSize() > 0){
			validado = 0
			mensaje += numerador +". El Código del cliente ya existe. "+"\n"
			numerador++
		}
	}
	if(cl_razon_social == null || cl_razon_social == ""){
		validado = 0
		mensaje += numerador +". La Razon social del cliente no puede estar vacia ."+"\n"
		numerador++
	}
	if(vl_nombre == null || vl_nombre == ""){
		validado = 0
		mensaje += numerador +". El Nombre del cliente no puede estar vacio. "+"\n"
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
 * @properties={typeid:24,uuid:"09C989D5-1480-44AC-8710-7ED713D28F62"}
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
 * @properties={typeid:24,uuid:"7A499A25-E628-4F0E-9668-FEBFA0A4D9E4"}
 */
function generarProximoCodigo(){
	vl_codigo = 1
	/** @type {JSFoundSet<db:/gpp/vent_clientes>} */
	var fs_clientes = databaseManager.getFoundSet('gpp', 'vent_clientes')
	fs_clientes.loadAllRecords()
	fs_clientes.sort('cliente_codigo desc')
	if(fs_clientes.getSize() > 0)
		vl_codigo = fs_clientes.cliente_codigo +1
}

/**
 * @properties={typeid:24,uuid:"33D257A9-74EC-4D99-AD5A-C9D1DA7F48BF"}
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
}

/**
 * @properties={typeid:24,uuid:"537CB199-5EE0-4616-91F3-6EC207EAF729"}
 */
function onActionCancelar() {
	inicializarVariables()
	onActionVolver()
}
