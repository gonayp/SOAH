customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/logisticadh/salesorder",
encapsulation:108,
items:[
{
cssPosition:"48,-1,-1,777,140,20",
dataProviderID:"vl_fecha_ini",
displayType:5,
formIndex:2,
format:"dd/MM/yy|mask",
onDataChangeMethodID:"5732A252-DE65-4AFE-ACF4-D5886FDA1EFC",
typeid:4,
uuid:"0C928D92-DCB0-408A-B103-CB75767346C6"
},
{
cssPosition:"29,-1,-1,629,80,19",
formIndex:6,
text:"Nombre",
transparent:true,
typeid:7,
uuid:"17CD693B-24D9-402D-B113-0A766CB8D89D"
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
onActionMethodID:"0A498434-C56F-4523-AED7-35E9B187F43C",
tabSeq:-2,
text:"Volver"
},
name:"btn_nuevo_clientec",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"3AF6C2C9-4278-4F14-A067-B01F86891EFA"
},
{
cssPosition:"8,-1,-1,202,318,79",
fontType:"0,0,31,Dialog",
text:"Ordenes de Venta",
typeid:7,
uuid:"45ADB3A4-64EB-4F89-97B1-7D5356EDF693"
},
{
cssPosition:"48,-1,-1,922,140,20",
dataProviderID:"vl_fecha_fin",
displayType:5,
formIndex:4,
format:"dd/MM/yy|mask",
onDataChangeMethodID:"5732A252-DE65-4AFE-ACF4-D5886FDA1EFC",
typeid:4,
uuid:"4F1F1188-FD42-4C37-AF51-295B59BF562B"
},
{
cssPosition:"558,0,0,0,637,145",
items:[
{
containsFormID:"85E00C4E-351A-4D08-AF3B-465387D42771",
location:"249,582",
relationName:"salesorder_to_salesorderitemrow_1_ordenventa_to_item",
text:"Items",
typeid:15,
uuid:"E2609027-1FC9-4074-880C-CBE372E5ED4C"
}
],
name:"tabs",
printable:false,
transparent:true,
typeid:16,
uuid:"560CAF90-5B51-4AC6-966C-AF936BE45DEE"
},
{
cssPosition:"48,-1,-1,1072,140,19",
dataProviderID:"vl_origen",
displayType:2,
editable:false,
onDataChangeMethodID:"5732A252-DE65-4AFE-ACF4-D5886FDA1EFC",
typeid:4,
uuid:"62DA001D-574B-49A6-874C-076B872E247E",
valuelistID:"12F174C4-9C9C-45F2-A176-1E55ACD8A9C6"
},
{
cssPosition:"100,1,-1,0,636,455",
json:{
columns:[
{
dataprovider:"internalid",
headerText:"internalID",
svyUUID:"9CD72C2C-54BD-4117-AB9F-909277B7D956",
width:"100"
},
{
dataprovider:"custcode",
headerText:"custCode",
svyUUID:"2AE96F8E-8F7A-411C-858B-953CD8B2E083",
width:"100"
},
{
dataprovider:"salesorder_to_customer_1_ordenventa_to_cliente.name",
headerText:"Nombre Cliente",
svyUUID:"8B303D52-52D1-42C9-9427-20F2A8C7A6AE",
width:"250"
},
{
dataprovider:"status",
headerText:"status",
svyUUID:"BF91899C-68A3-444F-84F7-EE29968AE1D0",
width:"100"
},
{
dataprovider:"calc_hora",
headerText:"hora",
svyUUID:"FC23E48D-64B3-4440-99AB-2AC04AD38853",
width:"100"
},
{
dataprovider:"transdate",
format:"dd/MM/yy",
headerText:"transDate",
svyUUID:"A2805FBD-00BD-47E9-A796-21560DA86A1F",
width:"100"
},
{
dataprovider:"sernr",
headerText:"serNr",
svyUUID:"E15EAA77-4D66-4312-9FF1-E8C518E9421B",
width:"150"
},
{
dataprovider:"gmargin",
format:"#,###.00",
headerText:"gMargin",
svyUUID:"F5C34C95-3ACC-4071-B69E-6209A2510492",
width:"150"
},
{
dataprovider:"vattotal",
format:"#,###.00",
headerText:"VatTotal",
svyUUID:"8C26FFBA-E8A8-4394-B38F-AA0FF5BFD199",
width:"150"
},
{
dataprovider:"user",
headerText:"user",
svyUUID:"F668CF91-9A60-41EA-AEB9-25DF455A076E",
width:"100"
},
{
dataprovider:"computer",
headerText:"computer",
svyUUID:"6E3CE5F2-278E-40DE-9705-9232217C583A",
width:"100"
},
{
dataprovider:"subtotal",
format:"#,###.00",
headerText:"subtotal",
svyUUID:"6AD910B4-3FAB-4F6F-828D-56F25942F49E",
width:"150"
},
{
dataprovider:"taxregnr",
headerText:"taxregNr",
svyUUID:"BA4C29D4-250C-44E6-8077-1B1F72C82094",
width:"150"
},
{
dataprovider:"origintype",
headerText:"OriginType",
svyUUID:"BEF1F558-BD1C-4AFD-8C21-C7FBCB01BF14",
width:"100"
},
{
dataprovider:"origintype",
headerText:"Origen",
svyUUID:"DBE09160-AD92-46EA-BFF6-C50C8517E107",
valuelist:"12F174C4-9C9C-45F2-A176-1E55ACD8A9C6",
width:"150"
},
{
dataprovider:"labels",
headerText:"labels",
svyUUID:"DC8DF48A-CA98-4748-BD66-8068277CBA13",
width:"200"
},
{
dataprovider:"duedate",
format:"dd/MM/yyyy",
headerText:"dueDate",
svyUUID:"218E7801-64AE-4DAA-80B4-BFD971041657",
width:"150"
},
{
dataprovider:"fullinvoiced",
headerText:"fullInvoice",
svyUUID:"B8C1426A-B82F-4315-BE0C-A807713C8FBB",
width:"150"
},
{
dataprovider:"total",
format:"#,###.00",
headerText:"total",
svyUUID:"AF2AAE92-63DD-44F2-8DCC-4B7D75DD9FF5",
width:"150"
},
{
dataprovider:"closed",
headerText:"closed",
svyUUID:"C0D35122-97EF-421A-8315-0A3D7D2B757C",
width:"150"
},
{
dataprovider:"payterm",
headerText:"payTerm",
svyUUID:"F460C5DF-1813-4EA9-B50F-EA043B4C87AE",
width:"150"
},
{
dataprovider:"originnr",
headerText:"originNr",
svyUUID:"D89888DC-2172-45AD-B527-94CFAC829DFD",
width:"150"
}
],
cssPosition:{
bottom:"-1",
height:"455",
left:"0",
right:"1",
top:"100",
width:"636"
},
pageSize:null
},
name:"table_1",
typeName:"servoyextra-table",
typeid:47,
uuid:"7D700611-A685-410C-8022-99ABA66E6C2F"
},
{
cssPosition:"28,-1,-1,777,119,20",
formIndex:3,
text:"Fecha Inicial",
transparent:true,
typeid:7,
uuid:"8BB88F28-9241-4ED1-8C87-900D1FCB487B"
},
{
cssPosition:"49,-1,-1,529,80,19",
dataProviderID:"vl_codigo",
onDataChangeMethodID:"5732A252-DE65-4AFE-ACF4-D5886FDA1EFC",
typeid:4,
uuid:"B881574A-3142-43D8-AA75-CCDEC9B4C3EA"
},
{
cssPosition:"49,-1,-1,629,140,19",
dataProviderID:"vl_nombre",
onDataChangeMethodID:"5732A252-DE65-4AFE-ACF4-D5886FDA1EFC",
typeid:4,
uuid:"C3778B1C-9B23-4919-9F54-A97E196B4904"
},
{
cssPosition:"28,-1,-1,1072,80,19",
formIndex:6,
text:"Origen",
transparent:true,
typeid:7,
uuid:"C6F2AE97-2D26-4A1B-A36C-3B69AC548005"
},
{
cssPosition:"29,-1,-1,529,80,19",
formIndex:5,
text:"Codigo",
transparent:true,
typeid:7,
uuid:"CBB465B4-2587-4E8A-9D96-7EA107B5AAC5"
},
{
height:706,
partType:5,
typeid:19,
uuid:"D7F3B141-7D51-4BDE-8812-4F26D4A7FCAC"
},
{
cssPosition:"28,-1,-1,922,95,20",
formIndex:4,
text:"Fecha Final",
transparent:true,
typeid:7,
uuid:"EE720C1B-D686-4320-A49D-696231D0C4A2"
}
],
name:"ordenes_venta",
navigatorID:"-1",
onShowMethodID:"6B340BC7-D963-4B1C-9FFF-95A74369B9D4",
showInMenu:true,
size:"1250,792",
typeid:3,
uuid:"001264D9-B298-4695-8362-B62787F5A442"