

/**
 * @properties={typeid:24,uuid:"4A8BEE81-848C-4BA9-9DA1-111ED33CC0FD"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5DBE37A8-9B50-4D4F-ACD2-128ABF81DB04"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	foundset.find()
	foundset.comp_id_alquiler = forms.alquiler_ver_ver_herramienta.foundset.comp_id
	foundset.search()
}
