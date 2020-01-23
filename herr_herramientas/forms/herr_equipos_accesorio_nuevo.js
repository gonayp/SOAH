/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7C05D637-72CD-4F3D-86CE-835058C72FC0"}
 */
var vl_observacion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E98C35E8-F3EE-477D-8CF6-95AAEBFBDE38",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A1B79B17-8059-4829-B064-3FCAA136F616",variableType:4}
 */
var vl_accesorio = null;


/**
 * @properties={typeid:24,uuid:"C0089644-9796-4FE0-99D5-9018F0D850AF"}
 */
function onActionVolver() {
	application.getWindow("Dialog").hide()
}


/**
 * @properties={typeid:24,uuid:"38AA2DDA-2832-48EC-8520-14866C15D324"}
 */
function limpiarVariables(){
	
	vl_accesorio = null
	vl_estado = 1
	vl_observacion = null
	
}

/**
 * @properties={typeid:24,uuid:"8C0D0252-96C9-468C-9A2E-15221B3974FF"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(vl_accesorio == null){
		plugins.webnotificationsToastr.error("Falta el tipo de accesorio.","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	
//	/** @type {JSFoundSet<db:/gpp/herr_accesorios_d_equipo>} */
//	var fs_herr_accesorios_d_equipo = databaseManager.getFoundSet('gpp', 'herr_accesorios_d_equipo')
	
	forms.herr_equipos_editar_accesorios.foundset.newRecord()
	forms.herr_equipos_editar_accesorios.foundset.company_id			= scopes.usuario.vg_company_id
	forms.herr_equipos_editar_accesorios.foundset.accesorio_estado		= vl_estado
	forms.herr_equipos_editar_accesorios.foundset.accesorio_id			= vl_accesorio
	forms.herr_equipos_editar_accesorios.foundset.accesorio_observacion	= vl_observacion
	forms.herr_equipos_editar_accesorios.foundset.equipo_id				= forms.herr_equipos_editar.foundset.equipo_id
	
	databaseManager.saveData()
	
	onActionVolver()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"27F0497D-A9C4-4430-923D-7171794DDC63"}
 */
function onShow(firstShow, event) {
	limpiarVariables()
	controller.focusFirstField()
}
