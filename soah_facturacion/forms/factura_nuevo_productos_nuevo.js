/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0119732D-7650-45B3-B612-51BFFE3DB732",variableType:8}
 */
var vl_precio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7FEFFF3F-541E-4E75-864F-F41E5BAF7680",variableType:8}
 */
var vl_cantidad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"10767039-80D7-4B18-80E0-D717E457CB9A"}
 */
var vl_medida = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"41A95413-DFA9-4CA3-895E-DCA927B3A9CE"}
 */
var vl_nombre = null;

/**
 * @properties={typeid:24,uuid:"BABA9B93-07EE-493B-A254-D3B500CE061B"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"264F3828-BE63-4B94-A4DF-32F43651CCD7"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if (vl_nombre == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de nombre.", "", globals.vg_toast_options)
		controller.focusField("f_nombre", true)
		return
	}
	
	if (vl_cantidad == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de cantidad.", "", globals.vg_toast_options)
		controller.focusField("f_cantidad", true)
		return
	}
	
	if (vl_precio == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de precio.", "", globals.vg_toast_options)
		controller.focusField("f_precio", true)
		return
	}
	
	forms.factura_nuevo_productos.foundset.newRecord()
	forms.factura_nuevo_productos.foundset.producto_cantidad		= vl_cantidad
	forms.factura_nuevo_productos.foundset.producto_nombre			= vl_nombre
	forms.factura_nuevo_productos.foundset.producto_precio			= vl_precio
	forms.factura_nuevo_productos.foundset.producto_total			= vl_cantidad * vl_precio
	forms.factura_nuevo_productos.foundset.producto_unidad			= vl_medida
	databaseManager.saveData()
	
	
	forms.factura_nuevo.calculoTotales()
	
	onActionVolver()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7D499B9-AB44-400C-BC5E-CC14EEC83645"}
 */
function onShow(firstShow, event) {
	vl_nombre = null
	vl_medida = null
	vl_cantidad = null
	vl_precio = null
	
	controller.focusFirstField()
}
