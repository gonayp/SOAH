/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CE589358-40A1-41B8-81E4-5B00D85F2132",variableType:4}
 */
var vl_seleccionadas = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1DFEB050-93DD-431B-914C-10D871EADCAA",variableType:4}
 */
var vl_obra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"39F92917-1738-4F53-8092-41C6C718EF33",variableType:4}
 */
var vl_cantidad = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5A76D149-BEDE-497B-89E1-413A48E800EA",variableType:8}
 */
var vl_total_iva = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7B56B185-6ECA-455B-ABF2-3FE11A23302F",variableType:8}
 */
var vl_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B161B570-1FBF-46FF-A31F-07841B0D5A7B",variableType:8}
 */
var vl_subtotal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"08E7D8EA-424D-46B4-9B45-D47AC9929DD2",variableType:4}
 */
var vl_cliente = null;

/**
 * @properties={typeid:24,uuid:"3304D7E7-59F1-47E4-B81F-D20AE24437B3"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 * @properties={typeid:24,uuid:"7BCD792E-2EC1-4DEA-8ACC-06E7482137A1"}
 * @SuppressWarnings(wrongparameters)
 */
function onActionNuevo() {
	if(vl_cliente == null){
		plugins.webnotificationsToastr.error("Falta seleccionar un cliente.","",globals.vg_toast_options)
		controller.focusFirstField()
		return
	}
	
	if(vl_cantidad < 1){
		plugins.webnotificationsToastr.error("Falta seleccionar algun comprobante para pagar.","",globals.vg_toast_options)
		return
	}
	
	generarPago()
	
	
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"D73A1226-DEE0-4462-9FAD-54FF74EBBD64"}
 */
function generarPago(){
	
	
	
	application.showForm(forms.facturacion_pagos_nuevo)
	
	
}



/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given) or.
 * when the ENTER key is used then only the selected foundset index is given
 * Use the record to exactly match where the user clicked on
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"9E926895-6F85-40CC-9613-2AC0DD8F9669"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	if(columnindex == 0){
		if(calc_seleccionado == 1){
			calc_seleccionado = 0
			if(comp_estado_id == 6){//Pendiente
				vl_subtotal -= comp_imp_total - comp_imp_iva2
				vl_total_iva -= comp_imp_iva2
				vl_total -= comp_imp_total
				
			}
			else{//Parcial
				calc_saldo = scopes.facturacion.calcularSaldoComprobante(foundset.getSelectedRecord())
				calc_pendiente = comp_imp_total - calc_saldo
				databaseManager.saveData()
				vl_subtotal -= calc_pendiente - comp_imp_iva2
				vl_total_iva -= comp_imp_iva2
				vl_total -= calc_pendiente
			}
			vl_cantidad -= 1
		}
		else{
			calc_seleccionado = 1
			if(comp_estado_id == 6){//Pendiente
				vl_subtotal += comp_imp_total - comp_imp_iva2
				vl_total_iva += comp_imp_iva2
				vl_total += comp_imp_total
				
			}
			else{//Parcial
				calc_saldo = scopes.facturacion.calcularSaldoComprobante(foundset.getSelectedRecord())
				calc_pendiente = comp_imp_total - calc_saldo
				databaseManager.saveData()
				//var aux_total = calcularCobrosRealizados(myRecord)
				vl_subtotal += calc_pendiente - comp_imp_iva2
				vl_total_iva += comp_imp_iva2
				vl_total += calc_pendiente
			}
			vl_cantidad += 1
		}
	}

}



/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AAACCBCC-C734-43BE-B770-E8A71F063D74"}
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
	
		onActionLimpiar()
		controller.focusFirstField()
	}
}

/**
 * @properties={typeid:24,uuid:"BDA0BE52-A2B4-425D-BE51-E1AB43EB8814"}
 */
function onActionLimpiar() {
	vl_cliente = null
	
	filtrar()
}

