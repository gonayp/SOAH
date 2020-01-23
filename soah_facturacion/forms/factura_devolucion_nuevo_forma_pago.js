/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8E914B3F-1009-49B7-B539-A28E8D81FA97",variableType:8}
 */
var vl_diferencia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A4C7DEED-FA37-48E6-ADEB-7E86B493622A",variableType:8}
 */
var vl_ret_iibb = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"080CBEEC-3304-459B-945D-D5CF0C8AA521",variableType:8}
 */
var vl_ret_gan = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5AF9D98E-504A-4E91-9342-092565B4A3B9",variableType:8}
 */
var vl_total_factura = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"86EC86B0-9859-49BB-8334-3DC9564E5A87",variableType:8}
 */
var vl_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D283AF6D-8591-4E41-834D-8B8C26B69488",variableType:8}
 */
var vl_cheques = null;


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D18EEF7A-3CAA-4A26-93D4-93121FB8D809",variableType:8}
 */
var vl_transferencia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"50BC0E5D-FB4C-4B51-8DE1-E29F499026E5",variableType:8}
 */
var vl_efectivo = null;

/**
 *
 * @properties={typeid:24,uuid:"64E1DC2C-2970-45A8-903E-095D4CC809C3"}
 */
function onDataChangePagos() {
	vl_total = vl_efectivo + vl_transferencia + vl_cheques + vl_ret_gan + vl_ret_iibb
	vl_diferencia = (Math.round(forms.factura_devolucion_nuevo.vl_total *100)/100) - (Math.round(vl_total*100)/100)
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"61D4499F-84F5-4C62-95BE-4B49C5B6C5BA"}
 */
function onActionBuscarCheque(event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.factura_devolucion_nuevo_cheques );

}

/**
 * @properties={typeid:24,uuid:"1D26D215-6AAC-4B8F-8CE8-32829B0F78AA"}
 */
function onActionNuevoCheque() {
	
	forms.factura_nuevo_cheque.vl_cliente = forms.factura_devolucion_nuevo.vl_cliente
	
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.factura_nuevo_cheque );
}
