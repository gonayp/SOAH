/**
 * Metodo que calcula el importe ajustado segun un acuerdo de precios aplicado
 * @param p_acuerdo_id id del acuerdo a aplicar
 * @param p_importe importe sobre el que se aplicara el acuerdo
 * 
 * @return {Number}
 *
 * @properties={typeid:24,uuid:"EB7B4AEC-9CAD-4BD2-B3BE-070682EFD594"}
 */
function calcularAcuerdoPrecios(p_acuerdo_id, p_importe){
	
	/** @type {JSFoundSet<db:/gpp/vent_acuerdos_d_precios>} */
	var fs_acuerdos_d_precios = databaseManager.getFoundSet('gpp', 'vent_acuerdos_d_precios')
	
	
	var vl_importe_ajustado = p_importe
	var vl_porcentaje = 0
	var vl_valor = 0
	
	//Acuerdo de precios
	if(p_acuerdo_id != null){
		fs_acuerdos_d_precios.loadRecords(p_acuerdo_id)
		if(fs_acuerdos_d_precios.getSize() > 0){
			if(fs_acuerdos_d_precios.acuerdo_precios_tipo == 1){//Porcentaje
				vl_porcentaje = (fs_acuerdos_d_precios.acuerdo_precios_porcentaje * p_importe) / 100
				if(fs_acuerdos_d_precios.acuerdo_precios_tip_desc_aume == 1){//Descuento
					vl_importe_ajustado -= vl_porcentaje
				}
				else{//Aumento
					vl_importe_ajustado += vl_porcentaje
				}
			}
			else{//Valor
				vl_valor = fs_acuerdos_d_precios.acuerdo_precios_valor
				if(fs_acuerdos_d_precios.acuerdo_precios_tip_desc_aume == 1){//Descuento
					vl_importe_ajustado -= vl_valor
				}
				else{//Aumento
					vl_importe_ajustado += vl_valor
				}
			}
		}
	}
	
	return vl_importe_ajustado
}


/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param p_pv
 * @param p_codigo
 *
 * @properties={typeid:24,uuid:"580B7FE0-71B5-446A-8F69-E86E80A3D004"}
 */
function asignarUltimoNumeroComprobante(p_pv, p_codigo){
	
	var vl_numero = 0
	
	/** @type {JSFoundSet<db:/gpp/core_codigos_d_comprobante>} */
	var fs_comprobantes_codigos = databaseManager.getFoundSet('gpp', 'core_codigos_d_comprobante')
	fs_comprobantes_codigos.find()
	fs_comprobantes_codigos.punto_venta_id 		= p_pv
	fs_comprobantes_codigos.codigo_numero		= p_codigo
	fs_comprobantes_codigos.search()
	
	vl_numero = fs_comprobantes_codigos.codigo_ultimo_numero + 1
	fs_comprobantes_codigos.codigo_ultimo_numero += 1
	databaseManager.saveData(fs_comprobantes_codigos)
	
	return vl_numero
}

/**
 * @AllowToRunInFind
 * 
 * @param p_pv
 * @param p_codigo
 * @param {Number} p_numero
 *
 * @properties={typeid:24,uuid:"BC0F4206-46DE-4321-87D4-216415B63DB4"}
 */
function SetUltimoNumeroComprobante(p_pv, p_codigo,p_numero){
	
	
	
	/** @type {JSFoundSet<db:/gpp/core_codigos_d_comprobante>} */
	var fs_comprobantes_codigos = databaseManager.getFoundSet('gpp', 'core_codigos_d_comprobante')
	fs_comprobantes_codigos.find()
	fs_comprobantes_codigos.punto_venta_id 		= p_pv
	fs_comprobantes_codigos.codigo_numero		= p_codigo
	fs_comprobantes_codigos.search()
	
	fs_comprobantes_codigos.codigo_ultimo_numero = p_numero
	databaseManager.saveData(fs_comprobantes_codigos)
	

}


/**
 * @AllowToRunInFind
 * 
 * @param p_pv
 * @param p_codigo
 *
 * @properties={typeid:24,uuid:"F883B8FC-072F-4583-A6DD-8CB546222B78"}
 */
