/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5D7559C3-AFC4-4B9E-BE4E-6880289402AF",variableType:4}
 */
var vl_condicion_pago = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8582E757-4A97-4F43-BB70-057F2ED60592",variableType:4}
 */
var vl_comp_devolucion = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C9119028-9EE4-4505-9B6E-C2AC131DF93D",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0E1956D9-3EF3-45F2-8065-7620A7A9E58C",variableType:4}
 */
var vl_tipo_a = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7E607C7B-393A-4808-89E4-A1151781B911",variableType:4}
 */
var vl_obra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6F593784-B42F-4194-B64F-3A9A285B6C7B",variableType:8}
 */
var vl_subtotal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"742C3454-1D3A-4262-854E-826AEE56696E",variableType:8}
 */
var vl_total_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C4D006D5-1093-4B90-929A-0DF6E2BD55C3",variableType:8}
 */
var vl_total_ventas = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8E6F93EE-0CC8-4B15-95C6-A2706D09E292",variableType:8}
 */
var vl_total_alquiler = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4D9E3422-03AA-4ED6-94D0-1AABBCE64B36",variableType:4}
 */
var vl_codigo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"712A75A6-8C95-41A0-BF63-45EBFD0FA381",variableType:4}
 */
var vl_pv = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7F61B160-49E6-4AA7-8910-291D344C26D4",variableType:8}
 */
var vl_total = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"110A5108-E257-414B-9003-8BFD2F4EFD22"}
 */
var vl_observaciones = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"5263813E-B772-4B69-A1A1-A75269AD1F46",variableType:93}
 */
var vl_fecha = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7A047416-5EDC-453F-8799-42EE9BFA3553",variableType:4}
 */
var vl_proveedor = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EE6818DC-4AF3-44E6-9B1D-F0AB0F098277",variableType:4}
 */
var vl_numero = null;

/**
 * Perform the element default action.
 *
 *
 *
 * @properties={typeid:24,uuid:"E6A6C429-C828-417B-AA00-92846575ADE1"}
 */
