/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"B5374EDE-AEBD-402B-A57C-2F23333C7A93",variableType:93}
 */
var vl_fecha_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"DDD405B2-70B1-4DD7-9625-16DF499EAED4",variableType:93}
 */
var vl_fecha_ini = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D44A2672-99C7-46BD-8F03-1317C1FD4C48"}
 */
var vl_nombre = null;


/**
 *
 * @properties={typeid:24,uuid:"0C5BF1D2-B88A-430D-B306-C1B7E8150646"}
 * @AllowToRunInFind
 */
function filtrar() {
	foundset.find()
	if(vl_nombre != null && vl_nombre != "") foundset.herr_listas_precios_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_nombre = '#%'+vl_nombre+'%'
	foundset.lp_f_g		= utils.dateFormat(vl_fecha_ini, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_fin, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	foundset.newRecord()
	if(vl_nombre != null && vl_nombre != "") foundset.herr_listas_precios_to_herr_equipo.herr_equipo_to_herr_marca.marca_nombre = '#%'+vl_nombre+'%'
	foundset.lp_f_g		= utils.dateFormat(vl_fecha_ini, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_fin, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	foundset.newRecord()
	if(vl_nombre != null && vl_nombre != "") foundset.herr_listas_precios_to_herr_equipo.herr_equipo_to_herr_modelo.modelo_nombre = '#%'+vl_nombre+'%'
	foundset.lp_f_g		= utils.dateFormat(vl_fecha_ini, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_fin, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	foundset.search()
	
	foundset.sort("lp_f_g desc")
}

/**
 * @properties={typeid:24,uuid:"545E322A-9CB4-40A7-945E-65D69D0DEACB"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 * @properties={typeid:24,uuid:"B02E33EF-3E82-4601-BE98-160B6AD7659A"}
 */
function onActionLimpiar() {
	vl_nombre = null
	filtrar()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"48C5A6F2-AEC1-4ABD-8085-B89464D623E2"}
 */
function onShow(firstShow) {
	
	if(firstShow){
		vl_fecha_fin = application.getServerTimeStamp()
		vl_fecha_ini = new Date(vl_fecha_fin.getFullYear(), vl_fecha_fin.getMonth()-1, 1)
	}
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	
}
