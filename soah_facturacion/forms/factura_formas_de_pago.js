/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A17247F5-461C-4085-8A7E-4F96FCA84749",variableType:8}
 */
var vl_comprobante = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7AAAD450-C304-498C-9DFC-CD1F0A95D62A",variableType:8}
 */
var vl_anticipos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"771CFB34-AED7-4CE5-8284-FF73F612FB4F",variableType:8}
 */
var vl_diferencia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"92B635AF-BAC1-4F93-91D6-1609E06FF46C",variableType:8}
 */
var vl_ret_iibb = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DC209B48-149C-460B-9CEA-FD0D9664AC50",variableType:8}
 */
var vl_ret_gan = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D662126C-0A19-48E7-95A0-223AB681E082",variableType:8}
 */
var vl_total_factura = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DF3FB83F-944B-40B8-9FCB-A95325C04E2F",variableType:8}
 */
var vl_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0ADF6584-0BC1-4757-A315-9C8ECAB8C636",variableType:8}
 */
var vl_cheques = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CEBA8552-9D3E-40DB-BEE7-A73B25B1E404",variableType:8}
 */
var vl_transferencia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EA611DC2-C956-424F-8F64-A43536693015",variableType:8}
 */
var vl_efectivo = null;

/**
 *
 * @properties={typeid:24,uuid:"B4FE4EA4-992D-44E0-AC25-B7060CBD6926"}
 */
function onDataChangePagos() {
	vl_total = vl_efectivo + vl_transferencia + vl_cheques + vl_ret_gan + vl_ret_iibb + vl_anticipos
	vl_diferencia = ((Math.round(vl_total_factura *100)/100) - (Math.round(vl_total*100)/100)) * (-1)
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"D4532128-4100-4CFB-A24A-FE4D8A8F40C0"}
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
 * @properties={typeid:24,uuid:"3A8BC646-B254-4E6D-9217-D83316014BAA"}
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
 * @properties={typeid:24,uuid:"DF1BA4B8-6AEB-417F-AEA1-2E42227CBE0D"}
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
 * @properties={typeid:24,uuid:"188B195A-E92A-49CA-9A38-3546B91C17A5"}
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
	
	elements.btn_anticipos.enabled = false
	if(fs_vent_comprobantes.getSize() > 0){//Si el cliente tiene anticipos
		elements.btn_anticipos.enabled = true
	}
}
