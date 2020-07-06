/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"226005F8-50A9-4F02-B472-F79FF0472368"}
 */
var vl_error = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EFBB0DF8-C8AC-4220-9AE7-666748A891E6"}
 */
var vl_contrasenia = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BF51AB70-5106-4F86-9065-44AEEBF48ACE"}
 */
var vl_usuario = null;



/**
 *
 * 
 *
 * @properties={typeid:24,uuid:"6700FA0A-6BFF-4631-B8AF-6DB496451A12"}
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
 
    var tenantID = security.authenticate("Authenticator","getTenant",[vl_usuario]);//Revisa si el nombre existe
    if(tenantID > 0){
    	var ok = security.authenticate("Authenticator","login",[vl_usuario,vl_contrasenia])
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
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 *
 * @properties={typeid:24,uuid:"FBB470E6-2684-40F2-A763-768685D376E5"}
 */
function onShow(firstShow) {
	controller.focusField('f_nombre_usuario',true)
}