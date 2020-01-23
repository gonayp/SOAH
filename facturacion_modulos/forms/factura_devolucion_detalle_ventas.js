/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"45A6A7EE-FDD6-40C2-9FB4-81A335FFB1F7"}
 */
function onShow(firstShow, event) {
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = foundset.getRecord(index);
		myRecord.calc_total = myRecord.comp_precio * myRecord.comp_cantidad
	}
}
