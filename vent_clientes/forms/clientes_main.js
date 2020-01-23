/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"531E83FF-015C-41B3-9142-18AABE0960A9",variableType:4}
 */
var vl_codigo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"07751A13-ED43-401B-9D12-C7A7F98D3139"}
 */
var vl_nombre = null;


/**
 *
 * @properties={typeid:24,uuid:"3FBA1455-C535-41F8-ABA6-220BD6B34FE5"}
 */
function onActionVolver() {
	application.showForm('soah_main')

}

/**
 * 
 *
 * @properties={typeid:24,uuid:"F162FE18-FDF2-4594-93DE-3B0DC3A7E3C3"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	if(vl_codigo != null) foundset.cliente_codigo = vl_codigo
	if(vl_nombre != null && vl_nombre != "") foundset.vent_clientes_to_core.core_nombre = "#%"+vl_nombre+"%"
	foundset.search()
}

/**
 * @properties={typeid:24,uuid:"AE76B4A0-248F-4A2A-A4A3-8247A2B17933"}
 */
function onActionuevo() {
	application.showForm(forms.clientes_nuevo)
}

/**
 * @properties={typeid:24,uuid:"7BFD977B-96CC-4CBA-BE19-99D9BD36006A"}
 */
function onActionLimpiar() {
	vl_codigo = null
	vl_nombre = null
	filtrar()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CAB97A5F-26A1-4D7A-836A-2013A9CEAA55"}
 */
function onShow(firstShow, event) {
	globals.asignarPermisos(controller.getName())
	if(scopes.usuario.vg_permiso_lectura == 0){
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.")
	}
	
	if(scopes.usuario.vg_permiso_crear == 0){
		elements.btn_nuevo.enabled = false
	}
	else{
		elements.btn_nuevo.enabled = true
	}
	
	
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"F8E6EA32-99F2-4A1C-9A39-92F89BE0D641"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.clientes_editar)

}

/**
 * @properties={typeid:24,uuid:"0D332037-8ADC-4E8F-B33E-9B321B84E714"}
 * @AllowToRunInFind
 */
function onActionImportar() {
	
	/** @type {JSFoundSet<db:/gpp/vent_clientes>} */
	var fs_clientes= databaseManager.getFoundSet('gpp', 'vent_clientes')
	
	/** @type {JSFoundSet<db:/gpp/core>} */
	var fs_core = databaseManager.getFoundSet('gpp', 'core')
	
	/** @type {JSFoundSet<db:/gpp/core_codigos_postales>} */
	var fs_core_codigos_postales = databaseManager.getFoundSet('gpp', 'core_codigos_postales')
	

	var file_3m = plugins.file.readTXTFile("C:\Users\Gonay\Desktop\clientes.csv") 
	 
	if((file_3m != null)&&(file_3m != '')){
		
		var array = file_3m.split("\n")
		var aux1 = array[1].split(';')
		if(aux1.length != 21 ){
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
				
				
				fs_core.newRecord()
				fs_core.company_id							= scopes.usuario.vg_company_id
				fs_core.core_nombre							= fila_cliente[1]
				fs_core.core_razon_social					= fila_cliente[2]
				fs_core.core_direccion						= fila_cliente[3]
				fs_core.core_fecha_inicio					= new Date(utils.stringToNumber(fila_cliente[4].substr(6,4)),utils.stringToNumber(fila_cliente[4].substr(3,2))-1,utils.stringToNumber(fila_cliente[4].substr(0,2)))
				fs_core.core_fecha_iva						= new Date(utils.stringToNumber(fila_cliente[8].substr(6,4)),utils.stringToNumber(fila_cliente[8].substr(3,2))-1,utils.stringToNumber(fila_cliente[8].substr(0,2)))
				fs_core.core_telefono						= fila_cliente[10]
				fs_core.core_mail							= fila_cliente[11]
				fs_core.core_web							= fila_cliente[15]
				fs_core.core_celular						= fila_cliente[16]
				fs_core.core_num_iibb						= fila_cliente[20]
				//13 condicion de iva
				
				//Codigo postal
				fs_core_codigos_postales.find()
				fs_core_codigos_postales.cod_postal_codigo = fila_cliente[12]
				fs_core_codigos_postales.search()
				if(fs_core_codigos_postales.getSize() > 0)
					fs_core.cod_postal_id	= fs_core_codigos_postales.cod_postal_id
					
				//Condicion de IVA
				switch (utils.stringToNumber(fila_cliente[13])) {
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
				fs_clientes.cliente_codigo					= fila_cliente[0]
				fs_clientes.core_id							= fs_core.core_id
				fs_clientes.cliente_observacion				= fila_cliente[9]
				fs_clientes.cliente_advertencia				= fila_cliente[14]
				if(fila_cliente[19] == "Factura_Mensual")
					fs_clientes.cliente_facturacion_mensual	= 1
				else
					fs_clientes.cliente_facturacion_mensual	= 0
					
				fs_clientes.cliente_estado	= 1
				
				
				databaseManager.saveData(fs_clientes)
			}
		}
		
		}
		else {
			plugins.webnotificationsToastr.error("El archivo seleccionado no posee datos.", "ERROR");
		}
	plugins.svyBlockUI.stop()
	plugins.webnotificationsToastr.info("El proceso finalizo correctamente.", "Información");
	
}
