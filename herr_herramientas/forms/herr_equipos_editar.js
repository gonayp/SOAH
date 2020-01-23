/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9B491F63-8623-445D-89DB-D2DBD03783F8"}
 */
var vl_form_padre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E9C5971F-FAC3-404E-885F-ADA3BE9B0AB4",variableType:8}
 */
var vl_precio = null;

/**
 * @properties={typeid:24,uuid:"7F8D6B8F-1BFC-4839-8A36-C834D700CE64"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(vl_form_padre)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"95B9C633-D9B0-4B0E-8425-38319E401F4A"}
 */
function onShow(firstShow, event) {

	
	elements.btn_guardar.enabled = true
	forms.herr_equipos_editar_accesorios.elements.btn_nuevo_accesorio.enabled = true
	forms.herr_equipos_editar_historico.elements.btn_nuevo.enabled = true
	if (scopes.usuario.vg_permiso_modificar == 0) {
		elements.btn_guardar.enabled = false
		forms.herr_equipos_editar_accesorios.elements.btn_nuevo_accesorio.enabled = false
		forms.herr_equipos_editar_historico.elements.btn_nuevo.enabled = false
	}
	
	vl_precio = equipo_precio_base
	
	//Adjuntos
	globals.vg_adjunto_clave	= "equipo"
	globals.vg_adjunto_clave_id = foundset.equipo_id
	
}

/**
 * @properties={typeid:24,uuid:"95605B0D-299B-4A4E-8572-AE9204E6F722"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(herramienta_id == null){
		plugins.webnotificationsToastr.error("Falta seleccionar una tipo de herramienta.","",globals.vg_toast_options)
		controller.focusField("f_herramienta",true)
		return
	}
	
	if(marca_id == null){
		plugins.webnotificationsToastr.error("Falta seleccionar una marca.","",globals.vg_toast_options)
		controller.focusField("f_marca",true)
		return
	}
	
	if(modelo_id == null){
		plugins.webnotificationsToastr.error("Falta seleccionar un modelo.","",globals.vg_toast_options)
		controller.focusField("f_modelo",true)
		return
	}
	
	if(equipo_codigo == null){
		plugins.webnotificationsToastr.error("Falta el código del equipo.","",globals.vg_toast_options)
		controller.focusField("f_codigo",true)
		return
	}
	
	//Si cambian el precio base se actualiza la fecha de ultmo cambio
	//y guarda el historico de precio
	if(vl_precio != equipo_precio_base){
		equipo_fch_ult_cambio_precio = application.getServerTimeStamp()
		globals.actualizarListaPrecios("Manual $ "+vl_precio,vl_precio,2,equipo_id)
	}
	
	
	databaseManager.saveData()
	
	
	application.showForm(vl_form_padre)
}

/**
 *
 * @properties={typeid:24,uuid:"8A59F70B-7FEC-4E47-9B20-A04B63664E3B"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function codigoSugerido() {
	
	if(herramienta_id == null){
		plugins.webnotificationsToastr.warning("Falta seleccionar una tipo de herramienta para buscar el código sugerido.","",globals.vg_toast_options)
		return
	}
	
	if(marca_id == null){
		plugins.webnotificationsToastr.warning("Falta seleccionar una marca para buscar el código sugerido.","",globals.vg_toast_options)
		return
	}
	
	if(modelo_id == null){
		plugins.webnotificationsToastr.warning("Falta seleccionar un modelo para buscar el código sugerido.","",globals.vg_toast_options)
		return
	}
	
	
	/** @type {JSFoundSet<db:/gpp/herr_equipo>} */
	var fs_equipo = databaseManager.getFoundSet('gpp', 'herr_equipo')
	fs_equipo.find()
	fs_equipo.herramienta_id	= herramienta_id
	fs_equipo.marca_id			= marca_id
	fs_equipo.modelo_id			= modelo_id
	fs_equipo.search()
	
	fs_equipo.sort("equipo_codigo desc")
	
	if(fs_equipo.getSize() > 0){
		equipo_codigo = fs_equipo.equipo_codigo + 1
	}
	else{
		equipo_codigo = 1
	}
	
}
