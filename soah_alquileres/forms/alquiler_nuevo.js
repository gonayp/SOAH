/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"963EEB21-1A88-45D4-B241-59BCD17C3EB2"}
 */
var vl_advertencia = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5AB3DFAD-60E0-4281-AACD-D04DC1DA5336",variableType:4}
 */
var vl_codigo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"429E21B5-769B-40B9-8422-1C71DC1EA775",variableType:4}
 */
var vl_pv = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7397350F-A95D-4957-80E4-4854E248D3F0",variableType:8}
 */
var vl_total = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"06700BEF-1860-4F89-AA7A-486C96B31106"}
 */
var vl_observaciones = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1F78873E-60E3-4428-887B-AC14CDC22142"}
 */
var vl_orden_compra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F639D3EC-90E7-4279-9E19-98041F7113C6",variableType:4}
 */
var vl_acuerdo_precios = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C6663E1D-178F-4BFF-9BBB-6E5986612588"}
 */
var vl_transporte = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2694769B-2122-490F-823B-D7C1654C859C"}
 */
var vl_etiqueta = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0D7435DF-F5F3-4F51-89EB-14786863E04A",variableType:4}
 */
var vl_obra = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"DA8FA843-B536-4AD2-A7FE-CF5666B2AEAD",variableType:93}
 */
var vl_fecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A82F0488-27DD-4C0E-9A8A-A5DAD80D8CEA",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"87208D59-F63E-4BBD-9B90-E1C5AF65A4DD",variableType:4}
 */
var vl_numero = null;

/**
 * Perform the element default action.
 *
 *
 *
 * @properties={typeid:24,uuid:"375DCB8F-E508-40DC-8796-0F118488B177"}
 */
function onActionVolver() {
	application.showForm(forms.alquileres_main)
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"D7ED93EF-80A3-464F-9C25-058809A55D2C"}
 */
function onActionCancelar(event) {
	limpiarVariables()
	onActionVolver()

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"750273D5-8FE8-49BB-929C-2FAE3C44A45D"}
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
		plugins.webnotificationsToastr.error("No se añadio ninguna herramienta al alquiler.","",globals.vg_toast_options)
		return
	}
	
	grabar()
	
	
}

/**
 * @properties={typeid:24,uuid:"EAA6A21C-B22C-4B2F-A2D2-05BB22331965"}
 * @AllowToRunInFind
 */
