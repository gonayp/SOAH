/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4ABAA113-6F44-496F-8768-70AE285ED9C0",variableType:4}
 */
var vl_consumible = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F5C78A6C-7C21-48CE-A9D5-6C1E02BF522E"}
 */
var vl_observacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6C8C59C2-05D2-4C9D-8A05-18B90601F6BD"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C7B421A1-3146-499A-A033-342C56084DC0",variableType:4}
 */
var vl_codigo = null;


/**
 * @properties={typeid:24,uuid:"6529886C-6101-4B77-870D-F8AB8F58CFF0"}
 */
function onActionVolver() {
	application.showForm(forms.herr_categorias)
}

/**
 * @properties={typeid:24,uuid:"3F1FD8D1-B21E-462D-8751-1E5F8D9C29CB"}
 */
function onActionCancelar() {
	limpiarVariables()
	onActionVolver()
}

/**
 * @properties={typeid:24,uuid:"1BA9EA85-169F-4A6A-9DC7-F38588D9792C"}
 */
function limpiarVariables(){
	vl_codigo = generarProximoCodigo()
	vl_nombre = null
	vl_observacion = null
	vl_consumible = null
}


/**
 * @properties={typeid:24,uuid:"8C3FEAFF-7E4F-481D-87BF-FB87C293AC69"}
 */
function generarProximoCodigo() {
	var num = 0
	/** @type {JSFoundSet<db:/gpp/herr_categoria>} */
	var fs_categoria = databaseManager.getFoundSet('gpp', 'herr_categoria')
	fs_categoria.loadAllRecords()
	fs_categoria.sort('categoria_codigo desc')
	if (fs_categoria.getSize() > 0)
		num = fs_categoria.categoria_codigo + 1
	return num
}


/**
 * @properties={typeid:24,uuid:"AE29FFB6-8294-4562-9C07-A5A3FEE660E0"}
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
	
	
	/** @type {JSFoundSet<db:/gpp/herr_categoria>} */
	var fs_categoria = databaseManager.getFoundSet('gpp', 'herr_categoria')
	fs_categoria.newRecord()
	fs_categoria.company_id				= scopes.usuario.vg_company_id
	fs_categoria.categoria_codigo		= vl_codigo
	fs_categoria.categoria_nombre		= vl_nombre
	fs_categoria.categoria_observacion	= vl_observacion
	fs_categoria.categoria_consumible	= vl_consumible
	databaseManager.saveData()
	
	limpiarVariables()
	forms.herr_categorias.foundset.loadAllRecords()
	onActionVolver()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"838ACAE8-1BA7-4960-849A-865D5F7BF3F0"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		limpiarVariables()
	}
	
	controller.focusFirstField()
}
