/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C6EFE6A3-6468-44A4-8423-69F7A132B88C"}
 */
var vl_cod_bar = null;

/**
 * @properties={typeid:24,uuid:"752B6402-BBE9-4D50-A8EA-2DDDE46D8A19"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"9C01E69F-7B7D-4125-B941-C0E51B6D0604"}
 */
function onActioGrabar(){
	grabar()
	vl_cod_bar = null
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"76EA03E9-7A7E-4300-80CA-5AA478B709C7"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function grabar() {
	
	
	
	if (vl_cod_bar != null){
		/** @type {JSFoundSet<db:/gpp/herr_equipo>} */
		var fs_equipos = databaseManager.getFoundSet('gpp', 'herr_equipo')
		
		fs_equipos.find()
		fs_equipos.equipo_cod_barras = vl_cod_bar
		fs_equipos.search()
		
		if(fs_equipos.getSize()>0){
			
			forms.devolucion_nuevo_herramientas.foundset.find()
			forms.devolucion_nuevo_herramientas.foundset.equipo_id = fs_equipos.equipo_id
			forms.devolucion_nuevo_herramientas.foundset.search()
			
			if(forms.devolucion_nuevo_herramientas.foundset.getSize() == 0){
				
				/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} */
				var fs_comp_herr = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')
				
				fs_comp_herr.find()
				fs_comp_herr.equipo_id 			= fs_equipos.equipo_id
				fs_comp_herr.comp_devolucion 	='^='
				fs_comp_herr.vent_comprobante_herramientas_to_vent_comprobantes.comp_codigo = 1
				fs_comp_herr.search()
				
				
				if(fs_comp_herr.getSize() > 0){//Si esta en algun alquiler
					
					if(forms.devolucion_nuevo.vl_cliente == null){//Cargamos la herramienta y el cliente de ese alquiler
						cargarHerramienta(fs_equipos,fs_comp_herr)
						
						forms.devolucion_nuevo.vl_cliente = fs_comp_herr.vent_comprobante_herramientas_to_vent_comprobantes.cliente_id
					}
					else{
						if(fs_comp_herr.vent_comprobante_herramientas_to_vent_comprobantes.cliente_id == forms.devolucion_nuevo.vl_cliente ){//Si el cliente de la herramienta alquilada es el mismo al seleccionado en la devolucion
							cargarHerramienta(fs_equipos,fs_comp_herr)
						}
						else{
							plugins.webnotificationsToastr.error("El cliente que alquilo este equipo no coincide con el seleccionado.","",globals.vg_toast_options)
						}
					}
					
				}
				else{//Alquilado, extraviado, roto, etc
					plugins.webnotificationsToastr.error("El equipo con este código de barras no esta alquilado.","",globals.vg_toast_options)
				}
				
			}
			else{
				plugins.webnotificationsToastr.error("La herramienta ya fue añadida a la devolución.","",globals.vg_toast_options)
			}
			forms.devolucion_nuevo_herramientas.foundset.loadAllRecords()
		}
		else{
			plugins.webnotificationsToastr.error("El código no pertenece a ningun equipo.","",globals.vg_toast_options)
		}
		
		//controller.focusFirstField()
		
		
		
		
	}
}

/**
 * @param {JSRecord<db:/gpp/herr_equipo>} fs_equipos
 * @param {JSRecord<db:/gpp/vent_comprobante_herramientas>} fs_comp_herr
 * @properties={typeid:24,uuid:"D0798EFB-52FE-4756-942F-C6C4484630BB"}
 */
