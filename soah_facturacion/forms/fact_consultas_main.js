/**
 * @properties={typeid:24,uuid:"75D2E409-02F3-466E-9A71-18E40543A2F2"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}



/**
 * @properties={typeid:24,uuid:"3B241E20-CB4C-4CC7-ABA8-9C92848BC027"}
 */
function onActionFacturasPendientes() {
	application.showForm(forms.consulta_facturas_pendientes_x_cliente)
}

/**
 * @properties={typeid:24,uuid:"1DFB6A82-9093-462D-9F87-4F76E06B3077"}
 */
function onActionListadoCobros() {
	application.showForm(forms.recibos_main)
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"13192A4B-8AB1-4803-9CF0-91F7BC12B6D2"}
 */
function onActionLibroIva(event) {
	application.showForm(forms.fact_libro_iva_ventas)

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"765A4FC8-E82D-4803-A706-98B5B54E5293"}
 */
function onActionListadoAnticipos(event) {
	application.showForm(forms.anticipos_main)

}
