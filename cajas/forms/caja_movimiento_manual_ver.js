

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E285A6A6-946F-4B13-ADD2-6656F9457BAF",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B7EEDE00-0712-4E9D-9130-AA0A20485181",variableType:8}
 */
var vl_importe = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E93EBF26-BC79-4185-8F03-C34FA3BE9835"}
 */
function onShow(firstShow, event) {
	
	if(foundset.importe_ing == 0){
		vl_tipo = 2
		vl_importe = foundset.importe_egr
	}
	else{
		vl_tipo = 1
		vl_importe = foundset.importe_ing
	}
	
	
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"22ED982D-C6F8-4B8A-B81C-BF9EC1A3998A"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"FF61AE4A-916B-4E32-901A-8DE7F3623B78"}
 */
function onActioGrabar() {
	
	if(vl_tipo == 1){
		foundset.importe_ing	= vl_importe
		foundset.importe_egr	= 0
	}
	else{
		foundset.importe_ing	= 0
		foundset.importe_egr	= vl_importe
	}
	
	/** @type {JSFoundSet<db:/gpp/caja_movimiento>} */
	var fs_caja_movimiento = databaseManager.getFoundSet('gpp', 'caja_movimiento')
	
	fs_caja_movimiento.loadRecords(foundset.id)
	
	fs_caja_movimiento.mov_descripcion		= foundset.descripcion
	fs_caja_movimiento.mov_fecha			= foundset.fecha
	fs_caja_movimiento.mov_importe			= vl_importe
	fs_caja_movimiento.mov_tipo				= vl_tipo

	databaseManager.saveData()
	
	forms.caja_main.calcularTotal()
	
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"94B3C311-9976-4630-B60C-096515DF02EB"}
 */
function onActioBorrar() {
	var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Seguro que quieres borrar el movimiento manual \"' + foundset.descripcion + '\"?', 'Si', 'No')
		if (PressedButton == 'Si') { //function
		
			/** @type {JSFoundSet<db:/gpp/caja_movimiento>} */
			var fs_caja_movimiento = databaseManager.getFoundSet('gpp', 'caja_movimiento')
			
			fs_caja_movimiento.loadRecords(foundset.id)
			fs_caja_movimiento.deleteRecord()
			
			foundset.deleteRecord()
			
			databaseManager.saveData()
			
			application.getWindow('Dialog').hide()
		}
}
