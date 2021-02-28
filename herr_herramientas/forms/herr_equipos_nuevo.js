/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"52A6CCE5-1CD2-458C-A358-DF979105892D",variableType:4}
 */
var vl_num_repetidos = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DEFE7A09-BF96-4420-8044-7DB67FC61140"}
 */
var vl_form_padre = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"3786319A-4515-4156-8CAE-2026844C0C78",variableType:93}
 */
var vl_fecha_compra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"802F7E39-DF20-4F24-8D27-CBC8F06FC69D",variableType:8}
 */
var vl_precio_base = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A172FD5C-999B-446B-A6B3-463375C2D9C7"}
 */
var vl_descripcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7410EF81-ACEA-47E6-822F-B2AED0FFE824"}
 */
var vl_caracteristicas = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A9CA61A5-06DB-432B-ADA8-F303BB6EB93A"}
 */
var vl_num_motor = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0314B552-BDD8-4CBE-9B99-0FA1F9D05886"}
 */
var vl_observaciones = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"35956714-52D1-40C3-B157-43B60D27A4A6",variableType:4}
 */
var vl_tipo = 1;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"AFAC00B4-6D16-4980-9033-C5F9FA5D1043"}
 */
var vl_num_serie = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"C3EB20A6-3CAB-4251-93F7-F789F9954822",variableType:4}
 */
var vl_alimentacion = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"8E3DA1DB-D8C2-48AE-95F0-8C2DABBF39CB"}
 */
var vl_cod_barras = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"A4820B4E-38AB-4AA8-B892-49BB5DD19610"}
 */
var vl_cod_alterna = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"B75A2BA3-A502-4C03-B9B3-67737AEE2239",variableType:4}
 */
var vl_modelo = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"FC730EE2-8853-46C5-881E-5287F7282391",variableType:4}
 */
var vl_marca = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"1EA638A1-2B35-4A24-A0A2-95E159E962F6",variableType:4}
 */
var vl_herramienta = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"83A14418-9C7E-4C50-9C4B-163424CFE64D"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"7F4B909D-A50F-4C43-BD81-8C40D767B2E0",variableType:8}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"FF5F9813-8E46-430D-A922-26B79749B24B"}
 */
function onActionVolver() {
	application.showForm(vl_form_padre)
}

/**
 * @properties={typeid:24,uuid:"EFB53FFE-A55B-43EE-8B49-A65A068EC53D"}
 */
function onActionCancelar() {
	limpiarVariables()
	onActionVolver()
}

/**
 * @properties={typeid:24,uuid:"CCF33140-CA04-4A65-B387-3E1E10351304"}
 */
