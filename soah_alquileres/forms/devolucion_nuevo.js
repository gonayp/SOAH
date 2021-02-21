/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AF64042A-EDA0-417D-8A8F-7F7A3DB19C44",variableType:4}
 */
var vl_comp_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EB0A5AB6-9368-4C26-9D18-F0EDA0577E2E",variableType:4}
 */
var vl_obra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"13044BD7-F748-4CC0-8984-AB65938BA515",variableType:8}
 */
var vl_subtotal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C4D00E5C-1579-43EB-A55B-72F65B7000CE",variableType:8}
 */
var vl_total_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B3864F87-D521-453C-A502-5CF67B6832D6",variableType:8}
 */
var vl_total_ventas = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"093B2DD3-FC37-4104-9D68-608430037469",variableType:8}
 */
var vl_total_alquiler = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CE401E91-9E2C-44F7-B6CB-DAA3289976FF",variableType:4}
 */
var vl_codigo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9F56AB48-8D5C-4CDB-A2BA-864FCBFDD63D",variableType:4}
 */
var vl_pv = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"00313345-9B11-4826-82C0-202EC7277021",variableType:8}
 */
var vl_total = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"241D02BE-D5B1-410D-92C8-C49E996527A4"}
 */
var vl_observaciones = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"11974409-5BBC-4C76-B324-2C40A12CFF41",variableType:93}
 */
var vl_fecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8C05E59E-208D-44FF-85F5-C7CD05D4B833",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7D312F9D-5B9B-4FD0-B4FD-EB2B874BCD0F",variableType:4}
 */
var vl_numero = null;

/**
 * Perform the element default action.
 *
 *
 *
 * @properties={typeid:24,uuid:"C4BEE51F-F4CB-4FB3-87A0-785453EF2CCD"}
 */
function onActionVolver() {
	application.showForm(forms.devoluciones_main)
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"7BB24B91-23AD-416E-A62D-15369E059CCC"}
 */
function onActionCancelar(event) {
	limpiarVariables()
	onActionVolver()

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"97FBA83F-34F7-4755-B81D-A81DD891F863"}
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
	if(forms.alquiler_nuevo_herramientas.foundset.aggr_cantidad == 0){
		plugins.webnotificationsToastr.error("No se añadio ninguna herramienta a la devolución.","",globals.vg_toast_options)
		return
	}
	
	//Revisar si hay productos que requieren numero de serie
	var nCount = 0
	nCount = databaseManager.getFoundSetCount(forms.devolucion_nuevo_ventas.foundset);
	for (var i = 1; i <= nCount; i++) {
		var myProducto = forms.devolucion_nuevo_ventas.foundset.getRecord(i);
		if(myProducto.producto_codigo != null && myProducto.producto_num_serie == null){
			plugins.webnotificationsToastr.error("Hay productos con numero de serie pendiente de digitar.","",globals.vg_toast_options)
			return
		}
	}
	
	
	grabarDevolucion(5)
	
	forms.devoluciones_main.filtrar()
	
	onActionVolver()
	
}

/**
 * @properties={typeid:24,uuid:"D59C7C48-98CC-4689-A195-072558F1357F"}
 * @SuppressWarnings(wrongparameters)
 */
function onActionGuardarYFacturar() {
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
	if(forms.alquiler_nuevo_herramientas.foundset.aggr_cantidad == 0){
		plugins.webnotificationsToastr.error("No se añadio ninguna herramienta a la devolución.","",globals.vg_toast_options)
		return
	}
	
	grabarDevolucion(5)
	
	forms['facturacion_inicio'].vl_form_padre = controller.getName()
	forms['facturacion_inicio'].vl_cliente = vl_cliente
	application.showForm('facturacion_inicio')
}

/**
 * @properties={typeid:24,uuid:"D7AF5CCF-CBC5-4B28-867C-5E15826DF03F"}
 * @AllowToRunInFind
 */
