/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"74388026-F9E1-44AE-A7D6-1B1C93FDBCBB",variableType:8}
 */
var vl_importe = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7A4C32CC-B685-4794-A7B6-E18CE3518C9A"}
 */
var vl_num_cheque = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"526AA959-8F18-45AA-A66C-EBAE62AC9769",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F8F6B879-298E-4095-9DF4-0E33D6F6A968",variableType:4}
 */
var vl_tipo_fecha = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"5F29A830-4661-4221-B0B5-5361A866BA22",variableType:93}
 */
var vl_fecha_final = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"1CC34371-47E1-453F-A904-EB394FA7AB7C",variableType:93}
 */
var vl_fecha_inicial = null;

/**
 *
 * @properties={typeid:24,uuid:"AC5EA510-EB3C-4ADF-A91B-159B13820369"}
 */
function onActionVolver() {
	application.showForm('soah_main')

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"5CE1814D-DC95-4422-B2D0-8501B1941DB5"}
 */
function onActionNuevo(event) {
	application.showForm(forms.cheques_nuevo)

}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"3B572972-E3F7-47A8-99CD-6CC74CC8B077"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.cheques_ver)

}

/**
 *
 * @properties={typeid:24,uuid:"9FE32EF0-EFEE-429B-B64A-190D212E49A7"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	if(vl_cliente != null)		foundset.cliente_id = vl_cliente
	if(vl_num_cheque != null) 	foundset.cheque_numero = vl_num_cheque
	if(vl_importe != null) 		foundset.cheque_importe = vl_importe
	switch (vl_tipo_fecha) {
	case 1://emision
		foundset.cheque_fecha_emision = utils.dateFormat(vl_fecha_inicial, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_final, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
		break;
	case 2://vencimiento
		foundset.cheque_fecha_vencimiento = utils.dateFormat(vl_fecha_inicial, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_final, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
		break;
	}
	
	foundset.search()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E9FECCE3-0A33-4E85-9BF0-B7D18F983ED4"}
 */
function onActionLimpiar(event) {
	
	vl_cliente = null
	vl_importe = null
	vl_num_cheque = null
	
	filtrar()

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"19B11ECD-B588-4E69-9C2C-97E24E5C1055"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow) {
	if(firstShow){
		vl_tipo_fecha = 1
		vl_fecha_final = application.getServerTimeStamp()
		vl_fecha_inicial = new Date(vl_fecha_final.getFullYear(),vl_fecha_final.getMonth(),1)
	}
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	elements.btn_nuevo.enabled = true
	if (scopes.usuario.vg_permiso_crear == 0) {
		elements.btn_nuevo.enabled = false
	}
	
	filtrar()
	

}