function onActionVolver() {
	limpiarVariables()
	application.showForm(forms.comprobantes_main)
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F74966F2-3F9E-4C67-8E9C-793318B6DEE8"}
 * @SuppressWarnings(wrongparameters)
 */
function onActionGuardar(event) {

	if (vl_pv == null) {
		plugins.webnotificationsToastr.error("Falta el punto de venta.","",globals.vg_toast_options)
		controller.focusField("f_pv",true)
		return
	}
	
	if (vl_numero == null) {
		plugins.webnotificationsToastr.error("Falta el numero de comprobante.","",globals.vg_toast_options)
		controller.focusField("f_numero",true)
		return
	}
	
	if(vl_proveedor == null){
		plugins.webnotificationsToastr.error("Falta seleccionar el proveedor.","",globals.vg_toast_options)
		controller.focusField("f_cliente",true)
		return
	}
	if (vl_fecha == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de fecha.", "", globals.vg_toast_options)
		controller.focusField("f_fecha", true)
		return
	}
	
	vl_total = (Math.round(vl_total*100))/100
	//Si es factura comprobamos forma de pago
	if((vl_codigo >= 105 && vl_codigo <= 115) || (vl_codigo >= 135 && vl_codigo <= 145)){
		//Contado
		if(vl_condicion_pago == 1 && forms.comprobante_nuevo_forma_pago.vl_total != vl_total){
			plugins.webnotificationsToastr.error("El importe pagado no corresponde con el importe total a facturar.", "", globals.vg_toast_options)
			return
		}
	}
	

	
	
	grabarFactura()
	
	
	
}

/**
 * @properties={typeid:24,uuid:"2299816A-7E47-4E5A-8242-019A8D7AE1A3"}
 * @AllowToRunInFind
 */
function grabarFactura(){

	var spinner = 'Cube grid'//"Wandering cubes", "Pulse", "Chasing dots", "Three bounce", "Circle", "Cube grid", "Fading circle", "Folding cube", "Rotating plane", "Double bounce", "Wave", 
	var overlayOpacity = 0.7
	plugins.svyBlockUI.overlayColor = "black"
	plugins.svyBlockUI.overlayOpacity = overlayOpacity
	plugins.svyBlockUI.spinner = spinner
	plugins.svyBlockUI.spinnerBgColor = "yellow"
	plugins.svyBlockUI.show("Facturando...")
		
	
	/** @type {JSFoundSet<db:/gpp/core_puntos_de_venta>} */
	var fs_puntos_venta = databaseManager.getFoundSet('gpp', 'core_puntos_de_venta')
	
	plugins.svyBlockUI.show("Creando comprobante")
		
	
	fs_puntos_venta.loadRecords(vl_pv)
	
		
	grabar()
		
	
}



/**
 * 
 *
 * @properties={typeid:24,uuid:"422C0FCB-0C6A-433F-A43E-004F562E8D1A"}
 */
function grabar(){
	
	
	/** @type {JSFoundSet<db:/gpp/cmpr_comprobantes>} */
	var fs_comprobantes = databaseManager.getFoundSet('gpp', 'cmpr_comprobantes')
	
	/** @type {JSFoundSet<db:/gpp/cmpr_comprobante_datos>} */
	var fs_comprobantes_dat = databaseManager.getFoundSet('gpp', 'cmpr_comprobante_datos')
	
	/** @type {JSFoundSet<db:/gpp/cmpr_historicos_proveedores>} */
	var fs_historicos_proveedor = databaseManager.getFoundSet('gpp', 'cmpr_historicos_proveedores')
	
	/** @type {JSFoundSet<db:/gpp/cmpr_comprobantes_productos>} */
	var fs_comprobante_productos = databaseManager.getFoundSet('gpp', 'cmpr_comprobantes_productos')	
	

		
	//Guardamos el comprobante
	fs_comprobantes.newRecord()
	fs_comprobantes.company_id						= scopes.usuario.vg_company_id
	fs_comprobantes.proveedor_id					= vl_proveedor
	fs_comprobantes.cmpr_comp_codigo				= vl_codigo
	fs_comprobantes.cmpr_comp_fecha_emision			= vl_fecha
	fs_comprobantes.cmpr_comp_imp_total				= vl_total
	fs_comprobantes.cmpr_comp_numero				= vl_numero
	fs_comprobantes.cmpr_comp_observacion			= vl_observaciones
	fs_comprobantes.cmpr_comp_pv					= vl_pv
	fs_comprobantes.cmpr_comp_imp_grav2				= vl_subtotal
	fs_comprobantes.cmpr_comp_imp_iva2				= vl_total_iva
	fs_comprobantes.cmpr_comp_imp_total				= vl_total
	fs_comprobantes.cmpr_comp_condicion				= vl_condicion_pago
	if(vl_condicion_pago == 1 || (vl_codigo >=20 && vl_codigo <= 30)){//al contado o notas de credito
		fs_comprobantes.cmpr_comp_estado			= 7//Cerrado
	}
	else{
		fs_comprobantes.cmpr_comp_estado			= 6 //Pendiente
	}
	databaseManager.saveData(fs_comprobantes)
	
	
	//Guardamos comprobantes datos del proveedor
	fs_comprobantes_dat.newRecord()
	fs_comprobantes_dat.company_id				= scopes.usuario.vg_company_id
	fs_comprobantes_dat.cliente_celular			= fs_comprobantes.cmpr_comprobantes_to_cmpr_proveedores.cmpr_proveedores_to_core.core_celular
	fs_comprobantes_dat.cliente_direccion		= fs_comprobantes.cmpr_comprobantes_to_cmpr_proveedores.cmpr_proveedores_to_core.core_direccion
	fs_comprobantes_dat.cliente_fax				= fs_comprobantes.cmpr_comprobantes_to_cmpr_proveedores.cmpr_proveedores_to_core.core_fax
	fs_comprobantes_dat.cliente_mail			= fs_comprobantes.cmpr_comprobantes_to_cmpr_proveedores.cmpr_proveedores_to_core.core_mail
	fs_comprobantes_dat.cliente_nombre			= fs_comprobantes.cmpr_comprobantes_to_cmpr_proveedores.cmpr_proveedores_to_core.core_nombre
	fs_comprobantes_dat.cliente_num_doc			= fs_comprobantes.cmpr_comprobantes_to_cmpr_proveedores.cmpr_proveedores_to_core.core_num_doc
	fs_comprobantes_dat.cliente_observacion		= fs_comprobantes.cmpr_comprobantes_to_cmpr_proveedores.cmpr_proveedores_to_core.core_observacion
	fs_comprobantes_dat.cliente_razon_social	= fs_comprobantes.cmpr_comprobantes_to_cmpr_proveedores.cmpr_proveedores_to_core.core_razon_social
	fs_comprobantes_dat.cliente_telefono		= fs_comprobantes.cmpr_comprobantes_to_cmpr_proveedores.cmpr_proveedores_to_core.core_telefono
	fs_comprobantes_dat.cod_postal_id			= fs_comprobantes.cmpr_comprobantes_to_cmpr_proveedores.cmpr_proveedores_to_core.cod_postal_id
	fs_comprobantes_dat.cmpr_comp_id			= fs_comprobantes.cmpr_comp_id
	fs_comprobantes_dat.tipo_afip_id			= fs_comprobantes.cmpr_comprobantes_to_cmpr_proveedores.cmpr_proveedores_to_core.tipo_afip_id
	fs_comprobantes_dat.tipo_doc_id				= fs_comprobantes.cmpr_comprobantes_to_cmpr_proveedores.cmpr_proveedores_to_core.tipo_doc_id 
	databaseManager.saveData(fs_comprobantes_dat)
	
	
	
	//Guardamos historico de proveedor
	fs_historicos_proveedor.newRecord()
	fs_historicos_proveedor.company_id				= scopes.usuario.vg_company_id
	fs_historicos_proveedor.proveedor_id			= vl_proveedor
	fs_historicos_proveedor.cmpr_comp_id			= fs_comprobantes.cmpr_comp_id
	fs_historicos_proveedor.hist_estado				= 2
	fs_historicos_proveedor.hist_fecha				= vl_fecha
	fs_historicos_proveedor.hist_tipo				= 4 //Comprobante
	databaseManager.saveData(fs_historicos_proveedor)
	
	//Guardar productos
	var nCount = 0
	nCount = databaseManager.getFoundSetCount(forms.comprobante_nuevo_productos.foundset);
	for (var i = 1; i <= nCount; i++) {
		var myProducto = forms.comprobante_nuevo_productos.foundset.getRecord(i);
		fs_comprobante_productos.newRecord()
		fs_comprobante_productos.company_id 			= scopes.usuario.vg_company_id
		fs_comprobante_productos.cmpr_comp_id			= fs_comprobantes.cmpr_comp_id
		fs_comprobante_productos.comp_precio			= myProducto.producto_precio
		fs_comprobante_productos.producto_id			= myProducto.producto_id
		fs_comprobante_productos.comp_cantidad			= myProducto.producto_cantidad
		fs_comprobante_productos.comp_prod_nombre		= myProducto.producto_nombre
		fs_comprobante_productos.comp_prod_unidad		= myProducto.producto_unidad
		databaseManager.saveData(fs_comprobante_productos)
	}
	
	
	if(vl_condicion_pago == 1){//contado
		
		//Guardamos la forma de pago
		/** @type {JSFoundSet<db:/gpp/cmpr_comp_forma_pago>} */
		var fs_forma_pago = databaseManager.getFoundSet('gpp', 'cmpr_comp_forma_pago')
		
		//Efectivo
		if(forms.comprobante_nuevo_forma_pago.vl_efectivo > 0){
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= null
			fs_forma_pago.cmpr_comp_id							= fs_comprobantes.cmpr_comp_id
			fs_forma_pago.forma_pago_id						= 1 //Efectivo
			fs_forma_pago.forma_pago_imp					= forms.comprobante_nuevo_forma_pago.vl_efectivo 
			databaseManager.saveData(fs_forma_pago)
		}
		
		//Cheques
		if(forms.comprobante_nuevo_forma_pago.vl_cheques > 0){
			//TODO Recorrer listado de cheques
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= 0
			fs_forma_pago.cmpr_comp_id							= fs_comprobantes.cmpr_comp_id
			fs_forma_pago.forma_pago_id						= 2 //Cheques
			fs_forma_pago.forma_pago_imp					= forms.comprobante_nuevo_forma_pago.vl_cheques 
			databaseManager.saveData(fs_forma_pago)
		}
		//Transferencia
		if(forms.comprobante_nuevo_forma_pago.vl_transferencia > 0){
			//TODO Recorrer listado de transoferencias
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= null
			fs_forma_pago.cmpr_comp_id							= fs_comprobantes.cmpr_comp_id
			fs_forma_pago.forma_pago_id						= 3 //Transferencia
			fs_forma_pago.forma_pago_imp					= forms.comprobante_nuevo_forma_pago.vl_transferencia 
			databaseManager.saveData(fs_forma_pago)
		}
		//Retenciones IIBB
		if(forms.comprobante_nuevo_forma_pago.vl_ret_iibb > 0){
			//TODO Recorrer listado de retenciones
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= null
			fs_forma_pago.cmpr_comp_id							= fs_comprobantes.cmpr_comp_id
			fs_forma_pago.forma_pago_id						= 4 // Ret IIBB
			fs_forma_pago.forma_pago_imp					= forms.comprobante_nuevo_forma_pago.vl_ret_iibb 
			databaseManager.saveData(fs_forma_pago)
		}
		//Retenciones de ganancias
		if(forms.comprobante_nuevo_forma_pago.vl_ret_gan > 0){
			//TODO Recorrer listado de retenciones
			fs_forma_pago.newRecord()
			fs_forma_pago.company_id						= scopes.usuario.vg_company_id
			fs_forma_pago.cheque_id							= null
			fs_forma_pago.cmpr_comp_id							= fs_comprobantes.cmpr_comp_id
			fs_forma_pago.forma_pago_id						= 5// Ret gan
			fs_forma_pago.forma_pago_imp					= forms.comprobante_nuevo_forma_pago.vl_ret_gan 
			databaseManager.saveData(fs_forma_pago)
		}
	}
	
	
	scopes.facturacion.SetUltimoNumeroComprobante(vl_pv,vl_codigo,vl_numero)
	plugins.svyBlockUI.stop()
	
	
	forms.comprobantes_main.onActionLimpiar()
	
	onActionVolver()
}

/**
 * Calcula los totales de una devolucion
 * @param p_comp_id
 *
 * @properties={typeid:24,uuid:"1F935BAD-2AD8-416A-9CD2-5C1DF303141F"}
 */
function calcularTotal(p_comp_id){
	/** @type {JSFoundSet<db:/gpp/vent_comprobantes>} */
	var fs_comprobantes = databaseManager.getFoundSet('gpp', 'vent_comprobantes')
	
	fs_comprobantes.loadRecords(p_comp_id)
	
	if(databaseManager.hasRecords(fs_comprobantes)){
		
		fs_comprobantes.comp_imp_alqu = 0
		
		var vl_subtotal_ = fs_comprobantes.comp_imp_alqu + fs_comprobantes.comp_imp_ventas
		fs_comprobantes.comp_imp_iva2 = vl_subtotal_ * 0.21
		fs_comprobantes.comp_imp_total = vl_subtotal_ + fs_comprobantes.comp_imp_iva2
		
		
		databaseManager.saveData(fs_comprobantes)
	}
}

/**
 * @properties={typeid:24,uuid:"5466A351-70F6-4207-B699-378A53535640"}
 * @AllowToRunInFind
 */
function limpiarVariables(){

	
	scopes.globals.vg_cliente = null
	
	vl_total = 0;
	vl_total_alquiler = 0
	vl_total_iva = 0
	vl_total_ventas = 0
	vl_subtotal = 0
	
	vl_observaciones = null;
	vl_fecha = application.getServerTimeStamp();
	vl_proveedor = null;
	
	vl_codigo = null
	vl_pv 	= null
	vl_numero = null;
	
	
	forms.comprobante_nuevo_productos.foundset.loadAllRecords()
	forms.comprobante_nuevo_productos.foundset.deleteAllRecords()
}

/**
 * @properties={typeid:24,uuid:"BA1CC23E-CF6F-4043-B0C1-6D0E93ABF77E"}
 */
function calculoTotales(){

	calculoVentas()
	
	vl_subtotal =  vl_total_ventas
	vl_total_iva = vl_subtotal * 0.21
	vl_total = vl_subtotal + vl_total_iva
}

/**
 * @properties={typeid:24,uuid:"D9F9ED31-673F-4556-94F2-53D3397564FB"}
 */
function calculoVentas(){
	
	
	vl_total_ventas = 0	
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.comprobante_nuevo_productos.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myProducto= forms.comprobante_nuevo_productos.foundset.getRecord(index);
		vl_total_ventas += myProducto.producto_total
	}
	
}

/**
 *
 * @properties={typeid:24,uuid:"2FEBC66E-E947-44E7-80CE-ABF72D7EE8C6"}
 */
function onDataChangeFecha() {
	calculoTotales()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3B523F53-42E7-4050-8035-D9857A641F4E"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	
	forms.comprobante_nuevo_forma_pago.vl_cheques = 0
	forms.comprobante_nuevo_forma_pago.vl_efectivo = 0
	forms.comprobante_nuevo_forma_pago.vl_transferencia = 0
	forms.comprobante_nuevo_forma_pago.vl_ret_gan = 0
	forms.comprobante_nuevo_forma_pago.vl_ret_iibb = 0
	forms.comprobante_nuevo_forma_pago.vl_total = 0
	
	vl_proveedor 			= null
	vl_fecha				= application.getServerTimeStamp()
	vl_numero				= null
	vl_observaciones		= null
	vl_subtotal				= vl_subtotal
	vl_total				= vl_total
	vl_total_iva			= vl_total_iva
	vl_condicion_pago		= 1//contado
	
	//Numero y codigo de la factura
	vl_codigo			= 105 //Factura proveedor
	vl_numero = null;
	
	vl_pv 		= null
	
	controller.focusFirstField()
		
}


