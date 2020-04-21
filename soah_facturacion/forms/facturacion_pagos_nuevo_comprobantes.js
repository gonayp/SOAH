
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"59AD2108-53A0-4380-BAF0-FFAFFE15C309",variableType:8}
 */
var vl_total = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3E1EF0AA-5613-47F3-A682-519E17D6E353"}
 * @SuppressWarnings(wrongparameters)
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	
	
	
	vl_total = forms.facturacion_pagos.vl_total
}

/**
 * @param p_importe
 *
 * @properties={typeid:24,uuid:"0800EEE6-013D-44E9-A4B9-4D9B7C448EEB"}
 */
function calcularImportesAPagar(p_importe){
	
	var aux_aplicado = 0
	var aux = 0
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = foundset.getRecord(index);
		if(myRecord.calc_seleccionado == 1){
			aux = p_importe - aux_aplicado
			if(aux >= myRecord.calc_saldo ){
				aux_aplicado += myRecord.calc_saldo
				myRecord.calc_a_pagar = myRecord.calc_saldo
				databaseManager.saveData()
			}
			else{
				aux_aplicado += aux
				myRecord.calc_a_pagar = aux
			}
		}
		
	}
	
	
	
}