/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E7D38F54-CA98-46BB-BEA7-203E8D5B136E"}
 */
var vl_nombre = null;


/**
 * @properties={typeid:24,uuid:"F58B38BA-F374-4B52-AB35-C284BB211791"}
 */
function onActionVolver() {
	application.showForm(forms.administracion_main)
}

/**
 * @properties={typeid:24,uuid:"4D238F95-E62B-4B1C-8440-97712B769BD8"}
 */
function onActionNuevo() {
	application.showForm(forms.administracion_usuarios_nuevo)
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"02A0C4D8-6FC9-41CA-AF86-3561E77964B6"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.administracion_usuarios_editar)

}

/**
 * @properties={typeid:24,uuid:"B837FC00-19F9-424C-9F60-83F1647ED8C4"}
 */
function onActionLimpiar() {
	vl_nombre = null
	filtrar()
}

/**
 *
 * @properties={typeid:24,uuid:"9A0D90CC-9794-46CF-B6EC-75932C792039"}
 * @AllowToRunInFind
 */
function filtrar() {
	foundset.find()
	if(vl_nombre != null && vl_nombre != "") foundset.usuarios_to_core.core_nombre = '#%'+vl_nombre+'%'
	foundset.search()
}
