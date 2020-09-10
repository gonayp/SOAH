/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9CC58786-6BB3-4765-BDD6-3C6FD0CC0EEC"}
 */
var vl_form_padre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E489732A-FF58-40BB-B343-ED9F653E63E3",variableType:8}
 */
var vl_subtotal = null;


/**
 * Perform the element default action.
 *
 *
 *
 * @properties={typeid:24,uuid:"070C8A78-EB23-4CEA-8321-CEE350A6FB30"}
 */
function onActionVolver() {
	
	if(vl_form_padre == null)
		application.showForm(forms.devoluciones_main)
	else
		application.showForm(vl_form_padre)
	
	vl_form_padre = null
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"5804CD05-CC5F-4FAE-94E7-9A3CEA5829F0"}
 */
function onActionCancelar(event) {
	databaseManager.revertEditedRecords()
	
	onActionVolver()

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"5DFB2773-EBD4-4C35-ACFA-008CBB837043"}
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
	if(vent_comprobantes_to_vent_comprobante_herramientas.aggr_cantidad == 0){
		plugins.webnotificationsToastr.error("No se añadio ninguna herramienta a la devolución.","",globals.vg_toast_options)
		return
	}
	
	databaseManager.saveData()
	
	application.showForm(forms.devoluciones_main)
	
}



/**
 * @properties={typeid:24,uuid:"135C3401-9CAD-4A3C-9E1D-21971152D62A"}
 * @AllowToRunInFind
 */
function limpiarVariables(){

	scopes.globals.vg_tipo_comprobante = 2
	scopes.globals.vg_cliente = cliente_id
	
	vl_subtotal = 0
	
	//calculoTotales()
	calculoTotalesSinModificar()
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9D2C8F23-7650-400B-8925-FFA2FE73E024"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	
	inicializarCalendarios()
	
	limpiarVariables()
	
	
	//PErmisos
	elements.f_fecha.enabled = true
	elements.btn_guardar.enabled = true
	forms.devolucion_ver_ventas.elements.btn_nuevo_producto.enabled = true
	forms.devolucion_ver_ventas.elements.btn_nuevo_equipo.enabled = true
	forms.devolucion_ver_herramientas.elements.btn_nuevo_equipoc.enabled = true
	forms.devolucion_ver_herramientas.elements.btn_nuevo_equipo.enabled = true
	
	if(comp_estado_id == 4){//cerrado
		elements.f_fecha.enabled = false
		forms.devolucion_ver_ventas.elements.btn_nuevo_producto.enabled = false
		forms.devolucion_ver_herramientas.elements.btn_nuevo_equipoc.enabled = false
		forms.devolucion_ver_ventas.elements.btn_nuevo_equipo.enabled = false
		forms.devolucion_ver_herramientas.elements.btn_nuevo_equipo.enabled = false
	}

	
	if(scopes.usuario.vg_permiso_modificar == 0 ){
		elements.btn_guardar.enabled = false
		forms.devolucion_ver_ventas.elements.btn_nuevo_producto.enabled = false
		forms.devolucion_ver_herramientas.elements.btn_nuevo_equipoc.enabled = false
		forms.devolucion_ver_ventas.elements.btn_nuevo_equipo.enabled = false
		forms.devolucion_ver_herramientas.elements.btn_nuevo_equipo.enabled = false
	}
		
	
	//Actualizar pestaña de otros alquileres
	/*forms.devolucion_nuevo_alquileres.foundset.find()
	forms.devolucion_nuevo_alquileres.foundset.vent_comprobante_herramientas_to_vent_comprobantes.cliente_id = cliente_id
	forms.devolucion_nuevo_alquileres.foundset.comp_devolucion	= '^=' //Los equipos alquilados tienen este campo en null
	forms.devolucion_nuevo_alquileres.foundset.vent_comprobante_herramientas_to_vent_comprobantes.comp_codigo = 1
	forms.devolucion_nuevo_alquileres.foundset.search()*/
	
	//Actualizar pestaña de estado de cliente
	/*forms.devolucion_nuevo_estado_cliente.foundset.find()
	forms.devolucion_nuevo_estado_cliente.foundset.cliente_id		= cliente_id
	forms.devolucion_nuevo_estado_cliente.foundset.comp_codigo		= 2  //TODO Añadir comprobantes de factura
	forms.devolucion_nuevo_estado_cliente.foundset.comp_estado_id	= 5 //pendiente de facturar
	forms.devolucion_nuevo_estado_cliente.foundset.search()
	forms.devolucion_nuevo_estado_cliente.inicializarTotales()
	forms.devolucion_nuevo_estado_cliente.calcularTotales()*/
	
	
}


/**
 * @properties={typeid:24,uuid:"682B6C87-533D-46E9-834E-4B8C0A09C8EA"}
 */
