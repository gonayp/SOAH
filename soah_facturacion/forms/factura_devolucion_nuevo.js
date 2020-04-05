/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2E653EDA-6C70-4A46-8456-EC332C28443C",variableType:4}
 */
var vl_enviar_mail = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"84D484B5-EDBE-4E62-9862-7459A5CA4133",variableType:4}
 */
var vl_condicion_pago = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"45B9BC2C-F6F1-4110-B18B-9494409AC8E1",variableType:4}
 */
var vl_comp_devolucion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C634D358-78D2-4D07-8705-9EE99EA0B3C3",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5A67EFB9-2B1A-4C15-AD57-F27BA9A9510B",variableType:4}
 */
var vl_tipo_a = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E9763813-0B7F-4669-B787-3C509B1DC912",variableType:4}
 */
var vl_obra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"671B8A79-D20E-4E01-B0A0-8D2EF3105E2A",variableType:8}
 */
var vl_subtotal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1D0D51C1-B782-4E39-8B3F-2B86C2016D97",variableType:8}
 */
var vl_total_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"68DDCBEF-CA28-4697-ACF7-4D1CDA4B3E61",variableType:8}
 */
var vl_total_ventas = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7DC581ED-86A2-4EEC-8C18-86700C761DBA",variableType:8}
 */
var vl_total_alquiler = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E947EF89-7104-4313-8B1B-81FA269A8410",variableType:4}
 */
var vl_codigo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"631C2A32-E717-431B-9B96-9B9D0664FBFB",variableType:4}
 */
var vl_pv = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"729AD972-5139-4BD3-BAC2-A6002A58B27C",variableType:8}
 */
var vl_total = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"47D82907-D063-4C88-A414-373B805C90A8"}
 */
var vl_observaciones = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"50918FC5-E8BA-4DAF-A264-64B103CA104D",variableType:93}
 */
var vl_fecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D8093CA3-6BFE-4582-BB2D-3406FBCB285E",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2C039F95-E24E-414A-AF4C-B7C340D4EAF0",variableType:4}
 */
var vl_numero = null;

/**
 * Perform the element default action.
 *
 *
 *
 * @properties={typeid:24,uuid:"67B83159-514C-4137-A4CA-2008A82E2E78"}
 */
function onActionVolver() {
	limpiarVariables()
	application.showForm(forms.facturacion_inicio)
}


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E69A0FDF-E9E9-4DD5-9B37-0634102A9AA7"}
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
	
	//Contado
	if(vl_condicion_pago == 1 && forms.factura_formas_de_pago.vl_diferencia != 0){
		plugins.webnotificationsToastr.error("El importe pagado no corresponde con el importe total a facturar.", "", globals.vg_toast_options)
		return
	}
	

	
	grabarFactura()
	
	
	
}




/**
 * @properties={typeid:24,uuid:"CE6A0728-B347-452E-A0A8-0D39539B2881"}
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
		var respuesta = scopes.facturacion.comprobarAfip(fs_puntos_venta.pv_numero,vl_codigo,Math.round(vl_subtotal*100)/100,vl_fecha,Math.round(vl_total_iva*100)/100,vl_total,cliente_doc,cliente_doc_tipo)
		
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
 * @AllowToRunInFind
 *
 *@param p_cae
 * @param {Date} p_vencimiento
 * @param {String} p_consulta
 * @properties={typeid:24,uuid:"984B1A92-1593-4634-A953-EFF90AD5C761"}
 */
