/**
 * Called when the valuelist needs data, it has 3 modes.
 * real and display params both null: return the whole list
 * only display is specified, called by a typeahead, return a filtered list
 * only real value is specified, called when the list doesnt contain the real value for the give record value, this will insert this value into the existing list
 *
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param {Object} realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method.
 *
 * @returns {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"0321357C-114F-463A-B5B2-706D4A78740D"}
 */
function seleccionarCliente(displayValue, realValue, record, valueListName) {
	var args = null
	if (displayValue == null && realValue == null) {
		args = [scopes.usuario.vg_company_id]
		return databaseManager.getDataSetByQuery("gpp", "select concat(cl.cliente_codigo::varchar(255), '-', co.core_nombre), cl.cliente_id from vent_clientes as cl inner join core as co on cl.core_id = co.core_id where cl.company_id = ? and  cl.cliente_estado = 1", args, 100);
	} else if (displayValue != null) {
		args = [scopes.usuario.vg_company_id,"%" + displayValue + "%", utils.stringToNumber(displayValue) ]
		return databaseManager.getDataSetByQuery("gpp", "select concat(cl.cliente_codigo::varchar(255), '-', co.core_nombre), cl.cliente_id from vent_clientes as cl inner join core as co on cl.core_id = co.core_id where cl.company_id = ? and  cl.cliente_estado = 1 and (co.core_nombre ilike ? OR cl.cliente_codigo = ?)", args, 100);
	} else if (realValue != null) {
		args = [scopes.usuario.vg_company_id,realValue];
		return databaseManager.getDataSetByQuery("gpp", "select concat(cl.cliente_codigo::varchar(255), '-', co.core_nombre), cl.cliente_id from vent_clientes as cl inner join core as co on cl.core_id = co.core_id where cl.company_id = ? and  cl.cliente_estado = 1 and cl.cliente_id = ?", args, 1);
	}
	return null
}

/**
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param {Object} realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method.
 *
 * @returns {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"BFF921DB-6315-4644-905B-9ADB18390649"}
 */
function seleccionarCodigoPostalCompleto(displayValue, realValue, record, valueListName) {
	var args = null
	if (displayValue == null && realValue == null) {
		args = [scopes.usuario.vg_company_id]
		return databaseManager.getDataSetByQuery("gpp", "select concat(cp.cod_postal_codigo , '-', cp.cod_postal_nombre,'-', p.provincia_nombre), cp.cod_postal_id from core_codigos_postales as cp inner join core_provincias as p on cp.provincia_id = p.provincia_id where cp.company_id = ?", args, 100);
	} else if (displayValue != null) {
		args = [scopes.usuario.vg_company_id,displayValue + "%",displayValue + "%"]
		return databaseManager.getDataSetByQuery("gpp", "select concat(cp.cod_postal_codigo , '-', cp.cod_postal_nombre,'-', p.provincia_nombre), cp.cod_postal_id from core_codigos_postales as cp inner join core_provincias as p on cp.provincia_id = p.provincia_id where cp.company_id = ? and (cp.cod_postal_nombre ilike ? OR cp.cod_postal_codigo ilike ? ) order by  cp.cod_postal_id desc", args, 100);
	} else if (realValue != null) {
		args = [scopes.usuario.vg_company_id,realValue];
		return databaseManager.getDataSetByQuery("gpp", "select concat(cp.cod_postal_codigo , '-', cp.cod_postal_nombre,'-', p.provincia_nombre), cp.cod_postal_id from core_codigos_postales as cp inner join core_provincias as p on cp.provincia_id = p.provincia_id where cp.company_id = ? and cp.cod_postal_id = ?", args, 1);
	}
	return null
}

/**
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param {Object} realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method.
 *
 * @returns {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 *
 * @properties={typeid:24,uuid:"8AE2A1F9-82EB-464A-929F-6D3D4D6A91C5"}
 */
