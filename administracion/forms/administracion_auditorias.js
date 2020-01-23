/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7317C4AE-FCEE-4868-993B-3523C27BF71A"}
 */
var vl_nombre = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"20CADA8D-839E-427A-9365-18735E7B4316",variableType:93}
 */
var vl_fecha_final = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"BB54C12C-CCBE-4F52-8654-1413D9EDD750",variableType:93}
 */
var vl_fecha_inicial = null;


/**
 * @properties={typeid:24,uuid:"6596F723-8E0C-40A3-B9D1-41ED67B87FD0"}
 */
function onActionVolver() {
	application.showForm(forms.administracion_main)
}

/**
 *
 * @properties={typeid:24,uuid:"05DC374D-E08E-4C8A-91D6-88A319C5C32B"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	foundset.auditoria_fecha = utils.dateFormat(vl_fecha_inicial, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_final, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	if(vl_nombre != null && vl_nombre != "")foundset.usuarios_auditorias_to_usuarios.usuarios_to_core.core_nombre = "#%"+vl_nombre+"%"
	foundset.search()
	
	foundset.sort("auditoria_fecha desc")
}

/**
 * @properties={typeid:24,uuid:"1214D1E3-0FE7-4B0A-84C1-DD86043327B5"}
 */
function onActionLimpiar() {
	vl_nombre = null
	filtrar()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"930694AB-32C0-4A16-B46E-77B932C489CB"}
 */
function onShow(firstShow, event) {
	vl_fecha_final = application.getServerTimeStamp()
	vl_fecha_inicial = application.getServerTimeStamp()
	
	filtrar()
}
