/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"80F96CC3-3E3F-41C3-B678-CA4A383C0A2E",variableType:8}
 */
var vl_precio_inicial = null;

/**
 * @properties={typeid:24,uuid:"3DD54E3E-1934-4139-BC30-5B9E6BAEAFF6"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"C1E71A0B-8EED-4587-9699-9E664A9D2BA4"}
 */
function onActioGrabar() {
	
	if(vl_precio_inicial != comp_precio_calculado){
		forms.factura_devolucion_nuevo.vl_total_alquiler -= vl_precio_inicial
		forms.factura_devolucion_nuevo.vl_total_alquiler += comp_precio_calculado
		forms.factura_devolucion_nuevo.calculoTotales()
	}
	
	databaseManager.saveData()
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"009F3732-FD2C-4744-802A-58AE894571E2"}
 */
function onShow(firstShow, event) {
	vl_precio_inicial = comp_precio_calculado
	
	plugins.keyListener.addKeyListener("enter",onKey)
	
	controller.focusFirstField()
}


/**
 * @param value
 * @param event
 * @param keyCode
 * @param altKey
 * @param ctrlKey
 * @param shiftKey
 * @param capsLock
 *
 * @properties={typeid:24,uuid:"82F0F7CF-3D19-4910-82D3-8A2B606B209C"}
 */
function onKey(value, event, keyCode, altKey, ctrlKey, shiftKey, capsLock){

    if(keyCode == 13){//tecla enter
    	onActioGrabar()
    }
}

/**
 * @properties={typeid:24,uuid:"17B65B76-97D6-4B6F-87F6-0E18362BAB64"}
 */
function onDataChangeDias() {
	comp_precio_calculado = comp_dias_a_cobrar * comp_precio
}
