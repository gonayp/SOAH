

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7D520BDE-B642-4FAC-9321-84ECAA5189FC"}
 */
function onShow(firstShow, event) {

	var vl_fecha = application.getServerTimeStamp()
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myHerramienta = foundset.getRecord(index);

		var vl_dias_reales = scopes.alquileres.calcularDiasParaCobrar(myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes.comp_fecha_emision,vl_fecha)
		if(myHerramienta.comp_fec_ult_facturacion != null){
			myHerramienta.calc_dias_reales = scopes.alquileres.calcularDiasParaCobrar(myHerramienta.comp_fec_ult_facturacion,vl_fecha)
		}
		else{
			myHerramienta.calc_dias_reales = vl_dias_reales
		}
		
		var x = vl_fecha - myHerramienta.vent_comprobante_herramientas_to_vent_comprobantes.comp_fecha_emision
		var one_day=1000*60*60*24 //ms * sec * min * hrs in a day 
	
		var diffExact = x / one_day //gets difference in days 
		var diffRounded = Math.ceil(diffExact ) // rounds 2.343 to 3
		
		myHerramienta.comp_dias_alquiler = diffRounded
		
		
		
	}
	
}
