/**
 * Metodo que genera un codigo de barras teniendo encuenta las configuraciones de la tabla de herr_cod_barra_configuraciones y herr_cod_barra_cfg_renglon
 * @param p_cod_categoria
 * @param p_cod_herramienta
 * @param p_cod_marca
 * @param p_cod_modelo
 * @param p_cod_equipo
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"64600244-FC0E-422D-93B7-F11F91F6BF86"}
 */
function generarCodigoBarras(p_cod_categoria,p_cod_herramienta,p_cod_marca,p_cod_modelo,p_cod_equipo){
	var vl_cod_barras = ""
	
	/** @type {JSFoundSet<db:/gpp/herr_cod_barra_configuraciones>} */
	var fs_herr_cod_barra_configuraciones = databaseManager.getFoundSet('gpp', 'herr_cod_barra_configuraciones')
	fs_herr_cod_barra_configuraciones.loadRecords(1)
	if(fs_herr_cod_barra_configuraciones.getSize() > 0){
		
		var vl_codigo = 0
		
		var nRecordCount = 0
		nRecordCount = databaseManager.getFoundSetCount(fs_herr_cod_barra_configuraciones.herr_cod_barra_configuraciones_to_herr_cod_barra_cfg_renglon);
		
		fs_herr_cod_barra_configuraciones.herr_cod_barra_configuraciones_to_herr_cod_barra_cfg_renglon.sort("renglon_posicion desc")
		
		//Recorremos los renglones que hacen referencia a las posiciones del codigo de barras de atras para adelante y vamos completando segun los valores indicados
		for (var index = 1; index <= nRecordCount; index++) {
			var myRenglon = fs_herr_cod_barra_configuraciones.herr_cod_barra_configuraciones_to_herr_cod_barra_cfg_renglon.getRecord(index);
			
			vl_codigo = 0
			
			switch (myRenglon.renglon_referencia) {
			case 1://Herramienta
				vl_codigo = p_cod_herramienta
				break;
			case 2://Categoría
				vl_codigo = p_cod_categoria
				break;
			case 3://Marca
				vl_codigo = p_cod_marca
				break;
			case 4://Modelo
				vl_codigo = p_cod_modelo
				break;
			case 5://Equipo
				vl_codigo = p_cod_equipo
				break;
			case 6://Fijo
				vl_codigo = myRenglon.id_d_referencia
				break;
			}
			vl_cod_barras += extraerPosicion(vl_codigo,myRenglon.renglon_refer_posicion)
		}
		
	}
	
	
	
	
	return vl_cod_barras
}


