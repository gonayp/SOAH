/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E84724A6-DBF8-48D2-994E-722CC94AFE7D"}
 */
function onShow(firstShow, event) {
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = foundset.getRecord(index);
		myRecord.calcTotal = myRecord.comp_precio * myRecord.comp_cantidad
	}
}
