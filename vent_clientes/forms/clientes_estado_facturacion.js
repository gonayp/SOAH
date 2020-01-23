/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C1B0B746-926B-44EC-BFB1-90796DA33F92",variableType:8}
 */
var vl_total_credito = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"84C73870-A338-46EA-9B15-ECF1CFBD0C55",variableType:8}
 */
var vl_total = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"44108D66-3C36-4175-BC5E-240F818AEAE8",variableType:8}
 */
var vl_total_fact = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BD816FED-DF56-4677-888D-4B1D17D2E6E6",variableType:8}
 */
var vl_total_alquiler = 0;



/**
 * @properties={typeid:24,uuid:"5DE07C48-E504-4595-BFAA-15B9E4B07249"}
 */
function inicializarTotales(){
	vl_total = 0
	vl_total_alquiler = 0
	vl_total_fact = 0
	vl_total_credito = 0

}

/**
 * @properties={typeid:24,uuid:"642819C6-CDA2-456C-87B1-E218C7A7C949"}
 * @AllowToRunInFind
 */
function calcularTotales(){
	
	inicializarTotales()
	
	foundset.find()
	foundset.comp_estado_id = "5 || 6"
	foundset.cliente_id = forms.clientes_estado.foundset.cliente_id 
	foundset.newRecord()//AND
	foundset.comp_codigo = "20 || 25 || 30"
	foundset.cliente_id = forms.clientes_estado.foundset.cliente_id
	foundset.search()
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = foundset.getRecord(index);
		
		if(myRecord.comp_codigo == 2){//Devoluciones
			vl_total_alquiler += myRecord.comp_imp_total
			
		}
		else{
			if(myRecord.comp_estado_id == 6){//facturas pendientes
				vl_total_fact += myRecord.comp_imp_total
				vl_total += myRecord.comp_imp_total
			}
			else{
				vl_total_credito += myRecord.comp_imp_total
				vl_total -= myRecord.comp_imp_total
			}
		}
		
	}
	
}
