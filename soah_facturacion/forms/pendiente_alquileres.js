/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"87738F94-3DF5-4C10-9057-8B737E3D8CF0",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"85502AF3-7904-482B-9378-5D8B562CB080",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A4898C55-260E-4DC8-B56B-3A2C632A337F",variableType:93}
 */
var vl_fecha_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"B93B1DBF-1360-48AB-9A4D-E5BF301E9B73",variableType:93}
 */
var vl_fecha_ini = null;

/**
 * @properties={typeid:24,uuid:"A1E85CC7-F10C-4A78-95BC-AEFE14033B59"}
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
 * @properties={typeid:24,uuid:"2F50FB44-F87E-4883-AB3D-DA79912C1FDB"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	scopes.globals.vg_tipo_comprobante = 1 //alquileres

	filtrar()
	

}

/**
 *
 * @properties={typeid:24,uuid:"7ACF3013-5570-45C5-A59C-58625857253A"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	foundset.comp_codigo = 1
	foundset.cliente_id = vl_cliente
	foundset.comp_estado_id = '1 || 2'
	foundset.search()
	
	foundset.sort("comp_fecha_emision desc")
}

/**
 * @properties={typeid:24,uuid:"CB94C620-0ADC-4617-A3FC-761F98F4746B"}
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
 * @properties={typeid:24,uuid:"9A6B814A-3D68-4556-807B-8DFCB63C0B45"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= '';
	win.show( 'alquiler_detalle' );

}
