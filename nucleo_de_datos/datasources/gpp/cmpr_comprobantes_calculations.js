/**
 * @properties={type:12,typeid:36,uuid:"A60EF65E-3ECC-4410-9CB9-A5647F0DAE8C"}
 */
function calc_num_comprobante()
{
	var tipo = ""
	switch (cmpr_comp_codigo) {
	case 105://Factura A
		tipo = "Fct A"
		break;
	case 110://Factura B
		tipo = "Fct B"
		break;
	case 120://Nota de credito A
		tipo = "NC A"
		break;
	case 125://Nota de credito B
		tipo = "NC B"
		break;
	case 135://Nota de Debito A
		tipo = "ND A"
		break;
	case 140://Nota de Debito B
		tipo = "ND B"
		break;

	}
	
	return tipo+"-"+cmpr_comp_pv+'-'+utils.numberFormat(cmpr_comp_numero,"00000000");
}
