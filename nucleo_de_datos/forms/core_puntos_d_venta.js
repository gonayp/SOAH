/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"05852DB1-4E2C-488E-A14F-D3E957350A5D"}
 */
var vl_nombre = null;


/**
 * @properties={typeid:24,uuid:"E2467B00-A0C4-405C-8F9B-123EF482E430"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 * @properties={typeid:24,uuid:"D9A26709-F094-4B5C-99EE-9D43069EC39D"}
 */
function onActionNuevo() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.core_puntos_d_venta_nuevo );
}

/**
 *
 * @properties={typeid:24,uuid:"B26F205B-E9B6-49B3-9593-BFE2C2C6CC31"}
 * @AllowToRunInFind
 */
function filtrar() {
	foundset.find()
	if(vl_nombre != null && vl_nombre != "") foundset.pv_nombre = '#%'+vl_nombre+'%'
	foundset.search()
}

/**
 * @properties={typeid:24,uuid:"B422350E-BB7C-4A34-8B09-8FA0D1C1DF06"}
 */
function onActionLimpiar() {
	vl_nombre = null
	filtrar()
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"2508EEB4-5438-451C-901D-7D1956B52DD7"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {

	application.showForm(forms.core_puntos_d_venta_datos)

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"91185224-4696-4948-B316-121CE57B5B1C"}
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
