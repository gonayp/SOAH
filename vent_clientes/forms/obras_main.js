/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"97EEC644-8FAA-4B7C-992C-F1B80A5031DF",variableType:93}
 */
var vl_fecha_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"435FDC35-3624-42AA-8065-C1DCD3A58132",variableType:93}
 */
var vl_fecha_ini = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"02449252-991B-4EBE-8B6A-8EE02D97EC92",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F7FDA778-CB61-4E61-B891-3A941F5AB511"}
 */
var vl_nombre = null;


/**
 * @properties={typeid:24,uuid:"49C0F70A-A736-4533-908F-7545B2B2A251"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 *
 * @properties={typeid:24,uuid:"CF043D3B-F912-4F4F-AB92-C576571B60E7"}
 * @AllowToRunInFind
 */
function filtrar() {
	foundset.find()
	foundset.obra_fecha_inicio = utils.dateFormat(vl_fecha_ini, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_fin, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	if(vl_nombre != null && vl_nombre != "") foundset.obra_nombre = "#%"+vl_nombre+"%"
	if(vl_cliente != null) 					 foundset.cliente_id  = vl_cliente
	foundset.search()
	
	foundset.sort("obra_fecha_inicio desc")
}

/**
 * @properties={typeid:24,uuid:"271AA510-9C2D-4AFF-BCF7-FD7C7A2C086A"}
 */
function onActionLimpiar() {
	vl_nombre = null
	vl_cliente = null
	filtrar()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"F1C99E4B-AF91-4D0A-9C70-5F042A985D19"}
 */
function onShow(firstShow) {
	
	globals.asignarPermisos(controller.getName())
	if(scopes.usuario.vg_permiso_lectura == 0){
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.")
	}
	
	elements.btn_nuevo.enabled = true
	if(scopes.usuario.vg_permiso_crear == 0){
		elements.btn_nuevo.enabled = false
	}
	
	vl_nombre = null
	vl_cliente = null
	
	vl_fecha_fin = application.getServerTimeStamp()
	vl_fecha_ini = new Date(vl_fecha_fin.getFullYear(),vl_fecha_fin.getMonth()-1,1)
	
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"A8DA7F42-C6EE-4280-B22E-85AB921668BB"}
 */
function onActionNuevo() {
	application.showForm(forms.obras_nuevo)
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"E7D6972A-8C0B-4E98-99B2-747CC397B543"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.obras_editar)

}
