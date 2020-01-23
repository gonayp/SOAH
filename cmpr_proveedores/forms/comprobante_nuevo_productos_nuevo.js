/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C05DBBAD-2492-457B-995E-FA0586FAF863",variableType:8}
 */
var vl_precio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"54B0DE1C-C145-4F6D-BD8A-1429BE3CCB9D",variableType:8}
 */
var vl_cantidad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4A277E1E-0BC7-4C64-B973-92522105EC6E"}
 */
var vl_medida = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9944E87E-B338-4416-AEDA-020DF5359FDB"}
 */
var vl_nombre = null;

/**
 * @properties={typeid:24,uuid:"08048FDA-F86D-480A-B2B6-488DBE7931F0"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"90EB66EE-C2CD-4B08-B12F-C38E8F3E4098"}
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
	
	forms.comprobante_nuevo_productos.foundset.newRecord()
	forms.comprobante_nuevo_productos.foundset.producto_cantidad		= vl_cantidad
	forms.comprobante_nuevo_productos.foundset.producto_nombre			= vl_nombre
	forms.comprobante_nuevo_productos.foundset.producto_precio			= vl_precio
	forms.comprobante_nuevo_productos.foundset.producto_total			= vl_cantidad * vl_precio
	forms.comprobante_nuevo_productos.foundset.producto_unidad			= vl_medida
	databaseManager.saveData()
	
	
	forms.comprobante_nuevo.calculoTotales()
	
	onActionVolver()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C85757B3-A9BE-4451-BD9B-224810285398"}
 */
function onShow(firstShow, event) {
	vl_nombre = null
	vl_medida = null
	vl_cantidad = null
	vl_precio = null
	
	controller.focusFirstField()
}
