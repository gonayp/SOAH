

/**
 * @properties={typeid:24,uuid:"79EC29C9-F22A-4EBA-977B-6860082DE7BC"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.cheques_main)
}


/**
 * @properties={typeid:24,uuid:"39DF93A4-87A3-41B7-A25A-4C5BCAFDBBB0"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	if (cheque_numero == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de vl_numero.", "", globals.vg_toast_options)
		controller.focusField("f_numero", true)
		return
	}
	
	if (cheque_importe == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de importe.", "", globals.vg_toast_options)
		controller.focusField("f_importe", true)
		return
	}
	
	if (banco_id == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de banco.", "", globals.vg_toast_options)
		controller.focusField("f_banco", true)
		return
	}
	
	grabar()
}

/**
 * @properties={typeid:24,uuid:"8A530E64-FE32-4D08-9592-D87EEA37EA24"}
 */
function grabar(){
	
	databaseManager.saveData()
	
	
	application.showForm(forms.cheques_main)
	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"C47AD23A-EEA4-477B-A4EA-130AE468ED2A"}
 */
function onShow(firstShow) {
	
	
	
	elements.btn_guardar.enabled = true
	if (scopes.usuario.vg_permiso_modificar == 0) {
		elements.btn_guardar.enabled = false
	}
	
	
	controller.focusFirstField()
	
}


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C7CD8F83-791B-4BF5-9D01-994E274331FF"}
 */
function onActionDetalle(event) {
	if(cheq_cheques_to_vent_comprobantes.comp_codigo == 3){//Recibo
		forms['recibo_detalle'].foundset.loadRecords(foundset.comp_id)
		var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
			win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
			win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
			win.resizable = false
			win.title= '';
			win.show( 'recibo_detalle' );
	}

}
