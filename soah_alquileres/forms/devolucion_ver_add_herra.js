/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"16EEB13C-426F-4CBA-8776-F6EBAEDF3E3B"}
 */
var vl_cod_bar = null;

/**
 * @properties={typeid:24,uuid:"917F65D7-E0D6-4FE2-AAE7-6429AE97DF8C"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"1C9E171E-6AB4-4185-8B07-9D57757C7AC2"}
 */
function onActioGrabar(){
	grabar()
	vl_cod_bar = null
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"70F5C89A-7171-467A-BC10-ED5C1D184749"}
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
			
			forms.devolucion_ver_herramientas.foundset.find()
			forms.devolucion_ver_herramientas.foundset.equipo_id = fs_equipos.equipo_id
			forms.devolucion_ver_herramientas.foundset.search()
			
			if(forms.devolucion_ver_herramientas.foundset.getSize() == 0){
				
				/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} */
				var fs_comp_herr = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')
				
				fs_comp_herr.find()
				fs_comp_herr.equipo_id 			= fs_equipos.equipo_id
				fs_comp_herr.comp_devolucion 	='^='
				fs_comp_herr.vent_comprobante_herramientas_to_vent_comprobantes.comp_codigo = 1
				fs_comp_herr.search()
				
				
				if(fs_comp_herr.getSize() > 0){//Si esta en algun alquiler
					
					
					if(fs_comp_herr.vent_comprobante_herramientas_to_vent_comprobantes.cliente_id == forms.devolucion_ver.foundset.cliente_id ){//Si el cliente de la herramienta alquilada es el mismo al seleccionado en la devolucion
						cargarHerramienta(fs_equipos,fs_comp_herr)
					}
					else{
						plugins.webnotificationsToastr.error("El cliente que alquilo este equipo no coincide con el seleccionado.","",globals.vg_toast_options)
					}
					
					
				}
				else{//Alquilado, extraviado, roto, etc
					plugins.webnotificationsToastr.error("El equipo con este código de barras no esta alquilado.","",globals.vg_toast_options)
					
				}
				
				
			}
			else{
				plugins.webnotificationsToastr.error("La herramienta ya fue añadida a la devolución.","",globals.vg_toast_options)
			}
			forms.devolucion_ver_herramientas.foundset.loadAllRecords()
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
 * @properties={typeid:24,uuid:"C43025AF-D544-4F18-8CAF-31FF2ED0561C"}
 */
function cargarHerramienta(fs_equipos,fs_comp_herr){
	
	var herramienta_consumible = fs_equipos.herr_equipo_to_herr_herramientas.herr_herramientas_to_herr_categoria.categoria_consumible //bandera para saber si esta herramienta se ocbra el desgaste sufrido
	
	forms.devolucion_ver_herramientas.foundset.newRecord()
	forms.devolucion_ver_herramientas.foundset.company_id				= scopes.usuario.vg_company_id
	forms.devolucion_ver_herramientas.foundset.comp_precio				= fs_equipos.equipo_precio_base
	forms.devolucion_ver_herramientas.foundset.equipo_id				= fs_equipos.equipo_id
	if(herramienta_consumible == 1)
		forms.devolucion_ver_herramientas.foundset.comp_precio			= 0
	else
		forms.devolucion_ver_herramientas.foundset.comp_precio			= fs_comp_herr.comp_precio
	forms.devolucion_ver_herramientas.foundset.comp_id					= forms.devolucion_ver.foundset.comp_id
	forms.devolucion_ver_herramientas.foundset.comp_id_padre			= fs_equipos.comp_id
	
	databaseManager.saveData()
	
	
	modificarRelativos(fs_equipos.equipo_id,forms.devolucion_ver.foundset.comp_id,fs_equipos.comp_id)
	
	calcularTotalCobrar()
	
	if(herramienta_consumible == 1){//Si es consumible cargamos un item de ventas con el desgaste y consumo
		forms.devolucion_ver_ventas.foundset.newRecord()
		forms.devolucion_ver_ventas.foundset.company_id				= scopes.usuario.vg_company_id
		forms.devolucion_ver_ventas.foundset.comp_cantidad			= 1
		forms.devolucion_ver_ventas.foundset.comp_prod_nombre		= fs_equipos.herr_equipo_to_herr_herramientas.herramienta_descripcion
		forms.devolucion_ver_ventas.foundset.comp_precio			= fs_equipos.herr_equipo_to_herr_herramientas.herramienta_precio_base
		forms.devolucion_ver_ventas.foundset.calc_total				= fs_equipos.herr_equipo_to_herr_herramientas.herramienta_precio_base
		forms.devolucion_ver_ventas.foundset.comp_prod_unidad		= ""
		forms.devolucion_ver_ventas.foundset.comp_id				= forms.devolucion_ver.foundset.comp_id
		databaseManager.saveData()
		
	}
	
	
	
	forms.devolucion_ver.calculoTotales()
	
	forms.devolucion_ver_herramientas.foundset.loadAllRecords()
	application.getWindow('Dialog').hide()
}


/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"81628974-94A8-4F9E-9DBF-F9823073F91E"}
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
 * @properties={typeid:24,uuid:"E18D4DCE-9213-459E-8628-CF3C052F373B"}
 */
function calcularTotalCobrar(){
	
	var vl_fecha_devolucion = forms.devolucion_ver.foundset.comp_fecha_emision
	
	var vl_fecha_alquiler = forms.devolucion_ver_herramientas.foundset.vent_comprobante_herramientas_to_vent_comprobantes_alquiler.comp_fecha_emision
	var x = vl_fecha_devolucion - vl_fecha_alquiler //substracting two dates returns difference in milliseconds 
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

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D23BA79-99DD-4129-927D-DC5618CC0F00"}
 */
function onShow(firstShow, event) {
	vl_cod_bar = null
	controller.focusFirstField()
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"5CC2E55E-2469-477C-A480-2DA4596A3433"}
 */
function onDataChangeCodBarras() {
	grabar()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"90F0CF2E-C1EF-4123-B468-999DACA14F4B"}
 */
function onAction(event) {
	grabar()
	vl_cod_bar = null
}