function cargarHerramienta(fs_equipos,fs_comp_herr){
	
	
	
	forms.devolucion_nuevo_herramientas.foundset.newRecord()
	forms.devolucion_nuevo_herramientas.foundset.comp_precio			= fs_equipos.equipo_precio_base
	forms.devolucion_nuevo_herramientas.foundset.equipo_id				= fs_equipos.equipo_id
	forms.devolucion_nuevo_herramientas.foundset.equipo_cod_barras		= fs_equipos.equipo_cod_barras
	forms.devolucion_nuevo_herramientas.foundset.equipo_herramienta		= fs_equipos.herr_equipo_to_herr_herramientas.herramienta_nombre
	forms.devolucion_nuevo_herramientas.foundset.equipo_modelo			= fs_equipos.herr_equipo_to_herr_modelo.modelo_nombre
	forms.devolucion_nuevo_herramientas.foundset.equipo_num_serie		= fs_equipos.equipo_num_serie
	forms.devolucion_nuevo_herramientas.foundset.comp_comentario_entrega= fs_comp_herr.comp_comentario_entrega
	forms.devolucion_nuevo_herramientas.foundset.comp_dias_facturados	= fs_comp_herr.comp_dias_facturados
	forms.devolucion_nuevo_herramientas.foundset.comp_precio_ajustado	= fs_comp_herr.comp_precio
	forms.devolucion_nuevo_herramientas.foundset.comp_fec_ult_facturacion= fs_comp_herr.comp_fec_ult_facturacion
	forms.devolucion_nuevo_herramientas.foundset.comp_fecha_alquiler	= fs_comp_herr.vent_comprobante_herramientas_to_vent_comprobantes.comp_fecha_emision
	if(fs_comp_herr.vent_comprobante_herramientas_to_vent_comprobantes.acuerdo_precios_id != null)
		forms.devolucion_nuevo_herramientas.foundset.comp_acuerdo		= fs_comp_herr.vent_comprobante_herramientas_to_vent_comprobantes.vent_comprobantes_to_vent_acuerdos_d_precios.acuerdo_precios_nombre
	if(fs_comp_herr.vent_comprobante_herramientas_to_vent_comprobantes.obra_id != null){
		forms.devolucion_nuevo_herramientas.foundset.comp_obra			= fs_comp_herr.vent_comprobante_herramientas_to_vent_comprobantes.vent_comprobantes_to_vent_obras.obra_nombre
		forms.devolucion_nuevo_herramientas.foundset.obra_id			= fs_comp_herr.vent_comprobante_herramientas_to_vent_comprobantes.obra_id
	}
	forms.devolucion_nuevo_herramientas.foundset.comp_orden				= fs_comp_herr.vent_comprobante_herramientas_to_vent_comprobantes.comp_orden_compra
	forms.devolucion_nuevo_herramientas.foundset.comp_id				= fs_comp_herr.comp_id
	forms.devolucion_nuevo_herramientas.foundset.comp_num_alquiler		= fs_comp_herr.vent_comprobante_herramientas_to_vent_comprobantes.calc_num_compr_sin_codig
	
	
	
	if(fs_equipos.herr_equipo_to_herr_herramientas.herr_herramientas_to_herr_categoria.categoria_consumible == 1){//Si es consumible cargamos un item de ventas con el desgaste y consumo
		forms.devolucion_nuevo_ventas.foundset.newRecord()
		forms.devolucion_nuevo_ventas.foundset.producto_cantidad		= 1
		forms.devolucion_nuevo_ventas.foundset.producto_nombre			= fs_comp_herr.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_descripcion
		forms.devolucion_nuevo_ventas.foundset.producto_precio			= fs_comp_herr.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_precio_base
		forms.devolucion_nuevo_ventas.foundset.producto_total			= fs_comp_herr.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_precio_base
		forms.devolucion_nuevo_ventas.foundset.producto_unidad			= ""
		databaseManager.saveData()
	}
	
	
	//Comprobar si por tipo de alimentacion tiene algun consumible (ejemplo nafta)
	if(fs_comp_herr.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_alimentacion.producto_id != null){
		forms.devolucion_nuevo_ventas.foundset.newRecord()
		forms.devolucion_nuevo_ventas.foundset.producto_cantidad		= 1
		forms.devolucion_nuevo_ventas.foundset.producto_nombre			= fs_comp_herr.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_alimentacion.herr_alimentacion_to_prod_productos.producto_nombre
		forms.devolucion_nuevo_ventas.foundset.producto_precio			= fs_comp_herr.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_alimentacion.herr_alimentacion_to_prod_productos.producto_precio_base
		forms.devolucion_nuevo_ventas.foundset.producto_total			= fs_comp_herr.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_alimentacion.herr_alimentacion_to_prod_productos.producto_precio_base
		if(utils.hasRecords(fs_comp_herr.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_alimentacion.herr_alimentacion_to_prod_productos.prod_productos_to_prod_medidas)){
			forms.devolucion_nuevo_ventas.foundset.producto_unidad			= fs_comp_herr.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_alimentacion.herr_alimentacion_to_prod_productos.prod_productos_to_prod_medidas.medida_nombre
		}
		databaseManager.saveData()
	}
	
	
	databaseManager.saveData()
	
	if(fs_equipos.herr_equipo_to_herr_herramientas.herr_herramientas_to_herr_categoria.categoria_consumible != 1)//Solo calcula total a cobrar si no es un consumible
		calcularTotalCobrar()
	
	if(databaseManager.hasRecords(fs_equipos.herr_equipo_to_herr_herramientas.herr_herramientas_to_herr_herramientas_asociadas)){
		cargarHerramientasAsociadas(fs_equipos,fs_comp_herr.comp_id)
		
	}
	
	
	
	forms.devolucion_nuevo.calculoTotales()
	
	
	application.getWindow('Dialog').hide()
}

