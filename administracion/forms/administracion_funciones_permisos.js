
/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given) or.
 * when the ENTER key is used then only the selected foundset index is given
 * Use the record to exactly match where the user clicked on
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"C9941781-E161-4F3E-9410-EB48F0C39405"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	switch (columnindex) {
	case 1:
		if(prmiso_lectura == 1) prmiso_lectura = 0
		else prmiso_lectura = 1
		break;
	case 2:
		if(prmiso_crear == 1) prmiso_crear = 0
		else prmiso_crear = 1
		break;
	case 3:
		if(prmiso_modificar == 1) prmiso_modificar = 0
		else prmiso_modificar = 1
		break;
	case 4:
		if(prmiso_borrar == 1) prmiso_borrar = 0
		else prmiso_borrar = 1
		break;
	case 5:
		if(prmiso_imprimir == 1) prmiso_imprimir = 0
		else prmiso_imprimir = 1
		break;
	case 6:
		if(prmiso_admin == 1) prmiso_admin = 0
		else prmiso_admin = 1
		break;
	
	}

}
