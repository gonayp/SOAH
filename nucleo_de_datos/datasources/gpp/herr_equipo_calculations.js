/**
 * @properties={type:12,typeid:36,uuid:"17B3AB0F-914F-4AAF-B363-A9E91D34DB00"}
 */
function calc_ubicacion()
{
	var aux = ""
	
	if(deposito_id != null){
		aux = herr_equipo_to_deposito.deposito_nombre
	}
	if(comp_id != null){
		aux = herr_equipo_to_vent_comprobante_datos.cliente_nombre
	}
	if(reparacion_id != null){
		aux = herr_equipo_to_rep_reparaciones.rep_reparaciones_to_rep_talleres.taller_nombre
	}
	
	
	return aux
}

/**
 * @properties={type:12,typeid:36,uuid:"6A299D5E-A11A-471E-8347-6B75FF265468"}
 */
function calc_nombre()
{
	return herr_equipo_to_herr_herramientas.herramienta_nombre+ ' - '+herr_equipo_to_herr_marca.marca_nombre+' - '+
			herr_equipo_to_herr_modelo.modelo_nombre;
}
