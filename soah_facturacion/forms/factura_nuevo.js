/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"784667C1-58C4-4A86-A0FA-BD6B3B67B4A3",variableType:4}
 */
var vl_enviar_mail = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EC4D4C9D-67C7-4FBC-8E72-55715E348E80",variableType:4}
 */
var vl_condicion_pago = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8A56C68F-95D5-429D-A43C-A53362765FDC",variableType:4}
 */
var vl_comp_devolucion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1512E64E-6AA5-49E5-B6F7-8BD22E5B6D05",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"72FECE0F-247F-4AA9-93EA-E4BA3C5E7EC7",variableType:4}
 */
var vl_tipo_a = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"112892C0-DBBF-4B4B-8783-B29390134F59",variableType:4}
 */
var vl_obra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5709E022-A2ED-4B48-9228-8445D7B2DA6A",variableType:8}
 */
var vl_subtotal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D2B56F2A-8F73-4EF1-842F-06E868317859",variableType:8}
 */
var vl_total_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F87EBE40-4440-4F73-B491-43C2F623F643",variableType:8}
 */
var vl_total_ventas = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1B6F7C54-1090-4BDB-89CA-605F89BC8009",variableType:8}
 */
var vl_total_alquiler = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"01AFE1BB-C3B1-4B3B-9327-096D58256057",variableType:4}
 */
var vl_codigo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C41831E3-A475-4FBB-9E74-DFA1BCD97279",variableType:4}
 */
var vl_pv = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D9D2B159-68F8-4410-9F89-1BCAE217D640",variableType:8}
 */
var vl_total = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0B20024E-6B09-4170-9549-FD1B3A0E602D"}
 */
var vl_observaciones = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"9D44AD10-E596-47E7-8D69-9C8512FAA5F2",variableType:93}
 */
var vl_fecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BD8410FE-19A7-4CD9-A179-DC793F0BC8B5",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EC5ACC2A-FB78-443F-98A0-83E2DF06160B",variableType:4}
 */
var vl_numero = null;

/**
 * Perform the element default action.
 *
 *
 *
 * @properties={typeid:24,uuid:"99067FAE-E7E2-441B-AA52-D2A4B21D42F5"}
 */
function onActionVolver() {
	limpiarVariables()
	application.showForm(forms.facturacion_main)
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"980283AB-05A0-43A1-851E-1181E852D396"}
 * @SuppressWarnings(wrongparameters)
 */
function onActionGuardar(event) {

	if (vl_numero == null) {
		plugins.webnotificationsToastr.error(globals.mensajeError(101), "", globals.vg_toast_options)
		return
	}
	
	if(vl_cliente == null){
		plugins.webnotificationsToastr.error("Falta seleccionar el cliente.","",globals.vg_toast_options)
		controller.focusField("f_cliente",true)
		return
	}
	if (vl_fecha == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de fecha.", "", globals.vg_toast_options)
		controller.focusField("f_fecha", true)
		return
	}
	
	vl_total = (Math.round(vl_total*100))/100
	//Si es factura comprobamos forma de pago
	if((vl_codigo >= 5 && vl_codigo <= 15) || (vl_codigo >= 35 && vl_codigo <= 45)){
		//Contado
		if(vl_condicion_pago == 1 && forms.factura_nuevo_forma_pago.vl_total != vl_total){
			plugins.webnotificationsToastr.error("El importe pagado no corresponde con el importe total a facturar.", "", globals.vg_toast_options)
			return
		}
	}
	
	//Revisar si hay productos que requieren numero de serie
	var nCount = 0
	nCount = databaseManager.getFoundSetCount(forms.factura_devolucion_nuevo_ventas.foundset);
	for (var i = 1; i <= nCount; i++) {
		var myProducto = forms.factura_devolucion_nuevo_ventas.foundset.getRecord(i);
		if(myProducto.producto_codigo != null && myProducto.producto_num_serie == null){
			plugins.webnotificationsToastr.error("Hay productos con numero de serie pendiente de digitar.","",globals.vg_toast_options)
			return
		}
	}
	

	
	
	grabarFactura()
	
	
	
}

/**
 * @properties={typeid:24,uuid:"D844375A-3D31-4592-9737-2BC06A887E97"}
 * @AllowToRunInFind
 */
