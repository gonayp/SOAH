/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"90F04675-F894-49C7-84B0-19372403DE5F"}
 */
var vl_observacion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"32B528FE-9476-4822-8931-B48A97411401"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"64F786B5-A826-4837-961A-CBE6116CB7FC",variableType:4}
 */
var vl_numero = null;


/**
 * @properties={typeid:24,uuid:"5BF2E4B7-67BA-4108-BA90-5BBA8264FC1A"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"F5A07E4C-C9B9-4F14-833F-32D03D1D94FC"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	
	/** @type {JSFoundSet<db:/gpp/core_puntos_de_venta>} */
	var fs_core_puntos_d_venta = databaseManager.getFoundSet('gpp', 'core_puntos_de_venta')
	
	if (vl_numero == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de numero.", "", globals.vg_toast_options)
		controller.focusField("f_numero", true)
		return
	}
	
	if (vl_nombre == null || vl_nombre == "") {
		plugins.webnotificationsToastr.error("Falta completar el campo de nombre.", "", globals.vg_toast_options)
		controller.focusField("f_nombre", true)
		return
	}
	
	fs_core_puntos_d_venta.find()
	fs_core_puntos_d_venta.pv_numero = vl_numero
	fs_core_puntos_d_venta.search()
	
	if (fs_core_puntos_d_venta.getSize() > 0){
		plugins.webnotificationsToastr.error("Este número de punto de venta ya esta siendo utilizado.","",globals.vg_toast_options)
		return
	}
	
	fs_core_puntos_d_venta.newRecord()
	fs_core_puntos_d_venta.company_id				= scopes.usuario.vg_company_id
	fs_core_puntos_d_venta.pv_nombre				= vl_nombre
	fs_core_puntos_d_venta.pv_numero				= vl_numero
	fs_core_puntos_d_venta.pv_observacion			= vl_observacion
	
	databaseManager.saveData()
	
	//GENERAR CODIGOS POR DEFECTO
	generarCodigos(fs_core_puntos_d_venta.punto_venta_id)
	
	forms.core_puntos_d_venta.onActionLimpiar()
	
	application.getWindow('Dialog').hide()
	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3C606355-7D8C-43C1-A9CE-012955B586EA"}
 */
function onShow(firstShow, event) {
	vl_nombre = null
	vl_nombre = null
	vl_observacion= null
}


/**
 * @param pv_id
 *
 * @properties={typeid:24,uuid:"E1A182C0-EE43-4EC2-86CF-35D0834D7F82"}
 */
function generarCodigos(pv_id){
	
	generar(pv_id,1,"Alquileres",null)
	generar(pv_id,2,"Devoluciones",null)
	generar(pv_id,5,"Facturas A",1)
	generar(pv_id,10,"Facturas B",6)
	generar(pv_id,15,"Facturas C",11)
	generar(pv_id,20,"Nota de Crédito A",3)
	generar(pv_id,25,"Nota de Crédito B",8)
	generar(pv_id,30,"Nota de Crédito C",13)
	generar(pv_id,35,"Nota de Débito A",2)
	generar(pv_id,40,"Nota de Débito B",7)
	generar(pv_id,45,"Nota de Débito C",12)
	
	//PAra proveedores
	generar(pv_id,105,"Facturas A Proveedor",null)
	generar(pv_id,110,"Facturas B Proveedor",null)
	generar(pv_id,115,"Facturas C Proveedor",null)
	generar(pv_id,120,"Nota de Crédito A Proveedor",null)
	generar(pv_id,125,"Nota de Crédito B Proveedor",null)
	generar(pv_id,130,"Nota de Crédito C Proveedor",null)
	generar(pv_id,135,"Nota de Débito A Proveedor",null)
	generar(pv_id,140,"Nota de Débito B Proveedor",null)
	generar(pv_id,145,"Nota de Débito C Proveedor",null)
	
	
	
}

/**
 * @param pv_id
 * @param p_numero
 * @param p_nombre
 * @param {Number} p_num_afip
 *
 * @properties={typeid:24,uuid:"7E909052-81FA-4E70-A515-99F5C4D4511B"}
 */
function generar(pv_id, p_numero, p_nombre, p_num_afip){
	
	/** @type {JSFoundSet<db:/gpp/core_codigos_d_comprobante>} */
	var fs_codigos = databaseManager.getFoundSet('gpp', 'core_codigos_d_comprobante')
	
	fs_codigos.newRecord()
	fs_codigos.company_id					= scopes.usuario.vg_company_id
	fs_codigos.codigo_nombre				= p_nombre
	fs_codigos.codigo_numero				= p_numero
	fs_codigos.codigo_ultimo_numero			= 0
	fs_codigos.punto_venta_id				= pv_id
	fs_codigos.codigo_afip					= p_num_afip
	databaseManager.saveData()
	
}