function grabarDevolucion(p_tipo){

	var spinner = 'Cube grid'//"Wandering cubes", "Pulse", "Chasing dots", "Three bounce", "Circle", "Cube grid", "Fading circle", "Folding cube", "Rotating plane", "Double bounce", "Wave", 
	var overlayOpacity = 0.7
	plugins.svyBlockUI.overlayColor = "black"
	plugins.svyBlockUI.overlayOpacity = overlayOpacity
	plugins.svyBlockUI.spinner = spinner
	plugins.svyBlockUI.spinnerBgColor = "yellow"
	plugins.svyBlockUI.show("Cargando devolución...")
	
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobantes>} */
	var fs_comprobantes = databaseManager.getFoundSet('gpp', 'vent_comprobantes')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobantes>} */
	var fs_comprobantes_alq = databaseManager.getFoundSet('gpp', 'vent_comprobantes')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_datos>} */
	var fs_comprobantes_dat = databaseManager.getFoundSet('gpp', 'vent_comprobante_datos')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} */
	var fs_comprobante_herramientas = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} */
	var fs_comprobante_herramientas_alq = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')
	
	/** @type {JSFoundSet<db:/gpp/herr_historicos>} */
	var fs_historico_equipos = databaseManager.getFoundSet('gpp', 'herr_historicos')
	
	/** @type {JSFoundSet<db:/gpp/vent_historicos_cliente>} */
	var fs_historicos_cliente = databaseManager.getFoundSet('gpp', 'vent_historicos_cliente')
	
	/** @type {JSFoundSet<db:/gpp/herr_equipo>} */
	var fs_equipo = databaseManager.getFoundSet('gpp', 'herr_equipo')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_productos>} */
	var fs_comprobante_productos = databaseManager.getFoundSet('gpp', 'vent_comprobante_productos')
	
	
	
	vl_numero = scopes.facturacion.asignarUltimoNumeroComprobante(vl_pv,vl_codigo)
	
	//Guardamos el comprobante
	fs_comprobantes.newRecord()
	fs_comprobantes.company_id					= scopes.usuario.vg_company_id
	fs_comprobantes.cliente_id					= vl_cliente
	fs_comprobantes.comp_codigo					= vl_codigo
	fs_comprobantes.comp_estado_id				= p_tipo
	fs_comprobantes.comp_fecha_emision			= vl_fecha
	fs_comprobantes.comp_imp_total				= vl_total
	fs_comprobantes.comp_numero					= vl_numero
	fs_comprobantes.comp_observacion			= vl_observaciones
	fs_comprobantes.comp_pv						= vl_pv
	fs_comprobantes.comp_imp_alqu				= vl_total_alquiler
	fs_comprobantes.comp_imp_ventas				= vl_total_ventas
	fs_comprobantes.comp_imp_iva2				= vl_total_iva
	fs_comprobantes.comp_imp_total				= vl_total
	fs_comprobantes.obra_id						= vl_obra 
	databaseManager.saveData(fs_comprobantes)
	
	vl_comp_id = fs_comprobantes.comp_id
	
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
	databaseManager.saveData(fs_comprobantes_dat)
	
	//Guardamos registros de herramientas a devolver
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.devolucion_nuevo_herramientas.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myHerramienta = forms.alquiler_nuevo_herramientas.foundset.getRecord(index);
		fs_comprobante_herramientas.newRecord()
		fs_comprobante_herramientas.company_id					= scopes.usuario.vg_company_id
		fs_comprobante_herramientas.comp_comentario_entrega		= myHerramienta.comp_comentario_entrega
		fs_comprobante_herramientas.comp_id						= fs_comprobantes.comp_id
		fs_comprobante_herramientas.comp_precio					= myHerramienta.comp_precio_ajustado
		fs_comprobante_herramientas.equipo_id					= myHerramienta.equipo_id
		fs_comprobante_herramientas.comp_id_padre				= myHerramienta.comp_id
		fs_comprobante_herramientas.comp_dias_alquiler			= myHerramienta.comp_dias_a_cobrar
		fs_comprobante_herramientas.comp_dias_facturados		= myHerramienta.comp_dias_facturados
		fs_comprobante_herramientas.comp_comentario_entrega		= myHerramienta.comp_comentario_entrega
		fs_comprobante_herramientas.comp_comentario_devol		= myHerramienta.comp_comentario_devolucion
		databaseManager.saveData(fs_comprobante_herramientas)
		
		//Cambiamos estado de equipo
		fs_equipo.loadRecords(myHerramienta.equipo_id)
		fs_equipo.equipo_estado = 1 //disponible
		fs_equipo.comp_id		= null
		databaseManager.saveData(fs_equipo)
		
		//Guardamos historico de herramienta
		fs_historico_equipos.newRecord()
		fs_historico_equipos.company_id							= scopes.usuario.vg_company_id
		fs_historico_equipos.comp_id							= fs_comprobantes.comp_id
		fs_historico_equipos.equipo_id							= myHerramienta.equipo_id
		fs_historico_equipos.hist_fecha							= vl_fecha
		fs_historico_equipos.hist_tipo							= 6 //Disponible
		databaseManager.saveData(fs_historico_equipos)
		
		//Si esta dañada la ponemos pendiente de reparacion
		if(myHerramienta.calc_seleccionado == 1){
		//Grabar reparacion
			/** @type {JSFoundSet<db:/gpp/rep_reparaciones>} */
			var fs_rep_reparaciones = databaseManager.getFoundSet('gpp', 'rep_reparaciones')
			fs_rep_reparaciones.newRecord()
			fs_rep_reparaciones.company_id							= scopes.usuario.vg_company_id
			fs_rep_reparaciones.equipo_id							= myHerramienta.equipo_id
			fs_rep_reparaciones.reparacion_estado					= 0 //Pendiente
			fs_rep_reparaciones.foundset.reparacion_fecha_inicio	= vl_fecha
			fs_rep_reparaciones.foundset.reparacion_num_pedido		= null
			fs_rep_reparaciones.taller_id							= null
			fs_rep_reparaciones.devolucion_id						= fs_comprobantes.comp_id
			databaseManager.saveData(fs_rep_reparaciones)
			
			//Cambiar estado de equipo
			fs_equipo.loadRecords(myHerramienta.equipo_id)
			fs_equipo.equipo_estado 	= 4//en reparacion
			fs_equipo.reparacion_id		= fs_rep_reparaciones.reparacion_id
			databaseManager.saveData(fs_equipo)
			
			fs_historico_equipos.newRecord()
			fs_historico_equipos.company_id			= scopes.usuario.vg_company_id
			fs_historico_equipos.equipo_id			= myHerramienta.equipo_id
			fs_historico_equipos.hist_fecha			= application.getServerTimeStamp()
			fs_historico_equipos.hist_observacion	= "Cambio de estado desde una devolución al modulo de reparaciones"
			fs_historico_equipos.reparacion_id		= fs_rep_reparaciones.reparacion_id
			fs_historico_equipos.hist_tipo			= 3
			databaseManager.saveData(fs_historico_equipos)
		}
		
		//Marcamos herramienta con el id de la devolucion
		fs_comprobante_herramientas_alq.find()
		fs_comprobante_herramientas_alq.comp_id = myHerramienta.comp_id
		fs_comprobante_herramientas_alq.equipo_id = myHerramienta.equipo_id
		fs_comprobante_herramientas_alq.search()
		if(fs_comprobante_herramientas_alq.getSize()>0){
			fs_comprobante_herramientas_alq.comp_devolucion = fs_comprobantes.comp_id
			databaseManager.saveData(fs_comprobante_herramientas_alq)
		}
		
		//Cambiamos estado de comprobante de alquiler si corresponde
		fs_comprobantes_alq.find()
		fs_comprobantes_alq.comp_id = myHerramienta.comp_id
		fs_comprobantes_alq.search()
		if(fs_comprobantes_alq.getSize()>0){
			var cantidad_devueltos = 0
			var n = 0
			n = databaseManager.getFoundSetCount(fs_comprobantes_alq.vent_comprobantes_to_vent_comprobante_herramientas);
			for (var j = 1; j <= n; j++) {
				var myRecord = fs_comprobantes_alq.vent_comprobantes_to_vent_comprobante_herramientas.getRecord(j);
				if(myRecord.comp_devolucion != null){
					cantidad_devueltos++
				}
			}
			if(cantidad_devueltos == n){//Si todas las herramientas fueron devueltas
				fs_comprobantes_alq.comp_estado_id = 3 //cerrada
			}
			else{
				fs_comprobantes_alq.comp_estado_id = 2 //parcial
			}
		}
		
	}
	
	
	//Guardamos historico de cliente
	fs_historicos_cliente.newRecord()
	fs_historicos_cliente.company_id				= scopes.usuario.vg_company_id
	fs_historicos_cliente.cliente_id				= vl_cliente
	fs_historicos_cliente.comp_id					= fs_comprobantes.comp_id
	fs_historicos_cliente.hist_estado				= 2//cerrado
	fs_historicos_cliente.hist_fecha				= vl_fecha
	fs_historicos_cliente.hist_tipo					= 7 //Devolución
	databaseManager.saveData(fs_historicos_cliente)
	
	//Guardar productos
	var nCount = 0
	nCount = databaseManager.getFoundSetCount(forms.devolucion_nuevo_ventas.foundset);
	for (var i = 1; i <= nCount; i++) {
		var myProducto = forms.devolucion_nuevo_ventas.foundset.getRecord(i);
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
	
	//IMPRIMIR
	globals.imprimirReporteJasper("gpp","vent_remito_devolucion.jasper","",plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW, {comp_id: fs_comprobantes.comp_id})
	
	plugins.svyBlockUI.stop()
	
	
}

