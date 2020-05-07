/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8EF17C43-7035-4A2C-A5A1-B6CCFF3E654B",variableType:4}
 */
var vl_ver_nc = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"306C1497-5256-4CD7-A2DE-66D37F9CCC5A",variableType:4}
 */
var vl_ver_anticipos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B94FA476-1A01-4817-9D6E-9B0E025247D7",variableType:4}
 */
var vl_ver_facturas = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2F7463CE-7937-4B97-B112-F4A7BA87F99E",variableType:4}
 */
var vl_ver_devoluciones = null;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E5BFEABB-3374-44E7-866A-04B7D9F1D28B",variableType:8}
 */
var vl_anticipos = null;

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
	vl_anticipos = 0
	
	

}

/**
 * @properties={typeid:24,uuid:"642819C6-CDA2-456C-87B1-E218C7A7C949"}
 * @AllowToRunInFind
 */
function calcularTotales(){
	
	inicializarTotales()
	
	var aux_estados = "5 || 6 || 9 || 11 || 12"

	if(vl_ver_anticipos == 0 && vl_ver_devoluciones == 0 && vl_ver_facturas == 0){
		aux_estados = "0"
	}
	if(vl_ver_anticipos == 0 && vl_ver_devoluciones == 0 && vl_ver_facturas == 1){
		aux_estados = "6 || 9"
	}
	if(vl_ver_anticipos == 0 && vl_ver_devoluciones == 1 && vl_ver_facturas == 0){
		aux_estados = "5"
	}
	if(vl_ver_anticipos == 0 && vl_ver_devoluciones == 1 && vl_ver_facturas == 1){
		aux_estados = "5 || 6 || 9"
	}
	if(vl_ver_anticipos == 1 && vl_ver_devoluciones == 0 && vl_ver_facturas == 0){
		aux_estados = "11 || 12"
	}
	if(vl_ver_anticipos == 1 && vl_ver_devoluciones == 0 && vl_ver_facturas == 1){
		aux_estados = "6 || 9 || 11 || 12"
	}
	if(vl_ver_anticipos == 1 && vl_ver_devoluciones == 1 && vl_ver_facturas == 0){
		aux_estados = "5 || 11 || 12"
	}
	
	
	foundset.find()
	foundset.comp_estado_id = aux_estados  //devoluciones pendientes, facturas pendientes o parciales y anticipos activos
	foundset.cliente_id = forms.clientes_estado.foundset.cliente_id 
	if(vl_ver_nc == 1){
		foundset.newRecord()//OR
		foundset.comp_codigo = "20 || 25 || 30 " //Notas de credito
		foundset.cliente_id = forms.clientes_estado.foundset.cliente_id
	}
	foundset.search()
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = foundset.getRecord(index);
		myRecord.calc_saldo = myRecord.comp_imp_total
		switch (myRecord.comp_codigo) {
		case 2://Devoluciones
			vl_total_alquiler += myRecord.comp_imp_total
			vl_total += myRecord.comp_imp_total
			break;
		case 90://Anticipos
			vl_anticipos += myRecord.comp_imp_total
			vl_total -= myRecord.comp_imp_total
			break;
		case 20://Notas de credito
			vl_total_credito += myRecord.comp_imp_total
			vl_total -= myRecord.comp_imp_total
			break;
		case 5://Facturas
			if(myRecord.comp_estado_id == 6){//facturas pendientes
				vl_total_fact += myRecord.comp_imp_total
				vl_total += myRecord.comp_imp_total
			}
			else{//Facturas parciales
				var yaPagado = scopes.facturacion.calcularImporteYaPagadoComprobante(myRecord)
				myRecord.calc_saldo = myRecord.comp_imp_total - yaPagado
				databaseManager.saveData()
				vl_total_fact += myRecord.calc_saldo
				vl_total += myRecord.calc_saldo
			}
			break;
		default:
			vl_total_fact += myRecord.comp_imp_total
			vl_total += myRecord.comp_imp_total	
			break;
		}
		
		myRecord.calc_acumulado =  vl_total
		databaseManager.saveData()
		
	}
	
	
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord<db:/gpp/vent_comprobantes>} record
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"0048DE29-8994-4EFF-9B91-84B312A81675"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	switch (record.comp_codigo) {
	case 5://Facturas
		forms['factura_devolucion_ver'].vl_form_padre = 'clientes_estado'
		forms['factura_devolucion_ver'].foundset.loadRecords(foundset.comp_id)
		application.showForm('factura_devolucion_ver')
		break;
	case 2://devoluciones
		forms['devolucion_detalle'].vl_form_padre = 'clientes_estado'
		forms['devolucion_detalle'].foundset.loadRecords(foundset.comp_id)
		var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
			win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
			win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
			win.resizable = false
			win.title= '';
			win.show( 'devolucion_detalle');
		break;
	case 20://Notas de credito
	case 90://Anticipos
		forms['anticipos_detalle'].vl_form_padre = 'clientes_estado'
		forms['anticipos_detalle'].foundset.loadRecords(foundset.comp_id)
		var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
			win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
			win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
			win.resizable = false
			win.title= '';
			win.show( 'anticipos_detalle');
		break
	default:
		break;
	}
	

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"FF6AA061-7FF3-4B3C-BDFF-DBEDE0FBBE06"}
 */
function onActionVer(event) {
	if (event.getElementName() == "btn_devoluciones"){
		if(vl_ver_devoluciones == 1){
			vl_ver_devoluciones = 0
			elements.btn_devoluciones.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_ver_devoluciones = 1
			elements.btn_devoluciones.imageStyleClass = "fas fa-eye"
		}
		
	}
	if (event.getElementName() == "btn_facturas"){
		if(vl_ver_facturas == 1){
			vl_ver_facturas = 0
			elements.btn_facturas.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_ver_facturas = 1
			elements.btn_facturas.imageStyleClass = "fas fa-eye"
		}
		
	}
	if (event.getElementName() == "btn_nc"){
		if(vl_ver_nc == 1){
			vl_ver_nc = 0
			elements.btn_nc.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_ver_nc = 1
			elements.btn_nc.imageStyleClass = "fas fa-eye"
		}
		
	}
	if (event.getElementName() == "btn_anticipos"){
		if(vl_ver_anticipos == 1){
			vl_ver_anticipos = 0
			elements.btn_anticipos.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_ver_anticipos = 1
			elements.btn_anticipos.imageStyleClass = "fas fa-eye"
		}
		
	}
	
	calcularTotales()

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"60957936-B61C-4987-8DFE-A2FFDCDD2EDD"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		vl_ver_anticipos = 1
		vl_ver_devoluciones = 1
		vl_ver_facturas = 1
		vl_ver_nc = 1
	}
		
}
