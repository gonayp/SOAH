/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"46793197-C361-479D-995C-9D4217BC7B61",variableType:4}
 */
var vl_busqueda_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B54C0338-1374-4A40-960F-EC8B04ABF6AA"}
 */
var vl_busqueda = null;

/**
 * @type {ELEMENT_TYPES.IMAGE_MEDIA}
 *
 * @properties={typeid:35,uuid:"F4A941D9-3767-4EFF-81D0-8B908BF45F83",variableType:-4}
 */
var vl_logo_empresa = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4598ACFB-CA0C-4C71-B2F9-8C4400B4E8DC"}
 */
var vl_nombre_empresa = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"93702A1F-DE57-4E08-9186-CD24485268CB"}
 */
var vl_nombre_usuario = null;


/**
 * @properties={typeid:24,uuid:"28470791-35E5-49C1-906A-5C42C2D80E65"}
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
 * @properties={typeid:24,uuid:"8DB27ED0-27A7-484F-BF90-119A7AAF3F8E"}
 */
function onShow(firstShow) {
	//controller.focusField('lb_busqueda',true)
	controller.focusFirstField()
	vl_busqueda_id = null
	//plugins.keyListener.addKeyListener('accesos', onKey)
	plugins.keyListener.addKeyListener("test",onKey)
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
 * @properties={typeid:24,uuid:"D2C91A5C-4123-45EA-8B7E-C5C21823E03A"}
 */
function onKey(value, event, keyCode, altKey, ctrlKey, shiftKey, capsLock){
    //plugins.webnotificationsToastr.info(keyCode +"__"+ ctrlKey)
	if(keyCode == 65 && ctrlKey == 1){//Ctrl + A (Alquiler nuevo)
		onActionNuevoAlquiler()
	}
	if(keyCode == 66 && ctrlKey == 1){//Ctrl + B (Equipo nuevo)
		onActionNuevoEquipo()
	}
	if(keyCode == 81 && ctrlKey == 1){//Ctrl + q (Devolucion)
		onActionDevolucion() 
	}
	
    if(keyCode == 13){//tecla enter
    	onActionAbrirFuncion()
    }
}

/**
 * @properties={typeid:24,uuid:"6ECA452E-4D25-4627-B5F5-EC4B614F809C"}
 * @SuppressWarnings(wrongparameters)
 */
function tienePermisos(){
	if(scopes.usuario.vg_permiso_lectura == 0 || scopes.usuario.vg_permiso_crear == 0){
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.","",globals.vg_toast_options)
		controller.focusField('lb_busqueda',true)
		vl_busqueda= null
		return false
	}
	return true
}

/**
 * @properties={typeid:24,uuid:"C102B718-B3B7-4E9B-BD21-F73A5A28F114"}
 */
function cargarNombreUsuario(){
	
	/** @type {JSFoundSet<db:/gpp/usuarios>} */
	var fs_usuario = databaseManager.getFoundSet('gpp', 'usuarios')
	fs_usuario.loadRecords(scopes.usuario.vg_usuario_id)
	
	if(fs_usuario.getSize() > 0){
		vl_nombre_usuario = "Usuario: "+fs_usuario.usuarios_to_core.core_nombre
		if(fs_usuario.usuario_password == "123456"){//Si es un usuario nuevo pide para cambiar la contraseña
			var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
				win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
				win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
				win.resizable = false
				win.title= '';
				win.show( forms.usuario_cambio_password );
		}
		if(fs_usuario.usuario_tipo != 2){//Administrador
			elements.btn_administracion.visible = false
			elements.btn_conexiones.visible = false
		}
	}
	
	
	
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"58B5A883-2C47-4022-9F37-3CA96937EE2F"}
 */
function onActionSalir() {
	security.logout()

}

/**
 *
 *
 * @properties={typeid:24,uuid:"1890E0F4-C6BD-4A36-AD40-72D2BD8341FA"}
 */
function cargarEmpresa() {
	/** @type {JSFoundSet<db:/gpp/core_company>} */
	var fs_core_company = databaseManager.getFoundSet('gpp', 'core_company')
	fs_core_company.loadRecords(scopes.usuario.vg_company_id)
	vl_logo_empresa = fs_core_company.company_logo  
	vl_nombre_empresa = fs_core_company.core_company_to_core.core_razon_social
}



/************************************************************************************************************/
/** Funciones principales																				   **/
/************************************************************************************************************/

/**
 * 
 *
 * @properties={typeid:24,uuid:"E49B6E96-2DD1-422C-A780-0776C8F7570E"}
 */
function onActionCientes() {
	
	application.showForm(forms.clientes_main)

}

/**
 *
 * @properties={typeid:24,uuid:"50E86C4D-9593-4890-A556-E3359A53E551"}
 */
function onActionAdministracion() {
	application.showForm(forms.administracion_main)

}


/**
 *
 *
 * @properties={typeid:24,uuid:"115A7A42-B331-4CF1-B65B-76059B325A59"}
 */
function onActionVerObras() {
	application.showForm(forms.obras_main)

}

/**
*
* @properties={typeid:24,uuid:"0EF16204-71CA-42D8-97B2-209D77F98BD1"}
*/
function onActionAcuerdosDePrecio() {
	application.showForm(forms.acuerdos_de_precios)

}

/**
*
* @properties={typeid:24,uuid:"E4F64FDB-E555-43A6-BCE5-FDD2457DD6EA"}
*/
function onActionConfiguraciones() {
	
application.showForm(forms.herr_configuraciones)
}

/**
*
* @properties={typeid:24,uuid:"6D6694AD-6A58-48BB-995A-F7CBF3081E1F"}
*/
function onActionHerramientas() {
	application.showForm(forms.herr_herramientas)

}

/**
*
* @properties={typeid:24,uuid:"A2465D8F-9C51-42CE-AF07-4F711F61869B"}
*/
function onActionEquipos() {
	application.showForm(forms.herr_equipos)

}

/**
*
* @properties={typeid:24,uuid:"9B2B06F9-D784-4D87-8795-B27C25EA9140"}
*/
function onActionAlquileres() {
	application.showForm(forms.alquileres_main)

}

/**
 *
 * @properties={typeid:24,uuid:"9E6DFEF5-992D-4012-BC73-6A8DC77D9B51"}
 */
function onActionListadoDevoluciones() {
	application.showForm(forms.devoluciones_main)

}

/**
 *
 * @properties={typeid:24,uuid:"32680A6C-6D5F-4B1D-A5BB-63994C2AC71D"}
 */
function onActionCategorias() {
	application.showForm(forms.prod_categorias)

}


/**
 *
 * @properties={typeid:24,uuid:"F45012EC-3778-45C7-9CA0-AEEA2625B849"}
 */
function onActionProductos() {
	application.showForm(forms.productos_main)

}


/**
 *
 * @properties={typeid:24,uuid:"928C221D-E373-4169-B2A2-F1445EDA900E"}
 */
function onActionVerDevoluciones() {
	application.showForm(forms.devoluciones_main)

}


/**
 *
 * @properties={typeid:24,uuid:"A51CDB02-A498-4E64-BA2F-793EBC5F8A4E"}
 */
function onActionEstadoCliente() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.clientes_estado_search );

}

