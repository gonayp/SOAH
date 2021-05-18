/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"422C1ADB-9BDD-474E-A649-34BA45009343",variableType:4}
 */
var vl_comp_id = null;

/**
 * @properties={typeid:24,uuid:"F11D6E0E-3BE7-4C94-B1FA-30BFDBF08B76"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"27679DD3-CBAF-45BA-957E-2782F6EE7984"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	foundset.find()
	foundset.comp_id_alquiler = vl_comp_id
	foundset.search()
}
