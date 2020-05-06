/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"02F1E30D-B3E0-40D6-A265-ED7FCDA37933",variableType:8}
 */
var vl_precio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C8EBC92D-0DC7-494D-B908-D3EE8FC897BB",variableType:8}
 */
var vl_cantidad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2B736695-76C8-418E-BB6B-DD0ACB7A4A48"}
 */
var vl_medida = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"16B4A279-FAF3-4C0C-9926-4836CDDC66F1"}
 */
var vl_nombre = null;


/**
 * @properties={typeid:24,uuid:"6F3ADCBB-152E-468E-96AE-0AFFEC77571C"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"E8BB5BAA-1F97-499B-9DFB-13EF057E820A"}
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
	
	forms.devolucion_nuevo_ventas.foundset.newRecord()
	forms.devolucion_nuevo_ventas.foundset.producto_cantidad		= vl_cantidad
	forms.devolucion_nuevo_ventas.foundset.producto_nombre			= vl_nombre
	forms.devolucion_nuevo_ventas.foundset.producto_precio			= vl_precio
	forms.devolucion_nuevo_ventas.foundset.producto_total			= vl_cantidad * vl_precio
	forms.devolucion_nuevo_ventas.foundset.producto_unidad			= vl_medida
	databaseManager.saveData()
	
	
	forms.devolucion_nuevo.calculoTotalesSinRecalcularDias()
	
	onActionVolver()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E75211AB-EB37-4C5C-99CF-6CCF13BE3D5B"}
 */
function onShow(firstShow, event) {
	vl_nombre = null
	vl_medida = null
	vl_cantidad = null
	vl_precio = null
	
	controller.focusFirstField()
}
