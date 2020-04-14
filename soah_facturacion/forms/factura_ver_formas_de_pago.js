/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0AB1FDE4-6439-4AF2-9A33-05A999CB2F2E",variableType:8}
 */
var vl_comprobante = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"48A99477-EFDB-4F7F-8B2E-BD0DA6F46510",variableType:8}
 */
var vl_anticipos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AB1F9547-5421-42AA-BAD3-3691B28A4550",variableType:8}
 */
var vl_diferencia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"84915BF3-4A85-49AD-A44C-3EB5D1D3E3F6",variableType:8}
 */
var vl_ret_iibb = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9A93A89F-E666-4F01-AD5E-3C9B7ADCDF96",variableType:8}
 */
var vl_ret_gan = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"64E603FB-EF0A-4794-9ACC-80E183950F74",variableType:8}
 */
var vl_total_factura = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A96D5C29-5314-4E24-9713-EDF41FA33758",variableType:8}
 */
var vl_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"56F5738E-93B7-4DE8-A409-F4D9AB1E09B4",variableType:8}
 */
var vl_cheques = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4009C7ED-3AB7-4738-9845-C172D62B655E",variableType:8}
 */
var vl_transferencia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E8F6B4F4-5CEB-4444-92D7-BC415E63F128",variableType:8}
 */
var vl_efectivo = null;

/**
 *
 * @properties={typeid:24,uuid:"8A3449E8-341C-46E6-81EA-713C30FFEF70"}
 */
function onDataChangePagos() {
	vl_total = vl_efectivo + vl_transferencia + vl_cheques + vl_ret_gan + vl_ret_iibb + vl_anticipos
	vl_diferencia = ((Math.round(vl_total_factura *100)/100) - (Math.round(vl_total*100)/100)) * (-1)
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"984545DE-BDE7-4922-9581-9A095F7E1C2C"}
 */
function onActionBuscarCheque(event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.factura_formas_de_pago_cheques );

}

/**
 * @properties={typeid:24,uuid:"3E3C9279-06B6-46F7-863E-3A535F65D6B0"}
 */
function onActionNuevoCheque() {

	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.factura_formas_de_pago_cheque_nuevo );
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"2AB23078-D532-4E2F-BE89-FB84800AB65B"}
 */
function onActionAnticipos(event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= '';
	win.show( forms.factura_formas_de_pago_anticipos );

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FAEC52B7-A79C-499E-9DCF-4EA140CFDBEF"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	/** @type {JSFoundSet<db:/gpp/vent_comprobantes>} */
	var fs_vent_comprobantes = databaseManager.getFoundSet('gpp', 'vent_comprobantes')
	
	fs_vent_comprobantes.find()
	fs_vent_comprobantes.cliente_id = globals.vg_cliente
	fs_vent_comprobantes.comp_codigo = 90
	fs_vent_comprobantes.comp_id_padre = '^='
	fs_vent_comprobantes.search()
	
}
