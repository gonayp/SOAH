customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/logisticadh/rentalreturn",
encapsulation:108,
items:[
{
background:"#808040",
cssPosition:"1,0,-1,1,80,20",
fontType:"1,1,12,Dialog",
text:"Devoluciones",
typeid:7,
uuid:"29A55958-0A3B-4D9A-8CE4-C73CB11D7B13"
},
{
cssPosition:"133,0,514,0,637,145",
items:[
{
containsFormID:"712C117E-E65B-41CF-BCE2-7D8E84824E2C",
location:"249,157",
relationName:"rentalreturn_to_rentalreturnsalesrow_1_devoluciones_to_ventas",
text:"Ventas",
typeid:15,
uuid:"900F4F61-0A94-4C8A-B71D-77E09FCDABB2"
},
{
containsFormID:"16D4E979-4500-47F5-8B8F-8453F79386C4",
location:"169,157",
relationName:"rentalreturn_to_rentalreturnitemrow_1_devolucion_to_item",
text:"Herramientas",
typeid:15,
uuid:"C3F5E388-FC04-4B84-B0EB-1316AC8C561C"
}
],
name:"tabs",
printable:false,
transparent:true,
typeid:16,
uuid:"830F9B6A-52B7-45E3-A496-66CE1DC5464D"
},
{
height:282,
partType:5,
typeid:19,
uuid:"C5FF9472-C6AB-4B04-8D6F-48508349BA1A"
},
{
cssPosition:"26,0,-1,0,636,102",
json:{
columns:[
{
dataprovider:"internalid",
headerText:"internalID",
svyUUID:"97972764-B762-40BE-A157-118BD4CDF522",
width:"100"
},
{
dataprovider:"custcode",
headerText:"custCode",
svyUUID:"606F9642-4EC5-4B9E-918C-C49BA43E13D3",
width:"100"
},
{
dataprovider:"rentalreturn_to_customer_1_devolucion_to_cliente.name",
headerText:"Nombre Cliente",
svyUUID:"CAEC3F0C-BC3B-4142-9241-C9D066683C42",
width:"250"
},
{
dataprovider:"status",
headerText:"status",
svyUUID:"8C366B04-1EAE-46D2-9606-5DE10CC0D551",
width:"100"
},
{
dataprovider:"calc_hora",
headerText:"Hora",
svyUUID:"D0CFF0E9-8DA2-408F-B359-D1F63D36D36A",
width:"100"
},
{
dataprovider:"transdate",
format:"dd/MM/yy",
headerText:"transDate",
svyUUID:"647A9082-502E-46D9-8C00-ADE9E0586852",
width:"100"
},
{
dataprovider:"sernr",
headerText:"serNr",
svyUUID:"E8D5A7C7-9799-4236-A4AB-06E712F76E1E",
width:"150"
},
{
dataprovider:"user",
headerText:"user",
svyUUID:"A556BF3F-0CB6-4E92-82D0-477DC1F35875",
width:"100"
},
{
dataprovider:"computer",
headerText:"computer",
svyUUID:"0F3974BB-B7D9-4510-9167-49204774DF23",
width:"100"
},
{
dataprovider:"origintype",
headerText:"OriginType",
svyUUID:"0B4E2530-382C-40FD-B381-A8DCA943B5EC",
width:"100"
},
{
dataprovider:"labels",
headerText:"labels",
svyUUID:"EE4A16F1-4A45-4AE2-947F-E450E4557C18",
width:"200"
},
{
dataprovider:"total",
format:"#,###.00",
headerText:"total",
svyUUID:"B479B226-FED1-4449-82B6-BB02610F7FC3",
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
uuid:"CA4953B2-F107-4ABC-9CFF-ED3EDAF1F75E"
}
],
name:"ordenes_venta_devoluciones",
navigatorID:"-1",
onShowMethodID:"-1",
showInMenu:true,
size:"1011,792",
typeid:3,
uuid:"DDDB2DED-C7AF-4DEE-987D-109656AC400E"