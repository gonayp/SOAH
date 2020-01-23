/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"27835EA5-ACFE-49DC-A2BC-38CF3DB9C84A",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"C2C2DEE4-1465-4E5C-8F5C-12AF5F3DE82C",variableType:93}
 */
var vl_fecha_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"07242F4D-5380-4C05-8CE4-683BFE6B47C4",variableType:93}
 */
var vl_fecha_ini = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6087339B-E4DB-47FB-B4BB-E7A14175648F"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	
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
		vl_fecha_fin = application.getServerTimeStamp()
		vl_fecha_ini = new Date(vl_fecha_fin.getFullYear(),vl_fecha_fin.getMonth()-1,1)
		onActionLimpiar()
	}
}

/**
 * @properties={typeid:24,uuid:"AF1038FE-7541-47CF-A74E-BEC21E9337E4"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 *
 * @properties={typeid:24,uuid:"6CE336DB-E3F0-4579-9C15-0E6BB0A8B438"}
 * @AllowToRunInFind
 */
function filtrar() {
	foundset.find()
	foundset.comp_fecha_emision = utils.dateFormat(vl_fecha_ini, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_fin, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	foundset.comp_codigo = "5||20"
	if(vl_cliente != null) foundset.cliente_id = vl_cliente
	foundset.search()
	
	foundset.sort('comp_fecha_emision desc')
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"D6842375-87CB-4DDB-ACCB-C19908D29C44"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.factura_devolucion_ver)

}

/**
 * @properties={typeid:24,uuid:"C1FEA805-266B-4373-83FD-5DE9DF32CEC8"}
 */
function onActionLimpiar() {
	vl_cliente = null
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"F68E71D2-F1E7-422B-81F3-E813FA87B86E"}
 */
function onActionNuevo() {
	application.showForm(forms.factura_nuevo)
}
