/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5FED80D7-2143-48B7-8B63-F1046EC80CBD",variableType:4}
 */
var vl_categoria = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"834550A0-BCFD-49CF-A5E0-667248018077"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6BDC8BD4-A8D4-44F0-AEF7-6E43DBED4A3D",variableType:4}
 */
var vl_codigo = null;


/**
 *
 * @properties={typeid:24,uuid:"8311ED2F-B6F6-4927-9C4A-CE2033422EC1"}
 * @AllowToRunInFind
 */
function filtrar() {
	foundset.find()
	if(vl_codigo != null) herramienta_codigo = vl_codigo
	if(vl_nombre != null & vl_nombre != "") herramienta_nombre = '#%'+vl_nombre+'%'
	if(vl_categoria != null) categoria_herr_id = vl_categoria
	foundset.search()
}

/**
 * @properties={typeid:24,uuid:"24508760-FBD7-4BB4-B29F-8D3F35BCAA29"}
 */
function onActionLimpiar() {
	vl_codigo = null
	vl_nombre = null
	vl_categoria = null
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"20AA6F16-739A-4B24-8DCD-027709A75E15"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 * @properties={typeid:24,uuid:"DF047893-EB12-4197-A326-0D5FEAC7B669"}
 */
function onActionNuevo() {
	application.showForm(forms.herr_herramientas_nuevo)
}

/**
 * @properties={typeid:24,uuid:"79CE0A73-16E6-419B-94BC-397A53F04EA7"}
 */
function onActionImportar() {

	
	/** @type {JSFoundSet<db:/gpp/herr_herramientas>} */
	var fs_herramientas= databaseManager.getFoundSet('gpp', 'herr_herramientas')
	
	var file_3m = plugins.file.readTXTFile("C:\Users\Gonay\Desktop\herramientas.csv")

	if((file_3m != null)&&(file_3m != '')){
		
		var array = file_3m.split("\n")
		var aux1 = array[1].split(';')
		if(aux1.length != 3 ){
			plugins.webnotificationsToastr.error("La cantidad de columnas es incorrecta.", "ERROR");
			
				plugins.svyBlockUI.stop()
		
			return
		}
		else{
			
			var a = array.length
			for (var i=0; i<a;  i++){
				
				if(i%10 == 0)
					plugins.svyBlockUI.show('Cargando Herramienta '+ i + ' de ' + a)
				
				var fila_herramienta = array[i].split(';')
				fs_herramientas.newRecord()
				fs_herramientas.company_id						= scopes.usuario.vg_company_id
				fs_herramientas.herramienta_codigo				= fila_herramienta[2]
				fs_herramientas.herramienta_nombre				= fila_herramienta[1]
				
				databaseManager.saveData(fs_herramientas)
			}
		}
		
		}
		else {
			plugins.webnotificationsToastr.error("El archivo seleccionado no posee datos.", "ERROR");
		}
	plugins.svyBlockUI.stop()
	plugins.webnotificationsToastr.info("El proceso finalizo correctamente.", "Información");
	
}



/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"0859CF43-C98C-453D-A203-BE87D77D4FCB"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.herr_herramientas_editar)

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9407B9E8-23B2-4F33-8CF8-62326981BA04"}
 * @SuppressWarnings(wrongparameters)
 */
function onShow(firstShow, event) {
	globals.asignarPermisos(controller.getName())
	if (scopes.usuario.vg_permiso_lectura == 0) {
		onActionVolver()
		plugins.webnotificationsToastr.warning("Sin permisos para usar esta función.", "", globals.vg_toast_options)
	}
	
	elements.btn_nuevo.enabled = true
	if (scopes.usuario.vg_permiso_modificar == 0) {
		elements.btn_nuevo.enabled = false
	}
	
	
}

/**
 * @properties={typeid:24,uuid:"B7E2C08A-C9CF-4742-9E57-C20069D447A4"}
 * @AllowToRunInFind
 */
function onActionImportaRelaciones() {

	
	/** @type {JSFoundSet<db:/gpp/herr_herramientas>} */
	var fs_herramientas= databaseManager.getFoundSet('gpp', 'herr_herramientas')
	
	var file_3m = plugins.file.readTXTFile("C:\Users\Gonay\Desktop\relacion_herramientas_categorias.csv")

	if((file_3m != null)&&(file_3m != '')){
		
		var array = file_3m.split("\n")
		var aux1 = array[1].split(';')
		if(aux1.length != 2 ){
			plugins.webnotificationsToastr.error("La cantidad de columnas es incorrecta.", "ERROR");
			
				plugins.svyBlockUI.stop()
		
			return
		}
		else{
			
			var a = array.length
			for (var i=1; i<a;  i++){
				
				if(i%10 == 0)
					plugins.svyBlockUI.show('Cargando Herramienta '+ i + ' de ' + a)
				
				var fila_herramienta = array[i].split(';')
				fs_herramientas.find()
				fs_herramientas.herramienta_codigo = fila_herramienta[1]
				fs_herramientas.search()
				if(fs_herramientas.getSize() > 0){
					fs_herramientas.categoria_herr_id	= fila_herramienta[0]
					databaseManager.saveData(fs_herramientas)
				}
				
				
			}
		}
		
		}
		else {
			plugins.webnotificationsToastr.error("El archivo seleccionado no posee datos.", "ERROR");
		}
	plugins.svyBlockUI.stop()
	plugins.webnotificationsToastr.info("El proceso finalizo correctamente.", "Información");
}