function limpiarVariables(){
	vl_precio_base = null;
	vl_descripcion = null;
	vl_caracteristicas = null;
	vl_num_motor = null;
	vl_observaciones = null;
	vl_tipo = 1;
	vl_num_serie = null;
	vl_alimentacion = null;
	vl_cod_barras = null;
	vl_cod_alterna = null;
	vl_modelo = null;
	vl_marca = null;
	vl_herramienta = null;
	vl_nombre = null;
	vl_codigo = null;
	vl_num_repetidos = 1;
	vl_fecha_compra = application.getServerTimeStamp()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E04327C0-51EA-4DAF-A118-5CAC71B881DC"}
 */
function onShow(firstShow, event) {
	if(firstShow)
		vl_fecha_compra = application.getServerTimeStamp()
	
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"AC052069-A72B-499D-8E9C-E3B612F08C19"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(vl_herramienta == null){
		plugins.webnotificationsToastr.error("Falta seleccionar una tipo de herramienta.","",globals.vg_toast_options)
		controller.focusField("f_herramienta",true)
		return
	}
	
	if(vl_marca == null){
		plugins.webnotificationsToastr.error("Falta seleccionar una marca.","",globals.vg_toast_options)
		controller.focusField("f_marca",true)
		return
	}
	
	if(vl_modelo == null){
		plugins.webnotificationsToastr.error("Falta seleccionar un modelo.","",globals.vg_toast_options)
		controller.focusField("f_modelo",true)
		return
	}
	
	if(vl_codigo == null){
		plugins.webnotificationsToastr.error("Falta el código del equipo.","",globals.vg_toast_options)
		controller.focusField("f_codigo",true)
		return
	}
	
	if(vl_num_repetidos > 1){//crear varios equipos del mismo tipo
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres añadir  ' + vl_num_repetidos + ' equipos del mismo tipo?', 'Si', 'No')
		if (PressedButton == 'No') return
		
	
	for(var i = 0; i < vl_num_repetidos; i++){
		
		if(vl_cod_barras != null)
			GenerarCodBarras()//genera codigo de barras con nuevo codigo de equipo
		grabar()
		vl_codigo += 1
		}
	
	}
	else{//solo crear un equipo
		grabar()
	}
	
	
	
	
	
	limpiarVariables()
	
	//forms.herr_equipos_editar.foundset.loadRecords(fs_herr_equipo.equipo_id)
	
	application.showForm(vl_form_padre)
}


/**
 * @properties={typeid:24,uuid:"3669D4DF-DFB4-4BC4-A0DB-3CC00E6A8AF4"}
 */
function grabar(){
	
	forms.herr_equipos_editar.foundset.newRecord()
	forms.herr_equipos_editar.foundset.company_id					= scopes.usuario.vg_company_id
	forms.herr_equipos_editar.foundset.alimentacion_id				= vl_alimentacion
	forms.herr_equipos_editar.foundset.equipo_caracteristicas		= vl_caracteristicas
	forms.herr_equipos_editar.foundset.equipo_cod_alternativo		= vl_cod_alterna
	forms.herr_equipos_editar.foundset.equipo_cod_barras			= vl_cod_barras
	forms.herr_equipos_editar.foundset.equipo_codigo				= vl_codigo
	forms.herr_equipos_editar.foundset.equipo_descripcion			= vl_descripcion
	forms.herr_equipos_editar.foundset.equipo_estado				= 1
	forms.herr_equipos_editar.foundset.equipo_fecha_alta			= vl_fecha_compra
	forms.herr_equipos_editar.foundset.equipo_nombre				= vl_nombre
	forms.herr_equipos_editar.foundset.equipo_num_motor				= vl_num_motor
	forms.herr_equipos_editar.foundset.equipo_num_serie				= vl_num_serie
	forms.herr_equipos_editar.foundset.equipo_observaciones			= vl_observaciones
	forms.herr_equipos_editar.foundset.equipo_precio_base			= vl_precio_base
	forms.herr_equipos_editar.foundset.equipo_tipo					= vl_tipo
	forms.herr_equipos_editar.foundset.herramienta_id				= vl_herramienta
	forms.herr_equipos_editar.foundset.marca_id						= vl_marca
	forms.herr_equipos_editar.foundset.modelo_id					= vl_modelo
	
	
	databaseManager.saveData()
}


/**
 * @properties={typeid:24,uuid:"607443DF-7426-4B98-9624-CB80D52E9E45"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGenerarCodBarras() {
	if(vl_herramienta == null){
		plugins.webnotificationsToastr.warning("Falta el tipo de herramienta del equipo para generar el código de barras.","",globals.vg_toast_options)
		return
	}
	
	if(vl_marca == null){
		plugins.webnotificationsToastr.warning("Falta la marca del equipo para generar el código de barras.","",globals.vg_toast_options)
		return
	}
	
	if(vl_modelo == null){
		plugins.webnotificationsToastr.warning("Falta el modelo del equipo para generar el código de barras.","",globals.vg_toast_options)
		return
	}
	
	if(vl_codigo == null){
		plugins.webnotificationsToastr.warning("Falta el código del equipo para generar el código de barras.","",globals.vg_toast_options)
		return
	}
	
	var vl_categoria = null
	var vl_cod_categoria = 0
	var vl_cod_herramienta = 0
	var vl_cod_marca = 0
	var vl_cod_modelo = 0
	var vl_cod_equipo = vl_codigo
	/** @type {JSFoundSet<db:/gpp/herr_herramientas>} */
	var fs_herr_herramientas = databaseManager.getFoundSet('gpp', 'herr_herramientas')
	fs_herr_herramientas.loadRecords(vl_herramienta)
	if(fs_herr_herramientas.getSize() > 0){
		vl_categoria = fs_herr_herramientas.categoria_herr_id
		vl_cod_herramienta = fs_herr_herramientas.herramienta_codigo
		
		if(databaseManager.hasRecords(fs_herr_herramientas.herr_herramientas_to_herr_categoria)){
			vl_cod_categoria = fs_herr_herramientas.herr_herramientas_to_herr_categoria.categoria_codigo
		}
		else{
			plugins.webnotificationsToastr.error("Error con la categoría de la herramienta.","",globals.vg_toast_options)
			return
		}
	}
	
	if(vl_categoria == null){
		plugins.webnotificationsToastr.warning("El tipo de herramienta seleccionado no tiene categoría asignada, no se puede generar el código de barras.","",globals.vg_toast_options)
		return
	}
	
	/** @type {JSFoundSet<db:/gpp/herr_marca>} */
	var fs_marca = databaseManager.getFoundSet('gpp', 'herr_marca')
	fs_marca.loadRecords(vl_marca)
	if(fs_marca.getSize() > 0 ){
		vl_cod_marca = fs_marca.marca_codigo
	}
	
	/** @type {JSFoundSet<db:/gpp/herr_modelo>} */
	var fs_modelo = databaseManager.getFoundSet('gpp', 'herr_modelo')
	fs_modelo.loadRecords(vl_modelo)
	if(fs_modelo.getSize() > 0){
		vl_cod_modelo = fs_modelo.modelo_codigo
	}
	
	
	vl_cod_barras = globals.generarCodigoBarras(vl_cod_categoria,vl_cod_herramienta,vl_cod_marca,vl_cod_modelo,vl_cod_equipo)
	
	
}