/**
 * @properties={typeid:24,uuid:"E25FD57B-331A-4D43-95B9-BAAFB7AC6891"}
 */
function onAction() {
	application.showForm(forms.core_puntos_d_venta)

}


/**
 *
 * @properties={typeid:24,uuid:"CC849804-5699-49F7-A326-4AA1777FCE54"}
 */
function onActionPendientes() {
	application.showForm(forms.pendientes_main)

}



/**
 *
 * @properties={typeid:24,uuid:"7A175A49-9781-4456-A87E-453A132036DA"}
 */
function onActionFacturacion() {
	application.showForm(forms.facturacion_main)

}


/**
*
* @properties={typeid:24,uuid:"5D4119D8-553A-40B7-9A76-87C4A4F51010"}
*/
function onActionCobrarFacturas() {
	application.showForm(forms.facturacion_pagos)

}


/**
 * 
 *
 * @properties={typeid:24,uuid:"578ED8DA-34E0-4078-BC69-519DF2D64C9B"}
 */
function onActionCheques() {
	application.showForm(forms.cheques_main)

}

/**
 * @properties={typeid:24,uuid:"5C403655-BACE-46DD-B4A7-DB2F82F53C44"}
 */
function onActionVerBancos() {
	application.showForm(forms.bancos_main)
}




/**
 * @properties={typeid:24,uuid:"946FAF63-6A34-45D3-AEB0-B2111C3289D4"}
 */
function onActionEstadisticasEquipos() {
	application.showForm(forms.herr_equipos_estadisticas)

}


/**
 * @properties={typeid:24,uuid:"24391336-9142-4A16-9320-E83E389717A4"}
 */
function onActionPrecioEquipos() {
	application.showForm(forms.herr_equipos_precios)
}


/**
 * @properties={typeid:24,uuid:"1E299EB0-5BDC-4821-857A-799C1D1290FD"}
 */
function onActionHistoricoPrecios() {
	application.showForm(forms.herr_listas_precios)
}


/**
*
* @properties={typeid:24,uuid:"338EC89C-A980-4620-93C5-BB6A5E1E271D"}
*/
function onActionReparaciones() {
	application.showForm(forms.rep_main)

}


/**
 * @properties={typeid:24,uuid:"31D81981-FF2F-44ED-96A9-1CD0E720EA41"}
 */
function onActionEquiposAlquilados() {
	application.showForm(forms.vent_comprobante_herramientas)
}





