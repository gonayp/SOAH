/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7FDEABE7-98B3-4AD0-B524-130E2CDFE0EF",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"51109DCF-7EC1-40B2-B755-6C6CE64BEF64",variableType:4}
 */
var vl_cliente = null;


/**
 * @properties={typeid:24,uuid:"38F27A9B-AEC7-41D7-8ADB-B3A22FABED0D"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"61DEAD64-01BC-43B2-9B1E-580B1EC8F6E6"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	
	
	if(firstShow)
		filtrar()
}


/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"184DD42B-E17C-4D25-A02F-55B34E37F207"}
 */
function filtrar(){
	
	foundset.find()
	if(vl_tipo == null)
		foundset.comp_codigo = "1 || 2" //alquiler o devolucion
	else
		foundset.comp_codigo = vl_tipo
	foundset.comp_estado_id = "1 || 2 || 5" //Pendientes
	if(vl_cliente != null) foundset.cliente_id = vl_cliente
	foundset.search()
	
	foundset.sort("comp_fecha_emision asc")
}
/**
 * @properties={typeid:24,uuid:"69D0F4A9-2C78-4256-84B4-93D15917305F"}
 */
function onActionLimpiar() {
	vl_cliente = null
	vl_tipo = null
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
 * @properties={typeid:24,uuid:"B9736794-F60B-4FDA-8A95-71EE11C7E82F"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		
	
	if(foundset.comp_codigo == 1){//Alquileres
		forms.alquiler_detalle.foundset.loadRecords(foundset.comp_id)
		win.show( forms.alquiler_detalle );
	}
	if(foundset.comp_codigo == 2){//Devoluciones
		forms.devolucion_detalle.foundset.loadRecords(foundset.comp_id)
		win.show( forms.devolucion_detalle );
	}

}
