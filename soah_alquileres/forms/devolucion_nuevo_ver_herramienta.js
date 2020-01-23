/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BBD2A32A-5980-41A4-BA0C-F06191AC22E8",variableType:8}
 */
var vl_precio_inicial = null;

/**
 * @properties={typeid:24,uuid:"5625DC0D-AE80-4BDD-986B-90A80C91DFB5"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"0CA353F2-7C37-45EF-8905-43009890DC59"}
 */
function onActioGrabar() {
	
	if(vl_precio_inicial != comp_precio_ajustado){
		forms.devolucion_nuevo.vl_total_alquiler -= vl_precio_inicial
		forms.devolucion_nuevo.vl_total_alquiler += comp_precio_calculado
		forms.devolucion_nuevo.calculoTotalesSinRecalcularDias()
	}
	
	databaseManager.saveData()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"72F221E6-042E-4614-B6B8-DCE8B212083C"}
 */
function onActioBorrar() {
	
	
	
	foundset.deleteRecord()
	
	forms.devolucion_nuevo.calculoTotales()
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89E10ACF-80B6-4316-8948-85679D7C297C"}
 */
function onShow(firstShow, event) {
	vl_precio_inicial = comp_precio_calculado
	
	controller.focusFirstField()
}

/**
 *
 * @properties={typeid:24,uuid:"4F63D3F4-4977-42D6-8C01-E82472D82580"}
 */
function onDataChangeDias() {
	comp_precio_calculado = comp_precio_ajustado * comp_dias_a_cobrar
}
