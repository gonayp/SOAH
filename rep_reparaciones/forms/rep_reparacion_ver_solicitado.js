/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"00BE8B4A-9DB2-45FC-8DF6-532ADFE0ECEC",variableType:4}
 */
var vl_estado_equipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"84F5871A-1B88-42C8-86D7-597EFA3EB0E5",variableType:4}
 */
var vl_estado_anterior = null;



/**
 * @properties={typeid:24,uuid:"D3A33617-9349-4253-99F3-D4003BAB88FA"}
 */
function onActionVolver() {
	
	application.showForm(forms.rep_reparaciones)
}



/**
 * @properties={typeid:24,uuid:"B27309A9-6931-43E4-A177-1ED61648B216"}
 */
function onActioGrabar() {
	
	cambioDeEstado()
	
	databaseManager.saveData()
	
	onActionVolver()
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"2999AB24-E642-4DCF-902B-53A0136446A9"}
 */
function onShow(firstShow) {
	
	
	elements.btn_guardar.enabled = true
	if (scopes.usuario.vg_permiso_modificar == 0) {
		elements.btn_guardar.enabled = false
	}
	
	vl_estado_anterior = foundset.reparacion_estado
	
	
	//Adjuntos
	globals.vg_adjunto_clave = "reparaciones"
	globals.vg_adjunto_clave_id	= foundset.reparacion_id
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"8F3CFA27-21F6-429A-B0CB-F980EE8A65F0"}
 */
function onDataChangeEstado() {

	if(foundset.reparacion_estado == 5 || foundset.reparacion_estado == 6){//Terminado o cancelado
		var PressedButton = plugins.dialogs.showQuestionDialog('GPP', '¿Cual es el nuevo estado del equipo?', 'Disponible', 'Roto', 'Extraviado')
			if (PressedButton == 'Disponible') { 
				vl_estado_equipo = 1
			}
			if (PressedButton == 'Roto') { 
				vl_estado_equipo = 2
			}
			if (PressedButton == 'Extraviado') { 
				vl_estado_equipo = 3
			}
			
	}
	else{
		vl_estado_equipo = 4
	}
	
}


/**
 * @properties={typeid:24,uuid:"4F98F393-9270-4E01-AC70-5D493174313D"}
 */
function cambioDeEstado(){
	
	if(vl_estado_anterior != foundset.reparacion_estado){
		
		/** @type {JSFoundSet<db:/gpp/herr_equipo>} */
		var fs_herr_equipo = databaseManager.getFoundSet('gpp', 'herr_equipo')
		fs_herr_equipo.loadRecords(foundset.equipo_id)
		
		/** @type {JSFoundSet<db:/gpp/herr_historicos>} */
		var fs_herr_historicos = databaseManager.getFoundSet('gpp', 'herr_historicos')
		
		
		
		fs_herr_equipo.equipo_estado = vl_estado_equipo
		databaseManager.saveData()
		
		fs_herr_historicos.newRecord()
		fs_herr_historicos.company_id			= scopes.usuario.vg_company_id
		fs_herr_historicos.equipo_id			= foundset.equipo_id
		fs_herr_historicos.hist_fecha			= application.getServerTimeStamp()
		fs_herr_historicos.hist_observacion		= "Cambio de estado desde modulo de reparaciones"
		fs_herr_historicos.reparacion_id		= foundset.reparacion_id
		
		
		switch (vl_estado_equipo) {
		case 1://disponible
			fs_herr_historicos.hist_tipo			= 6
			break;
		case 2://roto
			fs_herr_historicos.hist_tipo			= 2
			break;
		case 3://extraviado
			fs_herr_historicos.hist_tipo			= 4
			break;
		case 4://reparacion
			fs_herr_historicos.hist_tipo			= 3
			break;
		
		}
		
		
	
		
			
	}
			
	
}
