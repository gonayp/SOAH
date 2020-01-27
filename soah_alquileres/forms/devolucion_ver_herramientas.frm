customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/vent_comprobante_herramientas",
encapsulation:4,
items:[
{
cssPosition:"5,-1,-1,5,136,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"5",
right:"-1",
top:"5",
width:"136"
},
imageStyleClass:"fas fa-search",
onActionMethodID:"E362EDFD-AAB7-4B3D-8B76-D2D3A69D0716",
styleClass:"btn btn-default btn-success",
text:"Buscar Equipo"
},
name:"btn_nuevo_equipo",
styleClass:"btn btn-default btn-success",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"12984883-54D5-4B51-9886-BA4FE11AE4D8"
},
{
cssPosition:"5,-1,-1,150,173,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"150",
right:"-1",
top:"5",
width:"173"
},
imageStyleClass:"fas fa-barcode",
onActionMethodID:"C972ADFF-3B56-4D61-8EB4-E55F734BA159",
styleClass:"btn btn-default btn-success",
text:"Cod. Barras Equipo"
},
name:"btn_nuevo_equipoc",
styleClass:"btn btn-default btn-success",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"3C08A42A-8E8F-4185-A0CC-9ED8F0981BA4"
},
{
cssPosition:"43,0,0,0,200,100",
json:{
columns:[
{
dataprovider:"vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_herramientas.herramienta_nombre",
headerStyleClass:"cell_left_header",
headerText:"Herramienta",
styleClass:"cell_left",
svyUUID:"B16AF042-6D00-469F-A5ED-84AC62483EEA",
width:"200"
},
{
dataprovider:"vent_comprobante_herramientas_to_herr_equipo.herr_equipo_to_herr_modelo.modelo_nombre",
headerStyleClass:"cell_left_header",
headerText:"Modelo",
styleClass:"cell_left",
svyUUID:"B07CFD35-06B8-466A-B45B-86111E8AEB51",
width:"150"
},
{
dataprovider:"vent_comprobante_herramientas_to_herr_equipo.equipo_cod_barras",
headerStyleClass:"cell_left_header",
headerText:"Cod. Barras",
styleClass:"cell_left",
svyUUID:"FB6B40C7-F76E-4133-9D43-5E0004D8D4E9",
width:"150"
},
{
dataprovider:"comp_precio",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Precio",
styleClass:"cell_right",
svyUUID:"65238864-E36C-4BE9-9BB9-C977F7B9B544",
width:"150"
},
{
dataprovider:"vent_comprobante_herramientas_to_vent_comprobantes_alquiler.comp_fecha_emision",
format:"dd/MM/yy HH:mm",
headerStyleClass:"cell_right_header",
headerText:"Alquiler",
styleClass:"cell_center",
svyUUID:"44800EDE-D20B-43B2-8244-72E85B917D6F",
width:"150"
},
{
dataprovider:"vent_comprobante_herramientas_to_vent_comprobantes_alquiler.calc_num_compr_sin_codig",
styleClass:"cell_left",
svyUUID:"787CFDF0-1991-4BA0-BE9F-26FF7CEA215F",
width:"100"
},
{
dataprovider:"calc_dias_reales",
format:"####",
headerStyleClass:"cell_right_header",
headerText:"Días reales",
styleClass:"cell_right",
svyUUID:"D72CA62F-8CB3-4CEB-9251-D5292EBA8C6C",
width:"150"
},
{
dataprovider:"calc_dias_facturados",
format:"####",
headerStyleClass:"cell_right_header",
headerText:"Días Facturados",
styleClass:"cell_right",
svyUUID:"5421520F-5B54-40E5-832A-89B1B146D6FF",
width:"150"
},
{
dataprovider:"comp_dias_alquiler",
format:"####",
headerStyleClass:"cell_right_header",
headerText:"Días a cobrar",
styleClass:"cell_right",
svyUUID:"C58C3A45-FC31-4968-AD32-310CFFEEF045",
width:"150"
},
{
dataprovider:"calc_total",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Total",
styleClass:"cell_right",
svyUUID:"7438DA15-53ED-4214-B060-2D6DD801D7B3",
width:"150"
},
{
dataprovider:"vent_comprobante_herramientas_to_vent_comprobantes_alquiler.vent_comprobantes_to_vent_obras.obra_nombre",
headerStyleClass:"cell_left_header",
headerText:"Obra",
styleClass:"cell_left",
svyUUID:"7C1F0F73-83FA-42CE-AE89-095343935FBA",
width:"100"
}
],
cssPosition:{
bottom:"0",
height:"100",
left:"0",
right:"0",
top:"43",
width:"200"
},
enableColumnResize:true,
onCellDoubleClick:"DCAD1579-58D0-4407-8A02-FE0A94B7F8D7",
pageSize:0,
tabSeq:-2
},
name:"table_1",
typeName:"servoyextra-table",
typeid:47,
uuid:"BE03ECF4-6488-4E57-8F65-2765E58AF65C"
},
{
height:232,
partType:5,
typeid:19,
uuid:"E98E42DC-6B10-4D6E-958E-29261D254758"
}
],
name:"devolucion_ver_herramientas",
navigatorID:"-1",
showInMenu:true,
size:"459,232",
typeid:3,
uuid:"7A0B8C56-0A39-48A4-B40B-5C2BD5D7550D"