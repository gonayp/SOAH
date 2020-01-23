/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4284D85F-B057-4D8E-978E-F22170E565B4"}
 */
var vl_nombre = null;

/**
 *
 * @properties={typeid:24,uuid:"CF8F7FD8-3B9A-4A99-8FDB-C1E2E1575B16"}
 */
function onActionVolver() {
	application.showForm(forms.rep_main)

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"191A6738-1D2A-4E0D-86F8-6D5A66AEC955"}
 */
function onActionNuevo(event) {
	application.showForm(forms.rep_fallas_nuevo)

}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"B62B172F-2B30-4333-B35A-451FFEF191F8"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.rep_fallas_ver)

}

/**
 *
 * @properties={typeid:24,uuid:"AC62E9F4-F55D-4BCC-AC56-9E2AAE7D5987"}
 */
function onActionLimpiar() {
	vl_nombre = null
	filtrar()

}

/**
 *
 * @properties={typeid:24,uuid:"BB4FC920-B0B2-4A8B-8AEB-4042626966FB"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	
	foundset.find()
	if(vl_nombre != "" && vl_nombre != null) foundset.falla_nombre = "#%"+vl_nombre+"%"
	foundset.search()
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"4025C6DC-4CBA-4150-9F4B-AB9993F66945"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow) {
	
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	elements.btn_nuevo.enabled = true
	if (scopes.usuario.vg_permiso_crear == 0) {
		elements.btn_nuevo.enabled = false
	}
	
	
	
}
