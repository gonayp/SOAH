/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"339B61D3-8A63-46D3-A7CB-A2FD1E3DFF15",variableType:93}
 */
var vl_fecha_compra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F79F3274-D457-447D-ACB9-F73F20C02E11",variableType:8}
 */
var vl_precio_base = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6A6AC628-4A8F-4235-B19F-86C8AD5336FB"}
 */
var vl_descripcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"214075D5-F6E7-458C-92B1-096BC858AF8F"}
 */
var vl_caracteristicas = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"48C26185-F24E-46C8-9E7D-0F74ADE0A8BB"}
 */
var vl_num_motor = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1DB6A3C5-EC65-468D-9A5D-98D6DC91A44E"}
 */
var vl_observaciones = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"F0F15098-1059-494C-AB48-9EB534E7D39D",variableType:4}
 */
var vl_tipo = 1;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"137135EA-EBB0-4DCD-A164-398A648D0EF3"}
 */
var vl_num_serie = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"EEB252A2-FD60-425C-B848-23A1FCDAF063",variableType:4}
 */
var vl_alimentacion = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"D52DD230-8353-4BDF-9BCA-7C4355E2CCE8"}
 */
var vl_cod_barras = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"00DE4D08-0995-4FF3-9E50-2E4C8AE6E9BD"}
 */
var vl_cod_alterna = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"D2D14513-22FB-4321-8428-2101B34BD82C",variableType:4}
 */
var vl_modelo = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"D87CDE13-25BF-4528-AE71-CDE56B3AE465",variableType:4}
 */
var vl_categoria = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"03E4F5C8-E45A-41AD-BCFA-2BAF842238D4",variableType:4}
 */
var vl_herramienta = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"29BFFF92-1020-4076-ADFC-76AE70FB8E15"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"684F9BF2-FD3B-4EA3-B12C-0FCB1DC139FC",variableType:8}
 */
var vl_codigo = null;

/**
 * @properties={typeid:24,uuid:"86F9D6E3-39F8-42CB-A7AF-EE18B9EA99E6"}
 */
function onActionVolver() {
	application.showForm(forms.productos_main)
}

/**
 * @properties={typeid:24,uuid:"F2269D96-5DEE-41BD-91E9-7579D22B5C4F"}
 */
function onActionCancelar() {
	limpiarVariables()
	onActionVolver()
}

/**
 * @properties={typeid:24,uuid:"D487BADE-377E-493B-82B6-BCE8559AE340"}
 */
function limpiarVariables(){
	vl_precio_base = null;
	vl_descripcion = null;
	vl_caracteristicas = null;
	vl_num_motor = null;
	vl_observaciones = null;
	vl_tipo = 1;
	vl_num_serie = null;
	vl_alimentacion = null;
	vl_cod_barras = null;
	vl_cod_alterna = null;
	vl_modelo = null;
	vl_categoria = null;
	vl_herramienta = null;
	vl_nombre = null;
	vl_codigo = null;
	vl_fecha_compra = application.getServerTimeStamp()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"15A33D83-BAEC-4C72-9BE0-790EA041E551"}
 */
function onShow(firstShow, event) {
	if(firstShow)
		vl_fecha_compra = application.getServerTimeStamp()
	
	controller.focusFirstField()
}

/**
 * @properties={typeid:24,uuid:"0D938A6F-1F10-4D10-ABF0-8E3193F837F2"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(vl_nombre == null || vl_nombre == ""){
		plugins.webnotificationsToastr.error("Falta el nombre del producto..","",globals.vg_toast_options)
		controller.focusField("f_herramienta",true)
		return
	}
	
	if(vl_categoria == null){
		plugins.webnotificationsToastr.error("Falta seleccionar una categoría.","",globals.vg_toast_options)
		controller.focusField("f_marca",true)
		return
	}
	

	
	if(vl_codigo == null){
		plugins.webnotificationsToastr.error("Falta el código del producto.","",globals.vg_toast_options)
		controller.focusField("f_codigo",true)
		return
	}
	
	
	
	
	///** @type {JSFoundSet<db:/gpp/herr_equipo>} */
	//var fs_herr_equipo = databaseManager.getFoundSet('gpp', 'herr_equipo')
	
	forms.productos_main.foundset.newRecord()
	forms.productos_main.foundset.company_id					= scopes.usuario.vg_company_id
	forms.productos_main.foundset.producto_caracteristicas		= vl_caracteristicas
	forms.productos_main.foundset.producto_cod_alternativo		= vl_cod_alterna
	forms.productos_main.foundset.producto_cod_barras			= vl_cod_barras
	forms.productos_main.foundset.producto_codigo				= vl_codigo
	forms.productos_main.foundset.producto_descripcion			= vl_descripcion
	forms.productos_main.foundset.producto_estado				= 1
	forms.productos_main.foundset.producto_nombre				= vl_nombre
	forms.productos_main.foundset.producto_num_serie			= vl_num_serie
	forms.productos_main.foundset.producto_observaciones		= vl_observaciones
	forms.productos_main.foundset.producto_precio_base			= vl_precio_base
	forms.productos_main.foundset.categoria_prod_id				= vl_categoria
	
	
	databaseManager.saveData()
	
	limpiarVariables()
	
	//forms.herr_equipos_editar.foundset.loadRecords(fs_herr_equipo.equipo_id)
	
	application.showForm(forms.productos_main)
}

/**
 *
 * @properties={typeid:24,uuid:"00FF0AA1-676F-4D30-B236-1AB34C930F76"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function codigoSugerido() {
	
	var num = 0
	/** @type {JSFoundSet<db:/gpp/prod_productos>} */
	var fs_prod_productos = databaseManager.getFoundSet('gpp', 'prod_productos')
	fs_prod_productos.loadAllRecords()
	fs_prod_productos.sort('producto_codigo  desc')
	if (fs_prod_productos.getSize() > 0)
		num = fs_prod_productos.producto_codigo + 1
	
	vl_codigo = num
	
	
}
