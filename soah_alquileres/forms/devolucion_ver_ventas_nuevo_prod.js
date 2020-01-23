/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"307FE23D-8515-462C-8A2A-1138362276F2",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D6BB60B7-D0A4-4EA7-B70B-BE225E9052FB",variableType:4}
 */
var vl_num_serie = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7926C2AA-0345-45FA-BB8A-A0880AEC7E69",variableType:4}
 */
var vl_estado = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2A6B3E5C-017F-4FAE-85A5-A426E94C7F16",variableType:4}
 */
var vl_alimentacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"69699F07-126F-46BB-83AC-F009E775EC96"}
 */
var vl_cod_alterna = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CCD9C08D-210A-4B9D-9BD7-4F036CC84312",variableType:4}
 */
var vl_modelo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"88889488-DC65-4CD7-828F-7E56DD600547",variableType:4}
 */
var vl_marca = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1758D6BB-EE17-4E89-A9D7-37021E336A69",variableType:4}
 */
var vl_categoria = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5B69036B-F422-433C-9DE0-033B2D798398"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2873ECDA-7D87-4A4B-8C57-D8A8BF69DC47",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"5650BBC9-75CE-4515-B4A4-BC087C38D512"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"E68C6CC9-1648-4BEF-B410-DB8370CCDCAB"}
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
 * @properties={typeid:24,uuid:"2C03E199-F672-482F-BC8F-200D655ED73B"}
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
 * @properties={typeid:24,uuid:"3E6EE5D1-ABC9-4AEB-9E65-2922C30E8F11"}
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
 * @properties={typeid:24,uuid:"AFB879D8-44DE-4B00-9957-9B52659DDAB8"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	addProducto()

}

/**
 * @properties={typeid:24,uuid:"B40BC8FC-8667-4AAC-BB6B-C3728B79D1B9"}
 */
function addProducto() {
	
	forms.devolucion_ver_ventas.foundset.newRecord()
	forms.devolucion_ver_ventas.foundset.company_id					= scopes.usuario.vg_company_id
	forms.devolucion_ver_ventas.foundset.comp_cantidad				= 1
	forms.devolucion_ver_ventas.foundset.comp_prod_nombre			= foundset.producto_nombre
	forms.devolucion_ver_ventas.foundset.comp_precio				= producto_precio_base
	forms.devolucion_ver_ventas.foundset.calc_total					= producto_precio_base
	if(medida_id != null)
		forms.devolucion_ver_ventas.foundset.comp_prod_unidad		= foundset.prod_productos_to_prod_medidas.medida_nombre
	forms.devolucion_ver_ventas.foundset.comp_id					= forms.devolucion_ver.foundset.comp_id
	forms.devolucion_ver_ventas.foundset.producto_id				= producto_id
	databaseManager.saveData()
	
	
	forms.devolucion_ver.calculoTotales()
	
	onActionVolver()
}
