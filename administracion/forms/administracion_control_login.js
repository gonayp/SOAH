/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5F58E71C-5E85-41DB-A292-9FEDE29EEC10"}
 */
var vl_nombre = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E5F2707D-CA82-464F-B0F6-A36239457439",variableType:93}
 */
var vl_fecha_final = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"C3D6A87F-79C2-45C4-AA16-C437120D88B8",variableType:93}
 */
var vl_fecha_inicial = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"794196D8-8723-46F2-8002-1ACB1832F9ED"}
 */
function onShow(firstShow, event) {
	vl_fecha_inicial = application.getServerTimeStamp()
	vl_fecha_final = application.getServerTimeStamp()
	
	filtrar()
}

/**
 *
 * @properties={typeid:24,uuid:"C5DB7A2E-2FE7-4E82-B548-221CF496EC8A"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	foundset.login_fecha = utils.dateFormat(vl_fecha_inicial, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_final, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	if(vl_nombre != null && vl_nombre != "") foundset.usuario_nombre = "#%"+vl_nombre+"%"
	foundset.search()
	
	foundset.sort("login_fecha desc")
}

/**
 * @properties={typeid:24,uuid:"9D2C845F-6099-420C-AFF5-D7366E25C2DD"}
 */
function onActionLimpiar() {
	vl_nombre = null
	
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"4D96C974-AEC1-4DD0-9C11-95BBEF1377B1"}
 */
function onActionVolver() {
	application.showForm(forms.administracion_main)
}
