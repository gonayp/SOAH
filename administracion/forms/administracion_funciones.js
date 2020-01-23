/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2802B16C-AE02-434A-8590-EF5E8E35CD31"}
 */
var vl_nombre = null;


/**
 *
 * @properties={typeid:24,uuid:"FC8A9E92-8DCB-40B0-8253-FE439D0E062C"}
 */
function onActionVolver() {
	application.showForm(forms.administracion_main)

}

/**
 *
 * @properties={typeid:24,uuid:"9F895121-60AB-4BC7-A0BB-466520FA524F"}
 * @AllowToRunInFind
 */
function filtrar() {
	foundset.find()
	if(vl_nombre != null && vl_nombre != "") foundset.formulario_nombre = "#%"+vl_nombre+"%"
	foundset.search()
}

/**
 *
 * @properties={typeid:24,uuid:"96C2C081-77E1-4526-AA06-B8377534FB3B"}
 */
function onActionLimpiar() {
	vl_nombre = null
	filtrar()

}

/**
 *
 * @properties={typeid:24,uuid:"6DF38D05-6ED8-4F13-876B-3B2CAF86EA59"}
 */
function onActionNuevo() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.administracion_funciones_nuevo );

}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"7A9F41AE-453E-48D6-BABD-9160D17D671B"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.administracion_funciones_editar)

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"E9E37A8B-3AA6-465C-A5D9-B12AB26EFD4D"}
 */
function onShow(firstShow ) {
	if(scopes.usuario.vg_super_usuario != 1){
		elements.btn_nuevo.visible = false
		
	}
}
