/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D723DCA6-E8E2-4396-BF2E-8D6FBBC4CD5E",variableType:4}
 */
var vl_herramienta = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CBB08C9C-7D25-4989-B904-FB8502F61A84",variableType:4}
 */
var vl_categoria = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"082B9FC3-9E2F-4260-92CA-FB242A27549E",variableType:93}
 */
var vl_fecha_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"CB7A2933-7B06-4FD7-AA19-8F811788CD82",variableType:93}
 */
var vl_fecha_ini = null;


/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} *
 * @properties={typeid:35,uuid:"724AE8FB-0942-4B4F-9B1C-42F8E56CB092",variableType:-4}
 */
var fs_comprobantes_alq = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')

/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} *
 * @properties={typeid:35,uuid:"2A4FC20C-6539-4717-A867-46ECEF1C733F",variableType:-4}
 */
var fs_comprobantes_fct = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')

/** @type {JSFoundSet<mem:mem_herramientas_aux>} *
 * @properties={typeid:35,uuid:"A21570E3-4F3D-428D-8036-1C1CE2034C9A",variableType:-4}
 */
	var fs_herramientas = databaseManager.getFoundSet(datasources.mem.mem_herramientas_aux.getDataSource());


/**
 * @properties={typeid:24,uuid:"FBA14D49-B77E-4A6C-91A3-D0541D832E1C"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 * @properties={typeid:24,uuid:"4BDE2235-6214-47ED-8F67-0BCC428918EC"}
 */
function onActionLimpiar() {
	vl_categoria = null
	vl_herramienta = null
	
	filtrar()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E39A5EB2-ADE0-4582-A01C-CFB6E448A58F"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	if(firstShow){
		vl_fecha_fin = application.getServerTimeStamp()
		vl_fecha_ini = new Date(vl_fecha_fin.getFullYear()-1,0,1)
	}

	filtrar()
	
	
	
}





/**
 * @properties={typeid:24,uuid:"BDA8543B-8D93-46CA-9D66-DD9BE6E10BFB"}
 */
function cargarGraficoPrincipal(){
	
	var data = [
    ['Herramientas de mano eléctricas', 'Herramientas de mano a baterías', 'Elementos de medición precisos', 'Maquinaria Liviana', 'Maquinaria Pesada', 'Herramientas de Mano', 
         { role: 'annotation' }],
    ['2010', 10, 24, 20, 32, 18,  ''],
    ['2020', 16, 22, 23, 30, 16,  ''],
    ['2030', 28, 19, 29, 30, 12,  '']
	];
		
	var options = {
	    width: 800,
	    height: 300,
	    legend: { position: 'top', maxLines: 3 },
	    bar: { groupWidth: '75%' },
	    isStacked: true
	};
	elements.chart.drawChart('BarChart', data, options);
}


/**
 * @properties={typeid:24,uuid:"3DD91C17-37D2-483B-848E-9302A3748B17"}
 * @AllowToRunInFind
 */
function cargaGraficaMejoresAlquileres(){
	
	fs_herramientas.deleteAllRecords()
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(fs_comprobantes_alq);
	for (var index = 1; index <= nRecordCount; index++) {
		var myHerr = fs_comprobantes_alq.getRecord(index);
		fs_herramientas.find()
		fs_herramientas.herramienta_id = myHerr.vent_comprobante_herramientas_to_herr_equipo.herramienta_id
		fs_herramientas.search()
		if(fs_herramientas.getSize() > 0){
			fs_herramientas.valor += 1
		}
		else{
			fs_herramientas.newRecord()
			fs_herramientas.herramienta_id = myHerr.vent_comprobante_herramientas_to_herr_equipo.herramienta_id
			fs_herramientas.herramienta_nombre = myHerr.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_nombre
			fs_herramientas.valor = 1
		}
		databaseManager.saveData()
	}
	
	fs_herramientas.loadAllRecords()
	fs_herramientas.sort("valor desc")
	
	var array = new Array()
	array.push(['Herramienta', 'Veces alquilada'])
	
	var nCount = 0
	nCount = fs_herramientas.getSize();
	if(nCount > 10) nCount = 10
	for (var i = 1; i <= nCount; i++) {
		var myRecord = fs_herramientas.getRecord(i);
		array.push([myRecord.herramienta_nombre , myRecord.valor])
	}
	
	var data = array/*
    ['Herramienta', 'Veces alquilada'],
    ['Acanaladora electrica',     11],
    ['Motoboma a explosión',      2],
    ['Aserradora a explosión',  2],
    ['Bomba Sumergible Hidraulica', 2],
    ['Pistola de calor electrica',    7]
  ]*/
	
	var options = {
	    width: 700,
	    height: 300,
	    title: 'Top Alquileres',
	    legend: { position: 'down', maxLines: 10 },
	    bar: { groupWidth: '95%' },
	    isStacked: true,
		is3D: true,
		pieStartAngle: 100,
		pieSliceText: 'value',
		pieSliceTextStyle: {color: 'white', fontName: 'sant', fontSize: 10}
	};
	elements.chart_mejores_alquileres.drawChart('PieChart', data, options);
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"24B19056-CFA4-49B9-9C43-BE563811BA5B"}
 */
