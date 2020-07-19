/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5D502223-F6B1-49DF-B708-3FE5E52D75BB",variableType:4}
 */
var vl_avanzado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B6D6DD49-6EA0-4D93-90E2-7710AAEE732B",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"909492FB-CD22-4AD4-AC9C-C529AB83FB26",variableType:4}
 */
var vl_num_serie = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"010E28BE-414B-49E2-B09D-86B794AC84BE",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"33A5430D-BE99-49CE-89BC-EB8F3ECEDE91",variableType:4}
 */
var vl_alimentacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"00839988-94E5-41ED-B9C4-D41F3F0F8FA9"}
 */
var vl_cod_barras = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"39D9109D-CB39-4F8D-BE61-EA56DFBC6EBB"}
 */
var vl_cod_alterna = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A4C8E31D-6AC2-4A37-8C9E-D6392BB66D19",variableType:4}
 */
var vl_modelo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"925E4BCB-0760-49BB-BB7A-7017029F4712",variableType:4}
 */
var vl_marca = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"33002A1E-803A-40EE-A159-666C0D0EEC0C",variableType:4}
 */
var vl_herramienta = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"886AE118-AAEE-44C4-A588-EFEB44E36D3F"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"022470E2-DD93-4E8E-B460-1EA41050E870",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"37F443E5-B69E-4536-BD54-4F26C913C7B4"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
	}

/**
 * @properties={typeid:24,uuid:"9AFB8DE8-99FF-48CB-8A27-41A0B1E398C1"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	foundset.vent_comprobante_herramientas_to_vent_comprobantes.cliente_id										= forms.devolucion_nuevo.vl_cliente
	foundset.comp_devolucion 																					='^='//Que no este devuelto
	foundset.vent_comprobante_herramientas_to_vent_comprobantes.comp_codigo 									= 1
	if(vl_codigo != null) 			vent_comprobante_herramientas_to_herr_equipo.equipo_codigo 					= vl_codigo
	if(vl_alimentacion != null)		vent_comprobante_herramientas_to_herr_equipo.alimentacion_id				= vl_alimentacion
	if(vl_estado != null)			vent_comprobante_herramientas_to_herr_equipo.equipo_estado					= vl_estado
	if(vl_herramienta != null)		vent_comprobante_herramientas_to_herr_equipo.herramienta_id					= vl_herramienta
	if(vl_marca != null)			vent_comprobante_herramientas_to_herr_equipo.marca_id						= vl_marca
	if(vl_modelo != null)			vent_comprobante_herramientas_to_herr_equipo.modelo_id						= vl_modelo
	if(vl_tipo != null)				vent_comprobante_herramientas_to_herr_equipo.equipo_tipo					= vl_tipo
	if(vl_nombre != null && vl_nombre != "")			vent_comprobante_herramientas_to_herr_equipo.equipo_nombre				= '#%' + vl_nombre + '%'
	if(vl_cod_alterna != null && vl_cod_alterna != "") 	vent_comprobante_herramientas_to_herr_equipo.equipo_cod_alternativo 	= '#%' + vl_cod_alterna + '%'
	if(vl_cod_barras != null && vl_cod_barras != "")    vent_comprobante_herramientas_to_herr_equipo.equipo_cod_barras			= '#%' + vl_cod_barras + '%'
	if(vl_num_serie != null && vl_num_serie != "")		vent_comprobante_herramientas_to_herr_equipo.equipo_num_serie			= '#%' + vl_num_serie + '%'
	foundset.search()
	
	foundset.sort("herramienta_id, marca_id, modelo_id asc")
}

/**
 * @properties={typeid:24,uuid:"D8BA3112-047A-413C-A087-B4DEE9B4615E"}
 */
