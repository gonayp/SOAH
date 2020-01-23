/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D4F08297-2672-482B-8ABE-4B8E2B695BB5",variableType:4}
 */
var vl_avanzado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"54E7B64D-C01D-47D3-8934-EF6EFE30CA2D",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AAC95994-98D9-4F8D-A7F8-578C96D890E7",variableType:4}
 */
var vl_num_serie = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FB1E1121-20A0-4D20-A107-1195EA1F7DE9",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"395B7B90-0102-45E2-80FF-A1F76CCC884A",variableType:4}
 */
var vl_alimentacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"32751C37-542A-4F21-BCE5-FD9B7309A2E7"}
 */
var vl_cod_barras = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"143CF660-18E7-493F-82DE-9BF28FA7F7BD"}
 */
var vl_cod_alterna = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BFE1A636-09A7-429C-B7EE-17F22F1191C3",variableType:4}
 */
var vl_modelo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1A3E6E7F-50D2-4184-BBA4-FDEE8636429C",variableType:4}
 */
var vl_marca = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2BCFBBF9-7951-45B2-B978-386F6ED55685",variableType:4}
 */
var vl_herramienta = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0B87BE46-BCE9-4AEB-9106-14D4B026AFDA"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F2ABC741-C0AE-4870-B29D-E30F1F1C0EB7",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"BDBB267C-855F-4FB6-A00B-3D24B1DF21DD"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
	}

/**
 * @properties={typeid:24,uuid:"66856218-7139-4866-A0B0-6B32F1957DC6"}
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
 * @properties={typeid:24,uuid:"43060206-B889-44DE-AF94-C9D44FD39BDC"}
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
 * @properties={typeid:24,uuid:"46BE6D9A-FC7F-42AB-8FDF-ED9C39D53580"}
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
 * @properties={typeid:24,uuid:"738E88E0-96FC-41DD-9B9D-A36E2E8148C9"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	addHerramienta()

}

/**
 * @properties={typeid:24,uuid:"5702BB44-1B3D-41CD-9EB3-107FAA25EBD5"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function addHerramienta() {
	
	
	var herramienta_consumible = foundset.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herr_herramientas_to_herr_categoria.categoria_consumible //bandera para saber si esta herramienta se ocbra el desgaste sufrido
	
	forms.devolucion_ver_herramientas.foundset.find()
	forms.devolucion_ver_herramientas.foundset.equipo_id = foundset.equipo_id
	forms.devolucion_ver_herramientas.foundset.search()
	
	if(forms.devolucion_ver_herramientas.foundset.getSize() == 0){
		
		forms.devolucion_ver_herramientas.foundset.newRecord()
		forms.devolucion_ver_herramientas.foundset.company_id			= scopes.usuario.vg_company_id
		forms.devolucion_ver_herramientas.foundset.comp_precio			= vent_comprobante_herramientas_to_herr_equipo.equipo_precio_base
		forms.devolucion_ver_herramientas.foundset.equipo_id			= foundset.equipo_id
		if(herramienta_consumible == 1)
			forms.devolucion_ver_herramientas.foundset.comp_precio			= 0
		else
			forms.devolucion_ver_herramientas.foundset.comp_precio			= foundset.comp_precio
		forms.devolucion_ver_herramientas.foundset.comp_id				= forms.devolucion_ver.foundset.comp_id
		forms.devolucion_ver_herramientas.foundset.comp_id_padre		= foundset.comp_id
		
		databaseManager.saveData()
		
		modificarRelativos(foundset.equipo_id,forms.devolucion_ver.foundset.comp_id,foundset.comp_id)
		
		calcularTotalCobrar()
		
		if(herramienta_consumible == 1){//Si es consumible cargamos un item de ventas con el desgaste y consumo
			forms.devolucion_ver_ventas.foundset.newRecord()
			forms.devolucion_ver_ventas.foundset.company_id				= scopes.usuario.vg_company_id
			forms.devolucion_ver_ventas.foundset.comp_cantidad			= 1
			forms.devolucion_ver_ventas.foundset.comp_prod_nombre		= foundset.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_descripcion
			forms.devolucion_ver_ventas.foundset.comp_precio			= foundset.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_precio_base
			forms.devolucion_ver_ventas.foundset.calc_total				= foundset.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_precio_base
			forms.devolucion_ver_ventas.foundset.comp_prod_unidad		= ""
			forms.devolucion_ver_ventas.foundset.comp_id				= forms.devolucion_ver.foundset.comp_id
			databaseManager.saveData()
			
		}
		
		
		forms.devolucion_ver.calculoTotales()
		
		
		onActionVolver()
		
	}
	else{
		plugins.webnotificationsToastr.error("La herramienta ya fue añadida a la devolución.","",globals.vg_toast_options)
	}
	
	forms.devolucion_ver_herramientas.foundset.loadAllRecords()
}


/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param p_equipo
 * @param p_comp_id
 * @param p_comp_alq_id
 *
 * @properties={typeid:24,uuid:"3F336195-5DF8-4724-B7F7-0682EF8742FB"}
 */
