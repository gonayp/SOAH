

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4FBE7309-11D7-4F7C-A31A-4BEC168767CF"}
 */
var vl_observaciones = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"616A89C0-12D0-4398-8147-9D140333FF98",variableType:4}
 */
var vl_cliente = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"5160EDA0-5BFB-4D0A-B9BD-D738B352EB44",variableType:93}
 */
var vl_fecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"320BA153-A83A-4DD9-9328-2EA6FC6D174B",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"37C05104-1D91-44CE-B0B0-9ADDADB51A4E",variableType:4}
 */
var vl_numero = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"77A3D0FF-75D2-4309-AAA2-25B872EEB532",variableType:8}
 */
var vl_codigo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"40C99F96-698A-4DE4-93C4-5A5ECB27FFF4",variableType:4}
 */
var vl_pv = null;



/**
 * @properties={typeid:24,uuid:"0F1D1B42-8A09-4500-94BD-9615EB4A87EC"}
 */
function onActionVolver() {
	application.showForm(forms.facturacion_pagos)
}

/**
 * @properties={typeid:24,uuid:"356E859F-B5AE-4B0F-8D18-1EEBB3491F8B"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {

	if(vl_tipo == 2 && vl_numero == null){
		plugins.webnotificationsToastr.error("Falta seleccionar el numero del recibo de pago.","",globals.vg_toast_options)
		controller.focusField("f_numero",true)
		return
	}
	
	if (vl_numero == null) {
		plugins.webnotificationsToastr.error(globals.mensajeError(101), "", globals.vg_toast_options)
		return
	}
	
	if(vl_cliente == null){
		plugins.webnotificationsToastr.error("Falta seleccionar el cliente.","",globals.vg_toast_options)
		controller.focusField("f_cliente",true)
		return
	}
	if (vl_fecha == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de fecha.", "", globals.vg_toast_options)
		controller.focusField("f_fecha", true)
		return
	}
	
	
	if(forms.factura_formas_de_pago.vl_diferencia > 0 || forms.factura_formas_de_pago.vl_diferencia < 0){
		
		var PressedButton = plugins.dialogs.showQuestionDialog('GPP', 'El importe pagado no corresponde con el importe total a cobrar. ¿Seguro que quiere continuar?', 'Si', 'No')
		if (PressedButton == 'No') {
			return
		}
		
	}
	
	
	grabarRecibo()
	
	forms.facturacion_pagos.onActionLimpiar()
	
	onActionVolver()
}


/**
 * @properties={typeid:24,uuid:"FE8680C1-C332-477A-B313-D68E8ED3FA16"}
 */
