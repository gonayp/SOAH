
/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"340D41A8-C41B-411D-AD1E-00D1708B60D4"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	application.showForm(forms.herr_cofig_cod_barras_renglones)

}

/**
 * @properties={typeid:24,uuid:"4932522D-B93A-47C7-91E5-FBE74F121EF3"}
 */
function onActionVolver() {
	application.showForm(forms.herr_configuraciones)
}