function grabarFactura(){

	var spinner = 'Cube grid'//"Wandering cubes", "Pulse", "Chasing dots", "Three bounce", "Circle", "Cube grid", "Fading circle", "Folding cube", "Rotating plane", "Double bounce", "Wave", 
	var overlayOpacity = 0.7
	plugins.svyBlockUI.overlayColor = "black"
	plugins.svyBlockUI.overlayOpacity = overlayOpacity
	plugins.svyBlockUI.spinner = spinner
	plugins.svyBlockUI.spinnerBgColor = "yellow"
	plugins.svyBlockUI.show("Facturando...")
	
	
		/** @type {JSFoundSet<db:/gpp/vent_clientes>} */
		var fs_clientes = databaseManager.getFoundSet('gpp', 'vent_clientes')
		
		/** @type {JSFoundSet<db:/gpp/core_puntos_de_venta>} */
		var fs_puntos_venta = databaseManager.getFoundSet('gpp', 'core_puntos_de_venta')
		
		plugins.svyBlockUI.show("Consultando con AFIP...")
		
	
	fs_puntos_venta.loadRecords(vl_pv)
	if(fs_puntos_venta.pv_afip == 1){//SI el punto de venta tiene activada la facturacion con afip
		
		fs_clientes.loadRecords(vl_cliente)
		var cliente_doc = utils.stringToNumber(fs_clientes.vent_clientes_to_core.core_num_doc)
		var cliente_doc_tipo = fs_clientes.vent_clientes_to_core.tipo_doc_id
		var respuesta = scopes.facturacion.comprobarAfip(fs_puntos_venta.pv_numero,vl_codigo,vl_subtotal,vl_fecha,vl_total_iva,vl_total,cliente_doc,cliente_doc_tipo)
		
		if(respuesta.comp_estado == 2){
			vl_numero = respuesta.comp_num;
			var vl_cae = respuesta.comp_cae
			var vl_cae_vencimiento = respuesta.cae_vencimiento;
			var consulta = respuesta.consulta;
			
			plugins.svyBlockUI.show("Facturando...")
			
			grabar(vl_cae,vl_cae_vencimiento,consulta)
			
			//scopes.facturacion.borrarRegistroAfip(respuesta.id)
			
		}
		else{
			plugins.svyBlockUI.stop()
			var r = utils.stringReplace(respuesta.consulta,'\n', '<br>');
			plugins.dialogs.showQuestionDialog('SOAH', "Error de conexión con AFIP: "+ r,'OK')
			
		}
	}
	else{
		vl_numero = scopes.facturacion.GetProximoNumeroComprobante(vl_pv,vl_codigo)
		grabar("",null, "")
		
	}
	
	
	
	
}


/**
 * 
 * @param p_cae
 * @param {Date} p_vencimiento
 * @param {String} p_consulta
 *
 * @properties={typeid:24,uuid:"88ABABE5-14BD-4085-B42F-DF11E49A1642"}
 */
