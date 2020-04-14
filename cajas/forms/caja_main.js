/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D848C9C6-BCB2-485A-8187-9BFCC023E0E8",variableType:8}
 */
var vl_otros_saldos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7FBAC231-7EEC-4E40-BDC5-5B09782C3D9C",variableType:8}
 */
var vl_saldo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6CAD8B5A-2ADF-47BE-B619-1B7015DD0013",variableType:8}
 */
var vl_egresos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2D0059D2-6606-4EBA-92AE-2C6D6C748D9A",variableType:8}
 */
var vl_ingresos = null;


/**
 * @properties={typeid:24,uuid:"67D4127B-6953-4C8F-9FC4-1F1C0325F04E"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm('soah_main')
}

/**
 * @properties={typeid:24,uuid:"826665A4-E29E-4A18-84B0-5CC18D143BA2"}
 */
function onActioGrabar() {
	
	databaseManager.saveData()
	application.showForm('soah_main')
	
}

/**
 * @properties={typeid:24,uuid:"E5F05076-9847-41C8-B6B2-FDC30A25FE9D"}
 */
function onActioCerrar() {
	
	
		
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.caja_cierre );
			
		
	
}




/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"4394C9B7-719F-4A6F-9312-CB29AD9E2248"}
 * @SuppressWarnings(wrongparameters)
 * @AllowToRunInFind
 */
function onShow(firstShow) {
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	elements.btn_guardar.enabled = true
	elements.btn_cierre.enabled = true
	if (scopes.usuario.vg_permiso_modificar == 0) {
		elements.btn_guardar.enabled = false
		elements.btn_cierre.enabled = false
	}
	
	
	borrarDatosTemporales()
	
	foundset.find()
	foundset.caja_estado = 1 //Abierto
	foundset.search()
	
	if (foundset.getSize() == 0){//Si no hay una caja abierta
	
		/** @type {JSFoundSet<db:/gpp/caja>} */
		var fs_caja = databaseManager.getFoundSet('gpp', 'caja')
	
		fs_caja.find()
		fs_caja.caja_estado = 2 //cerrado
		fs_caja.search()
		
		fs_caja.sort("caja_fecha_cierre desc")
		
		var f_ahora = application.getServerTimeStamp()
		
		foundset.newRecord()
		foundset.company_id					= scopes.usuario.vg_company_id
		foundset.caja_estado				= 1
		foundset.caja_fecha_apertura		= f_ahora
		foundset.caja_fecha_inicio			= new Date (f_ahora.getFullYear(),f_ahora.getMonth(),f_ahora.getDate(),0,0,0)
		foundset.caja_fecha_final			= new Date (f_ahora.getFullYear(),f_ahora.getMonth(),f_ahora.getDate(),23,59,59)
		if(fs_caja.getSize() > 0){
			foundset.caja_importe_inicial	= fs_caja.caja_importe_cierre
			foundset.caja_numero			= fs_caja.caja_numero + 1 
		}
		else{
			foundset.caja_importe_inicial	= 0
			foundset.caja_numero			= 1 
		}
		foundset.caja_importe_cierre		= 0
		
		
		databaseManager.saveData()
	}
	
	
	leerMovimientos()
	
	calcularTotal()
	
	
}


/**
 * @properties={typeid:24,uuid:"D46198DD-7CCD-440C-83B3-71A157DD6DE1"}
 */
function borrarDatosTemporales(){
	
	forms.caja_abierta_movimientos.foundset.deleteAllRecords()
	forms.caja_abierta_movimientos_otros.foundset.deleteAllRecords()
	databaseManager.saveData()
	
}


/**
 * @properties={typeid:24,uuid:"8988142A-0DFE-4D24-8B4B-D4B6DBA063F9"}
 */
function calcularTotal(){
	vl_ingresos = 0
	vl_egresos = 0
	vl_saldo = 0
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.caja_abierta_movimientos.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myMovimiento = forms.caja_abierta_movimientos.foundset.getRecord(index);
		vl_ingresos += myMovimiento.importe_ing
		vl_egresos += myMovimiento.importe_egr
	}
	
	
	foundset.caja_importe_cierre = Math.round( ((foundset.caja_importe_inicial + vl_ingresos) - vl_egresos)*100)/100
	vl_saldo = vl_ingresos - vl_egresos
	
}


/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"8C7643B7-5F99-4629-8C57-127A8ADC5ED5"}
 */
