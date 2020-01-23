/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DACF94D0-F976-485A-963D-AD19C7E40F10",variableType:8}
 */
var vl_precio_inicial = null;


/**
 * @properties={typeid:24,uuid:"41EA5770-FC68-42B1-B56F-1D07C8CA558D"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"67026209-32D7-433A-85AE-A02E1B2A4E71"}
 */
function onActioGrabar() {
	
	if(vl_precio_inicial != comp_precio_ajustado){
		forms.alquiler_nuevo.vl_total -= vl_precio_inicial
		forms.alquiler_nuevo.vl_total += comp_precio_ajustado
	}
	
	databaseManager.saveData()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"72CDD73E-68DC-4EC0-AA90-B4C2EDE8D5EF"}
 */
function onActioBorrar() {
	
	forms.alquiler_nuevo.vl_total -= comp_precio_ajustado
	
	foundset.deleteRecord()
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"17F44413-D732-4333-9E8C-9E3F61256AFD"}
 */
function onShow(firstShow, event) {
	vl_precio_inicial = comp_precio_ajustado
}
