

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"22AF1217-54E6-4A8E-9829-FF2F6354154D"}
 */
function onShow(firstShow) {
	foundset.loadRecords(forms.clientes_editar_historico.foundset.cliente_hist_id)
	
	elements.btn_1.enabled = true
	if(scopes.usuario.vg_permiso_modificar == 0){
		elements.btn_1.enabled = false
	}
	
	elements.f_estado.enabled = true
	elements.f_fecha.enabled = true
	elements.f_tipo.enabled = true
	if(hist_tipo == 4 || hist_tipo == 6 || hist_tipo == 7 || hist_tipo == 8){//si es un comprobante
		elements.f_estado.enabled = false
		elements.f_fecha.enabled = false
		elements.f_tipo.enabled = false
	}
}

/**
 * @properties={typeid:24,uuid:"EAEC5EDA-9398-4872-9991-445102E7F1C2"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"5B58A16E-90BE-48BA-83E1-50A81DFA2371"}
 */
function onActioGrabar() {
	
	
	databaseManager.saveData()
	
	application.getWindow('Dialog').hide()
	
}



/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"28A9D8FE-9A77-4B3A-81A0-DCB8A900A99A"}
 */
function onActionVer(event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	switch (hist_tipo) {
	case 4://Facturas
		forms['factura_devolucion_ver'].vl_form_padre = 'clientes_estado'
		forms['factura_devolucion_ver'].foundset.loadRecords(foundset.comp_id)
		application.showForm('factura_devolucion_ver')
		break;
	case 7://devoluciones
		forms['devolucion_detalle'].vl_form_padre = 'clientes_estado'
		forms['devolucion_detalle'].foundset.loadRecords(foundset.comp_id)
			win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
			win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
			win.resizable = false
			win.title= '';
			win.show( 'devolucion_detalle');
		break;
	case 6://Alquiler
		forms['alquiler_detalle'].vl_form_padre = 'clientes_estado'
		forms['alquiler_detalle'].foundset.loadRecords(foundset.comp_id)
			win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
			win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
			win.resizable = false
			win.title= '';
			win.show( 'alquiler_detalle');
		break
	default:
		break;
	}

}