function grabar(){

	var spinner = 'Cube grid'//"Wandering cubes", "Pulse", "Chasing dots", "Three bounce", "Circle", "Cube grid", "Fading circle", "Folding cube", "Rotating plane", "Double bounce", "Wave", 
	var overlayOpacity = 0.7
	plugins.svyBlockUI.overlayColor = "black"
	plugins.svyBlockUI.overlayOpacity = overlayOpacity
	plugins.svyBlockUI.spinner = spinner
	plugins.svyBlockUI.spinnerBgColor = "yellow"
	plugins.svyBlockUI.show("Cargando nuevo alquiler...")
	
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobantes>} */
	var fs_comprobantes = databaseManager.getFoundSet('gpp', 'vent_comprobantes')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_datos>} */
	var fs_comprobantes_dat = databaseManager.getFoundSet('gpp', 'vent_comprobante_datos')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} */
	var fs_comprobante_herramientas = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')
	
	/** @type {JSFoundSet<db:/gpp/herr_historicos>} */
	var fs_historico_equipos = databaseManager.getFoundSet('gpp', 'herr_historicos')
	
	/** @type {JSFoundSet<db:/gpp/vent_historicos_cliente>} */
	var fs_historicos_cliente = databaseManager.getFoundSet('gpp', 'vent_historicos_cliente')
	
	/** @type {JSFoundSet<db:/gpp/herr_equipo>} */
	var fs_equipo = databaseManager.getFoundSet('gpp', 'herr_equipo')
	
	vl_numero = scopes.facturacion.asignarUltimoNumeroComprobante(vl_pv,vl_codigo)
	
	//Guardamos el comprobante
	fs_comprobantes.newRecord()
	fs_comprobantes.company_id					= scopes.usuario.vg_company_id
	fs_comprobantes.acuerdo_precios_id			= vl_acuerdo_precios
	fs_comprobantes.cliente_id					= vl_cliente
	fs_comprobantes.comp_codigo					= vl_codigo
	fs_comprobantes.comp_estado_id				= 1
	fs_comprobantes.comp_etiqueta				= vl_etiqueta
	fs_comprobantes.comp_fecha_emision			= vl_fecha
	fs_comprobantes.comp_fec_ult_facturacion	= vl_fecha
	fs_comprobantes.comp_imp_total				= vl_total
	fs_comprobantes.comp_numero					= vl_numero
	fs_comprobantes.comp_observacion			= vl_observaciones
	fs_comprobantes.comp_orden_compra			= vl_orden_compra
	fs_comprobantes.comp_pv						= vl_pv
	fs_comprobantes.comp_transporte				= vl_transporte
	fs_comprobantes.obra_id						= vl_obra
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
	
	//Guardamos registros de herramientas a alquilar
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.alquiler_nuevo_herramientas.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myHerramienta = forms.alquiler_nuevo_herramientas.foundset.getRecord(index);
		fs_comprobante_herramientas.newRecord()
		fs_comprobante_herramientas.company_id					= scopes.usuario.vg_company_id
		fs_comprobante_herramientas.comp_comentario_entrega		= myHerramienta.comp_comentario_entrega
		fs_comprobante_herramientas.comp_id						= fs_comprobantes.comp_id
		fs_comprobante_herramientas.comp_precio					= myHerramienta.comp_precio_ajustado
		fs_comprobante_herramientas.equipo_id					= myHerramienta.equipo_id
		databaseManager.saveData(fs_comprobante_herramientas)
		
		//Cambiamos estado de equipo
		fs_equipo.loadRecords(myHerramienta.equipo_id)
		fs_equipo.equipo_estado = 7 //alquilado
		fs_equipo.comp_id		= fs_comprobantes.comp_id
		databaseManager.saveData(fs_equipo)
		
		//Guardamos historico de herramienta
		fs_historico_equipos.newRecord()
		fs_historico_equipos.company_id							= scopes.usuario.vg_company_id
		fs_historico_equipos.comp_id							= fs_comprobantes.comp_id
		fs_historico_equipos.equipo_id							= myHerramienta.equipo_id
		fs_historico_equipos.hist_fecha							= vl_fecha
		fs_historico_equipos.hist_tipo							= 1 //Alquiler
		databaseManager.saveData(fs_historico_equipos)
		
	}
	
	
	//Guardamos historico de cliente
	fs_historicos_cliente.newRecord()
	fs_historicos_cliente.company_id				= scopes.usuario.vg_company_id
	fs_historicos_cliente.cliente_id				= vl_cliente
	fs_historicos_cliente.comp_id					= fs_comprobantes.comp_id
	fs_historicos_cliente.hist_estado				= 2//cerrada
	fs_historicos_cliente.hist_fecha				= vl_fecha
	fs_historicos_cliente.hist_tipo					= 6 //Alquiler
	databaseManager.saveData(fs_historicos_cliente)
	
	
	
	//Imprimir
	globals.imprimirReporteJasper('gpp','vent_remito_alquiler.jasper' , null , plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW, {comp_id: fs_comprobantes.comp_id})
	
	plugins.svyBlockUI.stop()
	
	onActionVolver()
}

/**
 * @properties={typeid:24,uuid:"53F31CBA-F3D4-4C82-9329-867C071C91A5"}
 * @AllowToRunInFind
 */
function limpiarVariables(){
	
	elements.l_advertencia.visible = false
	vl_advertencia = null
	
	scopes.globals.vg_cliente = null
	
	vl_total = null;
	vl_observaciones = null;
	vl_orden_compra = null;
	vl_acuerdo_precios = null;
	vl_transporte = null;
	vl_etiqueta = null;
	vl_obra = null;
	vl_fecha = application.getServerTimeStamp();
	vl_cliente = null;
	
	vl_codigo = 1 //Alquiler
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
	
	forms.alquiler_nuevo_herramientas.foundset.loadAllRecords()
	forms.alquiler_nuevo_herramientas.foundset.deleteAllRecords()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"699F2692-CBED-487E-A70B-7580949F036A"}
 */
function onShow(firstShow, event) {
	application.setValueListItems('f_cliente',new Array('Item 1', 'Item 2', 'Item 3'),new Array(10000,10010,10456));
	
	//limpiarVariables()
	
	//foundset.deleteAllRecords()
	//databaseManager.saveData()
		
	//controller.focusFirstField()
	
	//valuelistClientes()
}

/**
 * @properties={typeid:24,uuid:"2CDF1B28-C5B8-4339-9CA5-DC0389A77438"}
 */
function valuelistClientes(){
	//set display values and return values (which are stored in dataprovider)
	//application.setValueListItems('my_en_types',new Array('Item 1', 'Item 2', 'Item 3'),new Array(10000,10010,10456));
	application.setValueListItems('f_cliente',new Array('Item 1', 'Item 2', 'Item 3'),new Array(10000,10010,10456));
	//do query and fill valuelist (see databaseManager for full details of queries/dataset)
	//var query = 'select c1,c2 from test_table';
	//var dataset = databaseManager.getDataSetByQuery(controller.getServerName(), query, null, 25);
	//application.setValueListItems('my_en_types',dataset);
}

/**
 *
 * @properties={typeid:24,uuid:"C3EFB6C1-0549-41B9-9B73-FF027AFC46E1"}
 * @AllowToRunInFind
 */
