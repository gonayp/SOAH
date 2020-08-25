customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/logisticadh/rental",
encapsulation:108,
items:[
{
height:282,
partType:5,
typeid:19,
uuid:"41067346-AA67-4712-8E9F-5042830DF02F"
},
{
background:"#808040",
cssPosition:"1,0,-1,1,80,20",
fontType:"1,1,12,Dialog",
text:"Alquileres",
typeid:7,
uuid:"BCC039D1-9B61-4CAA-A09A-4CB9633E93A5"
},
{
cssPosition:"133,0,514,0,637,145",
items:[
{
containsFormID:"4590E3C8-AB4E-4645-BE69-5F914E00D0C0",
location:"169,157",
relationName:"rental_to_rentalitemrow_1_alquiler_to_item",
text:"Herramientas",
typeid:15,
uuid:"C1D6633C-F44B-40F4-8423-3AA728F7B287"
}
],
name:"tabs",
printable:false,
transparent:true,
typeid:16,
uuid:"CA2887AD-9F07-4751-B244-8BB56EABE8DE"
},
{
cssPosition:"26,0,-1,0,636,102",
json:{
columns:[
{
dataprovider:"internalid",
headerText:"internalID",
svyUUID:"7AA8B102-A416-448D-91CE-E689282A2EE6",
width:"100"
},
{
dataprovider:"custcode",
headerText:"custCode",
svyUUID:"10B599E3-2D4C-4A6B-B0B1-4BBE46603EFA",
width:"100"
},
{
dataprovider:"rental_to_customer_1_alquiler_to_cliente.name",
headerText:"Nombre Cliente",
svyUUID:"A1770426-CC12-4A4D-9464-9674042A7D6D",
width:"250"
},
{
dataprovider:"status",
headerText:"status",
svyUUID:"FDDA1992-2B3B-49CD-9D3B-9232399860CC",
width:"100"
},
{
dataprovider:"calc_hora",
headerText:"Hora",
svyUUID:"6587E946-BBC7-4469-9E59-393324AA7768",
width:"100"
},
{
dataprovider:"transdate",
format:"dd/MM/yy",
headerText:"transDate",
svyUUID:"57CF880E-8F94-4376-8FBC-2E4AEFF2ED5B",
width:"100"
},
{
dataprovider:"sernr",
headerText:"serNr",
svyUUID:"867FD8D0-5442-497B-A0C1-BA6A4CAFBD57",
width:"150"
},
{
dataprovider:"fromdate",
format:"dd/MM/yy",
headerText:"fromDate",
svyUUID:"AD551B4D-B7F2-4DAF-AF40-AFEE039FC0D0",
width:"100"
},
{
dataprovider:"user",
headerText:"user",
svyUUID:"5DC3B62F-8406-41AD-B130-654CC195C368",
width:"100"
},
{
dataprovider:"computer",
headerText:"computer",
svyUUID:"09DE51DA-DD5F-4B76-A39F-C549279FFD0F",
width:"100"
},
{
dataprovider:"todate",
format:"dd/MM/yy",
headerText:"toDate",
svyUUID:"0DC31145-5287-4ADA-85ED-53C417FF1232",
width:"100"
},
{
dataprovider:"origintype",
headerText:"OriginType",
svyUUID:"88762FFD-0395-4F5A-B285-B77139908994",
width:"100"
},
{
dataprovider:"labels",
headerText:"labels",
svyUUID:"60FD8148-5798-4707-BF16-637A33055BF4",
width:"200"
},
{
dataprovider:"work",
headerText:"work",
svyUUID:"0907F14B-350E-41D4-8DF9-C99FF32F4FA1",
width:"100"
},
{
dataprovider:"workname",
headerText:"WorkName",
svyUUID:"8844FE13-DC9F-4253-8F6A-ABAFAA4FAF6B",
width:"200"
},
{
dataprovider:"total",
format:"#,###.00",
headerText:"total",
svyUUID:"009A4670-3403-4E77-8227-1904C3E3718C",
width:"150"
}
],
cssPosition:{
bottom:"-1",
height:"102",
left:"0",
right:"0",
top:"26",
width:"636"
},
pageSize:null
},
name:"table_1",
typeName:"servoyextra-table",
typeid:47,
uuid:"ECAD5881-FD33-4742-8D6B-793C0F3C09FF"
}
],
name:"ordenes_venta_alquileres",
navigatorID:"-1",
onShowMethodID:"-1",
showInMenu:true,
size:"1011,792",
typeid:3,
uuid:"9299D8B3-E628-4AAB-BAE4-F8385DB7C475"