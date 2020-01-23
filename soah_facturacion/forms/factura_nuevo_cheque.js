/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"56F93A0A-1842-476C-99E0-95243EDCEE7B",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E62976A8-0139-439F-A847-9346C763288A",variableType:4}
 */
var vl_banco = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"59D04826-54F7-4E33-94AE-06906A1880B8",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DCDCB24C-7460-42D1-8434-84DB445D7034",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"C721DB8C-F28F-44A7-90FD-9AF5FE24930C",variableType:93}
 */
var vl_fecha_emision = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"1918BB9B-2BD3-4075-9ABA-D16A90CC6DC0",variableType:93}
 */
var vl_fecha_vencimiento = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A61E719A-84F3-4F89-AEFD-CF0D36A98123",variableType:93}
 */
var vl_fecha_rece = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6AF93478-B058-41EE-B968-A79B205D0DD7"}
 */
var vl_cod_barras = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"22149955-BF4F-40F3-A621-EA5B96FF0B74"}
 */
var vl_observaciones = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9A9DA22D-4DA9-4155-A35E-CE6FC59B5147",variableType:4}
 */
var vl_importe = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EE1B7A63-26F5-4644-93AE-0068B4441D72",variableType:4}
 */
var vl_numero = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C67EC398-BDA5-4B8C-97EB-221F4857DC21",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"AA3E8638-8F1A-4E15-AB4B-941B65D0CF7E"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"F3D03B28-D9CA-436F-AD51-3B72256B3B7F"}
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
 * @properties={typeid:24,uuid:"1020464B-24A6-4044-AF8A-FA7FB56F6818"}
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
	
	databaseManager.saveData(fs_cheques)
	
	forms.factura_devolucion_nuevo_forma_pago_detalle.foundset.newRecord()
	forms.factura_devolucion_nuevo_forma_pago_detalle.foundset.fp_banco 		= fs_cheques.banco_id
	forms.factura_devolucion_nuevo_forma_pago_detalle.foundset.fp_banco_nombre  = fs_cheques.cheq_cheques_to_bancos.banco_nombre
	forms.factura_devolucion_nuevo_forma_pago_detalle.foundset.fp_fecha			= fs_cheques.cheque_fecha_vencimiento
	forms.factura_devolucion_nuevo_forma_pago_detalle.foundset.fp_importe		= fs_cheques.cheque_importe
	forms.factura_devolucion_nuevo_forma_pago_detalle.foundset.fp_numero		= fs_cheques.cheque_numero
	forms.factura_devolucion_nuevo_forma_pago_detalle.foundset.fp_tipo			= 2 //cheque
	forms.factura_devolucion_nuevo_forma_pago_detalle.foundset.fp_cheque_id		= fs_cheques.cheque_id
	
	databaseManager.saveData()
	
	forms.factura_devolucion_nuevo_forma_pago.vl_cheques += fs_cheques.cheque_importe
	forms.factura_devolucion_nuevo_forma_pago.onDataChangePagos()
	
	application.getWindow('Dialog').hide()
	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"0FCCA3A2-C327-44B3-8757-6A2ABFB3812C"}
 */
function onShow(firstShow) {
	
	
	inicializar()
	
	controller.focusFirstField()
	
}

/**
 * @properties={typeid:24,uuid:"3D0B9B1F-204A-44E8-8EFF-2623543F63E9"}
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
