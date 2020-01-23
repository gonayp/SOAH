/**
 * @AllowToRunInFind
 * 
 * 
 * @param user
 * @param password
 *
 *
 * @properties={typeid:24,uuid:"81A8C64C-FD42-4508-B9C8-D2E221D796D5"}
 */
function login(user, password) {
    if (!(user && password)) {
        application.output('Unexpected credentials received', LOGGINGLEVEL.DEBUG);
        return false;
    }
    
    
    var authenticated = 0
    	
    /** @type {JSFoundSet<db:/gpp/usuarios>} */
    var fs_usuario = databaseManager.getFoundSet('gpp', 'usuarios')
	fs_usuario.find()
	fs_usuario.usuario_login 		= user
	fs_usuario.usuario_password	 	= password
	fs_usuario.search()
	if(fs_usuario.getSize() > 0){
		if(fs_usuario.usuario_estado == 1)//estado activo
			authenticated = 1
		else{
			application.output('User ' + user + ' authenticated: ' + false, LOGGINGLEVEL.DEBUG);
			 saveLogin(0,user,0,"Usuario no activo")
			return false;
		}
			
	}
	else{
		application.output('User ' + user + ' authenticated: ' + false, LOGGINGLEVEL.DEBUG);
		saveLogin(0,user,0,"Usuario no encontrado")
		return false;
	}
 
    if (authenticated) {
        var ok = security.login(user, fs_usuario.usuario_id, ['group']) // Assume a group for each department
        saveLogin(fs_usuario.usuario_id,user,fs_usuario.company_id,"OK")
        application.output('User ' + user + ' authenticated: ' + true, LOGGINGLEVEL.DEBUG);
        return ok;
    }
    application.output('User ' + user + ' could not be authenticated', LOGGINGLEVEL.DEBUG);
    saveLogin(0,user,0,"")
    // Sleep for 3 seconds to discourage brute force attacks
    application.sleep(2000);
    return false;
}


/**
 * @AllowToRunInFind
 * 
 * 
 * @param user
 *
 *
 * @properties={typeid:24,uuid:"C9CFDC5B-9E6D-4F85-86D7-00F40604023E"}
 */
function getTenant(user) {
    if (!(user )) {
        application.output('Unexpected name received', LOGGINGLEVEL.DEBUG);
        return 0;
    }
    
    
    var is_in_there = 0
    	
    /** @type {JSFoundSet<db:/gpp/usuarios>} */
    var fs_usuario = databaseManager.getFoundSet('gpp', 'usuarios')
	fs_usuario.find()
	fs_usuario.usuario_login = user
	fs_usuario.search()
	if(fs_usuario.getSize() > 0)
		is_in_there = 1 
 
    if (is_in_there) {
        return fs_usuario.usuario_id;
    }
    application.output('User ' + user + ' could not exist', LOGGINGLEVEL.DEBUG);
	saveLogin(0,user,0,"Usuario inexistente.")
    // Sleep for 3 seconds to discourage brute force attacks
    application.sleep(3000);
    return 0;
}



/**
 * 
 * @param us_id
 * @param us_nombre
 * @param compny
 * @param coment
 *
 * @properties={typeid:24,uuid:"66D9FACC-442F-4658-B86E-57342BD167F3"}
 */
function saveLogin(us_id, us_nombre,compny,coment){
	/** @type {JSFoundSet<db:/gpp/usuarios_login>} */
    var fs_login = databaseManager.getFoundSet('gpp', 'usuarios_login')
	fs_login.newRecord()
	fs_login.login_fecha 		= new Date()
    fs_login.usuario_id 		= us_id
	fs_login.company_id			= compny
	fs_login.usuario_nombre		= us_nombre
	fs_login.login_observacion	= coment
	fs_login.login_ip			= application.getIPAddress()
	
	databaseManager.saveData(fs_login)
}