function seleccionarUsuario(displayValue, realValue, record, valueListName) {
	var args = null
	if (displayValue == null && realValue == null) {
		args = [scopes.usuario.vg_company_id]
		return databaseManager.getDataSetByQuery("gpp", "select  co.core_nombre, u.usuario_id from usuarios as u inner join core as co on u.core_id = co.core_id where u.company_id = ?", args, 100);
	} else if (displayValue != null) {
		args = [scopes.usuario.vg_company_id,"%" + displayValue + "%",displayValue + "%"]
		return databaseManager.getDataSetByQuery("gpp", "select  co.core_nombre, u.usuario_id from usuarios as u inner join core as co on u.core_id = co.core_id where u.company_id = ? and co.core_nombre ilike ? ", args, 100);
	} else if (realValue != null) {
		args = [scopes.usuario.vg_company_id,realValue];
		return databaseManager.getDataSetByQuery("gpp", "select  co.core_nombre, u.usuario_id from usuarios as u inner join core as co on u.core_id = co.core_id where u.company_id = ? and u.core_id = ?", args, 1);
	}
	return null
}


/**
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param {Object} realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method.
 *
 * @returns {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 *
 *
 * @properties={typeid:24,uuid:"99FBF237-2C48-4F39-956F-173F12F13CEB"}
 */
function seleccionarFuncion(displayValue, realValue, record, valueListName) {
	var args = null
	if (displayValue == null && realValue == null) {
		args = [scopes.usuario.vg_company_id]
		return databaseManager.getDataSetByQuery("gpp", "select  f.formulario_nombre, f.formulario_id from usuarios_formularios as f  where f.company_id = ?", args, 100);
	} else if (displayValue != null) {
		args = [scopes.usuario.vg_company_id,"%" + displayValue + "%"]
		return databaseManager.getDataSetByQuery("gpp", "select  f.formulario_nombre, f.formulario_id from usuarios_formularios as f  where f.company_id = ? and f.formulario_nombre ilike ? ", args, 100);
	} else if (realValue != null) {
		args = [scopes.usuario.vg_company_id,realValue];
		return databaseManager.getDataSetByQuery("gpp", "select  f.formulario_nombre, f.formulario_id from usuarios_formularios as f  where f.company_id = ? and f.formulario_id = ?", args, 1);
	}
	return null
}

/**
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param {Object} realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method.
 *
 * @returns {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 *
 *
 * @properties={typeid:24,uuid:"5B6D7270-F127-4C93-B05A-7581E775AB07"}
 */
function seleccionarObra(displayValue, realValue, record, valueListName) {
	var args = null
	if (displayValue == null && realValue == null) {
		args = [scopes.usuario.vg_company_id,scopes.globals.vg_cliente]
		return databaseManager.getDataSetByQuery("gpp", "select concat(o.obra_codigo , '-', o.obra_nombre), o.obra_id from vent_obras as o  where o.company_id = ? and o.cliente_id = ? and o.obra_estado = 1", args, 100);
	} else if (displayValue != null) {
		args = [scopes.usuario.vg_company_id,scopes.globals.vg_cliente,"%" + displayValue + "%"]
		return databaseManager.getDataSetByQuery("gpp", "select concat(o.obra_codigo , '-', o.obra_nombre), o.obra_id from vent_obras as o  where o.company_id = ? and o.cliente_id = ? and o.obra_estado = 1 and o.obra_nombre ilike ? ", args, 100);
	} else if (realValue != null) {
		args = [scopes.usuario.vg_company_id,scopes.globals.vg_cliente,realValue];
		return databaseManager.getDataSetByQuery("gpp", "select concat(o.obra_codigo , '-', o.obra_nombre), o.obra_id from vent_obras as o  where o.company_id = ? and o.cliente_id = ? and o.obra_estado = 1 and o.obra_id = ?", args, 1);
	}
	return null
}


/**
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param {Object} realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method.
 *
 * @returns {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 *
 * @properties={typeid:24,uuid:"23593CDD-601B-4A72-9D86-FC94AF9733EC"}
 */
