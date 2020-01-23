/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"05085432-E18B-4359-8271-4D5AE1049DD5",variableType:93}
 */
var vl_fecha_final = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"0C729673-194F-4EE8-BEC8-CD5A1F50210F",variableType:93}
 */
var vl_fecha_inicial = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C16340F3-86E5-4C6F-B13B-85315F6EAF45"}
 */
function onShow(firstShow, event) {
	
	
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	if(firstShow){
		vl_fecha_final = application.getServerTimeStamp()
		vl_fecha_inicial = new Date(vl_fecha_final.getFullYear(),vl_fecha_final.getMonth()-1,1)
		
	}
	
	filtrar() 

}



/**
 *
 * @properties={typeid:24,uuid:"E7F37600-645C-4AEF-99B5-63A1162E8469"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	foundset.caja_estado = 2
	foundset.caja_fecha_apertura = utils.dateFormat(vl_fecha_inicial, 'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(vl_fecha_final, 'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	foundset.search()
	
	foundset.sort("caja_numero desc")
}

/**
 * @properties={typeid:24,uuid:"C39CF2D9-F4B9-4765-9F8F-F24DEF06AB9E"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}


/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"27BBC872-C2FE-430C-AF23-66314FC91977"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.caja_historico_ver)

}