/**
 * @param {JSRecord<db:/gpp/herr_equipo>} fs_equipos
 * @param p_comp_id
 *
 * @properties={typeid:24,uuid:"D8195B27-6BA1-4B5D-BD85-E3839EAB5619"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function cargarHerramientasAsociadas(fs_equipos,p_comp_id){
	
	
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} */
	var fs_comp_herr = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(fs_equipos.herr_equipo_to_herr_herramientas.herr_herramientas_to_herr_herramientas_asociadas);
	for (var index = 1; index <= nRecordCount; index++) {
		var myHerramienta = fs_equipos.herr_equipo_to_herr_herramientas.herr_herramientas_to_herr_herramientas_asociadas.getRecord(index);
		
		fs_comp_herr.find()
		fs_comp_herr.comp_id = p_comp_id //busca herramienta asociada en el mismo comprobante de alquiler
		fs_comp_herr.vent_comprobante_herramientas_to_herr_equipo.herramienta_id	= myHerramienta.herramienta_asociada_id
		//fs_comp_herr.comp_devolucion 	='^='
		//fs_comp_herr.vent_comprobante_herramientas_to_vent_comprobantes.comp_codigo = 1
		fs_comp_herr.search()
		
		var nCount = 0
		nCount = databaseManager.getFoundSetCount(fs_comp_herr);
		for (var i = 1; i <= nCount; i++) {
			var myAsociadaAlquilada= fs_comp_herr.getRecord(i);
			
			var herramienta_consumible = myAsociadaAlquilada.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herr_herramientas_to_herr_categoria.categoria_consumible //bandera para saber si esta herramienta se ocbra el desgaste sufrido
			
			forms.devolucion_nuevo_herramientas.foundset.find()
			forms.devolucion_nuevo_herramientas.foundset.equipo_id = myAsociadaAlquilada.equipo_id
			forms.devolucion_nuevo_herramientas.foundset.search()
			
			if(forms.devolucion_nuevo_herramientas.foundset.getSize() == 0){
			
				forms.devolucion_nuevo_herramientas.foundset.newRecord()
				forms.devolucion_nuevo_herramientas.foundset.comp_precio			= myAsociadaAlquilada.vent_comprobante_herramientas_to_herr_equipo.equipo_precio_base
				forms.devolucion_nuevo_herramientas.foundset.equipo_id				= myAsociadaAlquilada.equipo_id
				forms.devolucion_nuevo_herramientas.foundset.equipo_cod_barras		= myAsociadaAlquilada.vent_comprobante_herramientas_to_herr_equipo.equipo_cod_barras
				forms.devolucion_nuevo_herramientas.foundset.equipo_herramienta		= myAsociadaAlquilada.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_nombre
				forms.devolucion_nuevo_herramientas.foundset.equipo_modelo			= myAsociadaAlquilada.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_modelo.modelo_nombre
				forms.devolucion_nuevo_herramientas.foundset.equipo_num_serie		= myAsociadaAlquilada.vent_comprobante_herramientas_to_herr_equipo.equipo_num_serie
				forms.devolucion_nuevo_herramientas.foundset.comp_dias_facturados	= myAsociadaAlquilada.comp_dias_facturados
				forms.devolucion_nuevo_herramientas.foundset.comp_fec_ult_facturacion= myAsociadaAlquilada.comp_fec_ult_facturacion
				if(herramienta_consumible == 1)
					forms.devolucion_nuevo_herramientas.foundset.comp_precio_ajustado	= 0
				else
					forms.devolucion_nuevo_herramientas.foundset.comp_precio_ajustado	= myAsociadaAlquilada.comp_precio
				forms.devolucion_nuevo_herramientas.foundset.comp_fecha_alquiler	= myAsociadaAlquilada.vent_comprobante_herramientas_to_vent_comprobantes.comp_fecha_emision
				if(myAsociadaAlquilada.vent_comprobante_herramientas_to_vent_comprobantes.acuerdo_precios_id != null)
					forms.devolucion_nuevo_herramientas.foundset.comp_acuerdo		= myAsociadaAlquilada.vent_comprobante_herramientas_to_vent_comprobantes.vent_comprobantes_to_vent_acuerdos_d_precios.acuerdo_precios_nombre
				if(myAsociadaAlquilada.vent_comprobante_herramientas_to_vent_comprobantes.obra_id != null){
					forms.devolucion_nuevo_herramientas.foundset.comp_obra			= myAsociadaAlquilada.vent_comprobante_herramientas_to_vent_comprobantes.vent_comprobantes_to_vent_obras.obra_nombre
					forms.devolucion_nuevo_herramientas.foundset.obra_id			= myAsociadaAlquilada.vent_comprobante_herramientas_to_vent_comprobantes.obra_id
				}
				forms.devolucion_nuevo_herramientas.foundset.comp_orden				= myAsociadaAlquilada.vent_comprobante_herramientas_to_vent_comprobantes.comp_orden_compra
				forms.devolucion_nuevo_herramientas.foundset.comp_id				= myAsociadaAlquilada.comp_id
				forms.devolucion_nuevo_herramientas.foundset.comp_num_alquiler		= myAsociadaAlquilada.vent_comprobante_herramientas_to_vent_comprobantes.calc_num_compr_sin_codig
				
				databaseManager.saveData()
				
				if(herramienta_consumible == 1){//Si es consumible cargamos un item de ventas con el desgaste y consumo
					forms.devolucion_nuevo_ventas.foundset.newRecord()
					forms.devolucion_nuevo_ventas.foundset.producto_cantidad		= 1
					forms.devolucion_nuevo_ventas.foundset.producto_nombre			= myAsociadaAlquilada.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_descripcion
					forms.devolucion_nuevo_ventas.foundset.producto_precio			= myAsociadaAlquilada.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_precio_base
					forms.devolucion_nuevo_ventas.foundset.producto_total			= myAsociadaAlquilada.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_precio_base
					forms.devolucion_nuevo_ventas.foundset.producto_unidad			= ""
					databaseManager.saveData()
				}
				else{
					calcularTotalCobrar()
				}
				
				plugins.webnotificationsToastr.info("Se añadio la herramienta asiciada: "+forms.devolucion_nuevo_herramientas.foundset.equipo_herramienta	,"",globals.vg_toast_options)
			}
		}
	}
	
	
	
	
}