function seleccionarEstadoComprobante(displayValue, realValue, record, valueListName) {
	var args = null
	if (displayValue == null && realValue == null) {
		args = [scopes.usuario.vg_company_id, scopes.globals.vg_tipo_comprobante]
		return databaseManager.getDataSetByQuery("gpp", "select e.estado_nombre, e.estado_id from vent_comprobante_estados as e  where e.company_id = ? and e.estado_tipo = ?", args, 100);
	} else if (displayValue != null) {
		args = [scopes.usuario.vg_company_id, scopes.globals.vg_tipo_comprobante,"%" + displayValue + "%"]
		return databaseManager.getDataSetByQuery("gpp", "select e.estado_nombre, e.estado_id from vent_comprobante_estados as e  where e.company_id = ? and e.estado_tipo = ? and e.estado_nombre ilike ?", args, 100);
	} else if (realValue != null) {
		args = [scopes.usuario.vg_company_id, scopes.globals.vg_tipo_comprobante,realValue];
		return databaseManager.getDataSetByQuery("gpp", "select e.estado_nombre, e.estado_id from vent_comprobante_estados as e  where e.company_id = ? and e.estado_tipo = ? and e.estado_id = ?", args, 1);
	}
	return null
}


/**
 * @param displayValue
 * @param realValue
 * @param record
 * @param valueListName
 *
 * @properties={typeid:24,uuid:"B99E9D85-7B63-47F3-8E8D-088AF893DE92"}
 */
function seleccionarMarca(displayValue, realValue, record, valueListName) {
	var args = null
	if (displayValue == null && realValue == null) {
		args = [scopes.usuario.vg_company_id,globals.vg_herramienta_id]
		return databaseManager.getDataSetByQuery("gpp", "Select concat(m.marca_codigo::varchar(255), '-', m.marca_nombre), m.marca_id from herr_marca as m JoIN herr_equipo as e on e.marca_id = m.marca_id Where m.company_id = ? and e.herramienta_id = ? group by m.marca_codigo,m.marca_nombre,m.marca_id", args, 100);
	} else if (displayValue != null) {
		args = [scopes.usuario.vg_company_id,"%" + displayValue + "%", utils.stringToNumber(displayValue) ,globals.vg_herramienta_id]
		return databaseManager.getDataSetByQuery("gpp", "Select concat(m.marca_codigo::varchar(255), '-', m.marca_nombre), m.marca_id from herr_marca as m JoIN herr_equipo as e on e.marca_id = m.marca_id Where m.company_id = ? and (m.marca_nombre ilike ? OR m.marca_codigo = ?) and e.herramienta_id = ? group by m.marca_codigo,m.marca_nombre,m.marca_id ", args, 100);
	} else if (realValue != null) {
		args = [scopes.usuario.vg_company_id,realValue,globals.vg_herramienta_id];
		return databaseManager.getDataSetByQuery("gpp", "Select concat(m.marca_codigo::varchar(255), '-', m.marca_nombre), m.marca_id from herr_marca as m JoIN herr_equipo as e on e.marca_id = m.marca_id Where m.company_id = ? and (m.marca_nombre ilike ? OR m.marca_codigo = ?) and m.marca_id = ? and e.herramienta_id = ? group by m.marca_codigo,m.marca_nombre,m.marca_id  ", args, 1);
	}
	return null
}

/**
 * @param displayValue
 * @param realValue
 * @param record
 * @param valueListName
 *
 * @properties={typeid:24,uuid:"8272D640-11BA-4075-BAD9-49CFD1A2C071"}
 */
