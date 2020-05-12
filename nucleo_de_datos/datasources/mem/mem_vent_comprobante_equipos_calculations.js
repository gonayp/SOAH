/**
 * @properties={type:12,typeid:36,uuid:"3DB1B305-FE29-4C21-9005-A1F029093F0E"}
 */
function calc_estilo_seleccionado()
{
	if (calc_seleccionado == 1) return 'far fa-check-square';
	else return 'far fa-square';
}

/**
 * @properties={type:4,typeid:36,uuid:"3B041B81-7CC2-4556-889C-CFCE6E529304"}
 */
function calc_seleccionado()
{
	return ;
}

/**
 * @properties={type:12,typeid:36,uuid:"90D6C1F6-16BA-4BF2-9681-96F616A67192"}
 */
function calc_color_dias_reales()
{
	if(comp_dias_reales > 30) return 'rojo'
	return ''
}

/**
 * @properties={type:12,typeid:36,uuid:"D3D0FE7C-403E-4C2C-A1B0-B45983F39321"}
 */
function calc_herr_asociada_estilo()
{
	if(herramientas_asociadas == 1) return 'fas fa-plus-circle'
	return ''
}