/**
 * @properties={typeid:24,uuid:"661EF2DD-15BA-478B-A3BD-DFEE6875F47C"}
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
	
	vl_codigo = 2 //Devolucion
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
		else{
			vl_numero = null;
		}
	}
	catch(e){
		vl_pv = null
		vl_numero = null;
	}
	
	forms.devolucion_nuevo_herramientas.foundset.loadAllRecords()
	forms.devolucion_nuevo_herramientas.foundset.deleteAllRecords()
	
	forms.devolucion_nuevo_ventas.foundset.loadAllRecords()
	forms.devolucion_nuevo_ventas.foundset.deleteAllRecords()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2ED34F5D-7669-436D-A53F-A9358178DB98"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	

	
	inicializarCalendarios()
	
	limpiarVariables()
	
	
	//foundset.deleteAllRecords()
	//databaseManager.saveData()
		
	controller.focusFirstField()
}

/**
 *
 * @properties={typeid:24,uuid:"D043C772-9673-4E4F-97A0-57ACA5E2A73B"}
 * @AllowToRunInFind
 */
function onDataChangeCliente() {
	scopes.globals.vg_cliente = vl_cliente
	
	/** @type {JSFoundSet<db:/gpp/vent_clientes>} */
	var fs_vent_clientes = databaseManager.getFoundSet('gpp', 'vent_clientes')
	fs_vent_clientes.loadRecords(vl_cliente)
	if(fs_vent_clientes.getSize() > 0){
	
		
		//Actualizar pestaña de otros alquileres
		forms.devolucion_nuevo_alquileres.foundset.find()
		forms.devolucion_nuevo_alquileres.foundset.vent_comprobante_herramientas_to_vent_comprobantes.cliente_id = vl_cliente
		forms.devolucion_nuevo_alquileres.foundset.comp_devolucion	= '^=' //Los equipos alquilados tienen este campo en null
		forms.devolucion_nuevo_alquileres.foundset.vent_comprobante_herramientas_to_vent_comprobantes.comp_codigo = 1
		forms.devolucion_nuevo_alquileres.foundset.search()
		
		//Actualizar pestaña de estado de cliente
		forms.devolucion_nuevo_estado_cliente.foundset.find()
		forms.devolucion_nuevo_estado_cliente.foundset.cliente_id		= vl_cliente
		forms.devolucion_nuevo_estado_cliente.foundset.comp_codigo		= 2  //TODO Añadir comprobantes de factura
		forms.devolucion_nuevo_estado_cliente.foundset.comp_estado_id	= 5 //pendiente de facturar
		forms.devolucion_nuevo_estado_cliente.foundset.search()
		forms.devolucion_nuevo_estado_cliente.inicializarTotales()
		forms.devolucion_nuevo_estado_cliente.calcularTotales()
		
		
		if(fs_vent_clientes.cliente_factura_pendiente == 1){
			var PressedButton = plugins.dialogs.showQuestionDialog('SOAH', 'Este cliente tiene alguna factura pendiente de entregar. <br> ¿Se entregaron las facturas?', 'Si', 'No')
			if (PressedButton == 'Si') { 
				fs_vent_clientes.cliente_factura_pendiente = 0
				databaseManager.saveData(fs_vent_clientes)
			}
		}
		//controller.focusField('f_fecha',true)
		
	}
}

