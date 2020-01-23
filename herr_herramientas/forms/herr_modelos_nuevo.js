/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4F73347C-C1CF-404B-870E-108FE3C1EE46"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"75FA5362-1656-423E-85D5-3332B992BC39",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"F2919713-1FFB-4396-AF79-4446F1B3444D"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"43904256-CF54-4328-9AAF-E9A61DC9688B"}
 */
function limpiarVariables(){
	vl_nombre = null
	vl_codigo = generarProximoCodigo()
}

/**
 * @properties={typeid:24,uuid:"F8BD3C71-CCC1-4F63-BF17-CADE99FECFB0"}
 */
function generarProximoCodigo() {
	var num = 0
	/** @type {JSFoundSet<db:/gpp/herr_modelo>} */
	var fs_modelo = databaseManager.getFoundSet('gpp', 'herr_modelo')
	fs_modelo.loadAllRecords()
	fs_modelo.sort('marca_codigo desc')
	if (fs_modelo.getSize() > 0)
		num = fs_modelo.modelo_codigo + 1
	return num
}

/**
 * @properties={typeid:24,uuid:"B5A0D592-15AE-455D-8115-2D79D06E6DD2"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(vl_codigo == null){
		plugins.webnotificationsToastr.error("Falta el código del modelo.","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	if(vl_nombre == null || vl_nombre == ""){
		plugins.webnotificationsToastr.error("Falta el nombre del modelo.","",globals.vg_toast_options)
		controller.focusField("f_nombre",true)
		return
	}
	
	/** @type {JSFoundSet<db:/gpp/herr_modelo>} */
	var fs_modelo = databaseManager.getFoundSet('gpp', 'herr_modelo')
	fs_modelo.newRecord()
	fs_modelo.company_id					= scopes.usuario.vg_company_id
	fs_modelo.modelo_codigo				= vl_codigo
	fs_modelo.modelo_nombre				= vl_nombre
	
	databaseManager.saveData()
	
	limpiarVariables()
	
	forms.herr_modelos.foundset.loadAllRecords()
	
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2CD78B67-7AB3-4757-8203-395614F089EB"}
 */
function onShow(firstShow, event) {
	if(firstShow)
		limpiarVariables()
		
	controller.focusFirstField()
}
