
/**
 * @properties={typeid:24,uuid:"07C17D7B-9783-493C-98E2-0E64B65FFCBF"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGenerarCodBarras() {
	if(herramienta_id == null){
		plugins.webnotificationsToastr.warning("Falta el tipo de herramienta del equipo para generar el código de barras.","",globals.vg_toast_options)
		return
	}
	
	if(marca_id == null){
		plugins.webnotificationsToastr.warning("Falta la marca del equipo para generar el código de barras.","",globals.vg_toast_options)
		return
	}
	
	if(modelo_id == null){
		plugins.webnotificationsToastr.warning("Falta el modelo del equipo para generar el código de barras.","",globals.vg_toast_options)
		return
	}
	
	if(equipo_codigo == null){
		plugins.webnotificationsToastr.warning("Falta el código del equipo para generar el código de barras.","",globals.vg_toast_options)
		return
	}
	
	var vl_categoria = null
	var vl_cod_categoria = 0
	var vl_cod_herramienta = 0
	var vl_cod_marca = 0
	var vl_cod_modelo = 0
	var vl_cod_equipo = equipo_codigo
	
	if(herr_equipo_to_herr_herramientas.getSize() > 0){
		vl_categoria = herr_equipo_to_herr_herramientas.categoria_herr_id
		vl_cod_herramienta = herr_equipo_to_herr_herramientas.herramienta_codigo
		if(herr_equipo_to_herr_herramientas.herr_herramientas_to_herr_categoria.getSize() > 0){
			vl_cod_categoria = herr_equipo_to_herr_herramientas.herr_herramientas_to_herr_categoria.categoria_codigo
		}
		else{
			plugins.webnotificationsToastr.error("Error con la categoría de la herramienta.","",globals.vg_toast_options)
			return
		}
	}
	
	if(vl_categoria == null){
		plugins.webnotificationsToastr.warning("El tipo de herramienta seleccionado no tiene categoría asignada, no se puede generar el código de barras.","",globals.vg_toast_options)
		return
	}
	
	
	if(herr_equipo_to_herr_marca.getSize() > 0 ){
		vl_cod_marca = herr_equipo_to_herr_marca.marca_codigo
	}
	
	
	if(herr_equipo_to_herr_modelo.getSize() > 0){
		vl_cod_modelo = herr_equipo_to_herr_modelo.modelo_codigo
	}
	
	
	equipo_cod_barras = globals.generarCodigoBarras(vl_cod_categoria,vl_cod_herramienta,vl_cod_marca,vl_cod_modelo,vl_cod_equipo)
	
	
}

/**
 * @properties={typeid:24,uuid:"F33EDB47-FA52-4D48-9E5D-4231E90C7160"}
 */
function onActioVerAlquiler() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.herr_equipos_editar_datos_alqu );
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A4A33948-CABD-484C-BCA8-1DD161D8AB37"}
 */
function onShow(firstShow, event) {
	elements.f_estado.enabled = true
	elements.btn_alquiler.enabled = false
	elements.btn_reparacion.enabled = false
	if(comp_id != null){//Si esta alquilado
		elements.f_estado.enabled = false
		elements.btn_alquiler.enabled = true
	}
	if(reparacion_id != null){//Si esta en reparacion
		elements.f_estado.enabled = false
		elements.btn_reparacion.enabled = true
	}
	
	
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F447BD72-E745-41F9-93AA-A3C885C7DEF0"}
 */
function onActionVerReparacion(event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win.resizable = false
	win.title= '';
	win.show( 'rep_reparacion_detalle' );

}
