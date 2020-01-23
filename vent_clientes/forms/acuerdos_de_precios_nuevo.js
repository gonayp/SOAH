/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"95C6081E-E7C0-4F28-B347-FE2CE8BF80E8",variableType:4}
 */
var vl_des_aum = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"244A599C-A034-45CC-B7AC-9E9B33CFC309",variableType:8}
 */
var vl_valor = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DE890CCF-95BA-4B63-AD68-E8308DBDFB5D",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"82DFE76A-31E6-4501-A434-34C1279200A4"}
 */
var vl_nombre = null;


/**
 * @properties={typeid:24,uuid:"70F72758-9B06-4FD1-AE30-29BE2EDE10EF"}
 */
function onActionVolver() {
	application.showForm(forms.acuerdos_de_precios)
}

/**
 * @properties={typeid:24,uuid:"0C4D74CD-47F8-4907-910B-96966003526D"}
 */
function onActionCancelar() {
	vl_nombre = null
	vl_tipo = 1
	vl_valor = null
	vl_des_aum = 2
	onActionVolver()
}

/**
 * @properties={typeid:24,uuid:"78EA27BB-B186-4F84-A55A-6A579280B8E0"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(vl_nombre == null || vl_nombre== ""){
		plugins.webnotificationsToastr.error("Falta el nombre del acuerdo de precios.","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	if(vl_valor == null){
		plugins.webnotificationsToastr.error("Falta un valor o porcentaje para el acuerdo de precios.","",globals.vg_toast_options)
		controller.focusField("f_valor",true)
		return
	}

	/** @type {JSFoundSet<db:/gpp/vent_acuerdos_d_precios>} */
	var fs_acuerdo = databaseManager.getFoundSet('gpp', 'vent_acuerdos_d_precios')
	fs_acuerdo.newRecord()
	fs_acuerdo.acuerdo_precios_nombre 	= vl_nombre
	fs_acuerdo.acuerdo_precios_tipo		= vl_tipo
	fs_acuerdo.company_id				= scopes.usuario.vg_company_id
	if(vl_tipo == 1)
		fs_acuerdo.acuerdo_precios_porcentaje = vl_valor
	else
		fs_acuerdo.acuerdo_precios_valor	= vl_valor
	databaseManager.saveData()
	
	forms.acuerdos_de_precios.foundset.loadAllRecords()
	
	onActionVolver()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3600E42B-222D-43D1-98CB-0938CF8EF737"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		vl_nombre = null
		vl_tipo = 1
		vl_valor = null
		vl_des_aum = 2
	}
	
	controller.focusFirstField()
}
