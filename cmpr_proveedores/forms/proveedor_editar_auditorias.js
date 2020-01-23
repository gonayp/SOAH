/** @type {JSFoundSet<db:/gpp/usuarios_auditorias>} *
 * @properties={typeid:35,uuid:"27590DFF-C6E6-40F9-A9DB-1C7EDF13AD94",variableType:-4}
 */
var fs_auditoria = databaseManager.getFoundSet('gpp', 'usuarios_auditorias');

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"04FB73DD-70E1-404D-9F0E-007AD0092D13"}
 */
function onShow(firstShow) {
	globals.crearParametrosAuditoria("vent_clientes",foundset.proveedor_id,"core",foundset.core_id)
}