/**
 * @properties={typeid:24,uuid:"3B2D7C20-A7ED-4CAE-B10A-7657C06437A0"}
 */
function GenerarCodBarras() {
	
	
	
	var vl_cod_categoria = 0
	var vl_cod_herramienta = 0
	var vl_cod_marca = 0
	var vl_cod_modelo = 0
	var vl_cod_equipo = vl_codigo
	/** @type {JSFoundSet<db:/gpp/herr_herramientas>} */
	var fs_herr_herramientas = databaseManager.getFoundSet('gpp', 'herr_herramientas')
	fs_herr_herramientas.loadRecords(vl_herramienta)
	if(fs_herr_herramientas.getSize() > 0){
		vl_cod_herramienta = fs_herr_herramientas.herramienta_codigo
		
		if(databaseManager.hasRecords(fs_herr_herramientas.herr_herramientas_to_herr_categoria)){
			vl_cod_categoria = fs_herr_herramientas.herr_herramientas_to_herr_categoria.categoria_codigo
		}
	}
	
	
	
	/** @type {JSFoundSet<db:/gpp/herr_marca>} */
	var fs_marca = databaseManager.getFoundSet('gpp', 'herr_marca')
	fs_marca.loadRecords(vl_marca)
	if(fs_marca.getSize() > 0 ){
		vl_cod_marca = fs_marca.marca_codigo
	}
	
	/** @type {JSFoundSet<db:/gpp/herr_modelo>} */
	var fs_modelo = databaseManager.getFoundSet('gpp', 'herr_modelo')
	fs_modelo.loadRecords(vl_modelo)
	if(fs_modelo.getSize() > 0){
		vl_cod_modelo = fs_modelo.modelo_codigo
	}
	
	
	vl_cod_barras = globals.generarCodigoBarras(vl_cod_categoria,vl_cod_herramienta,vl_cod_marca,vl_cod_modelo,vl_cod_equipo)
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"870C5216-B0D6-46C5-8E0C-5B129335045A"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function codigoSugerido() {
	
	if(vl_herramienta == null){
		plugins.webnotificationsToastr.warning("Falta seleccionar una tipo de herramienta para buscar el código sugerido.","",globals.vg_toast_options)
		return
	}
	
	if(vl_marca == null){
		plugins.webnotificationsToastr.warning("Falta seleccionar una marca para buscar el código sugerido.","",globals.vg_toast_options)
		return
	}
	
	if(vl_modelo == null){
		plugins.webnotificationsToastr.warning("Falta seleccionar un modelo para buscar el código sugerido.","",globals.vg_toast_options)
		return
	}
	
	
	/** @type {JSFoundSet<db:/gpp/herr_equipo>} */
	var fs_equipo = databaseManager.getFoundSet('gpp', 'herr_equipo')
	fs_equipo.find()
	fs_equipo.herramienta_id	= vl_herramienta
	fs_equipo.marca_id			= vl_marca
	fs_equipo.modelo_id			= vl_modelo
	fs_equipo.search()
	
	fs_equipo.sort("equipo_codigo desc")
	
	if(fs_equipo.getSize() > 0){
		vl_codigo = fs_equipo.equipo_codigo + 1
	}
	else{
		vl_codigo = 1
	}
	
}

/**
 * @properties={typeid:24,uuid:"9020B9C2-E14A-4B75-AB7A-E8CB1D48398B"}
 */
function onDataChangeHerramienta() {
	globals.vg_herramienta_id = vl_herramienta
	globals.vg_marca_id = null 
	vl_marca = null
	vl_modelo = null
}

/**
 * @properties={typeid:24,uuid:"626EB0F8-783B-4B07-B78B-FB60AED5A623"}
 */
function onDataChangeMarca() {
	globals.vg_marca_id = vl_marca
	vl_modelo = null
}


