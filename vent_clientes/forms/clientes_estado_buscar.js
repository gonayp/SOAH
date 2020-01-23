/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8A01EB75-DDDD-4230-A4C1-5FCE3DFFB3F1",variableType:4}
 */
var vl_cliente = null;


/**
 * @properties={typeid:24,uuid:"777C67FF-1EE8-476A-9245-7627C27B7C45"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B95AAB8F-BCE6-46E5-88FB-95C433B15914"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	controller.focusFirstField()
	
	vl_cliente = null
}

/**
 * @properties={typeid:24,uuid:"9A4C5058-5338-4215-87AF-32C9B6BB6B6C"}
 */
function onActioBuscar() {
	onActionVolver()
	forms.clientes_estado.foundset.loadRecords(vl_cliente)
	application.showForm(forms.clientes_estado)
}
