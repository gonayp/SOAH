/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"87A99169-A6D0-4C11-954C-D812B4CBFF68",variableType:4}
 */
var vl_incluir_alquileres = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"15978960-E52E-4F0C-BAA6-694B29116AF6",variableType:4}
 */
var vl_facturacion_parcial = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"461619D9-FD3F-4028-B07E-5610E0D234C7"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"33BF6C38-0605-4E2D-BB1E-ED141DFDF06E",variableType:4}
 */
var vl_codigo = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7E87AEDF-3698-4B3A-9225-F9E9077AE11A"}
 */
function onShow(firstShow, event) {
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	if(firstShow){
		refresh()
		
	}
	
}

/**
 * @properties={typeid:24,uuid:"63CA2C90-A57D-4B7F-B282-6A5A27F7FE59"}
 */
function refresh(){
	vl_codigo = null
	vl_nombre = null
	vl_incluir_alquileres = 1
	vl_facturacion_parcial = 0
	filtrar()
}

/**
 *
 * @properties={typeid:24,uuid:"C37B5D4E-E3C6-40BD-8D4A-29F6DB32A7E2"}
 */
function onActionVolver() {
	application.showForm('soah_main')

}



/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"DE54D50D-9477-4B4F-B404-EE5E9F55E80E"}
 */
function filtrar(){
	/*
	var query = "select a.cliente_id from vent_clientes as a \
				Join vent_comprobantes as b on a.cliente_id = b.cliente_id \
				where b.comp_codigo in (1,2) and b.comp_estado_id in (1,2,5)"	
	
	foundset.loadRecords(query,null)*/
	
	var ahora = application.getServerTimeStamp()
	var fecha_inicial = new Date(ahora.getFullYear(),ahora.getMonth(),1)
	
	foundset.find()
	if(vl_codigo != null) foundset.cliente_codigo = vl_codigo
	if(vl_nombre != null && vl_nombre != '') foundset.vent_clientes_to_core.core_nombre = '#%'+vl_nombre+'%'
	foundset.cliente_facturacion_mensual = vl_facturacion_parcial
	foundset.vent_clientes_to_vent_comprobantes.comp_estado_id = 5
	if(vl_incluir_alquileres == 1){
		foundset.newRecord()
		if(vl_codigo != null) foundset.cliente_codigo = vl_codigo
		if(vl_nombre != null && vl_nombre != '') foundset.vent_clientes_to_core.core_nombre = '#%'+vl_nombre+'%'
		foundset.cliente_facturacion_mensual = vl_facturacion_parcial
		foundset.vent_clientes_to_vent_comprobantes.comp_estado_id = ' 1 || 2'
		foundset.vent_clientes_to_vent_comprobantes.comp_fec_ult_facturacion = '<'+ utils.dateFormat(fecha_inicial, 'yyyy-MM-dd')+ ' 00:00:00|yyyy-MM-dd HH:mm:ss'
	}
	
	foundset.search()
	
	
	calcularTotales()
	
}


/**
 * @properties={typeid:24,uuid:"7035B5AF-ADF3-4929-9264-91ED45A20A45"}
 */
function calcularTotales(){
	
	var spinner = 'Chasing dots'
	var overlayOpacity = 0.7
	plugins.svyBlockUI.overlayColor = "black"
	plugins.svyBlockUI.overlayOpacity = overlayOpacity
	plugins.svyBlockUI.spinner = spinner
	plugins.svyBlockUI.spinnerBgColor = "yellow"
	plugins.svyBlockUI.show("Calculando pendiente...")
	
	var nCount = 0
	nCount = databaseManager.getFoundSetCount(foundset);
	if(nCount > 200) nCount = 200
	for (var i = 1; i <= nCount; i++) {
		var myCliente = foundset.getRecord(i);
		myCliente.calc_pendiente = 0
		myCliente.calc_pendiente_devoluciones = 0
		myCliente.calc_pendiente_alquileres = 0
		
		var nRecordCount = 0
		nRecordCount = databaseManager.getFoundSetCount(myCliente.vent_clientes_to_vent_devoluciones);
		for (var k = 1; k <= nRecordCount; k++) {
			var myDevolucion = myCliente.vent_clientes_to_vent_devoluciones.getRecord(k);
			myCliente.calc_pendiente_devoluciones += myDevolucion.comp_imp_total
			myCliente.calc_pendiente += myDevolucion.comp_imp_total
		}
		
		if(vl_incluir_alquileres == 1){
			
			var ahora = application.getServerTimeStamp()
			var fecha_inicial = new Date(ahora.getFullYear(),ahora.getMonth(),1)
			
			var nRecord = 0
			nRecord = databaseManager.getFoundSetCount(myCliente.vent_clientes_to_vent_alquleres);
			for (var j = 1; j <= nRecord; j++) {
				var myAlquiler = myCliente.vent_clientes_to_vent_alquleres.getRecord(j);
				var vl_fecha_devolucion = fecha_inicial
				
				var vl_total_f = 0
				
				if(myAlquiler.comp_estado_id == 1 || myAlquiler.comp_estado_id == 2){//Solo si esta pendiente
					var n = 0
					n = databaseManager.getFoundSetCount(myAlquiler.vent_comprobantes_to_vent_comprobante_herramientas);
					for (var index = 1; index <= n; index++) {
						var myHerramienta = myAlquiler.vent_comprobantes_to_vent_comprobante_herramientas.getRecord(index);
						var fecha_alquiler = myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes.comp_fec_ult_facturacion
						
						var vl_dias_reales = scopes.alquileres.calcularDiasParaCobrar(fecha_alquiler,vl_fecha_devolucion)
	
						
						vl_total_f += vl_dias_reales * myHerramienta.comp_precio
					
					}
					
					var vl_iva = vl_total_f * 0.21
					myCliente.calc_pendiente_alquileres += vl_total_f + vl_iva
					myCliente.calc_pendiente += vl_total_f + vl_iva
				}
				
			}
		}
		
	}
	plugins.svyBlockUI.stop()
	
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"43FD29C1-A4A8-49CB-B873-49F11C9A0BA0"}
 */
function onActionLimpiar(event) {
	refresh()

}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given) or.
 * when the ENTER key is used then only the selected foundset index is given
 * Use the record to exactly match where the user clicked on
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"CD5294CE-79E4-4262-B811-2402E935C12F"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	
	var win = application.createWindow("Dialog2", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= '';
	
	if(columnindex == 0){
		forms.facturacion_inicio.vl_form_padre = "pendiente_facturar"
		forms.facturacion_inicio.vl_cliente = foundset.cliente_id
		forms.facturacion_inicio.vl_facturacion_parcial = vl_incluir_alquileres
		application.showForm(forms.facturacion_inicio)
		
	}
	if(columnindex == 5){
		forms.pendiente_devoluciones.vl_cliente = foundset.cliente_id
		win.show(forms.pendiente_devoluciones );
	}
	if(columnindex == 7){
		forms.pendiente_alquileres.vl_cliente = foundset.cliente_id
		win.show( forms.pendiente_alquileres );
	}

}
