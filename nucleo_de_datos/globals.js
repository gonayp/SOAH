/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"277FE31A-8870-455D-8AD0-C67DAEE334CD",variableType:4}
 */
var vg_producto = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A8BD0270-19EB-4172-B81A-51C8874035AE",variableType:4}
 */
var vg_deposito = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"59F0E43D-AE77-4E49-B343-554AAA79ABCD",variableType:4}
 */
var vg_herramienta_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B264CAAB-A773-4A79-ADDB-FC3684441CB4",variableType:4}
 */
var vg_adjunto_clave_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"41F6B627-DD92-4DF2-9DD7-6C1F5285F184"}
 */
var vg_adjunto_clave = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B8C02444-5BD4-48EC-9C91-E1773CB05BD1",variableType:4}
 */
var vg_tipo_comprobante = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0FFAEDA8-086F-48D2-BC2E-CA418D036E55",variableType:4}
 */
var vg_cliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C9980639-DC37-4BDE-ABF2-36D4B25EF53C",variableType:4}
 */
var vg_auditoria_pk_1 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A7B698B9-7264-4052-B606-69A1E7346CE4"}
 */
var vg_table_auditoria_1 = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"4ACACEF1-7084-4F70-A1EF-B0EBCE1D7EA2",variableType:8}
 */
var vg_auditoria_pk_2 = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"443EA5AA-3317-437A-AE32-3DCF95DB611D"}
 */
var vg_table_auditoria_2 = null;

/** @type {webnotificationsToastr.toastrOptions} *
 * @properties={typeid:35,uuid:"3D9CFDBE-3E3D-488C-A4B8-9179AACFCD33",variableType:-4}
 */
	var vg_toast_options = {
		  "closeButton": false,
		  "newestOnTop": false,
		  "positionClass": "toast-bottom-right",
		  "showDuration": 300,
		  "hideDuration": 1000,
		  "hideEasing": "linear",
		  "showMethod": "fadeIn",
		  "hideMethod": "fadeOut",
		  "progressBar": true
		}


/**
*
* @properties={typeid:24,uuid:"D9FF24FD-45EC-4A68-9B12-35B014FC647E"}
* @param {JSRecord} record
*/
function onRecordUpdate(record) {

	/** @type {JSFoundSet<db:/gpp/usuarios_auditorias>} */
	var fs_auditoria = databaseManager.getFoundSet('gpp', 'usuarios_auditorias')
	
	var table_name = record.foundset.getDataSource().split('/')[2];
	var pk_value_of_the_record = record.getPKs()[0]; 
	var modified_by_user_idx = scopes.usuario.vg_usuario_id
	var modification_date = application.getServerTimeStamp()

	/** @type {JSDataSet} */
   var dataset = record.getChangedData();//it will return all the changed data of type JSDataSet

   //Loop through the modified fields
   for( var cnt = 1 ; cnt <= dataset.getMaxRowIndex() ; cnt++ )
      {
           var field_name = dataset.getValue(cnt, 1);
           var old_value = dataset.getValue(cnt, 2);
           var new_value = dataset.getValue(cnt, 3);
		
           fs_auditoria.newRecord()
           fs_auditoria.auditoria_tabla = table_name
           fs_auditoria.auditoria_valor_pk = pk_value_of_the_record
           fs_auditoria.usuario_id = modified_by_user_idx
           fs_auditoria.auditoria_fecha = modification_date
           fs_auditoria.auditoria_campo = field_name
//			if (fs_auditoria.audit_campo == 'passwd') {
//	            fs_auditoria.auditoria_valor_anterior = '********'
//	            fs_auditoria.auditoria_valor_nuevo = '********'
//			} else {
	            fs_auditoria.auditoria_valor_anterior = old_value
	            fs_auditoria.auditoria_valor_nuevo = new_value
			//}
	        fs_auditoria.company_id	= scopes.usuario.vg_company_id
			
           databaseManager.saveData(fs_auditoria)
     }
}
/**
 * Metodo para asignar permisos al usuario segun el formulario donde estas parado
 * @param {String} formulario
 * @properties={typeid:24,uuid:"FA646318-FB41-44F4-B407-714161C58FB2"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function asignarPermisos(formulario) {
	
	scopes.usuario.vg_permiso_lectura 		= 0
	scopes.usuario.vg_permiso_crear		 	= 0
	scopes.usuario.vg_permiso_modificar		= 0
	scopes.usuario.vg_permiso_borrar		= 0
	scopes.usuario.vg_permiso_imprimir		= 0
	scopes.usuario.vg_permiso_administracion= 0
	
	
	/** @type {JSFoundSet<db:/gpp/usuarios_formularios>} */
	var fsformularios = databaseManager.getFoundSet('gpp', 'usuarios_formularios')
	fsformularios.find()
	fsformularios.formulario_nomenclatura = formulario
	fsformularios.search()
	
	if(fsformularios.getSize() > 0){//Si existe el formulario
		/** @type {JSFoundSet<db:/gpp/usuarios_permisos>} */
		var fs_permisos = databaseManager.getFoundSet('gpp', 'usuarios_permisos')
		fs_permisos.find()
		fs_permisos.formulario_id 	= fsformularios.formulario_id
		fs_permisos.usuario_id		= scopes.usuario.vg_usuario_id
		fs_permisos.search()
		if(fs_permisos.getSize() > 0){
			scopes.usuario.vg_permiso_lectura 		= fs_permisos.prmiso_lectura
			scopes.usuario.vg_permiso_crear		 	= fs_permisos.prmiso_crear
			scopes.usuario.vg_permiso_modificar		= fs_permisos.prmiso_modificar
			scopes.usuario.vg_permiso_borrar		= fs_permisos.prmiso_borrar
			scopes.usuario.vg_permiso_imprimir		= fs_permisos.prmiso_imprimir
			scopes.usuario.vg_permiso_administracion= fs_permisos.prmiso_admin
		}
		else{
			plugins.webnotificationsToastr.error("Error. Usuario sin permisos asignados.","",globals.vg_toast_options)
		}
	}
	else{
		plugins.webnotificationsToastr.error("Error. Solucion no existente como función.","",globals.vg_toast_options)
	}
}


