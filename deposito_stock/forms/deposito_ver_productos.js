
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EC0136CD-22E4-463E-AC18-552CD3D10895"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	
	foundset.find()
	foundset.prod_productos_to_deposito_stock.deposito_id	= globals.vg_deposito
	foundset.search()
	
}
