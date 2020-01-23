/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E52ACD11-8C01-4D53-9E2B-6511F0159547",variableType:8}
 */
var vl_ret_iibb = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C5D5C33D-FB2A-4268-8511-685EE0C84BB7",variableType:8}
 */
var vl_ret_gan = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"610CEADD-B218-46A4-ABC8-33047ECE151E",variableType:8}
 */
var vl_total_factura = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1876F482-59DA-4D7A-81D3-7BF47D160431",variableType:8}
 */
var vl_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BE082DA7-8F3A-4E92-A8C6-826D9AA6CEC6",variableType:8}
 */
var vl_cheques = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EDED21C1-A992-43B9-AB64-9EBEB1121B27",variableType:8}
 */
var vl_transferencia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E1B99DF0-78C7-4F70-AB97-F0929BF44EBF",variableType:8}
 */
var vl_efectivo = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F1AEEC5D-8E0D-4C16-917E-8A94E83E3B78"}
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
