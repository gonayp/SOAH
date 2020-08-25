
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"5D587F98-1010-4996-9587-5644C9A5BEAA"}
 */
function onActionClientes(event) {
	application.showForm(forms.clientes)

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"48A2E339-30E7-48A3-9C00-40A980F4B198"}
 */
function onActionHerramientas(event) {
	application.showForm(forms.herramientas)

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"1CEB6F7D-7BB8-4EBF-97FE-29955775BAEF"}
 */
function onActionEquipos(event) {
	application.showForm(forms.Equipos)

}


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"7CC1DA52-562C-49B0-8294-0A049678B56E"}
 */
function onActionVolver(event) {
	application.showForm('soah_main')

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"5ECFBB0A-4E65-4F1F-AF37-BE5357F997A9"}
 */
function onActionAlquiler(event) {
	application.showForm(forms.alquileres)

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"A68D9A75-D980-445D-AD66-DE56DADD90D7"}
 */
function onActionDevoluciones(event) {
	application.showForm(forms.devoluciones)

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"D0024DC3-423A-4FC4-9301-F21E0CD1BB85"}
 */
function onActionFacturas(event) {
	application.showForm(forms.facturas)

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"9A588C5F-8F4D-4425-90AF-1B91B2944604"}
 */
function onActionOrdenVenta(event) {
	application.showForm(forms.ordenes_venta)

}
