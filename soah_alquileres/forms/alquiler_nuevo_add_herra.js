/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3B39A078-41E7-4A89-8093-AAA8B2A7BB6D"}
 */
var vl_cod_bar = null;


/**
 * @properties={typeid:24,uuid:"2978FFA4-190B-48F8-A76C-93311BB6EB60"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}


/**
 * @properties={typeid:24,uuid:"2A0E5E1D-D8C3-48C5-BDE6-85D1CB38BFF1"}
 */
function onActioGrabar(){
	grabar()
	vl_cod_bar = null
	controller.focusFirstField()
}


/**
 * @properties={typeid:24,uuid:"ED8046EA-A518-4079-95CD-CDB2BF01C4AE"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function grabar() {
	
	
	
	if (vl_cod_bar != null){
		/** @type {JSFoundSet<db:/gpp/herr_equipo>} */
		var fs_equipos = databaseManager.getFoundSet('gpp', 'herr_equipo')
		
		fs_equipos.find()
		fs_equipos.equipo_cod_barras = vl_cod_bar
		fs_equipos.search()
		
		if(fs_equipos.getSize()>0){
			
			forms.alquiler_nuevo_herramientas.foundset.find()
			forms.alquiler_nuevo_herramientas.foundset.equipo_id = fs_equipos.equipo_id
			forms.alquiler_nuevo_herramientas.foundset.search()
			
			if(forms.alquiler_nuevo_herramientas.foundset.getSize() == 0){
				if(fs_equipos.equipo_estado == 1){//Dsponible
					
					forms.alquiler_nuevo_herramientas.foundset.newRecord()
					forms.alquiler_nuevo_herramientas.foundset.comp_precio			= fs_equipos.equipo_precio_base
					forms.alquiler_nuevo_herramientas.foundset.equipo_id			= fs_equipos.equipo_id
					forms.alquiler_nuevo_herramientas.foundset.equipo_cod_barras	= fs_equipos.equipo_cod_barras
					forms.alquiler_nuevo_herramientas.foundset.equipo_modelo		= fs_equipos.herr_equipo_to_herr_modelo.modelo_nombre
					forms.alquiler_nuevo_herramientas.foundset.equipo_herramienta	= fs_equipos.herr_equipo_to_herr_herramientas.herramienta_nombre
					forms.alquiler_nuevo_herramientas.foundset.equipo_num_serie		= fs_equipos.equipo_num_serie
					forms.alquiler_nuevo_herramientas.foundset.comp_precio_ajustado	= scopes.facturacion.calcularAcuerdoPrecios(forms.alquiler_nuevo.vl_acuerdo_precios,fs_equipos.equipo_precio_base)
					forms.alquiler_nuevo_herramientas.foundset.comp_comentario_entrega = fs_equipos.equipo_descripcion
					
					//Si la herramienta añadida tiene herramientas asociadas
					if(databaseManager.hasRecords(fs_equipos.herr_equipo_to_herr_herramientas.herr_herramientas_to_herr_herramientas_asociadas)){
						forms.alquiler_nuevo_herramientas.foundset.herramientas_asociadas = 1
						plugins.webnotificationsToastr.warning("Este equipo tiene herramientas asociadas.","",globals.vg_toast_options)
					}
					
					databaseManager.saveData()
					
					forms.alquiler_nuevo.vl_total += forms.alquiler_nuevo_herramientas.foundset.comp_precio_ajustado
				}
				else{//Alquilado, extraviado, roto, etc
					plugins.webnotificationsToastr.error("El equipo con este código de barras no esta disponible.","",globals.vg_toast_options)
				}
				
			}
			else{
				plugins.webnotificationsToastr.error("La herramienta ya fue añadida al alquiler.","",globals.vg_toast_options)
			}
			forms.alquiler_nuevo_herramientas.foundset.loadAllRecords()
		}
		else{
			plugins.webnotificationsToastr.error("El código no pertenece a ningun equipo.","",globals.vg_toast_options)
		}
		
		//controller.focusFirstField()
		
		
		
		
	}
}
	



/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"16635FB3-94D4-44C9-A262-E978E751525D"}
 */
function onShow(firstShow, event) {
	vl_cod_bar = null
	controller.focusFirstField()
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"B0026AB4-DB23-4E9E-84DE-5BD21286D2A9"}
 */
function onDataChangeCodBarras() {
	grabar()
	
}






/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"71D29A5A-26D6-4A14-8BC8-2A696DAD5C92"}
 */
function onAction(event) {
	grabar()
	vl_cod_bar = null
}