function inicializarCalendarios(){
	
	var fecha_hoy = comp_fecha_emision
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
 * @properties={typeid:24,uuid:"F28597CC-4E82-427C-A400-464F10EAD400"}
 */
function calculoTotales(){
	calculoDiasPrecio()//Alquileres
	calculoVentas()
	
	vl_subtotal = comp_imp_alqu + comp_imp_ventas
	comp_imp_iva2 = vl_subtotal * 0.21
	comp_imp_total = vl_subtotal + comp_imp_iva2
}

/**
 * @properties={typeid:24,uuid:"CC9F5109-7E75-4B7B-8E64-EBBBCACDE965"}
 */
function calculoTotalesSinModificar(){
	calculoDiasPrecioSinModificar()//Alquileres
	calculoVentasSinModificar()//Ventas
	
	vl_subtotal = comp_imp_alqu + comp_imp_ventas
	//comp_imp_iva2 = vl_subtotal * 0.21
	//comp_imp_total = vl_subtotal + comp_imp_iva2
}

/**
 * @properties={typeid:24,uuid:"9BD725AB-2764-40B4-9E26-D725A21952B1"}
 */
function calculoVentas(){
	
	comp_imp_ventas = 0	
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.devolucion_ver_ventas.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myProducto= forms.devolucion_ver_ventas.foundset.getRecord(index);
		myProducto.calc_total = myProducto.comp_cantidad * myProducto.comp_precio
		comp_imp_ventas += myProducto.calc_total
	}
	
}

/**
 * @properties={typeid:24,uuid:"B805953D-4157-4001-9A1D-DADAA970431E"}
 */
function calculoVentasSinModificar(){
	
	comp_imp_ventas = 0	
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset.vent_comprobantes_to_vent_comprobante_productos);
	for (var index = 1; index <= nRecordCount; index++) {
		var myProducto= foundset.vent_comprobantes_to_vent_comprobante_productos.getRecord(index);
		myProducto.calc_total = myProducto.comp_cantidad * myProducto.comp_precio
		//comp_imp_ventas += myProducto.calc_total
	}
	
}

/**
 * @properties={typeid:24,uuid:"3A98D588-F4B0-4A29-B8D2-EA3A15F8F9A5"}
 * @SuppressWarnings(wrongparameters)
 */
function calculoDiasPrecio(){
	
	comp_imp_alqu = 0
	
	var vl_fecha_devolucion = comp_fecha_emision
	var vl_obra_anterior = null
	var obras_distintas = false
	
	forms.devolucion_ver_herramientas.foundset.loadAllRecords()
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.devolucion_ver_herramientas.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myHerramienta = forms.devolucion_ver_herramientas.foundset.getRecord(index);
		
		//Comprobamos si tiene obras diferentes
		if(vl_obra_anterior == null) vl_obra_anterior = myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes_alquiler.obra_id
		else{
			if(vl_obra_anterior != myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes_alquiler.obra_id) obras_distintas = true
			vl_obra_anterior = myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes_alquiler.obra_id
		}
		
		var x = vl_fecha_devolucion - myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes_alquiler.comp_fecha_emision //substracting two dates returns difference in milliseconds 
		var one_day=1000*60*60*24 //ms * sec * min * hrs in a day 
	
	
		var diffExact = x / one_day //gets difference in days 
		var diffRounded = Math.ceil(diffExact ) // rounds 2.343 to 3
		
		myHerramienta.calc_dias_reales = diffRounded
		
		myHerramienta.calc_total= myHerramienta.comp_dias_alquiler * myHerramienta.comp_precio
		
		
		comp_imp_alqu += myHerramienta.calc_total
	}
	if(obras_distintas){
		plugins.webnotificationsToastr.warning("Hay equipos de diferentes obras.","Atención",scopes.globals.vg_toast_options)
		obra_id = null
	}
	else{
		obra_id = myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes_alquiler.obra_id
	}
	
}


/**
 * @properties={typeid:24,uuid:"A3EE759D-392D-43D8-B70C-42F70C1865D9"}
 */
function calculoDiasPrecioSinModificar(){
	
	
	var vl_fecha_devolucion = comp_fecha_emision
	
	
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset.vent_comprobantes_to_vent_comprobante_herramientas);
	for (var index = 1; index <= nRecordCount; index++) {
		var myHerramienta = foundset.vent_comprobantes_to_vent_comprobante_herramientas.getRecord(index);
		
		var x = 0
		if(utils.hasRecords(myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes_alquiler)){
			x = vl_fecha_devolucion - myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes_alquiler.comp_fecha_emision //substracting two dates returns difference in milliseconds
		} 
		var one_day=1000*60*60*24 //ms * sec * min * hrs in a day 
	
	
		var diffExact = x / one_day //gets difference in days 
		var diffRounded = Math.ceil(diffExact ) // rounds 2.343 to 3
		
		myHerramienta.calc_dias_reales = diffRounded
		
		myHerramienta.calc_total= myHerramienta.comp_dias_alquiler * myHerramienta.comp_precio

		
		//comp_imp_alqu += myHerramienta.calc_total
	}

	
}


/**
 *
 * @properties={typeid:24,uuid:"7E1B6C4B-8F9C-48C4-904B-E9ABA0B206A6"}
 */
function onDataChangeFecha() {
	calculoTotales()
}

/**
 * @properties={typeid:24,uuid:"D9B19E54-125C-4B9C-A980-E647034EC746"}
 */
function onActionImprimir() {
	globals.imprimirReporteJasper("gpp","vent_remito_devolucion.jasper","",plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW, {comp_id: foundset.comp_id})
}
