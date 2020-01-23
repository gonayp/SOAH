/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3C30857F-7A04-481C-87FF-6816553A2E59",variableType:8}
 */
var vl_precio_inicial = null;

/**
 * @properties={typeid:24,uuid:"F8D90A04-1655-4379-9BC2-241B503CEA34"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"0BA6BB2B-4589-428A-A8FB-42793045631B"}
 */
function onActioGrabar() {
	
	
	
	databaseManager.saveData()
	application.getWindow('Dialog').hide()
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8B5994C4-F154-47C7-9508-7A13EE4A7193"}
 */
function onShow(firstShow, event) {
	
	
	controller.focusFirstField()
}

