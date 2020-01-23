/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3AA1C24C-7AC0-4BB9-86CA-34A9528E84A2",variableType:8}
 */
var vl_precio_inicial = null;

/**
 * @properties={typeid:24,uuid:"4E708B11-1575-40D8-9E53-59EFEC47CCB2"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	foundset.loadAllRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"25A3E5E7-9D60-475B-9D22-38F55A3C761B"}
 */
function onActioGrabar() {
	
	if(vl_precio_inicial != foundset.calc_total){
		forms.devolucion_ver.foundset.comp_imp_alqu -= vl_precio_inicial
		forms.devolucion_ver.foundset.comp_imp_alqu += foundset.calc_total
		forms.devolucion_ver.calculoTotales()
	}
	
	databaseManager.saveData()
	foundset.loadAllRecords()
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"87325F88-8DEF-46B5-976B-5AD67BB3AAD0"}
 */
function onActioBorrar() {
	
	forms.devolucion_ver.foundset.comp_imp_alqu -= foundset.calc_total
	
	modificarRelativos(foundset.equipo_id,foundset.comp_id,foundset.comp_devolucion)
	
	foundset.deleteRecord()
	foundset.loadAllRecords()
	application.getWindow('Dialog').hide()
}


/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param p_equipo
 * @param p_comp_id
 * @param p_comp_alq_id
 *
 * @properties={typeid:24,uuid:"2C86D0CE-40A5-4153-836A-C2286977289D"}
 */
function modificarRelativos(p_equipo , p_comp_id,p_comp_alq_id){

	
	/** @type {JSFoundSet<db:/gpp/vent_comprobantes>} */
	var fs_comprobantes_alq = databaseManager.getFoundSet('gpp', 'vent_comprobantes')
	
	/** @type {JSFoundSet<db:/gpp/vent_comprobante_herramientas>} */
	var fs_comprobante_herramientas_alq = databaseManager.getFoundSet('gpp', 'vent_comprobante_herramientas')
	
	/** @type {JSFoundSet<db:/gpp/herr_historicos>} */
	var fs_historico_equipos = databaseManager.getFoundSet('gpp', 'herr_historicos')
	
	/** @type {JSFoundSet<db:/gpp/herr_equipo>} */
	var fs_equipo = databaseManager.getFoundSet('gpp', 'herr_equipo')
	
	
	//Cambiamos estado de equipo
	fs_equipo.loadRecords(p_equipo)
	fs_equipo.equipo_estado = 2 //no disponible
	fs_equipo.comp_id		= p_comp_alq_id
	databaseManager.saveData(fs_equipo)
	
	//Borramos historico de herramienta
	fs_historico_equipos.loadRecords(p_comp_alq_id)
	fs_historico_equipos.deleteRecord()
	databaseManager.saveData(fs_historico_equipos)
	
	//Marcamos herramienta con el id de la devolucion
	fs_comprobante_herramientas_alq.find()
	fs_comprobante_herramientas_alq.comp_id = p_comp_alq_id
	fs_comprobante_herramientas_alq.equipo_id = p_equipo
	fs_comprobante_herramientas_alq.search()
	if(fs_comprobante_herramientas_alq.getSize()>0){
		fs_comprobante_herramientas_alq.comp_devolucion = null
		databaseManager.saveData(fs_comprobante_herramientas_alq)
	}
	
	//Cambiamos estado de comprobante de alquiler si corresponde
	fs_comprobantes_alq.find()
	fs_comprobantes_alq.comp_id = p_comp_alq_id
	fs_comprobantes_alq.search()
	if(fs_comprobantes_alq.getSize()>0){
		
		fs_comprobantes_alq.comp_estado_id = 2 //parcial
		
		databaseManager.saveData(fs_comprobantes_alq)
	}
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"04ED2684-E0C1-43C9-913B-274A3F603AD2"}
 */
function onShow(firstShow, event) {
	vl_precio_inicial = foundset.calc_total
	
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"7DADB3D0-49DC-445E-ADAE-C5D76B8F64A1"}
 */
function onDataChangeDias() {
	calc_total = comp_dias_alquiler * comp_precio
}