function grabarRecibo(){
	var spinner = 'Cube grid'//"Wandering cubes", "Pulse", "Chasing dots", "Three bounce", "Circle", "Cube grid", "Fading circle", "Folding cube", "Rotating plane", "Double bounce", "Wave", 
		var overlayOpacity = 0.7
		plugins.svyBlockUI.overlayColor = "black"
		plugins.svyBlockUI.overlayOpacity = overlayOpacity
		plugins.svyBlockUI.spinner = spinner
		plugins.svyBlockUI.spinnerBgColor = "yellow"
		plugins.svyBlockUI.show("Generando el recibo...")
		
		
		/** @type {JSFoundSet<db:/gpp/vent_comprobantes>} */
		var fs_comprobantes = databaseManager.getFoundSet('gpp', 'vent_comprobantes')
		
		/** @type {JSFoundSet<db:/gpp/vent_comprobante_datos>} */
		var fs_comprobantes_dat = databaseManager.getFoundSet('gpp', 'vent_comprobante_datos')
		
		/** @type {JSFoundSet<db:/gpp/vent_historicos_cliente>} */
		var fs_historicos_cliente = databaseManager.getFoundSet('gpp', 'vent_historicos_cliente')
		
		/** @type {JSFoundSet<db:/gpp/vent_comprobantes_recibo>} */
		var fs_comprobante_recibo = databaseManager.getFoundSet('gpp', 'vent_comprobantes_recibo')
		
		/** @type {JSFoundSet<db:/gpp/cheq_cheques>} */
		var fs_cheques = databaseManager.getFoundSet('gpp', 'cheq_cheques')
		
		/** @type {JSFoundSet<db:/gpp/vent_comprobantes>} */
		var fs_anticipo = databaseManager.getFoundSet('gpp', 'vent_comprobantes')
		
		if(vl_tipo == 1)
			vl_numero = scopes.facturacion.asignarUltimoNumeroComprobante(vl_pv,vl_codigo)
		
		//Guardamos el comprobante (recibo)
		fs_comprobantes.newRecord()
		fs_comprobantes.company_id					= scopes.usuario.vg_company_id
		fs_comprobantes.cliente_id					= vl_cliente
		fs_comprobantes.comp_codigo					= vl_codigo
		fs_comprobantes.comp_fecha_emision			= vl_fecha
		fs_comprobantes.comp_imp_total				= forms.factura_formas_de_pago.vl_total
		fs_comprobantes.comp_numero					= vl_numero
		fs_comprobantes.comp_observacion			= vl_observaciones
		fs_comprobantes.comp_pv						= vl_pv
		fs_comprobantes.comp_estado_id				= 10//Recibo Cerrado
		databaseManager.saveData(fs_comprobantes)
			

		//Guardamos comprobantes datos del cliente
		fs_comprobantes_dat.newRecord()
		fs_comprobantes_dat.company_id				= scopes.usuario.vg_company_id
		fs_comprobantes_dat.cliente_celular			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_celular
		fs_comprobantes_dat.cliente_direccion		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_direccion
		fs_comprobantes_dat.cliente_fax				= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_fax
		fs_comprobantes_dat.cliente_mail			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_mail
		fs_comprobantes_dat.cliente_nombre			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_nombre
		fs_comprobantes_dat.cliente_num_doc			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_num_doc
		fs_comprobantes_dat.cliente_observacion		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_observacion
		fs_comprobantes_dat.cliente_razon_social	= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_razon_social
		fs_comprobantes_dat.cliente_telefono		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_telefono
		fs_comprobantes_dat.cod_postal_id			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.cod_postal_id
		fs_comprobantes_dat.comp_id					= fs_comprobantes.comp_id
		fs_comprobantes_dat.tipo_afip_id			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.tipo_afip_id
		fs_comprobantes_dat.tipo_doc_id				= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.tipo_doc_id 
		databaseManager.saveData(fs_comprobantes_dat)
		
		
		//Guardamos historico de cliente
		fs_historicos_cliente.newRecord()
		fs_historicos_cliente.company_id				= scopes.usuario.vg_company_id
		fs_historicos_cliente.cliente_id				= vl_cliente
		fs_historicos_cliente.comp_id					= fs_comprobantes.comp_id
		fs_historicos_cliente.hist_estado				= 2
		fs_historicos_cliente.hist_fecha				= vl_fecha
		fs_historicos_cliente.hist_tipo					= 8 //Cobranza
		databaseManager.saveData(fs_historicos_cliente)
		
		
		//Guardamos relacion de recibos con facturas
		var nRecordCount = 0
		nRecordCount = databaseManager.getFoundSetCount(forms.facturacion_pagos.foundset);
		for (var index = 1; index <= nRecordCount; index++) {
			var myFactura= forms.facturacion_pagos.foundset.getRecord(index);
			if(myFactura.calc_seleccionado == 1){
				fs_comprobante_recibo.newRecord()
				fs_comprobante_recibo.company_id 				= scopes.usuario.vg_company_id
				fs_comprobante_recibo.comp_factura_id			= myFactura.comp_id
				fs_comprobante_recibo.comp_importe				= myFactura.calc_a_pagar
				fs_comprobante_recibo.comp_recibo_id			= fs_comprobantes.comp_id
				
				databaseManager.saveData(fs_comprobante_recibo)
				
				if(myFactura.calc_a_pagar < myFactura.calc_saldo){
					myFactura.comp_estado_id = 9 //Parcial
				}
				else{
					myFactura.comp_estado_id = 7 //Cerrado
				}
				
				databaseManager.saveData(myFactura)
			}
		}
		
		
		//Formas de pago
		//Guardamos la forma de pago
		/** @type {JSFoundSet<db:/gpp/vent_comp_forma_pago>} */
		var fs_forma_pago = databaseManager.getFoundSet('gpp', 'vent_comp_forma_pago')
		
		//Efectivo
		if(forms.factura_formas_de_pago.vl_efectivo > 0){
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= null
			fs_forma_pago.comp_id							= fs_comprobantes.comp_id
			fs_forma_pago.forma_pago_id						= 1 //Efectivo
			fs_forma_pago.forma_pago_imp					= forms.factura_formas_de_pago.vl_efectivo 
			databaseManager.saveData(fs_forma_pago)
		}
		
		//Cheques y Anticipos
		if(forms.factura_formas_de_pago.vl_cheques > 0 || forms.factura_formas_de_pago.vl_anticipos > 0){
			
			var n = 0
			n= databaseManager.getFoundSetCount(forms.factura_formas_de_pago_detalle.foundset);
			for (var j= 1; j <= n; j++) {
				var myFormaDePago= forms.factura_formas_de_pago_detalle.foundset.getRecord(j);
				fs_forma_pago.newRecord()
				fs_forma_pago.company_id						= scopes.usuario.vg_company_id
				fs_forma_pago.comp_id							= fs_comprobantes.comp_id
				fs_forma_pago.forma_pago_imp					= myFormaDePago.fp_importe 
				switch (myFormaDePago.fp_tipo) {
				case 2://Cheques
					fs_forma_pago.cheque_id							= myFormaDePago.fp_cheque_id
					fs_forma_pago.forma_pago_id						= 2 //Cheques
					databaseManager.saveData(fs_forma_pago)
					fs_cheques.loadRecords(myFormaDePago.fp_cheque_id)
					fs_cheques.comp_id = fs_comprobantes.comp_id
					databaseManager.saveData(fs_cheques)
					break;
				case 6://Anticipos
					fs_forma_pago.anticipo_id						= myFormaDePago.fp_anticipo_id
					fs_forma_pago.forma_pago_id						= 6 //Anticipo
					databaseManager.saveData(fs_forma_pago)
					fs_anticipo.loadRecords(myFormaDePago.fp_anticipo_id)
					fs_anticipo.comp_id_padre = fs_comprobantes.comp_id
					fs_anticipo.comp_estado_id = 13 // cerrado
					databaseManager.saveData(fs_anticipo)
					break;
				default:
					break;
				}
				
				
				
			}	
		}
		//Transferencia
		if(forms.factura_formas_de_pago.vl_transferencia > 0){
			//TODO Recorrer listado de transoferencias
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= null
			fs_forma_pago.comp_id							= fs_comprobantes.comp_id
			fs_forma_pago.forma_pago_id						= 3 //Transferencia
			fs_forma_pago.forma_pago_imp					= forms.factura_formas_de_pago.vl_transferencia
			databaseManager.saveData(fs_forma_pago)
		}
		//Retenciones IIBB
		if(forms.factura_formas_de_pago.vl_ret_iibb > 0){
			//TODO Recorrer listado de retenciones
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= null
			fs_forma_pago.comp_id							= fs_comprobantes.comp_id
			fs_forma_pago.forma_pago_id						= 4 // Ret IIBB
			fs_forma_pago.forma_pago_imp					= forms.factura_formas_de_pago.vl_ret_iibb 
			databaseManager.saveData(fs_forma_pago)
		}
		//Retenciones de ganancias
		if(forms.factura_formas_de_pago.vl_ret_gan > 0){
			//TODO Recorrer listado de retenciones
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= null
			fs_forma_pago.comp_id							= fs_comprobantes.comp_id
			fs_forma_pago.forma_pago_id						= 5// Ret gan
			fs_forma_pago.forma_pago_imp					= forms.factura_formas_de_pago.vl_ret_gan 
			databaseManager.saveData(fs_forma_pago)
		}
		
		
		
		//generamos Anticipo si corresponde
		if(forms.factura_formas_de_pago.vl_diferencia > 0){
			generarAnticipo(fs_comprobantes.comp_id)
		}
		
		
		plugins.svyBlockUI.stop()
}


