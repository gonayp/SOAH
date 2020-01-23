/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"84AEF914-3483-4DF2-A00A-E141D239C9E3"}
 */
var vl_nombre = null;

/**
 * @properties={typeid:24,uuid:"B40565F9-EFAC-4521-9862-6A9C7BBE3326"}
 */
function onActionVolver() {
	application.showForm('deposito_menu')
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"B1EC7E1A-BD8B-4BFF-9C94-C2029F536244"}
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



/**
 *
 * @properties={typeid:24,uuid:"C5A740E1-8149-4F8A-9155-9D7C3F5FA8B1"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	if(vl_nombre != null && vl_nombre != "") foundset.categoria_nombre = '#%'+vl_nombre+'%'
	foundset.search()
}

/**
 * @properties={typeid:24,uuid:"58B8674A-22D8-40DB-ABF3-8C84B3225FD7"}
 */
function onActionLimpiar() {
	vl_nombre = null
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"1200645D-E45D-47E8-A9A0-E1F2F4413CFD"}
 */
function onActionNuevo() {
	application.showForm(forms.prod_categorias_nuevo)
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"D0266BE2-26EA-4115-8580-6F1A082988E4"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.prod_categorias_editar)

}
