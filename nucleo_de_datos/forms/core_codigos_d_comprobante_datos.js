
/**
 * @properties={typeid:24,uuid:"592FE0B1-8EFF-47FE-9241-8815B2B1DA2B"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"1C8B0FEA-9763-4238-8353-5D7F71233490"}
 */
function onActioGrabar() {
	databaseManager.saveData()
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2CFA4C4E-ED3F-4FFB-A2EE-1D3A72BEDD7C"}
 */
function onShow(firstShow, event) {
	//application.setValueListItems('f_impresoras',plugins.it2be_tools.getPrinters())
	
	// Get an Array of available printers.
	// capture the printer list in an array
	//var printers = plugins.it2be_tools.getPrinters();

	// show the list in a dialog
	//var selection = plugins.dialogs.showSelectDialog("printers", "These are your printers", printers);
	/*
	var printers = new Array()
	 /** @type {Array<javax.print.PrintService>} * /
	 var _printServices = Packages.javax.print.PrintServiceLookup.lookupPrintServices(null, null)
	 //application.setValueListItems('f_impresoras',_printServices)
	 
	 for (var _i = 0; _i<_printServices.length; _i++) {
	 	printers.push( _printServices[_i].getName())
		
	 }*/
	 
	 //var selection = plugins.dialogs.showSelectDialog("printers", "These are your printers", printers);
	 //application.setValueListItems('t',printers,true)
	 
}

/**
 * Perform the element onclick action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5D3B2154-8F1A-40D7-A120-ABEC57B6CD18"}
 */
function onClickCambiarImpresora(event) {
	var printers = new Array()
	 /** @type {Array<javax.print.PrintService>} */
	 var _printServices = Packages.javax.print.PrintServiceLookup.lookupPrintServices(null, null)
	 //application.setValueListItems('f_impresoras',_printServices)
	 
	 for (var _i = 0; _i<_printServices.length; _i++) {
	 	printers.push( _printServices[_i].getName())
		
	 }
	 
	 var selection = plugins.dialogs.showSelectDialog("printers", "These are your printers", printers);
	 
	 foundset.impresora = selection
	 
	 return
	 
}
