/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9C1D4230-D601-431D-A9DE-3F62EF19AFBE",variableType:4}
 */
var vl_disponible = 1
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6BBA355A-8D46-4A51-A51B-5320A8C71DCD",variableType:4}
 */
var vl_roto = 1
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A76DCE35-3532-43B8-877F-1D335EE7034C",variableType:4}
 */
var vl_extraviado = 1
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AE076244-7854-4661-9D90-5BBE4DF143A3",variableType:4}
 */
var vl_reparación = 1
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"83AF95DB-0368-4B2A-BD49-CC076A8B9B63",variableType:4}
 */
var vl_robado = 1
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"346E61A0-51CB-4F7E-A497-9EF1C6839631",variableType:4}
 */
var vl_bien_uso = 1
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5F8BACF9-E6F5-4A5D-B4D5-892F553B8CFD",variableType:4}
 */
var vl_alquilado = 1
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B54C682B-74B6-4501-B8B0-785C0A2FB8E6",variableType:4}
 */
var vl_baja = 1

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"275A2B7A-CE6E-4C66-AF70-54E8D2D9D22E",variableType:4}
 */
var vl_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F7524386-BCA3-45ED-A443-4A7880D7E52E",variableType:4}
 */
var vl_num_serie = null;



/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8DC6F60D-01BE-436A-AB07-86EA180CD4C5",variableType:4}
 */
var vl_alimentacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E5AC9CCE-52E1-4BD3-A3B9-D59E89A2E936"}
 */
var vl_cod_barras = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"28530F5D-A171-44C8-9246-92B849A93171"}
 */
var vl_cod_alterna = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"04FB0177-3BD7-4224-8DAF-A0E6763DE87C",variableType:4}
 */
var vl_modelo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AAFE3534-635D-4BE2-96ED-E4E395F4C3CA",variableType:4}
 */
var vl_marca = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"721BE714-A31C-4D17-A8C5-BF76BBFBA376",variableType:4}
 */
var vl_herramienta = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B69D5441-47C7-403E-B168-ED0049D403C2"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"110C49B1-B137-46EB-AE94-0FAFECD41F60",variableType:4}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"13D5ABC3-9BEA-405B-BD92-3DD6CBFD2368"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 * @properties={typeid:24,uuid:"1DB5A2B1-7E65-47E5-8B88-13C255B87498"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	var aux_estado = " 99 "
	if(vl_disponible == 1)	aux_estado += " || 1"
	if(vl_roto == 1) 		aux_estado += " || 2"
	if(vl_extraviado == 1) 	aux_estado += " || 3"
	if(vl_reparación == 1) 	aux_estado += " || 4"
	if(vl_robado == 1) 		aux_estado += " || 5"
	if(vl_bien_uso == 1) 	aux_estado += " || 6"
	if(vl_alquilado == 1) 	aux_estado += " || 7"
	if(vl_baja == 1) 		aux_estado += " || 8"
	
	foundset.find()
	if(vl_codigo != null) 			equipo_codigo 				= vl_codigo
	if(vl_alimentacion != null)		alimentacion_id				= vl_alimentacion
	if(aux_estado != " 99 ")		equipo_estado				= aux_estado
	if(vl_herramienta != null)		herramienta_id				= vl_herramienta
	if(vl_marca != null)			marca_id					= vl_marca
	if(vl_modelo != null)			modelo_id					= vl_modelo
	if(vl_tipo != null)				equipo_tipo					= vl_tipo
	if(vl_nombre != null && vl_nombre != "")			equipo_nombre			= '#%' + vl_nombre + '%'
	if(vl_cod_alterna != null && vl_cod_alterna != "") 	equipo_cod_alternativo 	= '#%' + vl_cod_alterna + '%'
	if(vl_cod_barras != null && vl_cod_barras != "")    equipo_cod_barras		=  vl_cod_barras 
	if(vl_num_serie != null && vl_num_serie != "")		equipo_num_serie		= '#%' + vl_num_serie + '%'
	foundset.search()

	foundset.sort("herramienta_id, marca_id, modelo_id asc")
}

/**
 * @properties={typeid:24,uuid:"8063141F-2CBB-4F8F-A45E-873584539F0B"}
 */
