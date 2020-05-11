/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5CC35458-14D0-4C15-8906-60CE6A8E201A",variableType:4}
 */
var vl_estado_solicitado = null;

/**
 * @properties={typeid:35,uuid:"B1C187EB-9219-48A6-B82C-B0E998D69AA3",variableType:-4}
 */
var vl_estado_impreso= null;
/**
 * @properties={typeid:35,uuid:"04E03B96-880A-4062-AEC6-3E47F8A531E1",variableType:-4}
 */
var vl_estado_presupuestado= null;
/**
 * @properties={typeid:35,uuid:"C22FAD8A-4553-4095-BFE9-DA9FE294F3E7",variableType:-4}
 */
var vl_estado_enviado= null;
/**
 * @properties={typeid:35,uuid:"49C782FF-172F-49A2-BDBF-8576CA5B60C3",variableType:-4}
 */
var vl_estado_terminado= null;
/**
 * @properties={typeid:35,uuid:"3E964BC0-19E0-4C4D-A19A-A9946E50538F",variableType:-4}
 */
var vl_estado_cancelado= null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F9319368-E7FE-4325-B585-0B61A1355D30"}
 */
var vl_aviso = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3033211F-30AC-40D4-9973-AFCB4D170D8B",variableType:4}
 */
var vl_marca = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"78F677F2-B5CA-49A9-8C23-A24F7100D6D9",variableType:4}
 */
var vl_modelo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4468BE46-4CA2-48A9-93F5-CFF44BFD9514",variableType:4}
 */
var vl_herramienta = null;

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
	vl_taller = null
	vl_herramienta = null
	globals.vg_herramienta_id = null
	vl_marca = null
	vl_modelo = null
	vl_aviso = null
	vl_estado_cancelado = 1
	vl_estado_enviado = 1
	vl_estado_impreso = 1
	vl_estado_presupuestado = 1
	vl_estado_solicitado = 1
	vl_estado_terminado = 1
	elements.btn_cancelado.imageStyleClass = "fas fa-eye"
	elements.btn_enviado.imageStyleClass = "fas fa-eye"
	elements.btn_impreso.imageStyleClass = "fas fa-eye"
	elements.btn_presupuesto.imageStyleClass = "fas fa-eye"
	elements.btn_solicitado.imageStyleClass = "fas fa-eye"
	elements.btn_terminado.imageStyleClass = "fas fa-eye"
	
	
	filtrar()

}

/**
 *
 * @properties={typeid:24,uuid:"811F7C6A-C568-4CF3-863F-BA7CA46CFDE2"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	var aux_estado = " 99 "
	if(vl_estado_cancelado == 1) 	aux_estado += " || 6"
	if(vl_estado_enviado == 1) 		aux_estado += " || 4"
	if(vl_estado_impreso == 1) 		aux_estado += " || 2"
	if(vl_estado_presupuestado == 1)aux_estado += " || 3"
	if(vl_estado_solicitado == 1) 	aux_estado += " || 1"
	if(vl_estado_terminado == 1) 	aux_estado += " || 5"
	
	
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
	if(aux_estado != " 99 ") 				 foundset.reparacion_estado = aux_estado
	if(vl_taller != null) 					 foundset.taller_id		= vl_taller
	if(vl_aviso != "" && vl_aviso != null)   foundset.reparacion_num_aviso = "#%"+vl_aviso+"%"
	if(vl_herramienta != null) 				 foundset.rep_reparaciones_to_herr_equipo.herramienta_id = vl_herramienta
	if(vl_marca != null)					 foundset.rep_reparaciones_to_herr_equipo.marca_id		 = vl_marca
	if(vl_modelo != null)					 foundset.rep_reparaciones_to_herr_equipo.modelo_id		 = vl_modelo
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
		onActionLimpiar()
		
	}
	
	
	
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"7925D764-E2AA-4849-9EF0-A98DD87CECB6"}
 */
function onDataChangeHerramienta(oldValue, newValue, event) {
	globals.vg_herramienta_id = vl_herramienta
	filtrar()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"19D2EBC9-15DF-4BF9-8F5B-8AB3ADA8CB27"}
 */
function onActionVerEstado(event) {
	if (event.getElementName() == "btn_solicitado"){
		if(vl_estado_solicitado == 1){
			vl_estado_solicitado = 0
			elements.btn_solicitado.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_estado_solicitado = 1
			elements.btn_solicitado.imageStyleClass = "fas fa-eye"
		}
		
	}
	if (event.getElementName() == "btn_impreso"){
		if(vl_estado_impreso == 1){
			vl_estado_impreso = 0
			elements.btn_impreso.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_estado_impreso = 1
			elements.btn_impreso.imageStyleClass = "fas fa-eye"
		}
		
	}
	if (event.getElementName() == "btn_presupuesto"){
		if(vl_estado_presupuestado == 1){
			vl_estado_presupuestado = 0
			elements.btn_presupuesto.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_estado_presupuestado = 1
			elements.btn_presupuesto.imageStyleClass = "fas fa-eye"
		}
		
	}
	if (event.getElementName() == "btn_enviado"){
		if(vl_estado_enviado == 1){
			vl_estado_enviado = 0
			elements.btn_enviado.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_estado_enviado = 1
			elements.btn_enviado.imageStyleClass = "fas fa-eye"
		}
		
	}
	if (event.getElementName() == "btn_terminado"){
		if(vl_estado_terminado == 1){
			vl_estado_terminado = 0
			elements.btn_terminado.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_estado_terminado = 1
			elements.btn_terminado.imageStyleClass = "fas fa-eye"
		}
		
	}
	if (event.getElementName() == "btn_cancelado"){
		if(vl_estado_cancelado == 1){
			vl_estado_cancelado = 0
			elements.btn_cancelado.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_estado_cancelado = 1
			elements.btn_cancelado.imageStyleClass = "fas fa-eye"
		}
		
	}
	
	filtrar()

}
