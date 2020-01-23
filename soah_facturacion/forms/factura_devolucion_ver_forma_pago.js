/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"43944EFA-1884-4C08-8CDE-1680BAAD7675",variableType:8}
 */
var vl_ret_iibb = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9F585123-8AA0-4731-BF4F-B6B78F4F1C32",variableType:8}
 */
var vl_ret_gan = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7C0317FB-BAAC-43F8-8E4E-E701E6C47127",variableType:8}
 */
var vl_total_factura = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E69265A5-920E-42C2-AC60-7798DF107B1F",variableType:8}
 */
var vl_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"200F7CC6-3E40-477A-9A2E-68570C82F4DE",variableType:8}
 */
var vl_cheques = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F577F118-CA6D-42DF-AA2C-4205FFF02A3A",variableType:8}
 */
var vl_transferencia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"35A5B616-2B93-4CFC-870E-40C4F93588D5",variableType:8}
 */
var vl_efectivo = null;



/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2000286E-5D43-43A0-B89E-42B37654E586"}
 */
function onShow(firstShow, event) {
	
	vl_ret_gan= 0
	vl_ret_iibb = 0
	vl_cheques = 0
	vl_transferencia = 0
	vl_efectivo = 0
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myFormaPago = foundset.getRecord(index);
		switch (myFormaPago.forma_pago_id) {
		case 1://Efectivo
			vl_efectivo = myFormaPago.forma_pago_imp
			break;
		case 2://Cheques
			vl_cheques = myFormaPago.forma_pago_imp
			break;
		case 3://Transferencia
			vl_transferencia = myFormaPago.forma_pago_imp
			break;
		case 4://Ret IIBB
			vl_ret_iibb = myFormaPago.forma_pago_imp
			break;
		case 5://Ret gan
			vl_ret_gan = myFormaPago.forma_pago_imp
			break;
		}
	}
	
	vl_total = vl_ret_gan+	vl_ret_iibb +	vl_cheques +	vl_transferencia +	vl_efectivo
}
