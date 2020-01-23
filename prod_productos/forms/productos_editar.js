

/**
 * @properties={typeid:24,uuid:"07DCFFAB-EA16-446B-8711-3D231B797AD5"}
 */
function onActionVolver() {
	databaseManager.revertEditedRecords()
	application.showForm(forms.productos_main)
}



/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"29FD0F69-9E4C-493E-9D24-65A5AED4121F"}
 */
function onShow(firstShow, event) {

	controller.focusFirstField()
	
	globals.vg_producto = foundset.producto_id
}

/**
 * @properties={typeid:24,uuid:"1C6064B5-7614-4263-8129-ACC76C8FBDC2"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	
	if(producto_nombre == null || producto_nombre == ""){
		plugins.webnotificationsToastr.error("Falta el nombre del producto..","",globals.vg_toast_options)
		controller.focusField("f_herramienta",true)
		return
	}
	
	if(categoria_prod_id == null){
		plugins.webnotificationsToastr.error("Falta seleccionar una categoría.","",globals.vg_toast_options)
		controller.focusField("f_marca",true)
		return
	}
	

	
	if(producto_codigo == null){
		plugins.webnotificationsToastr.error("Falta el código del producto.","",globals.vg_toast_options)
		controller.focusField("f_codigo",true)
		return
	}
	
	
	
	
	databaseManager.saveData()
	
	
	application.showForm(forms.productos_main)
}

/**
 *
 * @properties={typeid:24,uuid:"CC214522-DD42-4B5E-87BD-8A4B659BAC60"}
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
	producto_codigo = num
	
	
}
