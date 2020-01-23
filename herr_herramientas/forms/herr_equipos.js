/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EFB3E7BD-8BE7-4447-8A59-5C90D3D51571",variableType:4}
 */
var vl_avanzado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BDCD911C-E95C-4DBD-AF69-B19E9586AE93",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A708AE74-563B-47EF-BC36-059DCDBE7BBC",variableType:4}
 */
var vl_num_serie = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C844DB18-1AE6-4BAD-B8C1-0C8D13C9E8A2",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8A98683C-E07E-4A5A-8975-30621BCDDC57",variableType:4}
 */
var vl_alimentacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2886B65E-38F7-42BD-9D6E-DCC1594864CD"}
 */
var vl_cod_barras = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8C39916B-2543-4346-904B-8BC945B2AC6D"}
 */
var vl_cod_alterna = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A219859F-FA80-4E76-B0F1-F14FA2F0662E",variableType:4}
 */
var vl_modelo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DF84070C-5749-432D-819A-3B76FBA1B770",variableType:4}
 */
var vl_marca = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E1EBBF28-7A5E-4F8E-A708-0086A0FF6FCA",variableType:4}
 */
var vl_herramienta = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"01FFB3BE-2609-4E40-AB2A-B2AA638F20D7"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4F591BDC-FAC5-4955-A40A-F1BB31BFD610",variableType:4}
 */
var vl_codigo = null;


/**
 * @properties={typeid:24,uuid:"99E5A2B6-3BBC-40D9-9381-DB281F77404F"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 * @properties={typeid:24,uuid:"AFAD588A-2C69-46CB-9E34-A8654FE4389A"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	if(vl_codigo != null) 			equipo_codigo 				= vl_codigo
	if(vl_alimentacion != null)		alimentacion_id				= vl_alimentacion
	if(vl_estado != null)			equipo_estado				= vl_estado
	if(vl_herramienta != null)		herramienta_id				= vl_herramienta
	if(vl_marca != null)			marca_id					= vl_marca
	if(vl_modelo != null)			modelo_id					= vl_modelo
	if(vl_tipo != null)				equipo_tipo					= vl_tipo
	if(vl_nombre != null && vl_nombre != "")			equipo_nombre			= '#%' + vl_nombre + '%'
	if(vl_cod_alterna != null && vl_cod_alterna != "") 	equipo_cod_alternativo 	= '#%' + vl_cod_alterna + '%'
	if(vl_cod_barras != null && vl_cod_barras != "")    equipo_cod_barras		=  vl_cod_barras 
	if(vl_num_serie != null && vl_num_serie != "")		equipo_num_serie		= '#%' + vl_num_serie + '%'
	foundset.search()
	
	foundset.sort("herramienta_id, marca_id, modelo_id asc")
}

/**
 * @properties={typeid:24,uuid:"C37A76C9-7645-4A33-BFDF-1F6C51CB7B91"}
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
 * @properties={typeid:24,uuid:"343E9859-A686-454A-A556-0D21D9282C20"}
 */
function onActionFiltroAvanzado() {
	
	if(vl_avanzado == 0) vl_avanzado = 1
	else vl_avanzado = 0
	
	modificarVista()
	
	
}


/**
 * @properties={typeid:24,uuid:"86095303-4EB2-4690-B88A-9357979BBDD8"}
 */
