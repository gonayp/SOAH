/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1DEF0783-85F2-470B-967B-52021809B76B",variableType:4}
 */
var vl_proveedor = null;


/**
 *
 * @properties={typeid:24,uuid:"E259D5CB-17E6-46BD-AFC1-A92C2736EBF3"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()

}

/**
 *
 * @properties={typeid:24,uuid:"385F0F0E-3646-4F72-AD2D-C627F1428E8B"}
 */
function onActionBuscar() {
	
	onActionVolver()
	
	forms.proveedores_estado.foundset.loadRecords(vl_proveedor)
	application.showForm(forms.proveedores_estado)

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5688AD5F-E323-4CA5-BF0B-B8B5AFE67658"}
 */
function onShow(firstShow, event) {
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	vl_proveedor = null
	
	controller.focusFirstField()
	
	
	
	
}
