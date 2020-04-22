/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4963B863-4927-4448-A4B1-71E54509B65B",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"94DCBAA4-23A7-4B60-A3B0-5197A1502B47",variableType:93}
 */
var vl_fecha_ini = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E3961E48-0A2F-4A38-A7BA-E9CEAC946086",variableType:93}
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
 * @properties={typeid:24,uuid:"30FE2348-8064-462C-9B20-AE338697078A"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.recibo_ver)

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F0164243-2696-43D8-8448-E5DBC55EC670"}
 */
function onShow(firstShow, event) {
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	

	if(firstShow){
		vl_fecha_fin = application.getServerTimeStamp()
		vl_fecha_ini = new Date(vl_fecha_fin.getFullYear(),vl_fecha_fin.getMonth()-1, 1)
		filtrar()
	}
	
	
	
}

/**
 * @properties={typeid:24,uuid:"0F451246-1918-4CB4-A821-9D24E905CE01"}
 * @AllowToRunInFind
 */
function filtrar() {
	foundset.find()
	foundset.comp_fecha_emision = utils.dateFormat(vl_fecha_ini, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_fin, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	if(vl_cliente != null && vl_cliente != "") foundset.cliente_id = vl_cliente
	foundset.comp_codigo	= "3 || 4"
	foundset.search()
	
	foundset.sort('comp_fecha_emision desc')
}

/**
 * @properties={typeid:24,uuid:"D789D2E6-E124-415C-AD10-98887540E163"}
 */
function onActionLimpiar() {
	vl_cliente = null
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"A51A8BC4-F48C-4E43-B239-4C97201DCF7F"}
 */
function onActionVolver() {
	application.showForm(forms.fact_consultas_main)
}

/**
 * @properties={typeid:24,uuid:"8881793D-4912-43D0-8113-A6F241C23249"}
 */
function onActionNuevo() {
	application.showForm(forms.facturacion_pagos)
}
