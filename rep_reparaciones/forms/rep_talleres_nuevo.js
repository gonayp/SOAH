/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CE09D479-C423-4626-9195-C984F23FA7E1"}
 */
var vl_observacio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"793DD84E-E187-4C40-9FD1-A9854FA7AA52",variableType:4}
 */
var vl_codigo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"58366A14-1BD7-4A1F-8052-D83B4942124C"}
 */
var vl_nombre = null;


/**
 * @properties={typeid:24,uuid:"F8F565F3-1881-4E41-907B-AC0517B8828C"}
 */
function onActionVolver() {
	application.showForm(forms.rep_talleres)
}

/**
 * @properties={typeid:24,uuid:"604C01E7-F2C5-4BA7-B1CA-1CC43A640BFD"}
 */
function onActionCancelar() {
	
	limpiar()
	
	onActionVolver()
}

/**
 * @properties={typeid:24,uuid:"48677853-B061-4DD8-BDFC-6DEFA335DE39"}
 */
function limpiar(){
	vl_codigo = null
	vl_nombre = null
	vl_observacio = null
}

/**
 * @properties={typeid:24,uuid:"F7552B0D-CC08-44BF-910C-DD99F66488CA"}
 */
function onActioGrabar() {
	
	if (vl_codigo == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de codigo.", "", globals.vg_toast_options)
		controller.focusField("f_codigo", true)
		return
	}
	
	if (vl_nombre == null) {
		plugins.webnotificationsToastr.error("Falta completar el campo de nombre.", "", globals.vg_toast_options)
		controller.focusField("f_nombre", true)
		return
	}
	
	forms.rep_talleres.foundset.newRecord()
	forms.rep_talleres.foundset.company_id 				= scopes.usuario.vg_company_id
	forms.rep_talleres.foundset.taller_codigo			= vl_codigo
	forms.rep_talleres.foundset.taller_nombre			= vl_nombre
	forms.rep_talleres.foundset.taller_observacion		= vl_observacio
	databaseManager.saveData()
	
	limpiar()
	
	onActionVolver()
	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6FD93AA5-70A9-4738-863C-12E46B6E07B0"}
 */
function onShow(firstShow, event) {
	
	if(firstShow){
		limpiar()
	}
	
	controller.focusField("f_nombre", true)
	
	generarProximoCodigo()
}


/**
 * @properties={typeid:24,uuid:"6A0BFB3F-0389-44AC-A979-BD53845ADFD1"}
 */
function generarProximoCodigo(){
	vl_codigo = 1
	/** @type {JSFoundSet<db:/gpp/rep_talleres>} */
	var fs_talleres = databaseManager.getFoundSet('gpp', 'rep_talleres')
	fs_talleres.loadAllRecords()
	fs_talleres.sort('taller_codigo desc')
	if(fs_talleres.getSize() > 0)
		vl_codigo = fs_talleres.taller_codigo +1
}
