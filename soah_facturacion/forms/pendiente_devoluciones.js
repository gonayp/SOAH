/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E015E763-0BB2-4FF8-ACFB-5864C5CE98E8",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5F09F31B-FA5A-4369-92B2-2E8CF89D3461",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"7CCDF68C-7DDC-4520-83D9-2ED8C90B2424",variableType:93}
 */
var vl_fecha_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"2DA14949-F228-415F-8B99-A243D891395A",variableType:93}
 */
var vl_fecha_ini = null;

/**
 * @properties={typeid:24,uuid:"C156FAFB-8DE0-4B96-A3A7-964818817D21"}
 */
function onActionVolver() {
	application.getWindow('Dialog2').hide()
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C830A8CE-2C9B-40D2-B3D7-1178878A6C6B"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	
	filtrar()

}

/**
 *
 * @properties={typeid:24,uuid:"9D104CDB-ACED-4427-9C1A-3FE5D1C51595"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	foundset.comp_codigo = 2
	foundset.cliente_id = vl_cliente
	foundset.comp_estado_id = 5
	foundset.search()
	
	foundset.sort("comp_fecha_emision desc")
}

/**
 * @properties={typeid:24,uuid:"97E8513C-6807-427F-A3F1-BCAE6B804DD8"}
 */
function onActionLimpiar() {
	vl_cliente = null
	vl_estado = null
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
 * @properties={typeid:24,uuid:"D8FBD69F-916B-46E3-9B03-C554754BFF74"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( 'devolucion_detalle' );

}
