/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A6885F42-F1DB-48FB-A683-AAF4B30015B5",variableType:4}
 */
var vl_codigo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3975684B-C946-48C7-9BBD-93E8AF101827"}
 */
var vl_nombre = null;

/**
 *
 * @properties={typeid:24,uuid:"85447DA2-4528-4D25-A11D-6466BA62FDB5"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()

}

/**
 * 
 *
 * @properties={typeid:24,uuid:"AE1768DE-6E4B-4F8A-AAE1-AAA5D7699CCC"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	if(vl_codigo != null) foundset.cliente_codigo = vl_codigo
	if(vl_nombre != null && vl_nombre != "") foundset.vent_clientes_to_core.core_nombre = "%"+vl_nombre+"%"
	foundset.search()
}

/**
 * @properties={typeid:24,uuid:"661E2EF6-D3CD-4DC4-97E4-4EC13D3E8489"}
 */
function onActionLimpiar() {
	vl_codigo = null
	vl_nombre = null
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
 * @properties={typeid:24,uuid:"9B869256-E0D0-489D-B483-9C6A2340200A"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	forms.clientes_editar_datos.vl_facturar_a_cliente_id = foundset.cliente_id
	application.getWindow('Dialog').hide()

}