function leerMovimientos(){
	
	
	//Facturas y recibos de clientes
	/** @type {JSFoundSet<db:/gpp/vent_comp_forma_pago>} */
	var fs_formas_d_pago = databaseManager.getFoundSet('gpp', 'vent_comp_forma_pago')
	
	
	fs_formas_d_pago.find()
	fs_formas_d_pago.forma_pago_id		= 1 //Efectivo
	fs_formas_d_pago.caja_id 			= '^=' //Que no tengan caja asignada
	fs_formas_d_pago.vent_comp_forma_pago_to_vent_comprobantes.comp_codigo			= "5 || 3 || 4" //facturas y recibos
	fs_formas_d_pago.vent_comp_forma_pago_to_vent_comprobantes.comp_fecha_emision 	= utils.dateFormat(foundset.caja_fecha_inicio, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(foundset.caja_fecha_final, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	fs_formas_d_pago.search()
	
	var nCompCount = 0
	nCompCount = databaseManager.getFoundSetCount(fs_formas_d_pago);
	for (var i = 1; i <= nCompCount; i++) {
		var myFormaPago = fs_formas_d_pago.getRecord(i);
		forms.caja_abierta_movimientos.foundset.newRecord()
		forms.caja_abierta_movimientos.foundset.descripcion	= myFormaPago.vent_comp_forma_pago_to_vent_comprobantes.calc_num_comprobante +" - "+ myFormaPago.vent_comp_forma_pago_to_vent_comprobantes.vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_nombre
		forms.caja_abierta_movimientos.foundset.fecha		= myFormaPago.vent_comp_forma_pago_to_vent_comprobantes.comp_fecha_emision
		forms.caja_abierta_movimientos.foundset.id			= myFormaPago.comp_forma_pago_id
		forms.caja_abierta_movimientos.foundset.tipo		= 1 //Efectivo clientes
		forms.caja_abierta_movimientos.foundset.importe_ing	= myFormaPago.forma_pago_imp
		forms.caja_abierta_movimientos.foundset.importe_egr	= 0
		
		databaseManager.saveData()
	}
	
	
	//Leer movimientos manuales
	/** @type {JSFoundSet<db:/gpp/caja_movimiento>} */
	var fs_caja_movimiento = databaseManager.getFoundSet('gpp', 'caja_movimiento')
	fs_caja_movimiento.find()
	fs_caja_movimiento.caja_id = '^='
	fs_caja_movimiento.mov_fecha = utils.dateFormat(foundset.caja_fecha_inicio, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(foundset.caja_fecha_final, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	fs_caja_movimiento.search()
	
	var nMovCount = 0
	nMovCount = databaseManager.getFoundSetCount(fs_caja_movimiento);
	for (var j = 1; j <= nMovCount; j++) {
		var myMovimiento = fs_caja_movimiento.getRecord(j);
		forms.caja_abierta_movimientos.foundset.newRecord()
		forms.caja_abierta_movimientos.foundset.descripcion	= myMovimiento.mov_descripcion
		forms.caja_abierta_movimientos.foundset.fecha		= myMovimiento.mov_fecha
		forms.caja_abierta_movimientos.foundset.id			= myMovimiento.caja_mov_id
		forms.caja_abierta_movimientos.foundset.tipo		= 3 //movimientos manuales
		if(myMovimiento.mov_tipo == 1){
			forms.caja_abierta_movimientos.foundset.importe_ing	= myMovimiento.mov_importe
			forms.caja_abierta_movimientos.foundset.importe_egr	= 0
		}
		else{
			forms.caja_abierta_movimientos.foundset.importe_ing	= 0
			forms.caja_abierta_movimientos.foundset.importe_egr	= myMovimiento.mov_importe
		}
		
		databaseManager.saveData()
	}
	
	
	
	
	
	//Otros movimientos no efectivo
	fs_formas_d_pago.find()
	fs_formas_d_pago.forma_pago_id		= '!1' //cualquiera que no sea Efectivo
	fs_formas_d_pago.caja_id 			= '^=' //Que no tengan caja asignada
	fs_formas_d_pago.vent_comp_forma_pago_to_vent_comprobantes.comp_codigo			= "5 || 3 || 4" //facturas y recibos
	fs_formas_d_pago.vent_comp_forma_pago_to_vent_comprobantes.comp_fecha_emision 	= utils.dateFormat(foundset.caja_fecha_inicio, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(foundset.caja_fecha_final, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	fs_formas_d_pago.search()
	
	var nCompOCount = 0
	nCompOCount = databaseManager.getFoundSetCount(fs_formas_d_pago);
	for (var k = 1; k <= nCompOCount; k++) {
		var myFormaPago_ = fs_formas_d_pago.getRecord(k);
		forms.caja_abierta_movimientos_otros.foundset.newRecord()
		forms.caja_abierta_movimientos_otros.foundset.descripcion	= myFormaPago_.vent_comp_forma_pago_to_vent_comprobantes.calc_num_comprobante +" - "+ myFormaPago_.vent_comp_forma_pago_to_vent_comprobantes.vent_comprobantes_to_vent_comprobante_datos.cliente_nombre
		forms.caja_abierta_movimientos_otros.foundset.fecha			= myFormaPago_.vent_comp_forma_pago_to_vent_comprobantes.comp_fecha_emision
		forms.caja_abierta_movimientos_otros.foundset.id			= myFormaPago_.comp_forma_pago_id
		forms.caja_abierta_movimientos_otros.foundset.importe_ing	= myFormaPago_.forma_pago_imp
		forms.caja_abierta_movimientos_otros.foundset.importe_egr	= 0
		switch (myFormaPago_.forma_pago_id) {
		case 2://Cheques
			forms.caja_abierta_movimientos_otros.foundset.tipo		= 4 //Cheques
			forms.caja_abierta_movimientos_otros.foundset.numero	= myFormaPago_.vent_comp_forma_pago_to_cheq_cheques.cheque_numero
			break;
		case 3://Transferencias
			forms.caja_abierta_movimientos_otros.foundset.tipo		= 5
			break;
		case 4://Ret IIBB
			forms.caja_abierta_movimientos_otros.foundset.tipo		= 6
			break;
		case 5://Ret Gan
			forms.caja_abierta_movimientos_otros.foundset.tipo		= 7
			break;
		}
		
		databaseManager.saveData()
	}
	
	
	//Facturas de proveedores
	/** @type {JSFoundSet<db:/gpp/cmpr_comp_forma_pago>} */
	var fs_cmpr_formas_d_pago = databaseManager.getFoundSet('gpp', 'cmpr_comp_forma_pago')
	
	
	fs_cmpr_formas_d_pago.find()
	fs_cmpr_formas_d_pago.caja_id 			= '^=' //Que no tengan caja asignada
	fs_cmpr_formas_d_pago.cmpr_comp_forma_pago_to_cmpr_comprobantes.cmpr_comp_codigo			= "105 || 110 || 115 || 135 || 140 || 145" //facturas y ND
	fs_cmpr_formas_d_pago.cmpr_comp_forma_pago_to_cmpr_comprobantes.cmpr_comp_fecha_emision 	= utils.dateFormat(foundset.caja_fecha_inicio, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(foundset.caja_fecha_final, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	fs_cmpr_formas_d_pago.search()
	
	var n = 0
	n = databaseManager.getFoundSetCount(fs_cmpr_formas_d_pago);
	for (var l = 1; l <= n; l++) {
		var myFormaPagoProv = fs_cmpr_formas_d_pago.getRecord(l);
		if(myFormaPagoProv.forma_pago_id == 1){ //efectivo
			forms.caja_abierta_movimientos.foundset.newRecord()
			forms.caja_abierta_movimientos.foundset.descripcion	= myFormaPagoProv.cmpr_comp_forma_pago_to_cmpr_comprobantes.calc_num_comprobante +" - "+ myFormaPagoProv.cmpr_comp_forma_pago_to_cmpr_comprobantes.cmpr_comprobantes_to_cmpr_proveedores.cmpr_proveedores_to_core.core_nombre
			forms.caja_abierta_movimientos.foundset.fecha		= myFormaPagoProv.cmpr_comp_forma_pago_to_cmpr_comprobantes.cmpr_comp_fecha_emision
			forms.caja_abierta_movimientos.foundset.id			= myFormaPagoProv.comp_forma_pago_id
			forms.caja_abierta_movimientos.foundset.tipo		= 2//Efectivo proveedor
			forms.caja_abierta_movimientos.foundset.importe_ing	= 0
			forms.caja_abierta_movimientos.foundset.importe_egr	= myFormaPagoProv.forma_pago_imp
			
			databaseManager.saveData()
		}
		else{
			forms.caja_abierta_movimientos_otros.foundset.newRecord()
			forms.caja_abierta_movimientos_otros.foundset.descripcion	= myFormaPagoProv.cmpr_comp_forma_pago_to_cmpr_comprobantes.calc_num_comprobante +" - "+ myFormaPagoProv.cmpr_comp_forma_pago_to_cmpr_comprobantes.cmpr_comprobantes_to_cmpr_proveedores.cmpr_proveedores_to_core.core_nombre
			forms.caja_abierta_movimientos_otros.foundset.fecha			= myFormaPagoProv.cmpr_comp_forma_pago_to_cmpr_comprobantes.cmpr_comp_fecha_emision
			forms.caja_abierta_movimientos_otros.foundset.id			= myFormaPagoProv.comp_forma_pago_id
			forms.caja_abierta_movimientos_otros.foundset.importe_ing	= myFormaPagoProv.forma_pago_imp
			forms.caja_abierta_movimientos_otros.foundset.importe_egr	= 0
			switch (myFormaPago_.forma_pago_id) {
			case 2://Cheques
				forms.caja_abierta_movimientos_otros.foundset.tipo		= 4 //Cheques
				break;
			case 3://Transferencias
				forms.caja_abierta_movimientos_otros.foundset.tipo		= 5
				break;
			case 4://Ret IIBB
				forms.caja_abierta_movimientos_otros.foundset.tipo		= 6
				break;
			case 5://Ret Gan
				forms.caja_abierta_movimientos_otros.foundset.tipo		= 7
				break;
			}
			
			databaseManager.saveData()
		}
	}
	
	
}


/**
 *
 * @properties={typeid:24,uuid:"AD99E178-9972-4407-BC4F-FEBA8E96304C"}
 */
function onDataChangePeriodo() {
	borrarDatosTemporales()
	leerMovimientos()
	calcularTotal()
	
}
