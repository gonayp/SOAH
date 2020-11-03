/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"13783A1E-40A2-46C5-A0E1-0298882E746B",variableType:4}
 */
var vl_cliente = null;


/**
 * @properties={typeid:24,uuid:"151230E3-B0A2-4D19-81A6-041064F10DB9"}
 */
function onActionVolver() {
	application.showForm(forms.fact_consultas_main)
}

/**
 * @properties={typeid:24,uuid:"8FF560C2-5E28-4121-AC36-8FC4E8A6509E"}
 */
function onActionLimpiar() {
	vl_cliente = null
	filtrar()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B7D77D1-3C42-44BD-BD17-05FAA2D027C7"}
 */
function onShow(firstShow, event) {
	
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	
	filtrar()
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"8BF2D152-DA62-482F-8A46-87A69B7AE55B"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	foundset.comp_estado_id = '6 || 9'
	if(vl_cliente != null) foundset.cliente_id = vl_cliente
	foundset.search()
	
}
