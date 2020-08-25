/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"7027B0E9-6A8A-4591-AC10-B17264457B29",variableType:93}
 */
var vl_fecha_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"43557910-1917-4F2B-ADB9-B52B7DFD6D36",variableType:93}
 */
var vl_fecha_ini = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"21241F6A-8EAC-4C90-980C-A04CD14FE231",variableType:4}
 */
var vl_pendiente = null;


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E6B0B3EC-824C-4293-A83C-9ECA67AB3BA1"}
 */
function onActionVolver(event) {
	application.showForm(forms.main_menu)

}

/**
 *
 * @properties={typeid:24,uuid:"86B37E46-A4F0-4CDE-8CB0-AA9934C73F4A"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	foundset.transdate = utils.dateFormat(vl_fecha_ini, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_fin, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	if(vl_pendiente == 1)
		foundset.status = 2
	foundset.search()
	
	foundset.sort("internalid desc")
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1D636DB3-B200-4873-92C2-81D03946D344"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		vl_pendiente = 1
		vl_fecha_fin = application.getServerTimeStamp()
		vl_fecha_ini = new Date(2019,1,1)
		filtrar()
	}
}




/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4785D5BE-1522-4F15-8EE2-3D3726FCF4D3"}
 */
function onClick(event) {
	filtrar()
}
