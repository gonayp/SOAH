/**
 * @properties={typeid:24,uuid:"96EA73FC-230F-4F2A-B859-580FE2B62397"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}



/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"0222B4BB-50C7-4DE8-AE95-FAC05B810857"}
 */
function onActionCategorias(event) {
	application.showForm(forms.prod_categorias)

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8EB64341-48A9-44DC-A724-6E43454B0B0F"}
 */
function onActionProductos(event) {
	application.showForm(forms.productos_main)

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"313715CE-9137-454D-841B-E4885EC21457"}
 */
function onActionDepositos(event) {
	application.showForm(forms.deposito_main)

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"22DD7889-A499-4CFC-A5A2-0FCD41FD9DFA"}
 */
function onActionMovimientos(event) {
	application.showForm(forms.stock_movimientos)

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C76B46B0-33E4-4B0C-B7D7-EA6B0BD3F5CD"}
 */
function onActionStockProducto(event) {
	application.showForm(forms.stock_movimientos_x_producto)

}
