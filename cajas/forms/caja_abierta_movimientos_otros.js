/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BBCD58E9-CD03-4C3B-AE0D-CC418726B778",variableType:8}
 */
var vl_saldo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D14E55F1-2445-46F5-8509-05C8A360C865",variableType:8}
 */
var vl_egresos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BAD59CF5-8852-49C2-92C7-E47CA2F822B5",variableType:8}
 */
var vl_ingresos = null;

/**
 * @properties={typeid:24,uuid:"5EAE85DF-8ADD-4B09-8EE7-26840EADEBBC"}
 */
function onActionNuevo() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.caja_movimiento_manual_nuevo );
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"04767030-BC67-421C-9EC6-31E1E0EE30FB"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	if(foundset.tipo == 3){
		
				
		var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
			win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
			win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
			win.resizable = false
			win.title= '';
			win.show( forms.caja_movimiento_manual_ver );
	}

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B565AE65-C61E-4D6E-ADD8-98F71F1C3FD4"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	
	vl_egresos = 0
	vl_ingresos = 0
	forms.caja_main.vl_otros_saldos	= 0
	vl_saldo = 0
	
	foundset.find()
	foundset.tipo = " 4 || 5 || 6 || 7"
	foundset.search()
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = foundset.getRecord(index);
		if(myRecord.importe_ing > 0){
			vl_ingresos += myRecord.importe_ing
		}
		else{
			vl_egresos += myRecord.importe_egr
		}
	}
	
	forms.caja_main.vl_otros_saldos = vl_ingresos - vl_egresos
	vl_saldo  = vl_ingresos - vl_egresos
	
}
