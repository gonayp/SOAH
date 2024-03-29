customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/prod_categoria",
encapsulation:36,
items:[
{
cssPosition:"39,-1,0,0,60,443",
location:"10,10",
styleClass:"banner",
typeid:7,
uuid:"04082304-7B05-4111-9F09-45ACF8F45492",
verticalAlignment:1
},
{
cssPosition:"80,-1,-1,78,196,20",
dataProviderID:"vl_nombre",
formIndex:1,
location:"10,10",
onDataChangeMethodID:"C5A740E1-8149-4F8A-9155-9D7C3F5FA8B1",
typeid:4,
uuid:"0C9B6636-CCF4-45E4-96E8-B449F8C255A6"
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
onActionMethodID:"B40565F9-EFAC-4521-9862-6A9C7BBE3326",
toolTipText:"Volver"
},
location:"10,10",
name:"button_2",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"0CE3BC58-9073-4FB4-BFC0-E5F5E4AAA7D6"
},
{
cssPosition:"115,0,0,60,575,364",
formIndex:1,
json:{
columns:[
{
dataprovider:"categoria_codigo",
headerStyleClass:"cell_center_header",
headerText:"Código",
styleClass:"cell_center",
svyUUID:"EFB9C3AA-D6FE-44B1-8685-685C56C33BA3",
width:"100"
},
{
dataprovider:"categoria_nombre",
headerStyleClass:"cell_left_header",
headerText:"Nombre",
styleClass:"cell_left",
svyUUID:"66146480-22CD-4A29-B362-6EF2572E5707",
width:"200"
},
{
dataprovider:"categoria_observacion",
headerStyleClass:"cell_left_header",
headerText:"Observaciones",
styleClass:"cell_left",
svyUUID:"EB2FFD4E-D860-4E27-8ABC-1735610D55F9",
width:"300"
}
],
cssPosition:{
bottom:"0",
height:"364",
left:"60",
right:"0",
top:"115",
width:"575"
},
enableColumnResize:true,
formIndex:1,
location:{
x:10,
y:10
},
onCellDoubleClick:"D0266BE2-26EA-4115-8580-6F1A082988E4",
pageSize:0
},
location:"10,10",
name:"table_3",
typeName:"servoyextra-table",
typeid:47,
uuid:"2288109F-B76C-47D4-8B89-151701A8912A"
},
{
cssPosition:"0,2,-1,0,642,40",
location:"10,10",
styleClass:"banner",
text:"Categorías de producto",
typeid:7,
uuid:"3DAA6FD4-AC39-457E-A4D1-F47861CDBE61",
verticalAlignment:1
},
{
cssPosition:"65,-1,-1,485,43,35",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"485",
right:"-1",
top:"65",
width:"43"
},
formIndex:1,
imageStyleClass:"fas fa-sync",
location:{
x:10,
y:10
},
onActionMethodID:"58B8674A-22D8-40DB-ABF3-8C84B3225FD7",
toolTipText:"Limpiar busquedas"
},
location:"10,10",
name:"button_0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"68DD9C76-E074-498C-9B71-B82612E66EA3"
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
imageStyleClass:"fas fa-plus",
location:{
x:10,
y:10
},
onActionMethodID:"1200645D-E45D-47E8-A9A0-E1F2F4413CFD",
toolTipText:"Nuevo"
},
location:"10,10",
name:"btn_nuevo",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"74A0E159-46FD-4EDE-B153-33B5F56D2592"
},
{
height:482,
partType:5,
typeid:19,
uuid:"7FC96F3F-23A4-4F66-9228-84E887729737"
},
{
borderType:"TitledBorder,Filtros,0,0,Segoe UI,0,12,#000000",
cssPosition:"39,-1,-1,69,467,71",
lineSize:1,
location:"10,10",
typeid:21,
uuid:"8187E33B-9B06-4A68-A8C3-F42DECB0F3E7"
},
{
cssPosition:"60,-1,-1,78,140,20",
formIndex:4,
location:"10,10",
text:"Nombre",
transparent:true,
typeid:7,
uuid:"C4008FE6-3750-4E14-B752-C5D7475E10BE"
}
],
name:"prod_categorias",
navigatorID:"-1",
onShowMethodID:"B1EC7E1A-BD8B-4BFF-9C94-C2029F536244",
showInMenu:true,
typeid:3,
uuid:"194BAEA6-4641-4EF7-B4F6-866B28A6E321"