function modificarVista(){
	
	if(vl_avanzado == 0){
		elements.table_equipos.removeStyleClass("tabla-filtro")
		elements.rec_filtros.visible = true
		elements.grp_filt_ava.visible = false
		elements.btn_filtro.text = "Ѵ"

	}
	else{
		elements.table_equipos.addStyleClass("tabla-filtro")
		elements.rec_filtros.visible = false
		elements.grp_filt_ava.visible = true
		elements.btn_filtro.text = "Λ"
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E32DA6C2-9F1A-4DAF-BA38-EE4B14A3E3C0"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	elements.btn_nuevo.enabled = true
	if (scopes.usuario.vg_permiso_crear == 0) {
		elements.btn_nuevo.enabled = false
	}
	
	
	
	if(firstShow){
		vl_avanzado = 0
		filtrar()
		
	}
	modificarVista()
	
	
}

/**
 * @properties={typeid:24,uuid:"080C81D5-E775-49AC-9195-B16605951F67"}
 */
function onActionNuevo() {
	forms.herr_equipos_nuevo.vl_form_padre = controller.getName()
	application.showForm(forms.herr_equipos_nuevo)
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"5A358533-9561-4A6A-9FC3-D6ADA2DE2B68"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	forms.herr_equipos_editar.vl_form_padre = controller.getName()
	application.showForm(forms.herr_equipos_editar)

}

/**
 * @properties={typeid:24,uuid:"A9202E39-871D-408D-A2EE-96BA1BBEA62A"}
 * @AllowToRunInFind
 */
function onActionImportar() {

	
	/** @type {JSFoundSet<db:/gpp/herr_equipo>} */
	var fs_equipo= databaseManager.getFoundSet('gpp', 'herr_equipo')
	
	/** @type {JSFoundSet<db:/gpp/herr_alimentacion>} */
	var fs_alimentacion = databaseManager.getFoundSet('gpp', 'herr_alimentacion')
	
	/** @type {JSFoundSet<db:/gpp/herr_herramientas>} */
	var fs_herramientas = databaseManager.getFoundSet('gpp', 'herr_herramientas')
	
	/** @type {JSFoundSet<db:/gpp/herr_marca>} */
	var fs_marca = databaseManager.getFoundSet('gpp', 'herr_marca')
	
	/** @type {JSFoundSet<db:/gpp/herr_modelo>} */
	var fs_modelo = databaseManager.getFoundSet('gpp', 'herr_modelo')
	
	var file_3m = plugins.file.readTXTFile("C:\Users\Gonay\Desktop\herramientas.csv")

	if((file_3m != null)&&(file_3m != '')){
		
		var array = file_3m.split("\n")
		var aux1 = array[1].split(';')
		if(aux1.length != 16 ){
			plugins.webnotificationsToastr.error("La cantidad de columnas es incorrecta.", "ERROR");
			
				plugins.svyBlockUI.stop()
		
			return
		}
		else{
			
			var a = array.length
			for (var i=1; i<a;  i++){
				
				if(i%10 == 0)
					plugins.svyBlockUI.show('Cargando Equipo '+ i + ' de ' + a)
				
				var fila_equipo = array[i].split(';')
				fs_equipo.newRecord()
				fs_equipo.company_id						= scopes.usuario.vg_company_id
				//fs_equipo.equipo_asegurado					= fila_equipo[7]
				fs_equipo.equipo_caracteristicas			= fila_equipo[10]
				fs_equipo.equipo_cod_barras					= fila_equipo[0]
				fs_equipo.equipo_codigo						= fila_equipo[15]
				fs_equipo.equipo_descripcion				= fila_equipo[9]
				fs_equipo.equipo_fecha_alta					= application.getServerTimeStamp()
				fs_equipo.equipo_num_motor					= fila_equipo[13]
				fs_equipo.equipo_num_serie					= fila_equipo[12]
				fs_equipo.equipo_observaciones				= fila_equipo[14]
				//fs_equipo.equipo_precio_base				= fila_equipo[6]
				fs_equipo.equipo_tipo						= 1
				
				//Herramienta
				fs_herramientas.find()
				fs_herramientas.herramienta_codigo			= fila_equipo[1]
				fs_herramientas.search()
				if(fs_herramientas.getSize() > 0)
					fs_equipo.herramienta_id 				= fs_herramientas.herramienta_id
				else
					fs_equipo.herramienta_id				= null
					
				//marca
				fs_marca.find()
				fs_marca.marca_codigo						= fila_equipo[2]
				fs_marca.search()
				if(fs_marca.getSize() > 0)
					fs_equipo.marca_id						= fs_marca.marca_id
				else
					fs_equipo.marca_id						= null
				
				//modelo
				fs_modelo.find()
				fs_modelo.modelo_codigo						= fila_equipo[3]
				fs_modelo.search()		
				if(fs_modelo.getSize() > 0)
					fs_equipo.modelo_id						= fs_modelo.modelo_id
				else
					fs_equipo.modelo_id						= null
				
				
				//Alimentacion
				fs_alimentacion.find()
				fs_alimentacion.alimentacion_nombre = 	fila_equipo[8]
				fs_alimentacion.search()
				if(fs_alimentacion.getSize()> 0)
					fs_equipo.alimentacion_id					= fs_alimentacion.alimentacion_id
				else
					fs_equipo.alimentacion_id					= null
					
					
				//Estado
				switch (fila_equipo[11]) {
				case "Disponible":
					fs_equipo.equipo_estado			= 1
					break;
				case "Reparar":
					fs_equipo.equipo_estado			= 2
					break;
				case "Baja":
					fs_equipo.equipo_estado			= 8
					break;
				case "Robo":
					fs_equipo.equipo_estado			= 5
					break;
				case "Bien de Uso":
					fs_equipo.equipo_estado			= 6
					break;
				case "Dsiponible":
					fs_equipo.equipo_estado			= 1
					break;
				case "Robado":
					fs_equipo.equipo_estado			= 5
					break;
				default:
					fs_equipo.equipo_estado 		= null
					break;
				}
				
				
				databaseManager.saveData(fs_equipo)
			}
		}
		
		}
		else {
			plugins.webnotificationsToastr.error("El archivo seleccionado no posee datos.", "ERROR");
		}
	plugins.svyBlockUI.stop()
	plugins.webnotificationsToastr.info("El proceso finalizo correctamente.", "Información");
	
}



/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"A8371AA4-414D-4459-8D83-9AA438A0BFBC"}
 */
