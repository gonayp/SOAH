/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4C7B284D-71A2-40F4-B9F2-6F127CEE1182",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EC496953-D893-4476-8105-A9DA06D15691"}
 */
var vl_observacion = null;


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"38F22422-C0DD-4BF3-A09B-FCD01A274721"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CAC5E652-59C4-47C3-963E-6E1234A20CA6",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"335A0969-D894-4BEC-BEF6-A00EE105DC24"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"DE3CD490-5780-4789-BB23-6115A8CCC683"}
 */
function onShow(firstShow) {
	
	controller.focusFirstField()
	
	vl_codigo=generarProximoCodigo()
	vl_nombre=null
	vl_observacion=null
}

/**
 * @properties={typeid:24,uuid:"42DCB3F6-368C-4C41-888C-1C57269E87D1"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(vl_nombre == null || vl_nombre == ""){
		plugins.webnotificationsToastr.error("El nombre del depósito no puede estar vacio.","",scopes.globals.vg_toast_options)
		controller.focusField('f_nombre',true)
		return
	}
	
	
	forms.deposito_main.foundset.newRecord()
	forms.deposito_main.foundset.company_id					= scopes.usuario.vg_company_id
	forms.deposito_main.foundset.deposito_codigo			= vl_codigo
	forms.deposito_main.foundset.deposito_nombre			= vl_nombre
	forms.deposito_main.foundset.deposito_observacion		= vl_observacion
	
	databaseManager.saveData()
	onActionVolver()
}

/**
 * @properties={typeid:24,uuid:"7C4A67F5-B932-4E40-B74C-3A3FC3DC35F3"}
 */
function generarProximoCodigo(){
	var num = 1
	/** @type {JSFoundSet<db:/gpp/deposito>} */
	var fs_deposito = databaseManager.getFoundSet('gpp', 'deposito')
	fs_deposito.loadAllRecords()
	fs_deposito.sort('deposito_codigo desc')
	if(fs_deposito.getSize() > 0)
		num = fs_deposito.deposito_codigo +1
	return num
	
	
}
