/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1E90C88F-2A4F-47A8-B884-93FC0F201506",variableType:4}
 */
var vl_cliente_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FF2DE226-3A10-4021-9975-035C50FA8F78"}
 */
var vl_form_padre = null;

/**
 * @properties={typeid:24,uuid:"F2C919C4-49E9-460B-99EC-36634392245F"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.getWindow('Dialog').hide()
	vl_cliente_id = null
}

/**
 * @properties={typeid:24,uuid:"BF785630-3F0E-4919-8B05-E6CB1EBA2404"}
 */
function onActioGrabar() {
	databaseManager.saveData()
	cerrar()
}

/**
 * @properties={typeid:24,uuid:"E2F69A3A-6F37-46C7-93D1-EC4742653051"}
 */
function cerrar(){
	
	vl_cliente_id = null
	if(vl_form_padre == 'alquiler_nuevo'){
		forms['alquiler_nuevo'].cambiarAdvertencia(foundset.cliente_advertencia)
	}
	application.getWindow('Dialog').hide()
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"3BF4EE6A-767C-406C-8B68-7B511B5250C1"}
 */
function onShow(firstShow) {
	
	if(vl_cliente_id != null){
		foundset.loadRecords(vl_cliente_id)
	}
	
	elements.btn_grabar.enabled = true
	if(scopes.usuario.vg_permiso_modificar == 0){
		elements.btn_grabar.enabled = false
	}
	
	
	
}
