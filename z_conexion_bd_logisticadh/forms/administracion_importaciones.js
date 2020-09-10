/**
 * 
 *
 * @properties={typeid:24,uuid:"DCAFEC87-A692-488C-A624-6377E5E4D2AB"}
 */
function onActionVolver() {
	application.showForm(forms.main_menu)

}



/**
 *
 * @properties={typeid:24,uuid:"73DF6AF5-0D37-429B-B354-6C7332516144"}
 * @AllowToRunInFind
 * @deprecated 
 */
function onActionImportarCLientes() {
	
	/** @type {JSFoundSet<db:/gpp/core>} */
	var fs_core = databaseManager.getFoundSet('gpp', 'core')
	
	/** @type {JSFoundSet<db:/gpp/core_codigos_postales>} */
	var fs_core_codigos_postales = databaseManager.getFoundSet('gpp', 'core_codigos_postales')
	
	/** @type {JSFoundSet<db:/gpp/vent_clientes>} */
	var fs_clientes = databaseManager.getFoundSet('gpp', 'vent_clientes')
	
	var file_3m = plugins.file.readTXTFile("C:\Users\Gonay\Desktop\clientes.csv") 
	 
	if((file_3m != null)&&(file_3m != '')){
		
		var array = file_3m.split("\n")
		var aux1 = array[1].split(';')
		if(aux1.length != 22 ){
			plugins.webnotificationsToastr.error("La cantidad de columnas es incorrecta.", "ERROR");
			
				plugins.svyBlockUI.stop()
		
			return
		}
		else{
			
			var a = array.length
			for (var i=1; i<a;  i++){
				
				if(i%10 == 0)
					plugins.svyBlockUI.show('Cargando cliente '+ i + ' de ' + a)
				
				var fila_cliente = array[i].split(';')
				
				fs_core.find()
				fs_core.core_num_iibb = fila_cliente[0]
				fs_core.search()
				
				if(fs_core.getSize() > 0){//modificar
					fs_core.core_direccion						= fila_cliente[16]
					fs_core.core_fecha_inicio					= new Date(utils.stringToNumber(fila_cliente[17].substr(6,4)),utils.stringToNumber(fila_cliente[17].substr(3,2))-1,utils.stringToNumber(fila_cliente[17].substr(0,2)))
					fs_core.core_fecha_iva						= new Date(utils.stringToNumber(fila_cliente[4].substr(6,4)),utils.stringToNumber(fila_cliente[4].substr(3,2))-1,utils.stringToNumber(fila_cliente[4].substr(0,2)))
					fs_core.core_telefono						= fila_cliente[12]
					fs_core.core_mail							= fila_cliente[5]
					fs_core.core_web							= fila_cliente[15]
					fs_core.core_celular						= fila_cliente[2]
					fs_core.tipo_doc_id							= 4 //CUIL
					fs_core.core_num_doc						= fila_cliente[0]
					fs_core.core_num_iibb 						= fila_cliente[0]
					fs_core.core_nombre							= fila_cliente[18]
					//fs_core.core_num_iibb						= fila_cliente[20]
					//13 condicion de iva
					
					//Codigo postal
					fs_core_codigos_postales.find()
					fs_core_codigos_postales.cod_postal_codigo = fila_cliente[9]
					fs_core_codigos_postales.search()
					if(fs_core_codigos_postales.getSize() > 0)
						fs_core.cod_postal_id	= fs_core_codigos_postales.cod_postal_id
						
					//Condicion de IVA
					switch (utils.stringToNumber(fila_cliente[10])) {
					case 0: //responsable inscrito
						fs_core.tipo_afip_id = 1
						break;
					case 1://consumidor final
						fs_core.tipo_afip_id = 2
						break;
					case 3://exento
						fs_core.tipo_afip_id = 4
						break;
					case 5://monotributo
						fs_core.tipo_afip_id = 5
						break;
					default:
						fs_core.tipo_afip_id = 0
						break;
					}
					
					
					databaseManager.saveData(fs_core)
					
					fs_clientes.find()
					fs_clientes.core_id = fs_core.core_id
					fs_clientes.search()
					
					fs_clientes.cliente_codigo					= fila_cliente[13]
					fs_clientes.cliente_observacion				= fila_cliente[8]
					fs_clientes.cliente_advertencia				= fila_cliente[3]
					
					
					databaseManager.saveData(fs_clientes)
				}
				else{//crear nuevo
				
					fs_core.newRecord()
					fs_core.company_id							= scopes.usuario.vg_company_id
					fs_core.core_nombre							= fila_cliente[18]
					fs_core.core_razon_social					= fila_cliente[14]
					fs_core.core_direccion						= fila_cliente[16]
					fs_core.core_fecha_inicio					= new Date(utils.stringToNumber(fila_cliente[17].substr(6,4)),utils.stringToNumber(fila_cliente[17].substr(3,2))-1,utils.stringToNumber(fila_cliente[17].substr(0,2)))
					fs_core.core_fecha_iva						= new Date(utils.stringToNumber(fila_cliente[4].substr(6,4)),utils.stringToNumber(fila_cliente[4].substr(3,2))-1,utils.stringToNumber(fila_cliente[4].substr(0,2)))
					fs_core.core_telefono						= fila_cliente[12]
					fs_core.core_mail							= fila_cliente[5]
					fs_core.core_web							= fila_cliente[15]
					fs_core.core_celular						= fila_cliente[2]
					fs_core.tipo_doc_id							= 2 //CUIT
					fs_core.core_num_doc						= fila_cliente[0]
					//fs_core.core_num_iibb						= fila_cliente[20]
					//13 condicion de iva
					
					//Codigo postal
					fs_core_codigos_postales.find()
					fs_core_codigos_postales.cod_postal_codigo = fila_cliente[9]
					fs_core_codigos_postales.search()
					if(fs_core_codigos_postales.getSize() > 0)
						fs_core.cod_postal_id	= fs_core_codigos_postales.cod_postal_id
						
					//Condicion de IVA
					switch (utils.stringToNumber(fila_cliente[10])) {
					case 0: //responsable inscrito
						fs_core.tipo_afip_id = 1
						break;
					case 1://consumidor final
						fs_core.tipo_afip_id = 2
						break;
					case 3://exento
						fs_core.tipo_afip_id = 4
						break;
					case 5://monotributo
						fs_core.tipo_afip_id = 5
						break;
					default:
						fs_core.tipo_afip_id = 0
						break;
					}
					
					
					databaseManager.saveData(fs_core)
					
					fs_clientes.newRecord()
					fs_clientes.company_id						= scopes.usuario.vg_company_id
					fs_clientes.cliente_codigo					= fila_cliente[13]
					fs_clientes.core_id							= fs_core.core_id
					fs_clientes.cliente_observacion				= fila_cliente[8]
					fs_clientes.cliente_advertencia				= fila_cliente[3]
						
					fs_clientes.cliente_estado	= 1
					
					
					databaseManager.saveData(fs_clientes)
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
 * @param {JSEvent} event
 * @deprecated 
 *
 * @properties={typeid:24,uuid:"5293C131-AA16-4837-AE62-6F1D3F87B874"}
 * @AllowToRunInFind
 */
function onActionImportarObras(event) {

	/** @type {JSFoundSet<db:/gpp/vent_obras>} */
	var fs_obras = databaseManager.getFoundSet('gpp', 'vent_obras')
	
	/** @type {JSFoundSet<db:/gpp/vent_clientes>} */
	var fs_clientes = databaseManager.getFoundSet('gpp', 'vent_clientes')
	
	var file_3m = plugins.file.readTXTFile("C:\Users\Gonay\Desktop\obras.csv") 
	 
	if((file_3m != null)&&(file_3m != '')){
		
		var array = file_3m.split("\n")
		var aux1 = array[1].split(';')
		if(aux1.length != 9 ){
			plugins.webnotificationsToastr.error("La cantidad de columnas es incorrecta.", "ERROR");
			
				plugins.svyBlockUI.stop()
		
			return
		}
		else{
			
			var a = array.length
			for (var i=1; i<a;  i++){
				
				if(i%10 == 0)
					plugins.svyBlockUI.show('Cargando obras '+ i + ' de ' + a)
				
				var fila_obra = array[i].split(';')
				
				fs_obras.find()
				fs_obras.obra_codigo = fila_obra[0]
				fs_obras.search()
				
				if(fs_obras.getSize() > 0){//modificar
					
					fs_clientes.find()
					fs_clientes.cliente_codigo	= utils.stringToNumber(fila_obra[6])
					fs_clientes.search()
					
					if(fs_clientes.getSize() > 0){ //si existe el cliente
					
						fs_obras.cliente_id							= fs_clientes.cliente_id
						fs_obras.obra_fecha_inicio					= new Date(utils.stringToNumber(fila_obra[7].substr(6,4)),utils.stringToNumber(fila_obra[7].substr(3,2))-1,utils.stringToNumber(fila_obra[7].substr(0,2)))
						fs_obras.obra_nombre						= fila_obra[8] 
						if(utils.stringToNumber(fila_obra[7].substr(6,4)) > 2017){
							fs_obras.obra_estado					= 1
						}
						else{
							fs_obras.obra_estado					= 2
						}
						
						databaseManager.saveData(fs_obras)
					}
				}
				else{//crear nuevo
				
					fs_clientes.find()
					fs_clientes.cliente_codigo	= utils.stringToNumber(fila_obra[6])
					fs_clientes.search()
					
					if(fs_clientes.getSize() > 0){ //si existe el cliente
					
						fs_obras.newRecord()
						fs_obras.company_id							= scopes.usuario.vg_company_id
						fs_obras.cliente_id							= fs_clientes.cliente_id
						fs_obras.obra_codigo						= utils.stringToNumber(fila_obra[0])
						fs_obras.obra_fecha_inicio					= new Date(utils.stringToNumber(fila_obra[7].substr(6,4)),utils.stringToNumber(fila_obra[7].substr(3,2))-1,utils.stringToNumber(fila_obra[7].substr(0,2)))
						fs_obras.obra_nombre						= fila_obra[8] 
						if(utils.stringToNumber(fila_obra[7].substr(6,4)) > 2017){
							fs_obras.obra_estado					= 1
						}
						else{
							fs_obras.obra_estado					= 2
						}
						
						databaseManager.saveData(fs_obras)
					}
					
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
 *
 * @properties={typeid:24,uuid:"D1E281A5-489B-441B-A5D2-292A117575E4"}
 * @AllowToRunInFind
 * @deprecated 
 */
function onActionChequesBancos() {
	
	/** @type {JSFoundSet<db:/gpp/cheq_cheques>} */
	var fs_cheques = databaseManager.getFoundSet('gpp', 'cheq_cheques')
	
	/** @type {JSFoundSet<db:/gpp/bancos>} */
	var fs_bancos = databaseManager.getFoundSet('gpp', 'bancos')
	
	/** @type {JSFoundSet<db:/gpp/vent_clientes>} */
	var fs_clientes = databaseManager.getFoundSet('gpp', 'vent_clientes')
	
	var file_3m = plugins.file.readTXTFile("C:\Users\Gonay\Desktop\cheques.csv") 
	 
	if((file_3m != null)&&(file_3m != '')){
		
		var array = file_3m.split("\n")
		var aux1 = array[1].split(';')
		if(aux1.length != 18 ){
			plugins.webnotificationsToastr.error("La cantidad de columnas es incorrecta.", "ERROR");
			
				plugins.svyBlockUI.stop()
		
			return
		}
		else{
			
			var a = array.length
			for (var i=1; i<a;  i++){
				
				if(i%10 == 0)
					plugins.svyBlockUI.show('Cargando cheques y bancos '+ i + ' de ' + a)
				
				var fila_cheque = array[i].split(';')
				
				//Bancos
				
				fs_bancos.find()
				fs_bancos.banco_codigo = fila_cheque[7]
				fs_bancos.search()
				
				if(fs_bancos.getSize() > 0){//si existe el banco
					
					fs_bancos.banco_nombre	= fila_cheque[6]
				}
				else{//crear banco
				
					fs_bancos.newRecord()
					fs_bancos.company_id			= scopes.usuario.vg_company_id
					fs_bancos.banco_codigo			= fila_cheque[7]
					fs_bancos.banco_nombre			= fila_cheque[6]
					
				}
				databaseManager.saveData(fs_bancos)
				
				//cheques
				fs_cheques.find()
				fs_cheques.cheque_numero		= fila_cheque[14]
				fs_cheques.search()
				
				if(fs_cheques.getSize() > 0){//modificar cheque
					
					fs_clientes.find()
					fs_clientes.cliente_codigo	= utils.stringToNumber(fila_cheque[16])
					fs_clientes.search()
					
					if(fs_clientes.getSize() > 0){ //si existe el cliente
						fs_cheques.banco_id							= fs_bancos.banco_id
						fs_cheques.cheque_clearing_fecha_original	= new Date(utils.stringToNumber(fila_cheque[10].substr(6,4)),utils.stringToNumber(fila_cheque[10].substr(3,2))-1,utils.stringToNumber(fila_cheque[10].substr(0,2)))
						fs_cheques.cheque_estado					= fila_cheque[5]
						fs_cheques.cheque_fecha_acreditacion		= new Date(utils.stringToNumber(fila_cheque[13].substr(6,4)),utils.stringToNumber(fila_cheque[13].substr(3,2))-1,utils.stringToNumber(fila_cheque[13].substr(0,2)))
						fs_cheques.cheque_fecha_emision				= new Date(utils.stringToNumber(fila_cheque[3].substr(6,4)),utils.stringToNumber(fila_cheque[3].substr(3,2))-1,utils.stringToNumber(fila_cheque[3].substr(0,2)))
						fs_cheques.cheque_fecha_vencimiento			= new Date(utils.stringToNumber(fila_cheque[15].substr(6,4)),utils.stringToNumber(fila_cheque[15].substr(3,2))-1,utils.stringToNumber(fila_cheque[15].substr(0,2)))
						fs_cheques.cheque_importe					= fila_cheque[9]
						fs_cheques.cheque_numero					= fila_cheque[14]
						fs_cheques.cheque_observacion				= fila_cheque[11]
						fs_cheques.cheque_tipo_valor				= fila_cheque[4]
						fs_cheques.cliente_id						= fs_clientes.cliente_id
					
						databaseManager.saveData(fs_cheques)
					
					}
				}
				else{//Nuevo cheque
					
					fs_clientes.find()
					fs_clientes.cliente_codigo	= utils.stringToNumber(fila_cheque[16])
					fs_clientes.search()
					
					if(fs_clientes.getSize() > 0){ //si existe el cliente
					
						fs_cheques.newRecord()
						fs_cheques.company_id						= scopes.usuario.vg_company_id
						fs_cheques.banco_id							= fs_bancos.banco_id
						fs_cheques.cheque_clearing_fecha_original	= new Date(utils.stringToNumber(fila_cheque[10].substr(6,4)),utils.stringToNumber(fila_cheque[10].substr(3,2))-1,utils.stringToNumber(fila_cheque[10].substr(0,2)))
						fs_cheques.cheque_estado					= fila_cheque[5]
						fs_cheques.cheque_fecha_acreditacion		= new Date(utils.stringToNumber(fila_cheque[13].substr(6,4)),utils.stringToNumber(fila_cheque[13].substr(3,2))-1,utils.stringToNumber(fila_cheque[13].substr(0,2)))
						fs_cheques.cheque_fecha_emision				= new Date(utils.stringToNumber(fila_cheque[3].substr(6,4)),utils.stringToNumber(fila_cheque[3].substr(3,2))-1,utils.stringToNumber(fila_cheque[3].substr(0,2)))
						fs_cheques.cheque_fecha_vencimiento			= new Date(utils.stringToNumber(fila_cheque[15].substr(6,4)),utils.stringToNumber(fila_cheque[15].substr(3,2))-1,utils.stringToNumber(fila_cheque[15].substr(0,2)))
						fs_cheques.cheque_importe					= fila_cheque[9]
						fs_cheques.cheque_numero					= fila_cheque[14]
						fs_cheques.cheque_observacion				= fila_cheque[11]
						fs_cheques.cheque_tipo_valor				= fila_cheque[4]
						fs_cheques.cliente_id						= fs_clientes.cliente_id
					
						databaseManager.saveData(fs_cheques)
					}
					
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
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F423AB0D-D125-4A09-B3F0-A5EEE9F6ED7B"}
 * @AllowToRunInFind
 */
function onActionImportarEquipamentos(event) {
	
	/** @type {JSFoundSet<db:/gpp/herr_equipo>} */
	var fs_herr_equipo = databaseManager.getFoundSet('gpp', 'herr_equipo')
	
	/** @type {JSFoundSet<db:/gpp/herr_herramientas>} */
	var fs_herr_herramientas = databaseManager.getFoundSet('gpp', 'herr_herramientas')
	
	/** @type {JSFoundSet<db:/gpp/herr_modelo>} */
	var fs_herr_modelo = databaseManager.getFoundSet('gpp', 'herr_modelo')
	
	/** @type {JSFoundSet<db:/gpp/herr_marca>} */
	var fs_herr_marca = databaseManager.getFoundSet('gpp', 'herr_marca')
	
	/** @type {JSFoundSet<db:/gpp/herr_categoria>} */
	var fs_herr_categoria = databaseManager.getFoundSet('gpp', 'herr_categoria')
	
	/** @type {JSFoundSet<db:/gpp/herr_alimentacion>} */
	var fs_herr_alimentacion = databaseManager.getFoundSet('gpp', 'herr_alimentacion')
	
	/** @type {JSFoundSet<db:/logisticadh/batchtext>} */
	var fs_bacthtext = databaseManager.getFoundSet('logisticadh', 'batchtext')
	
	elements.btn_e.enabled = false
	elements.btn_t.enabled = false
	elements.btn_v.enabled = false
	
	plugins.webnotificationsToastr.info("Comienza el proceso de importacion")
	
	fs_bacthtext.loadAllRecords()
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(fs_bacthtext);
	for (var index = 1; index <= nRecordCount; index++) {
		var myEquipo = fs_bacthtext.getRecord(index);
		//ANALISIS CODIGO DE BARRAS
		var vl_codBarras 		= myEquipo.serialnr
		var vl_codigo 			= utils.stringRight(vl_codBarras,3)
		var vl_modelo			= utils.stringLeft(utils.stringRight(vl_codBarras,7),4) 
		var vl_herramienta 		
		var vl_marca			
		var vl_categoria
		if(vl_codBarras.length > 13){
			vl_herramienta 		= utils.stringLeft(vl_codBarras,1)+utils.stringRight(utils.stringLeft(vl_codBarras,6),3)
			vl_marca			= utils.stringRight(utils.stringLeft(vl_codBarras,2),1)+utils.stringRight(utils.stringLeft(vl_codBarras,8),2)
			vl_categoria 		= utils.stringRight(utils.stringLeft(vl_codBarras,3),1)
		}
		else{
			vl_herramienta 		= utils.stringRight(utils.stringLeft(vl_codBarras,4),3)
			vl_marca			= utils.stringRight(utils.stringLeft(vl_codBarras,6),2)
			vl_categoria 		= utils.stringLeft(vl_codBarras,1)
		}
		
		
		
		
		fs_herr_equipo.find()
		fs_herr_equipo.equipo_cod_barras = vl_codBarras
		fs_herr_equipo.search()
		if(fs_herr_equipo.getSize() > 0){//Si el equipo ya existe solo actualizamos el precio
			fs_herr_equipo.equipo_precio_base = myEquipo.batchtext_to_item_1_equipo_to_herramienta.price
			fs_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_descripcion = myEquipo.batchtext_to_item_1_equipo_to_herramienta.comment
			databaseManager.saveData()
			
		}
		else{//Si NO encuentra el codigo de barras crea un nuevo equipo
			
			fs_herr_equipo.newRecord()
			fs_herr_equipo.company_id					= scopes.usuario.vg_company_id
			fs_herr_equipo.equipo_cod_barras			= vl_codBarras
			fs_herr_equipo.equipo_codigo				= vl_codigo
			fs_herr_equipo.equipo_descripcion			= myEquipo.batchtext_to_item_1_equipo_to_herramienta.comment
			fs_herr_equipo.equipo_estado				= 1//Activo
			fs_herr_equipo.equipo_fecha_alta			= new Date(2020,0,1)
			fs_herr_equipo.equipo_precio_base			= myEquipo.batchtext_to_item_1_equipo_to_herramienta.price
			fs_herr_equipo.equipo_tipo					= 1//Alquiler
			fs_herr_equipo.deposito_id					= 1
			//Herramienta
			fs_herr_herramientas.find()
			fs_herr_herramientas.herramienta_codigo     = vl_herramienta
			fs_herr_herramientas.search()
			if(fs_herr_herramientas.getSize() > 0){
				fs_herr_equipo.herramienta_id			= fs_herr_herramientas.herramienta_id
			}
			else{
				fs_herr_herramientas.newRecord()
				fs_herr_herramientas.company_id				= scopes.usuario.vg_company_id
				fs_herr_categoria.find()
				fs_herr_categoria.categoria_codigo			= vl_categoria
				fs_herr_categoria.search()
				if(fs_herr_categoria.getSize() > 0 ){
					fs_herr_herramientas.categoria_herr_id		= fs_herr_categoria.categoria_herr_id
				}
				else{
					fs_herr_herramientas.categoria_herr_id		= 1
				}
				fs_herr_herramientas.herramienta_codigo		= vl_herramienta
				fs_herr_herramientas.herramienta_descripcion= myEquipo.batchtext_to_item_1_equipo_to_herramienta.comment
				fs_herr_herramientas.herramienta_nombre		= myEquipo.batchtext_to_item_1_equipo_to_herramienta.name
				fs_herr_herramientas.herramienta_precio_base= myEquipo.batchtext_to_item_1_equipo_to_herramienta.price
				databaseManager.saveData(fs_herr_herramientas)
				fs_herr_equipo.herramienta_id			= fs_herr_herramientas.herramienta_id
			}
			//MARCA
			fs_herr_marca.find()
			fs_herr_marca.marca_codigo		= vl_marca
			fs_herr_marca.search()
			if(fs_herr_marca.getSize()>0){
				fs_herr_equipo.marca_id						= fs_herr_marca.marca_id
			}
			else{
				fs_herr_marca.newRecord()
				fs_herr_marca.company_id					= scopes.usuario.vg_company_id
				fs_herr_marca.marca_codigo				= vl_marca
				fs_herr_marca.marca_nombre				= myEquipo.batchtext_to_item_1_equipo_to_herramienta.manufacturer
				databaseManager.saveData(fs_herr_marca)
				fs_herr_equipo.marca_id					= fs_herr_marca.marca_id
			}
			//Modelo
			fs_herr_modelo.find()
			fs_herr_modelo.modelo_codigo			= vl_modelo
			fs_herr_modelo.search()
			if(fs_herr_modelo.getSize()>0){
				fs_herr_equipo.modelo_id					= fs_herr_modelo.modelo_id
			}
			else{
				fs_herr_modelo.newRecord()
				fs_herr_modelo.company_id					= scopes.usuario.vg_company_id
				fs_herr_modelo.modelo_codigo				= vl_modelo
				fs_herr_modelo.modelo_nombre				= "Pendiente de renombrar"
				databaseManager.saveData(fs_herr_modelo)
				fs_herr_equipo.modelo_id					= fs_herr_modelo.modelo_id
			}
			
			databaseManager.saveData()
		}
		
		//TIPO DE ALIMENTACION DE LA HERRAMIENTA
		fs_herr_alimentacion.find()
		fs_herr_alimentacion.alimentacion_nombre = myEquipo.batchtext_to_item_1_equipo_to_herramienta.warning
		fs_herr_alimentacion.search()
		if(fs_herr_alimentacion.getSize() > 0){
			fs_herr_equipo.alimentacion_id = fs_herr_alimentacion.alimentacion_id
		}
		else{
			fs_herr_alimentacion.newRecord()
			fs_herr_alimentacion.company_id					= scopes.usuario.vg_company_id
			fs_herr_alimentacion.alimentacion_nombre		= myEquipo.batchtext_to_item_1_equipo_to_herramienta.warning
			databaseManager.saveData()
			fs_herr_equipo.alimentacion_id = fs_herr_alimentacion.alimentacion_id
		}
		databaseManager.saveData()
		
	}
	elements.btn_e.enabled = true
	elements.btn_t.enabled = true
	elements.btn_v.enabled = true
	
	plugins.webnotificationsToastr.info("Finaliza el proceso de importacion")
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"0A074E11-2C21-40BB-B1B5-BEBAE65FAF41"}
 * @AllowToRunInFind
 */
function onActionTodo(event) {
	
	/** @type {JSFoundSet<db:/logisticadh/Customer>} */
	var fs_customer = databaseManager.getFoundSet('logisticadh', 'Customer')
	
	/** @type {JSFoundSet<db:/gpp/vent_clientes>} */
	var fs_vent_clientes = databaseManager.getFoundSet('gpp', 'vent_clientes')
	
	/** @type {JSFoundSet<db:/gpp/core>} */
	var fs_core = databaseManager.getFoundSet('gpp', 'core')
	
	/** @type {JSFoundSet<db:/gpp/core_codigos_postales>} */
	var fs_core_codigos_postales = databaseManager.getFoundSet('gpp', 'core_codigos_postales')
	
	/** @type {JSFoundSet<db:/gpp/vent_obras>} */
	var fs_obras = databaseManager.getFoundSet('gpp', 'vent_obras')
	
	/** @type {JSFoundSet<db:/gpp/core_adjuntos>} */
	var fs_core_adjuntos = databaseManager.getFoundSet('gpp', 'core_adjuntos')
	
	/** @type {JSFoundSet<db:/gpp/bancos>} */
	var fs_banco = databaseManager.getFoundSet('gpp', 'bancos')
	
	/** @type {JSFoundSet<db:/gpp/cheq_cheques>} */
	var fs_cheques = databaseManager.getFoundSet('gpp', 'cheq_cheques')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobantes>} */
	var fs_comprobantes = databaseManager.getFoundSet('gpp', 'vent_comprobantes')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobantes>} */
	var fs_comprobantes_aux = databaseManager.getFoundSet('gpp', 'vent_comprobantes')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} */
	var fs_comprobantes_herramientas_aux = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')
	
	/** @type {JSFoundSet<db:/gpp/herr_equipo>} */
	var fs_herr_equipos = databaseManager.getFoundSet('gpp', 'herr_equipo')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} */
		var fs_comprobantes_herr = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')
		
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} */
	var fs_comprobantes_herr_dev = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')
	
	
	fs_customer.loadAllRecords()
	fs_customer.sort('internalid desc')
	
	var spinner = 'Chasing dots'
	var overlayOpacity = 0.7
	plugins.svyBlockUI.overlayColor = "black"
	plugins.svyBlockUI.overlayOpacity = overlayOpacity
	plugins.svyBlockUI.spinner = spinner
	plugins.svyBlockUI.spinnerBgColor = "yellow"
	plugins.svyBlockUI.show("Cargando...")
	
	var nCount = 0
	nCount = databaseManager.getFoundSetCount(fs_customer);
	for (var i = 1; i <= nCount; i++) {
		var myCliente = fs_customer.getRecord(i);
		
		
		plugins.svyBlockUI.show("Código de Cliente " + myCliente.code+ " - "+ Math.round((i*100)/nCount)+" %")
		
		//Creamos el core
		fs_core.find()
		fs_core.core_num_doc 			= 	myCliente.taxregnr
		fs_core.search()
		if(fs_core.getSize() == 0){//Si no existe el registro lo creamos
			fs_core.newRecord()
			fs_core.core_fax 			= myCliente.fax 
			fs_core.core_web			= myCliente.website 
			fs_core.core_mail			= myCliente.email 
			fs_core.core_celular 		= myCliente.mobile 
			fs_core.core_telefono		= myCliente.phone 
			fs_core.core_direccion		= myCliente.address 
			fs_core.core_nombre			= myCliente.name 
			fs_core.core_razon_social	= myCliente.fantasyname 
			fs_core.core_num_doc		= myCliente.taxregnr
			fs_core.core_fecha_inicio_act = myCliente.startcycledate
			fs_core.tipo_doc_id			= 2//CUIT
			fs_core.company_id			= scopes.usuario.vg_company_id
			//Codigo postal
			fs_core_codigos_postales.find()
			fs_core_codigos_postales.cod_postal_codigo = myCliente.zipcode
			fs_core_codigos_postales.search()
			if(fs_core_codigos_postales.getSize() > 0){
				fs_core.cod_postal_id	= fs_core_codigos_postales.cod_postal_id
			}
			databaseManager.saveData(fs_core)
		}
		
		
		fs_vent_clientes.find()
		fs_vent_clientes.cliente_codigo = utils.stringToNumber(myCliente.code)
		fs_vent_clientes.search()
		if(fs_vent_clientes.getSize() > 0){//Si el cliente existe solo actualizamos
			fs_vent_clientes.core_id						= fs_core.core_id
			fs_vent_clientes.cliente_advertencia			= myCliente.warning
			fs_vent_clientes.cliente_estado					= 1
			fs_vent_clientes.cliente_factura_pendiente		= 0
			fs_vent_clientes.cliente_facturacion_mensual 	= 0
			fs_vent_clientes.cliente_observacion			= myCliente.comment
		}
		else{//Si el cliente NO existe lo creamos nuevo
			fs_vent_clientes.newRecord()
			fs_vent_clientes.cliente_codigo 			= utils.stringToNumber(myCliente.code)
			fs_vent_clientes.cliente_estado				= 1
			fs_vent_clientes.cliente_factura_pendiente	= 0
			fs_vent_clientes.cliente_facturacion_mensual= 0
			fs_vent_clientes.cliente_observacion		= myCliente.comment
			fs_vent_clientes.cliente_advertencia		= myCliente.warning
			fs_vent_clientes.company_id					= scopes.usuario.vg_company_id
			fs_vent_clientes.core_id					= fs_core.core_id
		}
		databaseManager.saveData(fs_vent_clientes)
		
		
		//Si el cliente tiene obras
		if(utils.hasRecords(myCliente.customer_to_work_1_cliente_to_obras)){
			var cantObras = 0
			cantObras = databaseManager.getFoundSetCount(myCliente.customer_to_work_1_cliente_to_obras);
			for (var i_obras = 1; i_obras <= cantObras; i_obras++) {
				var myObra = myCliente.customer_to_work_1_cliente_to_obras.getRecord(i_obras);
				fs_obras.find()
				fs_obras.obra_codigo		= myObra.code
				fs_obras.search()
				if(fs_obras.getSize() == 0){
					fs_obras.newRecord()
					fs_obras.cliente_id 			= fs_vent_clientes.cliente_id
					fs_obras.company_id				= scopes.usuario.vg_company_id
					fs_obras.obra_codigo			= myObra.code
					fs_obras.obra_estado			= 1
					fs_obras.obra_fecha_inicio		= myObra._date
					fs_obras.obra_nombre			= myObra.name
					databaseManager.saveData(fs_obras)
				}
			}
		}
		
		
		//SI tiene adjuntos
		if(utils.hasRecords(myCliente.customer_to_attach_1_cliente_to_adjunto)){
			var cant_adjuntos = 0
			cant_adjuntos = databaseManager.getFoundSetCount(myCliente.customer_to_attach_1_cliente_to_adjunto);
			for (var i_adjuntos = 1; i_adjuntos <= cant_adjuntos; i_adjuntos++) {
				var myAdjunto = myCliente.customer_to_attach_1_cliente_to_adjunto.getRecord(i_adjuntos);
				
				fs_core_adjuntos.find()
				fs_core_adjuntos.adjunto_nombre 	= myAdjunto.comment
				fs_core_adjuntos.adjunto_clave 		= "cliente"
				fs_core_adjuntos.adjunto_clave_id	= fs_vent_clientes.cliente_id
				fs_core_adjuntos.search()
				if(fs_core_adjuntos.getSize() == 0){
					fs_core_adjuntos.newRecord()
					fs_core_adjuntos.adjunto_clave			= "cliente"
					fs_core_adjuntos.adjunto_clave_id		= fs_vent_clientes.cliente_id
					fs_core_adjuntos.company_id				= scopes.usuario.vg_company_id
					fs_core_adjuntos.adjunto_dato			= myAdjunto.value
					fs_core_adjuntos.adjunto_fecha			= myAdjunto.transdate
					fs_core_adjuntos.adjunto_nombre			= myAdjunto.comment
					fs_core_adjuntos.adjunto_observacion	= "Importado "+utils.dateFormat(application.getServerTimeStamp(), 'yyyy-MM-dd') 
					databaseManager.saveData(fs_core_adjuntos)
				}
			}
		}
		
		
		//Recorremos alquileres
		if(utils.hasRecords(myCliente.customer_to_rental_1_cliente_to_alquiler)){
			var cant_alquileres = 0
			cant_alquileres = databaseManager.getFoundSetCount(myCliente.customer_to_rental_1_cliente_to_alquiler);
			for (var i_alquileres = 1; i_alquileres <= cant_alquileres; i_alquileres++) {
				var myAlquiler = myCliente.customer_to_rental_1_cliente_to_alquiler.getRecord(i_alquileres);
				fs_comprobantes.find()
				fs_comprobantes.comp_codigo 	= 1
				fs_comprobantes.serialnumber	= myAlquiler.sernr
				fs_comprobantes.search()
				if(fs_comprobantes.getSize() == 0 ){//NUEVO ALQUILER
					fs_comprobantes.newRecord()
					fs_comprobantes.company_id					= scopes.usuario.vg_company_id
					fs_comprobantes.cliente_id					= fs_vent_clientes.cliente_id
					fs_comprobantes.comp_codigo					= 1//alquiler
					if(myAlquiler.status == 1){
						fs_comprobantes.comp_estado_id				= 1//abierto
					}
					else{
						fs_comprobantes.comp_estado_id				= 3//cerrado
					}
					fs_comprobantes.comp_etiqueta				= myAlquiler.labels
					fs_comprobantes.serialnumber				= myAlquiler.sernr
					fs_comprobantes.comp_fecha_emision			= myAlquiler.transdate
					fs_comprobantes.comp_fecha_emision.setHours(myAlquiler.transtime.getHours())
					fs_comprobantes.comp_fecha_emision.setMinutes(myAlquiler.transtime.getMinutes())
					fs_comprobantes.comp_fec_ult_facturacion	= fs_comprobantes.comp_fecha_emision
					fs_comprobantes.comp_imp_total				= (Math.round((myAlquiler.total*100)))/100
					fs_comprobantes.comp_numero					= utils.stringToNumber(utils.stringRight(utils.numberFormat(myAlquiler.sernr,'0000'),4))
					fs_comprobantes.comp_observacion			= myAlquiler.comment
					fs_comprobantes.comp_pv						= 1
					fs_obras.find()
					fs_obras.obra_codigo = myAlquiler.work
					fs_obras.search()
					if(fs_obras.getSize() > 0){
						fs_comprobantes.obra_id					= fs_obras.obra_id
					}
					databaseManager.saveData(fs_comprobantes)
					
					
					//Guardamos comprobantes datos del cliente
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.newRecord()
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.company_id				= scopes.usuario.vg_company_id
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_celular			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_celular
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_direccion		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_direccion
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_fax				= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_fax
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_mail			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_mail
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_nombre			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_nombre
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_num_doc			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_num_doc
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_observacion		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_observacion
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_razon_social	= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_razon_social
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_telefono		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_telefono
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cod_postal_id			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.cod_postal_id
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.comp_id					= fs_comprobantes.comp_id
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.tipo_afip_id			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.tipo_afip_id
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.tipo_doc_id				= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.tipo_doc_id 
					if(fs_comprobantes.obra_id != null)
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.obra_nombre				= fs_comprobantes.vent_comprobantes_to_vent_obras.obra_nombre
					databaseManager.saveData(fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos)
					
					//Guardamos registros de herramientas a alquilar
					var cantidad_item_alquilados = 0
					cantidad_item_alquilados = databaseManager.getFoundSetCount(myAlquiler.rental_to_rentalitemrow_1_alquiler_to_item);
					for (var i_item_alquilado = 1; i_item_alquilado <= cantidad_item_alquilados; i_item_alquilado++) {
						var myHerramienta = myAlquiler.rental_to_rentalitemrow_1_alquiler_to_item.getRecord(i_item_alquilado);
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.newRecord()
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.company_id					= scopes.usuario.vg_company_id
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.comp_comentario_entrega		= myHerramienta.deliverycomment
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.comp_id						= fs_comprobantes.comp_id
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.comp_precio					= (Math.round((myHerramienta.price*100)))/100
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.rowidnro						= myHerramienta.rownr
						fs_herr_equipos.find()
						fs_herr_equipos.equipo_cod_barras	= myHerramienta.serialnr
						fs_herr_equipos.search()
						if(fs_herr_equipos.getSize() > 0){
							fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.equipo_id				= fs_herr_equipos.equipo_id
							//Cambiamos estado de equipo
							if(myAlquiler.status == 1){//Solo si esta alquilado
								fs_herr_equipos.equipo_estado 	= 7 //alquilado
								fs_herr_equipos.comp_id			= fs_comprobantes.comp_id
								databaseManager.saveData(fs_herr_equipos)
							}
						}
						
						databaseManager.saveData(fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas)

						
					}
				}
			}
		}
		
		
		//recorremos devoluciones
		if(utils.hasRecords(myCliente.customer_to_rentalreturn_1_cliente_to_devolucion)){
			var cant_devoluciones = 0
			cant_devoluciones = databaseManager.getFoundSetCount(myCliente.customer_to_rentalreturn_1_cliente_to_devolucion);
			for (var i_devoluciones = 1; i_devoluciones <= cant_devoluciones; i_devoluciones++) {
				var myDevolucion = myCliente.customer_to_rentalreturn_1_cliente_to_devolucion.getRecord(i_devoluciones);
				fs_comprobantes.find()
				fs_comprobantes.comp_codigo 	= 2
				fs_comprobantes.serialnumber	= myDevolucion.sernr
				fs_comprobantes.search()
				if(fs_comprobantes.getSize() == 0 ){//NUEVO devolucion
					//Guardamos el comprobante
					fs_comprobantes.newRecord()
					fs_comprobantes.company_id					= scopes.usuario.vg_company_id
					fs_comprobantes.cliente_id					= fs_vent_clientes.cliente_id
					fs_comprobantes.serialnumber				= myDevolucion.sernr
					fs_comprobantes.comp_codigo					= 2
					fs_comprobantes.comp_estado_id				= 5
					fs_comprobantes.comp_fecha_emision			= myDevolucion.transdate
					fs_comprobantes.comp_fecha_emision.setHours(myDevolucion.transtime.getHours())
					fs_comprobantes.comp_fecha_emision.setMinutes(myDevolucion.transtime.getMinutes())			
					fs_comprobantes.comp_imp_total				= (Math.round((myDevolucion.total*100)))/100
					fs_comprobantes.comp_numero					= utils.stringToNumber(utils.stringRight(utils.numberFormat(myDevolucion.sernr,'0000'),4))
					fs_comprobantes.comp_pv						= 1
					fs_comprobantes.comp_imp_alqu				= (Math.round((myDevolucion.rentalsalessubtotal*100)))/100
					fs_comprobantes.comp_imp_ventas				= (Math.round((myDevolucion.salessubtotal*100)))/100
					fs_comprobantes.comp_imp_iva2				= (Math.round((myDevolucion.vattotal*100)))/100
					fs_obras.find()
					fs_obras.obra_codigo = myDevolucion.works
					fs_obras.search()
					if(fs_obras.getSize() > 0){
						fs_comprobantes.obra_id					= fs_obras.obra_id
					}
					databaseManager.saveData(fs_comprobantes)
					
					
					//Guardamos comprobantes datos del cliente
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.newRecord()
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.company_id				= scopes.usuario.vg_company_id
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_celular			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_celular
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_direccion		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_direccion
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_fax				= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_fax
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_mail			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_mail
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_nombre			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_nombre
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_num_doc			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_num_doc
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_observacion		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_observacion
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_razon_social	= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_razon_social
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_telefono		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_telefono
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cod_postal_id			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.cod_postal_id
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.comp_id					= fs_comprobantes.comp_id
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.tipo_afip_id			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.tipo_afip_id
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.tipo_doc_id				= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.tipo_doc_id 
					databaseManager.saveData(fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos)
					
					//Guardamos registros de herramientas a devolver
					var cant_herramientas_devol = 0
					cant_herramientas_devol = databaseManager.getFoundSetCount(myDevolucion.rentalreturn_to_rentalreturnitemrow_1_devolucion_to_item);
					for (var i_herram_devol = 1; i_herram_devol <= cant_herramientas_devol; i_herram_devol++) {
						var myHerramienta_devuelta = myDevolucion.rentalreturn_to_rentalreturnitemrow_1_devolucion_to_item.getRecord(i_herram_devol);
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.newRecord()
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.company_id					= scopes.usuario.vg_company_id
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.comp_comentario_entrega		= myHerramienta_devuelta.comment
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.comp_id						= fs_comprobantes.comp_id
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.rowidnro						= myHerramienta_devuelta.rownr
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.comp_precio					= (Math.round((myHerramienta_devuelta.price*100)))/100
						fs_herr_equipos.find()
						fs_herr_equipos.equipo_cod_barras	= myHerramienta_devuelta.serialnr
						fs_herr_equipos.search()
						if(fs_herr_equipos.getSize() > 0){
							fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.equipo_id				= fs_herr_equipos.equipo_id
						}
						//Buscamos el alquiler donde pertenece
						fs_comprobantes_herramientas_aux.find()
						fs_comprobantes_herramientas_aux.vent_comprobante_herramientas_to_vent_comprobantes.comp_estado_id = 3//Alquileres cerrados
						fs_comprobantes_herramientas_aux.equipo_id	= fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.equipo_id
						fs_comprobantes_herramientas_aux.vent_comprobante_herramientas_to_vent_comprobantes.comp_fecha_emision = '<'+ utils.dateFormat(myDevolucion.transdate, 'yyyy-MM-dd') + ' 00:00:00'
						fs_comprobantes_herramientas_aux.search()
						fs_comprobantes_herramientas_aux.sort('comp_herramienta_id desc')
						if(fs_comprobantes_herramientas_aux.getSize() > 0){
							fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.comp_id_padre				= fs_comprobantes_herramientas_aux.vent_comprobante_herramientas_to_vent_comprobantes.comp_id
							fs_comprobantes_herramientas_aux.comp_devolucion = fs_comprobantes.comp_id//Marcamos herramienta con el id de la devolucion
							databaseManager.saveData(fs_comprobantes_herramientas_aux)
						}
						
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.comp_dias_alquiler			= myHerramienta_devuelta.days + myHerramienta_devuelta.weekenddays+myHerramienta_devuelta.holidays
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.comp_dias_facturados			= myHerramienta_devuelta.days
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas.comp_comentario_entrega		= myHerramienta_devuelta.comment
						databaseManager.saveData(fs_comprobantes.vent_comprobantes_to_vent_comprobante_herramientas)
					}
						
				
					//Guardar productos
					var cant_devol_prd = 0
					cant_devol_prd = databaseManager.getFoundSetCount(myDevolucion.rentalreturn_to_rentalreturnsalesrow_1_devoluciones_to_ventas);
					for (var i_prd_devol = 1; i_prd_devol <= cant_devol_prd; i_prd_devol++) {
						var myProducto = myDevolucion.rentalreturn_to_rentalreturnsalesrow_1_devoluciones_to_ventas.getRecord(i_prd_devol);
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos.newRecord()
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos.company_id 				= scopes.usuario.vg_company_id
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos.comp_id					= fs_comprobantes.comp_id
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos.comp_precio				= (Math.round((myProducto.price*100)))/100
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos.comp_cantidad			= myProducto.qty
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos.comp_prod_nombre		= myProducto.artname
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos.comp_prod_unidad		= myProducto.unit
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos.comp_prod_num_serie		= myProducto.artcode
						databaseManager.saveData(fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos)
					}
				}
			}
		
		}
		
		
		//Recorremos facturas y recibos
		if(utils.hasRecords(myCliente.customer_to_invoice_1_cliente_to_factura)){
			var cant_orden_venta = 0
			cant_orden_venta = databaseManager.getFoundSetCount(myCliente.customer_to_invoice_1_cliente_to_factura);
			for (var i_orden_venta = 1; i_orden_venta <= cant_orden_venta; i_orden_venta++) {
				var myFactura = myCliente.customer_to_invoice_1_cliente_to_factura.getRecord(i_orden_venta);
				fs_comprobantes.find()
				fs_comprobantes.comp_codigo 	= 5
				fs_comprobantes.serialnumber	= myFactura.sernr
				fs_comprobantes.search()
				if(fs_comprobantes.getSize() == 0 ){//NUEVO factura
					fs_comprobantes.newRecord()
					fs_comprobantes.company_id					= scopes.usuario.vg_company_id
					fs_comprobantes.cliente_id					= fs_vent_clientes.cliente_id
					fs_comprobantes.serialnumber				= myFactura.sernr
					fs_comprobantes.comp_codigo					= 5
					fs_comprobantes.comp_fecha_emision			= myFactura.transdate
					fs_comprobantes.comp_fecha_emision.setHours(myFactura.transtime.getHours())
					fs_comprobantes.comp_fecha_emision.setMinutes(myFactura.transtime.getMinutes())	
					fs_comprobantes.comp_imp_total				= (Math.round((myFactura.total*100)))/100
					fs_comprobantes.comp_numero					= utils.stringToNumber(utils.stringRight(utils.numberFormat(myFactura.sernr,'0000'),4))
					fs_comprobantes.comp_observacion			= myFactura.labels
					fs_comprobantes.comp_pv						= 1
					fs_comprobantes.comp_imp_alqu				= 0
					fs_comprobantes.comp_imp_ventas				= 0
					fs_comprobantes.comp_imp_grav2				= myFactura.subtotal
					fs_comprobantes.comp_imp_iva2				= myFactura.vattotal
					fs_comprobantes.comp_imp_total				= myFactura.total 
					fs_comprobantes.comp_cae					= myFactura.invoice_to_salescai_1_factura_to_cae.cae
					fs_comprobantes.comp_cae_vencimiento		= myFactura.invoice_to_salescai_1_factura_to_cae.caeduedate
					fs_comprobantes.consulta_afip				= myFactura.invoice_to_salescai_1_factura_to_cae.transdate
					
					fs_comprobantes.comp_condicion				= utils.stringToNumber(myFactura.payterm)
					if(myFactura.saldo <= 0){
						fs_comprobantes.comp_estado_id				= 7//Cerrado
					}
					else{
						fs_comprobantes.comp_estado_id				= 6 //Pendiente
					}
					fs_comprobantes.comp_fecha_vencimiento		= myFactura.duedate
					fs_comprobantes.comp_observacion			= "taxregnr:"+myFactura.taxregnr+"/n"+
																  "officialsernr"+myFactura.officialsernr+"/n"+
																  "taxregtype"+myFactura.taxregtype+"/n"+
																  "idtype"+myFactura.idtype+"/n"
																  
					databaseManager.saveData(fs_comprobantes)
				
					
					//Guardamos comprobantes datos del cliente
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.newRecord()
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.company_id				= scopes.usuario.vg_company_id
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_celular			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_celular
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_direccion		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_direccion
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_fax				= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_fax
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_mail			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_mail
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_nombre			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_nombre
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_num_doc			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_num_doc
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_observacion		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_observacion
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_razon_social	= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_razon_social
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_telefono		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_telefono
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cod_postal_id			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.cod_postal_id
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.comp_id					= fs_comprobantes.comp_id
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.tipo_afip_id			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.tipo_afip_id
					fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos.tipo_doc_id				= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.tipo_doc_id 
					
					databaseManager.saveData(fs_comprobantes.vent_comprobantes_to_vent_comprobante_datos)
					

					
					//Guardar productos
					var cant_productos_fact = 0
					cant_productos_fact = databaseManager.getFoundSetCount(myFactura.invoice_to_invoiceitemrow_1_factura_to_item);
					for (var i_prd_fact = 1; i_prd_fact <= cant_productos_fact; i_prd_fact++) {
						var myProducto_fct = myFactura.invoice_to_invoiceitemrow_1_factura_to_item.getRecord(i_prd_fact);
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos.newRecord()
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos.company_id 			= scopes.usuario.vg_company_id
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos.comp_id				= fs_comprobantes.comp_id
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos.comp_precio			= (Math.round((myProducto_fct.price*100)))/100
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos.comp_cantidad		= myProducto_fct.qty
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos.comp_prod_nombre	= myProducto_fct.name
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos.comp_prod_unidad	= myProducto_fct.unit
						fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos.comp_prod_num_serie	= myProducto_fct.artcode
						databaseManager.saveData(fs_comprobantes.vent_comprobantes_to_vent_comprobante_productos)
					}
					
					//guardamos relaciones viejas
					var cant_ordenesVenta = 0
					cant_ordenesVenta = databaseManager.getFoundSetCount(myFactura.invoice_to_salesorder_1_factura_to_ordenventa);
					for (var i_ordenes_venta = 1; i_ordenes_venta <= cant_ordenesVenta; i_ordenes_venta++) {
						var myOrdenesVenta = myFactura.invoice_to_salesorder_1_factura_to_ordenventa.getRecord(i_ordenes_venta);
						if(myOrdenesVenta.origintype == 736725){
							fs_comprobantes.comp_observacion += "Alquiler:"+myOrdenesVenta.originnr+"/n"
						}
						else{
							fs_comprobantes.comp_observacion += "Devolucion:"+myOrdenesVenta.originnr+"/n"
						}
					}
					
					//recorremos recibos
					if(utils.hasRecords(myFactura.invoice_to_receiptinvoicerow_1_factura_to_recibos)){
						var cant_recibos = 0
						cant_recibos = databaseManager.getFoundSetCount(myFactura.invoice_to_receiptinvoicerow_1_factura_to_recibos);
						for (var i_recibos = 1; i_recibos <= cant_recibos; i_recibos++) {
							var myRecibo = myFactura.invoice_to_receiptinvoicerow_1_factura_to_recibos.getRecord(i_recibos);
							fs_comprobantes.find()
							fs_comprobantes.comp_codigo 	= 3
							fs_comprobantes.serialnumber	= myRecibo.receiptinvoicerow_to_receipt.sernr
							fs_comprobantes.search()
							if(fs_comprobantes.getSize() == 0){
								//Guardamos el comprobante (recibo)
								fs_comprobantes_aux.newRecord()
								fs_comprobantes_aux.company_id					= scopes.usuario.vg_company_id
								fs_comprobantes_aux.cliente_id					= fs_vent_clientes.cliente_id
								fs_comprobantes.serialnumber					= myRecibo.receiptinvoicerow_to_receipt.sernr
								fs_comprobantes_aux.comp_codigo					= 3 //recibo automatico
								fs_comprobantes_aux.comp_fecha_emision			= myRecibo.receiptinvoicerow_to_receipt.transdate
								fs_comprobantes_aux.comp_imp_total				= myRecibo.amount
								fs_comprobantes_aux.comp_numero					= utils.stringToNumber(utils.stringRight(utils.numberFormat(myRecibo.receiptinvoicerow_to_receipt.sernr,'0000'),4))
								fs_comprobantes_aux.comp_observacion			= myRecibo.receiptinvoicerow_to_receipt.refstr
								fs_comprobantes_aux.comp_pv						= 1
								fs_comprobantes_aux.comp_estado_id				= 10//Recibo Cerrado
								databaseManager.saveData(fs_comprobantes_aux)
									
	
								//Guardamos comprobantes datos del cliente
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobante_datos.newRecord()
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobante_datos.company_id				= scopes.usuario.vg_company_id
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobante_datos.cliente_celular			= fs_comprobantes_aux.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_celular
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobante_datos.cliente_direccion		= fs_comprobantes_aux.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_direccion
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobante_datos.cliente_fax				= fs_comprobantes_aux.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_fax
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobante_datos.cliente_mail			= fs_comprobantes_aux.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_mail
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobante_datos.cliente_nombre			= fs_comprobantes_aux.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_nombre
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobante_datos.cliente_num_doc			= fs_comprobantes_aux.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_num_doc
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobante_datos.cliente_observacion		= fs_comprobantes_aux.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_observacion
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobante_datos.cliente_razon_social	= fs_comprobantes_aux.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_razon_social
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobante_datos.cliente_telefono		= fs_comprobantes_aux.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_telefono
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobante_datos.cod_postal_id			= fs_comprobantes_aux.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.cod_postal_id
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobante_datos.comp_id					= fs_comprobantes_aux.comp_id
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobante_datos.tipo_afip_id			= fs_comprobantes_aux.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.tipo_afip_id
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobante_datos.tipo_doc_id				= fs_comprobantes_aux.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.tipo_doc_id 
								databaseManager.saveData(fs_comprobantes_aux.vent_comprobantes_to_vent_comprobante_datos)
								
							
							//Guardamos relacion de recibos con facturas
							
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobantes_recibo.newRecord()
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobantes_recibo.company_id 				= scopes.usuario.vg_company_id
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobantes_recibo.comp_factura_id			= fs_comprobantes.comp_id
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobantes_recibo.comp_importe				= fs_comprobantes_aux.comp_imp_total
								fs_comprobantes_aux.vent_comprobantes_to_vent_comprobantes_recibo.comp_recibo_id			= fs_comprobantes_aux.comp_id
								
								databaseManager.saveData(fs_comprobantes_aux.vent_comprobantes_to_vent_comprobantes_recibo)
							}
									
						}
						
						
					}
					
				}
			
			}
		}
		
		//Recorremos Ordenes de venta para buscar relaciones
		var cant_ordenesVenta_rel = 0
		cant_ordenesVenta_rel = databaseManager.getFoundSetCount(myCliente.customer_to_salesorder_1_cliente_to_ordenesventa);
		for (var i_ordenes_venta_rel = 1; i_ordenes_venta_rel <= cant_ordenesVenta_rel; i_ordenes_venta_rel++) {
			var myOrdenesVenta_rel = myCliente.customer_to_salesorder_1_cliente_to_ordenesventa.getRecord(i_ordenes_venta_rel);
			
			var cant_ordenVenta_item = 0
			cant_ordenVenta_item = databaseManager.getFoundSetCount(myOrdenesVenta_rel.salesorder_to_salesorderitemrow_1_ordenventa_to_item);
			for (var i_ordenVenta_item = 1; i_ordenVenta_item <= cant_ordenVenta_item; i_ordenVenta_item++) {
				var myOrdenVenta_item = myOrdenesVenta_rel.salesorder_to_salesorderitemrow_1_ordenventa_to_item.getRecord(i_ordenVenta_item);
				if(myOrdenVenta_item.origintype == 736725 && myOrdenVenta_item.originrownr != null){//Alquiler:
					fs_comprobantes_herramientas_aux.find()
					fs_comprobantes_herramientas_aux.vent_comprobante_herramientas_to_vent_comprobantes.comp_codigo 	= 1
					fs_comprobantes_herramientas_aux.vent_comprobante_herramientas_to_vent_comprobantes.serialnumber	= myOrdenVenta_item.originsernr
					fs_comprobantes_herramientas_aux.rowidnro	= myOrdenVenta_item.rownr
					fs_comprobantes_herramientas_aux.search()
					if(fs_comprobantes_herramientas_aux.getSize() > 0){
						fs_comprobantes_aux.find()
						fs_comprobantes_aux.serialnumber = myOrdenVenta_item.salesorderitemrow_to_salesorder_1_item_to_ordenventa.salesorder_to_invoice_1_ordenventa_to_factura.sernr
						fs_comprobantes_aux.search()
						if(fs_comprobantes_aux.getSize() > 0){
							fs_comprobantes_herramientas_aux.vent_comprobante_herramientas_to_vent_comprobantes.vent_comprobantes_alquiler_to_vent_comprobante_facturas_parciales.newRecord()
							fs_comprobantes_herramientas_aux.vent_comprobante_herramientas_to_vent_comprobantes.vent_comprobantes_alquiler_to_vent_comprobante_facturas_parciales.comp_id_alquiler = fs_comprobantes_herramientas_aux.comp_id
							fs_comprobantes_herramientas_aux.vent_comprobante_herramientas_to_vent_comprobantes.vent_comprobantes_alquiler_to_vent_comprobante_facturas_parciales.comp_id_fact =  fs_comprobantes_aux.comp_id
							fs_comprobantes_herramientas_aux.vent_comprobante_herramientas_to_vent_comprobantes.vent_comprobantes_alquiler_to_vent_comprobante_facturas_parciales.company_id = scopes.usuario.vg_company_id
						}
					}
				}
				else{
					if(myOrdenVenta_item.origintype == 736726 && myOrdenVenta_item.originrownr != null){//Devolucion:
						fs_comprobantes_herramientas_aux.find()
						fs_comprobantes_herramientas_aux.vent_comprobante_herramientas_to_vent_comprobantes.comp_codigo 	= 2
						fs_comprobantes_herramientas_aux.vent_comprobante_herramientas_to_vent_comprobantes.serialnumber	= myOrdenVenta_item.originsernr
						fs_comprobantes_herramientas_aux.rowidnro	= myOrdenVenta_item.rownr
						fs_comprobantes_herramientas_aux.search()
						if(fs_comprobantes_herramientas_aux.getSize() > 0){
							fs_comprobantes_aux.find()
							fs_comprobantes_aux.serialnumber = myOrdenVenta_item.salesorderitemrow_to_salesorder_1_item_to_ordenventa.salesorder_to_invoice_1_ordenventa_to_factura.sernr
							fs_comprobantes_aux.search()
							if(fs_comprobantes_aux.getSize() >0 )
								fs_comprobantes_herramientas_aux.vent_comprobante_herramientas_to_vent_comprobantes.comp_id_padre	= fs_comprobantes_aux.comp_id
								fs_comprobantes_herramientas_aux.vent_comprobante_herramientas_to_vent_comprobantes.comp_estado_id	= 4
								databaseManager.saveData(fs_comprobantes_herramientas_aux.vent_comprobante_herramientas_to_vent_comprobantes)
						}
					}
			}
			
			
				
			}
		}
		
		//Recorremos las herramientas de alquileres para asignarles las devoluciones
		fs_comprobantes_herr.find()
		fs_comprobantes_herr.comp_devolucion 																					='^='//Que no este devuelto
		fs_comprobantes_herr.vent_comprobante_herramientas_to_vent_comprobantes.comp_codigo 									= 1
		fs_comprobantes_herr.search()
		
		
		var nRecordCount = 0
		nRecordCount = databaseManager.getFoundSetCount(fs_comprobantes_herr);
		for (var index = 1; index <= nRecordCount; index++) {
			var myHerramAlqu = fs_comprobantes_herr.getRecord(index);
			if(utils.hasRecords(myHerramAlqu.vent_comprobante_herramientas_to_herr_equipo)){
				fs_comprobantes_herr_dev.find()
				fs_comprobantes_herr_dev.vent_comprobante_herramientas_to_vent_comprobantes.comp_codigo = 2
				fs_comprobantes_herr_dev.vent_comprobante_herramientas_to_vent_comprobantes.cliente_id	= myHerramAlqu.vent_comprobante_herramientas_to_vent_comprobantes.cliente_id
				fs_comprobantes_herr_dev.vent_comprobante_herramientas_to_herr_equipo.equipo_cod_barras	= myHerramAlqu.vent_comprobante_herramientas_to_herr_equipo.equipo_cod_barras
				fs_comprobantes_herr_dev.search()
				fs_comprobantes_herr_dev.sort('comp_id asc')
				if(fs_comprobantes_herr_dev.getSize() > 0){
					myHerramAlqu.comp_devolucion	= fs_comprobantes_herr_dev.comp_id
					databaseManager.saveData()
				}
			}
		}
		
		
		//Recorremos cheques y cargamos bancos
		if(utils.hasRecords(myCliente.customer_to_cheque_1_cliente_to_cheques)){
			var cant_cheques = 0
			cant_cheques = databaseManager.getFoundSetCount(myCliente.customer_to_cheque_1_cliente_to_cheques);
			for (var i_cheques = 1; i_cheques <= cant_cheques; i_cheques++) {
				var myCheque = myCliente.customer_to_cheque_1_cliente_to_cheques.getRecord(i_cheques);
				fs_banco.find()
				fs_banco.banco_codigo	= utils.stringToNumber(myCheque.bank)
				fs_banco.search()
				if(fs_banco.getSize() == 0){
					fs_banco.newRecord()
					fs_banco.company_id				= scopes.usuario.vg_company_id
					fs_banco.banco_codigo			= utils.stringToNumber(myCheque.bank)
					fs_banco.banco_nombre			= myCheque.bankname
					databaseManager.saveData(fs_banco)
				}
				fs_cheques.find()
				fs_cheques.cheque_numero			= myCheque.chequenr
				fs_cheques.search()
				if(fs_cheques.getSize() == 0){
					fs_cheques.newRecord()
					fs_cheques.company_id 				= scopes.usuario.vg_company_id
					fs_cheques.banco_id					= fs_banco.banco_id
					fs_cheques.cheque_estado			= 1
					fs_cheques.cheque_fecha_emision		= myCheque.transdate
					fs_cheques.cheque_fecha_vencimiento	= myCheque.expdate
					fs_cheques.cheque_fecha_recepcion	= myCheque.estclearingdate
					fs_cheques.cheque_importe			= myCheque.amount
					fs_cheques.cheque_numero			= myCheque.chequenr
					fs_cheques.cheque_observacion		= myCheque.comment
					fs_cheques.cheque_tipo_valor		= 1
					fs_cheques.cliente_id				= fs_vent_clientes.cliente_id
					fs_cheques.cheque_cod_barras		= myCheque.valueacc
					
					databaseManager.saveData(fs_cheques)
				}
			}
		}
			
	
		
	}
	
	plugins.svyBlockUI.stop()

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"4F9BC6AD-37DA-4A75-8A92-5C47E9461A11"}
 * @AllowToRunInFind
 */
function onActionTEST(event) {
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} */
	var fs_comprobantes_herr = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} */
	var fs_comprobantes_herr_dev = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')
	
	fs_comprobantes_herr.find()
	//fs_comprobantes_herr.vent_comprobante_herramientas_to_vent_comprobantes.cliente_id										= forms.devolucion_nuevo.vl_cliente
	fs_comprobantes_herr.comp_devolucion 																					='^='//Que no este devuelto
	fs_comprobantes_herr.vent_comprobante_herramientas_to_vent_comprobantes.comp_codigo 									= 1
	fs_comprobantes_herr.search()
	
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(fs_comprobantes_herr);
	for (var index = 1; index <= nRecordCount; index++) {
		var myHerramAlqu = fs_comprobantes_herr.getRecord(index);
		if(utils.hasRecords(myHerramAlqu.vent_comprobante_herramientas_to_herr_equipo)){
			fs_comprobantes_herr_dev.find()
			fs_comprobantes_herr_dev.vent_comprobante_herramientas_to_vent_comprobantes.comp_codigo = 2
			fs_comprobantes_herr_dev.vent_comprobante_herramientas_to_vent_comprobantes.cliente_id	= myHerramAlqu.vent_comprobante_herramientas_to_vent_comprobantes.cliente_id
			fs_comprobantes_herr_dev.vent_comprobante_herramientas_to_herr_equipo.equipo_cod_barras	= myHerramAlqu.vent_comprobante_herramientas_to_herr_equipo.equipo_cod_barras
			fs_comprobantes_herr_dev.search()
			fs_comprobantes_herr_dev.sort('comp_id asc')
			if(fs_comprobantes_herr_dev.getSize() > 0){
				myHerramAlqu.comp_devolucion	= fs_comprobantes_herr_dev.comp_id
				databaseManager.saveData()
			}
		}
	}
	

}
