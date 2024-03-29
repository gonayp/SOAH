customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/vent_comprobantes",
encapsulation:4,
items:[
{
cssPosition:"110,-1,-1,150,263,20",
dataProviderID:"cliente_id",
displayType:10,
editable:false,
name:"f_cliente",
onDataChangeMethodID:"-1",
tabSeq:1,
typeid:4,
uuid:"04A6159D-DBB6-4B44-BEAC-9D740C4BC2EF",
valuelistID:"AC2E1B90-8F1D-4F2F-8176-0F118C8B06F6"
},
{
height:523,
partType:5,
typeid:19,
uuid:"1080C1D7-B47B-4AAD-9167-87ECBB70319B"
},
{
cssPosition:"145,0,460,2,463,305",
formIndex:14,
items:[
{
containsFormID:"996CE487-B1FD-46F1-9FF6-D98783D9537F",
location:"324,-67",
relationName:"vent_comprobantes_anticipo_to_vent_comprobantes_recibo",
text:"Comprobantes",
typeid:15,
uuid:"25007F38-3092-4204-88ED-4BC95013C46D"
}
],
name:"tabs",
printable:false,
transparent:true,
typeid:16,
uuid:"11E41630-C8D6-4A25-B485-7EC7AE1CA8E6"
},
{
cssPosition:"65,-1,-1,707,46,20",
dataProviderID:"comp_id",
editable:false,
horizontalAlignment:4,
typeid:4,
uuid:"2B50DD5E-3F7F-44AE-86AD-66337190E7C3"
},
{
cssPosition:"45,-1,-1,5,59,20",
formIndex:3,
text:"PV",
transparent:true,
typeid:7,
uuid:"3CCE1091-BE51-4FB1-A26C-1EB734B289A3"
},
{
cssPosition:"65,-1,-1,418,140,20",
dataProviderID:"comp_estado_id",
editable:false,
typeid:4,
uuid:"4211B770-1505-49C1-AB64-907C576495A9",
valuelistID:"315CF69D-3DF4-474B-9752-158384395DEB"
},
{
cssPosition:"45,-1,-1,244,80,20",
formIndex:15,
text:"Tipo",
transparent:true,
typeid:7,
uuid:"455FF5E9-6C00-4113-A2BC-9D81CDE699C6"
},
{
cssPosition:"65,-1,-1,174,63,20",
dataProviderID:"comp_codigo",
editable:false,
horizontalAlignment:0,
typeid:4,
uuid:"58CD30D4-0CCE-4469-A3E3-C6DE66D329E0"
},
{
cssPosition:"479,-1,-1,10,150,35",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"10",
right:"-1",
top:"479",
width:"150"
},
formIndex:1,
imageStyleClass:"fas fa-undo-alt",
location:{
x:10,
y:10
},
onActionMethodID:"BABA9B93-07EE-493B-A254-D3B500CE061B",
text:"Volver"
},
location:"10,10",
name:"button_2",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"5F48FBAB-AE36-4797-B82A-70366505F69D"
},
{
cssPosition:"45,-1,-1,418,80,20",
formIndex:18,
text:"Estado",
transparent:true,
typeid:7,
uuid:"5FCD9D3A-2E96-4523-89CE-37202D89E94D"
},
{
cssPosition:"111,-1,-1,5,140,20",
dataProviderID:"comp_fecha_emision",
editable:false,
format:"dd/MM/yy HH:mm",
name:"f_fecha",
onDataChangeMethodID:"-1",
tabSeq:3,
typeid:4,
uuid:"79111D77-1EF2-44A2-A927-39E77C9CD1F7"
},
{
cssPosition:"65,-1,-1,51,115,20",
dataProviderID:"comp_numero",
editable:false,
horizontalAlignment:0,
tabSeq:-2,
typeid:4,
uuid:"7A3856AE-EB6C-49F2-B7CC-DD9EFBA7D80D"
},
{
cssPosition:"90,-1,-1,150,80,20",
formIndex:4,
tabSeq:-2,
text:"Cliente",
transparent:true,
typeid:7,
uuid:"8C72766B-C213-40D5-BAC8-A3F6D1FBA5CF"
},
{
cssPosition:"65,-1,-1,5,36,20",
dataProviderID:"comp_pv",
editable:false,
horizontalAlignment:0,
typeid:4,
uuid:"9381B614-16A8-42ED-8D34-E1950A5DC592",
valuelistID:"9FEB7024-5746-401F-BECE-F2404FC96AEC"
},
{
cssPosition:"45,-1,-1,707,80,20",
formIndex:17,
text:"ID",
transparent:true,
typeid:7,
uuid:"970124ED-6983-4781-91E9-551380F474E0"
},
{
cssPosition:"45,-1,-1,174,63,20",
formIndex:3,
text:"Código",
transparent:true,
typeid:7,
uuid:"99477666-81FA-4ADE-89E7-B5F224D9544A"
},
{
cssPosition:"-1,-1,438,573,98,20",
dataProviderID:"comp_imp_total",
editable:false,
formIndex:1,
format:"#,###.00",
horizontalAlignment:4,
typeid:4,
uuid:"B08356F5-D80A-412C-8834-1AD390E3EF57"
},
{
cssPosition:"45,-1,-1,51,80,20",
formIndex:3,
tabSeq:-2,
text:"Número",
transparent:true,
typeid:7,
uuid:"BB0A8E4F-7522-4416-A248-2A396D178887"
},
{
cssPosition:"464,0,-1,0,642,59",
location:"10,10",
styleClass:"banner",
typeid:7,
uuid:"C92F62BD-9FDC-4601-BDD5-74E99F82E799",
verticalAlignment:1
},
{
cssPosition:"91,-1,-1,5,80,20",
formIndex:5,
tabSeq:-2,
text:"Fecha",
transparent:true,
typeid:7,
uuid:"D119B0AD-F2DF-427B-9E60-208025F36B94"
},
{
cssPosition:"0,0,-1,0,642,40",
styleClass:"banner",
tabSeq:-2,
text:"Detalle de anticipo",
typeid:7,
uuid:"E58879C7-1B79-4A16-B6A8-FD6B22BF93B4",
verticalAlignment:1
},
{
cssPosition:"65,-1,-1,244,169,20",
dataProviderID:"comp_codigo",
editable:false,
typeid:4,
uuid:"F55ADC5D-A7B7-433F-9020-D635F1260A62",
valuelistID:"EFFD7044-4535-41C0-9D9C-EE46585B5DDB"
},
{
cssPosition:"-1,-1,458,573,98,20",
text:"Total",
transparent:true,
typeid:7,
uuid:"FFC4D1ED-DC20-4813-9927-6670F5D7E1E3"
}
],
name:"anticipos_detalle",
namedFoundSet:"separate_recibos",
navigatorID:"-1",
onShowMethodID:"6AC12E0A-B0EC-4B09-819F-97B1EBF21564",
scrollbars:32,
showInMenu:true,
size:"830,604",
typeid:3,
uuid:"FCA002F8-1CAA-432B-BAEA-84B64B51A606"