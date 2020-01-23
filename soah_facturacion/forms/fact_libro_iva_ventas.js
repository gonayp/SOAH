/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"382A6BCB-11DF-482F-87F1-1A002ADBF00B",variableType:8}
 */
var vl_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CB186896-4A3D-48E4-9C83-D417E126D909",variableType:8}
 */
var vl_total_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E8ED943D-EDC7-411A-A136-FA5BF01FC5B9",variableType:8}
 */
var vl_subtotal = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"41DA7272-4F5B-4123-A510-4CC67AD6648F",variableType:93}
 */
var vl_fecha_final = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"9D87A9A6-B840-43BF-BCF3-0459D1B1CFCB",variableType:93}
 */
var vl_fecha_inicial = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"98BA9EA9-A063-4C2C-B85A-2B91E6D22231",variableType:4}
 */
var vl_cliente = null;


/**
 * @properties={typeid:24,uuid:"63D5C5EF-F002-41EE-8C82-DCC734688622"}
 */
function onActionVolver() {
	application.showForm(forms.fact_consultas_main)
}

/**
 * @properties={typeid:24,uuid:"3C7595E9-EDBD-4152-A8E1-CED0678D5051"}
 */
function onActionLimpiar() {
	vl_cliente = null
	filtrar()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EE644FA6-ABDC-44AD-ADB7-D6932BF8154E"}
 */
function onShow(firstShow, event) {
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	if(firstShow){
		vl_fecha_final = application.getServerTimeStamp()
		vl_fecha_inicial = new Date (vl_fecha_final.getFullYear(), vl_fecha_final.getMonth()-1, 1)
		filtrar()
	}
}

/**
 * @properties={typeid:24,uuid:"9CB1348A-5EAA-4EBA-AC23-D34B525C81A1"}
 * @AllowToRunInFind
 */
function filtrar() {
	foundset.find()
	foundset.comp_codigo		= '5 || 10 || 15 || 20 || 25 || 30 || 35 || 45'
	foundset.comp_fecha_emision = utils.dateFormat(vl_fecha_inicial, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_final, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	if(vl_cliente != null) foundset.cliente_id	= vl_cliente
	foundset.search()
	
	calcularTotales()
}


/**
 * @properties={typeid:24,uuid:"6CDCE0AF-C789-41B5-940B-8FBBD2723816"}
 */
function calcularTotales(){
	
	vl_subtotal = 0
	vl_total_iva = 0
	vl_total = 0
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = foundset.getRecord(index);
		vl_subtotal += myRecord.comp_imp_grav2
		vl_total_iva += myRecord.comp_imp_iva2
		vl_total += myRecord.comp_imp_total
	}
}