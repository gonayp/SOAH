/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5BD16280-8192-42EB-92F3-D83DB5FC553C",variableType:8}
 */
var vl_total = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"624CEBA1-6443-4B8D-9672-A785D7EAEB3C",variableType:8}
 */
var vl_total_fact = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"519EF0BC-5B9A-4D1F-B4C3-BF9C3AD5DA58",variableType:8}
 */
var vl_total_alquiler = 0;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"85EBCEC4-F696-4D55-B24B-1DF3965FD558"}
 */
function onShow(firstShow, event) {
	if(forms.alquiler_nuevo.vl_cliente == null){
		foundset.clear()
		inicializarTotales()	
	}
	else{
		calcularTotales()
	}
}


/**
 * @properties={typeid:24,uuid:"F26F4C52-440E-4C29-B041-9636BA8BC264"}
 */
function inicializarTotales(){
	vl_total = 0
	vl_total_alquiler = 0
	vl_total_fact = 0

}

/**
 * @properties={typeid:24,uuid:"4EFC4003-9395-4EAF-9C00-2120F65557C7"}
 * @AllowToRunInFind
 */
function calcularTotales(){
	
	inicializarTotales()
	
	foundset.find()
	foundset.comp_estado_id = "5 || 6"
	foundset.cliente_id = forms.alquiler_nuevo.vl_cliente 
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

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"27CB1B02-3A6E-4966-9AB4-6A63EA17C79E"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	if(foundset.comp_codigo == 2){
		forms.alquiler_detalle.foundset.loadRecords(foundset.comp_id)
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.alquiler_detalle );
	}
	else{
		forms.factura_devolucion_detalle.foundset.loadRecords(foundset.comp_id)
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.factura_devolucion_detalle );
	}
}
