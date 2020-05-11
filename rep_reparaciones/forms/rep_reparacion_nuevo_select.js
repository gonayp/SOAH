/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0C5C4AB8-8265-4D80-9938-E238A1DC7F19",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6BDAF5B2-6BE2-4B70-95CA-BA50C3CFD9EB",variableType:4}
 */
var vl_num_serie = null;



/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1BFF0AF7-33C8-4013-AD9C-112F3A754AAF",variableType:4}
 */
var vl_alimentacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"58F863ED-3990-4E86-8938-B18B96F91220"}
 */
var vl_cod_barras = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D9C5E384-631C-458F-B7F0-DA96384ECBAD"}
 */
var vl_cod_alterna = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"60712D7A-0F54-48AA-BF52-00AE78F2EC83",variableType:4}
 */
var vl_modelo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"38CD71D8-B5E2-4F32-906D-E127CA950C91",variableType:4}
 */
var vl_marca = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B9FC25D8-1957-4A19-A236-8FF268136F7F",variableType:4}
 */
var vl_herramienta = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CB77CC24-1376-4DE8-8D1E-DC2DCFE6ADA2"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D22F5E19-E42F-4129-AE55-2B42CF1ABEA4",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"FBB42F3E-A8B2-49DC-9558-F088865524ED"}
 */
function onActionVolver() {
	application.showForm(forms.rep_main)
}

/**
 * @properties={typeid:24,uuid:"AB7C8AB4-5979-46A5-A746-4296852FF294"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	equipo_estado			= "1 || 2"//disponible o roto
	if(vl_codigo != null) 			equipo_codigo 				= vl_codigo
	if(vl_alimentacion != null)		alimentacion_id				= vl_alimentacion
	if(vl_herramienta != null)		herramienta_id				= vl_herramienta
	if(vl_marca != null)			marca_id					= vl_marca
	if(vl_modelo != null)			modelo_id					= vl_modelo
	if(vl_tipo != null)				equipo_tipo					= vl_tipo
	if(vl_nombre != null && vl_nombre != "")			equipo_nombre			= '#%' + vl_nombre + '%'
	if(vl_cod_alterna != null && vl_cod_alterna != "") 	equipo_cod_alternativo 	= '#%' + vl_cod_alterna + '%'
	if(vl_cod_barras != null && vl_cod_barras != "")    equipo_cod_barras		=  vl_cod_barras 
	if(vl_num_serie != null && vl_num_serie != "")		equipo_num_serie		= '#%' + vl_num_serie + '%'
	foundset.search()
	
	foundset.sort("equipo_estado desc")
}

/**
 * @properties={typeid:24,uuid:"B50C5219-E495-4DB6-BB0D-49EFEC6A086B"}
 */
function onActionLimpiar() {
	vl_tipo = null;
	vl_num_serie = null;
	vl_alimentacion = null;
	vl_cod_barras = null;
	vl_cod_alterna = null;
	vl_modelo = null;
	vl_marca = null;
	vl_herramienta = null;
	vl_nombre = null;
	vl_codigo = null;
	globals.vg_herramienta_id = null
	
	filtrar()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FB7C0C22-7F15-489C-8932-E2B527251DB4"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	controller.focusField("f_herramienta",true)
		
	filtrar()
	
}


/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"9DB77DCF-8D20-486C-9A55-9A6850A5A5F5"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	
	forms.rep_reparacion_nuevo.vl_equipo = foundset.equipo_id
	application.showForm(forms.rep_reparacion_nuevo)

}



/**
 * @properties={typeid:24,uuid:"50278587-2824-4F3B-8838-B44212A4AA96"}
 */
function onDataChangeHerramienta() {
	vl_marca = null
	vl_modelo = null
	globals.vg_herramienta_id = vl_herramienta
	filtrar()
}
