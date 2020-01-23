/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"70BCF398-C8D8-4405-A783-310E5D71CEA0",variableType:4}
 */
var vl_proveedor = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A1C284C8-2774-4309-96C4-D95D7CC37310",variableType:93}
 */
var vl_fecha_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"C2AF491F-875B-4700-9CC3-8657896996B5",variableType:93}
 */
var vl_fecha_ini = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"70D93A4B-4B51-4006-9932-9E41F3186D95"}
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
	
	scopes.globals.vg_tipo_comprobante = 5
}

/**
 * @properties={typeid:24,uuid:"DE69877C-3406-4DD9-973B-3C1DB30A559E"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 *
 * @properties={typeid:24,uuid:"A1E29974-631A-4D0C-AE5D-F5CD5AC4259E"}
 * @AllowToRunInFind
 */
function filtrar() {
	foundset.find()
	foundset.cmpr_comp_fecha_emision = utils.dateFormat(vl_fecha_ini, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_fin, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	foundset.cmpr_comp_codigo = "105||120||110||125||135||140"
	if(vl_proveedor != null) foundset.proveedor_id = vl_proveedor
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
 * @properties={typeid:24,uuid:"115837B0-3ECD-47F0-BE00-BDAF893A819D"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.comprobante_ver)

}

/**
 * @properties={typeid:24,uuid:"B9998ADD-246A-40DF-9295-971143783AF7"}
 */
function onActionLimpiar() {
	vl_proveedor = null
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"00AA7A43-9006-4DB2-AA44-AC9B0B036D15"}
 */
function onActionNuevo() {
	application.showForm(forms.comprobante_nuevo)
}