function onDataChangeCliente() {
	scopes.globals.vg_cliente = vl_cliente
	
	/** @type {JSFoundSet<db:/gpp/vent_clientes>} */
	var fs_vent_clientes = databaseManager.getFoundSet('gpp', 'vent_clientes')
	fs_vent_clientes.loadRecords(vl_cliente)
	if(fs_vent_clientes.getSize() > 0){
		vl_acuerdo_precios = fs_vent_clientes.acuerdo_precio_id
		
		cambiarAdvertencia(fs_vent_clientes.cliente_advertencia)
		
		
		//Actualizar pestaña de otros alquileres
		forms.alquiler_nuevo_alquileres.foundset.find()
		forms.alquiler_nuevo_alquileres.foundset.vent_comprobante_herramientas_to_vent_comprobantes.cliente_id = vl_cliente
		forms.alquiler_nuevo_alquileres.foundset.comp_devolucion	= '^=' //Los equipos alquilados tienen este campo en null
		forms.alquiler_nuevo_alquileres.foundset.vent_comprobante_herramientas_to_vent_comprobantes.comp_codigo = 1
		forms.alquiler_nuevo_alquileres.foundset.search()
		
		//Actualizar pestaña de estado de cliente
		forms.alquiler_nuevo_estado_cliente.foundset.find()
		forms.alquiler_nuevo_estado_cliente.foundset.cliente_id		= vl_cliente
		forms.alquiler_nuevo_estado_cliente.foundset.comp_codigo	= 2  //TODO Añadir comprobantes de factura
		forms.alquiler_nuevo_estado_cliente.foundset.comp_estado_id = 5 //pendiente de facturar
		forms.alquiler_nuevo_estado_cliente.foundset.search()
		forms.alquiler_nuevo_estado_cliente.inicializarTotales()
		forms.alquiler_nuevo_estado_cliente.calcularTotales()
		
		//Cambiar precios de herramientas
		cambiarPreciosHerramientas()
		
		if(fs_vent_clientes.cliente_factura_pendiente == 1){
			var PressedButton = plugins.dialogs.showQuestionDialog('SOAH', 'Este cliente tiene alguna factura pendiente de entregar. <br> ¿Se entregaron las facturas?', 'Si', 'No')
			if (PressedButton == 'Si') { 
				fs_vent_clientes.cliente_factura_pendiente = 0
				databaseManager.saveData(fs_vent_clientes)
			}
		}
	}
}


/**
 * TODO generated, please specify type and doc for the params
 * @param vl_advert
 *
 * @properties={typeid:24,uuid:"79CBB20C-18B1-40EB-8E3F-E7ABC7AF2A0E"}
 */
function cambiarAdvertencia(vl_advert){
	
	vl_advertencia = vl_advert
	
	elements.l_advertencia.visible = true
	if(vl_advertencia == null) elements.l_advertencia.visible = false
	
}

/**
 * @properties={typeid:24,uuid:"6C0A571F-CF7B-429B-90CA-8F80316C501B"}
 */
function cambiarPreciosHerramientas(){
	
	vl_total = 0
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.alquiler_nuevo_herramientas.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myHerramienta = forms.alquiler_nuevo_herramientas.foundset.getRecord(index);
		if(vl_acuerdo_precios == null){
			myHerramienta.comp_precio_ajustado = myHerramienta.comp_precio
		}
		else{
			myHerramienta.comp_precio_ajustado = scopes.facturacion.calcularAcuerdoPrecios(vl_acuerdo_precios,myHerramienta.comp_precio)
		}
		vl_total += myHerramienta.comp_precio_ajustado
	}
	
}

/**
 *
 * @properties={typeid:24,uuid:"383F7102-EBD5-48C6-A5B6-1D87F4F81682"}
 */
function onDataChangeAcuerdoPrecios() {
	cambiarPreciosHerramientas()
}

/**
 *
 * @properties={typeid:24,uuid:"B89F660A-382B-4DCC-B05B-A150464AE05B"}
 * @SuppressWarnings(wrongparameters)
 */
function onActionNuevaObra() {
	if(vl_cliente == null){
		plugins.webnotificationsToastr.warning("Primero hay que seleccionar un cliente.","",globals.vg_toast_options)
		return
	}
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.alquiler_nuevo_add_obra );

}



/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"7CB5F233-D7AB-4917-84C4-51C834418B2A"}
 */
function onActionEditarCliente(event) {
	if(vl_cliente != null){
		forms['clientes_ver'].vl_cliente_id = vl_cliente
		forms['clientes_ver'].vl_form_padre = 'alquiler_nuevo'
		var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
			win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
			win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
			win.resizable = false
			win.title= '';
			win.show( forms['clientes_ver'] );
	}

}