/**
 * @param {String} table_1 nombre de la tabla donde buscar auditorias
 * @param {Number} pk_1    indice de la tabla para buscar auditoria
 * @param {String} table_2 segundo nombre de la tabla donde buscar auditorias. Si no tiene una segunda tabla dejar en null
 * @param {Number} pk_2    segundo indice de la tabla para buscar auditoria. Si no tiene una segunda tabla dejar en null
 * @description Metodo para cargar los parametros sobre los que se busca en la tabla de auditorias. 
 * @properties={typeid:24,uuid:"956EB99C-744E-4417-8EC5-9FC37121A062"}
 */
function crearParametrosAuditoria(table_1,pk_1,table_2,pk_2){
	globals.vg_table_auditoria_1 	= table_1
	globals.vg_auditoria_pk_1		= pk_1
	globals.vg_table_auditoria_2 	= table_2
	globals.vg_auditoria_pk_2		= pk_2
}


/**
 * Metodo para extraer un valor de una posicion numerica
 * @param p_integer numero para la extraccion
 * @param p_position posicion para extraer
 * 
 * @return {Number}
 *
 * @properties={typeid:24,uuid:"14A34C5F-C1CA-41EA-A6CF-BB65DD673B20"}
 */
function extraerPosicion(p_integer,p_position){
	var aux_integer = p_integer
	var counter = 0
	var aux_int = aux_integer
	//, m, a, i = 1, ;
    var result = 0
	
    while(aux_integer >= 1)
    {
    	aux_integer = aux_integer / 10;
        counter++;
    }
    while(aux_int >= 1)
    {
    	if(counter == p_position){
    		if(counter > 1)
    			result = Math.floor(aux_int / (Math.pow(10,counter-1)))
			else
				result = Math.floor(aux_int)
    	}
        
    	if(counter > 1){
	    	var unidad = Math.floor(aux_int / (Math.pow(10,counter-1)))
			var valor = unidad * (Math.pow(10,counter-1))
	    	aux_int = aux_int-valor;
    	}
    	else{
    		aux_int = aux_int / 10
    	}
        counter--;
    }
    
    return result
}


/**
 * @AllowToRunInFind
 * 
 * Metodo que busca errores almacenados y explicados para mostrarlos
 * @param p_codigo
 * 
 * @return {String}
 *
 * @properties={typeid:24,uuid:"41DD9F25-3DE2-466D-A414-CE34ECC87C93"}
 */
function mensajeError(p_codigo){
	
	var vl_msg = "E-"+p_codigo+" : Error desconocido."
	
	/** @type {JSFoundSet<db:/gpp/core_errores>} */
	var fs_errores = databaseManager.getFoundSet('gpp', 'core_errores')
	
	fs_errores.find()
	fs_errores.error_codigo = p_codigo
	fs_errores.search()
	
	if(fs_errores.getSize() > 0){
		vl_msg = fs_errores.error_mensaje + " (E-"+p_codigo+")"
	}
	
	return vl_msg
}


