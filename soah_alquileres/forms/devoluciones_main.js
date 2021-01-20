/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"52AAC170-3B87-465F-BB53-28123D78F6BA",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7DD1DF89-C074-462D-B7B7-A9C07BEB19F3",variableType:4}
 */
var vl_cliente = null;



/**
 * @properties={typeid:24,uuid:"3480C0C3-1265-4E3B-9DB6-B20BE4EAE4E9"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 * @properties={typeid:24,uuid:"290C1456-3012-46B8-AD3B-8AACA74BB782"}
 */
function onActionNuevo() {
	application.showForm(forms.devolucion_nuevo)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0E5A4E1E-5517-4EFA-AD33-707750ABD74F"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	scopes.globals.vg_tipo_comprobante = 2 //Devoluciones

	if(firstShow){
		globals.inicializarFechasGlobales('mes')
		vl_cliente = null
		filtrar()
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
	
	

}

/**
 *
 * @properties={typeid:24,uuid:"82B3BEDD-C457-4F4C-BBAB-2BB15C9BA303"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	foundset.comp_codigo = 2
	foundset.comp_fecha_emision = utils.dateFormat(globals.vg_fecha_inicial, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(globals.vg_fecha_final, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	if(vl_cliente != null) foundset.cliente_id = vl_cliente
	if(vl_estado != null) foundset.comp_estado_id = vl_estado
	foundset.search()
	
	foundset.sort("comp_fecha_emision desc")
}

/**
 * @properties={typeid:24,uuid:"720FAEAD-0D2B-4492-8FBA-88784B5D9301"}
 */
function onActionLimpiar() {
	vl_cliente = null
	vl_estado = null
	filtrar()
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"2CD87C6E-56D1-4408-8D69-FE4EDCD876FE"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {

	application.showForm(forms.devolucion_ver)

}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5257D91A-31AB-4113-B2FA-DC3944FC0DD6"}
 */
function onFocusGained(event) {
	globals.ventanaFechas(controller.getName())
}
