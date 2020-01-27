/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"659888DF-B303-474E-BFDE-69180FF4A7E6",variableType:4}
 */
var vl_seleccionadas = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5B469914-3FCC-4058-874B-E6058481ACB1"}
 */
var vl_form_padre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9CB9B924-8F67-44BC-9B5A-4FBA9BF5B311",variableType:8}
 */
var vl_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"30FA2EF6-97AF-4C6E-B272-4259D4AF475D",variableType:8}
 */
var vl_total_f = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6881E51B-6116-49AC-B4D6-B60231446C2A",variableType:4}
 */
var vl_facturacion_parcial = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C39BEE71-94BF-4830-8D5D-CE9759962A51",variableType:4}
 */
var vl_obra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A2479B12-2BED-4095-8E6E-0ECC633BB5C3",variableType:4}
 */
var vl_obra_nueva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FCE4E07A-7CD8-4AA0-98E0-347B068C6AFA",variableType:4}
 */
var vl_cantidad = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BF94692A-39DD-4F05-96E8-2A5C83F30A4D",variableType:8}
 */
var vl_total_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"92C76BA7-BDA7-4199-AF7F-707252CD5CF0",variableType:8}
 */
var vl_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C0DF103E-4D44-4411-A65F-DE73DC83B42A",variableType:8}
 */
var vl_subtotal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"424BEB20-6C05-4084-A1EF-8257DF833A98",variableType:4}
 */
var vl_cliente = null;

/**
 * @properties={typeid:24,uuid:"3B8066A1-7D68-4652-ADBD-E43ED61FFD9E"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 * @properties={typeid:24,uuid:"9D9E5F8B-6086-4F8C-81B9-6088EC602E90"}
 * @SuppressWarnings(wrongparameters)
 */
