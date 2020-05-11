/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2FCCF2CE-6FBD-4368-870B-5AD0BC2932BD",variableType:4}
 */
var vl_taller = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C435DC67-CBAD-4AA2-8E83-318186B004A4"}
 */
var vl_cod_barras = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"02AA5857-368A-427E-946C-43332132891F",variableType:4}
 */
var vl_modelo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"39CDB5F3-7A51-4BF6-8DD4-FD56800C6231",variableType:4}
 */
var vl_marca = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A7283A2E-4BF0-48F7-A89E-9243E82AF43C",variableType:4}
 */
var vl_herramienta = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2140D3FB-78FB-445C-B0D5-9DA6481199D7",variableType:4}
 */
var vl_estado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"69CBDEC5-7F8A-44CF-A2B5-2BA6EF2AA76E"}
 */
var vl_num_pedido = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"33DC12FA-DC25-4FAC-9DAB-7C2CCA2F4190",variableType:4}
 */
var vl_equipo = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A0417698-66EB-4919-97A0-F60136470FD0",variableType:93}
 */
var vl_fecha_inicio = null;


/**
 * @properties={typeid:24,uuid:"2531D908-F135-49DA-B767-EC25E848A072"}
 */
function onActionVolver() {
	limpiar()
	application.showForm(forms.rep_reparaciones)
}

/**
 * @properties={typeid:24,uuid:"32C4B81F-0ED7-415B-98DF-B2E5B0A49466"}
 */
function limpiar(){
	vl_cod_barras = null
	vl_equipo = null
	vl_estado = 1
	vl_fecha_inicio = application.getServerTimeStamp()
	vl_herramienta = null
	vl_marca = null
	vl_modelo = null
	vl_num_pedido = null
	vl_taller = null
	
	forms.rep_reparacion_nuevo_fallas.foundset.deleteAllRecords()
	
}

/**
 * @properties={typeid:24,uuid:"21BEDC5B-AD68-477D-98DF-A8AC8262472A"}
 */
function onActioGrabar() {
	
	//Grabar reparacion
	/** @type {JSFoundSet<db:/gpp/rep_reparaciones>} */
	var fs_rep_reparaciones = databaseManager.getFoundSet('gpp', 'rep_reparaciones')
	fs_rep_reparaciones.newRecord()
	fs_rep_reparaciones.company_id							= scopes.usuario.vg_company_id
	fs_rep_reparaciones.equipo_id							= vl_equipo
	fs_rep_reparaciones.reparacion_estado					= vl_estado
	fs_rep_reparaciones.foundset.reparacion_fecha_inicio	= vl_fecha_inicio
	fs_rep_reparaciones.foundset.reparacion_num_pedido		= vl_num_pedido
	fs_rep_reparaciones.taller_id							= vl_taller
	databaseManager.saveData()
	
	//Cambiar estado de equipo
	/** @type {JSFoundSet<db:/gpp/herr_equipo>} */
	var fs_herr_equipo = databaseManager.getFoundSet('gpp', 'herr_equipo')
	fs_herr_equipo.loadRecords(vl_equipo)
	fs_herr_equipo.equipo_estado 	= 4//en reparacion
	fs_herr_equipo.reparacion_id	= fs_rep_reparaciones.reparacion_id
	databaseManager.saveData()
	
	//Grabar fallas
	/** @type {JSFoundSet<db:/gpp/rep_fallas_reparacion>} */
	var fs_rep_fallas_reparacion = databaseManager.getFoundSet('gpp', 'rep_fallas_reparacion')
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.rep_reparacion_nuevo_fallas.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myFalla = forms.rep_reparacion_nuevo_fallas.foundset.getRecord(index);
		fs_rep_fallas_reparacion.newRecord()
		fs_rep_fallas_reparacion.company_id					= scopes.usuario.vg_company_id
		fs_rep_fallas_reparacion.falla_id					= myFalla.falla_id
		fs_rep_fallas_reparacion.fallas_observacion			= myFalla.falla_observacion
		fs_rep_fallas_reparacion.reparacion_id				= fs_rep_reparaciones.reparacion_id
		databaseManager.saveData()
	}
	
	
	/** @type {JSFoundSet<db:/gpp/herr_historicos>} */
	var fs_herr_historicos = databaseManager.getFoundSet('gpp', 'herr_historicos')
	fs_herr_historicos.newRecord()
	fs_herr_historicos.company_id			= scopes.usuario.vg_company_id
	fs_herr_historicos.equipo_id			= vl_equipo
	fs_herr_historicos.hist_fecha			= application.getServerTimeStamp()
	fs_herr_historicos.hist_observacion		= "Cambio de estado desde modulo de reparaciones"
	fs_herr_historicos.reparacion_id		= fs_rep_reparaciones.reparacion_id
	fs_herr_historicos.hist_tipo			= 3
	databaseManager.saveData()
	
	forms.rep_reparaciones.onActionLimpiar()
	
	onActionVolver()
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"7323BADD-5929-4739-B6A9-DA3FB1F9A09F"}
 */
function onShow(firstShow) {
	
	/** @type {JSFoundSet<db:/gpp/herr_equipo>} */
	var fs_herr_equipo = databaseManager.getFoundSet('gpp', 'herr_equipo')
	
	
	if (vl_equipo != null){
		fs_herr_equipo.loadRecords(vl_equipo)
		vl_herramienta 	= fs_herr_equipo.herramienta_id
		vl_marca 		= fs_herr_equipo.marca_id
		vl_modelo		= fs_herr_equipo.modelo_id
		vl_cod_barras 	= fs_herr_equipo.equipo_cod_barras
		vl_fecha_inicio = application.getServerTimeStamp()
		vl_estado		= 1
	}
	else{
		plugins.webnotificationsToastr.error("Error de carga de equipo.","",globals.vg_toast_options)
		onActionVolver()
	}
	
	
	elements.btn_guardar.enabled = true
	if (scopes.usuario.vg_permiso_modificar == 0) {
		elements.btn_guardar.enabled = false
	}
	
	
	
}
