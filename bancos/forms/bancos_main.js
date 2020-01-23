/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"87B9FF9F-1B8C-42C4-9889-074D80DE0902"}
 */
var vl_nombre = null;


/**
 * @properties={typeid:24,uuid:"A09DBB9A-32C3-4C69-B483-0F95115E3563"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 * @properties={typeid:24,uuid:"ED767572-C1B1-4CA5-8F5C-D50E6C43AA8F"}
 */
function onActionNuevo() {
	application.showForm(forms.bancos_nuevo)
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"B1FFF30C-AF8E-4FEE-9378-6DAB2C45A30F"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.bancos_ver)

}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"D5D65FBE-8952-42A6-AB93-E107B619A963"}
 */
function filtrar(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	return true
}

/**
 * @properties={typeid:24,uuid:"F373052D-C7DB-4BFE-BCA6-E870AAAAF19E"}
 */
function onActionLimpiar() {
	// TODO Auto-generated method stub
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2C5A1F57-1466-4A06-B1E2-DAB8A6AFA6EB"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
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