function cargaGraficaMejoresIngresos(){
	
	fs_herramientas.deleteAllRecords()
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(fs_comprobantes_fct);
	for (var index = 1; index <= nRecordCount; index++) {
		var myHerr = fs_comprobantes_fct.getRecord(index);
		fs_herramientas.find()
		fs_herramientas.herramienta_id = myHerr.vent_comprobante_herramientas_to_herr_equipo.herramienta_id
		fs_herramientas.search()
		if(fs_herramientas.getSize() > 0){
			fs_herramientas.valor += myHerr.comp_precio
		}
		else{
			fs_herramientas.newRecord()
			fs_herramientas.herramienta_id = myHerr.vent_comprobante_herramientas_to_herr_equipo.herramienta_id
			fs_herramientas.herramienta_nombre = myHerr.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_nombre
			fs_herramientas.valor = myHerr.comp_precio
		}
		databaseManager.saveData()
	}
	
	fs_herramientas.loadAllRecords()
	fs_herramientas.sort("valor desc")
	
	var array = new Array()
	array.push(['Herramienta', 'Veces alquilada'])
	
	var nCount = 0
	nCount = fs_herramientas.getSize();
	if(nCount > 10) nCount = 10
	for (var i = 1; i <= nCount; i++) {
		var myRecord = fs_herramientas.getRecord(i);
		array.push([myRecord.herramienta_nombre , myRecord.valor])
	}
	
	var data = array/*
    ['Herramienta', 'Veces alquilada'],
    ['Acanaladora electrica',     11],
    ['Motoboma a explosión',      2],
    ['Aserradora a explosión',  2],
    ['Bomba Sumergible Hidraulica', 2],
    ['Pistola de calor electrica',    7]
  ]*/
	
	var options = {
	    width: 700,
	    height: 300,
	    title: 'Top Ingresos',
	    legend: { position: 'down', maxLines: 10 },
	    bar: { groupWidth: '95%' },
	    isStacked: true,
		is3D: true,
		pieStartAngle: 100,
		pieSliceText: 'value',
		pieSliceTextStyle: {color: 'white', fontName: 'sant', fontSize: 10}
	};
	elements.chart_mejores_ingresos.drawChart('PieChart', data, options);
}


/**
 * @properties={typeid:24,uuid:"64E2071E-44B0-43BF-A7A0-1BEC6FB3B99E"}
 * @AllowToRunInFind
 */
