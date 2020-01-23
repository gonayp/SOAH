/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C970187A-04FD-423D-8C0E-C6EBC40FF957",variableType:4}
 */
var vl_taller = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CDEB54EF-158F-4238-8212-19E1AEEB3D74",variableType:4}
 */
var vl_tipo_fecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"50CDA8DA-52C0-45F1-B738-94E462B36694",variableType:93}
 */
var vl_fecha_final = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"7475B110-1D6A-4194-B384-3B94F491DE77",variableType:93}
 */
var vl_fecha_inicial = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A49223FB-08AA-4C90-A4C7-800A1F691FEE",variableType:4}
 */
var vl_estado = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F1D00C88-AA1A-4293-BEDB-715DDF89AA67"}
 */
var vl_nombre = null;

/**
 *
 * @properties={typeid:24,uuid:"39AF0673-21C1-40F3-A1D3-01095411D611"}
 */
function onActionVolver() {
	application.showForm(forms.rep_main)

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"42F5E36F-FFE5-436F-BADE-59B020519A28"}
 */
function onActionNuevo(event) {
	application.showForm(forms.rep_reparacion_nuevo_select)

}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"EBCFFBCB-E457-4526-8DF6-DAD00201DF36"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.rep_reparacion_ver_solicitado)
}

/**
 *
 * @properties={typeid:24,uuid:"8159AB4A-9643-40E8-AFBA-E27343674C92"}
 */
function onActionLimpiar() {
	vl_nombre = null
	vl_estado = null
	vl_taller = null
	filtrar()

}

/**
 *
 * @properties={typeid:24,uuid:"811F7C6A-C568-4CF3-863F-BA7CA46CFDE2"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	
	foundset.find()
	switch (vl_tipo_fecha) {
	case 1://inicio
		foundset.reparacion_fecha_inicio = utils.dateFormat(vl_fecha_inicial, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_final, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
		break;
	case 2://envio
		foundset.reparacion_fecha_envio = utils.dateFormat(vl_fecha_inicial, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_final, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
		break;
	case 3://devolucion
		foundset.reparacion_fecha_fin = utils.dateFormat(vl_fecha_inicial, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_final, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
		break;
	}
	if(vl_nombre != "" && vl_nombre != null) foundset.reparacion_num_pedido = "#%"+vl_nombre+"%"
	if(vl_estado != null) foundset.reparacion_estado = vl_estado
	if(vl_taller != null) foundset.taller_id		= vl_taller
	foundset.search()
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"7117969D-CFA1-46A1-9CD7-11AB73975AA5"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow) {
	
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	elements.btn_nuevo.enabled = true
	if (scopes.usuario.vg_permiso_crear == 0) {
		elements.btn_nuevo.enabled = false
	}
	
	if(firstShow){
		vl_tipo_fecha = 1
		vl_fecha_final = application.getServerTimeStamp()
		vl_fecha_inicial = new Date(vl_fecha_final.getFullYear(),vl_fecha_final.getMonth()-1,1)
	}
	
	
	
}