function seleccionarModelo(displayValue, realValue, record, valueListName) {
	
	var clausula = " and e.herramienta_id = ? and e.marca_id = ? "
	if(globals.vg_herramienta_id == null){
		clausula = " "
	}
	else{
		if(globals.vg_marca_id == null){
			clausula = " and e.herramienta_id = ? "
		}
	}
	
	var args = null
	if (displayValue == null && realValue == null) {
		
		if(globals.vg_herramienta_id == null){
			args = [scopes.usuario.vg_company_id]
		}else{
			if(globals.vg_marca_id == null){
				args = [scopes.usuario.vg_company_id,globals.vg_herramienta_id]
			}
			else{
				args = [scopes.usuario.vg_company_id,globals.vg_herramienta_id,globals.vg_marca_id]
			}
		}
		return databaseManager.getDataSetByQuery("gpp", "Select concat(m.modelo_codigo::varchar(255), '-', m.modelo_nombre), m.modelo_id from herr_modelo as m JoIN herr_equipo as e on e.modelo_id = m.modelo_id Where m.company_id = ? "+ clausula +" group by m.modelo_codigo,m.modelo_nombre,m.modelo_id", args, 100);
	} else if (displayValue != null) {
		if(globals.vg_herramienta_id == null){
			args = [scopes.usuario.vg_company_id,"%" + displayValue + "%", utils.stringToNumber(displayValue) ]
		}else{
			if(globals.vg_marca_id == null){
				args = [scopes.usuario.vg_company_id,"%" + displayValue + "%", utils.stringToNumber(displayValue) ,globals.vg_herramienta_id]
			}
			else{
				args = [scopes.usuario.vg_company_id,"%" + displayValue + "%", utils.stringToNumber(displayValue) ,globals.vg_herramienta_id,globals.vg_marca_id]
			}
		}
		
		return databaseManager.getDataSetByQuery("gpp", "Select concat(m.modelo_codigo::varchar(255), '-', m.modelo_nombre), m.modelo_id from herr_modelo as m JoIN herr_equipo as e on e.modelo_id = m.modelo_id Where m.company_id = ? and (m.modelo_nombre ilike ? OR m.modelo_codigo = ?) "+ clausula +" group by m.modelo_codigo,m.modelo_nombre,m.modelo_id ", args, 100);
	} else if (realValue != null) {
		if(globals.vg_herramienta_id == null){
			args = [scopes.usuario.vg_company_id,realValue];
		}else{
			if(globals.vg_marca_id == null){
				args = [scopes.usuario.vg_company_id,realValue,globals.vg_herramienta_id];
			}
			else{
				args = [scopes.usuario.vg_company_id,realValue,globals.vg_herramienta_id,globals.vg_marca_id];
			}
		}
		
		return databaseManager.getDataSetByQuery("gpp", "Select concat(m.modelo_codigo::varchar(255), '-', m.modelo_nombre), m.modelo_id from herr_modelo as m JoIN herr_equipo as e on e.modelo_id = m.modelo_id Where m.company_id = ?  and m.modelo_id = ? "+ clausula +" group by m.modelo_codigo,m.modelo_nombre,m.modelo_id  ", args, 1);
	}
	return null
}


/**
 * @param displayValue
 * @param realValue
 * @param record
 * @param valueListName
 *
 * @properties={typeid:24,uuid:"2856E38C-3769-478B-9216-B55DCCC5B409"}
 */
function seleccionarProveedor(displayValue, realValue, record, valueListName) {
	var args = null
	if (displayValue == null && realValue == null) {
		args = [scopes.usuario.vg_company_id]
		return databaseManager.getDataSetByQuery("gpp", "select concat(p.proveedor_codigo::varchar(255), '-', co.core_nombre), p.proveedor_id from cmpr_proveedores as p inner join core as co on p.core_id = co.core_id where p.company_id = ? and  p.proveedor_estado = 1 ", args, 100);
	} else if (displayValue != null) {
		args = [scopes.usuario.vg_company_id,"%" + displayValue + "%", utils.stringToNumber(displayValue)]
		return databaseManager.getDataSetByQuery("gpp", "select concat(p.proveedor_codigo::varchar(255), '-', co.core_nombre), p.proveedor_id from cmpr_proveedores as p inner join core as co on p.core_id = co.core_id where p.company_id = ? and  p.proveedor_estado = 1  and (co.core_nombre ilike ? OR p.cliente_codigo = ?)", args, 100);
	} else if (realValue != null) {
		args = [scopes.usuario.vg_company_id,realValue];
		return databaseManager.getDataSetByQuery("gpp", "select concat(p.proveedor_codigo::varchar(255), '-', co.core_nombre), p.proveedor_id from cmpr_proveedores as p inner join core as co on p.core_id = co.core_id where p.company_id = ? and  p.proveedor_estado = 1 and p.proveedor_codigo = ?", args, 1);
	}
	return null
}





