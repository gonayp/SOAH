/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7EEFA028-19FE-4237-82C0-51B1964F3228"}
 */
var vl_codigo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1616A306-27B7-41DE-A606-F4DE1EBDD051"}
 */
var vl_nombre = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"9D302F06-A8F0-4740-A78A-19DAFAA59B7E",variableType:93}
 */
var vl_fecha_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"99A4DB46-0E40-4714-B562-570237803652",variableType:93}
 */
var vl_fecha_ini = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"70002B1A-8FA2-4C1C-AEAD-CBDBFC6E5BFF",variableType:4}
 */
var vl_pendiente = null;

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"ECD3555F-543A-4167-BFA9-AE2EAE8AB2CF"}
 */
function onActionVolver(event) {
	application.showForm(forms.main_menu)

}

/**
 *
 * @properties={typeid:24,uuid:"5CCC3E51-5080-41A8-80D9-F1C516FA9E83"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	foundset.transdate = utils.dateFormat(vl_fecha_ini, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_fin, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	if(vl_pendiente == 1)
		foundset.saldo = "> 0"
	if(vl_codigo != null && vl_codigo != '')
		foundset.custcode  = '%'+vl_codigo+'%'
	if(vl_nombre != null && vl_nombre != '')
		foundset.custname = '%'+vl_nombre+'%'
	foundset.search()
	
	foundset.sort("internalid desc")
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5D86913B-1991-44AE-8E43-1CCB7D5463BD"}
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
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B6544AD7-99E0-46F1-8CA9-669B244ABF6B"}
 */
function onAction(event) {
	
		
		filtrar()

}