function grabar(p_cae, p_vencimiento, p_consulta){
	
	
		/** @type {JSFoundSet<db:/gpp/vent_comprobantes>} */
		var fs_comprobantes = databaseManager.getFoundSet('gpp', 'vent_comprobantes')
		
		/** @type {JSFoundSet<db:/gpp/vent_comprobante_datos>} */
		var fs_comprobantes_dat = databaseManager.getFoundSet('gpp', 'vent_comprobante_datos')
		
		/** @type {JSFoundSet<db:/gpp/vent_historicos_cliente>} */
		var fs_historicos_cliente = databaseManager.getFoundSet('gpp', 'vent_historicos_cliente')
		
		/** @type {JSFoundSet<db:/gpp/vent_comprobante_productos>} */
		var fs_comprobante_productos = databaseManager.getFoundSet('gpp', 'vent_comprobante_productos')	
	
	
		//Generamos codigo de barras
		var vl_codigo_barras = ""
	if(p_cae != ""){
		vl_codigo_barras = scopes.facturacion.GenerarCodigoBarrasAFIP(vl_codigo,vl_pv,p_cae,p_vencimiento)
	}
		
	//Guardamos el comprobante
	fs_comprobantes.newRecord()
	fs_comprobantes.company_id					= scopes.usuario.vg_company_id
	fs_comprobantes.cliente_id					= vl_cliente
	fs_comprobantes.comp_codigo					= vl_codigo
	fs_comprobantes.comp_fecha_emision			= vl_fecha
	fs_comprobantes.comp_imp_total				= vl_total
	fs_comprobantes.comp_numero					= vl_numero
	fs_comprobantes.comp_observacion			= vl_observaciones
	fs_comprobantes.comp_pv						= vl_pv
	fs_comprobantes.comp_imp_alqu				= vl_total_alquiler
	fs_comprobantes.comp_imp_ventas				= vl_total_ventas
	fs_comprobantes.comp_imp_grav2				= vl_subtotal
	fs_comprobantes.comp_imp_iva2				= vl_total_iva
	fs_comprobantes.comp_imp_total				= vl_total
	fs_comprobantes.obra_id						= vl_obra 
	fs_comprobantes.comp_condicion				= vl_condicion_pago
	fs_comprobantes.comp_cae					= p_cae
	fs_comprobantes.comp_cae_vencimiento		= p_vencimiento
	fs_comprobantes.consulta_afip				= p_consulta
	fs_comprobantes.comp_cod_barras				= vl_codigo_barras
	if(vl_condicion_pago == 1 || (vl_codigo >=20 && vl_codigo <= 30)){//al contado o notas de credito
		fs_comprobantes.comp_estado_id				= 7//Cerrado
	}
	else{
		fs_comprobantes.comp_estado_id				= 6 //Pendiente
	}
	databaseManager.saveData(fs_comprobantes)
	
	
	//Guardamos comprobantes datos del cliente
	fs_comprobantes_dat.newRecord()
	fs_comprobantes_dat.company_id				= scopes.usuario.vg_company_id
	fs_comprobantes_dat.cliente_celular			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_celular
	fs_comprobantes_dat.cliente_direccion		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_direccion
	fs_comprobantes_dat.cliente_fax				= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_fax
	fs_comprobantes_dat.cliente_mail			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_mail
	fs_comprobantes_dat.cliente_nombre			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_nombre
	fs_comprobantes_dat.cliente_num_doc			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_num_doc
	fs_comprobantes_dat.cliente_observacion		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_observacion
	fs_comprobantes_dat.cliente_razon_social	= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_razon_social
	fs_comprobantes_dat.cliente_telefono		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_telefono
	fs_comprobantes_dat.cod_postal_id			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.cod_postal_id
	fs_comprobantes_dat.comp_id					= fs_comprobantes.comp_id
	fs_comprobantes_dat.tipo_afip_id			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.tipo_afip_id
	fs_comprobantes_dat.tipo_doc_id				= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.tipo_doc_id 
	if(vl_obra != null)
		fs_comprobantes_dat.obra_nombre				= fs_comprobantes.vent_comprobantes_to_vent_obras.obra_nombre
	databaseManager.saveData(fs_comprobantes_dat)
	
	
	
	//Guardamos historico de cliente
	fs_historicos_cliente.newRecord()
	fs_historicos_cliente.company_id				= scopes.usuario.vg_company_id
	fs_historicos_cliente.cliente_id				= vl_cliente
	fs_historicos_cliente.comp_id					= fs_comprobantes.comp_id
	fs_historicos_cliente.hist_estado				= 2
	fs_historicos_cliente.hist_fecha				= vl_fecha
	fs_historicos_cliente.hist_tipo					= 4 //Comprobante
	databaseManager.saveData(fs_historicos_cliente)
	
	//Guardar productos
	var nCount = 0
	nCount = databaseManager.getFoundSetCount(forms.factura_devolucion_nuevo_ventas.foundset);
	for (var i = 1; i <= nCount; i++) {
		var myProducto = forms.factura_devolucion_nuevo_ventas.foundset.getRecord(i);
		fs_comprobante_productos.newRecord()
		fs_comprobante_productos.company_id 			= scopes.usuario.vg_company_id
		fs_comprobante_productos.comp_id				= fs_comprobantes.comp_id
		fs_comprobante_productos.comp_precio			= myProducto.producto_precio
		fs_comprobante_productos.producto_id			= myProducto.producto_id
		fs_comprobante_productos.comp_cantidad			= myProducto.producto_cantidad
		fs_comprobante_productos.comp_prod_nombre		= myProducto.producto_nombre
		fs_comprobante_productos.comp_prod_unidad		= myProducto.producto_unidad
		fs_comprobante_productos.comp_prod_num_serie	= myProducto.producto_num_serie
		databaseManager.saveData(fs_comprobante_productos)
	}
	
	
	if(vl_condicion_pago == 1){//contado
		
		//Guardamos la forma de pago
		/** @type {JSFoundSet<db:/gpp/vent_comp_forma_pago>} */
		var fs_forma_pago = databaseManager.getFoundSet('gpp', 'vent_comp_forma_pago')
		
		//Efectivo
		if(forms.factura_devolucion_nuevo_forma_pago.vl_efectivo > 0){
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= null
			fs_forma_pago.comp_id							= fs_comprobantes.comp_id
			fs_forma_pago.forma_pago_id						= 1 //Efectivo
			fs_forma_pago.forma_pago_imp					= forms.factura_devolucion_nuevo_forma_pago.vl_efectivo 
			databaseManager.saveData(fs_forma_pago)
		}
		
		//Cheques
		if(forms.factura_devolucion_nuevo_forma_pago.vl_cheques > 0){
			//TODO Recorrer listado de cheques
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= 0
			fs_forma_pago.comp_id							= fs_comprobantes.comp_id
			fs_forma_pago.forma_pago_id						= 2 //Cheques
			fs_forma_pago.forma_pago_imp					= forms.factura_devolucion_nuevo_forma_pago.vl_cheques 
			databaseManager.saveData(fs_forma_pago)
		}
		//Transferencia
		if(forms.factura_devolucion_nuevo_forma_pago.vl_transferencia > 0){
			//TODO Recorrer listado de transoferencias
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= null
			fs_forma_pago.comp_id							= fs_comprobantes.comp_id
			fs_forma_pago.forma_pago_id						= 3 //Transferencia
			fs_forma_pago.forma_pago_imp					= forms.factura_devolucion_nuevo_forma_pago.vl_transferencia 
			databaseManager.saveData(fs_forma_pago)
		}
		//Retenciones IIBB
		if(forms.factura_devolucion_nuevo_forma_pago.vl_ret_iibb > 0){
			//TODO Recorrer listado de retenciones
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= null
			fs_forma_pago.comp_id							= fs_comprobantes.comp_id
			fs_forma_pago.forma_pago_id						= 4 // Ret IIBB
			fs_forma_pago.forma_pago_imp					= forms.factura_devolucion_nuevo_forma_pago.vl_ret_iibb 
			databaseManager.saveData(fs_forma_pago)
		}
		//Retenciones de ganancias
		if(forms.factura_devolucion_nuevo_forma_pago.vl_ret_gan > 0){
			//TODO Recorrer listado de retenciones
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= null
			fs_forma_pago.comp_id							= fs_comprobantes.comp_id
			fs_forma_pago.forma_pago_id						= 5// Ret gan
			fs_forma_pago.forma_pago_imp					= forms.factura_devolucion_nuevo_forma_pago.vl_ret_gan 
			databaseManager.saveData(fs_forma_pago)
		}
	}
	
	
	
	scopes.facturacion.SetUltimoNumeroComprobante(vl_pv,vl_codigo,vl_numero)
	
	
	//Imprimir factura
	globals.imprimirReporteJasper("gpp","vent_factura_devolucion.jasper","",plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW, {
		comp_id: fs_comprobantes.comp_id,
		comp_imp_letras: globals.convertirNumeroALetras(fs_comprobantes.comp_imp_total)})
		
	//Enviar mail
	if(vl_enviar_mail){
		var adjuntos = new Array()
		var cod = vl_pv+"-"+vl_numero
		var titulo   =  cod+'.pdf'
		
		adjuntos.push(plugins.mail.createBinaryAttachment(titulo,plugins.jasperPluginRMI.runReport('gpp',"vent_factura_devolucion.jasper", "", plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF, 
			{comp_id: fs_comprobantes.comp_id,
				comp_imp_letras: globals.convertirNumeroALetras(fs_comprobantes.comp_imp_total)}))) 
				
		globals.enviarMail(fs_comprobantes_dat.cliente_mail,"","Factura "+cod,"Adjuntamos facturas:",adjuntos)
	}
	
	plugins.svyBlockUI.stop()
	
	
	forms.facturacion_main.onActionLimpiar()
	
	onActionVolver()
}

