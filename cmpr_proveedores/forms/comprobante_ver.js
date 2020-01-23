/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D12CD2F1-8566-45BC-9015-2264EBB6E0AA",variableType:8}
 */
var vl_subtotal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"016C2637-9B9C-4C1D-8CC4-02254EE3277D",variableType:8}
 */
var vl_total = null;

/**
 * Perform the element default action.
 *
 *
 *
 * @properties={typeid:24,uuid:"3F88DF9A-DA9C-47C2-80EF-B17316B8396B"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.comprobantes_main)
}



/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3FFEAFC9-990F-4B26-8A97-163863B2ADF4"}
 */
function onShow(firstShow, event) {
	
	scopes.globals.vg_tipo_comprobante = 5
}


