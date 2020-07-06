/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A43A7CC4-3A70-41F4-920F-20C94487BC41",variableType:4}
 */
var vl_busqueda_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E1B852FE-D5B8-4346-A8BA-0E34ED6CA1BF"}
 */
var vl_busqueda = null;

/**
 * @type {ELEMENT_TYPES.IMAGE_MEDIA}
 *
 * @properties={typeid:35,uuid:"73AB4C17-0BF3-4C70-A8E8-A25AF3EA3203",variableType:-4}
 */
var vl_logo_empresa = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"90711F5B-DD01-4A64-82BA-823D975F563B"}
 */
var vl_nombre_empresa = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AD5EB530-2567-47CC-B51E-975659408903"}
 */
var vl_nombre_usuario = null;


/**
 * @properties={typeid:24,uuid:"9887A70D-EED1-4ED1-80D8-AAB3979BC603"}
 * @AllowToRunInFind
 */
function onActionAbrirFuncion() {
	
	/** @type {JSFoundSet<db:/gpp/usuarios_formularios>} */
	var fs_formularios = databaseManager.getFoundSet('gpp', 'usuarios_formularios')
	fs_formularios.find()
	fs_formularios.formulario_id= vl_busqueda_id
	fs_formularios.search()
	if(fs_formularios.getSize() > 0){
		vl_busqueda = fs_formularios.formulario_nomenclatura
		globals.asignarPermisos(vl_busqueda)
		if (tienePermisos())
		application.showForm(vl_busqueda)
	}
	else{
		plugins.webnotificationsToastr.warning("Función Inexistente.")
	}
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"FC703EC4-243A-4316-90CF-1CE3F12B93DD"}
 */
function onShow(firstShow) {
	controller.focusField('lb_busqueda',true)
	vl_busqueda_id = null
	plugins.keyListener.addKeyListener('accesos', onKey)
	cargarNombreUsuario()
	cargarEmpresa()
	
}

/**
 * 
 * @param value
 * @param event
 * @param keyCode
 * @param altKey
 * @param ctrlKey
 * @param shiftKey
 * @param capsLock
 *
 * @properties={typeid:24,uuid:"9BF458A7-2404-4477-990B-02864BFCE932"}
 */
function onKey(value, event, keyCode, altKey, ctrlKey, shiftKey, capsLock){
    //plugins.webnotificationsToastr.info(keyCode +"__"+ ctrlKey)
	if(keyCode == 65 && ctrlKey == 1){//Ctrl + A (Alquiler nuevo)
		onActionNuevoAlquiler()
	}
    if(keyCode == 13){//tecla enter
    	onActionAbrirFuncion()
    }
}

/**
 * @properties={typeid:24,uuid:"84595CFC-5DF1-4653-A3C4-36C4CCA7C2ED"}
 * @SuppressWarnings(wrongparameters)
 */
function tienePermisos(){
	if(scopes.usuario.vg_permiso_lectura == 0 && scopes.usuario.vg_permiso_crear == 0){
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.","",globals.vg_toast_options)
		controller.focusField('lb_busqueda',true)
		vl_busqueda= null
		return false
	}
	return true
}

/**
 * @properties={typeid:24,uuid:"5002DD42-73DC-4A4E-BD6E-A83EA25A26E0"}
 */
function cargarNombreUsuario(){
	
	/** @type {JSFoundSet<db:/gpp/usuarios>} */
	var fs_usuario = databaseManager.getFoundSet('gpp', 'usuarios')
	fs_usuario.loadRecords(scopes.usuario.vg_usuario_id)
	
	if(fs_usuario.getSize() > 0){
		vl_nombre_usuario = "Usuario: "+fs_usuario.usuarios_to_core.core_nombre
		if(fs_usuario.usuario_tipo != 2){//Adminostrador
			//elements.btn_administracion.visible = false
		}
	}
	
	
	
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"6CCC2938-D0D7-470E-B743-D29C38308859"}
 */
function onActionSalir() {
	security.logout()

}

/**
 *
 *
 * @properties={typeid:24,uuid:"978DDFFC-39A1-4B5E-AA4D-D9B17BF60C9F"}
 */
function cargarEmpresa() {
	/** @type {JSFoundSet<db:/gpp/core_company>} */
	var fs_core_company = databaseManager.getFoundSet('gpp', 'core_company')
	fs_core_company.loadRecords(scopes.usuario.vg_company_id)
	vl_logo_empresa = fs_core_company.company_logo  
	vl_nombre_empresa = fs_core_company.core_company_to_core.core_nombre
	elements.label_empresa.text= vl_nombre_empresa
}



/************************************************************************************************************/
/** Funciones principales																				   **/
/************************************************************************************************************/

/**
 * 
 *
 * @properties={typeid:24,uuid:"52F7008F-F169-4EEC-9E9C-8328C32540C6"}
 */
function onActionCientes() {
	
	application.showForm(forms.clientes_main)

}

/**
 *
 * @properties={typeid:24,uuid:"301365CF-3AB6-46CE-B288-61DA1C299907"}
 */
function onActionAdministracion() {
	application.showForm(forms.administracion_main)

}


/**
 *
 *
 * @properties={typeid:24,uuid:"94C501BD-D5CE-456E-B7D0-CBD084508417"}
 */
function onActionVerObras() {
	application.showForm(forms.obras_main)

}


/************************************************************************************************************/
/** Funciones de Nuevo 																					   **/
/************************************************************************************************************/

/**
 * @properties={typeid:24,uuid:"A39F877E-E764-471E-AD88-0882DD9660A5"}
 */
function onActionNuevaObra() {
	globals.asignarPermisos("obras_nuevo")
	if (tienePermisos())
	application.showForm(forms.obras_nuevo)

}

/**
*
* @properties={typeid:24,uuid:"0CAE0A04-3F10-4F17-81D5-56A5FD49C5C2"}
*/
function onActionNuevoCliente() {
	globals.asignarPermisos("clientes_nuevo")
	if (tienePermisos())
	application.showForm(forms.clientes_nuevo)

}


/**
 * 
 * @properties={typeid:24,uuid:"74D4DCB2-292F-42F4-A0A6-3EE84A9C3CB0"}
 */
function onActionNuevoAlquiler() {
	application.showForm(forms.alquiler_nuevo)

}
/**
 *
 * @properties={typeid:24,uuid:"5893B7C6-8C6C-4B9F-81DC-3E49675537F7"}
 */
function onActionAcuerdosDePrecio() {
	application.showForm(forms.acuerdos_de_precios)

}

/**
 *
 * @properties={typeid:24,uuid:"0F43EBA5-7991-4B01-B29B-5ADFD9AE7B2C"}
 */
function onActionConfiguraciones() {
	
application.showForm(forms.herr_configuraciones)
}

/**
 *
 * @properties={typeid:24,uuid:"65CE2C4B-6751-4115-8A9F-F8F97EECDFE5"}
 */
function onActionHerramientas() {
	application.showForm(forms.herr_herramientas)

}

/**
 *
 * @properties={typeid:24,uuid:"07AEE8C0-20B5-4E60-A3DF-B137045C2EB1"}
 */
function onActionEquipos() {
	application.showForm(forms.herr_equipos)

}