function cargaGraficaIngresos(){
	var array = new Array()
	array.push(["Fecha", "Ingresos"])
	
	for(var i = vl_fecha_ini.getFullYear(); i <= vl_fecha_fin.getFullYear(); i++ ){
		for(var j = vl_fecha_ini.getMonth(); j < 12; j++){
			var fecha_1 = new Date(i,j,1)
			var fecha_2 = new Date(i,j+1,0)
			fs_comprobantes_alq.find()
			fs_comprobantes_alq.vent_comprobante_herramientas_to_vent_comprobantes.comp_fecha_emision = utils.dateFormat(fecha_1, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(fecha_2, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
			fs_comprobantes_alq.search()
			if(fs_comprobantes_alq.getSize() > 0){
				array.push([j+1+'-'+i,fs_comprobantes_alq.aggr_total])
			}
			else{
				array.push([j+1+'-'+i,0])
			}
		}
	}
	
	
	 var data = array/*[
     ['Year', 'Sales', 'Expenses'],
     ['2004',  1000,      400],
     ['2005',  1170,      460],
     ['2006',  660,       1120],
     ['2007',  1030,      540]
   ];*/
	
	var options = {
		width: 800,
	    height: 400,
	    chart: {
	          title: 'Ingresos'
	        },
        curveType: 'function',
        legend: { position: 'top' }
      };
	
	elements.chart_ingresos.drawChart('LineChart', data, options);
}

/**
 * @properties={typeid:24,uuid:"46686A42-3F3F-47E9-A71D-BD7C0D9098AA"}
 * @AllowToRunInFind
 */
function cargaGraficaAlquileres(){
	
	var array = new Array()
	array.push(["Fecha", "Alquileres"])
	
	for(var i = vl_fecha_ini.getFullYear(); i <= vl_fecha_fin.getFullYear(); i++ ){
		for(var j = vl_fecha_ini.getMonth(); j < 12; j++){
			var fecha_1 = new Date(i,j,1)
			var fecha_2 = new Date(i,j+1,0)
			fs_comprobantes_alq.find()
			fs_comprobantes_alq.vent_comprobante_herramientas_to_vent_comprobantes.comp_fecha_emision = utils.dateFormat(fecha_1, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(fecha_2, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
			fs_comprobantes_alq.search()
			if(fs_comprobantes_alq.getSize() > 0){
				array.push([j+1+'-'+i,fs_comprobantes_alq.aggr_cantidad])
			}
			else{
				array.push([j+1+'-'+i,0])
			}
		}
	}
	
	
	 var data = array/*[
     ['Year', 'Sales', 'Expenses'],
     ['2004',  1000,      400],
     ['2005',  1170,      460],
     ['2006',  660,       1120],
     ['2007',  1030,      540]
   ];*/
	
	var options = {
		width: 800,
	    height: 400,
	    chart: {
	          title: 'Alquileres'
	        },
	    hAxis:{minValue: 0},
        curveType: 'function',
        legend: { position: 'top' }
      };
	
	elements.chart_alquileres.drawChart('LineChart', data, options);
	
}



/**
 *
 * @properties={typeid:24,uuid:"CE7FA326-EA4B-4FED-BEEE-931CC970DCF7"}
 */
function onDataChange() {
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"434A9503-3C81-45EF-84B7-3A8563ABDF54"}
 * @AllowToRunInFind
 */
function filtrar(){
	
	
	
	
	fs_comprobantes_alq.find()
	fs_comprobantes_alq.vent_comprobante_herramientas_to_vent_comprobantes.comp_fecha_emision = utils.dateFormat(vl_fecha_ini, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_fin, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	fs_comprobantes_alq.vent_comprobante_herramientas_to_vent_comprobantes.comp_codigo = 1
	if(vl_categoria != null) fs_comprobantes_alq.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.categoria_herr_id
	if(vl_herramienta != null) fs_comprobantes_alq.vent_comprobante_herramientas_to_herr_equipo.herramienta_id
	fs_comprobantes_alq.search()
	
	fs_comprobantes_fct.find()
	fs_comprobantes_fct.vent_comprobante_herramientas_to_vent_comprobantes.comp_fecha_emision = utils.dateFormat(vl_fecha_ini, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_fin, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	fs_comprobantes_fct.vent_comprobante_herramientas_to_vent_comprobantes.comp_codigo = 5
	if(vl_categoria != null) fs_comprobantes_fct.vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.categoria_herr_id
	if(vl_herramienta != null) fs_comprobantes_fct.vent_comprobante_herramientas_to_herr_equipo.herramienta_id
	fs_comprobantes_fct.search()
	
	
	cargaGraficaMejoresAlquileres()
	
	cargaGraficaMejoresIngresos()
	
	cargarGraficoPrincipal()
	
	cargaGraficaAlquileres()
	
	cargaGraficaIngresos()
	
	
	
	
}
