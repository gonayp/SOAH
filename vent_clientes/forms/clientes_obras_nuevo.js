/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AA31F5D1-C4DA-4659-9F01-D0EFC101ADAE",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"587E65A0-F767-422B-9AC6-8E993F4F1A3B"}
 */
var vl_observacion = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"35513819-3259-4D31-A442-3837D7275FD1",variableType:93}
 */
var vl_fecha = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CB3BE1A6-CE18-4E70-BEFD-DD95BFF95B68"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"06B968CA-0ABE-47FD-9C5C-7BF1CA5E102E",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"98533217-82CF-46A5-BD7C-EE1F20E2E929"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"ABE32A85-1CF9-4F89-8174-44CBABE9A3D0"}
 */
function onShow(firstShow) {
	
	controller.focusFirstField()
	
	vl_codigo=generarProximoCodigo()
	vl_nombre=null
	vl_fecha=application.getServerTimeStamp()
	vl_observacion=null
}

/**
 * @properties={typeid:24,uuid:"662A35D1-A82A-4CEC-911D-9EC2AB6C8DB6"}
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
 * @properties={typeid:24,uuid:"20786D50-31B9-45B0-B6FD-65E6EBD7FF64"}
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