/**
 *
 * @properties={typeid:24,uuid:"A1577D6C-1E4D-4C71-BE7B-EA946655E020"}
 */
function onActionCaja() {
	application.showForm(forms.caja_main)

}


/**
 *
 * @properties={typeid:24,uuid:"F68D9573-528F-49C9-BA14-5600E6755D0A"}
 */
function onActionCerrarCaja() {
	application.showForm(forms.caja_main)
	forms.caja_main.onActioCerrar()

}



/**
 *
 * @properties={typeid:24,uuid:"956D5B1F-0350-428C-94E8-60EB11E6B66B"}
 */
function onActionHistoricoCaja() {
	application.showForm(forms.caja_historicos)

}




/**
 *
 * @properties={typeid:24,uuid:"ADEB3E03-BE72-4BED-B935-B70EB7A104A0"}
 */
function onActionConsultas() {
	application.showForm(forms.fact_consultas_main)

}



/**
 *
 * @properties={typeid:24,uuid:"CF36CC85-B6D4-43B9-A39D-0AC64A9080EF"}
 */
function onActionProveedores() {
	application.showForm(forms.proveedores_main)

}



/**
 *
 * @properties={typeid:24,uuid:"232D8315-FF05-481C-9137-D8773CA026EC"}
 */
function onActionEstadoProveedor() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.proveedores_estado_buscar );

}



/**
 *
 * @properties={typeid:24,uuid:"BE1F255F-7FDD-454D-9FCF-983347281F89"}
 */
function onActionComprobantesProveedores() {
	application.showForm(forms.comprobantes_main)

}


/**
 *
 * @properties={typeid:24,uuid:"0DCC3030-FB61-4BBF-9D99-95427F58C90C"}
 */
function onActionDepositos() {
	application.showForm(forms.deposito_menu)

}



/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"4B9C345A-326F-405F-A4AC-136207F5B3BB"}
 */
function onActionDatosUsuario(event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.usuario_editar );

}




/************************************************************************************************************/
/** Funciones de Nuevo 																					   **/
/************************************************************************************************************/

/**
 * @properties={typeid:24,uuid:"B92929E3-23D3-421D-BB31-D68330ED0E70"}
 */
function onActionNuevaObra() {
	globals.asignarPermisos("obras_nuevo")
	if (tienePermisos())
	application.showForm(forms.obras_nuevo)

}

/**
*
* @properties={typeid:24,uuid:"B0666B88-8417-434B-AA51-5660315E5C7A"}
*/
function onActionNuevoCliente() {
	globals.asignarPermisos("clientes_nuevo")
	if (tienePermisos())
	application.showForm(forms.clientes_nuevo)

}

/**
 * @properties={typeid:24,uuid:"95FE4C8D-1408-43BC-8F9D-66B0B2BC7BBF"}
 */
function onActionNuevoEquipo() {
	globals.asignarPermisos("herr_equipos_nuevo")
	if (tienePermisos()){
		forms.herr_equipos_nuevo.vl_form_padre = 'soah_main'
		application.showForm(forms.herr_equipos_nuevo)
	}

}


/**
 * 
 * @properties={typeid:24,uuid:"03927C0E-CE05-470A-BC8B-FE8A94C896C6"}
 */
function onActionNuevoAlquiler() {
	globals.asignarPermisos("alquiler_nuevo")
	if (tienePermisos())
	application.showForm(forms.alquiler_nuevo)

}




/**
 *
 * @properties={typeid:24,uuid:"94411545-622E-4542-8481-47BBCEFB5D6E"}
 */
function onActionDevolucion() {
	globals.asignarPermisos("devolucion_nuevo")
	if (tienePermisos())
	application.showForm(forms.devolucion_nuevo)

}



/**
 *
 * @properties={typeid:24,uuid:"DE4449CB-8B61-4746-B664-404354D8D43D"}
 */
function onActionNuevaFactura() {
	globals.asignarPermisos("facturacion_inicio")
	if (tienePermisos())
	application.showForm(forms.facturacion_inicio)

}


/**
*
* @properties={typeid:24,uuid:"CC2C44A4-8E9B-4FBF-8EC6-2DCC1CF28028"}
*/
function onActionNuevoComprobanteProveedor() {
	globals.asignarPermisos("comprobante_nuevo")
	if (tienePermisos())
	application.showForm(forms.comprobante_nuevo)

}



/**
 *
 * @properties={typeid:24,uuid:"913719E4-81DD-47DD-A5AC-D2830127AD50"}
 */
function onActionNuevoProveedor() {
	globals.asignarPermisos("proveedor_nuevo")
	if (tienePermisos())
	application.showForm(forms.proveedor_nuevo)

}






/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E69D271C-D008-4F83-807A-A60DD08B573A"}
 */
function onActionConexionesBDLogisticaDH(event) {
	application.showForm(forms.main_menu)

}
