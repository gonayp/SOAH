customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/logisticadh/rental",
encapsulation:108,
items:[
{
cssPosition:"35,-1,-1,715,140,20",
dataProviderID:"vl_fecha_ini",
displayType:5,
formIndex:2,
format:"dd/MM/yy|mask",
onDataChangeMethodID:"86B37E46-A4F0-4CDE-8CB0-AA9934C73F4A",
typeid:4,
uuid:"02830891-8B44-4E14-9EE4-AA46DB8F4FA2"
},
{
cssPosition:"36,-1,-1,551,140,19",
dataProviderID:"vl_nombre",
onDataChangeMethodID:"86B37E46-A4F0-4CDE-8CB0-AA9934C73F4A",
typeid:4,
uuid:"1C2F4483-284D-45A2-884D-E556B78AEFCD"
},
{
height:792,
partType:5,
typeid:19,
uuid:"3C344A1F-B7BA-408A-AABF-0F920620EC39"
},
{
cssPosition:"574,0,0,0,637,145",
items:[
{
containsFormID:"8E52DB03-3FCF-4032-8A80-31B117288063",
location:"249,598",
relationName:"rental_to_salesorderitemrow_1_alquiler_to_ordenventa",
text:"Orden de Venta",
typeid:15,
uuid:"4078F49B-D2FA-4CA2-968F-AEBE108386CC"
},
{
containsFormID:"4590E3C8-AB4E-4645-BE69-5F914E00D0C0",
location:"169,598",
relationName:"rental_to_rentalitemrow_1_alquiler_to_item",
text:"Herramientas",
typeid:15,
uuid:"530FFC36-0318-4F28-905F-2AFE2AB6F07E"
}
],
name:"tabs",
printable:false,
transparent:true,
typeid:16,
uuid:"46E3077A-7973-4B07-BADA-D70F3971A82C"
},
{
cssPosition:"15,-1,-1,715,119,20",
formIndex:3,
text:"Fecha Inicial",
transparent:true,
typeid:7,
uuid:"47EA1221-3763-4AED-A74F-EF40C7E870E9"
},
{
cssPosition:"9,-1,-1,17,176,50",
json:{
cssPosition:{
bottom:"-1",
height:"50",
left:"17",
right:"-1",
top:"9",
width:"176"
},
imageStyleClass:"fas fa-reply",
onActionMethodID:"E6B0B3EC-824C-4293-A83C-9ECA67AB3BA1",
tabSeq:-2,
text:"Volver"
},
name:"btn_nuevo_clientec",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"8A32FAC3-2EFF-4EF8-AE6E-BF51E2813618"
},
{
cssPosition:"100,0,-1,0,636,469",
json:{
columns:[
{
dataprovider:"internalid",
headerText:"internalID",
svyUUID:"E4B8DC96-BBE3-4953-96EE-72DE5A83B0D0",
width:"100"
},
{
dataprovider:"custcode",
headerText:"custCode",
svyUUID:"E756FFFF-AA4B-4F60-88D0-525DD774407F",
width:"100"
},
{
dataprovider:"rental_to_customer_1_alquiler_to_cliente.name",
headerText:"Nombre Cliente",
svyUUID:"2B873923-FC47-491E-94F0-17F1DBD8EED2",
width:"250"
},
{
dataprovider:"status",
headerText:"status",
svyUUID:"5BDAEDDA-6A83-4BFA-A937-768D5966F6C7",
width:"100"
},
{
dataprovider:"calc_hora",
headerText:"Hora",
svyUUID:"FD0FDCE5-D3D7-47ED-9115-BA5F5BEB9C62",
width:"100"
},
{
dataprovider:"transdate",
format:"dd/MM/yy",
headerText:"transDate",
svyUUID:"250688DC-F28D-44F8-976C-687259ED4BF0",
width:"100"
},
{
dataprovider:"sernr",
headerText:"serNr",
svyUUID:"54D650C1-C428-4360-9610-B7D8866F857B",
width:"150"
},
{
dataprovider:"fromdate",
format:"dd/MM/yy",
headerText:"fromDate",
svyUUID:"961E0012-B739-4FBA-B01C-5AB44E075A08",
width:"100"
},
{
dataprovider:"user",
headerText:"user",
svyUUID:"FB2C2CCE-F633-40C4-8E27-84E1D3C9B4E2",
width:"100"
},
{
dataprovider:"computer",
headerText:"computer",
svyUUID:"C942015F-F93C-4A0B-8DC6-C3BCD48E8D37",
width:"100"
},
{
dataprovider:"todate",
format:"dd/MM/yy",
headerText:"toDate",
svyUUID:"D9CE9E24-FD92-4ED4-AE46-315C1570D39C",
width:"100"
},
{
dataprovider:"origintype",
headerText:"OriginType",
svyUUID:"1805E3B6-BD7F-487F-BBE2-2D2F4084CCD3",
width:"100"
},
{
dataprovider:"labels",
headerText:"labels",
svyUUID:"2354D970-DCF8-438C-9D14-7EC65049D1DC",
width:"200"
},
{
dataprovider:"work",
headerText:"work",
svyUUID:"980B20E4-226D-4967-8DF7-1F7D34391517",
width:"100"
},
{
dataprovider:"workname",
headerText:"WorkName",
svyUUID:"8CB462FE-563C-42E2-8A9D-421616A56CC2",
width:"200"
},
{
dataprovider:"total",
format:"#,###.00",
headerText:"total",
svyUUID:"9D726DDE-4B44-4FCE-8E3E-4B220B974800",
width:"150"
}
],
cssPosition:{
bottom:"-1",
height:"469",
left:"0",
right:"0",
top:"100",
width:"636"
},
pageSize:null
},
name:"table_1",
typeName:"servoyextra-table",
typeid:47,
uuid:"92D3AC5F-4B87-4DD9-A4FD-6C2E99E0E035"
},
{
cssPosition:"16,-1,-1,551,80,19",
formIndex:6,
text:"Nombre",
transparent:true,
typeid:7,
uuid:"96F4EC9B-18E4-48F0-B23F-24CD7D03AE81"
},
{
cssPosition:"16,-1,-1,451,80,19",
formIndex:5,
text:"Codigo",
transparent:true,
typeid:7,
uuid:"A257C894-4357-4551-AB5C-BE59982905A0"
},
{
cssPosition:"36,-1,-1,451,80,19",
dataProviderID:"vl_codigo",
onDataChangeMethodID:"86B37E46-A4F0-4CDE-8CB0-AA9934C73F4A",
typeid:4,
uuid:"A270EDC7-4EE1-4966-A632-F02C22425A2A"
},
{
cssPosition:"15,-1,-1,860,95,20",
formIndex:4,
text:"Fecha Final",
transparent:true,
typeid:7,
uuid:"CB5C075B-7266-4EDF-9055-B1B49F4AAE9E"
},
{
cssPosition:"9,-1,-1,208,200,79",
fontType:"0,0,31,Dialog",
text:"Alquileres",
typeid:7,
uuid:"CC1233BB-CC91-4F32-8F41-09A3A9CD04E6"
},
{
cssPosition:"68,-1,-1,451,229,20",
dataProviderID:"vl_pendiente",
displayType:4,
onActionMethodID:"4785D5BE-1522-4F15-8EE2-3D3726FCF4D3",
onDataChangeMethodID:"-1",
text:"Ver solo pendientes",
typeid:4,
uuid:"E31E55E0-A561-454E-BDBF-2AF57A47227B"
},
{
cssPosition:"35,-1,-1,860,140,20",
dataProviderID:"vl_fecha_fin",
displayType:5,
formIndex:4,
format:"dd/MM/yy|mask",
onDataChangeMethodID:"86B37E46-A4F0-4CDE-8CB0-AA9934C73F4A",
typeid:4,
uuid:"EB6CE498-72A0-4B6B-A4E6-E46B913BFD4E"
}
],
name:"alquileres",
navigatorID:"-1",
onShowMethodID:"1D636DB3-B200-4873-92C2-81D03946D344",
showInMenu:true,
size:"1011,792",
typeid:3,
uuid:"E28FA1DA-516B-4135-BA86-C32DC90313E7"