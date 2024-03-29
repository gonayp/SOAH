customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"mem:mem_caja_movimientos",
encapsulation:36,
items:[
{
cssPosition:"432,-1,-1,305,80,20",
formIndex:4,
text:"Saldo",
transparent:true,
typeid:7,
uuid:"0D3B6757-529E-4E16-B273-EF88A39087B4"
},
{
cssPosition:"452,-1,-1,5,140,20",
dataProviderID:"vl_ingresos",
format:"#,###.00",
horizontalAlignment:4,
typeid:4,
uuid:"15B177CD-FA67-477A-BC86-6B2E8B8EA8B3"
},
{
cssPosition:"432,-1,-1,155,80,20",
formIndex:3,
text:"Egresos",
transparent:true,
typeid:7,
uuid:"200B238C-A6D2-48CB-925B-A8987AB56926"
},
{
cssPosition:"432,-1,-1,5,80,20",
formIndex:2,
text:"Ingresos",
transparent:true,
typeid:7,
uuid:"3DF8B338-99FD-4B63-B9CC-E48B6FE187AB"
},
{
cssPosition:"452,-1,-1,305,140,20",
dataProviderID:"vl_saldo",
format:"#,###.00",
horizontalAlignment:4,
typeid:4,
uuid:"491DB4F5-E2DC-4E0D-9A15-564A4965B9ED"
},
{
height:487,
partType:8,
typeid:19,
uuid:"5D76B6BE-F8F2-47FB-90C6-53077C25D27E"
},
{
height:427,
partType:5,
typeid:19,
uuid:"95AB1315-00CD-4389-A6A3-37DDCEEFB80B"
},
{
cssPosition:"452,-1,-1,155,140,20",
dataProviderID:"vl_egresos",
format:"#,###.00",
horizontalAlignment:4,
typeid:4,
uuid:"CDBD4B15-01DA-4B27-9DD8-D8C555147A41"
},
{
cssPosition:"2,5,65,0,575,364",
formIndex:1,
json:{
columns:[
{
dataprovider:"id",
svyUUID:"FC54E99E-F98F-45D0-910F-6BBB64440BF7",
width:"50"
},
{
dataprovider:"tipo",
headerStyleClass:"cell_left_header",
headerText:"Tipo",
styleClass:"cell_left",
svyUUID:"5012B712-20C4-41EE-9391-D74E01EAC5C9",
valuelist:"440B74D6-B5D7-4219-AB6F-65E90347E018",
width:"200"
},
{
dataprovider:"numero",
format:"####",
headerStyleClass:"cell_center_header",
headerText:"Número",
styleClass:"cell_center",
svyUUID:"17511058-9EB6-4173-9FB2-4A3419A7F02A",
width:"150"
},
{
dataprovider:"descripcion",
headerStyleClass:"cell_left_header",
headerText:"Descripción",
styleClass:"cell_left",
svyUUID:"B4F4D111-C22D-407E-A106-2BAC53D91CE0",
width:"300"
},
{
dataprovider:"fecha",
format:"dd/MM/yy HH:mm",
headerStyleClass:"cell_center_header",
headerText:"Fecha",
styleClass:"cell_center",
svyUUID:"D629CE6C-10C2-4FCD-A41D-9DE85DAEA972",
width:"150"
},
{
dataprovider:"importe_ing",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Ingreso",
styleClass:"cell_right",
svyUUID:"28DDE105-07CA-442B-B059-BBE1FCA71AA2",
width:"100"
},
{
dataprovider:"importe_egr",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Egreso",
styleClass:"cell_right",
svyUUID:"FBD86D27-7B5A-47B7-802C-791E2D14FC10",
width:"100"
}
],
cssPosition:{
bottom:"65",
height:"364",
left:"0",
right:"5",
top:"2",
width:"575"
},
enableColumnResize:true,
formIndex:1,
location:{
x:10,
y:10
},
onCellDoubleClick:"04767030-BC67-421C-9EC6-31E1E0EE30FB",
pageSize:0
},
location:"10,10",
name:"table_3",
typeName:"servoyextra-table",
typeid:47,
uuid:"D625EB2B-7363-4B57-A5EA-26396C564C80"
}
],
name:"caja_abierta_movimientos_otros",
namedFoundSet:"separate_otros",
navigatorID:"-1",
onShowMethodID:"B565AE65-C61E-4D6E-ADD8-98F71F1C3FD4",
showInMenu:true,
typeid:3,
uuid:"FA7FB2F7-6020-4DBA-ACF4-CEFFF13AEFF1"