/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3C3DCB77-2CA7-460E-A751-D3BECABF6AFC"}
 */
var vl_codigo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6DD741D3-C396-4FA9-940A-F2F4AA03C6CD"}
 */
var vl_nombre = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"1478ACCE-3FE7-4A56-89FC-C1A65AC934E4",variableType:93}
 */
var vl_fecha_fin = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"92FC0B43-F04E-460E-8353-C740B45AF160",variableType:93}
 */
var vl_fecha_ini = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2F23E995-1B11-4326-9E4E-D1BEC7213125",variableType:4}
 */
var vl_pendiente = null;

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"13057AB8-7E1B-460E-82F4-E11D987C7C3F"}
 */
function onActionVolver(event) {
	application.showForm(forms.main_menu)

}

/**
 *
 * @properties={typeid:24,uuid:"AF13ACB8-5FAD-4BDF-9D97-981F0D6F9928"}
 * @AllowToRunInFind
 */
function filtrar() {
	
	
	forms.invoice.vl_pendiente = vl_pendiente
	forms.invoice.vl_codigo = vl_codigo
	forms.invoice.vl_nombre = vl_nombre
	forms.invoice.vl_fecha_fin = vl_fecha_fin
	forms.invoice.vl_fecha_ini = vl_fecha_ini
	
	
	application.showForm(forms.invoice)
	
}


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"991F0E71-CF27-4251-84B6-B894322D85BC"}
 */
function onAction(event) {
	
		
		filtrar()

}
