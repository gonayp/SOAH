/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"77FE7DAC-B2C3-4D4B-A897-C795AE9B1796",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EE335C7A-D804-4440-9C06-E7EBF967A690"}
 */
var vl_observacion = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E0AA811C-DD3E-4DEB-88F2-ADBDCDBBCA01",variableType:93}
 */
var vl_fecha = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"83EBB558-9048-4DA2-973B-FD83095A38FC"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E3A6D0A3-E9CD-483F-B270-46B5F393907B",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"C8A1303F-D478-4B9A-82F1-EBDEA0F03E18"}
 */
function onActionVolver() {
	application.showForm(forms.obras_main)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"58FAECF9-1CAD-434A-873D-E2CB8A0E41B2"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow) {
	
	globals.asignarPermisos(controller.getName())
	if(scopes.usuario.vg_permiso_lectura == 0 || scopes.usuario.vg_permiso_crear == 0){
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.","",globals.vg_toast_options)
		return
	}
	
	controller.focusFirstField()
	
	vl_codigo=generarProximoCodigo()
	vl_fecha=application.getServerTimeStamp()
	
}

/**
 * @properties={typeid:24,uuid:"1E7F414A-76D4-4232-B9F1-0BDB4D52F8B2"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(vl_nombre == null || vl_nombre == ""){
		plugins.webnotificationsToastr.error("El nombre de la obra no puede estar vacio.","",scopes.globals.vg_toast_options)
		controller.focusField('f_nombre',true)
		return
	}
	
	/** @type {JSFoundSet<db:/gpp/vent_obras>} */
	var fs_obra = databaseManager.getFoundSet('gpp', 'vent_obras')
	fs_obra.newRecord()
	fs_obra.cliente_id 			= vl_cliente
	fs_obra.company_id			= scopes.usuario.vg_company_id
	fs_obra.obra_codigo			= vl_codigo
	fs_obra.obra_estado			= 1
	fs_obra.obra_fecha_inicio	= vl_fecha
	fs_obra.obra_nombre			= vl_nombre
	fs_obra.obra_observacion	= vl_observacion
	
	databaseManager.saveData()
	onActionVolver()
}

/**
 * @properties={typeid:24,uuid:"464473B0-CE67-4705-A7CF-E4AEEB6E1A23"}
 */
function generarProximoCodigo(){
	var num = 1
	/** @type {JSFoundSet<db:/gpp/vent_obras>} */
	var fs_obra = databaseManager.getFoundSet('gpp', 'vent_obras')
	fs_obra.loadAllRecords()
	fs_obra.sort('obra_codigo desc')
	if(fs_obra.getSize() > 0)
		num = fs_obra.obra_codigo +1
	return num
	
	
}

/**
 * @properties={typeid:24,uuid:"B35ADCAF-24CD-40A8-833F-B6A3F43F18DD"}
 */
function onActionCancelar() {
	vl_nombre=null
	vl_observacion=null
	onActionVolver()
}
