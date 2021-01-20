

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7EF2CB7A-89CA-41CE-8105-3F0CE83B189A"}
 */
var vl_formulario = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F73B3C5E-4680-4DE8-88D4-ADCA15C20475"}
 */
function onShow(firstShow, event) {
	inicializarCalendarios()
}


/**
 * @properties={typeid:24,uuid:"C151AB8C-7762-4CA4-8648-6202241A83A4"}
 */
function inicializarCalendarios(){
	
	var fecha_inicial = globals.vg_fecha_inicial
	var fecha_final = globals.vg_fecha_final

		
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
	elements.fullcalendar_anterior.fullCalendar(options);
	
	
	
	options = {
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
 * @properties={typeid:24,uuid:"723224BC-6508-4FDE-82EC-48695E42DA76"}
 */
function onActionVolver(event) {
	application.getWindow('Dialog').hide()

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"BF59C5CB-AF48-48CF-9E31-8172376D8F02"}
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
 * @properties={typeid:24,uuid:"26116A93-C290-4488-88E3-639462D7F8F0"}
 */
function onDayClick(date, event, view, resource) {
	globals.vg_fecha_inicial = date
	globals.vg_fecha_rango = utils.dateFormat(globals.vg_fecha_inicial, 'dd/MM/yy') + ' - ' + utils.dateFormat(globals.vg_fecha_final, 'dd/MM/yy')
}

/**
 * @param {Date} date
 * @param {JSEvent} event
 * @param {CustomType<svy-fullcalendar.ViewType>} view
 * @param {CustomType<svy-fullcalendar.ResourceType>} [resource]
 *
 * @properties={typeid:24,uuid:"425E1AB2-0A55-465A-9622-DD7166521630"}
 */
function onDayClickFianal(date, event, view, resource) {
	globals.vg_fecha_final = date
	globals.vg_fecha_rango = utils.dateFormat(globals.vg_fecha_inicial, 'dd/MM/yy') + ' - ' + utils.dateFormat(globals.vg_fecha_final, 'dd/MM/yy')
}

/**
 * @properties={typeid:24,uuid:"BB4249EA-BA93-417A-95EC-B26A59E54622"}
 */
function onDataChangeFinal() {
	
	
	var fecha_final = globals.vg_fecha_final
	globals.vg_fecha_rango = utils.dateFormat(globals.vg_fecha_inicial, 'dd/MM/yy') + ' - ' + utils.dateFormat(globals.vg_fecha_final, 'dd/MM/yy')
	
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
 * @properties={typeid:24,uuid:"54FD3D49-4B70-42DA-A8B7-52FEF9A54FDC"}
 */
function onDataChangeInicial() {
	
	var fecha_inicial = globals.vg_fecha_inicial
	globals.vg_fecha_rango = utils.dateFormat(globals.vg_fecha_inicial, 'dd/MM/yy') + ' - ' + utils.dateFormat(globals.vg_fecha_final, 'dd/MM/yy')
	
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
	elements.fullcalendar_anterior.fullCalendar(options);
	
	
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"13C4C8DF-15D2-4745-B647-F6F4A0B0A350"}
 */
function onActionHoy(event) {
	var fecha = new Date()
	globals.vg_fecha_inicial = new Date (fecha.getFullYear(),fecha.getMonth(),fecha.getDate(),0,0,0)
	globals.vg_fecha_final = new Date (fecha.getFullYear(),fecha.getMonth(),fecha.getDate(),23,59,59)

	onDataChangeFinal()
	onDataChangeInicial()
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"76E3BE57-346D-4DC3-8C02-4097171844F3"}
 */
function onActionSemana(event) {
	var fecha = new Date()
	globals.vg_fecha_inicial = new Date (fecha.getFullYear(),fecha.getMonth(),fecha.getDate()-7,0,0,0)
	globals.vg_fecha_final = new Date (fecha.getFullYear(),fecha.getMonth(),fecha.getDate(),23,59,59)

	onDataChangeFinal()
	onDataChangeInicial()

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"69BD8CD0-D769-4061-8973-50B0D67D5B55"}
 */
function onActionMes(event) {
	var fecha = new Date()
	globals.vg_fecha_inicial = new Date (fecha.getFullYear(),fecha.getMonth()-1,fecha.getDate(),0,0,0)
	globals.vg_fecha_final = new Date (fecha.getFullYear(),fecha.getMonth(),fecha.getDate(),23,59,59)

	onDataChangeFinal()
	onDataChangeInicial()

}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"26358C3C-C9CC-4CDC-9FCF-DF522FFE8CA2"}
 */
function onHide(event) {
	forms[vl_formulario].filtrar()
	return true
}
