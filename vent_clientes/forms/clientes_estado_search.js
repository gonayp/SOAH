/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"6842F710-2EAD-4ECF-ABC7-6335D2283BC9",variableType:8}
 */
var vl_cliente = null;


/**
 *
 * @properties={typeid:24,uuid:"4EF56907-5EA5-426B-9746-0B0AF7FBEEA8"}
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
 *
 * @properties={typeid:24,uuid:"F8E1DF51-279C-435B-8CAF-C970C6512C2A"}
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
 *
 * @properties={typeid:24,uuid:"F94914A2-0F52-4AF8-8D69-C2319948A15C"}
 */
function onActioBuscar() {
	onActionVolver()
	forms.clientes_estado.foundset.loadRecords(vl_cliente)
	application.showForm(forms.clientes_estado)
}
