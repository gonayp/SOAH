/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"A5CA40D6-BFE4-4B8F-8359-CF2BC0F4C84B"}
 */
var vl_codigo = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"C9EB1B07-EEB8-4946-AA07-488E2E308C15"}
 */
var vl_nombre = null;

/**
 * @type {Date}
 *
 *
 * @properties={typeid:35,uuid:"9FEEBACA-6B52-448D-9394-6302C03A4A82",variableType:93}
 */
var vl_fecha_fin = null;

/**
 * @type {Date}
 *
 *
 * @properties={typeid:35,uuid:"E9D53EF2-FA2E-4D3C-88EB-6CB99D0DCE1A",variableType:93}
 */
var vl_fecha_ini = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"227B1271-5B57-4657-BC55-62FBD014936B",variableType:8}
 */
var vl_pendiente = null;

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"DBEDD344-0E7E-432A-A872-2C40357AE52C"}
 */
function onActionVolver(event) {
	application.showForm(forms.main_menu)

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"51F0087D-8818-4EB6-B5A4-BF6E4DDB6641"}
 */
function onShow(firstShow, event) {
	foundset.loadAllRecords()
	
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"A53CC996-F417-46C8-9EFD-A4C47DF76526"}
 */
function onAction(event) {
	// TODO Auto-generated method stub

}
