
/** @type {JSFoundSet<db:/gpp/usuarios_auditorias>} *
 * @properties={typeid:35,uuid:"407B14D1-775E-4ECE-9119-AA9A2EAF8045",variableType:-4}
 */
var fs_auditoria = databaseManager.getFoundSet('gpp', 'usuarios_auditorias')





/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"E36A0401-1506-4903-A693-3BB933CAD6B3"}
 */
function onShow(firstShow) {
	globals.crearParametrosAuditoria("vent_clientes",foundset.cliente_id,"core",foundset.core_id)
}
