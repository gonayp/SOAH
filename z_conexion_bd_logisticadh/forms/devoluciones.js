/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"BB0357AE-D6A1-4350-8E49-C2DAAE9332F4",variableType:93}
 */
var vl_fecha_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"702B1A45-6A33-4008-BFEE-49C8F0B34C17",variableType:93}
 */
var vl_fecha_ini = null;

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"89643959-E1E8-486B-A62F-FD8B8B29BD3A"}
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
 * @properties={typeid:24,uuid:"FA1F6D13-A859-4E57-9084-3BFFF94169AE"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		vl_fecha_fin = application.getServerTimeStamp()
		vl_fecha_ini = new Date(2019,1,1)
		filtrar()
	}
}


/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"B249CB48-4547-4BCE-A985-5911937A9A78"}
 */
function filtrar() {
	
	foundset.find()
	foundset.transdate = utils.dateFormat(vl_fecha_ini, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_fin, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	foundset.search()
	
	foundset.sort("internalid desc")
	
}