/**
 * <br> Metodo para imprimir reportes.
 * 
 * @param reportDataSource De donde va a sacar los datos (founset o nombre de la BD)
 * @param report Nombre del reporte a imprimir
 * @param outputOptions Opciones de imprimir, normalmente la impresora. Por defecto deberia ser '' o null
 * @param outputType tipo de impresion: VIEW, PRINT, PDF
 * @param parameters todos los parametros del reporte
 *
 * @properties={typeid:24,uuid:"444600A3-B24D-43E3-99FF-6ACE8E41A034"}
 */
function imprimirReporteJasper(reportDataSource, report, outputOptions, outputType, parameters){
	
	try {
		plugins.jasperPluginRMI.runReport(reportDataSource,report,outputOptions,outputType,parameters)
	} catch (e) {
		plugins.webnotificationsToastr.error('Error al imprimir el reporte. '+report,"",vg_toast_options)
	}
	
}


/**
 * @param numero
 *
 * @properties={typeid:24,uuid:"5CE46888-AD1F-441C-8022-96EDB0ED7475"}
 */
function convertirNumeroALetras(numero){
	
    var imp_letras = ''
    var num        = utils.numberFormat(numero, '000000000.00')
    var cent       = num.split(".")
    var centavos   = cent[1]
    num            = cent[0]

    if (centavos == 0 || centavos == undefined){
        centavos = "00";
    }

    // millones
    var millones = num.substr(0,3)
    if (millones == 1)
        imp_letras += "UN MILLON "
    else if (millones > 1)
        imp_letras += (convertirNumeros(millones) + "MILLONES ")

   //miles
    var miles = num.substr(3,3)
	if(millones >= 1){
	    if (miles == 1)
	        imp_letras += "UN MIL ";
	    else if (miles > 1)
	        imp_letras += convertirNumeros(miles) + "MIL ";
	}
	else{
		imp_letras += convertirNumeros(miles) + "MIL ";
	}

    //unidades
    var unidades = num.substr(6,3)
    if (unidades == 1)
        imp_letras += "UNO";
    if (millones + miles + unidades == 0)
        imp_letras += "CERO";
    if (unidades > 1)
        imp_letras += convertirNumeros(unidades);


    //centavos
    if (centavos == 1)
        imp_letras += " CON UN CENTAVO";
    else if (centavos > 1)
        imp_letras += " CON " + convertirNumeros(centavos)+ " CENTAVOS";
        
   return imp_letras
}

/**
 * @param {String} number
 * @return {String}
 *
 * @properties={typeid:24,uuid:"2745A282-D826-4AD0-A648-79FA93EE3376"}
 */
function convertirNumeros(number) {

    var unidades = new Array( "", "UN ", "DOS ", "TRES ","CUATRO ", "CINCO ", "SEIS ", "SIETE ", "OCHO ", "NUEVE ", "DIEZ ",
        "ONCE ", "DOCE ", "TRECE ", "CATORCE ", "QUINCE ", "DIECISEIS ","DIECISIETE ", "DIECIOCHO ", "DIECINUEVE ", "VEINTE " );

     var decenas = new Array( "VEINTI", "TREINTA ", "CUARENTA ","CINCUENTA ", "SESENTA ", "SETENTA ", "OCHENTA ", "NOVENTA ",
        "CIEN " );

     var centenas = new Array( "CIENTO ", "DOSCIENTOS ","TRESCIENTOS ", "CUATROCIENTOS ", "QUINIENTOS ", "SEISCIENTOS ",
        "SETECIENTOS ", "OCHOCIENTOS ", "NOVECIENTOS " );

    // Caso con 100
    if (number.equals("100")) {
        return "CIEN ";
    }

    var salida = ''

    if (getNumeroDePosicion(number, 2) != 0)
        salida += centenas[getNumeroDePosicion(number, 2) - 1];

    /**@type {Number}*/
    var k = utils.stringToNumber((getNumeroDePosicion(number, 1) + getNumeroDePosicion(number, 0)).toString());

    if (k <= 20)
        salida += unidades[k];
    else if (k > 30 && getNumeroDePosicion(number, 0) != 0)
        salida += decenas[getNumeroDePosicion(number, 1) - 2] + "Y "
                + unidades[getNumeroDePosicion(number, 0)];
    else
        salida += decenas[getNumeroDePosicion(number, 1) - 2]
                + unidades[getNumeroDePosicion(number, 0)];

    return salida.toString();
}

/**@description Le pasamos un numero origen, y nos devuelve el numero de la posicion requerida
 * @param {String} origen
 * @param {Number} posicion
 * @return {String}
 *
 * @properties={typeid:24,uuid:"02F53DF4-9DAA-4059-B99E-59A1C1BDC54B"}
 */
function getNumeroDePosicion(origen, posicion) {
    if (origen.length > posicion && posicion >= 0)
        return origen.charAt(origen.length - posicion - 1);
    return '';
}