/**
 * @properties={typeid:24,uuid:"F212A3CD-5647-4918-910E-8824726C5FF6"}
 */
function calcularTotalCobrar(){
	
	var vl_fecha_devolucion = forms.devolucion_nuevo.vl_fecha
	
	var vl_dias_a_cobrar = scopes.alquileres.calcularDiasParaCobrar(forms.devolucion_nuevo_herramientas.foundset.comp_fecha_alquiler,vl_fecha_devolucion)
	if(forms.devolucion_nuevo_herramientas.foundset.comp_fec_ult_facturacion != null)
		vl_dias_a_cobrar = scopes.alquileres.calcularDiasParaCobrar(forms.devolucion_nuevo_herramientas.foundset.comp_fec_ult_facturacion,vl_fecha_devolucion)
	
	
	
	var x = vl_fecha_devolucion - forms.devolucion_nuevo_herramientas.foundset.comp_fecha_alquiler //substracting two dates returns difference in milliseconds 
	var one_day=1000*60*60*24 //ms * sec * min * hrs in a day 


	var diffExact = x / one_day //gets difference in days 
	var diffRounded = Math.ceil(diffExact ) // rounds 2.343 to 3
	
	forms.devolucion_nuevo_herramientas.foundset.comp_dias_reales = diffRounded

	forms.devolucion_nuevo_herramientas.foundset.comp_dias_a_cobrar = vl_dias_a_cobrar
	
	
	forms.devolucion_nuevo_herramientas.foundset.comp_precio_calculado = vl_dias_a_cobrar * forms.devolucion_nuevo_herramientas.foundset.comp_precio_ajustado
	
	databaseManager.saveData()
	
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8A01DE96-A2FA-4012-9CB0-08196DACA87A"}
 */
function onShow(firstShow, event) {
	vl_cod_bar = null
	controller.focusFirstField()
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"D9A1AAAD-9BE1-4500-A658-DEF5B311AC92"}
 */
function onDataChangeCodBarras() {
	grabar()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4E5B81E1-1AA3-49CE-B27C-80F86ACD2844"}
 */
function onAction(event) {
	grabar()
	vl_cod_bar = null
}
