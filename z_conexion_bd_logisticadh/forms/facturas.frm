customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/logisticadh/invoice",
encapsulation:108,
items:[
{
cssPosition:"590,0,0,0,637,145",
items:[
{
containsFormID:"7D5C8D37-DD9E-4A6B-9871-9876FECF0422",
location:"249,614",
relationName:"invoice_to_salescai_1_factura_to_cae",
text:"CAE",
typeid:15,
uuid:"21F9A8E3-41F9-4CF8-8D31-BEA55E5DE871"
},
{
containsFormID:"911E2DF5-8C53-4FC5-9E27-66337189562F",
location:"329,614",
relationName:"invoice_to_invoicepaymoderow_1_fatura_to_forma_pago",
text:"Formas de pago",
typeid:15,
uuid:"51299FF3-489E-4DF7-AE57-E988F9FE9420"
},
{
containsFormID:"11341302-69D9-4800-8642-5C5FDAC9EBF3",
location:"431,614",
relationName:"invoice_to_salesorder_1_factura_to_ordenventa",
text:"Orden de venta",
typeid:15,
uuid:"5387C188-7C68-4CA3-B9FF-1710FF21FC36"
},
{
containsFormID:"112B8C53-E04B-42B0-B50D-46027F0A608F",
location:"169,614",
relationName:"invoice_to_invoiceitemrow_1_factura_to_item",
text:"Items",
typeid:15,
uuid:"8F9CEFF8-511C-4AF0-826A-6C57B4643536"
}
],
name:"tabs",
printable:false,
transparent:true,
typeid:16,
uuid:"0AE2AC64-4265-4A42-9ED1-3AF76F0D0694"
},
{
cssPosition:"17,-1,-1,860,95,20",
formIndex:4,
text:"Fecha Final",
transparent:true,
typeid:7,
uuid:"2494E894-C036-4D36-AFD3-A1A04D367E65"
},
{
cssPosition:"17,-1,-1,446,80,19",
formIndex:5,
text:"Codigo",
transparent:true,
typeid:7,
uuid:"250A8A15-237B-4845-9BA8-AD83007547F6"
},
{
cssPosition:"17,-1,-1,715,119,20",
formIndex:3,
text:"Fecha Inicial",
transparent:true,
typeid:7,
uuid:"3A9958A0-A94E-4A68-BD4E-F469039C6FDB"
},
{
cssPosition:"37,-1,-1,446,80,19",
dataProviderID:"vl_codigo",
onDataChangeMethodID:"5CCC3E51-5080-41A8-80D9-F1C516FA9E83",
typeid:4,
uuid:"65EC1140-C098-42E0-A676-53AE7AED3EBF"
},
{
cssPosition:"70,-1,-1,446,233,20",
dataProviderID:"vl_pendiente",
displayType:4,
onActionMethodID:"B6544AD7-99E0-46F1-8CA9-669B244ABF6B",
text:"Ver solo con saldo",
typeid:4,
uuid:"78500509-D555-4AA8-8B34-3917CF147683"
},
{
cssPosition:"37,-1,-1,715,140,20",
dataProviderID:"vl_fecha_ini",
displayType:5,
formIndex:2,
format:"dd/MM/yy|mask",
onDataChangeMethodID:"5CCC3E51-5080-41A8-80D9-F1C516FA9E83",
typeid:4,
uuid:"92061AD4-2983-497B-ADAC-225859260745"
},
{
cssPosition:"17,-1,-1,546,80,19",
formIndex:6,
text:"Nombre",
transparent:true,
typeid:7,
uuid:"984C8FE6-3D95-443F-84CD-3BC9AE6B1E25"
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
onActionMethodID:"ECD3555F-543A-4167-BFA9-AE2EAE8AB2CF",
tabSeq:-2,
text:"Volver"
},
name:"btn_nuevo_clientec",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"A71B1399-9ACF-4D23-B810-5A49A608E9DE"
},
{
cssPosition:"100,0,-1,0,636,483",
json:{
columns:[
{
dataprovider:"internalid",
headerText:"internalID",
svyUUID:"0631D728-C5CB-4938-95CA-5713BC89EC86",
width:"100"
},
{
dataprovider:"custcode",
headerText:"custCode",
svyUUID:"54B33CE6-9BC0-4E56-9AE0-E640EF3D931D",
width:"100"
},
{
dataprovider:"invoice_to_customer_1_factura_to_cliente.name",
headerText:"Nombre Cliente",
svyUUID:"159647AF-46A2-4AAE-B5DA-E1FFCCB1D681",
width:"250"
},
{
dataprovider:"status",
headerText:"status",
svyUUID:"7D8B3D4F-979C-4E0F-979B-DD3A351DD364",
width:"100"
},
{
dataprovider:"transdate",
format:"dd/MM/yy",
headerText:"transDate",
svyUUID:"5988E207-2BD8-444B-89DA-441BEEC7903F",
width:"100"
},
{
dataprovider:"calc_hora",
headerText:"Hora",
svyUUID:"FEBC4263-A7D3-4C62-A4EE-FEA8ECDE9C57",
width:"100"
},
{
dataprovider:"sernr",
headerText:"serNr",
svyUUID:"ED236ED8-3347-4BBA-904D-200B1354A7D7",
width:"150"
},
{
dataprovider:"computer",
headerText:"computer",
svyUUID:"FF6C162C-6854-4827-A81C-886A1405C052",
width:"100"
},
{
dataprovider:"origintype",
headerText:"OriginType",
svyUUID:"DEC4DED6-9E2C-4E2E-86F0-7C607A7DC38C",
width:"100"
},
{
dataprovider:"labels",
headerText:"labels",
svyUUID:"FB3511BE-B07B-4499-BFA3-506C9F92AC90",
width:"200"
},
{
dataprovider:"gmargin",
format:"#,###.00",
headerText:"gMargin",
svyUUID:"23B069C9-41A0-43A5-8E3E-F5BF32818CAD",
width:"150"
},
{
dataprovider:"subtotal",
format:"#,###.00",
headerText:"subTotal",
svyUUID:"CFFBCF46-BF23-4393-A3CE-47FC73B8C2EF",
width:"150"
},
{
dataprovider:"vattotal",
format:"#,###.00",
headerText:"vatTotal",
svyUUID:"71B87CA4-BB38-4C5B-A899-52CC2903436B",
width:"150"
},
{
dataprovider:"total",
format:"#,###.00",
headerText:"total",
svyUUID:"E72AE54B-8122-448F-A12D-840DE5DEA53B",
width:"150"
},
{
dataprovider:"saldo",
format:"#,###.00",
headerText:"saldo",
svyUUID:"921B8501-6A1F-44B6-9390-D068A3D27873",
width:"150"
},
{
dataprovider:"localitycode",
headerText:"localityCode",
svyUUID:"F8061862-86D9-4431-BA4E-EB45B6922456",
width:"100"
},
{
dataprovider:"taxregnr",
headerText:"taxRegNro",
svyUUID:"0E449D1B-6966-4A79-AC44-7D8477E5B66D",
width:"150"
},
{
dataprovider:"officialsernr",
headerText:"OfficialSerNr",
svyUUID:"23825DC3-3D12-46BD-8B86-6EF55D98BB6A",
width:"150"
},
{
dataprovider:"payterm",
headerText:"payTerm",
svyUUID:"FAE53FFF-FBD2-4191-A44B-D4F25F7D34C9",
width:"100"
},
{
dataprovider:"duedate",
format:"dd/MM/yy",
headerText:"dueDate",
svyUUID:"A4733C63-95D0-49BE-B907-D1B151B3EBCA",
width:"100"
},
{
dataprovider:"taxregtype",
headerText:"taxRegType",
svyUUID:"0CE7D0E1-FE2D-4F50-A28E-DA82BD7DB010",
width:"100"
},
{
dataprovider:"toofficialsernr",
headerText:"toOfficialSerNro",
svyUUID:"2959831B-DF24-4974-AD8C-291182A2ACED",
width:"150"
},
{
dataprovider:"invoicedate",
format:"dd/MM/yy",
headerText:"invoiceDate",
svyUUID:"3534C7E8-4D23-4BBC-BF2E-3494382EC850",
width:"150"
},
{
dataprovider:"originnr",
headerText:"originNumber",
svyUUID:"E5C3145E-3273-4E4E-B7B9-176AD84CCA06",
width:"100"
},
{
dataprovider:"doctype",
headerText:"docType",
svyUUID:"501D801D-6F76-424B-9A3F-19F7AEEB7170",
width:"100"
},
{
dataprovider:"address",
headerText:"address",
svyUUID:"F4774AA4-11C2-42DE-868F-EDEA50738840",
width:"200"
},
{
dataprovider:"sonr",
headerText:"soNro",
svyUUID:"B77DC01D-21B8-4728-A5DC-6258A7139451",
width:"150"
},
{
dataprovider:"idtype",
headerText:"idType",
svyUUID:"0866049C-CD6E-4481-8292-8D3E7E3D67B3",
width:"100"
}
],
cssPosition:{
bottom:"-1",
height:"483",
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
uuid:"B64D6C25-80CD-4B9C-887E-BB80B9623F7A"
},
{
height:792,
partType:5,
typeid:19,
uuid:"DDE62C8A-354D-4ABB-ADC6-020D1781ADD9"
},
{
cssPosition:"37,-1,-1,860,140,20",
dataProviderID:"vl_fecha_fin",
displayType:5,
formIndex:4,
format:"dd/MM/yy|mask",
onDataChangeMethodID:"5CCC3E51-5080-41A8-80D9-F1C516FA9E83",
typeid:4,
uuid:"DEBB9440-9B4F-4C69-83C5-91653FFDED76"
},
{
cssPosition:"37,-1,-1,546,140,19",
dataProviderID:"vl_nombre",
onDataChangeMethodID:"5CCC3E51-5080-41A8-80D9-F1C516FA9E83",
typeid:4,
uuid:"F9591000-C846-475C-BA02-12695AC9138E"
},
{
cssPosition:"9,-1,-1,208,200,79",
fontType:"0,0,31,Dialog",
text:"Facturas",
typeid:7,
uuid:"FB18B0BB-B396-4171-8E1B-44485D8D2E37"
}
],
name:"facturas",
navigatorID:"-1",
onShowMethodID:"5D86913B-1991-44AE-8E43-1CCB7D5463BD",
showInMenu:true,
size:"1011,792",
typeid:3,
uuid:"272B6F93-81B8-4CE2-84E0-C9618272E0EA"