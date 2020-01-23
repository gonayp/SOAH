/**
 * 
 *
 * @properties={typeid:24,uuid:"F0F217EF-57AF-4FAB-91A0-099880CABA8A"}
 */
function onActionVolver() {
	application.showForm(forms.administracion_main)

}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0026D663-3BE8-46EE-8912-770C32BF9654"}
 */
function onShow(firstShow, event) {
	if(scopes.usuario.vg_super_usuario != 1){
		elements.btn_c.enabled = false
		elements.btn_d.enabled = false
		elements.btn_e.enabled = false
		elements.btn_f.enabled = false
		elements.btn_h.enabled = false
		elements.btn_o.enabled = false
		elements.btn_r.enabled = false
		elements.btn_a.enabled = false
	}
}

/**
 *
 * @properties={typeid:24,uuid:"816471BC-836E-4CB0-921B-2B6FC56548CA"}
 * @AllowToRunInFind
 */
function onActionImportarHerramientas() {
	
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"11E0C5C5-E6CA-4F14-906C-AB72DAD95A59"}
 */
function onActionImportarEquipamentos(event) {
	// TODO Auto-generated method stub

}

/**
 *
 * @properties={typeid:24,uuid:"FFFE35F0-5F55-4924-9DA0-10D336F73B4C"}
 * @AllowToRunInFind
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
 *
 * @properties={typeid:24,uuid:"6AC4D848-F698-4ABE-8EF3-9C53F1BD27DB"}
 */
function onActionImportarAlquileres(event) {
	// TODO Auto-generated method stub

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"CF500871-5528-4630-B634-56404236E66F"}
 */
function onActionImportarDevoluciones(event) {
	// TODO Auto-generated method stub

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"3AFE652D-76F7-4E86-A3AE-DDE864EA6116"}
 */
function onActionImportarFacturas(event) {
	// TODO Auto-generated method stub

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B21A4C6F-01BE-4BC0-87DE-F55CE758B72F"}
 */
function onActionImportarRecibos(event) {
	// TODO Auto-generated method stub

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"301A9AF2-2AD6-42AA-90C6-ABF0CE08E85D"}
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
 * @properties={typeid:24,uuid:"7A2AB997-BFA4-42E2-9C3B-8636BC97E33E"}
 * @AllowToRunInFind
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
