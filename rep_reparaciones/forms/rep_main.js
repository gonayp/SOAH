/**
 * @properties={typeid:24,uuid:"085D0A64-D0A2-4703-93CB-A6AAA3D63F14"}
 */
function onActionVolver() {
	application.showForm('soah_main')
}

/**
 *
 * @properties={typeid:24,uuid:"9F422761-83C5-410C-89BF-08047BC0D521"}
 */
function onActionReparaciones() {
	application.showForm(forms.rep_reparaciones)

}

/**
 *
 * @properties={typeid:24,uuid:"9529A352-C62A-4762-B5A8-642E91545865"}
 */
function onActionTalleres() {
	application.showForm(forms.rep_talleres)

}

/**
 *
 * @properties={typeid:24,uuid:"181E7FEF-211D-4CE2-9FAC-DD1EC34D5A05"}
 */
function onActionNuevaReparacion() {
	application.showForm(forms.rep_reparacion_nuevo_select)

}


/**
 *
 * @properties={typeid:24,uuid:"042B541E-6825-49AA-B892-BB364FF6E5B3"}
 */
function onActionFallas() {
	application.showForm(forms.rep_fallas)
}

