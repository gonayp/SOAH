/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"90446B63-6191-4367-9EDB-8559617DAF0D",variableType:8}
 */
var vl_total = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E5987165-B827-4F9F-BEBF-30F221DAA99E",variableType:8}
 */
var vl_total_fact = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"36EFFAD2-059B-421C-A6CA-110CC2CC3A4A",variableType:8}
 */
var vl_total_alquiler = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D421E0A5-AD6E-49BC-8CBD-C584FD0B7D61"}
 */
function onShow(firstShow, event) {
	if(forms.devolucion_nuevo.vl_cliente == null){
		foundset.clear()
		inicializarTotales()	
	}
	else{
		calcularTotales()
	}
}

/**
 * @properties={typeid:24,uuid:"0D3E3D91-EAA4-4B31-8C00-09BA45919101"}
 */
function inicializarTotales(){
	vl_total = 0
	vl_total_alquiler = 0
	vl_total_fact = 0

}

/**
 * @properties={typeid:24,uuid:"4F46E01C-129C-4367-9D96-F9AB5DF1AA9D"}
 * @AllowToRunInFind
 */
function calcularTotales(){
	
	inicializarTotales()
	
	
	foundset.find()
	//foundset.comp_codigo = "2 || 5"
	foundset.comp_estado_id = "5 || 6"
	foundset.cliente_id = forms.devolucion_nuevo.vl_cliente 
	foundset.search()
	
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = foundset.getRecord(index);
		if(myRecord.comp_estado_id == 5){//devoluciones pendientes facturar
			vl_total_alquiler += myRecord.comp_imp_total
			vl_total += myRecord.comp_imp_total
		}
		else{
			if(myRecord.comp_estado_id == 6){//facturas pendientes
				vl_total_fact += myRecord.comp_imp_total
				vl_total += myRecord.comp_imp_total
			}
			
		}
		
	}
	
}
