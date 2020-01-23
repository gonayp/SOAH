/**
 * @properties={type:12,typeid:36,uuid:"7223E4C6-EDC5-4E30-ADD9-34A8D5189AA0"}
 */
function calc_fallas()
{
	var fallas = ""
		
	var nRecordCount = 0
	nRecordCount = rep_reparaciones_to_rep_fallas_reparacion.getSize();
	for (var index = 1; index <= nRecordCount; index++) {
		var myFalla = rep_reparaciones_to_rep_fallas_reparacion.getRecord(index);
		fallas+= myFalla.rep_fallas_reparacion_to_rep_fallas.falla_nombre+"; "
	}
	return fallas;
}
