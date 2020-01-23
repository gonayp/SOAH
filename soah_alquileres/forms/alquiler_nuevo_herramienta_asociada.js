

/**
 * @properties={typeid:24,uuid:"AFE3AAC7-2720-4439-9D11-BF0C1B330A76"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
	}

/**
 * @properties={typeid:24,uuid:"D2AD5869-C2DC-40B6-AEB6-F2ACC8054F3E"}
 * @AllowToRunInFind
 */
function filtrar(p_herramienta_id) {
	
	foundset.find()
	equipo_estado				= 1
	herramienta_id				= p_herramienta_id
	foundset.search()
	
	foundset.sort("herramienta_id, marca_id, modelo_id asc")
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EFC29FED-00D3-4D60-A3D0-BA5AE544803B"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {


	
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"85C8AC00-6039-412F-99BE-C6BFC2B59B61"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	addHerramienta()

}

/**
 * @properties={typeid:24,uuid:"70D74379-4B0D-470E-8120-4B462742C758"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function addHerramienta() {
	
	forms.alquiler_nuevo_herramientas.foundset.find()
	forms.alquiler_nuevo_herramientas.foundset.equipo_id = foundset.equipo_id
	forms.alquiler_nuevo_herramientas.foundset.search()
	
	if(forms.alquiler_nuevo_herramientas.foundset.getSize() == 0){
		if(foundset.equipo_estado == 1){//Dsponible
			
			forms.alquiler_nuevo_herramientas.foundset.newRecord()
			forms.alquiler_nuevo_herramientas.foundset.comp_precio			= foundset.equipo_precio_base
			forms.alquiler_nuevo_herramientas.foundset.equipo_id			= foundset.equipo_id
			forms.alquiler_nuevo_herramientas.foundset.equipo_cod_barras	= foundset.equipo_cod_barras
			forms.alquiler_nuevo_herramientas.foundset.equipo_modelo		= foundset.herr_equipo_to_herr_modelo.modelo_nombre
			forms.alquiler_nuevo_herramientas.foundset.equipo_herramienta	= foundset.herr_equipo_to_herr_herramientas.herramienta_nombre
			forms.alquiler_nuevo_herramientas.foundset.equipo_num_serie		= foundset.equipo_num_serie
			forms.alquiler_nuevo_herramientas.foundset.comp_precio_ajustado	= scopes.facturacion.calcularAcuerdoPrecios(forms.alquiler_nuevo.vl_acuerdo_precios,foundset.equipo_precio_base)
			forms.alquiler_nuevo_herramientas.foundset.comp_comentario_entrega = foundset.equipo_descripcion
			
			databaseManager.saveData()
			
			forms.alquiler_nuevo.vl_total += forms.alquiler_nuevo_herramientas.foundset.comp_precio_ajustado
			
			onActionVolver()
		}
		else{//Alquilado, extraviado, roto, etc
			plugins.webnotificationsToastr.error("El equipo no esta disponible.","",globals.vg_toast_options)
		}
	}
	else{
		plugins.webnotificationsToastr.error("La herramienta ya fue añadida al alquiler.","",globals.vg_toast_options)
	}
	forms.alquiler_nuevo_herramientas.foundset.loadAllRecords()
}
