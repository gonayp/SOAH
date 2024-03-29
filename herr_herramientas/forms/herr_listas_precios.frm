customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/herr_listas_precios",
encapsulation:44,
items:[
{
height:482,
partType:5,
typeid:19,
uuid:"018F767E-9787-4B5B-A254-51D1949F0FE4"
},
{
cssPosition:"80,-1,-1,222,140,20",
dataProviderID:"vl_fecha_fin",
displayType:5,
formIndex:4,
format:"dd/MM/yy",
onDataChangeMethodID:"0C5BF1D2-B88A-430D-B306-C1B7E8150646",
tabSeq:2,
typeid:4,
uuid:"45AF7D60-22DD-40BA-B7DD-1B401F8AA80E"
},
{
cssPosition:"64,-1,-1,584,43,35",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"584",
right:"-1",
top:"64",
width:"43"
},
formIndex:1,
imageStyleClass:"fas fa-sync",
location:{
x:10,
y:10
},
onActionMethodID:"B02E33EF-3E82-4601-BE98-160B6AD7659A",
tabSeq:-2,
toolTipText:"Limpiar busquedas"
},
location:"10,10",
name:"button_0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"54820AED-D10C-4173-90B8-D9B66257E973"
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
onActionMethodID:"545E322A-9CB4-40A7-945E-65D69D0DEACB",
tabSeq:-2,
toolTipText:"Volver"
},
location:"10,10",
name:"button_2",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"60850787-F35C-4214-8457-9C4EA5670DF7"
},
{
cssPosition:"60,-1,-1,77,119,20",
formIndex:3,
tabSeq:-2,
text:"Fecha Inicial",
transparent:true,
typeid:7,
uuid:"6832F493-7F63-4FAF-B8A8-A8FAC3B08041"
},
{
cssPosition:"80,-1,-1,77,140,20",
dataProviderID:"vl_fecha_ini",
displayType:5,
formIndex:2,
format:"dd/MM/yy",
onDataChangeMethodID:"0C5BF1D2-B88A-430D-B306-C1B7E8150646",
tabSeq:1,
typeid:4,
uuid:"6A87AC44-FB9A-48D4-967A-FDDCBB6C8F17"
},
{
cssPosition:"79,-1,-1,376,196,20",
dataProviderID:"vl_nombre",
formIndex:1,
location:"10,10",
onDataChangeMethodID:"0C5BF1D2-B88A-430D-B306-C1B7E8150646",
tabSeq:3,
typeid:4,
uuid:"A1F57184-3F0C-4063-A04F-4704A7596331"
},
{
cssPosition:"115,0,0,60,575,364",
formIndex:1,
json:{
columns:[
{
dataprovider:"herr_listas_precios_to_herr_equipo.calc_nombre",
headerStyleClass:"cell_left_header",
headerText:"Herramienta",
styleClass:"cell_left",
svyUUID:"ABC83ECB-75EE-4C56-A8C9-3238E0C76877",
width:"300"
},
{
dataprovider:"lp_nombre",
headerStyleClass:"cell_left_header",
headerText:"Lista de precio",
styleClass:"cell_left",
svyUUID:"6A0B94A1-0DAD-403E-B871-E556A3DDD0F1",
width:"150"
},
{
dataprovider:"lp_f_g",
format:"dd/MM/yy",
headerStyleClass:"cell_center_header",
headerText:"Fecha",
styleClass:"cell_center",
svyUUID:"C86F2B3A-58D7-4747-83E5-93036CB83D50",
width:"100"
},
{
dataprovider:"lp_precio",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Precio",
styleClass:"cell_right",
svyUUID:"27A21548-8310-4772-AE22-6DE10A50D7C8",
width:"100"
},
{
dataprovider:"lp_tipo",
headerStyleClass:"cell_left_header",
headerText:"Tipo",
styleClass:"cell_left",
svyUUID:"9BC997DC-36D8-405C-B993-7F917DF5D7CB",
valuelist:"8E3C7603-A53B-42DE-8BFF-FEA9D5F61744",
width:"150"
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
onCellDoubleClick:"CDC20384-8352-42C8-839F-22FFA91A0F21",
pageSize:0,
tabSeq:-2
},
location:"10,10",
name:"table_3",
typeName:"servoyextra-table",
typeid:47,
uuid:"CA4DDE1E-20D8-401D-8F1F-E93CCB981516"
},
{
cssPosition:"39,-1,0,0,60,443",
location:"10,10",
styleClass:"banner",
tabSeq:-2,
typeid:7,
uuid:"D759B798-2639-4C54-A734-E6E22BFCCD2D",
verticalAlignment:1
},
{
borderType:"TitledBorder,Filtros,0,0,Segoe UI,0,12,#000000",
cssPosition:"39,-1,-1,69,566,71",
lineSize:1,
location:"10,10",
typeid:21,
uuid:"DF779274-D5AC-4A83-996E-5622DD7762CE"
},
{
cssPosition:"59,-1,-1,376,195,20",
formIndex:4,
location:"10,10",
tabSeq:-2,
text:"Herramienta/Marca/Modelo",
transparent:true,
typeid:7,
uuid:"EAA4E1C2-CA12-459B-AC7E-D43B37F506EF"
},
{
cssPosition:"60,-1,-1,222,95,20",
formIndex:4,
tabSeq:-2,
text:"Fecha Final",
transparent:true,
typeid:7,
uuid:"EB3E5F7D-7A3C-4F5C-857C-D70AAFBBD2C7"
},
{
cssPosition:"0,2,-1,0,642,40",
location:"10,10",
styleClass:"banner",
tabSeq:-2,
text:"Historico de precios",
typeid:7,
uuid:"EE1789F4-7293-4641-85BA-E060B45AB472",
verticalAlignment:1
}
],
name:"herr_listas_precios",
navigatorID:"-1",
onShowMethodID:"48C5A6F2-AEC1-4ABD-8085-B89464D623E2",
showInMenu:true,
typeid:3,
uuid:"C78AC829-5EFF-4B7D-A65E-432D324B97BA"