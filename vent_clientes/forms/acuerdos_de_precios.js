/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EBC996D2-D597-444C-9131-7F0109B95A8A"}
 */
var vl_nombre = null;


/**
 * @properties={typeid:24,uuid:"152847DA-DC2A-47F6-BE08-354E900E8ABD"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 *
 *
 * @properties={typeid:24,uuid:"02E8DAEF-1135-400F-969D-DB4625BB7E6A"}
 * @AllowToRunInFind
 */
function filtrar()
{
	foundset.find()
	if(vl_nombre != null && vl_nombre != "")foundset.acuerdo_precios_nombre = '#%'+vl_nombre+'%'
	foundset.search()
	
}

/**
 * @properties={typeid:24,uuid:"FE746636-A103-42B2-9EAD-9C44B1E9829C"}
 */
function onActionLimpiar() {
	vl_nombre = null
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"B14CF362-6F12-4817-87CC-0BBA31E3E8A5"}
 */
function onActionNuevo() {
	application.showForm(forms.acuerdos_de_precios_nuevo)
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"F4762AB1-8AA9-4F49-AB26-95F4C4F8F51E"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.acuerdos_de_precios_editar)

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D64AEA4E-BC93-4728-B8E2-13D3B69D0FAE"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.","",globals.vg_toast_options)
	}
	
	elements.btn_nuevo.enabled = true
	if (scopes.usuario.vg_permiso_crear == 0) {
		elements.btn_nuevo.enabled = false
	}
	
	
}
