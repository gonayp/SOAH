/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9A2C16E9-6276-4F9C-A253-AE349DAFF84A",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"552CAC09-AB95-453F-BD84-3D46FD84F746",variableType:4}
 */
var vl_num_serie = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"30E71652-BC44-41E8-81FE-CAA5459E9F89",variableType:4}
 */
var vl_estado = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A7468A3F-504E-49B4-A38C-3224378FC6C5",variableType:4}
 */
var vl_alimentacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9E5CE19E-3C22-4A51-9B9B-A04A2E867DF3"}
 */
var vl_cod_alterna = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D8298921-50D5-419F-AF7C-81842F91F41E",variableType:4}
 */
var vl_modelo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FDC8671E-38EA-489E-A8C8-A2D9B6F2A980",variableType:4}
 */
var vl_marca = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3046F63C-3DEE-4107-956A-3373EB2BA146",variableType:4}
 */
var vl_categoria = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E943C7B9-61B5-49CB-8884-748F2319A6CA"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A47772B8-0183-4EDF-A8DA-17D63146B8AC",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"B6CD4B35-FAD8-40FC-AE77-699738BEF920"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"ACE25657-B49F-4803-A54B-913AB9C87505"}
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
 * @properties={typeid:24,uuid:"64151F63-7E8C-45F7-AC79-4647023302C6"}
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
 * @properties={typeid:24,uuid:"38F34177-78CF-4CF7-8BBD-409286503A49"}
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
 * @properties={typeid:24,uuid:"C4C796B8-7BF4-41BB-8584-54EB82FED6B4"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	addProducto()

}

/**
 * @properties={typeid:24,uuid:"3AD51A51-AA14-465D-9818-166038AFB760"}
 */
function addProducto() {
	
	forms.factura_nuevo_productos.foundset.newRecord()
	forms.factura_nuevo_productos.foundset.producto_cantidad				= 1
	forms.factura_nuevo_productos.foundset.producto_nombre				= foundset.producto_nombre
	forms.factura_nuevo_productos.foundset.producto_precio				= producto_precio_base
	forms.factura_nuevo_productos.foundset.producto_total				= producto_precio_base
	if(medida_id != null)
		forms.factura_nuevo_productos.foundset.producto_unidad			= foundset.prod_productos_to_prod_medidas.medida_nombre
	forms.factura_nuevo_productos.foundset.producto_id					= producto_id
	if (foundset.producto_serializado == 0){//Los productos serializados se quedan en null para que el sistema oblige a colocar un numero
		forms.factura_nuevo_productos.foundset.producto_num_serie = ''
	}
	databaseManager.saveData()
	
	
	forms.factura_nuevo.calculoTotales()
	
	onActionVolver()
}
