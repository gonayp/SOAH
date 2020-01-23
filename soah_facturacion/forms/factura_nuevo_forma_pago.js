/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"66A83973-23E0-4915-994D-2350C50A22BA",variableType:8}
 */
var vl_ret_iibb = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"717BCC91-F923-4587-88D4-00CA8D11E0C1",variableType:8}
 */
var vl_ret_gan = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7846F154-ADDA-4F17-AD99-4B99948B92CD",variableType:8}
 */
var vl_total_factura = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"732CF152-CF08-4E6E-BF71-1A9C8C9BCD66",variableType:8}
 */
var vl_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3611E3EA-28D3-4C73-AE84-6611890EEC47",variableType:8}
 */
var vl_cheques = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5759165A-D48B-45D5-B93A-8AACF4CF8A83",variableType:8}
 */
var vl_transferencia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8B8F0BDB-7366-45D5-A22A-5C44DCE5E4BC",variableType:8}
 */
var vl_efectivo = null;

/**
 *
 * @properties={typeid:24,uuid:"DDE19E56-7084-4A11-9D75-FECD44D50E78"}
 */
function onDataChangePagos() {
	vl_total = vl_efectivo + vl_transferencia + vl_cheques + vl_ret_gan + vl_ret_iibb
}
