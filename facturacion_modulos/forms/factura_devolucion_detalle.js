/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D863FD35-B5DB-4CDC-B39B-EA7E00E373BA",variableType:8}
 */
var vl_subtotal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1BEE0F50-BCA6-4F3E-9A4A-DA625EC0A2E3",variableType:8}
 */
var vl_total = null;

/**
 * Perform the element default action.
 *
 *
 *
 * @properties={typeid:24,uuid:"43987F38-6962-43E8-9A0F-9C587154DACF"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"E8FEDB6D-3782-4C7D-A6B7-241561125B44"}
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
 * @properties={typeid:24,uuid:"361A754C-17F6-4DE2-8903-4BFDEF47404C"}
 */
function onShow(firstShow, event) {
	calculoTotales()
	scopes.globals.vg_tipo_comprobante = foundset.comp_codigo
}


