/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D807D25E-5C10-4E23-9B0E-9B0E8D14D22F",variableType:4}
 */
var vl_facturar_a_cliente_id = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"1AD41EAF-C5B2-48B3-AA29-7B02988831E0"}
 */
function onShow(firstShow) {
	vl_facturar_a_cliente_id = foundset.facturar_a_cliente_id
}

/**
 *
 * @properties={typeid:24,uuid:"2AD522D7-AE32-40F0-9787-1D1804C2940E"}
 */
function onActionSeleccionarCliente() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.clientes_listado_basico );
		

}

/**
 * @properties={typeid:24,uuid:"5EA3B8F6-9F4F-40DE-9217-F32553EEA0D9"}
 */
function onActionBorrarAFacturarCliente() {
	vl_facturar_a_cliente_id = null
}