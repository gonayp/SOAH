/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"23601F77-3C47-43E5-BBEF-1AACF9A307B6",variableType:4}
 */
var vl_dep_origen = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"61088FED-99BC-433B-8DE5-D452EE8436D8",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A491AC43-B150-427A-8B43-28BAAB5ACD8F",variableType:8}
 */
var vl_cantidad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"131F6073-68A8-404F-9BC1-4D3CCD56C252"}
 */
var vl_observacion = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"3D7402E5-C4D9-4C25-9F61-B5BDF42FF04F",variableType:93}
 */
var vl_fecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"46FAFFE8-B06B-42DF-86D7-968E1BD0DC41",variableType:4}
 */
var vl_producto = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"72A40AB5-3A47-4FAA-8F00-F88828ADB349",variableType:4}
 */
var vl_deposito = null;

/**
 *
 * @properties={typeid:24,uuid:"14C2B175-89E9-432D-B1E6-A4D1995B8A48"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F76CC1FC-0FB1-4474-A41C-0A1E11890EB7"}
 */
function onActionGrabar(event) {
	
	if (vl_producto == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de producto.", "", globals.vg_toast_options)
		controller.focusField("f_producto", true)
		return
	}
	
	if (vl_deposito == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de deposito.", "", globals.vg_toast_options)
		controller.focusField("f_deposito", true)
		return
	}
	
	if(vl_dep_origen == vl_deposito){
		
		plugins.webnotificationsToastr.error("No puede ser el mismo depósito de origen y destino.", "", globals.vg_toast_options)
		controller.focusField("f_deposito", true)
		return
		
	}
	
	//Entrada
	forms.stock_movimientos.foundset.newRecord()
	forms.stock_movimientos.foundset.company_id			= scopes.usuario.vg_company_id
	forms.stock_movimientos.foundset.deposito_id		= vl_deposito
	forms.stock_movimientos.foundset.ds_cantidad		= vl_cantidad
	forms.stock_movimientos.foundset.ds_fecha			= vl_fecha
	forms.stock_movimientos.foundset.producto_id		= vl_producto
	forms.stock_movimientos.foundset.ds_observacion		= vl_observacion
	forms.stock_movimientos.foundset.ds_tipo			= 1
	databaseManager.saveData()
	
	
	//Salida
	forms.stock_movimientos.foundset.newRecord()
	forms.stock_movimientos.foundset.company_id			= scopes.usuario.vg_company_id
	forms.stock_movimientos.foundset.deposito_id		= vl_dep_origen
	forms.stock_movimientos.foundset.ds_cantidad		= vl_cantidad
	forms.stock_movimientos.foundset.ds_fecha			= vl_fecha
	forms.stock_movimientos.foundset.producto_id		= vl_producto
	forms.stock_movimientos.foundset.ds_observacion		= vl_observacion
	forms.stock_movimientos.foundset.ds_tipo			= 2
	databaseManager.saveData()
	
	onActionVolver()

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C2B23B50-AB43-45A9-BA3D-B9235645D433"}
 */
function onShow(firstShow, event) {
	vl_deposito = null
	vl_producto = null
	vl_cantidad = 1
	vl_tipo 	= 1
	vl_fecha	= application.getServerTimeStamp()
	vl_observacion = null
	
	
	controller.focusFirstField()
}
