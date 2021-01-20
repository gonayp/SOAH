/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"A2DCB2DE-8018-40BC-AAEA-5C633F51320B",variableType:93}
 */
var vl_fecha_aux = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FFD243A9-CCD5-45D9-A81A-153B4F3D6FA9"}
 */
var vl_formulario = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4D7C9EDC-B694-4A6A-94B9-7B43BDEB7FE4"}
 */
function onShow(firstShow, event) {
	inicializarCalendarios()
}

/**
 * @properties={typeid:24,uuid:"CD43B382-D7FA-4E47-A329-BF0F51F770DA"}
 */
function inicializarCalendarios(){
	
	var fecha_final = vl_fecha_aux

		
	/** @type {svy-fullcalendar.FullCalendarOptions} */
	var options = {
		fixedWeekCount: false,
		defaultDate: fecha_final,
		monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
		monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
		dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
	    dayNamesShort: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],
		selectable: true
	}
	elements.fullcalendar.fullCalendar(options);
}


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F629D9CA-3966-4079-8EF0-A4AE73153235"}
 */
function onActionGuardar(event) {

	application.getWindow('Dialog').hide()

}

/**
 * @param {Date} date
 * @param {JSEvent} event
 * @param {CustomType<svy-fullcalendar.ViewType>} view
 * @param {CustomType<svy-fullcalendar.ResourceType>} [resource]
 *
 * @properties={typeid:24,uuid:"B0CFC79A-59D7-4D5E-884C-458A7315F14B"}
 */
function onDayClick(date, event, view, resource) {
	vl_fecha_aux = date
	
}





/**
 * @properties={typeid:24,uuid:"AC670DC7-3F3A-4F5C-89AC-8E16B85383A1"}
 */
function onDataChangeInicial() {
	
	var fecha_inicial = vl_fecha_aux
	
	
	/** @type {svy-fullcalendar.FullCalendarOptions} */
	var options = {
		fixedWeekCount: false,
			defaultDate: fecha_inicial ,
			monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
			monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
			dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
		    dayNamesShort: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],
			selectable: true
			
	}
	elements.fullcalendar.fullCalendar(options);
	
	
}


/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"ACDDF4E1-8479-43B4-AA95-6DE32B425C3C"}
 */
function onHide(event) {
	forms[vl_formulario].vl_fecha_aux = vl_fecha_aux
	forms[vl_formulario].onDataChangeFecha() 
	return true
}
