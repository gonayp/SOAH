
/**
 * 
 *
 * @properties={typeid:24,uuid:"329D1530-DAF0-46D7-B935-E8E905D88E49"}
 */
function onActionVolver() {
	application.showForm('soah_main')

}

/**
 * 
 *
 * @properties={typeid:24,uuid:"1692DFE7-5D10-4FE3-8EDE-DC1146733045"}
 */
function onActionOpciones() {
	application.showForm(forms.administracion_funciones)

}

/**
 *
 * @properties={typeid:24,uuid:"366BFC97-B384-4FC6-A2B8-9DB6A806E77B"}
 */
function onActionUsuarios() {
	application.showForm(forms.administracion_usuarios)

}

/**
 *
 * @properties={typeid:24,uuid:"2E3BE3AA-7ED0-4DF7-91BB-92C34E36527C"}
 */
function onActionAuditorias() {
	application.showForm(forms.administracion_auditorias)

}

/**
 *
 * @properties={typeid:24,uuid:"17DFD7A5-C77B-455F-A5D2-07D5373D8893"}
 */
function onActionControlLogin() {
	application.showForm(forms.administracion_control_login)

}



/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F9D7A47C-5305-47F5-A0CB-F0C868E09EE2"}
 */
function onActionEmpresa(event) {
	application.showForm(forms.administracion_empresa)

}
