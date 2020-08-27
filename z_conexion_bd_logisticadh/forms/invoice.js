/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"E3F256D9-F570-409E-9753-FE3C0D1DB7F8"}
 */
var vl_codigo = null;

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"5CCD1311-6D19-40AA-86F4-7D609AF3F5A0"}
 */
var vl_nombre = null;

/**
 * @type {Date}
 *
 *
 * @properties={typeid:35,uuid:"CB570ECF-F9D8-44DE-86F1-D1526C964E56",variableType:93}
 */
var vl_fecha_fin = null;

/**
 * @type {Date}
 *
 *
 * @properties={typeid:35,uuid:"715F0F19-E5AE-408F-81A5-333AB93A965E",variableType:93}
 */
var vl_fecha_ini = null;

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"CBA02020-AF86-46F4-B8D5-56CA539A0A56",variableType:8}
 */
var vl_pendiente = null;
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F1F10A5B-9414-48AD-ABEB-57E4FC78C1EE"}
 */
function onActionVolver(event) {
	application.showForm(forms.main_menu)

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"221AAA70-30D5-40BD-A9A1-75B4AB32240B"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		vl_pendiente = 1
		vl_fecha_fin = application.getServerTimeStamp()
		vl_fecha_ini = new Date(2019,1,1)
		
	}
	
	var vl_where = 'where transdate between \''+utils.dateFormat(vl_fecha_ini, 'yyyy-MM-dd') + ' 00:00:00\' and \'' + utils.dateFormat(vl_fecha_fin, 'yyyy-MM-dd') + ' 23:59:59\' '
	
	if(vl_pendiente == 1)
		vl_where += ' and saldo > 0'
	if(vl_codigo != null && vl_codigo != '')
		vl_where += ' and custcode  like \'%'+vl_codigo+'%\''
	if(vl_nombre != null && vl_nombre != '')
		vl_where += ' and custname  like \'%'+vl_nombre+'%\''
	
	var vQuery = 'select internalID, custcode,transdate,custname,status,transtime,serNr,OriginType,labels,gMargin,subTotal,vatTotal,total,saldo,OfficialSerNr,payTerm,taxRegType,idType, \
					taxRegNr,toOfficialSerNr,soNr from Invoice '+ vl_where+ ' order by internalID desc'

		/** @type {JSDataSet<internalID:number, custcode:String, transdate:Date>}*/
		var vl_vDataset = databaseManager.getDataSetByQuery('logisticadh', vQuery, new Array(), -1);
		
		//forms.factura_invoice.foundset.loadRecords(vl_vDataset)

	    var success = history.removeForm("factura_invoice_")
	    if(success) {solutionModel.removeForm("factura_invoice_")}


//	    internalID,		 custcode,		transdate,			custname,		status,				transtime,			serNr,				OriginType,			labels,			gMargin,			subTotal,			vatTotal,			total,saldo,OfficialSerNr,payTerm,taxRegType,idType,taxRegNr,toOfficialSerNr,soNr
//	    JSColumn.NUMBER, JSColumn.TEXT,	JSColumn.DATETIME,	JSColumn.TEXT,	JSColumn.NUMBER,	JSColumn.DATETIME,	JSColumn.NUMBER,	JSColumn.NUMBER,	JSColumn.TEXT,	JSColumn.NUMBER,	JSColumn.NUMBER,	JSColumn.NUMBER,	JSColumn.NUMBER,JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER
	    var uri = vl_vDataset.createDataSource('_tmp_factura_invoice', [JSColumn.NUMBER,JSColumn.TEXT,JSColumn.DATETIME,JSColumn.TEXT,JSColumn.NUMBER,JSColumn.DATETIME,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.TEXT,JSColumn.TEXT,JSColumn.NUMBER]);

	    var myForm = solutionModel.newForm('factura_invoice_', uri, null, true, 800, 600);
	    myForm.extendsForm = 'facturas_copy'
	    myForm.navigator = SM_DEFAULTS.NONE
	    
	    	
	    forms['factura_invoice_'].vl_pendiente = vl_pendiente
	    forms['factura_invoice_'].vl_codigo = vl_codigo
		forms['factura_invoice_'].vl_nombre = vl_nombre
		forms['factura_invoice_'].vl_fecha_fin = vl_fecha_fin
		forms['factura_invoice_'].vl_fecha_ini = vl_fecha_ini
		
	    forms['factura_invoice_'].controller.show();
	
}
