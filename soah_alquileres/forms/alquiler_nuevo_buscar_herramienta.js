/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8FF91010-242F-4E21-ADB7-820B25E556E1",variableType:4}
 */
var vl_avanzado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C9B2899A-6926-4E52-A928-E333B17CAE1C",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F8848F95-8449-4718-AC58-F47EA3941665",variableType:4}
 */
var vl_num_serie = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"47758A11-040E-4D0A-BB5F-75C1C787E568",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"09F54E49-6237-4BED-991C-DE41D07685DD",variableType:4}
 */
var vl_alimentacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7B65FDF4-91ED-4B7E-9002-5DBC56613027"}
 */
var vl_cod_barras = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A8D03C7A-AB27-450A-96ED-45BF17ECA129"}
 */
var vl_cod_alterna = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"62F2C166-21FC-4700-911A-CAC28498D653",variableType:4}
 */
var vl_modelo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"43FA5AE2-D1E8-43CC-A7DC-18F95AADC6C4",variableType:4}
 */
var vl_marca = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"41B42E00-01CF-462A-B190-EA72D0150BAF",variableType:4}
 */
var vl_herramienta = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"02124B88-D714-4C92-A434-1254B970E594"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FF72A1A1-BCD7-4C19-9BCF-6148667297AF",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"DCAE5D92-F11A-49E3-B45E-5BEC5A8F1CAA"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
	}

/**
 * @properties={typeid:24,uuid:"CA757FBC-A833-413D-ACEF-49FC506030CF"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	if(vl_codigo != null) 			equipo_codigo 				= vl_codigo
	if(vl_alimentacion != null)		alimentacion_id				= vl_alimentacion
	if(vl_estado != null)			equipo_estado				= vl_estado
	if(vl_herramienta != null)		herramienta_id				= vl_herramienta
	if(vl_marca != null)			marca_id					= vl_marca
	if(vl_modelo != null)			modelo_id					= vl_modelo
	if(vl_tipo != null)				equipo_tipo					= vl_tipo
	if(vl_nombre != null && vl_nombre != "")			equipo_nombre			= '#%' + vl_nombre + '%'
	if(vl_cod_alterna != null && vl_cod_alterna != "") 	equipo_cod_alternativo 	= '#%' + vl_cod_alterna + '%'
	if(vl_cod_barras != null && vl_cod_barras != "")    equipo_cod_barras		= '#%' + vl_cod_barras + '%'
	if(vl_num_serie != null && vl_num_serie != "")		equipo_num_serie		= '#%' + vl_num_serie + '%'
	foundset.search()
	
	foundset.sort("herramienta_id, marca_id, modelo_id asc")
}

/**
 * @properties={typeid:24,uuid:"5AF0BE5C-0D24-4CE6-8A4A-6989393D9E29"}
 */
function onActionLimpiar() {
	vl_tipo = null;
	vl_num_serie = null;
	vl_estado = 1;
	vl_alimentacion = null;
	vl_cod_barras = null;
	vl_cod_alterna = null;
	vl_modelo = null;
	vl_marca = null;
	vl_herramienta = null;
	vl_nombre = null;
	vl_codigo = null;
	
	filtrar()
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D30FF3F2-E3D7-42C4-9C98-0DE82D66EB2D"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {


	onActionLimpiar()
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"0AFE9873-B49D-45EF-8E65-B247489BD20C"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	addHerramienta()

}


/**
 * @properties={typeid:24,uuid:"6DCFF2A7-1A71-4356-9AEC-DCF2CB0C6508"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function addHerramienta() {
	
	forms.alquiler_nuevo_herramientas.foundset.find()
	forms.alquiler_nuevo_herramientas.foundset.equipo_id = foundset.equipo_id
	forms.alquiler_nuevo_herramientas.foundset.search()
	
	if(forms.alquiler_nuevo_herramientas.foundset.getSize() == 0){
		if(foundset.equipo_estado == 1){//Dsponible
			
			forms.alquiler_nuevo_herramientas.foundset.newRecord()
			forms.alquiler_nuevo_herramientas.foundset.comp_precio			= foundset.equipo_precio_base
			forms.alquiler_nuevo_herramientas.foundset.equipo_id			= foundset.equipo_id
			forms.alquiler_nuevo_herramientas.foundset.equipo_cod_barras	= foundset.equipo_cod_barras
			forms.alquiler_nuevo_herramientas.foundset.equipo_modelo		= foundset.herr_equipo_to_herr_modelo.modelo_nombre
			forms.alquiler_nuevo_herramientas.foundset.equipo_herramienta	= foundset.herr_equipo_to_herr_herramientas.herramienta_nombre
			forms.alquiler_nuevo_herramientas.foundset.equipo_num_serie		= foundset.equipo_num_serie
			forms.alquiler_nuevo_herramientas.foundset.comp_precio_ajustado	= scopes.facturacion.calcularAcuerdoPrecios(forms.alquiler_nuevo.vl_acuerdo_precios,foundset.equipo_precio_base)
			forms.alquiler_nuevo_herramientas.foundset.comp_comentario_entrega = foundset.equipo_descripcion
			
			//Si la herramienta añadida tiene herramientas asociadas
			if(databaseManager.hasRecords(foundset.herr_equipo_to_herr_herramientas.herr_herramientas_to_herr_herramientas_asociadas)){
				forms.alquiler_nuevo_herramientas.foundset.herramientas_asociadas = 1
				plugins.webnotificationsToastr.warning("Este equipo tiene herramientas asociadas.","",globals.vg_toast_options)
			}
			
			databaseManager.saveData()
			
			forms.alquiler_nuevo.vl_total += forms.alquiler_nuevo_herramientas.foundset.comp_precio_ajustado
			
			onActionVolver()
		}
		else{//Alquilado, extraviado, roto, etc
			plugins.webnotificationsToastr.error("El equipo no esta disponible.","",globals.vg_toast_options)
		}
	}
	else{
		plugins.webnotificationsToastr.error("La herramienta ya fue añadida al alquiler.","",globals.vg_toast_options)
	}
	forms.alquiler_nuevo_herramientas.foundset.loadAllRecords()
}


