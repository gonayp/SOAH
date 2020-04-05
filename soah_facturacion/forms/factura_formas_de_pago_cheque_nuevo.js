/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A9863018-9C6E-4AC2-B934-01DE524EE434",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"374AA048-21F9-48CB-8689-A9532EDA4DA5",variableType:4}
 */
var vl_banco = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"112CDDAE-BAA9-4973-A4D6-5D3987B1FAD5",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E9CC61D5-997E-4784-8456-EEC596A00820",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"342F2F64-BF53-4A13-A4CB-EE35BF030845",variableType:93}
 */
var vl_fecha_emision = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"6E55ABF6-0152-4D80-A549-9748D59E30C6",variableType:93}
 */
var vl_fecha_vencimiento = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"27242541-36A5-4921-A2CF-6882AAD08215",variableType:93}
 */
var vl_fecha_rece = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"08D094A1-2355-4275-A869-47B8243DC7DB"}
 */
var vl_cod_barras = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8A5826E4-D778-4100-B573-C298052477EC"}
 */
var vl_observaciones = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1C2364A0-7E22-4A82-9A6C-7D87C1EBAF3F",variableType:4}
 */
var vl_importe = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"20BCBF78-2BB9-470F-A70C-56CDA88531C5",variableType:4}
 */
var vl_numero = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CDADB084-4C7E-41E5-B302-3FF3124A269B",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"1194A0AB-DC4F-4CA5-B698-3CCCD5D4C2D9"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"6F54A1C5-6728-4E45-AD85-16AFD2F2964E"}
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
 * @properties={typeid:24,uuid:"0BE0B5DA-A0E6-4170-BA91-D327F9AD71A8"}
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
	fs_cheques.cliente_id				= globals.vg_cliente
	fs_cheques.cheque_cod_barras		= vl_cod_barras
	
	databaseManager.saveData(fs_cheques)
	
	forms.factura_formas_de_pago_detalle.foundset.newRecord()
	forms.factura_formas_de_pago_detalle.foundset.fp_banco 			= fs_cheques.banco_id
	forms.factura_formas_de_pago_detalle.foundset.fp_banco_nombre  	= fs_cheques.cheq_cheques_to_bancos.banco_nombre
	forms.factura_formas_de_pago_detalle.foundset.fp_fecha			= fs_cheques.cheque_fecha_vencimiento
	forms.factura_formas_de_pago_detalle.foundset.fp_importe		= fs_cheques.cheque_importe
	forms.factura_formas_de_pago_detalle.foundset.fp_numero			= fs_cheques.cheque_numero
	forms.factura_formas_de_pago_detalle.foundset.fp_tipo			= 2 //cheque
	forms.factura_formas_de_pago_detalle.foundset.fp_cheque_id		= fs_cheques.cheque_id
	
	databaseManager.saveData()
	
	forms.factura_formas_de_pago.vl_cheques += fs_cheques.cheque_importe
	forms.factura_formas_de_pago.onDataChangePagos()
	
	application.getWindow('Dialog').hide()
	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"1AFAA4B5-82EA-48BF-9F55-B7BAFCA57735"}
 */
function onShow(firstShow) {
	
	
	inicializar()
	
	controller.focusFirstField()
	
}

/**
 * @properties={typeid:24,uuid:"983FD546-3671-481D-9CE6-10E783AF3DE9"}
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
	
	
}
