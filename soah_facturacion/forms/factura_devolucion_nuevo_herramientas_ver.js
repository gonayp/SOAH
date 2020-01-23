/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EE09944B-6A01-4573-B93E-36D2D9ABF395",variableType:8}
 */
var vl_precio_inicial = null;

/**
 * @properties={typeid:24,uuid:"BC7CE0F4-863E-4155-9A47-943F316D2640"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"9B01BA9D-8421-467A-BD2F-401CDD1344B3"}
 */
function onActioGrabar() {
	
	if(vl_precio_inicial != comp_precio_calculado){
		forms.factura_devolucion_nuevo.vl_total_alquiler -= vl_precio_inicial
		forms.factura_devolucion_nuevo.vl_total_alquiler += comp_precio_calculado
		forms.factura_devolucion_nuevo.calculoTotales()
	}
	
	databaseManager.saveData()
	application.getWindow('Dialog').hide()
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CC92E32C-E047-4FB9-99D7-70AF2023C2BE"}
 */
function onShow(firstShow, event) {
	vl_precio_inicial = comp_precio_calculado
	
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"19CA2EEF-99AB-4270-A34B-D4B54D0DE43F"}
 */
function onDataChangeDias() {
	comp_precio_calculado = comp_dias_a_cobrar * comp_precio
}
