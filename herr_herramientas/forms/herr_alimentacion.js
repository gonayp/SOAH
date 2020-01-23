/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"31FF6634-5EC8-450F-9F47-4CB8A3F097D2"}
 */
var vl_nombre = null;

/**
 * @properties={typeid:24,uuid:"52159540-6033-4441-A7B8-B1E5D8B98F5B"}
 */
function onActionVolver() {
	application.showForm(forms.herr_configuraciones)
}

/**
 *
 * @properties={typeid:24,uuid:"66BEA0B2-FB07-4578-A28E-67787BC34837"}
 * @AllowToRunInFind
 */
function filtrar() {
	foundset.find()
	if(vl_nombre != null && vl_nombre != "") foundset.alimentacion_nombre = '#%'+vl_nombre+'%'
	foundset.search()
	
}

/**
 * @properties={typeid:24,uuid:"2C01916D-8822-480B-BC53-FA4D2007169D"}
 */
function onActionLimpiar() {
	vl_nombre = null
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"51E6C28D-3E77-4A03-990A-FEF87C6EEB96"}
 */
function onActionNuevo() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.herr_alimentacion_nuevo );
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AF770518-151D-4F4D-B0EB-B81AAA5A2E7A"}
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
 * @properties={typeid:24,uuid:"DD521AC4-7A80-410A-89ED-341FD75B5FBB"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.herr_alimentacion_editar)

}
