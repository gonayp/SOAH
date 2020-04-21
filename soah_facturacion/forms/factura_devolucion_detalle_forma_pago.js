/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EC3B1B40-7CB5-4189-97E2-C5964FAE83A2",variableType:8}
 */
var vl_ret_iibb = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3AB18EC7-F7D3-4F0C-A393-643B5FB4003B",variableType:8}
 */
var vl_ret_gan = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"39210422-E3A7-4181-98A2-0047A44A7E98",variableType:8}
 */
var vl_total_factura = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"71072100-4E43-4C8C-8E9F-315F49A02B31",variableType:8}
 */
var vl_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"62642C0F-8C7E-4BC5-BDB1-CEE5525795C8",variableType:8}
 */
var vl_cheques = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4E88567A-14AA-41FA-9C5D-4CC3BDDE27FA",variableType:8}
 */
var vl_transferencia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2072717F-E120-49F6-A7CF-AC8DCDF589C5",variableType:8}
 */
var vl_efectivo = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F059CA84-DFBB-4368-AAE0-4FACCB8FAA94"}
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
