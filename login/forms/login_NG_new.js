/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8CA92A68-CCB9-491D-B380-4B3059FDE2E4"}
 */
var vl_titulo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D808A164-5EF6-4CFD-B5F6-B50D7B79928D"}
 */
var vl_error = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5EEE42FC-7F5F-457A-A99B-8A5F257B1CE4"}
 */
var vl_contrasenia = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0A03E392-5F91-461E-9F75-C6920F5D8EE0"}
 */
var vl_usuario = null;

/**
 * @properties={typeid:35,uuid:"0D6C2E8A-579E-4841-8F3B-C68B97CB350B",variableType:-4}
 */
var vl_logo = null;

/**
 *
 * 
 *
 * @properties={typeid:24,uuid:"C399F7BE-5951-4189-8BA4-C66B179AC2A6"}
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
 * @properties={typeid:24,uuid:"6E72AB89-858A-4CB1-87E9-1F4FE87FF983"}
 */
function onKey(value, event, keyCode, altKey, ctrlKey, shiftKey, capsLock){
   
	
    if(keyCode == 13){//tecla enter
    	login()
    }
}

/**
 *
 * @properties={typeid:24,uuid:"742E50DB-6CF9-4DBD-900E-C61835CBC13E"}
 */
function onLoad() {
	/** @type {JSFoundSet<db:/gpp/core_company>} */
	var fs_company = databaseManager.getFoundSet('gpp', 'core_company')
	fs_company.loadRecords(1)
	
	vl_logo		= fs_company.company_logo
	vl_titulo 	= fs_company.core_company_to_core.core_razon_social
	//elements.l_titulo.text = vl_titulo
	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"F95F9826-9F8F-48EE-B1DE-02C1B2D5530B"}
 */
function onShow(firstShow) {
	controller.focusField("f_nombre_usuario",true)
	plugins.keyListener.addKeyListener('accesos', onKey)
}
