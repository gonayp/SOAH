/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9ADA4E01-A8FF-4554-B455-A2BF7C8C0BB2"}
 */
function onShow(firstShow, event) {
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = foundset.getRecord(index);
		myRecord.calc_total = myRecord.comp_precio * myRecord.comp_cantidad
	}
}
