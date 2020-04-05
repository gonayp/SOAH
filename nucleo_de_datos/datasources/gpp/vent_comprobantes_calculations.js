/**
 * @properties={type:12,typeid:36,uuid:"91859BAF-8711-4DEB-97A2-E0281EF11E35"}
 */
function calc_estilo_codigo()
{
	if(comp_codigo == 90 || (comp_codigo >= 25 && comp_codigo <40)){//Anticipos y notas de credito
		return "verde"
	}
	else{
		return "rosa"
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"9AAEDB60-1A8F-4BE7-9984-40E526AD196A"}
 */
function calc_estilo_dias_vencidos()
{
	if(calc_dias_vencimiento == null){
		return ""
	}
	if(calc_dias_vencimiento >= 0){
		return "rosa"
	}
	if(calc_dias_vencimiento < 0){
		return "verde"
	}
	return ""
}

/**
 * @properties={type:4,typeid:36,uuid:"724F250F-1925-4E3B-80D6-4B11734987EB"}
 */
function calc_dias_vencimiento()
{
	if(comp_fecha_vencimiento != null ){
		var x = application.getServerTimeStamp() - comp_fecha_vencimiento //substracting two dates returns difference in milliseconds 
		var one_day=1000*60*60*24 //ms * sec * min * hrs in a day 
	
	
		var diffExact = x / one_day //gets difference in days 
		var diffRounded = Math.ceil(diffExact ) // rounds 2.343 to 3
		return diffRounded ;
	}
	else
		return null
}

/**
 * @properties={type:8,typeid:36,uuid:"8DEBF130-7B63-4797-80F4-FD86EE1E7934"}
 */
function calc_iva()
{
	return ;
}

/**
 * @properties={type:8,typeid:36,uuid:"1ED4F54D-215B-46B7-9C03-AFEF29D1EDCC"}
 */
function calc_total()
{
	return ;
}

/**
 * @properties={type:12,typeid:36,uuid:"89C1CAED-561E-4977-85B1-1F8D504CD72E"}
 */
function calc_estilo_seleccion()
{
	if (calc_seleccionado == 1) return 'far fa-check-square';
	else return 'far fa-square';
}

/**
 * @properties={type:4,typeid:36,uuid:"47B5B11D-422F-4CD9-A6C9-9751FA643D1D"}
 */
function calc_seleccionado()
{
	return ;
}

/**
 * @properties={type:12,typeid:36,uuid:"552CCB50-F1FF-4018-99B3-EC08BD467740"}
 */
function calc_num_compr_sin_codig()
{
	return vent_comprobantes_to_core_puntos_de_venta.pv_numero+'-'+comp_numero;
}

/**
 * @properties={type:12,typeid:36,uuid:"2785D7E3-34FC-452C-8067-EFAFAE5626FE"}
 */
function calc_num_comprobante()
{
	var tipo = ""
	switch (comp_codigo) {
	case 5://Factura A
		tipo = "Fct A"
		break;
	case 10://Factura B
		tipo = "Fct B"
		break;
	case 20://Nota de credito A
		tipo = "NC A"
		break;
	case 1://Alquileres
		tipo = "Alq"
		break;
	case 2://Devolucion
		tipo = "Dev"
		break;
	case 3://Recibo automatico
	case 4://Recibo manual
		tipo = "Rec"
		break;
	case 90://Anticipo
		tipo = "Anticipo"
		break;
	}
	
	return tipo+"-"+vent_comprobantes_to_core_puntos_de_venta.pv_numero+'-'+utils.numberFormat(comp_numero,"00000000");
}

/**
 * @properties={typeid:36,uuid:"6D945B36-25FC-4F01-8785-9CB6F294F7D1"}
 */
function calc_num_comprobante_numerico()
{
	
	return vent_comprobantes_to_core_puntos_de_venta.pv_numero+'-'+utils.numberFormat(comp_codigo,"000")+'-'+utils.numberFormat(comp_numero,"00000000");
}
