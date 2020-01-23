/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"00EF9420-B94D-4A1E-881A-520CA2EF38D2",variableType:8}
 */
var vl_total = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"910EFFCA-A57D-4C5A-834D-112878D30AE6"}
 */
function onShow(firstShow, event) {
	foundset.loadAllRecords()
	
	vl_total = 0
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = foundset.getRecord(index);
		vl_total += myRecord.calc_cantidad_x_prod
	}
}