function onActionImportarXCodBarras() {

	
	/** @type {JSFoundSet<db:/gpp/herr_equipo>} */
	var fs_equipo= databaseManager.getFoundSet('gpp', 'herr_equipo')

	
	/** @type {JSFoundSet<db:/gpp/herr_herramientas>} */
	var fs_herramientas = databaseManager.getFoundSet('gpp', 'herr_herramientas')
	
	/** @type {JSFoundSet<db:/gpp/herr_marca>} */
	var fs_marca = databaseManager.getFoundSet('gpp', 'herr_marca')
	
	/** @type {JSFoundSet<db:/gpp/herr_modelo>} */
	var fs_modelo = databaseManager.getFoundSet('gpp', 'herr_modelo')
	
	var file_3m = plugins.file.readTXTFile("C:\Users\Gonay\Desktop\equipos.csv")

	if((file_3m != null)&&(file_3m != '')){
		
		var array = file_3m.split("\n")
		var aux1 = array[1].split(';')
		if(aux1.length != 1 ){
			plugins.webnotificationsToastr.error("La cantidad de columnas es incorrecta.", "ERROR");
			
				plugins.svyBlockUI.stop()
		
			return
		}
		else{
			
			var a = array.length
			for (var i=1; i<a;  i++){
				
				if(i%10 == 0)
					plugins.svyBlockUI.show('Cargando Equipo '+ i + ' de ' + a)
				
				var fila_equipo = array[i].split(';')
				var cod_barras = fila_equipo[0]
					
				fs_equipo.find()
				fs_equipo.equipo_cod_barras = cod_barras
				fs_equipo.search()
				if(fs_equipo.getSize() == 0){
					
					var numero_equipo = globals.getNumeroDePosicion(cod_barras,2)+globals.getNumeroDePosicion(cod_barras,1)+globals.getNumeroDePosicion(cod_barras,0)
					var numero_modelo = globals.getNumeroDePosicion(cod_barras,6)+globals.getNumeroDePosicion(cod_barras,5)+globals.getNumeroDePosicion(cod_barras,4)+globals.getNumeroDePosicion(cod_barras,3)
					var numero_marca = globals.getNumeroDePosicion(cod_barras,8)+globals.getNumeroDePosicion(cod_barras,7)
					var numero_herramienta = globals.getNumeroDePosicion(cod_barras,11)+globals.getNumeroDePosicion(cod_barras,10)+globals.getNumeroDePosicion(cod_barras,9)
				
					
					fs_equipo.newRecord()
					fs_equipo.company_id						= scopes.usuario.vg_company_id
					fs_equipo.equipo_cod_barras					= cod_barras
					fs_equipo.equipo_codigo						= utils.stringToNumber(numero_equipo)
					fs_equipo.equipo_fecha_alta					= application.getServerTimeStamp()
					fs_equipo.equipo_tipo						= 1
					
					//Herramienta
					fs_herramientas.find()
					fs_herramientas.herramienta_codigo			= utils.stringToNumber(numero_herramienta)
					fs_herramientas.search()
					if(fs_herramientas.getSize() > 0)
						fs_equipo.herramienta_id 				= fs_herramientas.herramienta_id
					else
						fs_equipo.herramienta_id				= null
						
					//marca
					fs_marca.find()
					fs_marca.marca_codigo						= utils.stringToNumber(numero_marca)
					fs_marca.search()
					if(fs_marca.getSize() > 0)
						fs_equipo.marca_id						= fs_marca.marca_id
					else
						fs_equipo.marca_id						= null
					
					//modelo
					fs_modelo.find()
					fs_modelo.modelo_codigo						= utils.stringToNumber(numero_modelo)
					fs_modelo.search()		
					if(fs_modelo.getSize() > 0)
						fs_equipo.modelo_id						= fs_modelo.modelo_id
					else
						fs_equipo.modelo_id						= null
					
					
					
						fs_equipo.equipo_estado			= 1
						
					
					
					databaseManager.saveData(fs_equipo)
					}
			}
		}
		
		}
		else {
			plugins.webnotificationsToastr.error("El archivo seleccionado no posee datos.", "ERROR");
		}
	plugins.svyBlockUI.stop()
	plugins.webnotificationsToastr.info("El proceso finalizo correctamente.", "Información");
	
}


