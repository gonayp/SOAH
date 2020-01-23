/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B8D6D728-6FCD-401F-BE09-AE09A5FC4801",variableType:8}
 */
var vl_precio_base = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DFE35A8C-D4BF-4973-9501-E6BCF2445994",variableType:4}
 */
var vl_categoria = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"627538F1-5C7D-4E53-9641-CAC539E5FBAC"}
 */
var vl_descripcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"02209741-DB43-41D3-ACF1-288F9B6AB901"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"134F4A23-A9B9-4C77-8B92-26AC1CC2B074",variableType:4}
 */
var vl_codigo = null;


/**
 * @properties={typeid:24,uuid:"CC7A7C98-CA03-42DA-A765-81519F6443BD"}
 */
function onActionVolver() {
	application.showForm(forms.herr_herramientas)
}

/**
 * @properties={typeid:24,uuid:"B8C90788-A429-4E98-A55F-B2E8DD1D92BC"}
 */
function onActioCancelar() {
	limpiarVariables()
	onActionVolver()
}

/**
 * @properties={typeid:24,uuid:"0A354923-E378-4AC6-BF43-E2D1A868F659"}
 */
function limpiarVariables(){
	vl_nombre = null
	vl_descripcion = null
	vl_categoria = null
	vl_precio_base = null
	vl_codigo = generarProximoCodigo()
	
	
}


/**
 * @properties={typeid:24,uuid:"698CF631-F4B8-4492-A6A1-99FD7C33C96A"}
 */
function generarProximoCodigo() {
	var num = 1
	/** @type {JSFoundSet<db:/gpp/herr_herramientas>} */
	var fs_herr_herramientas = databaseManager.getFoundSet('gpp', 'herr_herramientas')
	fs_herr_herramientas.loadAllRecords()
	fs_herr_herramientas.sort('herramienta_codigo desc')
	if (fs_herr_herramientas.getSize() > 0)
		num = fs_herr_herramientas.herramienta_codigo + 1
	return num
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AC6BADFE-FC58-4C36-82D6-56B6066E38EF"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		limpiarVariables()
	}
	
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"DD7CC529-5CEB-450A-AB9E-2623E3D55F2B"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGuardar() {
	
	if(vl_codigo == null ){
		plugins.webnotificationsToastr.error("Falta el código de la herramienta.","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	if(vl_nombre == null || vl_nombre == ""){
		plugins.webnotificationsToastr.error("Falta el nombre de la herramienta.","",globals.vg_toast_options)
		controller.focusField("f_nombre",true)
		return
	}
	
	/** @type {JSFoundSet<db:/gpp/herr_herramientas>} */
	var fs_herr_herramientas = databaseManager.getFoundSet('gpp', 'herr_herramientas')
	fs_herr_herramientas.newRecord()
	fs_herr_herramientas.company_id				= scopes.usuario.vg_company_id
	fs_herr_herramientas.categoria_herr_id		= vl_categoria
	fs_herr_herramientas.herramienta_codigo		= vl_codigo
	fs_herr_herramientas.herramienta_descripcion= vl_descripcion
	fs_herr_herramientas.herramienta_nombre		= vl_nombre
	fs_herr_herramientas.herramienta_precio_base= vl_precio_base
	
	databaseManager.saveData()
	
	limpiarVariables()
	
	forms.herr_herramientas.foundset.loadAllRecords()
	
	onActionVolver()
}

