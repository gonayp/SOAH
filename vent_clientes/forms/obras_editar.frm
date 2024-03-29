customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/vent_obras",
encapsulation:44,
items:[
{
cssPosition:"45,-1,-1,175,80,20",
formIndex:4,
tabSeq:-2,
text:"Nombre",
transparent:true,
typeid:7,
uuid:"0BE8216F-BD25-4056-B1B6-24C3023F5915"
},
{
cssPosition:"95,-1,-1,370,80,20",
formIndex:8,
tabSeq:-2,
text:"Estado",
transparent:true,
typeid:7,
uuid:"14C365EB-2869-445F-AAD1-3BD7C72F0249"
},
{
cssPosition:"115,-1,-1,370,140,20",
dataProviderID:"obra_estado",
displayType:2,
editable:false,
tabSeq:6,
typeid:4,
uuid:"1A2B580D-0E87-4880-8D36-DACE763E4715",
valuelistID:"8468D3AC-42D7-48F4-9CA8-FC5E5A9247B7"
},
{
cssPosition:"0,0,-1,0,642,40",
location:"10,10",
styleClass:"banner",
tabSeq:-2,
text:"Editar Obra",
typeid:7,
uuid:"1FED721F-F4E9-463A-965A-DFCFDB06062E",
verticalAlignment:1
},
{
cssPosition:"120,-1,-1,5,45,35",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"5",
right:"-1",
top:"120",
width:"45"
},
formIndex:2,
imageStyleClass:"fas fa-trash-alt",
location:{
x:10,
y:10
},
onActionMethodID:"EAA8FD18-139F-4996-8332-B0FA40C9C808",
tabSeq:-2,
toolTipText:"Borrar"
},
location:"10,10",
name:"btn_borrar",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"34FAA8FB-2E44-4142-BA6F-DB173C796299"
},
{
cssPosition:"80,-1,-1,5,45,35",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"5",
right:"-1",
top:"80",
width:"45"
},
formIndex:2,
imageStyleClass:"fas fa-save",
location:{
x:10,
y:10
},
onActionMethodID:"B820A9F0-21AE-4AE9-AF30-F00F51975AA0",
tabSeq:9,
toolTipText:"Guardar"
},
location:"10,10",
name:"btn_grabar",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"41B2D2C9-7219-40A0-9DE2-FA9F1553CF59"
},
{
cssPosition:"65,-1,-1,65,100,20",
dataProviderID:"obra_codigo",
format:"####",
horizontalAlignment:4,
tabSeq:1,
typeid:4,
uuid:"44795BFB-5B5D-4366-9C38-1428EDCA5D30"
},
{
cssPosition:"165,-1,-1,65,215,20",
dataProviderID:"cliente_id",
displayType:10,
tabSeq:7,
typeid:4,
uuid:"4F329D11-7E66-46A9-BBBD-05945252C818",
valuelistID:"AC2E1B90-8F1D-4F2F-8176-0F118C8B06F6"
},
{
cssPosition:"115,-1,-1,215,140,20",
dataProviderID:"obra_fecha_fin",
displayType:5,
format:"dd/MM/yy",
horizontalAlignment:0,
tabSeq:5,
typeid:4,
uuid:"5DA0EB8A-C39A-4C04-9F87-275C2840DFCC"
},
{
cssPosition:"95,-1,-1,65,80,20",
formIndex:5,
tabSeq:-2,
text:"Fecha Inicio",
transparent:true,
typeid:7,
uuid:"65460268-CD50-4273-9178-E52394AFE08A"
},
{
cssPosition:"45,-1,-1,65,80,20",
formIndex:3,
tabSeq:-2,
text:"Código",
transparent:true,
typeid:7,
uuid:"8BAC2035-D4F4-43F8-A333-CD83A987F973"
},
{
cssPosition:"215,-1,-1,65,445,59",
dataProviderID:"obra_observacion",
displayType:1,
scrollbars:32,
tabSeq:8,
typeid:4,
uuid:"9297D13C-7A4A-443F-A89A-AD7919FA0C99"
},
{
cssPosition:"65,-1,-1,430,80,20",
dataProviderID:"obra_id",
editable:false,
tabSeq:3,
typeid:4,
uuid:"95660C09-21B2-4E4F-841F-20107E63F65A"
},
{
cssPosition:"40,-1,-1,5,45,35",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"5",
right:"-1",
top:"40",
width:"45"
},
formIndex:1,
imageStyleClass:"fas fa-undo-alt",
location:{
x:10,
y:10
},
onActionMethodID:"6B1C4AA1-D17A-453A-AF34-E957A8605B5E",
tabSeq:-2,
toolTipText:"Volver"
},
location:"10,10",
name:"btn_volver",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"9A82AB42-EB1A-4967-B26E-55899DE2B19E"
},
{
cssPosition:"40,-1,0,0,60,59",
location:"10,10",
styleClass:"banner",
tabSeq:-2,
typeid:7,
uuid:"A83B7CA3-3F6C-4953-8521-985516F6A7CA",
verticalAlignment:1
},
{
cssPosition:"45,-1,-1,430,80,20",
formIndex:7,
tabSeq:-2,
text:"Obra Id",
transparent:true,
typeid:7,
uuid:"AD91F5AA-5390-4BDA-88FD-8161D87CFC76"
},
{
cssPosition:"145,-1,-1,65,80,20",
formIndex:7,
tabSeq:-2,
text:"Cliente",
transparent:true,
typeid:7,
uuid:"B03CAB35-904F-4AFD-B9A8-F6389D0AA743"
},
{
height:299,
partType:5,
typeid:19,
uuid:"B76432EB-A3F3-4504-95DA-131E75D0AA34"
},
{
cssPosition:"65,-1,-1,175,250,20",
dataProviderID:"obra_nombre",
name:"f_nombre",
tabSeq:2,
typeid:4,
uuid:"BC5F347D-D9DA-4F27-8DB4-8C93D3C3131B"
},
{
cssPosition:"195,-1,-1,65,128,20",
formIndex:6,
tabSeq:-2,
text:"Observaciones",
transparent:true,
typeid:7,
uuid:"C5B05CA8-0A42-4730-953D-2437AFA51C42"
},
{
cssPosition:"95,-1,-1,215,80,20",
formIndex:9,
tabSeq:-2,
text:"Fecha Fin",
transparent:true,
typeid:7,
uuid:"DD2C2733-B93B-4A33-B75F-F56458D13833"
},
{
cssPosition:"115,-1,-1,65,140,20",
dataProviderID:"obra_fecha_inicio",
displayType:5,
format:"dd/MM/yy",
horizontalAlignment:0,
tabSeq:4,
typeid:4,
uuid:"E36A3AAE-5E75-421F-A645-FD041FCF8F42"
}
],
name:"obras_editar",
navigatorID:"-1",
onShowMethodID:"DC97E917-CDFD-4A35-88BE-6FEB4FC14F69",
scrollbars:36,
showInMenu:true,
size:"529,299",
typeid:3,
uuid:"3224E0BA-F729-498B-AA73-CEB74FDB679C"