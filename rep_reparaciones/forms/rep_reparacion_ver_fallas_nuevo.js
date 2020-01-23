/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8DB1F8BF-DE3D-4E0E-9B2E-FECBF8935C93"}
 */
var vl_observacion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9307B515-3942-48A7-86FE-7C2978373C41",variableType:4}
 */
var vl_falla = null;

/**
 * @properties={typeid:24,uuid:"FFEBBDCD-D6B1-4DDA-8B49-0897CAD2B5E3"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"5045922C-B572-45AA-A274-84D57E577281"}
 */
function onActioGrabar() {
	if (vl_falla == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de falla.", "", globals.vg_toast_options)
		controller.focusField("f_vl_falla", true)
		return
	}
	
	grabar()
	
	onActionVolver()
	
}

/**
 * @properties={typeid:24,uuid:"BF05A901-F284-4F1B-9664-F056724B7EFD"}
 */
function grabar(){
	
	
	forms.rep_reparacion_ver_fallas.foundset.newRecord()
	forms.rep_reparacion_ver_fallas.foundset.company_id				= scopes.usuario.vg_company_id
	forms.rep_reparacion_ver_fallas.foundset.falla_id				= vl_falla
	forms.rep_reparacion_ver_fallas.foundset.fallas_observacion		= vl_observacion
	forms.rep_reparacion_ver_fallas.foundset.fallas_reparacion_id	= forms.rep_reparacion_ver_solicitado.foundset.reparacion_id
	databaseManager.saveData()
	
}

/**
 * @properties={typeid:24,uuid:"25CA5AA4-314F-4747-B145-00CC9DA44F82"}
 */
function onActioGrabarOtra() {
	if (vl_falla == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de falla.", "", globals.vg_toast_options)
		controller.focusField("f_vl_falla", true)
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
 * @properties={typeid:24,uuid:"C373650C-FA25-4A7C-A928-C89A38901224"}
 */
function onShow(firstShow, event) {
	inicializar()
}

/**
 * @properties={typeid:24,uuid:"9C085812-ECD7-4CB7-A711-8EC006443AB5"}
 */
function inicializar(){
	vl_falla = null
	vl_observacion = null
	
	controller.focusFirstField()
}
