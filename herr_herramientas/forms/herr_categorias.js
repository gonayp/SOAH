/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F0058DFB-753B-46EA-97A0-54A28D6256CD"}
 */
var vl_nombre = null;


/**
 * @properties={typeid:24,uuid:"5B84D6BE-7541-4992-B521-A0FE3327749F"}
 */
function onActionVolver() {
	application.showForm(forms.herr_configuraciones)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"B8B80500-3509-4F2E-9718-61E8A261AA26"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow) {
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	elements.btn_nuevo.enabled = true
	if (scopes.usuario.vg_permiso_crear == 0) {
		elements.btn_nuevo.enabled = false
	}
	
	contarEquipos()
}


/**
 * @properties={typeid:24,uuid:"FF6A66C7-8559-4028-8CD8-E1898D772B92"}
 */
function contarEquipos(){
	
	var vl_total = 0
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myCategoria = foundset.getRecord(index);
		var nCount = 0
		nCount = databaseManager.getFoundSetCount(myCategoria.herr_categoria_to_herr_herramientas);
		for (var i = 1; i <= nCount; i++) {
			var myHerramienta = myCategoria.herr_categoria_to_herr_herramientas.getRecord(i);
			vl_total += myHerramienta.herr_herramientas_to_herr_equipo.agg_cantidad
		}
		myCategoria.calc_num_equipos = vl_total
		databaseManager.saveData()
		vl_total = 0
	}
	
	
}

/**
 *
 * @properties={typeid:24,uuid:"A76793FA-18F9-4758-BF7B-7AEA6BA05702"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	foundset.find()
	if(vl_nombre != null && vl_nombre != "") foundset.categoria_nombre = '#%'+vl_nombre+'%'
	foundset.search()
}

/**
 * @properties={typeid:24,uuid:"67F8BB0F-8BB8-4246-A321-E9DBA0FF3ADB"}
 */
function onActionLimpiar() {
	vl_nombre = null
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"0349EB82-9C66-4773-B0BE-EDE2E12B957E"}
 */
function onActionNuevo() {
	application.showForm(forms.herr_categorias_nuevo)
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"F4F554BB-BCEB-44F9-8BBF-382BD7256CB6"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.herr_categorias_editar)

}
