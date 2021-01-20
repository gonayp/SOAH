/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4BB74D5A-F201-4733-893E-234C1EB436CD",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"72B54814-6440-4C82-A926-2D5237F15B9D",variableType:4}
 */
var vl_cliente = null;




/**
 * @properties={typeid:24,uuid:"D19967B7-D0D5-4B69-B25E-CBA76EE828CA"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 * @properties={typeid:24,uuid:"377EE171-9744-484C-ACC6-58A712BE514B"}
 */
function onActionNuevo() {
	application.showForm(forms.alquiler_nuevo)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B0CF5353-037F-4916-85AF-98C84D70F442"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	scopes.globals.vg_tipo_comprobante = 1 //alquileres

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
 * @properties={typeid:24,uuid:"61C11FE6-2C7A-42E4-843C-B13DC57B8997"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	foundset.comp_codigo = 1
	foundset.comp_fecha_emision = utils.dateFormat(globals.vg_fecha_inicial, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(globals.vg_fecha_final, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	if(vl_cliente != null) foundset.cliente_id = vl_cliente
	if(vl_estado != null) foundset.comp_estado_id = vl_estado
	foundset.search()
	
	foundset.sort("comp_fecha_emision desc")
}

/**
 * @properties={typeid:24,uuid:"84DC622E-7E6C-4635-A36F-C1EFCC1DA2C9"}
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
 * @properties={typeid:24,uuid:"6AFF3F62-8BE3-4829-BEDE-A9F5FB5432DF"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.alquiler_ver)

}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"50E1471A-D489-44D2-9417-07FEAABAA078"}
 */
function onClickFecha(event) {
	globals.ventanaFechas(controller.getName())
}
