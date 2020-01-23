/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AB64B3C9-9ADD-4BCD-9700-E78CD4439300",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DBC2BA20-D7AA-4DC5-9D8D-6531B78E6B51"}
 */
var vl_observacion = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"52558CBB-0C6B-4411-B186-AF8DB8714047",variableType:93}
 */
var vl_fecha = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4DF034BE-3072-4C90-B618-642EEAD180A9"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F8706C47-18E9-4C1E-9A6E-21265F2EECE5",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"06769E2E-7EF3-4C59-BE4A-4EAB0D01E4E3"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"F74AB9B9-8BDC-4A5F-A064-CED839DD9AD9"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow) {
	
	
	controller.focusFirstField()
	
	vl_nombre=null
	vl_observacion=null
	vl_cliente = forms.alquiler_nuevo.vl_cliente
	vl_codigo=generarProximoCodigo()
	vl_fecha=application.getServerTimeStamp()
	
}

/**
 * @properties={typeid:24,uuid:"D46DB1AC-D7CD-40C7-A4FC-365FA64BC372"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(vl_nombre == null || vl_nombre == ""){
		plugins.webnotificationsToastr.error("El nombre de la obra no puede estar vacio.","",scopes.globals.vg_toast_options)
		controller.focusField('f_nombre',true)
		return
	}
	
	/** @type {JSFoundSet<db:/gpp/vent_obras>} */
	var fs_obra = databaseManager.getFoundSet('gpp', 'vent_obras')
	fs_obra.newRecord()
	fs_obra.cliente_id 			= vl_cliente
	fs_obra.company_id			= scopes.usuario.vg_company_id
	fs_obra.obra_codigo			= vl_codigo
	fs_obra.obra_estado			= 1
	fs_obra.obra_fecha_inicio	= vl_fecha
	fs_obra.obra_nombre			= vl_nombre
	fs_obra.obra_observacion	= vl_observacion
	
	databaseManager.saveData()
	forms.alquiler_nuevo.vl_obra = fs_obra.obra_id
	onActionVolver()
}

/**
 * @properties={typeid:24,uuid:"062D4D17-C504-452E-86B4-B58B3016B74E"}
 */
function generarProximoCodigo(){
	var num = 1
	/** @type {JSFoundSet<db:/gpp/vent_obras>} */
	var fs_obra = databaseManager.getFoundSet('gpp', 'vent_obras')
	fs_obra.loadAllRecords()
	fs_obra.sort('obra_codigo desc')
	if(fs_obra.getSize() > 0)
		num = fs_obra.obra_codigo +1
	return num
	
	
}

/**
 * @properties={typeid:24,uuid:"BE9670EE-6689-44EE-BA7B-5513BFD85791"}
 */
function onActionCancelar() {
	vl_nombre=null
	vl_observacion=null
	onActionVolver()
}
