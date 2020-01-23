/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6EC7F094-F1C7-4A06-A9E3-AA78F48EAC27",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AA723C78-506B-48BE-A201-7CC1B49313F2",variableType:8}
 */
var vl_cantidad = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"04C34CE3-3034-4F2D-9BBD-521FCDFB5031"}
 */
var vl_observacion = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"329BEFA0-EDF6-42D8-86B9-5CFC009A0CD0",variableType:93}
 */
var vl_fecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5B3385FA-C3A5-4575-A554-13B182F5E848",variableType:4}
 */
var vl_producto = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1A86B4C0-0AD8-4D98-813B-D552C7F8E0B7",variableType:4}
 */
var vl_deposito = null;

/**
 *
 * @properties={typeid:24,uuid:"687E8370-769B-4052-87E1-A38DF7D26CAD"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"3DD2B999-3214-4133-ACCA-7D799E6C4A73"}
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
	
	forms.stock_movimientos.foundset.newRecord()
	forms.stock_movimientos.foundset.company_id			= scopes.usuario.vg_company_id
	forms.stock_movimientos.foundset.deposito_id		= vl_deposito
	forms.stock_movimientos.foundset.ds_cantidad		= vl_cantidad
	forms.stock_movimientos.foundset.ds_fecha			= vl_fecha
	forms.stock_movimientos.foundset.producto_id		= vl_producto
	forms.stock_movimientos.foundset.ds_observacion		= vl_observacion
	forms.stock_movimientos.foundset.ds_tipo			= vl_tipo
	databaseManager.saveData()
	
	onActionVolver()

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9976F9EB-2B40-4738-A849-65CC5420265F"}
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
