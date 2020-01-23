/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DF36EEE6-5BB3-4A5D-B83A-2557755B986F",variableType:4}
 */
var vl_producto = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"00721E20-FE15-4135-B800-33B10383CE39",variableType:8}
 */
var vl_cantidad = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B8A06E7-A38D-44D9-A538-A45E76996DA5"}
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
	

	

	
	filtrar()
	
	
	controller.focusFirstField()
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"04BC4F8C-088E-4DE3-BCA5-8B38B396FDB4"}
 */
function onActionVolver() {
	application.showForm(forms.deposito_menu)

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"262DE2B8-1C30-4C97-B805-927763B7909F"}
 */
function onActionNuevo(event) {
	
	forms.stock_movimiento_nuevo.vl_producto = vl_producto
	
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
 * @properties={typeid:24,uuid:"9991AC5F-9DBA-416C-9BF9-F504B8150D47"}
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
 * @properties={typeid:24,uuid:"4D26C87F-566B-4DD8-AFAD-F83628E4FB2E"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	if(vl_producto == null){
		foundset.clear()
		vl_cantidad = 0
	}
	else{
		foundset.find()
		foundset.producto_id = vl_producto
		foundset.search()
		
		foundset.sort("ds_fecha desc")
		
		calcularStock()
		
	}
}


/**
 * @properties={typeid:24,uuid:"A9C7305A-4B44-4E4A-91A4-0A45698A3109"}
 */
function calcularStock(){
	
	vl_cantidad = 0
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = foundset.getRecord(index);
		if(myRecord.ds_tipo == 1){
			vl_cantidad += myRecord.ds_cantidad
		}
		else{
			vl_cantidad -= myRecord.ds_cantidad
		}
	}
	
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"0B453459-A27E-42AF-94C2-BDA26959F7C0"}
 */
function onActionLimpiar(event) {
	vl_producto = null
	filtrar()

}
