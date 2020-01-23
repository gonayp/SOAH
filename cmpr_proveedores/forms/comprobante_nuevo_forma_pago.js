/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B43FA154-D5C1-48F1-B45E-C090027DAE63",variableType:8}
 */
var vl_ret_iibb = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"91ED8BFF-A796-439B-AA19-859160410238",variableType:8}
 */
var vl_ret_gan = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5D1CC0E5-3FC6-47E5-923D-DDB08F0D8D64",variableType:8}
 */
var vl_total_factura = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9EF87F3A-56C6-485B-B25E-CC3F539B8021",variableType:8}
 */
var vl_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"95F833C2-BB4C-4367-89CB-44B41E130653",variableType:8}
 */
var vl_cheques = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"017E6DE8-60ED-4E85-A590-BCA25D73F1B7",variableType:8}
 */
var vl_transferencia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A8B9EDBB-797D-41A7-A532-B3D8564BBD9D",variableType:8}
 */
var vl_efectivo = null;

/**
 *
 * @properties={typeid:24,uuid:"2EA09F73-4A81-47BF-9C59-33330A714595"}
 */
function onDataChangePagos() {
	vl_total = vl_efectivo + vl_transferencia + vl_cheques + vl_ret_gan + vl_ret_iibb
}
