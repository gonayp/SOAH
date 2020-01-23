/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F094A94C-3F1B-4432-BF77-5D5BDA3B2C46",variableType:8}
 */
var vl_total = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"553C7EFD-550D-42CE-9DBE-4A09B7533B7F",variableType:8}
 */
var vl_total_fact = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5421A988-6EF3-408B-A205-4BAECD7BC761",variableType:8}
 */
var vl_total_alquiler = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"28F0621D-402E-4815-A526-47688D8A1FAF"}
 */
function onShow(firstShow, event) {

	calcularTotales()	
}

/**
 * @properties={typeid:24,uuid:"B48FEFA6-D993-4C32-8918-2D1549C0A961"}
 */
function inicializarTotales(){
	vl_total = 0
	vl_total_alquiler = 0
	vl_total_fact = 0

}

/**
 * @properties={typeid:24,uuid:"E5B6EA4B-460A-4306-8C0C-71D6494B6B43"}
 */
function calcularTotales(){
	
	inicializarTotales()
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = foundset.getRecord(index);
		if(comp_codigo == 2){//Devoluciones sin facturar
			vl_total_alquiler += myRecord.comp_imp_total
			vl_total += myRecord.comp_imp_total
		}
		else{
			vl_total += myRecord.comp_imp_total
		}
		
	}
	
}
