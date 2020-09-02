/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7BB96D8C-9FBF-45B2-B9B4-D5D2932B3F74"}
 */
var vl_nombre = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8EBC098C-A6D8-4F72-914A-F524DC79C190"}
 */
var vl_codigo = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"6D478257-7647-4600-A6E7-FAEAEA1D5F5B",variableType:93}
 */
var vl_fecha_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"9C2A1018-C9AB-4BE5-964E-92AE06B9C4AC",variableType:93}
 */
var vl_fecha_ini = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"349050B6-239C-4FFF-92F1-FAE1F8A6F415",variableType:4}
 */
var vl_pendiente = null;

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"01B3E7CB-A8DE-47EE-B13F-B681690BAD39"}
 */
function onActionVolver(event) {
	application.showForm(forms.main_menu)

}

/**
 *
 * @properties={typeid:24,uuid:"58BBBC66-ED03-41DA-8AD2-D0277675A4E3"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	foundset.transdate = utils.dateFormat(vl_fecha_ini, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_fin, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	if(vl_pendiente == 1)
		foundset.status = 2
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
 * @properties={typeid:24,uuid:"0CD0020E-B3B2-4B56-A403-04B470ACA0B2"}
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
 * @properties={typeid:24,uuid:"EF0BAD87-921E-4483-B9BF-2808776F8A84"}
 */
function onClick(event) {
	filtrar()
}