function GetProximoNumeroComprobante(p_pv, p_codigo){
	
	var vl_numero = 0
	
	/** @type {JSFoundSet<db:/gpp/core_codigos_d_comprobante>} */
	var fs_comprobantes_codigos = databaseManager.getFoundSet('gpp', 'core_codigos_d_comprobante')
	fs_comprobantes_codigos.find()
	fs_comprobantes_codigos.punto_venta_id 		= p_pv
	fs_comprobantes_codigos.codigo_numero		= p_codigo
	fs_comprobantes_codigos.search()
	
	vl_numero = fs_comprobantes_codigos.codigo_ultimo_numero + 1
	
	
	return vl_numero
}


/**
 * @param pv
 * @param codigo
 * @param fecha
 * @param importe
 * @param {Number} iva
 * @param {Number} total
 * @param {Number} cliente_doc
 * @param {Number} cliente_doc_tipo
 * 
 * @return {{msj_afip:String, msj_err:String, comp_num:Number, comp_cae: String, comp_estado: Number, id:Number, consulta:String, cae_vencimiento:Date }}
 *
 * @properties={typeid:24,uuid:"403FF7F2-F2D8-4E3A-814C-1D3C1FBC3A06"}
 */
function comprobarAfip(pv,codigo,importe,fecha,iva,total,cliente_doc, cliente_doc_tipo){
	
	/** @type {JSFoundSet<db:/gpp/afip_comprobante>} */
	var fs_afip_comprobante = databaseManager.getFoundSet('gpp', 'afip_comprobante')
	
	fs_afip_comprobante.newRecord()
	fs_afip_comprobante.comp_pv 		= 	pv
	fs_afip_comprobante.comp_fecha		= fecha
	fs_afip_comprobante.comp_importe	= importe
	fs_afip_comprobante.comp_iva		= iva
	fs_afip_comprobante.comp_total		= total
	fs_afip_comprobante.comp_doc		= cliente_doc
	fs_afip_comprobante.comp_estado		= 1
	fs_afip_comprobante.comp_moneda		= "PES"
	fs_afip_comprobante.concepto		= 1 //Productos
	
	//Cambiar por codigo de afip
	var vl_codigo = 1
	switch (codigo) {
	case 5://Factura A
		vl_codigo = 1
		break;
	case 10://Factura B
		vl_codigo = 6
		break;
	case 15://Factura C
		vl_codigo = 11
		break;
	case 20://credito A
		vl_codigo = 3
		break;
	case 25://credito B
		vl_codigo = 8
		break;
	case 30://credito C
		vl_codigo = 13
		break;
	case 35://Debito A
		vl_codigo = 2
		break;
	case 40://Debito B
		vl_codigo = 7
		break;
	case 45://Debito C
		vl_codigo = 12
		break;
	
	
	}
	fs_afip_comprobante.comp_codigo 	= vl_codigo
	
	//TIPO DOCUMENTO AFIP
	var vl_doc_tipo = 80
	switch (cliente_doc_tipo) {
	case 2://CUIT
		vl_doc_tipo = 80
		break;
	case 1://DNI
		vl_doc_tipo = 96
		break;	
	case 3://PASAPORTE
		vl_doc_tipo = 94
		break;
	case 4://CUIL
		vl_doc_tipo = 86
		break;
	
	}
	fs_afip_comprobante.tipo_doc		= vl_doc_tipo
	
	fs_afip_comprobante.tipo_iva		= 5 //21 %
	
	databaseManager.saveData()
	
	var vl_id = fs_afip_comprobante.id
	
	
//	fs_afip_comprobante.loadRecords(vl_id)
//		
//	while(fs_afip_comprobante.comp_estado == 1){
//		fs_afip_comprobante.clear()
//		fs_afip_comprobante.loadRecords(vl_id)
//	}
	
	var estado = 1
	var cae = ""
	var numero = 0 
	var consulta  = ""
	var vencimiento;
	
	
	while(estado == 1){
		var Query = ' SELECT comp_numero, comp_estado, comp_cae, consulta_afip, cae_vencimiento from afip_comprobante where id = '+vl_id
		/** @type {JSDataSet<comp_numero:Number,comp_estado:Number, comp_cae:String, consulta_afip:String, cae_vencimiento:Date>}*/
		var ds = databaseManager.getDataSetByQuery('gpp', Query, null, -1);
		estado = ds[0].comp_estado
		cae = ds[0].comp_cae
		consulta = ds[0].consulta_afip
		vencimiento = ds[0].cae_vencimiento
		numero = ds[0].comp_numero
		
	}
	
	
		
	return {msj_afip:fs_afip_comprobante.comp_mensaje_afip,msj_err:fs_afip_comprobante.comp_mensaje_error,comp_num:numero,
		comp_cae:cae, comp_estado: estado, id:vl_id, consulta: consulta, cae_vencimiento: vencimiento}
	
	
}

