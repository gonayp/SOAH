/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"32EF3933-8ECD-4C04-8E03-8E5039F2BC58",variableType:8}
 */
var vl_ret_iibb = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B3AEF531-1A62-4F45-9B9A-FC670BB53B5B",variableType:8}
 */
var vl_ret_gan = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BDA07A6C-288D-4D74-A5F0-6B3DFAC7298C",variableType:8}
 */
var vl_total_factura = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B40E85D6-F002-463F-B3BA-2306B068B815",variableType:8}
 */
var vl_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C15316C6-78BD-4EB2-AB1F-575299265674",variableType:8}
 */
var vl_cheques = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4331B52B-B231-4F8C-BF79-F06216561A82",variableType:8}
 */
var vl_transferencia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"85518C14-047C-4AB3-BE6B-4F90C68B75B9",variableType:8}
 */
var vl_efectivo = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5052EA78-BF0F-4E31-859C-1A08CA6F0E73"}
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
