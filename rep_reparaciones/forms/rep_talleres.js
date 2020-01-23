/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D9B1A7E1-2975-4630-B72F-7B3C1F445380"}
 */
var vl_nombre = null;


/**
 *
 * @properties={typeid:24,uuid:"EBC1A04F-CDB3-4B56-A1C8-CE4CDCCA3290"}
 */
function onActionVolver() {
	application.showForm(forms.rep_main)

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"29F5C23C-6FF3-450E-8296-248E48C9D60D"}
 */
function onActionNuevo(event) {
	application.showForm(forms.rep_talleres_nuevo)

}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"79D34085-AD1D-475E-B494-49AB10C5086B"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.rep_talleres_ver)

}

/**
 *
 * @properties={typeid:24,uuid:"07E5E54C-F26E-4D06-85A0-5593A25433FA"}
 */
function onActionLimpiar() {
	vl_nombre = null
	filtrar()

}

/**
 *
 * @properties={typeid:24,uuid:"9E1371DB-CD11-42AD-A906-2D0662B9E884"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	
	foundset.find()
	if(vl_nombre != "" && vl_nombre != null) foundset.taller_nombre = "#%"+vl_nombre+"%"
	foundset.search()
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"C8A84E17-A770-4DA9-9EFD-092A58243715"}
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
