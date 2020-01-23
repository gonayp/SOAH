/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3F4185EB-0AA3-408F-BF4F-FB2BB782516B",variableType:8}
 */
var vl_modelo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8D76A579-FD51-4250-8B9F-EB2E52CF8C59",variableType:4}
 */
var vl_marca = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"20BFB9E8-299C-4616-9A25-EDDA4AB84118",variableType:4}
 */
var vl_herramienta = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"946DB5A0-DB98-4C73-B00B-0FBB36695258",variableType:4}
 */
var vl_cliente = null;


/**
 * @properties={typeid:24,uuid:"5E263836-1EAA-407A-8567-069ADE3ACB95"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 * @properties={typeid:24,uuid:"291E054E-3DB3-4157-97C6-D116662CCDA8"}
 */
function onActionLimpiar() {
	vl_cliente = null
	vl_herramienta = null
	vl_marca = null
	vl_modelo = null
	
	filtrar()
}

/**
 *
 * @properties={typeid:24,uuid:"1D7B13E4-EFFC-43DC-8E8D-5B477B556FDF"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	foundset.comp_id_padre			='^='
	foundset.vent_comprobante_herramientas_to_vent_comprobantes.comp_estado_id = "1 || 2"//Abierto y Parcial
	if(vl_cliente != null) 			foundset.vent_comprobante_herramientas_to_vent_comprobantes.cliente_id 			= vl_cliente
	if(vl_herramienta != null)		foundset.vent_comprobante_herramientas_to_herr_equipo.herramienta_id			= vl_herramienta
	if(vl_marca != null)			foundset.vent_comprobante_herramientas_to_herr_equipo.marca_id					= vl_marca
	if(vl_modelo != null)			foundset.vent_comprobante_herramientas_to_herr_equipo.modelo_id					= vl_modelo
	foundset.search()
	
}

/**
 * @properties={typeid:24,uuid:"9D321FA2-9786-4520-BD1F-9FE77776B649"}
 */
function onDataChangeHerramienta() {
	vl_marca = null
	vl_modelo = null
	globals.vg_herramienta_id = vl_herramienta
	filtrar()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BAFC1B5B-A7C5-4A59-B253-86B16BEA70CE"}
 */
function onShow(firstShow, event) {
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	

}
