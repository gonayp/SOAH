

/**
 * Calcula dias reales de alquiler quitando fin de semanas
 * @param p_fecha_devolucion fecha devolucion
 * @param p_fecha_alquiler fecha del alquiler
 * @deprecated 
 *
 * @properties={typeid:24,uuid:"7B6D779F-1AB9-4088-8C1D-8D54ACEECE81"}
 */
function calcularDiasReales(p_fecha_alquiler, p_fecha_devolucion){
	
	var x = p_fecha_devolucion - p_fecha_alquiler//substracting two dates returns difference in milliseconds 
	var one_day=1000*60*60*24 //ms * sec * min * hrs in a day 

	var diffExact = x / one_day //gets difference in days 
	var diffRounded = Math.ceil(diffExact ) // rounds 2.343 to 3
	
	
	var vl_dias_reales = diffRounded //dias naturales
	
	if(diffRounded >= 7 ){
		if(diffRounded >= 15){
			if(diffRounded >=30){
				vl_dias_reales = Math.round( diffRounded * 0.5)
			}
			else{
				vl_dias_reales = Math.round( diffRounded * 0.6)
			}
		}
		else{
			vl_dias_reales = Math.round( diffRounded * 0.8)
		}
	}
	else{//Menor a 7
		var dia_semana = p_fecha_alquiler.getDay()
		switch (diffRounded) {
		case 1:
			vl_dias_reales = 1
			break;
		case 2:
			vl_dias_reales = 2
			break;
		case 3:
			if(dia_semana > 4){//Viernes
				vl_dias_reales = 1
			}
			else{
				vl_dias_reales = 3
			}
			break;
		case 4:
			if(dia_semana > 3){//Jueves o viernes
				vl_dias_reales = 2
			}
			else{
				vl_dias_reales = 4
			}
			break;
		case 5:
			if(dia_semana > 2){//Miercoles o Jueves o viernes
				vl_dias_reales = 3
			}
			else{
				vl_dias_reales = 5
			}
			break;
		case 6:
			if(dia_semana > 1){//Jueves o viernes
				vl_dias_reales = 4
			}
			else{
				vl_dias_reales = 6
			}
			break;
		
		
		}
	}
	
	return vl_dias_reales
	
}

/**
 * Metodo para calcular dias acobrar, quitando fin de semana y aplicando paquetes de dias<br>
 * Si son 7 dias reales, se cobran 5<br>
 * Si son 15 dias reales, se cobran 9<br>
 * Si son mas de 30 dias reales, se cobran 18<br>
 * Ej1: dias reales = 9 -> entonces entra en el paquete de 7 dias y se suma la diferencia. dias a cobrar = 7<br><br>
 * Ej2: dias reales = 12 -> no llega al paquete de 15, por lo que se aplica el paquete de 7. calculando serian 10, pero como el minimo con el siguiente paquete son 9, entonces dias a cobrar = 9<br><br>
 * Ej3: dias reales = 18 -> paquete de 15 mas diferencia de dias. dias a cobrar = 12 <br><br>
 * Ej4: dias reales = 26 -> a cobrar = 18
 * 
 * 
 * @param {Date} p_fecha_devolucion fecha devolucion
 * @param {Date} p_fecha_alquiler fecha del alquiler
 *
 * @properties={typeid:24,uuid:"FC0F1915-B631-420F-920C-DFA6E587E712"}
 */
function calcularDiasParaCobrar(p_fecha_alquiler, p_fecha_devolucion){
	
	p_fecha_alquiler.setHours(p_fecha_alquiler.getHours()+2)//margen de dos horas en la devolucion
	
	var x = p_fecha_devolucion - p_fecha_alquiler//substracting two dates returns difference in milliseconds 
	var one_day=1000*60*60*24 //ms * sec * min * hrs in a day 

	var diffExact = x / one_day //gets difference in days 
	var diffRounded = Math.ceil(diffExact ) // rounds 2.343 to 3
	
	
	var vl_dias_reales = diffRounded //dias naturales
	var vl_dias_cobrar = 1
	
	
	if(vl_dias_reales > 30){//Si se da el caso de que sean mas de 30 dias, se suman grupos de 18 dias a cobrar por cada 30 y se calcula la diferencia. todo se suma
		var vl_sobra = vl_dias_reales - 30
		vl_dias_cobrar = 18
		while (vl_sobra > 30){
			vl_sobra = vl_sobra - 30
			vl_dias_cobrar += 18
		}
		vl_dias_cobrar += calcularDiasCobrar(vl_sobra,p_fecha_alquiler.getDay());
	}
	else{
	
		vl_dias_cobrar = calcularDiasCobrar(vl_dias_reales,p_fecha_alquiler.getDay());
	}
	
	return vl_dias_cobrar;
}


/**
 * 
 * @param vl_dias_reales
 * @param p_dia_semana
 *
 * @properties={typeid:24,uuid:"551AAEAE-8CEE-4117-8D1F-B26CDF450154"}
 */
function calcularDiasCobrar(vl_dias_reales,p_dia_semana){
	
	var vl_dias_cobrar = 1
	var diff = 0
	
	if(vl_dias_reales >= 7 ){
		if(vl_dias_reales >= 15){
			if(vl_dias_reales >=30){
				vl_dias_cobrar = 18
			}
			else{//mayor a 15 y menor de 30
				vl_dias_cobrar = 9
				diff = vl_dias_reales-15
				if((vl_dias_cobrar + diff) < 18){
					vl_dias_cobrar += diff
				}
				else{//la diferencia se pasa de 18
					vl_dias_cobrar = 18	
				}
			}
		}
		else {//mayor a 7 y menor a 15
			vl_dias_cobrar = 5
			diff = vl_dias_reales-7
			if((vl_dias_cobrar + diff) < 9){
				vl_dias_cobrar += diff
			}
			else{//la diferencia se pasa de 9
				vl_dias_cobrar = 9
			}
		}
	}
	else{//Menor a 7
		var dia_semana = p_dia_semana
		switch (vl_dias_reales) {
		case 1:
		vl_dias_cobrar = 1
			break;
		case 2:
		vl_dias_cobrar = 2
			break;
		case 3:
			if(dia_semana > 4){//Viernes
				vl_dias_cobrar = 1
			}
			else{
				vl_dias_cobrar = 3
			}
			break;
		case 4:
			if(dia_semana > 3){//Jueves o viernes
				vl_dias_cobrar = 2
			}
			else{
				vl_dias_cobrar = 4
			}
			break;
		case 5:
			if(dia_semana > 2){//Miercoles o Jueves o viernes
				vl_dias_cobrar = 3
			}
			else{
				vl_dias_cobrar = 5
			}
			break;
		case 6:
			if(dia_semana > 1){//Jueves o viernes
				vl_dias_cobrar = 4
			}
			else{
				vl_dias_cobrar = 6
			}
			break;
		
		
		}
	}
	
	return vl_dias_cobrar
}
