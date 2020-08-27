customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/logisticadh/salesorderitemrow",
encapsulation:108,
items:[
{
cssPosition:"166,0,0,0,642,116",
items:[
{
containsFormID:"DDDB2DED-C7AF-4DEE-987D-109656AC400E",
location:"80,202",
relationName:"salesorderitemrow_to_rentalreturn_1_ordenventa_to_devolucion",
text:"Devolucion",
typeid:15,
uuid:"6D8C6B13-461F-4098-9293-334668D5EA1B"
},
{
containsFormID:"9299D8B3-E628-4AAB-BAE4-F8385DB7C475",
location:"0,202",
relationName:"salesorderitemrow_to_rental_1_ordenventa_to_alquiler",
text:"Alquiler",
typeid:15,
uuid:"F5059EEE-DDE7-4E69-8E26-CC17EF8EF7B9"
}
],
name:"tabs",
printable:false,
transparent:true,
typeid:16,
uuid:"32456B95-BE86-4E3F-863F-78366330FBFD"
},
{
background:"#808040",
cssPosition:"2,0,-1,0,80,20",
fontType:"1,1,12,Dialog",
text:"Items de orden de venta",
typeid:7,
uuid:"8B19DB61-4539-4DC8-93A9-1357735AAAA9"
},
{
cssPosition:"28,0,-1,0,636,133",
json:{
columns:[
{
dataprovider:"internalid",
headerText:"internalID",
svyUUID:"074567FA-A2C9-4603-A03D-8A92DAAF189A",
width:"80"
},
{
dataprovider:"masterid",
headerText:"masterID",
svyUUID:"324E6B32-FEB9-4B4C-A85C-D8B569F5BF31",
width:"100"
},
{
dataprovider:"rowid",
headerText:"rowID",
svyUUID:"C23E22B0-1ED5-4009-A52A-3C524D9318CD",
width:"100"
},
{
dataprovider:"salesorderitemrow_to_salesorder_1_item_to_ordenventa.sernr",
headerText:"Orden Venta",
svyUUID:"0B953640-3712-47DD-BF94-23DAE5431558",
width:"150"
},
{
dataprovider:"artcode",
headerText:"artCode",
svyUUID:"EF94ADFF-7534-45F3-8EAA-27DA33077C00",
width:"100"
},
{
dataprovider:"name",
headerText:"name",
svyUUID:"FCD94EA1-5130-46E2-AD72-81ADB3ABF33B",
width:"250"
},
{
dataprovider:"qty",
headerText:"qty",
svyUUID:"D3E8232B-3596-4FD1-8D94-4540500B7263",
width:"100"
},
{
dataprovider:"rownr",
headerText:"rowNr",
svyUUID:"B4A1A5B8-F321-4989-93DA-8044678435BA",
width:"100"
},
{
dataprovider:"serialnr",
headerText:"serialNr",
svyUUID:"A5A3F198-9958-4418-9811-AD04F4374D32",
width:"100"
},
{
dataprovider:"price",
format:"#,###.00",
headerText:"Price",
svyUUID:"C0DDC1E7-D10C-4D09-9D2B-200A07B9FCE2",
width:"150"
},
{
dataprovider:"rowtotal",
format:"#,###.00",
headerText:"RowTotal",
svyUUID:"A03BAAFB-0A96-4EE0-AECE-B56111C4C0A1",
width:"150"
},
{
dataprovider:"gmargin",
format:"#,###.00",
headerText:"Gmargin",
svyUUID:"DD995ED3-B93A-439F-BC42-DA8DD5E941CB",
width:"150"
},
{
dataprovider:"vatprice",
format:"#,###.00",
headerText:"VATprice",
svyUUID:"093AE925-3646-4039-8D7F-3D8C1AB40032",
width:"150"
},
{
dataprovider:"origintype",
headerText:"originType",
svyUUID:"C2A17787-55E5-4FE0-934E-3933DF730A8B",
width:"150"
},
{
dataprovider:"originrownr",
headerText:"OriginRowNumber",
svyUUID:"4F7CFF71-FF28-46C6-B2DE-1DC59329F0DC",
width:"150"
},
{
dataprovider:"planshiprow",
format:"dd/MM/yyyy",
headerText:"planShipRow",
svyUUID:"F5ABC594-1EBB-49F3-8EA0-5F44F002FF52",
width:"150"
},
{
dataprovider:"rownet",
headerText:"rowNet",
svyUUID:"2EF16C3C-B911-4A1C-985E-F51858F2687D",
width:"150"
},
{
dataprovider:"originsernr",
headerText:"originSerialNr",
svyUUID:"13EACFEF-CF9B-4EDD-9BC4-8B8A3861B72A",
width:"150"
}
],
cssPosition:{
bottom:"-1",
height:"133",
left:"0",
right:"0",
top:"28",
width:"636"
},
responsiveHeight:null
},
name:"table_1",
typeName:"servoyextra-table",
typeid:47,
uuid:"8CDA0768-26D5-4EBC-897D-291174C01BEA"
},
{
height:284,
partType:5,
typeid:19,
uuid:"F90AE394-26E0-4958-B60F-63941DA4C0A9"
}
],
name:"alquileres_ordenventa_item",
navigatorID:"-1",
showInMenu:true,
size:"642,480",
typeid:3,
uuid:"85E00C4E-351A-4D08-AF3B-465387D42771"