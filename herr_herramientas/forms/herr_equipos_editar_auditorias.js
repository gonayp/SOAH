/** @type {JSFoundSet<db:/gpp/usuarios_auditorias>} *
 * @properties={typeid:35,uuid:"9EC7F643-CECF-4C29-8333-1E7725061A75",variableType:-4}
 */
var fs_auditoria = databaseManager.getFoundSet('gpp', 'usuarios_auditorias');

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"C63C7BE1-99D0-4892-B8BC-3DBC318398CF"}
 */
function onShow(firstShow) {
	globals.crearParametrosAuditoria("herr_equipo",equipo_id,null,null)
}
