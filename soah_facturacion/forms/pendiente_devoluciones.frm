customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/vent_comprobantes",
encapsulation:44,
items:[
{
height:399,
partType:5,
typeid:19,
uuid:"4E749130-2E65-4D66-BB4E-43D30E934D69"
},
{
cssPosition:"40,-1,-1,5,45,35",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"5",
right:"-1",
top:"40",
width:"45"
},
formIndex:2,
imageStyleClass:"fas fa-undo-alt",
location:{
x:10,
y:10
},
onActionMethodID:"C156FAFB-8DE0-4B96-A3A7-964818817D21",
toolTipText:"Volver"
},
location:"10,10",
name:"button_2",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"51C3C080-F5F6-4C2B-A26B-DE8560621AD5"
},
{
cssPosition:"41,0,0,62,575,364",
formIndex:1,
json:{
columns:[
{
dataprovider:"calc_num_compr_sin_codig",
headerStyleClass:"cell_center_header",
headerText:"Número",
styleClass:"cell_center",
svyUUID:"77000A86-7DBA-49F4-B3A1-1C1AF8CF1A2C",
width:"100"
},
{
dataprovider:"vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_nombre",
headerStyleClass:"cell_left_header",
headerText:"Cliente",
styleClass:"cell_left",
svyUUID:"70AA1F3C-1E15-4D33-A5CE-36344B0A597B",
width:"200"
},
{
dataprovider:"comp_fecha_emision",
format:"dd/MM/yy",
headerStyleClass:"cell_center_header",
headerText:"Fecha",
styleClass:"cell_center",
svyUUID:"74B6274D-DCAA-4B02-A2FD-0F4DAB0EB282",
width:"150"
},
{
dataprovider:"vent_comprobantes_to_vent_comprobante_estados.estado_nombre",
headerStyleClass:"cell_center_header",
headerText:"Estado",
styleClass:"cell_center",
svyUUID:"C30D1EA6-073F-4CAD-B8FB-D6CA94E7E160",
width:"150"
},
{
dataprovider:"comp_imp_total",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Total",
styleClass:"cell_right",
svyUUID:"A793583C-63BA-43FA-9CAC-597BD975DBF2",
width:"100"
}
],
cssPosition:{
bottom:"0",
height:"364",
left:"62",
right:"0",
top:"41",
width:"575"
},
enableColumnResize:true,
formIndex:1,
location:{
x:10,
y:10
},
onCellDoubleClick:"D8FBD69F-916B-46E3-9B03-C554754BFF74",
pageSize:0
},
location:"10,10",
name:"table_3",
typeName:"servoyextra-table",
typeid:47,
uuid:"6DA99EF1-D124-4AF4-A816-CD852700575B"
},
{
cssPosition:"39,-1,0,0,60,443",
location:"10,10",
styleClass:"banner",
typeid:7,
uuid:"D9D8ABCE-0DE3-4231-B20C-36C572BE0456",
verticalAlignment:1
},
{
cssPosition:"0,0,-1,0,642,40",
formIndex:5,
location:"10,10",
styleClass:"banner",
text:"Devoluciones Pendientes",
typeid:7,
uuid:"DE00E52B-5542-40CC-9A6E-B8AD8D492AF8",
verticalAlignment:1
}
],
name:"pendiente_devoluciones",
namedFoundSet:"separate_devoluciones",
navigatorID:"-1",
onShowMethodID:"C830A8CE-2C9B-40D2-B3D7-1178878A6C6B",
showInMenu:true,
size:"878,482",
typeid:3,
uuid:"8B5E7AC8-F19B-4012-AB83-7AB9B2BDF4E6"