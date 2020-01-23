/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"92B411AA-8673-44CA-BDA2-31537E6A1A9A"}
 */
var vl_nombre = null;


/**
 *
 * @properties={typeid:24,uuid:"C491EC28-9F6C-4DB5-9C90-74D25A495B73"}
 * @AllowToRunInFind
 */
function filtrar() {
	foundset.find()
	if(vl_nombre != null && vl_nombre != "") foundset.modelo_nombre = '#%'+vl_nombre+'%'
	foundset.search()
}

/**
 * @properties={typeid:24,uuid:"ECAF9EBB-89DE-4784-AFFF-4176931BCDAD"}
 */
function onActionLimpiar() {
	vl_nombre = null
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"27FDFE98-837A-4C88-940D-5D2E95F7CA41"}
 */
function onActionVolver() {
	application.showForm(forms.herr_configuraciones)
}

/**
 * @properties={typeid:24,uuid:"4476E260-73C5-4587-9422-B734F81FB0DF"}
 */
function onActionNuevo() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.herr_modelos_nuevo );
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EB9E4541-B98E-4D72-9E34-5D06F32BAE93"}
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

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"C5F7B733-EDEF-477F-897E-E6271C41DFBB"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.herr_modelos_editar)

}
