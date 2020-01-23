/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"46450F59-A73B-4BDF-9E5E-42C48F38B7D3"}
 */
var vl_nombre = null;


/**
 * @properties={typeid:24,uuid:"2F54E8E4-E363-4510-899F-E11C6C467846"}
 */
function onActionVolver() {
	application.showForm(forms.herr_configuraciones)
}

/**
 *
 * @properties={typeid:24,uuid:"22BDD37B-FA87-4136-9D0A-40DDA8A638E4"}
 * @AllowToRunInFind
 */
function filtrar() {
	foundset.find()
	if(vl_nombre != null && vl_nombre != "") foundset.accesorio_nombre = '#%'+vl_nombre+'%'
	foundset.search()
	
}

/**
 * @properties={typeid:24,uuid:"8715727F-46D8-410F-BFB9-881860697606"}
 */
function onActionLimpiar() {
	vl_nombre = null
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"983CAF80-99B4-429F-9767-04766C73B095"}
 */
function onActionNuevo() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.herr_accesorios_nuevo );
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7FEF013B-7829-48DE-BD37-51DC4E8E8BEF"}
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
 * @properties={typeid:24,uuid:"FE36DB98-45B6-4259-A3AC-C4339DB16ED5"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.herr_accesorios_editar)

}
