/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"363BD343-E7AB-4961-84E4-5E51265A3970"}
 */
var vl_nombre = null;


/**
 * @properties={typeid:24,uuid:"3A3A89C4-FBD9-44F7-80E4-3D43604BA0CC"}
 */
function onAction() {
	application.showForm(forms.deposito_menu)

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"2F793412-8A65-4752-8CA0-0696994D58B0"}
 */
function onActionNuevo(event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.deposito_nuevo );

}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"7EFF9D87-217D-4C46-B0BB-8C059501E588"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.deposito_ver );

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"267EC1E7-7F8F-4BAF-9EF1-C223D07341F2"}
 */
function onShow(firstShow, event) {
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onAction()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	elements.btn_nuevo.enabled = true
	if (scopes.usuario.vg_permiso_crear == 0) {
		elements.btn_nuevo.enabled = false
	}
	
	if (firstShow)
		filtrar()
	
	
	
	
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C7369867-BA30-4AE4-B8D3-69DB4F9A57D1"}
 */
function onActionLimpiar(event) {
	vl_nombre = null
	filtrar()

}

/**
 *
 * @properties={typeid:24,uuid:"754302EF-2AD0-4F84-A998-6C6F8E828319"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	if(vl_nombre != null && vl_nombre != "") foundset.deposito_nombre = "#%"+vl_nombre+"%"
	foundset.search()
	
	
}
