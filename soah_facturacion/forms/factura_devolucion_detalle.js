/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6336C46A-F22F-4908-B4FB-8703A32E7440",variableType:8}
 */
var vl_subtotal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B60D7355-DD71-4D2E-86C1-068EF66922C3",variableType:8}
 */
var vl_total = null;

/**
 * Perform the element default action.
 *
 *
 *
 * @properties={typeid:24,uuid:"B9974D22-6000-459C-8951-B683E1BDBB24"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"11DB9E49-29BD-401B-B18D-D43BF4DC1337"}
 */
function calculoTotales(){
	vl_subtotal = comp_imp_alqu + comp_imp_ventas

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"018B50FB-D9A5-4505-B10D-187530208F57"}
 */
function onShow(firstShow, event) {
	calculoTotales()
	scopes.globals.vg_tipo_comprobante = foundset.comp_codigo
}