/**
 * Calcula los totales de una devolucion
 * @param p_comp_id
 *
 * @properties={typeid:24,uuid:"84FC25C7-C011-466E-8272-468849AA5F4A"}
 */
function calcularTotal(p_comp_id){
	/** @type {JSFoundSet<db:/gpp/vent_comprobantes>} */
	var fs_comprobantes = databaseManager.getFoundSet('gpp', 'vent_comprobantes')
	
	fs_comprobantes.loadRecords(p_comp_id)
	
	if(databaseManager.hasRecords(fs_comprobantes)){
		
		fs_comprobantes.comp_imp_alqu = 0
		
		var vl_subtotal_ = fs_comprobantes.comp_imp_alqu + fs_comprobantes.comp_imp_ventas
		fs_comprobantes.comp_imp_iva2 = vl_subtotal_ * 0.21
		fs_comprobantes.comp_imp_total = vl_subtotal_ + fs_comprobantes.comp_imp_iva2
		
		
		databaseManager.saveData(fs_comprobantes)
	}
}

/**
 * @properties={typeid:24,uuid:"843E36D3-54F2-469F-9B0B-6DDDF8DA469E"}
 * @AllowToRunInFind
 */
function limpiarVariables(){

	
	scopes.globals.vg_cliente = null
	
	vl_total = 0;
	vl_total_alquiler = 0
	vl_total_iva = 0
	vl_total_ventas = 0
	vl_subtotal = 0
	
	vl_observaciones = null;
	vl_fecha = application.getServerTimeStamp();
	vl_cliente = null;
	
	vl_codigo = null
	vl_pv 	= null
	vl_numero = null;
	
	
	forms.factura_devolucion_nuevo_herramientas.foundset.loadAllRecords()
	forms.factura_devolucion_nuevo_herramientas.foundset.deleteAllRecords()
	
	forms.factura_devolucion_nuevo_ventas.foundset.loadAllRecords()
	forms.factura_devolucion_nuevo_ventas.foundset.deleteAllRecords()
}