/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"D159BD3A-5623-4820-B052-A149813EB065"}
 */
function importarPrecios(){
	
	/** @type {JSFoundSet<db:/gpp/herr_equipo>} */
	var fs_equipo= databaseManager.getFoundSet('gpp', 'herr_equipo')
	
	var file_3m = plugins.file.readTXTFile("C:\Users\Gonay\Desktop\herramientas.csv")

	if((file_3m != null)&&(file_3m != '')){
		
		var array = file_3m.split("\n")
		var aux1 = array[1].split(';')
		if(aux1.length != 4 ){
			plugins.webnotificationsToastr.error("La cantidad de columnas es incorrecta.", "ERROR");
			
				plugins.svyBlockUI.stop()
		
			return
		}
		else{
			
			var a = array.length
			for (var i=1; i<a;  i++){
				
				if(i%10 == 0)
					plugins.svyBlockUI.show('Cargando Herramienta '+ i + ' de ' + a)
				
				var fila_herramienta = array[i].split(';')
				
				
				fs_equipo.find()
				fs_equipo.herr_equipo_to_herr_herramientas.herramienta_codigo = utils.stringToNumber(fila_herramienta[0])
				fs_equipo.herr_equipo_to_herr_marca.marca_codigo			 = utils.stringToNumber(fila_herramienta[2])
				fs_equipo.herr_equipo_to_herr_modelo.modelo_codigo			 = utils.stringToNumber(fila_herramienta[1])
				fs_equipo.search()
				
				var nRecordCount = 0
				nRecordCount = databaseManager.getFoundSetCount(fs_equipo);
				for (var index = 1; index <= nRecordCount; index++) {
					var myEquipo = fs_equipo.getRecord(index);
					myEquipo.equipo_precio_base = (utils.stringToNumber(fila_herramienta[3])/100)
					databaseManager.saveData(myEquipo)
				}
				
			}
		}
		
		}
		else {
			plugins.webnotificationsToastr.error("El archivo seleccionado no posee datos.", "ERROR");
		}
	plugins.svyBlockUI.stop()
	plugins.webnotificationsToastr.info("El proceso finalizo correctamente.", "Información");
}
