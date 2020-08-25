/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2E80EC91-62DC-44A7-BD78-FABE15B14F6A"}
 */
var vl_nombre = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1CD40D6E-ADBB-4C91-A248-ABAD4E4B2ACC"}
 */
var vl_codigo = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"5DEEF7CB-3D02-4D56-9785-7376D55470C9",variableType:93}
 */
var vl_fecha_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E2115190-50A2-4EB7-9DC4-F0AD6D621C25",variableType:93}
 */
var vl_fecha_ini = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0CA90671-156D-4741-BA9E-2F3B556F6802",variableType:4}
 */
var vl_pendiente = null;

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"0A498434-C56F-4523-AED7-35E9B187F43C"}
 */
function onActionVolver(event) {
	application.showForm(forms.main_menu)

}

/**
 *
 * @properties={typeid:24,uuid:"5732A252-DE65-4AFE-ACF4-D5886FDA1EFC"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	foundset.transdate = utils.dateFormat(vl_fecha_ini, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_fin, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	if(vl_codigo != null && vl_codigo != '')
		foundset.custcode  = '%'+vl_codigo+'%'
	if(vl_nombre != null && vl_nombre != '')
		foundset.custname = '%'+vl_nombre+'%'
	//if(vl_pendiente == 1)
		//foundset.status = 2
	foundset.search()
	
	foundset.sort("internalid desc")
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6B340BC7-D963-4B1C-9FFF-95A74369B9D4"}
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
 * @properties={typeid:24,uuid:"F087CDBC-903A-4C82-B6D2-8A5F7804CF32"}
 */
function onClick(event) {
	filtrar()
}
