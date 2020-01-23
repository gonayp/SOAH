/**
 * @properties={type:12,typeid:36,uuid:"D362B76A-B7A1-4ECF-B87A-B545144C72F3"}
 */
function style_administracion()
{
	if(prmiso_admin == 1) return "far fa-check-circle"
	else return "far fa-circle"
}

/**
 * @properties={typeid:36,uuid:"C3FFD74D-9B9C-4777-B153-B6EE3E3AE42D"}
 */
function style_imprimir()
{
	if(prmiso_imprimir == 1) return "far fa-check-circle"
	else return "far fa-circle"
}

/**
 * @properties={typeid:36,uuid:"E27861C8-E09A-41A8-9921-3612CEDF7C9D"}
 */
function style_borrar()
{
	if(prmiso_borrar == 1) return "far fa-check-circle"
	else return "far fa-circle"
}

/**
 * @properties={typeid:36,uuid:"CB224D40-103A-449D-BA48-5AAD6166E064"}
 */
function style_modificar()
{
	if(prmiso_modificar == 1) return "far fa-check-circle"
	else return "far fa-circle"
}

/**
 * @properties={typeid:36,uuid:"FFF041B1-0E5E-435E-BF77-2BDEB57D7A1C"}
 */
function style_crear()
{
	if(prmiso_crear == 1) return "far fa-check-circle"
	else return "far fa-circle"
}

/**
 * @properties={typeid:36,uuid:"6814F945-D269-46EC-B42B-91FDB5004694"}
 */
function style_leer()
{
	if(prmiso_lectura == 1) return "far fa-check-circle"
	else return "far fa-circle"
}
