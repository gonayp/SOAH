/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"193507CC-0E11-48E7-9793-F160CAC3469A",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"7E20C06B-4BF2-4486-BD33-7C386901E0E1",variableType:93}
 */
var vl_fecha_ini = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"182E4027-77AF-412E-9368-1B2ACFCA5C2A",variableType:93}
 */
var vl_fecha_fin = null;

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"926D62E5-4F09-424F-A8DC-96A34B86733B"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.anticipos_ver)

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F9CBA99-81F3-4B55-BE35-1CC57931F8D8"}
 */
function onShow(firstShow, event) {
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	scopes.globals.vg_tipo_comprobante = 90
	
	if(firstShow){
		vl_fecha_fin = application.getServerTimeStamp()
		vl_fecha_ini = new Date(vl_fecha_fin.getFullYear(),vl_fecha_fin.getMonth()-1, 1)
		filtrar()
	}
	
	
	
}

/**
 * @properties={typeid:24,uuid:"C0CD9304-4801-40A5-8F2A-1D8C5A511C3D"}
 * @AllowToRunInFind
 */
function filtrar() {
	foundset.find()
	foundset.comp_fecha_emision = utils.dateFormat(vl_fecha_ini, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_fin, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	if(vl_cliente != null && vl_cliente != "") foundset.cliente_id = vl_cliente
	foundset.comp_codigo	= "90"
	foundset.search()
}

/**
 * @properties={typeid:24,uuid:"1FB14B63-779B-4EAD-9CB9-82098099864C"}
 */
function onActionLimpiar() {
	vl_cliente = null
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"9BCB3F55-FF2D-48AF-9548-D6F4E3A66599"}
 */
function onActionVolver() {
	application.showForm(forms.fact_consultas_main)
}

/**
 * @properties={typeid:24,uuid:"6002B626-B720-4809-BF84-8C2E73350718"}
 */
function onActionNuevo() {
	application.showForm(forms.facturacion_pagos)
}