function grabar(p_cae, p_vencimiento, p_consulta){
	
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobantes>} */
	var fs_comprobantes = databaseManager.getFoundSet('gpp', 'vent_comprobantes')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_datos>} */
	var fs_comprobantes_dat = databaseManager.getFoundSet('gpp', 'vent_comprobante_datos')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} */
	var fs_comprobante_herramientas = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} */
	var fs_comprobante_herramientas_ant = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')
	
	/** @type {JSFoundSet<db:/gpp/vent_historicos_cliente>} */
	var fs_historicos_cliente = databaseManager.getFoundSet('gpp', 'vent_historicos_cliente')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_productos>} */
	var fs_comprobante_productos = databaseManager.getFoundSet('gpp', 'vent_comprobante_productos')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_facturas_parciales>} */
	var fs_comprobantes_factura_parcial = databaseManager.getFoundSet('gpp', 'vent_comprobante_facturas_parciales')
	
	/** @type {JSFoundSet<db:/gpp/cheq_cheques>} */
	var fs_cheques = databaseManager.getFoundSet('gpp', 'cheq_cheques')
	
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
	fs_comprobantes.comp_cae					= p_cae
	fs_comprobantes.comp_cae_vencimiento		= p_vencimiento
	fs_comprobantes.consulta_afip				= p_consulta
	fs_comprobantes.comp_cod_barras				= vl_codigo_barras
	
	fs_comprobantes.comp_condicion				= vl_condicion_pago
	if(vl_condicion_pago == 1 || (vl_codigo >=20 && vl_codigo <= 30)){
		fs_comprobantes.comp_estado_id				= 7//Cerrado
	}
	else{
		fs_comprobantes.comp_estado_id				= 6 //Pendiente
		var aux_dia = vl_fecha.getDate()+30
		if(vl_condicion_pago == 2){//15 dias
			aux_dia = vl_fecha.getDate()+15
		}
		fs_comprobantes.comp_fecha_vencimiento		= new Date(vl_fecha.getFullYear(),vl_fecha.getMonth(), aux_dia) 
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
	
	//Guardamos registros de herramientas a facturar
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.factura_devolucion_nuevo_herramientas.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myHerramienta = forms.factura_devolucion_nuevo_herramientas.foundset.getRecord(index);
		
		fs_comprobante_herramientas.newRecord()
		fs_comprobante_herramientas.company_id					= scopes.usuario.vg_company_id
		fs_comprobante_herramientas.comp_comentario_entrega		= myHerramienta.comp_comentario_entrega
		fs_comprobante_herramientas.comp_id						= fs_comprobantes.comp_id
		fs_comprobante_herramientas.comp_precio					= myHerramienta.comp_precio
		fs_comprobante_herramientas.equipo_id					= myHerramienta.equipo_id
		fs_comprobante_herramientas.comp_id_padre				= myHerramienta.comp_id
		fs_comprobante_herramientas.comp_devolucion				= myHerramienta.comp_id_devolucion
		fs_comprobante_herramientas.comp_dias_alquiler			= myHerramienta.comp_dias_a_cobrar
		fs_comprobante_herramientas.comp_comentario_entrega			= myHerramienta.comp_comentario_entrega
		databaseManager.saveData(fs_comprobante_herramientas)
		
		if(myHerramienta.comp_tipo != 2){//Devoluciones
			fs_comprobante_herramientas.comp_comentario_devol			= myHerramienta.comp_comentario_devolucion
			//actualizamos valores cobrados en las devoluciones
			fs_comprobante_herramientas_ant.find()
			fs_comprobante_herramientas_ant.comp_id = myHerramienta.comp_id
			fs_comprobante_herramientas_ant.equipo_id = myHerramienta.equipo_id
			fs_comprobante_herramientas_ant.search()
			if(databaseManager.hasRecords(fs_comprobante_herramientas_ant)){
				if(fs_comprobante_herramientas_ant.comp_dias_alquiler != myHerramienta.comp_dias_a_cobrar){//Solo si hay cambios en los dias a cobrar con respecto a la devolucion
					fs_comprobante_herramientas_ant.comp_dias_alquiler = myHerramienta.comp_dias_a_cobrar
					//cambiamos el estado del comprobante de devolucion
					fs_comprobante_herramientas_ant.vent_comprobante_herramientas_to_vent_comprobantes.comp_estado_id = 4
					databaseManager.saveData(fs_comprobante_herramientas_ant)
					calcularTotal(myHerramienta.comp_id)
				}
				fs_comprobante_herramientas_ant.vent_comprobante_herramientas_to_vent_comprobantes.comp_id_padre  = fs_comprobantes.comp_id//Referente a la factura de la devolucions
				fs_comprobante_herramientas_ant.vent_comprobante_herramientas_to_vent_comprobantes.comp_estado_id = 4 //cerrado
				databaseManager.saveData(fs_comprobante_herramientas_ant.vent_comprobante_herramientas_to_vent_comprobantes)
				
			}
		}
		else{//alquileres
			//actualizamos valores del alquiler al que pertenece
			fs_comprobante_herramientas_ant.find()
			fs_comprobante_herramientas_ant.comp_id = myHerramienta.comp_id
			fs_comprobante_herramientas_ant.equipo_id = myHerramienta.equipo_id
			fs_comprobante_herramientas_ant.search()
			
			if(fs_comprobante_herramientas_ant.getSize() > 0){
				if(fs_comprobante_herramientas_ant.comp_dias_facturados == null) {
					fs_comprobante_herramientas_ant.comp_dias_facturados = myHerramienta.comp_dias_a_cobrar
				}
				else{
					fs_comprobante_herramientas_ant.comp_dias_facturados += myHerramienta.comp_dias_a_cobrar
				}
				
				fs_comprobante_herramientas_ant.comp_fec_ult_facturacion = new Date(vl_fecha.getFullYear(),vl_fecha.getMonth(),1)//Aqui va la fecha de primero de mes //Poner hora y minutos?
				fs_comprobante_herramientas_ant.vent_comprobante_herramientas_to_vent_comprobantes.comp_fec_ult_facturacion =  new Date(vl_fecha.getFullYear(),vl_fecha.getMonth(),1)
				databaseManager.saveData()
			}
			//Creamos relacion de factura parcial
			fs_comprobantes_factura_parcial.newRecord()
			fs_comprobantes_factura_parcial.company_id 		    =  scopes.usuario.vg_company_id
			fs_comprobantes_factura_parcial.comp_id_alquiler	=  myHerramienta.comp_id
			fs_comprobantes_factura_parcial.comp_id_fact		= fs_comprobantes.comp_id
			databaseManager.saveData(fs_comprobantes_factura_parcial)
			
		}
		
	}
	
	
	
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
		if(forms.factura_formas_de_pago.vl_efectivo > 0){
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= null
			fs_forma_pago.comp_id							= fs_comprobantes.comp_id
			fs_forma_pago.forma_pago_id						= 1 //Efectivo
			fs_forma_pago.forma_pago_imp					= forms.factura_formas_de_pago.vl_efectivo 
			databaseManager.saveData(fs_forma_pago)
		}
		
		//Cheques
		if(forms.factura_formas_de_pago.vl_cheques > 0){
			
			var n = 0
			n= databaseManager.getFoundSetCount(forms.factura_formas_de_pago_detalle.foundset);
			for (var j= 1; j <= n; j++) {
				var myFormaDePago= forms.factura_formas_de_pago_detalle.foundset.getRecord(j);
				if(myFormaDePago.fp_tipo == 2){
					fs_forma_pago.newRecord()
					fs_forma_pago.company_id						= scopes.usuario.vg_company_id
					fs_forma_pago.cheque_id							= myFormaDePago.fp_cheque_id
					fs_forma_pago.comp_id							= fs_comprobantes.comp_id
					fs_forma_pago.forma_pago_id						= 2 //Cheques
					fs_forma_pago.forma_pago_imp					= myFormaDePago.fp_importe 
					databaseManager.saveData(fs_forma_pago)
					
					fs_cheques.loadRecords(myFormaDePago.fp_cheque_id)
					fs_cheques.comp_id = fs_comprobantes.comp_id
					databaseManager.saveData(fs_cheques)
				}
			}
			
			
		}
		//Transferencia
		if(forms.factura_formas_de_pago.vl_transferencia > 0){
			//TODO Recorrer listado de transoferencias
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= null
			fs_forma_pago.comp_id							= fs_comprobantes.comp_id
			fs_forma_pago.forma_pago_id						= 3 //Transferencia
			fs_forma_pago.forma_pago_imp					= forms.factura_formas_de_pago.vl_transferencia 
			databaseManager.saveData(fs_forma_pago)
		}
		//Retenciones IIBB
		if(forms.factura_formas_de_pago.vl_ret_iibb > 0){
			//TODO Recorrer listado de retenciones
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= null
			fs_forma_pago.comp_id							= fs_comprobantes.comp_id
			fs_forma_pago.forma_pago_id						= 4 // Ret IIBB
			fs_forma_pago.forma_pago_imp					= forms.factura_formas_de_pago.vl_ret_iibb 
			databaseManager.saveData(fs_forma_pago)
		}
		//Retenciones de ganancias
		if(forms.factura_formas_de_pago.vl_ret_gan > 0){
			//TODO Recorrer listado de retenciones
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= null
			fs_forma_pago.comp_id							= fs_comprobantes.comp_id
			fs_forma_pago.forma_pago_id						= 5// Ret gan
			fs_forma_pago.forma_pago_imp					= forms.factura_formas_de_pago.vl_ret_gan 
			databaseManager.saveData(fs_forma_pago)
		}
	}
	
	
	scopes.facturacion.SetUltimoNumeroComprobante(vl_pv,vl_codigo,vl_numero)
	
	
	//Imprimir factura
	globals.imprimirReporteJasper("gpp","vent_factura_devolucion.jasper","",plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW, {
		comp_id: fs_comprobantes.comp_id,
		comp_imp_letras: globals.convertirNumeroALetras(fs_comprobantes.comp_imp_total)})
		
	//Imprimir factura detallada
	globals.imprimirReporteJasper("gpp","vent_factura_detallada.jasper","",plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW, {
		comp_id: fs_comprobantes.comp_id,
		comp_imp_letras: globals.convertirNumeroALetras(fs_comprobantes.comp_imp_total)})
		
	//Enviar mail
	if(vl_enviar_mail){
		try{
			var adjuntos = new Array()
			var cod = vl_pv+"-"+vl_numero
			var titulo   =  cod+'.pdf'
			
			adjuntos.push(plugins.mail.createBinaryAttachment(titulo,plugins.jasperPluginRMI.runReport('gpp',"vent_factura_devolucion.jasper", "", plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF, 
				{comp_id: fs_comprobantes.comp_id,
					comp_imp_letras: globals.convertirNumeroALetras(fs_comprobantes.comp_imp_total)}))) 
					
			titulo   = cod+'_detallado.pdf'
			adjuntos.push(plugins.mail.createBinaryAttachment(titulo,plugins.jasperPluginRMI.runReport('gpp',"vent_factura_detallada.jasper", "", plugins.jasperPluginRMI.OUTPUT_FORMAT.PDF, 
			{comp_id: fs_comprobantes.comp_id,
				comp_imp_letras: globals.convertirNumeroALetras(fs_comprobantes.comp_imp_total)})))	
				
			globals.enviarMail(fs_comprobantes_dat.cliente_mail,"","Factura "+cod,"Adjuntamos facturas:",adjuntos)
		}catch(Ex){
			plugins.webnotificationsToastr.error('Error al enviar mail ',"",globals.vg_toast_options)
		}
	}
		
	plugins.svyBlockUI.stop()	
	
	forms.facturacion_main.onActionLimpiar()
	
	onActionVolver()
}



