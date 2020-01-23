

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"884FF02A-3669-4110-A980-C870FC186452"}
 */
function onShow(firstShow, event) {
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = foundset.getRecord(index);
		myRecord.calc_total = myRecord.comp_precio * myRecord.comp_dias_alquiler
	}
}