/**
 *
 * @properties={typeid:24,uuid:"EEC9D761-810C-4F1F-90FD-89E7218C2431"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	if(vl_cliente == null){
		foundset.clear()
	}
	else{
	
		foundset.find()
		foundset.comp_estado_id = "6 || 9" //facturas Pendientes o parcial
		foundset.cliente_id = vl_cliente
		foundset.search()
		
		vl_total = 0
		vl_total_iva = 0
		vl_subtotal = 0
		vl_cantidad = 0
		vl_obra = null
		var vl_obra_anterior = foundset.obra_id
		var misma_obra = 1
		
		var nRecordCount = 0
		nRecordCount = databaseManager.getFoundSetCount(foundset);
		for (var index = 1; index <= nRecordCount; index++) {
			var myRecord = foundset.getRecord(index);
			myRecord.calc_seleccionado = 1
			myRecord.calc_pendiente = myRecord.comp_imp_total
			databaseManager.saveData()
			if(myRecord.comp_estado_id == 6){//Pendiente
				vl_subtotal += myRecord.comp_imp_total - myRecord.comp_imp_iva2
				vl_total_iva += myRecord.comp_imp_iva2
				vl_total += myRecord.comp_imp_total
				
			}
			else{//Parcial
				myRecord.calc_saldo = scopes.facturacion.calcularSaldoComprobante(myRecord)
				myRecord.calc_pendiente = myRecord.comp_imp_total - myRecord.calc_saldo
				databaseManager.saveData()
				//var aux_total = calcularCobrosRealizados(myRecord)
				vl_subtotal += myRecord.calc_pendiente - myRecord.comp_imp_iva2
				vl_total_iva += myRecord.comp_imp_iva2
				vl_total += myRecord.calc_pendiente
			}
			vl_cantidad ++
			if(vl_obra_anterior != myRecord.obra_id){
				misma_obra = 0
			}
		}
		if(misma_obra){
			vl_obra = vl_obra_anterior
		}
	
	}
}


/**@param {JSRecord<db:/gpp/vent_comprobantes>} comprobante
 * @properties={typeid:24,uuid:"BEFE9D6A-FB05-4A8D-98A0-E46B4636BA3F"}
 */
function calcularCobrosRealizados(comprobante){
	
	var aux_total = 0
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(comprobante.vent_comprobantes_to_vent_comprobantes_recibo);
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecibo = comprobante.vent_comprobantes_to_vent_comprobantes_recibo.getRecord(index);
		aux_total += myRecibo.comp_importe
		
	}
	
	return aux_total
	
}
/**
 * @param {Number} columnindex
 * @param {string} sortdirection
 * @param {JSEvent} [event]
 *
 *
 * @properties={typeid:24,uuid:"2DC172D2-D488-4E31-BFB5-CA056E09F04E"}
 */
function onHeaderClick(columnindex, sortdirection, event) {
	if(columnindex == 0){
		
		if(vl_seleccionadas == 0){
			vl_seleccionadas = 1
			elements.table.getColumn(0).headerStyleClass = 'cell_center_header far fa-check-square cell-fontawesone'
			
		}
		else{
			vl_seleccionadas = 0
			elements.table.getColumn(0).headerStyleClass = 'cell_center_header far fa-square cell-fontawesone'
		}
		
		
		vl_subtotal = 0
		vl_total_iva = 0
		vl_total = 0
		vl_cantidad = 0
		
		var nRecordCount = 0
		nRecordCount = databaseManager.getFoundSetCount(foundset);
		for (var index = 1; index <= nRecordCount; index++) {
			var myRecord = foundset.getRecord(index);
			myRecord.calc_seleccionado = vl_seleccionadas
			if(myRecord.calc_seleccionado == 1){
				
				if(myRecord.comp_estado_id == 6){//Pendiente
					vl_subtotal += myRecord.comp_imp_total - myRecord.comp_imp_iva2
					vl_total_iva += myRecord.comp_imp_iva2
					vl_total += myRecord.comp_imp_total
					
				}
				else{//Parcial
					myRecord.calc_saldo = scopes.facturacion.calcularSaldoComprobante(myRecord)
					myRecord.calc_pendiente = myRecord.comp_imp_total - myRecord.calc_saldo
					databaseManager.saveData()
					//var aux_total = calcularCobrosRealizados(myRecord)
					vl_subtotal += myRecord.calc_pendiente - myRecord.comp_imp_iva2
					vl_total_iva += myRecord.comp_imp_iva2
					vl_total += myRecord.calc_pendiente
				}
				vl_cantidad += 1
			}
			databaseManager.saveData()
		}
		
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
 * @properties={typeid:24,uuid:"F54871B0-A4AE-4E49-A6EB-95A1EDDE0E8A"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	
	forms.factura_devolucion_ver.vl_form_padre = controller.getName()
	forms.factura_devolucion_ver.foundset.loadRecords(foundset.comp_id)
	application.showForm(forms.factura_devolucion_ver)
	
	

}
