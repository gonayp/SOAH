/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C412B4B6-9CAB-4304-96CA-0BED6D51B5C8",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B23CAC1C-0BCD-4291-AE9E-13B47A096F3C",variableType:4}
 */
var vl_banco = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D70C9EF6-5F2A-417F-AC1B-D3CB0C2F096A",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D72FE69A-88E6-4FBF-AE4A-0FC35889E1C7",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"3EEFA328-2BC1-4D5E-ABB9-2AC61F89E82F",variableType:93}
 */
var vl_fecha_emision = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"AC1ADA41-6792-4C7B-8B66-75582E74F92F",variableType:93}
 */
var vl_fecha_vencimiento = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"FA67F827-3400-41B3-8066-E7D8BF365B59",variableType:93}
 */
var vl_fecha_rece = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"92490EA4-0EF0-4F9C-A966-EF62E0DB058C"}
 */
var vl_cod_barras = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"15BAF1E2-C94E-44E4-89A3-A981AA55BD20"}
 */
var vl_observaciones = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"14788C98-1B6A-4179-BDAE-0AB8161B6B68",variableType:4}
 */
var vl_importe = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3A21BB34-DBBA-45EF-A642-E3DBC2061B80",variableType:4}
 */
var vl_numero = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2FB1E066-35C4-4FCD-9427-E33145932D57",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"EF5C8AEC-3380-4D89-8CA4-AA2113A46905"}
 */
function onActionVolver() {
	application.showForm(forms.cheques_main)
}

/**
 * @properties={typeid:24,uuid:"8EF5BF80-2040-47A4-8C0E-E0EAE9423FC5"}
 */
function onActionCancelar() {
	inicializar()
	onActionVolver()
}

/**
 * @properties={typeid:24,uuid:"B1572479-BB23-4548-9202-B3AC24C165D1"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	if (vl_numero == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de vl_numero.", "", globals.vg_toast_options)
		controller.focusField("f_numero", true)
		return
	}
	
	if (vl_importe == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de importe.", "", globals.vg_toast_options)
		controller.focusField("f_importe", true)
		return
	}
	
	if (vl_banco == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de banco.", "", globals.vg_toast_options)
		controller.focusField("f_banco", true)
		return
	}
	
	grabar()
}

/**
 * @properties={typeid:24,uuid:"C57E78F9-0653-4C8D-9E4E-42C158991A5B"}
 */
function grabar(){
	
	/** @type {JSFoundSet<db:/gpp/cheq_cheques>} */
	var fs_cheques = databaseManager.getFoundSet('gpp', 'cheq_cheques')
	
	fs_cheques.newRecord()
	fs_cheques.company_id 				= scopes.usuario.vg_company_id
	fs_cheques.banco_id					= vl_banco
	fs_cheques.cheque_estado			= vl_estado
	fs_cheques.cheque_fecha_emision		= vl_fecha_emision
	fs_cheques.cheque_fecha_vencimiento	= vl_fecha_vencimiento
	fs_cheques.cheque_fecha_recepcion	= vl_fecha_rece
	fs_cheques.cheque_importe			= vl_importe
	fs_cheques.cheque_numero			= vl_numero
	fs_cheques.cheque_observacion		= vl_observaciones
	fs_cheques.cheque_tipo_valor		= vl_tipo
	fs_cheques.cliente_id				= vl_cliente
	fs_cheques.cheque_cod_barras		= vl_cod_barras
	
	databaseManager.saveData()
	
	forms.cheques_main.filtrar()
	
	onActionCancelar()
	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"1901FD7A-B4B0-473F-A11F-401892C97BFA"}
 */
function onShow(firstShow) {
	
	if(firstShow)
		inicializar()
	
	controller.focusFirstField()
	
}

/**
 * @properties={typeid:24,uuid:"51AEDFF6-E0DB-4667-80DA-F6F54E81B7D4"}
 */
function inicializar(){
	
	vl_banco = null;
	vl_tipo = 2;
	vl_estado = 2;
	vl_fecha_emision = application.getServerTimeStamp();
	vl_fecha_vencimiento = application.getServerTimeStamp();
	vl_fecha_rece = application.getServerTimeStamp();
	vl_cod_barras = null;
	vl_observaciones = null;
	vl_importe = null;
	vl_numero = null;
	vl_cliente = null
	
	
}
