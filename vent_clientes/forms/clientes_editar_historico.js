
/**
 * @properties={typeid:24,uuid:"BEBA3A70-966E-43ED-8B2E-8673BC008884"}
 */
function onActionNuevaHistoria() {
	
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.clientes_hist_nuevo );
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"D6759A11-0D50-44DC-8012-8CD916739BE7"}
 * @SuppressWarnings(wrongparameters)
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	if(scopes.usuario.vg_permiso_modificar == 1){
		var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.clientes_hist_editar );
	}
	else{
		plugins.webnotificationsToastr.warning("Sin permisos","",globals.vg_toast_options)
	}

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"4C6CF87E-01F1-486A-BDAD-5C7A68EC2BF4"}
 */
function onShow(firstShow) {
	
	foundset.sort('hist_fecha desc')
	
	elements.btn_nuevo_registro.enabled = true
	if(scopes.usuario.vg_permiso_crear == 0){
		elements.btn_nuevo_registro.enabled = false
	}
}


