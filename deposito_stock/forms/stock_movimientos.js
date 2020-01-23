/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"F4149822-0B0E-4B2F-AC18-4FD459743310",variableType:93}
 */
var vl_fecha_ini = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"2BBE2C87-C3FA-43BB-95A7-6B1DF96C7562",variableType:93}
 */
var vl_fecha_fin = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F60B0362-0976-43AC-9D18-F7262E7650F7"}
 */
var vl_nombre = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5165B028-3B46-424E-B86E-033BE586D1EE"}
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
		filtrar()
		vl_fecha_fin = application.getServerTimeStamp()
		vl_fecha_ini = application.getServerTimeStamp()
	}
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"50D1D34A-F17D-49EC-B708-7AF44C1B651D"}
 */
function onActionVolver() {
	application.showForm(forms.deposito_menu)

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"6962949B-14D5-4F31-8EFD-F84356A5896C"}
 */
function onActionNuevo(event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.stock_movimiento_nuevo );

}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"AA66D511-1BCD-4D43-A470-E5C97A6A46CC"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	if(scopes.usuario.vg_permiso_modificar == 1){
		var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
			win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
			win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
			win.resizable = false
			win.title= '';
			win.show( forms.stock_movimiento_ver );
	}
	else{
		plugins.webnotificationsToastr.warning("Sin permisos para editar","",globals.vg_toast_options)
	}

}

/**
 *
 * @properties={typeid:24,uuid:"8C543E78-3C85-4C29-BD1A-EB0355E59CFB"}
 * @AllowToRunInFind
 */
function filtrar() {
	foundset.find()
	foundset.ds_fecha = utils.dateFormat(vl_fecha_ini, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_fin, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	if(vl_nombre != null && vl_nombre != "")
		foundset.deposito_stock_to_prod_productos.producto_nombre = '#%'+vl_nombre+'%'
	foundset.search()
	
	foundset.sort("ds_fecha desc")
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"59B9074E-6413-488E-B8C7-27B9652DA2F3"}
 */
function onActionLimpiar(event) {
	vl_nombre = null
	filtrar()

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"1D4D57B0-C0B6-4D46-816A-348C40A2644B"}
 */
function onActionMovimiento(event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= '';
	win.show( forms.stock_movimiento_entre_depositos );

}
