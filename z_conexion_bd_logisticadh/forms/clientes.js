/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D210B8DA-1949-4867-B1D6-2391B9A51EEA"}
 */
var vl_nombre = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3B1FEFC0-FCB2-4664-88AC-CBA11BAC2618"}
 */
var vl_codigo = null;


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8F3CCD9A-ACC0-419F-BFC2-0668EC4564E4"}
 */
function onActionVolver(event) {
	application.showForm(forms.main_menu)

}

/**
 *
 * @properties={typeid:24,uuid:"2DA4DFF0-17A0-4158-9642-15673CAB6A51"}
 * @AllowToRunInFind
 */
function filtrar() {
	foundset.find()
	if(vl_codigo != null && vl_codigo != '')
		foundset.code = '%'+vl_codigo+'%'
	if(vl_nombre != null && vl_nombre != '')
		foundset.name = '%'+vl_nombre+'%'
	foundset.search()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B090E2C2-6E5D-4CC0-867E-C76495D88956"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		vl_codigo = null
		vl_nombre = null
		filtrar()
	}
}