function modificarRelativos(p_equipo , p_comp_id,p_comp_alq_id){

	
	/** @type {JSFoundSet<db:/gpp/vent_comprobantes>} */
	var fs_comprobantes_alq = databaseManager.getFoundSet('gpp', 'vent_comprobantes')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} */
	var fs_comprobante_herramientas_alq = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')
	
	/** @type {JSFoundSet<db:/gpp/herr_historicos>} */
	var fs_historico_equipos = databaseManager.getFoundSet('gpp', 'herr_historicos')
	
	/** @type {JSFoundSet<db:/gpp/herr_equipo>} */
	var fs_equipo = databaseManager.getFoundSet('gpp', 'herr_equipo')
	
	
	//Cambiamos estado de equipo
	fs_equipo.loadRecords(p_equipo)
	fs_equipo.equipo_estado = 1 //disponible
	fs_equipo.comp_id		= 0
	databaseManager.saveData(fs_equipo)
	
	//Guardamos historico de herramienta
	fs_historico_equipos.newRecord()
	fs_historico_equipos.company_id							= scopes.usuario.vg_company_id
	fs_historico_equipos.comp_id							= p_comp_id
	fs_historico_equipos.equipo_id							= p_equipo
	fs_historico_equipos.hist_fecha							= application.getServerTimeStamp()
	fs_historico_equipos.hist_tipo							= 6 //Disponible
	databaseManager.saveData(fs_historico_equipos)
	
	//Marcamos herramienta con el id de la devolucion
	fs_comprobante_herramientas_alq.find()
	fs_comprobante_herramientas_alq.comp_id = p_comp_alq_id
	fs_comprobante_herramientas_alq.equipo_id = p_equipo
	fs_comprobante_herramientas_alq.search()
	if(fs_comprobante_herramientas_alq.getSize()>0){
		fs_comprobante_herramientas_alq.comp_devolucion = p_comp_id
		databaseManager.saveData(fs_comprobante_herramientas_alq)
	}
	
	//Cambiamos estado de comprobante de alquiler si corresponde
	fs_comprobantes_alq.find()
	fs_comprobantes_alq.comp_id = p_comp_alq_id
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
		databaseManager.saveData(fs_comprobantes_alq)
	}
}


/**
 * @properties={typeid:24,uuid:"75DCF544-2A9B-4EE3-A43E-D10AD7966746"}
 */
function calcularTotalCobrar(){
	
	var vl_fecha_devolucion = forms.devolucion_ver.foundset.comp_fecha_emision
	var vl_fecha_alquiler = forms.devolucion_ver_herramientas.foundset.vent_comprobante_herramientas_to_vent_comprobantes_alquiler.comp_fecha_emision
	var x = vl_fecha_devolucion - forms.devolucion_ver_herramientas.foundset.vent_comprobante_herramientas_to_vent_comprobantes_alquiler.comp_fecha_emision //substracting two dates returns difference in milliseconds 
	var one_day=1000*60*60*24 //ms * sec * min * hrs in a day 


	var diffExact = x / one_day //gets difference in days 
	var diffRounded = Math.ceil(diffExact ) // rounds 2.343 to 3
	
	forms.devolucion_ver_herramientas.foundset.calc_dias_reales = diffRounded
	
	var vl_dias_reales = scopes.alquileres.calcularDiasParaCobrar(vl_fecha_alquiler,vl_fecha_devolucion)
	if(forms.devolucion_ver_herramientas.foundset.comp_fec_ult_facturacion != null)
		vl_dias_reales = scopes.alquileres.calcularDiasParaCobrar(forms.devolucion_ver_herramientas.foundset.comp_fec_ult_facturacion,vl_fecha_devolucion)
	
	forms.devolucion_ver_herramientas.foundset.comp_dias_alquiler = vl_dias_reales
	
	forms.devolucion_ver_herramientas.foundset.calc_total = vl_dias_reales * forms.devolucion_ver_herramientas.foundset.comp_precio
	
	databaseManager.saveData()
	
}