/**
 * Calcula los totales de una devolucion
 * @param p_comp_id
 *
 * @properties={typeid:24,uuid:"0E6AED94-AFDE-451B-9746-ED318B1EABEB"}
 */
function calcularTotal(p_comp_id){
	/** @type {JSFoundSet<db:/gpp/vent_comprobantes>} */
	var fs_comprobantes = databaseManager.getFoundSet('gpp', 'vent_comprobantes')
	
	fs_comprobantes.loadRecords(p_comp_id)
	
	if(databaseManager.hasRecords(fs_comprobantes)){
		
		fs_comprobantes.comp_imp_alqu = 0
		
		var nRecordCount = 0
		nRecordCount = databaseManager.getFoundSetCount(fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas);
		for (var index = 1; index <= nRecordCount; index++) {
			var myHerramienta = fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.getRecord(index);
		
			fs_comprobantes.comp_imp_alqu += myHerramienta.comp_dias_alquiler * myHerramienta.comp_precio
			
		}
		
		var vl_subtotal_ = fs_comprobantes.comp_imp_alqu + fs_comprobantes.comp_imp_ventas
		fs_comprobantes.comp_imp_iva2 = vl_subtotal_ * 0.21
		fs_comprobantes.comp_imp_total = vl_subtotal_ + fs_comprobantes.comp_imp_iva2
		
		
		databaseManager.saveData(fs_comprobantes)
	}
}