function onActionNuevo() {
	if(vl_cliente == null){
		plugins.webnotificationsToastr.error("Falta seleccionar un cliente.","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	
	if(vl_cantidad < 1){
		plugins.webnotificationsToastr.error("Falta seleccionar algun comprobante para facturar.","",globals.vg_toast_options)
		return
	}
	
	
	facturaAClienteRelacionado()
	
	generarFactura()
	
	
}

//Si el cliente seleccionado tiene configurado para facturar a otro cliente, cambiamos el cliente a facturar
/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"0B6AC121-A9E3-4FB2-88E2-D367280E8444"}
 * @SuppressWarnings(wrongparameters)
 */
function facturaAClienteRelacionado(){
	
	/** @type {JSFoundSet<db:/gpp/vent_clientes>} */
	var fs_vent_clientes = databaseManager.getFoundSet('gpp', 'vent_clientes')
	
	fs_vent_clientes.find()
	fs_vent_clientes.cliente_id = vl_cliente
	fs_vent_clientes.search()
	
	if(fs_vent_clientes.facturar_a_cliente_id != null){
		vl_cliente = fs_vent_clientes.facturar_a_cliente_id
		plugins.webnotificationsToastr.info("Cambiado el cliente a facturar","",globals.vg_toast_options)
	}
	
	
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"FEAA4BEF-95D7-4E79-B9E6-9A8CEFAF7E13"}
 * @SuppressWarnings(wrongparameters)
 */
function generarFactura(){
	
	forms.factura_devolucion_nuevo.vl_cliente 			= vl_cliente
	forms.factura_devolucion_nuevo.vl_fecha				= application.getServerTimeStamp()
	forms.factura_devolucion_nuevo.vl_numero			= null
	forms.factura_devolucion_nuevo.vl_obra				= vl_obra_nueva
	forms.factura_devolucion_nuevo.vl_observaciones		= null
	forms.factura_devolucion_nuevo.vl_subtotal			= vl_subtotal
	forms.factura_devolucion_nuevo.vl_total				= vl_total
	forms.factura_devolucion_nuevo.vl_total_iva			= vl_total_iva
	forms.factura_devolucion_nuevo.vl_condicion_pago	= 1//contado
	
	//Numero y codigo de la factura
	forms.factura_devolucion_nuevo.vl_codigo			= 5 //Factura
	forms.factura_devolucion_nuevo.vl_numero = null;
	try{
		forms.factura_devolucion_nuevo.vl_pv 		= scopes.usuario.vg_punto_venta
		
		/** @type {JSFoundSet<db:/gpp/core_codigos_d_comprobante>} */
		var fs_comprobantes = databaseManager.getFoundSet('gpp', 'core_codigos_d_comprobante')
		fs_comprobantes.find()
		fs_comprobantes.punto_venta_id 		= forms.factura_devolucion_nuevo.vl_pv
		fs_comprobantes.codigo_numero		= forms.factura_devolucion_nuevo.vl_codigo
		fs_comprobantes.search()
		if(fs_comprobantes.getSize() > 0){
			forms.factura_devolucion_nuevo.vl_numero = fs_comprobantes.codigo_ultimo_numero + 1
		}
	}
	catch(e){
		forms.factura_devolucion_nuevo.vl_pv = null
		forms.factura_devolucion_nuevo.vl_numero = null;
	}
	
	if (forms.factura_devolucion_nuevo.vl_numero == null) {
		plugins.webnotificationsToastr.error(globals.mensajeError(101), "", globals.vg_toast_options)
		return
	}
	
	
	//Creamos tabla de herramientas y productos
	crearHerramientas()
	crearProductos()
	
	forms.factura_devolucion_nuevo.calculoTotales()
	
	
	application.showForm(forms.factura_devolucion_nuevo)
	
	
}


/**
 * @properties={typeid:24,uuid:"E6D6BE8E-8D2C-470A-9685-D31A7CBA036E"}
 */
function crearHerramientas(){
	forms.factura_devolucion_nuevo_herramientas.foundset.loadAllRecords()
	forms.factura_devolucion_nuevo_herramientas.foundset.deleteAllRecords()
	databaseManager.saveData(forms.factura_devolucion_nuevo_herramientas.foundset)
	
	var nCount = 0
	nCount = databaseManager.getFoundSetCount(foundset);
	for (var i = 1; i <= nCount; i++) {
		var myComprobante = foundset.getRecord(i);
		if(myComprobante.calc_seleccionado == 1){
			if(databaseManager.hasRecords(myComprobante.vent_comprobantes_to_vent_comprobante_herramientas)){
				var nRecordCount = 0
				nRecordCount = databaseManager.getFoundSetCount(myComprobante.vent_comprobantes_to_vent_comprobante_herramientas);
				for (var index = 1; index <= nRecordCount; index++) {
					var myHerramienta= myComprobante.vent_comprobantes_to_vent_comprobante_herramientas.getRecord(index);
					if(myComprobante.comp_codigo == 2){
						forms.factura_devolucion_nuevo_herramientas.foundset.newRecord()
						forms.factura_devolucion_nuevo_herramientas.foundset.equipo_id					= myHerramienta.equipo_id
						forms.factura_devolucion_nuevo_herramientas.foundset.comp_dias_a_cobrar			= myHerramienta.comp_dias_alquiler
						forms.factura_devolucion_nuevo_herramientas.foundset.comp_fecha_alquiler		= myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes_alquiler.comp_fecha_emision
						forms.factura_devolucion_nuevo_herramientas.foundset.comp_fecha_devolucion		= myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes.comp_fecha_emision
						forms.factura_devolucion_nuevo_herramientas.foundset.comp_id					= myHerramienta.comp_id
						forms.factura_devolucion_nuevo_herramientas.foundset.comp_id_devolucion			= myHerramienta.comp_devolucion
						forms.factura_devolucion_nuevo_herramientas.foundset.comp_precio				= myHerramienta.comp_precio
						forms.factura_devolucion_nuevo_herramientas.foundset.equipo_cod_barras			= myHerramienta.vent_comprobante_herramientas_to_herr_equipo.equipo_cod_barras
						forms.factura_devolucion_nuevo_herramientas.foundset.equipo_herramienta			= myHerramienta.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_nombre
						forms.factura_devolucion_nuevo_herramientas.foundset.equipo_modelo				= myHerramienta.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_modelo.modelo_nombre
						forms.factura_devolucion_nuevo_herramientas.foundset.equipo_num_serie			= myHerramienta.vent_comprobante_herramientas_to_herr_equipo.equipo_num_serie
						forms.factura_devolucion_nuevo_herramientas.foundset.comp_comentario_entrega	= myHerramienta.comp_comentario_entrega
						forms.factura_devolucion_nuevo_herramientas.foundset.comp_comentario_devolucion	= myHerramienta.comp_comentario_devol
						forms.factura_devolucion_nuevo_herramientas.foundset.comp_num_devolucion		= myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes.calc_num_compr_sin_codig
						databaseManager.saveData(forms.factura_devolucion_nuevo_herramientas.foundset)
					}
					else{//Alquiler
						if(myHerramienta.comp_devolucion == null){
							var ahora = application.getServerTimeStamp()
							forms.factura_devolucion_nuevo_herramientas.foundset.newRecord()
							forms.factura_devolucion_nuevo_herramientas.foundset.equipo_id 				= myHerramienta.equipo_id
							forms.factura_devolucion_nuevo_herramientas.foundset.comp_fecha_alquiler	= myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes.comp_fecha_emision
							forms.factura_devolucion_nuevo_herramientas.foundset.comp_fecha_devolucion	= new Date(ahora.getFullYear(),ahora.getMonth(),0)
							var vl_dias_reales = scopes.alquileres.calcularDiasParaCobrar(myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes.comp_fecha_emision,forms.factura_devolucion_nuevo_herramientas.foundset.comp_fecha_devolucion)
							if(myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes.comp_fec_ult_facturacion != null)
								vl_dias_reales = scopes.alquileres.calcularDiasParaCobrar(myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes.comp_fec_ult_facturacion,forms.factura_devolucion_nuevo_herramientas.foundset.comp_fecha_devolucion)
							forms.factura_devolucion_nuevo_herramientas.foundset.comp_dias_a_cobrar		= vl_dias_reales
							forms.factura_devolucion_nuevo_herramientas.foundset.comp_dias_facturados	= myHerramienta.comp_dias_facturados
							forms.factura_devolucion_nuevo_herramientas.foundset.comp_id				= myHerramienta.comp_id
							forms.factura_devolucion_nuevo_herramientas.foundset.comp_tipo				= 2 //alquiler
							forms.factura_devolucion_nuevo_herramientas.foundset.comp_id_devolucion		= myHerramienta.comp_devolucion
							forms.factura_devolucion_nuevo_herramientas.foundset.comp_comentario_entrega= myHerramienta.comp_comentario_entrega
							forms.factura_devolucion_nuevo_herramientas.foundset.comp_num_alquiler		= myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes.calc_num_compr_sin_codig
							
							myHerramienta.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_listas_precios.sort("lp_f_g desc")
							if(myHerramienta.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_listas_precios.lp_precio > myHerramienta.comp_precio){
								forms.factura_devolucion_nuevo_herramientas.foundset.comp_precio			= myHerramienta.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_listas_precios.lp_precio
							}
							else{
								forms.factura_devolucion_nuevo_herramientas.foundset.comp_precio			= myHerramienta.comp_precio
							}
							forms.factura_devolucion_nuevo_herramientas.foundset.equipo_cod_barras		= myHerramienta.vent_comprobante_herramientas_to_herr_equipo.equipo_cod_barras
							forms.factura_devolucion_nuevo_herramientas.foundset.equipo_herramienta		= myHerramienta.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_nombre
							forms.factura_devolucion_nuevo_herramientas.foundset.equipo_modelo			= myHerramienta.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_modelo.modelo_nombre
							forms.factura_devolucion_nuevo_herramientas.foundset.equipo_num_serie		= myHerramienta.vent_comprobante_herramientas_to_herr_equipo.equipo_num_serie
							databaseManager.saveData(forms.factura_devolucion_nuevo_herramientas.foundset)
						}
					}
				}
			}
		}
	}
}

/**
 * @properties={typeid:24,uuid:"E6B0FA66-30BA-44C0-8EE7-D28F927EE050"}
 */
function crearProductos(){
	forms.factura_devolucion_nuevo_ventas.foundset.loadAllRecords()
	forms.factura_devolucion_nuevo_ventas.foundset.deleteAllRecords()
	databaseManager.saveData(forms.factura_devolucion_nuevo_ventas.foundset)
	
	var nCount = 0
	nCount = databaseManager.getFoundSetCount(foundset);
	for (var i = 1; i <= nCount; i++) {
		var myComprobante = foundset.getRecord(i);
		if(myComprobante.calc_seleccionado == 1){
			if(databaseManager.hasRecords(myComprobante.vent_comprobantes_to_vent_comprobante_productos)){
				var nRecordCount = 0
				nRecordCount = databaseManager.getFoundSetCount(myComprobante.vent_comprobantes_to_vent_comprobante_productos);
				for (var index = 1; index <= nRecordCount; index++) {
					var myProducto= myComprobante.vent_comprobantes_to_vent_comprobante_productos.getRecord(index);
					forms.factura_devolucion_nuevo_ventas.foundset.newRecord()
					forms.factura_devolucion_nuevo_ventas.foundset.producto_id 			= myProducto.producto_id
					forms.factura_devolucion_nuevo_ventas.foundset.producto_cantidad	= myProducto.comp_cantidad
					forms.factura_devolucion_nuevo_ventas.foundset.producto_precio		= myProducto.comp_precio
					forms.factura_devolucion_nuevo_ventas.foundset.producto_total		= myProducto.comp_precio * myProducto.comp_cantidad
					forms.factura_devolucion_nuevo_ventas.foundset.producto_nombre		= myProducto.comp_prod_nombre
					forms.factura_devolucion_nuevo_ventas.foundset.producto_unidad		= myProducto.comp_prod_unidad
					forms.factura_devolucion_nuevo_ventas.foundset.producto_num_serie	= myProducto.comp_prod_num_serie
					
					databaseManager.saveData(forms.factura_devolucion_nuevo_ventas.foundset)
					
				}
			}
		}
	}
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
 * @properties={typeid:24,uuid:"08BAC2A3-649E-4D5A-9883-2B3CA0F02423"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	if(columnindex == 0){
		if(calc_seleccionado == 1){
			calc_seleccionado = 0
			vl_subtotal -= comp_imp_total - comp_imp_iva2
			vl_total_iva -= comp_imp_iva2
			vl_total -= comp_imp_total
			vl_cantidad -= 1
		}
		else{
			calc_seleccionado = 1
			vl_subtotal += comp_imp_total - comp_imp_iva2
			vl_total_iva += comp_imp_iva2
			vl_total += comp_imp_total
			vl_cantidad += 1
		}
	}

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"32DB7C5E-2430-4140-8A1C-962B3F0F721B"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar la función de facturación.", "", globals.vg_toast_options)
	}
	
	elements.btn_nuevo.enabled = true
	if (scopes.usuario.vg_permiso_crear == 0) {
		elements.btn_nuevo.enabled = false
	}
	
	vl_seleccionadas = 1
	
	if(firstShow)
		onActionLimpiar()
		
	if(vl_form_padre != null){
		filtrar()
		vl_form_padre = null
	}
	else{
		vl_cliente = null
		controller.focusFirstField()
		filtrar()
	}
}

/**
 * @properties={typeid:24,uuid:"1D766F5B-90B5-48DA-9727-C33F9C7C7C5B"}
 */
function onActionLimpiar() {
	if(vl_form_padre != null){
		vl_form_padre = null
		vl_obra = null
	}
	else{
		vl_cliente = null
		vl_obra = null
	}
	
	filtrar()
}

/**
 *
 * @properties={typeid:24,uuid:"9E39B0A3-3D2C-4C92-B4CF-8033036964C8"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	if(vl_cliente == null){
		foundset.clear()
	}
	else{
		
		var ahora = application.getServerTimeStamp()
		var fecha_inicial = new Date(ahora.getFullYear(),ahora.getMonth(),1)
	
		foundset.find()
		foundset.comp_estado_id = 5 //Pendiente
		foundset.cliente_id = vl_cliente
		if(vl_obra != null) foundset.obra_id = vl_obra
		if(vl_facturacion_parcial == 1){
			foundset.newRecord()
			foundset.comp_estado_id = "1 || 2" //Alquilado o parcialmente pendiente de devolver
			foundset.cliente_id = vl_cliente
			if(vl_obra != null) foundset.obra_id = vl_obra
			foundset.comp_fec_ult_facturacion = '<'+ utils.dateFormat(fecha_inicial, 'yyyy-MM-dd')+ ' 00:00:00|yyyy-MM-dd HH:mm:ss'
		}
		foundset.search()
		
		vl_total = 0
		vl_total_iva = 0
		vl_subtotal = 0
		vl_cantidad = 0
		vl_obra_nueva = null
		var vl_obra_anterior = foundset.obra_id
		var misma_obra = 1
		
		var nRecordCount = 0
		nRecordCount = databaseManager.getFoundSetCount(foundset);
		for (var index = 1; index <= nRecordCount; index++) {
			var myRecord = foundset.getRecord(index);
			myRecord.calc_seleccionado = 1
			if(myRecord.comp_codigo == 2){//devolucion
				myRecord.calc_total = myRecord.comp_imp_total
				myRecord.calc_iva   = myRecord.comp_imp_iva2
			}
			else{//alquiler
				calcularTotalCobrar(myRecord,fecha_inicial)
				myRecord.calc_total = vl_total_f + vl_iva
				myRecord.calc_iva   = vl_iva
			}
			databaseManager.saveData()
			vl_subtotal += myRecord.calc_total - myRecord.calc_iva
			vl_total_iva += myRecord.calc_iva
			vl_total += myRecord.calc_total
			vl_cantidad ++
			if(vl_obra_anterior != myRecord.obra_id){
				misma_obra = 0
			}
		}
		if(misma_obra){
			vl_obra_nueva = vl_obra_anterior
		}
		
		
	
	}
}


/**
 * @param p_fecha_cierre
 * @param {JSRecord<db:/gpp/vent_comprobantes>} p_alquiler
 * @properties={typeid:24,uuid:"1173461D-A419-41D5-A049-DA76B8915A1A"}
 */
function calcularTotalCobrar(p_alquiler,p_fecha_cierre){
	
	var vl_fecha_devolucion = p_fecha_cierre
	
	vl_total_f = 0
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(p_alquiler.vent_comprobantes_to_vent_comprobante_herramientas);
	for (var index = 1; index <= nRecordCount; index++) {
		var myHerramienta = p_alquiler.vent_comprobantes_to_vent_comprobante_herramientas.getRecord(index);
		var fecha_alquiler = myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes.comp_fecha_emision
		
		var vl_dias_reales = scopes.alquileres.calcularDiasParaCobrar(fecha_alquiler,vl_fecha_devolucion)
		
		vl_total_f += vl_dias_reales * myHerramienta.comp_precio
	
	}
	
	vl_iva = vl_total_f * 0.21
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"409904C0-2F30-49BA-9CF4-064EB97C68F2"}
 */
function onDataChangeCliente() {
	
	scopes.globals.vg_cliente = vl_cliente
	
	/** @type {JSFoundSet<db:/gpp/vent_clientes>} */
	var fs_vent_clientes = databaseManager.getFoundSet('gpp', 'vent_clientes')
	fs_vent_clientes.loadRecords(vl_cliente)
	if(fs_vent_clientes.cliente_facturacion_mensual == 1){
		vl_facturacion_parcial = 1
	}
	else{
		vl_facturacion_parcial = 0
	}
	
	filtrar()
}

/**
 * @param {Number} columnindex
 * @param {string} sortdirection
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"9BF542F3-C277-4F4E-A618-080113B3D4E4"}
 */
function onHeaderClick(columnindex, sortdirection, event) {
	if(columnindex == 0){
		
		if(vl_seleccionadas == 0){
			vl_seleccionadas = 1
			elements.table.getColumn(0).headerStyleClass = 'cell_center_header far fa-check-square cell-fontawesone'
			
		}
		else{
			vl_seleccionadas = 0
			elements.table.getColumn(0).headerStyleClass = 'cell_center_header far fa-square cell-fontawesone'
		}
		
		var nRecordCount = 0
		nRecordCount = databaseManager.getFoundSetCount(foundset);
		for (var index = 1; index <= nRecordCount; index++) {
			var myRecord = foundset.getRecord(index);
			myRecord.calc_seleccionado = vl_seleccionadas
			databaseManager.saveData()
		}
		
	}

}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"3E6CF438-27CD-4FC5-992B-A74D66E5CBFE"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= '';
	

if(foundset.comp_codigo == 1){//Alquileres
	forms['alquiler_detalle'].foundset.loadRecords(foundset.comp_id)
	win.show( 'alquiler_detalle' );
}
if(foundset.comp_codigo == 2){//Devoluciones
	forms['devolucion_detalle'].foundset.loadRecords(foundset.comp_id)
	win.show('devolucion_detalle');
}

}
