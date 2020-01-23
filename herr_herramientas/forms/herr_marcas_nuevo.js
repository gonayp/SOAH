/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DF9C1720-62C6-4BD5-91FB-9061C11916F6"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5148C35D-EE0E-470E-B0CC-69FA91C81F88",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"6F96E16A-780F-45AF-A401-5DB1696303F5"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"C4414C8C-1C6E-46CF-90F6-503582A3DBBD"}
 */
function limpiarVariables(){
	vl_nombre = null
	vl_codigo = generarProximoCodigo()
}

/**
 * @properties={typeid:24,uuid:"CBB3CCE5-71A8-48BA-B993-BEB095C7AA46"}
 */
function generarProximoCodigo() {
	var num = 0
	/** @type {JSFoundSet<db:/gpp/herr_marca>} */
	var fs_herr_marca = databaseManager.getFoundSet('gpp', 'herr_marca')
	fs_herr_marca.loadAllRecords()
	fs_herr_marca.sort('marca_codigo desc')
	if (fs_herr_marca.getSize() > 0)
		num = fs_herr_marca.marca_codigo + 1
	return num
}

/**
 * @properties={typeid:24,uuid:"643A975D-EB3B-4703-A249-F9EBF7122FE7"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(vl_codigo == null){
		plugins.webnotificationsToastr.error("Falta el código de la marca.","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	if(vl_nombre == null || vl_nombre == ""){
		plugins.webnotificationsToastr.error("Falta el nombre de la marca.","",globals.vg_toast_options)
		controller.focusField("f_nombre",true)
		return
	}
	
	/** @type {JSFoundSet<db:/gpp/herr_marca>} */
	var fs_marca = databaseManager.getFoundSet('gpp', 'herr_marca')
	fs_marca.newRecord()
	fs_marca.company_id					= scopes.usuario.vg_company_id
	fs_marca.marca_codigo				= vl_codigo
	fs_marca.marca_nombre				= vl_nombre
	
	databaseManager.saveData()
	
	limpiarVariables()
	
	forms.herr_marcas.foundset.loadAllRecords()
	
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CED9D20B-5847-4A27-AB81-89C5F36959C5"}
 */
function onShow(firstShow, event) {
	if(firstShow)
		limpiarVariables()
		
	controller.focusFirstField()
}
