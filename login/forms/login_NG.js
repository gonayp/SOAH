/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F6C0EB4C-1D3F-4A11-A598-A77E15ABD7A1"}
 */
var vl_titulo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FBDE2487-8943-401D-9A51-B37177E9E0A3"}
 */
var vl_error = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"119AA6B7-9824-4760-83A0-6015ADE741E9"}
 */
var vl_contrasenia = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"55426F91-A598-4937-9DD2-C33C4DFB51D4"}
 */
var vl_usuario = null;

/**
 * @properties={typeid:35,uuid:"098982C5-21D5-461C-BBC9-33D021E7BD5B",variableType:-4}
 */
var vl_logo = null;


/**
 *
 * 
 *
 * @properties={typeid:24,uuid:"7FF8C37F-209E-442D-8491-16CA9B5FB321"}
 */
function login(){
	//vl_error = 'Login Failed';
	
    vl_error = null;
 
    if(!vl_usuario){
    	vl_error = 'Falta el nombre de usuario';
    	elements.label_error.text = vl_error
    	return false;
    }
    if(!vl_contrasenia){
    	vl_error = 'Falta la contraseña';
    	elements.label_error.text = vl_error
    	return false;
    }
 
    var tenantID = security.authenticate("authenticator","getTenant",[vl_usuario]);//Revisa si el nombre existe
    if(tenantID > 0){
    	var ok = security.authenticate("authenticator","login",[vl_usuario,vl_contrasenia])
        if(ok){
        	scopes.usuario.crearUsuario(vl_usuario,vl_contrasenia)
        	return true;
        } else {
        	vl_error = "Error de login";
        	elements.label_error.text = vl_error
			return false
        }
    }
    else{
    	vl_error = "Nombre de usuario incorrecto."
    	elements.label_error.text = vl_error
		return false
    }
}




/**
 * 
 * @param value
 * @param event
 * @param keyCode
 * @param altKey
 * @param ctrlKey
 * @param shiftKey
 * @param capsLock
 *
 * @properties={typeid:24,uuid:"EFE9D428-AAAD-4949-B6BE-FB0F37680D09"}
 */
function onKey(value, event, keyCode, altKey, ctrlKey, shiftKey, capsLock){
   
	
    if(keyCode == 13){//tecla enter
    	login()
    }
}

/**
 *
 * @properties={typeid:24,uuid:"86A64A25-E55A-44C3-A693-DCA61A2EC8D9"}
 */
function onLoad() {
	/** @type {JSFoundSet<db:/gpp/core_company>} */
	var fs_company = databaseManager.getFoundSet('gpp', 'core_company')
	fs_company.loadRecords(1)
	
	vl_logo		= fs_company.company_logo
	vl_titulo 	= fs_company.core_company_to_core.core_razon_social
	elements.l_titulo.text = vl_titulo
	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"6C0E26CA-037C-40CF-AE5E-F33C3DAB7982"}
 */
function onShow(firstShow) {
	controller.focusField("f_nombre_usuario",true)
	plugins.keyListener.addKeyListener('accesos', onKey)
}