function onActionLimpiar() {
	vl_tipo = null;
	vl_num_serie = null;
	vl_alimentacion = null;
	vl_cod_barras = null;
	vl_cod_alterna = null;
	vl_modelo = null;
	vl_marca = null;
	vl_herramienta = null;
	vl_nombre = null;
	vl_codigo = null;
	vl_disponible = 1
	vl_roto = 1
	vl_extraviado = 1
	vl_reparación = 1
	vl_robado = 1
	vl_bien_uso = 1
	vl_alquilado = 1
	vl_baja = 1
	elements.btn_alquilado.imageStyleClass = "fas fa-eye"
	elements.btn_baja.imageStyleClass = "fas fa-eye"
	elements.btn_bien_uso.imageStyleClass = "fas fa-eye"
	elements.btn_disponible.imageStyleClass = "fas fa-eye"
	elements.btn_extraviado.imageStyleClass = "fas fa-eye"
	elements.btn_reparando.imageStyleClass = "fas fa-eye"
	elements.btn_robado.imageStyleClass = "fas fa-eye"
	elements.btn_roto.imageStyleClass = "fas fa-eye"
	
	globals.vg_marca_id = vl_marca
	globals.vg_herramienta_id = vl_herramienta
	
	filtrar()
}




/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2E2D4074-3985-4EAB-8312-80684F826636"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	elements.btn_nuevo.enabled = true
	if (scopes.usuario.vg_permiso_crear == 0) {
		elements.btn_nuevo.enabled = false
	}
	
	elements.btn_cambiar.enabled = true
	if (scopes.usuario.vg_permiso_modificar == 0) {
		elements.btn_cambiar.enabled = false
	}
	
	
	
	if(firstShow){
		
		filtrar()
		
	}
	
	
	
}

/**
 * @properties={typeid:24,uuid:"A78E1A98-3551-48E0-800D-B870A37E03BF"}
 */
function onActionNuevo() {
	forms.herr_equipos_nuevo.vl_form_padre = controller.getName()
	application.showForm(forms.herr_equipos_nuevo)
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"0EB7BFDA-1792-4B1A-AD68-B7BFFA9C0AED"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	forms.herr_equipos_editar.vl_form_padre = controller.getName()
	application.showForm(forms.herr_equipos_editar)

}

/**
 * @properties={typeid:24,uuid:"7E70BC8A-C2CD-48D2-AA69-8456D4504A82"}
 */
function onActionNuevoCambiarPrecio() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.herr_equipos_precios_cambiar );
}

/**
 * @properties={typeid:24,uuid:"4DEEB56E-C39B-4F1B-A34E-A80DB03D424F"}
 */
function onDataChangeHerramienta() {
	globals.vg_herramienta_id = vl_herramienta
	globals.vg_marca_id = null 
	vl_marca = null
	vl_modelo = null
	filtrar()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"0A9C2B69-8E8B-45F7-BDE4-CA2033F4B18C"}
 */
function onActionVerEstado(event) {
	if (event.getElementName() == "btn_disponible"){
		if(vl_disponible == 1){
			vl_disponible = 0
			elements.btn_disponible.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_disponible = 1
			elements.btn_disponible.imageStyleClass = "fas fa-eye"
		}
		
	}
	if (event.getElementName() == "btn_roto"){
		if(vl_roto == 1){
			vl_roto = 0
			elements.btn_roto.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_roto = 1
			elements.btn_roto.imageStyleClass = "fas fa-eye"
		}
		
	}
	if (event.getElementName() == "btn_extraviado"){
		if(vl_extraviado == 1){
			vl_extraviado = 0
			elements.btn_extraviado.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_extraviado = 1
			elements.btn_extraviado.imageStyleClass = "fas fa-eye"
		}
		
	}
	if (event.getElementName() == "btn_reparando"){
		if(vl_reparación == 1){
			vl_reparación = 0
			elements.btn_reparando.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_reparación = 1
			elements.btn_reparando.imageStyleClass = "fas fa-eye"
		}
		
	}
	if (event.getElementName() == "btn_robado"){
		if(vl_robado == 1){
			vl_robado = 0
			elements.btn_robado.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_robado = 1
			elements.btn_robado.imageStyleClass = "fas fa-eye"
		}
		
	}
	if (event.getElementName() == "btn_alquilado"){
		if(vl_alquilado == 1){
			vl_alquilado = 0
			elements.btn_alquilado.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_alquilado = 1
			elements.btn_alquilado.imageStyleClass = "fas fa-eye"
		}
		
	}
	if (event.getElementName() == "btn_baja"){
		if(vl_baja == 1){
			vl_baja = 0
			elements.btn_baja.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_baja = 1
			elements.btn_baja.imageStyleClass = "fas fa-eye"
		}
		
	}
	if (event.getElementName() == "btn_bien_uso"){
		if(vl_bien_uso == 1){
			vl_bien_uso = 0
			elements.btn_bien_uso.imageStyleClass = "fas fa-eye-slash"
		}
		else{
			vl_bien_uso = 1
			elements.btn_bien_uso.imageStyleClass = "fas fa-eye"
		}
		
	}
	
	filtrar()

}

/**
 *
 * @properties={typeid:24,uuid:"AB9AF9C0-FAE4-4DD3-AAAC-A3C3DDE87336"}
 */
function onDataChangeMarca() {
	globals.vg_marca_id = vl_marca
	vl_modelo = null
	filtrar()
}