/**
 * @properties={typeid:24,uuid:"ECFD11DD-E1EA-4C22-A9A1-02B26B5E2DE7"}
 */
function borrarRegistroAfip(p_id){
	/** @type {JSFoundSet<db:/gpp/afip_comprobante>} */
	var fs_afip_comprobante = databaseManager.getFoundSet('gpp', 'afip_comprobante')
	fs_afip_comprobante.loadRecords(p_id)
	fs_afip_comprobante.deleteRecord()
	databaseManager.saveData()
}


/**
 * @properties={typeid:24,uuid:"1CC552AD-2B68-4E02-AEB4-56190ADB0D00"}
 */
function GenerarCodigoBarrasAFIP(p_codigo,p_pv,p_cae,p_vencimiento){
	
	/** @type {JSFoundSet<db:/gpp/core_puntos_de_venta>} */
	var fs_core_puntos_de_venta = databaseManager.getFoundSet('gpp', 'core_puntos_de_venta')
	fs_core_puntos_de_venta.loadRecords(p_pv)
	
	/** @type {JSFoundSet<db:/gpp/core_company>} */
	var fs_core_company = databaseManager.getFoundSet('gpp', 'core_company')
	fs_core_company.loadRecords(scopes.usuario.vg_company_id)
	
	var company_cuit	= utils.stringReplace(fs_core_company.core_company_to_core.core_num_doc,"-","")
	
	var codigo_afip = 0
	switch (p_codigo) {
	case 5://Factura A
		codigo_afip = 1
		break;
	case 20://Nota credito A
		codigo_afip = 3
		break;
	
	}
	
	var tipo_afip   = utils.numberFormat(codigo_afip,'00')
	
	var pto_vta 	= utils.numberFormat(fs_core_puntos_de_venta.pv_numero,'0000')
	var cae			= p_cae
	
	var ano,mes,dia

	ano 	= utils.numberFormat(p_vencimiento.getFullYear(),'0000')
	mes		= utils.numberFormat(p_vencimiento.getMonth(),'00')
	dia 	= utils.numberFormat(p_vencimiento.getDate(),'00')
	
	var barcode = company_cuit + tipo_afip + pto_vta + cae + ano + mes + dia 	
	 
	
	
	var impares = 0
	var pares = 0
	
	for(var i=0;i<=barcode.length;i++) {
		if((i%2)!=0) {	
			pares=pares+utils.stringToNumber(barcode.substr(i,1))
		} else {
			impares=impares+utils.stringToNumber(barcode.substr(i,1))
		}
	}
	
	impares = impares*3
	
	var total = impares + pares
	var digito=10-(total%10)
	
	if (digito==10) {
		digito=0
	}
	
	var dig_verif = utils.numberFormat(digito,'#')
	
	return barcode + dig_verif

}

/**
 * @param {JSRecord<db:/gpp/vent_comprobantes>} p_comprobante
 * @return {Number}
 * @properties={typeid:24,uuid:"2E2F3C7C-AA0E-4441-8695-0162BE4DCE40"}
 */
function calcularSaldoComprobante(p_comprobante) {
	
	var vl_saldo = 0
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(p_comprobante.vent_comprobantes_to_vent_comprobantes_recibo);
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = p_comprobante.vent_comprobantes_to_vent_comprobantes_recibo.getRecord(index);
		vl_saldo += myRecord.vent_comprobantes_recibo_to_vent_comprobantes_recibo.comp_imp_total
	}
	
	return vl_saldo
}
