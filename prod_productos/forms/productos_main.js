

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"49798075-4F69-42C7-92B0-398E2F62B3ED",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DF58B6EA-C3ED-417C-ACF6-AF855B303681",variableType:4}
 */
var vl_num_serie = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"002AF04F-1044-4E6A-A809-31AEA41DB16B",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"24D6BE67-A1F1-42A2-A3F3-E779A0EBBDEE",variableType:4}
 */
var vl_alimentacion = null;



/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A8624CD0-1659-41CC-B5CE-8A7DB1B887D2"}
 */
var vl_cod_alterna = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"49783B81-90CC-443E-A88A-1A418182EFDF",variableType:4}
 */
var vl_modelo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0912B706-23AE-4F34-BD37-494E9DC56C1C",variableType:4}
 */
var vl_marca = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D6181324-61BC-45BC-B784-7C5AC7410479",variableType:4}
 */
var vl_categoria = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ACA572B4-FEEC-4461-8F9D-F8CD0B870318"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"223A7BEA-2589-4CF3-B44F-039CD3C07B6C",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"1ED14EAC-0FCC-4220-8161-5A25556FFCE1"}
 */
function onActionVolver() {
	application.showForm('deposito_menu')
}

/**
 * @properties={typeid:24,uuid:"A0519037-EAE6-44B2-9876-15E50492D598"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	if(vl_codigo != null) 			producto_codigo 				= vl_codigo
	if(vl_estado != null)			producto_estado					= vl_estado
	if(vl_categoria != null)		categoria_prod_id				= vl_categoria
	if(vl_nombre != null && vl_nombre != "")			producto_nombre			= '#%' + vl_nombre + '%'
	if(vl_cod_alterna != null && vl_cod_alterna != "") 	producto_cod_alternativo 	= '#%' + vl_cod_alterna + '%'
	foundset.search()
	
	foundset.sort("herramienta_id, marca_id, modelo_id asc")
}

/**
 * @properties={typeid:24,uuid:"3DDEC9C9-34A3-4861-9C9C-F409388F908E"}
 */
function onActionLimpiar() {
	
	vl_estado = null;
	vl_cod_alterna = null;
	vl_categoria = null;
	vl_nombre = null;
	vl_codigo = null;
	
	filtrar()
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4FF9B0C5-FF1C-400D-A13D-B8D04D3C0C5E"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	elements.btn_nuevo.enabled = true
	if (scopes.usuario.vg_permiso_modificar == 0) {
		elements.btn_nuevo.enabled = false
	}
	
	
	
	
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"7E06AA1D-67FF-45FE-B5E3-A5D638B21217"}
 */
function onActionNuevo() {
	application.showForm(forms.productos_nuevo)
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"6BC1AD7E-02A8-4DF3-AE9A-1ADF8D7C816D"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.productos_editar)

}
