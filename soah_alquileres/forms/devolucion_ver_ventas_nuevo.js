/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DA21264C-6CB8-46D3-8401-9EDFFB3EB9D2",variableType:8}
 */
var vl_precio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D41BD738-57F5-4FEF-B779-A666DC463C39",variableType:8}
 */
var vl_cantidad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DB867B51-9008-4B8B-9401-9E2A5601B080"}
 */
var vl_medida = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"328D6936-36AA-4C69-96D0-CD9EF1C839D3"}
 */
var vl_nombre = null;

/**
 * @properties={typeid:24,uuid:"DC70DC40-1333-40C6-B361-E3BD8FE26FB2"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"BE110DAA-1C93-4A81-B241-41FAF3FA9727"}
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
	
	forms.devolucion_ver_ventas.foundset.newRecord()
	forms.devolucion_ver_ventas.foundset.company_id					= scopes.usuario.vg_company_id
	forms.devolucion_ver_ventas.foundset.comp_cantidad				= vl_cantidad
	forms.devolucion_ver_ventas.foundset.comp_prod_nombre			= vl_nombre
	forms.devolucion_ver_ventas.foundset.comp_precio				= vl_precio
	forms.devolucion_ver_ventas.foundset.calc_total					= vl_cantidad * vl_precio
	forms.devolucion_ver_ventas.foundset.comp_prod_unidad			= vl_medida
	forms.devolucion_ver_ventas.foundset.comp_id					= forms.devolucion_ver.foundset.comp_id
	databaseManager.saveData()
	
	
	forms.devolucion_ver.calculoTotales()
	
	onActionVolver()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7169490C-947A-4C0C-9159-BFB4221078CB"}
 */
function onShow(firstShow, event) {
	vl_nombre = null
	vl_medida = null
	vl_cantidad = null
	vl_precio = null
	
	controller.focusFirstField()
}