function onActionLimpiar() {
	vl_tipo = null;
	vl_num_serie = null;
	vl_estado = null;
	vl_alimentacion = null;
	vl_cod_barras = null;
	vl_cod_alterna = null;
	vl_modelo = null;
	vl_marca = null;
	vl_herramienta = null;
	vl_nombre = null;
	vl_codigo = null;
	
	filtrar()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"67EC161A-416A-42D1-B0C4-658AB958B28E"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {


	onActionLimpiar()
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"27F47C0D-7D5F-48EF-B66B-C81D023B8E6B"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	addHerramienta()

}

/**
 * @properties={typeid:24,uuid:"3FF17AFC-145F-48BC-BEA4-86198D12CDD3"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function addHerramienta() {
	
	
	
	forms.devolucion_nuevo_herramientas.foundset.find()
	forms.devolucion_nuevo_herramientas.foundset.equipo_id = foundset.equipo_id
	forms.devolucion_nuevo_herramientas.foundset.search()
	
	if(forms.devolucion_nuevo_herramientas.foundset.getSize() == 0){
		
		forms.devolucion_nuevo_herramientas.foundset.newRecord()
		forms.devolucion_nuevo_herramientas.foundset.comp_precio			= vent_comprobante_herramientas_to_herr_equipo.equipo_precio_base
		forms.devolucion_nuevo_herramientas.foundset.equipo_id				= foundset.equipo_id
		forms.devolucion_nuevo_herramientas.foundset.equipo_cod_barras		= vent_comprobante_herramientas_to_herr_equipo.equipo_cod_barras
		forms.devolucion_nuevo_herramientas.foundset.equipo_herramienta		= vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_nombre
		forms.devolucion_nuevo_herramientas.foundset.equipo_num_serie		= vent_comprobante_herramientas_to_herr_equipo.equipo_num_serie
		forms.devolucion_nuevo_herramientas.foundset.comp_dias_facturados	= foundset.comp_dias_facturados
		forms.devolucion_nuevo_herramientas.foundset.comp_comentario_entrega= foundset.comp_comentario_entrega
		forms.devolucion_nuevo_herramientas.foundset.comp_precio_ajustado	= foundset.comp_precio
		forms.devolucion_nuevo_herramientas.foundset.comp_fec_ult_facturacion= foundset.comp_fec_ult_facturacion
		forms.devolucion_nuevo_herramientas.foundset.equipo_modelo			= foundset.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_modelo.modelo_nombre
		forms.devolucion_nuevo_herramientas.foundset.comp_fecha_alquiler	= foundset.vent_comprobante_herramientas_to_vent_comprobantes.comp_fecha_emision
		if(foundset.vent_comprobante_herramientas_to_vent_comprobantes.acuerdo_precios_id != null)
			forms.devolucion_nuevo_herramientas.foundset.comp_acuerdo		= foundset.vent_comprobante_herramientas_to_vent_comprobantes.vent_comprobantes_to_vent_acuerdos_d_precios.acuerdo_precios_nombre
		if(foundset.vent_comprobante_herramientas_to_vent_comprobantes.obra_id != null){
			forms.devolucion_nuevo_herramientas.foundset.comp_obra			= foundset.vent_comprobante_herramientas_to_vent_comprobantes.vent_comprobantes_to_vent_obras.obra_nombre
			forms.devolucion_nuevo_herramientas.foundset.obra_id			= foundset.vent_comprobante_herramientas_to_vent_comprobantes.obra_id
		}
		forms.devolucion_nuevo_herramientas.foundset.comp_orden				= foundset.vent_comprobante_herramientas_to_vent_comprobantes.comp_orden_compra
		forms.devolucion_nuevo_herramientas.foundset.comp_id				= foundset.comp_id
		forms.devolucion_nuevo_herramientas.foundset.comp_num_alquiler		= foundset.vent_comprobante_herramientas_to_vent_comprobantes.calc_num_compr_sin_codig
		
		
		//Comprobar si es consumible
		if(forms.devolucion_nuevo_herramientas.foundset.mem_vent_comprobante_equipos_to_herr_equipo.herr_equipo_to_herr_herramientas.herr_herramientas_to_herr_categoria.categoria_consumible == 1){//Si es consumible cargamos un item de ventas con el desgaste y consumo
			forms.devolucion_nuevo_ventas.foundset.newRecord()
			forms.devolucion_nuevo_ventas.foundset.producto_cantidad		= 1
			forms.devolucion_nuevo_ventas.foundset.producto_nombre			= foundset.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_descripcion
			forms.devolucion_nuevo_ventas.foundset.producto_precio			= foundset.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_precio_base
			forms.devolucion_nuevo_ventas.foundset.producto_total			= foundset.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_precio_base
			forms.devolucion_nuevo_ventas.foundset.producto_unidad			= ""
			databaseManager.saveData()
		}
		
		//Comprobar si por tipo de alimentacion tiene algun consumible (ejemplo nafta)
		if(utils.hasRecords(foundset.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_alimentacion)){
			if(foundset.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_alimentacion.producto_id != null){
				forms.devolucion_nuevo_ventas.foundset.newRecord()
				forms.devolucion_nuevo_ventas.foundset.producto_cantidad		= 1
				forms.devolucion_nuevo_ventas.foundset.producto_nombre			= foundset.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_alimentacion.herr_alimentacion_to_prod_productos.producto_nombre
				forms.devolucion_nuevo_ventas.foundset.producto_precio			= foundset.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_alimentacion.herr_alimentacion_to_prod_productos.producto_precio_base
				forms.devolucion_nuevo_ventas.foundset.producto_total			= foundset.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_alimentacion.herr_alimentacion_to_prod_productos.producto_precio_base
				
				databaseManager.saveData()
			}
		}
		
		databaseManager.saveData()
		
		calcularTotalCobrar()
		
		if(databaseManager.hasRecords(foundset.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herr_herramientas_to_herr_herramientas_asociadas)){
			cargarHerramientasAsociadas(foundset.vent_comprobante_herramientas_to_herr_equipo,foundset.vent_comprobante_herramientas_to_vent_comprobantes.comp_id)
			
		}
		
		forms.devolucion_nuevo.calculoTotales()
		
		
		
		onActionVolver()
		
	}
	else{
		plugins.webnotificationsToastr.error("La herramienta ya fue añadida al alquiler.","",globals.vg_toast_options)
	}
	
	forms.devolucion_nuevo_herramientas.foundset.loadAllRecords()
}




/**
 * @AllowToRunInFind
 * 
 * @param {JSRecord<db:/gpp/herr_equipo>} fs_equipos
 * @param p_comp_id
 *
 * @properties={typeid:24,uuid:"20932079-0460-4F34-8AF4-B3F92DDB4A27"}
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
				
				calcularTotalCobrar()
				
				plugins.webnotificationsToastr.info("Se añadio la herramienta asiciada: "+forms.devolucion_nuevo_herramientas.foundset.equipo_herramienta	,"",globals.vg_toast_options)
			}
		}//
	}
	
	
	
	
}



/**
 *
 * @properties={typeid:24,uuid:"D36D724C-DD92-4680-A352-9BF00F245090"}
 */
function calcularTotalCobrar(){
	
	var vl_fecha_devolucion = forms.devolucion_nuevo.vl_fecha
	
	var x = vl_fecha_devolucion - forms.devolucion_nuevo_herramientas.foundset.comp_fecha_alquiler //substracting two dates returns difference in milliseconds 
	var one_day=1000*60*60*24 //ms * sec * min * hrs in a day 


	var diffExact = x / one_day //gets difference in days 
	var diffRounded = Math.ceil(diffExact ) // rounds 2.343 to 3
	
	forms.devolucion_nuevo_herramientas.foundset.comp_dias_reales = diffRounded
	
	var vl_dias_reales = scopes.alquileres.calcularDiasParaCobrar(forms.devolucion_nuevo_herramientas.foundset.comp_fecha_alquiler,vl_fecha_devolucion)
	if(forms.devolucion_nuevo_herramientas.foundset.comp_fec_ult_facturacion != null)
		vl_dias_reales = scopes.alquileres.calcularDiasParaCobrar(forms.devolucion_nuevo_herramientas.foundset.comp_fec_ult_facturacion,vl_fecha_devolucion)
	
		
	forms.devolucion_nuevo_herramientas.foundset.comp_dias_a_cobrar = vl_dias_reales
	
	
	forms.devolucion_nuevo_herramientas.foundset.comp_precio_calculado = vl_dias_reales * forms.devolucion_nuevo_herramientas.foundset.comp_precio_ajustado
	
	databaseManager.saveData()
	
}

/**
 * @properties={typeid:24,uuid:"481A926C-4455-4BB3-B827-F326E202DCB5"}
 */
function onDataChangeHerramienta() {
	globals.vg_herramienta_id = vl_herramienta
	globals.vg_marca_id = null 
	vl_marca = null
	vl_modelo = null
	filtrar()
}

/**
 *
 * @properties={typeid:24,uuid:"F54F628A-5678-4B83-AC8B-67DB495AE395"}
 */
function onDataChangeMarca() {
	globals.vg_marca_id = vl_marca
	vl_modelo = null
	filtrar()
}