/**
 * @param recibo_id
 *
 * @properties={typeid:24,uuid:"A5D215FF-48A3-49F3-A268-D4BFD0207B37"}
 * @AllowToRunInFind
 */
function generarAnticipo(recibo_id){
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobantes>} */
	var fs_comprobantes = databaseManager.getFoundSet('gpp', 'vent_comprobantes')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_datos>} */
	var fs_comprobantes_dat = databaseManager.getFoundSet('gpp', 'vent_comprobante_datos')
	
	/** @type {JSFoundSet<db:/gpp/vent_historicos_cliente>} */
	var fs_historicos_cliente = databaseManager.getFoundSet('gpp', 'vent_historicos_cliente')
	
	
	var aux_numero = null;
	try{
		vl_pv 		= scopes.usuario.vg_punto_venta
		
		/** @type {JSFoundSet<db:/gpp/core_codigos_d_comprobante>} */
		var fs_comprobantes_codigos = databaseManager.getFoundSet('gpp', 'core_codigos_d_comprobante')
		fs_comprobantes_codigos.find()
		fs_comprobantes_codigos.punto_venta_id 		= vl_pv
		fs_comprobantes_codigos.codigo_numero		= 90 //Anticipos
		fs_comprobantes_codigos.search()
		if(fs_comprobantes_codigos.getSize() > 0){
			aux_numero = fs_comprobantes_codigos.codigo_ultimo_numero + 1
		}
		
	}
	catch(e){
		aux_numero = 0
	}
	
	//Guardamos el comprobante (recibo)
	fs_comprobantes.newRecord()
	fs_comprobantes.company_id					= scopes.usuario.vg_company_id
	fs_comprobantes.cliente_id					= vl_cliente
	fs_comprobantes.comp_codigo					= 90 //Anticipos
	fs_comprobantes.comp_fecha_emision			= vl_fecha
	fs_comprobantes.comp_imp_total				= forms.factura_formas_de_pago.vl_diferencia
	fs_comprobantes.comp_numero					= aux_numero
	fs_comprobantes.comp_observacion			= vl_observaciones
	fs_comprobantes.comp_pv						= vl_pv
	fs_comprobantes.comp_estado_id				= 11 //Anticipo nuevo
	fs_comprobantes.comp_id_recibo				= recibo_id //id del recibo al que pertenece
	databaseManager.saveData(fs_comprobantes)
		

	//Guardamos comprobantes datos del cliente
	fs_comprobantes_dat.newRecord()
	fs_comprobantes_dat.company_id				= scopes.usuario.vg_company_id
	fs_comprobantes_dat.cliente_celular			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_celular
	fs_comprobantes_dat.cliente_direccion		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_direccion
	fs_comprobantes_dat.cliente_fax				= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_fax
	fs_comprobantes_dat.cliente_mail			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_mail
	fs_comprobantes_dat.cliente_nombre			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_nombre
	fs_comprobantes_dat.cliente_num_doc			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_num_doc
	fs_comprobantes_dat.cliente_observacion		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_observacion
	fs_comprobantes_dat.cliente_razon_social	= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_razon_social
	fs_comprobantes_dat.cliente_telefono		= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_telefono
	fs_comprobantes_dat.cod_postal_id			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.cod_postal_id
	fs_comprobantes_dat.comp_id					= fs_comprobantes.comp_id
	fs_comprobantes_dat.tipo_afip_id			= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.tipo_afip_id
	fs_comprobantes_dat.tipo_doc_id				= fs_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.tipo_doc_id 
	databaseManager.saveData(fs_comprobantes_dat)
	
	
	//Guardamos historico de cliente
	fs_historicos_cliente.newRecord()
	fs_historicos_cliente.company_id				= scopes.usuario.vg_company_id
	fs_historicos_cliente.cliente_id				= vl_cliente
	fs_historicos_cliente.comp_id					= fs_comprobantes.comp_id
	fs_historicos_cliente.hist_estado				= 2
	fs_historicos_cliente.hist_fecha				= vl_fecha
	fs_historicos_cliente.hist_tipo					= 9 //Anticipo
	databaseManager.saveData(fs_historicos_cliente)
	
	
	scopes.facturacion.SetUltimoNumeroComprobante(vl_pv,90,aux_numero)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"77F6C138-54F7-4F13-9B0F-E801BFC0D9E3"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	
	forms.factura_formas_de_pago_detalle.foundset.deleteAllRecords()
	
	forms.factura_formas_de_pago.vl_total_factura = forms.facturacion_pagos.vl_total
	forms.factura_formas_de_pago.vl_cheques = 0
	forms.factura_formas_de_pago.vl_efectivo = 0
	forms.factura_formas_de_pago.vl_transferencia = 0
	forms.factura_formas_de_pago.vl_ret_gan = 0
	forms.factura_formas_de_pago.vl_ret_iibb = 0
	forms.factura_formas_de_pago.vl_anticipos = 0
	forms.factura_formas_de_pago.vl_total = 0
	
	forms.factura_formas_de_pago.vl_diferencia = forms.facturacion_pagos.vl_total *(-1)
	
	vl_fecha = application.getServerTimeStamp()
	vl_cliente = forms.facturacion_pagos.vl_cliente
	globals.vg_cliente = forms.facturacion_pagos.vl_cliente
	
	vl_tipo = 1 //Automatico
	
	//Numero y codigo dell recibo
	vl_codigo			= 3 //Recibo Automatico
	vl_numero = null;
	try{
		vl_pv 		= scopes.usuario.vg_punto_venta
		
		/** @type {JSFoundSet<db:/gpp/core_codigos_d_comprobante>} */
		var fs_comprobantes = databaseManager.getFoundSet('gpp', 'core_codigos_d_comprobante')
		fs_comprobantes.find()
		fs_comprobantes.punto_venta_id 		= vl_pv
		fs_comprobantes.codigo_numero		= vl_codigo
		fs_comprobantes.search()
		if(fs_comprobantes.getSize() > 0){
			vl_numero = fs_comprobantes.codigo_ultimo_numero + 1
		}
		
	}
	catch(e){
		vl_pv = null;
		vl_numero = null;
	}
}

