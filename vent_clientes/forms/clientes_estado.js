
/**
 * @properties={typeid:24,uuid:"053FCE4D-8CA5-4A44-8B42-0B6096985028"}
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
 * @properties={typeid:24,uuid:"5EAA3B2C-D706-4416-BF76-B6D3D3264FD7"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	//Actualizar pestaña de equipos alquilados
	forms.clientes_estado_alquileres.foundset.find()
	forms.clientes_estado_alquileres.foundset.vent_comprobante_herramientas_to_vent_comprobantes.cliente_id 	= cliente_id
	forms.clientes_estado_alquileres.foundset.comp_devolucion													= '^=' //Los equipos alquilados tienen este campo en null
	forms.clientes_estado_alquileres.foundset.vent_comprobante_herramientas_to_vent_comprobantes.comp_codigo 	= 1
	forms.clientes_estado_alquileres.foundset.search()
	
	//Actualizar pestaña de estado de cliente
	forms.clientes_estado_facturacion.foundset.find()
	forms.clientes_estado_facturacion.foundset.cliente_id		= cliente_id
	forms.clientes_estado_facturacion.foundset.comp_codigo		= 2  //TODO Añadir comprobantes de factura
	forms.clientes_estado_facturacion.foundset.comp_estado_id 	= 5 //pendiente de facturar
	forms.clientes_estado_facturacion.foundset.search()
	forms.clientes_estado_facturacion.inicializarTotales()
	forms.clientes_estado_facturacion.calcularTotales()
	
	forms.clientes_autorizados_nuevo.vl_cliente = cliente_id
	forms.clientes_hist_nuevo.vl_cliente = cliente_id
	forms.clientes_obras_nuevo .vl_cliente = cliente_id
}
