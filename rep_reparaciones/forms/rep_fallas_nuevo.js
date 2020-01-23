

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"490A982B-A697-4694-AD9B-A6E0547E5F08",variableType:4}
 */
var vl_codigo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"26E54D78-5949-426A-BF70-7094B36548EE"}
 */
var vl_nombre = null;

/**
 * @properties={typeid:24,uuid:"546F8392-E207-4B9C-A29B-36DD65AC60B8"}
 */
function onActionVolver() {
	application.showForm(forms.rep_fallas)
}

/**
 * @properties={typeid:24,uuid:"A0E33447-1B95-4E95-AB9B-A284AC267B5A"}
 */
function onActionCancelar() {
	
	limpiar()
	
	onActionVolver()
}

/**
 * @properties={typeid:24,uuid:"FB4655CE-344B-4260-89EC-A2E66835D7EB"}
 */
function limpiar(){
	vl_codigo = null
	vl_nombre = null
}

/**
 * @properties={typeid:24,uuid:"E605AB51-D7EE-4789-9957-55CC0F4845AD"}
 */
function onActioGrabar() {
	
	if (vl_codigo == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de codigo.", "", globals.vg_toast_options)
		controller.focusField("f_codigo", true)
		return
	}
	
	if (vl_nombre == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de nombre.", "", globals.vg_toast_options)
		controller.focusField("f_nombre", true)
		return
	}
	
	forms.rep_fallas.foundset.newRecord()
	forms.rep_fallas.foundset.company_id 				= scopes.usuario.vg_company_id
	forms.rep_fallas.foundset.falla_codigo			= vl_codigo
	forms.rep_fallas.foundset.falla_nombre			= vl_nombre
	databaseManager.saveData()
	
	limpiar()
	
	onActionVolver()
	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FAB7DDE4-42B4-4A32-846D-0F7A9612C5C6"}
 */
function onShow(firstShow, event) {
	
	if(firstShow){
		limpiar()
	}
	
	controller.focusField("f_nombre", true)
	
	generarProximoCodigo()
}

/**
 * @properties={typeid:24,uuid:"D88BA572-53AD-4AE5-A04B-B889817F3621"}
 */
function generarProximoCodigo(){
	vl_codigo = 1
	/** @type {JSFoundSet<db:/gpp/rep_fallas>} */
	var fs_fallas = databaseManager.getFoundSet('gpp', 'rep_fallas')
	fs_fallas.loadAllRecords()
	fs_fallas.sort('falla_codigo desc')
	if(fs_fallas.getSize() > 0)
		vl_codigo = fs_fallas.falla_codigo +1
}
