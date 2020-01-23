/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"648C4CEB-CD01-41E9-BFD8-ECF9A282AC85"}
 */
var vl_descripcion = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4426DB34-A23C-48E8-A711-78C18B400763"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D86313D8-10E9-483A-B3DB-FF7EAEF33CA6",variableType:4}
 */
var vl_codigo = null;


/**
 * @properties={typeid:24,uuid:"9E06CFB8-02D7-4294-975F-F4A349EE0822"}
 */
function onActionVolver() {
	application.showForm(forms.bancos_main)
}

/**
 * @properties={typeid:24,uuid:"3A2658D7-0F96-4555-8E68-F770B48095D5"}
 */
function onActionCancelar() {
	inicializar()
	onActionVolver()
}

/**
 * @properties={typeid:24,uuid:"98F6B635-BFFB-482D-9C50-E55CE6752FEA"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioGrabar() {
	if (vl_codigo == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de código.", "", globals.vg_toast_options)
		controller.focusField("f_codigo", true)
		return
	}
	
	if (vl_nombre == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de nombre.", "", globals.vg_toast_options)
		controller.focusField("f_nombre", true)
		return
	}
	
	
	forms.bancos_main.foundset.newRecord()
	forms.bancos_main.foundset.company_id			= scopes.usuario.vg_company_id
	forms.bancos_main.foundset.banco_codigo			= vl_codigo
	forms.bancos_main.foundset.banco_descripcion	= vl_descripcion
	forms.bancos_main.foundset.banco_nombre			= vl_nombre
	
	
	onActionCancelar()
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"952627D8-7491-4B6F-A1DD-F3FC8EE278F6"}
 */
function onShow(firstShow, event) {
	
	if(firstShow)
		inicializar()
		
	controller.focusFirstField()
}


/**
 * @properties={typeid:24,uuid:"595CC3F1-976B-4A64-B5C1-72D4237E2973"}
 */
function inicializar(){
	vl_nombre = null
	vl_codigo = null
	vl_descripcion = null
}