/**
 * @properties={typeid:24,uuid:"28CB85D8-B43D-4317-AA81-C1278BB99F06"}
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
 * @properties={typeid:24,uuid:"EE1051A6-C3FA-4852-9E38-80CA415F5453"}
 */
function calculoTotales(){
	calculoDiasPrecio()//Alquileres
	calculoVentas()
	
	vl_subtotal = vl_total_alquiler + vl_total_ventas
	vl_total_iva = vl_subtotal * 0.21
	vl_total = vl_subtotal + vl_total_iva
	forms.factura_formas_de_pago.vl_total_factura = vl_total
}

/**
 * @properties={typeid:24,uuid:"8039BB0D-DB69-431F-A1C8-EB9EB4D1B9E6"}
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
 * @properties={typeid:24,uuid:"B6CEAC27-1902-41A6-8D62-25D7BA3FEEDF"}
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(wrongparameters)
 */
function calculoDiasPrecio(){
	
	vl_total_alquiler = 0
	
	//var vl_fecha_hoy = vl_fecha
	var vl_obra_anterior = null
	var obras_distintas = false
	var myHerramienta = null
	
	forms.factura_devolucion_nuevo_herramientas.foundset.loadAllRecords()
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.factura_devolucion_nuevo_herramientas.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		myHerramienta = forms.factura_devolucion_nuevo_herramientas.foundset.getRecord(index);
	
		//Comprobamos si tiene obras diferentes
		if(vl_obra_anterior == null) vl_obra_anterior = myHerramienta.comp_obra
		else{
			if(vl_obra_anterior != myHerramienta.comp_obra) obras_distintas = true
			vl_obra_anterior = myHerramienta.comp_obra
		}
		
		var x = vl_fecha - myHerramienta.comp_fecha_alquiler //substracting two dates returns difference in milliseconds 
		var one_day=1000*60*60*24 //ms * sec * min * hrs in a day 
	
	
		var diffExact = x / one_day //gets difference in days 
		var diffRounded = Math.ceil(diffExact ) // rounds 2.343 to 3
		
		myHerramienta.comp_dias_reales = diffRounded
		
		var vl_dias_a_cobrar = scopes.alquileres.calcularDiasParaCobrar(myHerramienta.comp_fecha_alquiler ,myHerramienta.comp_fecha_devolucion)
		if(myHerramienta.comp_fec_ult_facturacion != null)
			vl_dias_a_cobrar = scopes.alquileres.calcularDiasParaCobrar(vl_fecha,myHerramienta.comp_fecha_devolucion)
		
		myHerramienta.comp_dias_a_cobrar = vl_dias_a_cobrar
		
		myHerramienta.comp_precio_calculado = myHerramienta.comp_dias_a_cobrar * myHerramienta.comp_precio
		
		vl_total_alquiler += myHerramienta.comp_precio_calculado
	}
	
	
	if(obras_distintas){
		plugins.webnotificationsToastr.warning("Hay equipos de diferentes obras.","Atención",scopes.globals.vg_toast_options)
		vl_obra = null
	}
	else{
		if(myHerramienta != null)
			vl_obra = myHerramienta.obra_id
		else
			vl_obra = null
	}
	
}

/**
 *
 * @properties={typeid:24,uuid:"9C272F4B-7060-4516-AB6E-051F1D959EF9"}
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
 * @properties={typeid:24,uuid:"9BB9A819-4553-4B73-A3A2-BB85F77BD10F"}
 */
function onShow(firstShow, event) {
	forms.factura_formas_de_pago.vl_cheques = 0
	forms.factura_formas_de_pago.vl_efectivo = 0
	forms.factura_formas_de_pago.vl_transferencia = 0
	forms.factura_formas_de_pago.vl_ret_gan = 0
	forms.factura_formas_de_pago.vl_ret_iibb = 0
	forms.factura_formas_de_pago.vl_anticipos = 0
	forms.factura_formas_de_pago.vl_total = 0
	
	vl_enviar_mail = 1
	
	forms.factura_formas_de_pago_detalle.foundset.deleteAllRecords()
	
	globals.vg_cliente = vl_cliente
}

/**
 * @properties={typeid:24,uuid:"ECA5FE5E-4628-4689-BE0D-A0CB633F8D09"}
 */
function onDataChange() {
	vl_numero = scopes.facturacion.GetProximoNumeroComprobante(vl_pv,vl_codigo)
}
