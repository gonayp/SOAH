
/**
 * @properties={typeid:24,uuid:"96234078-A7C4-4F65-B01F-5D5008D571B4"}
 */
function onActionNuevoAsociada() {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.herr_herramientas_asociadas_nuevo );
}

/**
 * Called when the mouse is double clicked on a row/cell (foundset and column indexes are given).
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"55914FFA-98A6-48E4-9AA5-3F74BE0D62A6"}
 */
function onCellDoubleClick(foundsetindex, columnindex, record, event) {
	var win = application.createWindow("Dialog", JSWindow.MODAL_DIALOG);
		win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win.resizable = false
		win.title= '';
		win.show( forms.herr_herramientas_asociadas_editar );

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"80823E5F-326F-44A9-8F8A-75EC5F9FCA7D"}
 */
function onActionInfo(event) {
	plugins.dialogs.showInfoDialog("Herramientas Asociadas","Las herramientas asociadas se muetsran al hacer un nuevo alquiler, simbolizan que son herramientas que tienen que salir juntas.<br> Se podran seleccionar estas herramientas para añadir como regstros en un nuevo alquiler. <br><br>Ejemplo: Un vibrador que siempre sale con agujas, las agujas seran la herramienta asociada al vibrador.")
	

}
