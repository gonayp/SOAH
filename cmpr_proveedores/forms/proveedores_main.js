/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"96DBB03E-83FC-4376-A1C6-B47315188643",variableType:4}
 */
var vl_codigo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8C9EE17F-88B9-4DFD-88FC-440F2F49652E"}
 */
var vl_nombre = null;

/**
 *
 * @properties={typeid:24,uuid:"D8DCF6F2-BB3C-477F-9A0F-F850C76668AF"}
 */
function onActionVolver() {
	application.showForm('soah_main')

}

/**
 * 
 *
 * @properties={typeid:24,uuid:"27009DA2-F16B-4A2E-B993-AEF589842464"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	if(vl_codigo != null) foundset.proveedor_codigo = vl_codigo
	if(vl_nombre != null && vl_nombre != "") foundset.cmpr_proveedores_to_core.core_nombre = "#%"+vl_nombre+"%"
	foundset.search()
}

/**
 * @properties={typeid:24,uuid:"2F33033E-AF64-4E75-A62B-ADE196127D3E"}
 */
function onActionuevo() {
	application.showForm(forms.proveedor_nuevo)
}

/**
 * @properties={typeid:24,uuid:"64BA4E1F-8675-4DD0-8A61-5AD8E8486CFE"}
 */
function onActionLimpiar() {
	vl_codigo = null
	vl_nombre = null
	filtrar()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7FC35C3F-7FD2-449E-A712-4B6C290D5AEE"}
 */
function onShow(firstShow, event) {
	globals.asignarPermisos(controller.getName())
	if(scopes.usuario.vg_permiso_lectura == 0){
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.")
	}
	
	if(scopes.usuario.vg_permiso_crear == 0){
		elements.btn_nuevo.enabled = false
	}
	else{
		elements.btn_nuevo.enabled = true
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
 * @properties={typeid:24,uuid:"56A60DD9-8D3E-4374-A611-523D70C3947E"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.proveedor_editar)

}
