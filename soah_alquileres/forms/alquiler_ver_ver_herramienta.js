/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"029FC085-4084-4D3D-AC62-1CE5CF4A5E73",variableType:8}
 */
var vl_precio_inicial = null;

/**
 * @properties={typeid:24,uuid:"43A771B3-36F8-4765-999B-8DE6C6BE531B"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"3295A059-A972-4EBC-B5A6-12FD2E18BECE"}
 */
function onActioGrabar() {
	
	if(vl_precio_inicial != comp_precio){
		forms.alquiler_ver.foundset.comp_imp_total  -= vl_precio_inicial
		forms.alquiler_ver.foundset.comp_imp_total  += comp_precio
	}
	
	databaseManager.saveData()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"0A619F4F-ADCF-4738-899B-A57B68B89BCC"}
 */
function onActioBorrar() {
	
	forms.alquiler_ver.foundset.comp_imp_total -= comp_precio
	
	foundset.deleteRecord()
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"185757F6-8BAA-4891-BAA8-ED9F82F15134"}
 */
function onShow(firstShow, event) {
	vl_precio_inicial = comp_precio
}