/**
 * @properties={typeid:24,uuid:"F0F74531-10E3-4426-BECE-82CDBF85BC39"}
 */
function inicializarCalendarios(){
	
	var fecha_hoy = application.getServerTimeStamp()
	var fecha_mes_ant = new Date(fecha_hoy.getFullYear(), fecha_hoy.getMonth()-1, fecha_hoy.getDate())

		
	/** @type {svy-fullcalendar.FullCalendarOptions} */
	var options = {
		fixedWeekCount: false,
			defaultDate: fecha_mes_ant ,
			monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
			monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
			dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
		    dayNamesShort: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],
			header: {
			    left:   'title',
			    center: '',
			    right:  ''
			}
	}
	elements.fullcalendar_anterior.fullCalendar(options);
	
	
	
	options = {
		fixedWeekCount: false,
		monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
		monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
		dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
	    dayNamesShort: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],
		header: {
		    left:   'title',
		    center: '',
		    right:  ''
		}
	}
	elements.fullcalendar.fullCalendar(options);
}



/**
 * @properties={typeid:24,uuid:"38891EC1-5B29-4B6D-B015-5FFCA8DA6D22"}
 */
function calculoTotales(){
	
	vl_subtotal = 0
	vl_total = 0
	
	calculoDiasPrecio()//Alquileres
	calculoVentas()
	
	vl_subtotal = vl_total_alquiler + vl_total_ventas
	vl_total_iva = vl_subtotal * 0.21
	vl_total = vl_subtotal + vl_total_iva
}


