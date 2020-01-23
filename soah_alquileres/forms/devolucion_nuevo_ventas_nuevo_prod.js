/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3F97F6CE-EF20-4970-9B83-24A7531F2263",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E00FA86D-CBDE-41B1-95B6-A9EC55622FFB",variableType:4}
 */
var vl_num_serie = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"08A1F88B-5393-46C5-8DA2-BE5266B2B99F",variableType:4}
 */
var vl_estado = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FD8E5464-152F-4825-AFCF-7AD5D245AD8A",variableType:4}
 */
var vl_alimentacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"26B94790-94F0-4C73-BB73-494745D7BEBA"}
 */
var vl_cod_alterna = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2BAD73DF-BAD3-4B70-AC49-56029E1C1563",variableType:4}
 */
var vl_modelo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F1EAA9F9-3CF6-4765-99C0-DD585A10FDE6",variableType:4}
 */
var vl_marca = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9D2D69B2-E8DC-4967-B101-53F6DF4B1B9F",variableType:4}
 */
var vl_categoria = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EB7A860E-BC3E-4D75-8EF4-7B054D03FF87"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"007658D7-C870-4FFD-B28A-9FB53F9CE0E2",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"F8C356C8-564D-4117-BE2B-22E2923B1E33"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"10458941-3EE0-45AF-B59E-BAD3B6E2D0A6"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	if(vl_codigo != null) 			producto_codigo 				= vl_codigo
	if(vl_estado != null)			producto_estado					= vl_estado
	if(vl_categoria != null)		categoria_prod_id				= vl_categoria
	if(vl_nombre != null && vl_nombre != "")			producto_nombre			= '#%' + vl_nombre + '%'
	if(vl_cod_alterna != null && vl_cod_alterna != "") 	producto_cod_alternativo 	= '#%' + vl_cod_alterna + '%'
	foundset.search()
	
	foundset.sort("herramienta_id, marca_id, modelo_id asc")
}

/**
 * @properties={typeid:24,uuid:"277BA789-9794-4194-B95B-09DCD81054BA"}
 */
function onActionLimpiar() {
	
	vl_estado = 1;
	vl_cod_alterna = null;
	vl_categoria = null;
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
 * @properties={typeid:24,uuid:"A45B92BC-C76C-4BA5-8556-8ADA6A82F9A6"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	
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
 * @properties={typeid:24,uuid:"10B2C3F5-DC59-4A0D-8CC7-2A6F6A8D5376"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	addProducto()

}

/**
 * @properties={typeid:24,uuid:"743D4890-3E75-468D-B732-067A64DBC7FA"}
 */
function addProducto() {
	
	forms.devolucion_nuevo_ventas.foundset.newRecord()
	forms.devolucion_nuevo_ventas.foundset.producto_cantidad				= 1
	forms.devolucion_nuevo_ventas.foundset.producto_nombre				= foundset.producto_nombre
	forms.devolucion_nuevo_ventas.foundset.producto_precio				= producto_precio_base
	forms.devolucion_nuevo_ventas.foundset.producto_total				= producto_precio_base
	if(medida_id != null)
		forms.devolucion_nuevo_ventas.foundset.producto_unidad			= foundset.prod_productos_to_prod_medidas.medida_nombre
	forms.devolucion_nuevo_ventas.foundset.producto_id					= producto_id
	if (foundset.producto_serializado == 0){//Los productos serializados se quedan en null para que el sistema oblige a colocar un numero
		forms.devolucion_nuevo_ventas.foundset.producto_num_serie = ''
	}
	databaseManager.saveData()
	
	
	forms.devolucion_nuevo.calculoTotales()
	
	onActionVolver()
}
