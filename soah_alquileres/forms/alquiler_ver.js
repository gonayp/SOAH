/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AB1A90E3-035E-4602-9E68-EAFF30D28823"}
 */
var vl_advertencia = null;



/**
 * Perform the element default action.
 *
 *
 *
 * @properties={typeid:24,uuid:"EF96BA3F-3136-415E-9876-12C2152C8186"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.alquileres_main)
}



/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C63E2491-81A0-421A-8F31-D7DC6189D8E1"}
 * @SuppressWarnings(wrongparameters)
 */
function onActionGuardar(event) {

	if (comp_numero == null) {
		plugins.webnotificationsToastr.error(globals.mensajeError(101), "", globals.vg_toast_options)
		return
	}
	
	if(cliente_id == null){
		plugins.webnotificationsToastr.error("Falta seleccionar el cliente.","",globals.vg_toast_options)
		controller.focusField("f_cliente",true)
		return
	}
	if (comp_fecha_emision == null) {
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
 * @properties={typeid:24,uuid:"291A1B9F-45AB-457E-933D-475BA9BB265A"}
 */
function grabar(){
	databaseManager.saveData()
	application.showForm(forms.alquileres_main)
}


/**
 *
 * @properties={typeid:24,uuid:"76EC6B92-7F9C-43B5-88C8-1AD161D96FAC"}
 * @AllowToRunInFind
 */
function onDataChangeCliente() {
	scopes.globals.vg_cliente = cliente_id
	
	/** @type {JSFoundSet<db:/gpp/vent_clientes>} */
	var fs_vent_clientes = databaseManager.getFoundSet('gpp', 'vent_clientes')
	fs_vent_clientes.loadRecords(cliente_id)
	if(fs_vent_clientes.getSize() > 0){
		acuerdo_precios_id = fs_vent_clientes.acuerdo_precio_id
		vl_advertencia = fs_vent_clientes.cliente_advertencia
		
		
		//Actualizar pestaña de otros alquileres
		forms.alquiler_ver_alquileres.foundset.find()
		forms.alquiler_ver_alquileres.foundset.vent_comprobante_herramientas_to_vent_comprobantes.cliente_id = cliente_id
		forms.alquiler_ver_alquileres.foundset.comp_devolucion	= null //Los equipos alquilados tienen este campo en null
		forms.alquiler_ver_alquileres.foundset.search()
		
		//Actualizar pestaña de estado de cliente
		forms.alquiler_nuevo_estado_cliente.foundset.find()
		forms.alquiler_nuevo_estado_cliente.foundset.cliente_id		= cliente_id
		forms.alquiler_nuevo_estado_cliente.foundset.comp_codigo	= 1  //TODO Añadir comprobantes de factura
		forms.alquiler_nuevo_estado_cliente.foundset.search()
		forms.alquiler_nuevo_estado_cliente.inicializarTotales()
		
		//Cambiar precios de herramientas
		//cambiarPreciosHerramientas()
	}
}





/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"26434ECD-B4F7-4A77-9BC9-49A8C673A66F"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	
	
	elements.btn_guardar.enabled = true
	if (scopes.usuario.vg_permiso_modificar == 0) {
		elements.btn_guardar.enabled = false
	}
	
	elements.btn_imprimir.enabled = true
	if (scopes.usuario.vg_permiso_imprimir == 0) {
		elements.btn_imprimir.enabled = false
	}
	
	
	//Actualizar pestaña de otros alquileres
	forms.alquiler_ver_alquileres.foundset.find()
	forms.alquiler_ver_alquileres.foundset.vent_comprobante_herramientas_to_vent_comprobantes.cliente_id = cliente_id
	forms.alquiler_ver_alquileres.foundset.comp_devolucion	= null //Los equipos alquilados tienen este campo en null
	forms.alquiler_ver_alquileres.foundset.search()
	
	//Actualizar pestaña de estado de cliente
	forms.alquiler_ver_estado_cliente.foundset.find()
	forms.alquiler_ver_estado_cliente.foundset.cliente_id		= cliente_id
	forms.alquiler_ver_estado_cliente.foundset.comp_codigo	= 2  //TODO Añadir comprobantes de factura
	forms.alquiler_ver_estado_cliente.foundset.comp_estado_id	= 5 //pendiente de facturar
	forms.alquiler_ver_estado_cliente.foundset.search()
	forms.alquiler_ver_estado_cliente.inicializarTotales()
}

/**
 * @properties={typeid:24,uuid:"B0406D2C-EC81-49DB-B751-1FCB6EB7CCB4"}
 * @AllowToRunInFind
 */
function onActionImprimir() {
	
	
	globals.imprimirReporteJasper('gpp','vent_remito_alquiler.jasper' , null , plugins.jasperPluginRMI.OUTPUT_FORMAT.PRINT, {comp_id: foundset.comp_id})
}