/**
 * @param p_nombre
 * @param p_precio
 * @param p_tipo
 * @param equipo_id
 *
 * @properties={typeid:24,uuid:"1247A352-179C-4E76-ABC5-1FB5CFE6B9C9"}
 */
function actualizarListaPrecios(p_nombre,p_precio,p_tipo,equipo_id){
	
	/** @type {JSFoundSet<db:/gpp/herr_listas_precios>} */
	var fs_herr_lista_precios = databaseManager.getFoundSet('gpp', 'herr_listas_precios')
	
	fs_herr_lista_precios.newRecord()
	fs_herr_lista_precios.company_id				= scopes.usuario.vg_company_id
	fs_herr_lista_precios.lp_nombre					= p_nombre
	fs_herr_lista_precios.lp_precio					= p_precio
	fs_herr_lista_precios.lp_tipo					= p_tipo
	fs_herr_lista_precios.equipo_id					= equipo_id
	databaseManager.saveData()
	
	
}


/**
 * @param email
 * Metodo verificacion de escritura de mails correctos
 * @properties={typeid:24,uuid:"79A51150-BAE6-4577-BFD5-293048CE2DD0"}
 */
function verificarMail(email){
	var ePattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";
	var p,m
	 p = java.util.regex.Pattern.compile(ePattern);
	 m = p.matcher(email);
	return m.matches();
}


/**
 * TODO generated, please specify type and doc for the params
 * @param p_destinatario
 * @param p_remitente
 * @param p_titulo
 * @param p_cuerpo
 * @param p_adjuntos
 *
 * @properties={typeid:24,uuid:"B2696CE8-89FE-414E-AA81-BD39CCC70C8D"}
 */
function enviarMail( p_destinatario, p_remitente, p_titulo, p_cuerpo,p_adjuntos){
	
	var cc = null
	var bcc = null
	var configuraciones = new Array()
	var to = p_destinatario
	var from = p_remitente
	var subject = p_titulo
	var msgText = p_cuerpo
	/**@type {Array<plugins.mail.Attachment>}*/
	var attachments 	 = p_adjuntos
	
	if(!verificarMail(p_destinatario)){
		plugins.webnotificationsToastr.error("El email de destino es incorrecto.","",vg_toast_options)
		return
	}
	
	
	/** @type {JSFoundSet<db:/gpp/usuarios>} */
	var fs_usuario = databaseManager.getFoundSet('gpp', 'usuarios')
	
	fs_usuario.loadRecords(scopes.usuario.vg_usuario_id)
	
	var smtp = fs_usuario.usuario_smtp
	var puerto = fs_usuario.usuario_smtp_port
	var usuario = fs_usuario.usuario_smtp_user
	var pass = fs_usuario.usuario_smtp_pass
	
	if(smtp != null && usuario != null && pass != null){
	
		//Configuraciones
		configuraciones[0] = 'mail.smtp.host=' + smtp
		configuraciones[1] = 'mail.smtp.port=' + puerto
		if (fs_usuario.usuario_smtp_aut == 2) 
			configuraciones[2] = 'mail.smtp.auth=false'	
		else 
			configuraciones[2] = 'mail.smtp.auth=true'
		configuraciones[3] = 'mail.smtp.username=' + usuario
		configuraciones[4] = 'mail.smtp.password=' + pass
		if (fs_usuario.usuario_smtp_ssl == 1) { 
			configuraciones[5] = 'mail.smtp.starttls.enable=false';
			configuraciones[6] = 'mail.smtp.ssl.enable=true';
		} 
		else {
			configuraciones[5] = 'mail.smtp.starttls.enable=true';
			configuraciones[6] = 'mail.smtp.ssl.enable=false';	
		}
		
		if(from == ""){
			from = fs_usuario.usuarios_to_core.core_mail
		}
		
		
		try{
			var r = plugins.mail.sendMail(to,from,subject,msgText,cc,bcc,attachments,configuraciones)
			if(!r){
				plugins.webnotificationsToastr.error("Error al enviar el mail","",vg_toast_options)
			}
			else
				plugins.webnotificationsToastr.success("El mail se mando correctamente.","",vg_toast_options)
		}
		catch(Ex){
			plugins.webnotificationsToastr.error("Error al enviar el mail: "+ Ex,"",vg_toast_options)
		}
	}
	else{
		plugins.webnotificationsToastr.error("Falta algun dato de configuración SMTP.","",vg_toast_options)
		return
	}
}

/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"96354A1B-940A-48AD-88D4-5326B3BD77B8"}
 */
function onSolutionOpen(arg, queryParams) {
	application.putClientProperty(APP_UI_PROPERTY.CALENDAR_NG_SHOW_ISO_WEEK_NUMBER, false)
	
}
