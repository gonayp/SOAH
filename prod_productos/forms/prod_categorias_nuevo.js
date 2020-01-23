/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8D23EFE8-6E34-436E-8A83-59FC5AB94A6B"}
 */
var vl_observacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"33727CF8-1D1D-4E4D-9EF1-5E134EBFF5B1"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7DCE6815-81E6-4265-8627-21FDA49485AC",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"6EEF2662-76EE-41A0-BAC8-1064AA9FD919"}
 */
function onActionVolver() {
	application.showForm(forms.prod_categorias)
}

/**
 * @properties={typeid:24,uuid:"1507B76D-01D4-4A1C-8C67-F54ECD2E61A4"}
 */
function onActionCancelar() {
	limpiarVariables()
	onActionVolver()
}

/**
 * @properties={typeid:24,uuid:"E142BA53-5F9A-4A96-BA05-E8893BEB871D"}
 */
function limpiarVariables(){
	vl_codigo = generarProximoCodigo()
	vl_nombre = null
	vl_observacion = null
}

/**
 * @properties={typeid:24,uuid:"C72679D5-5179-4B7C-BBD3-AAD72BAB7644"}
 */
function generarProximoCodigo() {
	var num = 0
	/** @type {JSFoundSet<db:/gpp/prod_categoria>} */
	var fs_categoria = databaseManager.getFoundSet('gpp', 'prod_categoria')
	fs_categoria.loadAllRecords()
	fs_categoria.sort('categoria_codigo desc')
	if (fs_categoria.getSize() > 0)
		num = fs_categoria.categoria_codigo + 1
	return num
}

/**
 * @properties={typeid:24,uuid:"78ADE89C-AE4E-4FB9-99C6-755EFABA403D"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(vl_codigo == null){
		plugins.webnotificationsToastr.error("Falta el código de la categoría.","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	if(vl_nombre == null || vl_nombre == ""){
		plugins.webnotificationsToastr.error("Falta el nombre de la categoría.","",globals.vg_toast_options)
		controller.focusField("f_nombre",true)
		return
	}
	
	
	/** @type {JSFoundSet<db:/gpp/prod_categoria>} */
	var fs_categoria = databaseManager.getFoundSet('gpp', 'prod_categoria')
	fs_categoria.newRecord()
	fs_categoria.company_id				= scopes.usuario.vg_company_id
	fs_categoria.categoria_codigo		= vl_codigo
	fs_categoria.categoria_nombre		= vl_nombre
	fs_categoria.categoria_observacion	= vl_observacion
	databaseManager.saveData()
	
	limpiarVariables()
	forms.prod_categorias.foundset.loadAllRecords()
	onActionVolver()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"566132FA-F49A-41A1-901F-6270DAB38FFA"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		limpiarVariables()
	}
	
	controller.focusFirstField()
}