/**
 *
 * @properties={typeid:24,uuid:"782B0C38-89DD-4BCD-885D-9CC40C8AB20A"}
 * @AllowToRunInFind
 */
function onDataChangeTipo() {
	if(vl_tipo == 1){//Automatico
		//Numero y codigo dell recibo
		vl_codigo			= 3 //Recibo Automatico
		vl_numero = null;
		try{
			vl_pv 		= scopes.usuario.vg_punto_venta
			
			/** @type {JSFoundSet<db:/gpp/core_codigos_d_comprobante>} */
			var fs_comprobantes = databaseManager.getFoundSet('gpp', 'core_codigos_d_comprobante')
			fs_comprobantes.find()
			fs_comprobantes.punto_venta_id 		= vl_pv
			fs_comprobantes.codigo_numero		= vl_codigo
			fs_comprobantes.search()
			if(fs_comprobantes.getSize() > 0){
				vl_numero = fs_comprobantes.codigo_ultimo_numero + 1
				elements.f_numero.editable = false
			}
			
		}
		catch(e){
			vl_pv = null;
			vl_numero = null;
		}
	}
	else{//manual
		//PV, Numero y codigo del recibo
		vl_codigo			= 4 //Recibo Manual
		vl_numero = null;
		vl_pv 		= scopes.usuario.vg_punto_venta
		elements.f_numero.editable = true
	}
}


