customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/vent_comprobante_herramientas",
encapsulation:36,
items:[
{
cssPosition:"1,0,0,0,200,100",
json:{
columns:[
{
dataprovider:"vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_nombre",
headerStyleClass:"cell_left_header",
headerText:"Herramienta",
styleClass:"cell_left",
svyUUID:"7537843B-F67A-4FE6-A26F-A060F3CF1CD0",
width:"200"
},
{
dataprovider:"vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_modelo.modelo_nombre",
headerStyleClass:"cell_left_header",
headerText:"Modelo",
styleClass:"cell_left",
svyUUID:"A573CC72-421B-4A5A-8DE8-694DA59E58C5",
width:"100"
},
{
dataprovider:"comp_precio",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Precio",
styleClass:"cell_right",
svyUUID:"C6B42D90-F97C-4328-AB36-9BA0FFBF43DE",
width:"150"
},
{
dataprovider:"vent_comprobante_herramientas_to_vent_comprobantes_alquiler.comp_fecha_emision",
format:"dd/MM/yy HH:mm",
headerStyleClass:"cell_right_header",
headerText:"Alquiler",
styleClass:"cell_center",
svyUUID:"DDB4334E-7466-49DD-BBB9-B104C41894B7",
width:"150"
},
{
dataprovider:"vent_comprobante_herramientas_to_vent_comprobantes_alquiler.calc_num_compr_sin_codig",
headerStyleClass:"cell_center_header",
svyUUID:"DCA9495F-18EF-4A64-BCBC-CD2281F91A75",
width:"100"
},
{
dataprovider:"vent_comprobante_herramientas_to_vent_comprobantes_devolucion.comp_fecha_emision",
format:"dd/MM/yy HH:mm",
headerStyleClass:"cell_center_header",
headerText:"Devolución",
styleClass:"cell_center",
svyUUID:"120AC2D1-2600-40DE-9891-D75F608FC441",
width:"150"
},
{
dataprovider:"vent_comprobante_herramientas_to_vent_comprobantes_devolucion.calc_num_compr_sin_codig",
styleClass:"cell_center",
svyUUID:"3806983C-2F73-4C7B-8D89-DC2EB6B43B53",
width:"150"
},
{
dataprovider:"comp_dias_alquiler",
format:"####",
headerStyleClass:"cell_right_header",
headerText:"Días Facturados",
styleClass:"cell_right",
svyUUID:"EAC7B7B4-2003-4735-92FD-C08500A861ED",
width:"150"
},
{
dataprovider:"calc_total",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Total",
styleClass:"cell_right",
svyUUID:"45AF2C70-F5E8-46E3-8336-DC037B86B262",
width:"150"
}
],
cssPosition:{
bottom:"0",
height:"100",
left:"0",
right:"0",
top:"1",
width:"200"
},
enableColumnResize:true,
onCellDoubleClick:null,
pageSize:0,
tabSeq:-2
},
name:"table_1",
typeName:"servoyextra-table",
typeid:47,
uuid:"A0DC1043-3B71-4092-B10A-623B45F77A00"
},
{
height:232,
partType:5,
typeid:19,
uuid:"CFB80648-82AB-4C28-B7D1-7CFB1FC963D4"
}
],
name:"factura_devolucion_ver_herramientas",
navigatorID:"-1",
onShowMethodID:"884FF02A-3669-4110-A980-C870FC186452",
showInMenu:true,
size:"459,232",
typeid:3,
uuid:"0B1FA1D6-51E2-4E18-8D84-D107C8510F69"