/**
 * @properties={typeid:24,uuid:"AD522F21-3463-4D8A-92CE-B37D6B3113EC"}
 */
function calculoTotalesSinRecalcularDias(){
	
	vl_subtotal = 0
	vl_total = 0
	
	calculoAlquileres()//Alquileres sin calcular dias
	calculoVentas()
	
	vl_subtotal = vl_total_alquiler + vl_total_ventas
	vl_total_iva = vl_subtotal * 0.21
	vl_total = vl_subtotal + vl_total_iva
}

/**
 * @properties={typeid:24,uuid:"E0F1E2D1-40E2-40F5-94A5-32BD74A855EE"}
 */
function calculoVentas(){
	
	
	vl_total_ventas = 0	
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.devolucion_nuevo_ventas.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myProducto= forms.devolucion_nuevo_ventas.foundset.getRecord(index);
		vl_total_ventas += myProducto.producto_total
	}
	
}

/**
 * @properties={typeid:24,uuid:"DF50E8CB-C402-413F-9D7C-A88C13183A43"}
 * @SuppressWarnings(wrongparameters)
 * @SuppressWarnings(wrongparameters)
 */
function calculoDiasPrecio(){
	
	vl_total_alquiler = 0
	
	//var vl_fecha_hoy = vl_fecha
	var vl_obra_anterior = null
	var obras_distintas = false
	
	forms.devolucion_nuevo_herramientas.foundset.loadAllRecords()
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.devolucion_nuevo_herramientas.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myHerramienta = forms.devolucion_nuevo_herramientas.foundset.getRecord(index);
	
		//Comprobamos si tiene obras diferentes
		if(vl_obra_anterior == null) vl_obra_anterior = myHerramienta.obra_id
		else{
			if(vl_obra_anterior != myHerramienta.obra_id) obras_distintas = true
			vl_obra_anterior = myHerramienta.obra_id
		}
		
		var vl_dias_reales = scopes.alquileres.calcularDiasParaCobrar(myHerramienta.comp_fecha_alquiler,vl_fecha)
		if(myHerramienta.comp_fec_ult_facturacion != null)
			vl_dias_reales = scopes.alquileres.calcularDiasParaCobrar(myHerramienta.comp_fec_ult_facturacion,vl_fecha)
		
		var x = vl_fecha - myHerramienta.comp_fecha_alquiler//substracting two dates returns difference in milliseconds 
		var one_day=1000*60*60*24 //ms * sec * min * hrs in a day 
	
		var diffExact = x / one_day //gets difference in days 
		var diffRounded = Math.ceil(diffExact ) // rounds 2.343 to 3
		
		myHerramienta.comp_dias_reales = diffRounded
		
		myHerramienta.comp_dias_a_cobrar = vl_dias_reales 
		
		myHerramienta.comp_precio_calculado = myHerramienta.comp_dias_a_cobrar  * myHerramienta.comp_precio_ajustado
		
		vl_total_alquiler += myHerramienta.comp_precio_calculado
	}
	
	
	if(obras_distintas){
		plugins.webnotificationsToastr.warning("Hay equipos de diferentes obras.","Atención",scopes.globals.vg_toast_options)
		vl_obra = null
	}
	else{
		vl_obra = vl_obra_anterior
	}
	
}

