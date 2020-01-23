
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"175CFE7C-64D5-483B-AC30-765C6B1DBF61"}
 */
function onShow(firstShow, event) {
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = foundset.getRecord(index);
		myRecord.calc_total = myRecord.comp_precio * myRecord.comp_cantidad
	}
}
