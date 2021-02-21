/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"30FC2DCD-E8BE-4CE0-95D5-75BE0F7F7BCD",variableType:8}
 */
var vl_subtotal = null;

/**
 * Perform the element default action.
 *
 *
 *
 * @properties={typeid:24,uuid:"95068C12-EBE2-4E2D-9E77-94830ABBA3EE"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}




/**
 * @properties={typeid:24,uuid:"F2DF5C8D-47DA-40DE-B8AA-B19BF75FD69C"}
 * @AllowToRunInFind
 */
function limpiarVariables(){

	scopes.globals.vg_tipo_comprobante = 2
	scopes.globals.vg_cliente = cliente_id
	
	//vl_subtotal = 0
	
	//calculoTotales()
	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AE87A22C-692A-4030-8032-46099FBD4110"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	
	
	limpiarVariables()
	
	
}


/**
 * @properties={typeid:24,uuid:"7D3B7CF0-689A-4BA2-B7F8-DBBA81D53AD8"}
 */
function calculoTotales(){
	calculoDiasPrecio()//Alquileres
	calculoVentas()
	
	vl_subtotal = comp_imp_alqu + comp_imp_ventas
	//comp_imp_iva2 = vl_subtotal * 0.21
	//comp_imp_total = vl_subtotal + comp_imp_iva2
}

/**
 * @properties={typeid:24,uuid:"99324E87-1A6F-4EDF-A033-DA98ACDFA2DE"}
 */
function calculoVentas(){
	
	
	//comp_imp_ventas = 0	
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.devolucion_detalle_ventas.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myProducto= forms.devolucion_detalle_ventas.foundset.getRecord(index);
		myProducto.calc_total = myProducto.comp_cantidad * myProducto.comp_precio

	}
	
}

/**
 * @properties={typeid:24,uuid:"C104BAC7-0555-404B-BBA1-F7569502B523"}
 * @SuppressWarnings(wrongparameters)
 */
function calculoDiasPrecio(){
	
	
	var vl_fecha_devolucion = comp_fecha_emision
	
	forms.devolucion_ver_herramientas.foundset.loadAllRecords()
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.devolucion_ver_herramientas.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myHerramienta = forms.devolucion_ver_herramientas.foundset.getRecord(index);
		if(databaseManager.hasRecords(myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes_alquiler)){
			
			var x = vl_fecha_devolucion - myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes_alquiler.comp_fecha_emision //substracting two dates returns difference in milliseconds 
			var one_day=1000*60*60*24 //ms * sec * min * hrs in a day 
		
		
			var diffExact = x / one_day //gets difference in days 
			var diffRounded = Math.ceil(diffExact ) // rounds 2.343 to 3
			
			myHerramienta.calc_dias_reales = diffRounded
			
			myHerramienta.calc_total= myHerramienta.comp_dias_alquiler * myHerramienta.comp_precio
			
		}
	}

	
}

/**
 *
 * @properties={typeid:24,uuid:"22D85721-2952-47F2-919F-C4F2B01F50EA"}
 */
function onDataChangeFecha() {
	calculoTotales()
}

/**
 * @properties={typeid:24,uuid:"719A95F0-C622-4A40-925D-64405E73AF99"}
 */
function onActionImprimir() {
	globals.imprimirReporteJasper("gpp","vent_remito_devolucion.jasper","",plugins.jasperPluginRMI.OUTPUT_FORMAT.VIEW, {comp_id: foundset.comp_id})
}