/**
 * @properties={typeid:24,uuid:"BF933EA5-968B-43F1-8BE5-1BD421DE2398"}
 * @SuppressWarnings(wrongparameters)
 */
function calculoAlquileres(){
	
	vl_total_alquiler = 0
	
	//var vl_fecha_hoy = vl_fecha
	var vl_obra_anterior = null
	var obras_distintas = false
	
	forms.devolucion_nuevo_herramientas.foundset.loadAllRecords()
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.devolucion_nuevo_herramientas.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myHerramienta = forms.devolucion_nuevo_herramientas.foundset.getRecord(index);
	
		//Comprobamos si tiene obras diferentes
		if(vl_obra_anterior == null) vl_obra_anterior = myHerramienta.obra_id
		else{
			if(vl_obra_anterior != myHerramienta.obra_id) obras_distintas = true
			vl_obra_anterior = myHerramienta.obra_id
		}
		
		
		vl_total_alquiler += myHerramienta.comp_precio_calculado
	}
	
	
	if(obras_distintas){
		plugins.webnotificationsToastr.warning("Hay equipos de diferentes obras.","Atención",scopes.globals.vg_toast_options)
		vl_obra = null
	}
	else{
		vl_obra = vl_obra_anterior
	}
	
}


/**
 *
 * @properties={typeid:24,uuid:"086E0FE2-CBC7-473C-A30C-BDA4EDD19B81"}
 */
function onDataChangeFecha() {
	calculoTotales()
}



/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F28418DF-802E-4BE7-9607-8B7D0457819E"}
 */
function onFocusGained(event) {
	globals.ventanaPickFecha(controller.getName(),vl_fecha)
}
