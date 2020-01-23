/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F1B09377-409F-4C14-A7B8-9F39F17A9697"}
 */
var vl_nombre = null;


/**
 * @properties={typeid:24,uuid:"9F8D0443-C394-491A-A585-6A470FE93A21"}
 */
function onActionVolver() {
	application.showForm(forms.herr_configuraciones)
}

/**
 *
 * @properties={typeid:24,uuid:"02A4B1DA-504B-45FF-B342-282424BF35C7"}
 * @AllowToRunInFind
 */
function filtrar() {
	foundset.find()
	if(vl_nombre != null && vl_nombre != "") marca_nombre = '#%'+vl_nombre+'%'
	foundset.search()
}

/**
 * @properties={typeid:24,uuid:"D3AC1820-3933-4962-ADDC-617F80E2116F"}
 */
function onActionLimpiar() {
	vl_nombre = null
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"90BE400C-9A3D-4ABD-962E-4408CE297571"}
 */
function onActionNuevo() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.herr_marcas_nuevo );
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"8F0CB71E-CA14-4E26-BE66-B048D3FD6255"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.herr_marcas_editar)

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E2828939-D17E-4144-8E48-F82A61610FC5"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	
}