/**
 * @properties={typeid:24,uuid:"D186F452-B806-455D-AF06-F15E1DB773C4"}
 */
function calculoTotales(){

	calculoVentas()
	
	vl_subtotal =  vl_total_ventas
	vl_total_iva = vl_subtotal * 0.21
	vl_total = vl_subtotal + vl_total_iva
}

/**
 * @properties={typeid:24,uuid:"019BD672-F284-4FF0-95D1-CDA04CF0B2A4"}
 */
function calculoVentas(){
	
	
	vl_total_ventas = 0	
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.factura_devolucion_nuevo_ventas.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myProducto= forms.factura_devolucion_nuevo_ventas.foundset.getRecord(index);
		vl_total_ventas += myProducto.producto_total
	}
	
}

/**
 *
 * @properties={typeid:24,uuid:"495D5E2D-8D56-4FD5-9725-397BA6478EC8"}
 */
function onDataChangeFecha() {
	calculoTotales()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5CD4CE59-3555-4C32-A59D-D3E1ED29B99E"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	forms.factura_nuevo_forma_pago.vl_cheques = 0
	forms.factura_nuevo_forma_pago.vl_efectivo = 0
	forms.factura_nuevo_forma_pago.vl_transferencia = 0
	forms.factura_nuevo_forma_pago.vl_ret_gan = 0
	forms.factura_nuevo_forma_pago.vl_ret_iibb = 0
	forms.factura_nuevo_forma_pago.vl_total = 0
	
	vl_cliente 				= vl_cliente
	vl_fecha				= application.getServerTimeStamp()
	vl_numero				= null
	vl_obra					= vl_obra
	vl_observaciones		= null
	vl_subtotal				= vl_subtotal
	vl_total				= vl_total
	vl_total_iva			= vl_total_iva
	vl_condicion_pago		= 1//contado
	
	vl_enviar_mail = 1
	
	//Numero y codigo de la factura
	vl_codigo			= 5 //Factura
	vl_numero = null;
	try{
		vl_pv 		= scopes.usuario.vg_punto_venta
		
		/** @type {JSFoundSet<db:/gpp/core_codigos_d_comprobante>} */
		var fs_comprobantes = databaseManager.getFoundSet('gpp', 'core_codigos_d_comprobante')
		fs_comprobantes.find()
		fs_comprobantes.punto_venta_id 		= vl_pv
		fs_comprobantes.codigo_numero		= vl_codigo
		fs_comprobantes.search()
		if(fs_comprobantes.getSize() > 0){
			vl_numero = fs_comprobantes.codigo_ultimo_numero + 1
		}
	}
	catch(e){
		vl_pv = null
		vl_numero = null;
	}
	
	if (vl_numero == null) {
		plugins.webnotificationsToastr.error(globals.mensajeError(101), "", globals.vg_toast_options)
		onActionVolver()
	}
}

/**
 *
 * @properties={typeid:24,uuid:"0D597161-7EDB-4D50-84FA-087CEAA10611"}
 */
function onDataChange() {
	vl_numero = scopes.facturacion.GetProximoNumeroComprobante(vl_pv,vl_codigo)
}
