
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"18A7B5C4-198C-4F6D-B637-2A04EEDEDAF8"}
 * @AllowToRunInFind
 */
function onShow(firstShow) {
	foundset.find()
	foundset.auditoria_tabla		= globals.vg_table_auditoria_1
	foundset.auditoria_valor_pk		= globals.vg_auditoria_pk_1
	if(globals.vg_table_auditoria_2 != null){
		foundset.newRecord()
		foundset.auditoria_tabla		= globals.vg_table_auditoria_2
		foundset.auditoria_valor_pk		= globals.vg_auditoria_pk_2
	}
	foundset.search()
	//foundset.loadAllRecords()
	foundset.sort("auditoria_fecha desc")
}
