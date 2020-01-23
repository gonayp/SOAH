/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"44B3A0BB-73FF-4179-8CF6-761C4347FE27"}
 */
var vl_observacion = null;



/**
 * @properties={typeid:24,uuid:"6DCF4082-E3B1-4303-B5B2-94E79CF54A29"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"8C1E7840-D576-4E79-8D8E-9D0FC177DA49"}
 */
function onActioGrabar() {
	if (vl_observacion == null || vl_observacion == "") {
		plugins.webnotificationsToastr.error("Falta completar el campo de concepto.", "", globals.vg_toast_options)
		controller.focusField("f_observa", true)
		return
	}
	
	grabar()
	
	onActionVolver()
	
}

/**
 * @properties={typeid:24,uuid:"FD4571BA-1779-417A-B612-F77791217A2C"}
 */
function grabar(){
	
	
	forms.rep_reparacion_ver_diagnosticos.foundset.newRecord()
	forms.rep_reparacion_ver_diagnosticos.foundset.company_id				= scopes.usuario.vg_company_id
	forms.rep_reparacion_ver_diagnosticos.foundset.concepto_observacion		= vl_observacion
	forms.rep_reparacion_ver_diagnosticos.foundset.reparacion_id			= forms.rep_reparacion_ver_solicitado.foundset.reparacion_id
	databaseManager.saveData()
	
}

/**
 * @properties={typeid:24,uuid:"23D148B4-44C6-4B3D-93DF-2CB4FCDFE7F3"}
 */
function onActioGrabarOtra() {
	if (vl_observacion == null || vl_observacion == "") {
		plugins.webnotificationsToastr.error("Falta completar el campo de concepto.", "", globals.vg_toast_options)
		controller.focusField("f_observa", true)
		return
	}
	
	grabar()
	
	inicializar()
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"356299F5-988D-4381-AC32-FAAB450E3257"}
 */
function onShow(firstShow, event) {
	inicializar()
}

/**
 * @properties={typeid:24,uuid:"10D0D639-5895-482A-888C-31C205B84C8D"}
 */
function inicializar(){
	vl_observacion = null
	
	controller.focusFirstField()
}
