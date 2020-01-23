/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CC343EBE-64FF-4E60-8A49-142BE94F0DC4",variableType:4}
 */
var vl_tipo_v = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"45E2BA06-1F59-4C86-B707-7CD16B1EDD3E",variableType:8}
 */
var vl_valor = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B50B84B1-C7B1-43FD-B05D-560250C2D67A",variableType:4}
 */
var vl_tipo = null;


/**
 * @properties={typeid:24,uuid:"132FC063-8950-4204-9F3F-AD12FB0BADAA"}
 */
function onActionVolver() {
	application.getWindow('Dialog').hide()
}

/**
 * @properties={typeid:24,uuid:"A12388A3-63F4-406B-B825-0FBE6E309078"}
 * @SuppressWarnings(wrongparameters)
 */
function onActioCambiarPrecio() {
	
	if(vl_valor == 0){
		plugins.webnotificationsToastr.error("Falta colocar un valor para cambiar los precios.","",globals.vg_toast_options)
		return
	}
	
	var nRecordCount = 0
	nRecordCount = databaseManager.getFoundSetCount(forms.herr_equipos_precios.foundset);
	for (var index = 1; index <= nRecordCount; index++) {
		var myEquipo = forms.herr_equipos_precios.foundset.getRecord(index);
		if(vl_tipo == 1){//Porcentaje
			if(myEquipo.equipo_precio_base != 0){
				globals.actualizarListaPrecios("Automatico "+vl_valor+" %",myEquipo.equipo_precio_base,1,myEquipo.equipo_id)
				myEquipo.equipo_precio_base += (myEquipo.equipo_precio_base * (vl_valor/100))
			}
		}
		else{//Cambiar importe de importe
			globals.actualizarListaPrecios("Automatico $ "+vl_valor,myEquipo.equipo_precio_base,1,myEquipo.equipo_id)
			myEquipo.equipo_precio_base = vl_valor
		}
		databaseManager.saveData()
		
	}
	
	onActionVolver()
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D7D55BDA-87AD-4207-9AF0-23681BB799E1"}
 */
function onShow(firstShow, event) {
	
	controller.focusField("f_valor",true)
	
	vl_tipo = 1
	vl_tipo_v = 0
	vl_valor = 0
	
}

/**
 *
 * @properties={typeid:24,uuid:"FB409BC5-5CAD-4AE0-A2D8-8C88F7DC44DE"}
 */
function onDataChange() {
	
	if(vl_tipo == 1) vl_tipo_v = 0
	else vl_tipo_v = 1
}

/**
 * @properties={typeid:24,uuid:"06C6082B-7908-457E-B820-F7DFBE9E7563"}
 */
function onDataChange1() {
	if(vl_tipo_v == 1) vl_tipo = 0
	else vl_tipo = 1
}
