customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/prod_productos",
encapsulation:36,
items:[
{
cssPosition:"490,-1,-1,5,150,35",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"5",
right:"-1",
top:"490",
width:"150"
},
formIndex:2,
imageStyleClass:"fas fa-times",
location:{
x:10,
y:10
},
onActionMethodID:"BDBB267C-855F-4FB6-A00B-3D24B1DF21DD",
text:"Cancelar"
},
location:"10,10",
name:"button_2",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"0A23EA8F-D6A5-4603-BCEC-EA3C4EF9D5B7"
},
{
cssPosition:"78,-1,-1,673,140,20",
dataProviderID:"vl_estado",
displayType:2,
editable:false,
formIndex:6,
onDataChangeMethodID:"E68C6CC9-1648-4BEF-B410-DB8370CCDCAB",
typeid:4,
uuid:"165B8EEF-89E2-4074-B43D-DD67FABF8F27",
valuelistID:"DF787460-AF05-4DA4-A94A-6A37E23E1B1C"
},
{
cssPosition:"60,-1,-1,387,140,20",
formIndex:4,
location:"10,10",
text:"Categoría",
transparent:true,
typeid:7,
uuid:"23E7249A-879B-41D7-B185-0B2D6A46892D"
},
{
cssPosition:"124,0,52,0,575,364",
formIndex:1,
json:{
columns:[
{
dataprovider:"producto_codigo",
headerStyleClass:"cell_center_header",
headerText:"Código",
styleClass:"cell_center",
svyUUID:"A5C15146-16D4-4710-ACEC-75011650F882",
width:"100"
},
{
dataprovider:"producto_cod_alternativo",
headerStyleClass:"cell_center_header",
headerText:"Cod. Alternativo",
styleClass:"cell_center",
svyUUID:"37F977BB-194B-4546-A6FD-9730BA165181",
width:"150"
},
{
dataprovider:"producto_nombre",
headerStyleClass:"cell_left_header",
headerText:"Producto",
styleClass:"cell_left",
svyUUID:"75FD705E-F5B6-42F4-ABBC-B21B40B048FC",
valuelist:null,
width:"200"
},
{
dataprovider:"prod_productos_to_prod_categoria.categoria_nombre",
headerStyleClass:"cell_left_header",
headerText:"Categoría",
styleClass:"cell_left",
svyUUID:"2F0A3427-CFCA-422E-86B6-EBAF4A7C328F",
valuelist:"ACE19FE9-7C0F-403B-8EAD-6ED6484D62BB",
width:"150"
},
{
dataprovider:"producto_precio_base",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Precio Base",
styleClass:"cell_right",
svyUUID:"0B652B99-C4D1-455D-B9E5-D9605B9315BC",
width:"100"
},
{
dataprovider:"producto_cod_barras",
headerStyleClass:"cell_center_header",
headerText:"Código Barras",
styleClass:"cell_center",
svyUUID:"8B864C5C-CB92-4A44-9B96-A6D0C034ED09",
width:"200"
}
],
cssPosition:{
bottom:"52",
height:"364",
left:"0",
right:"0",
top:"124",
width:"575"
},
enableColumnResize:true,
formIndex:1,
location:{
x:10,
y:10
},
onCellDoubleClick:"AFB879D8-44DE-4B00-9957-9B52659DDAB8",
pageSize:0
},
location:"10,10",
name:"table_equipos",
typeName:"servoyextra-table",
typeid:47,
uuid:"28A9C4CB-2EA0-4DB6-942C-915F46C3691C"
},
{
cssPosition:"59,-1,-1,591,67,20",
formIndex:5,
location:"10,10",
text:"Código",
transparent:true,
typeid:7,
uuid:"3A917B62-B8CF-42B2-A10F-16B1060D14F5"
},
{
cssPosition:"56,-1,-1,839,60,44",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"44",
left:"839",
right:"-1",
top:"56",
width:"60"
},
formIndex:1,
imageStyleClass:"fas fa-sync",
location:{
x:10,
y:10
},
onActionMethodID:"2C03E199-F672-482F-BC8F-200D655ED73B",
toolTipText:"Limpiar busquedas"
},
location:"10,10",
name:"button_0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"48617006-C007-4990-B9C3-731134A932E5"
},
{
cssPosition:"60,-1,-1,15,140,20",
formIndex:4,
location:"10,10",
text:"Código Alternativo",
transparent:true,
typeid:7,
uuid:"58437689-5FA6-420C-9708-1813403C4B90"
},
{
height:535,
partType:5,
typeid:19,
uuid:"620693D0-F9C8-4D2E-A540-1BC8143D9709"
},
{
cssPosition:"58,-1,-1,673,80,20",
formIndex:11,
text:"Estado",
transparent:true,
typeid:7,
uuid:"747B32EC-375A-432A-A6A0-CB83F380D808"
},
{
cssPosition:"80,-1,-1,185,196,20",
dataProviderID:"vl_nombre",
formIndex:1,
location:"10,10",
onDataChangeMethodID:"E68C6CC9-1648-4BEF-B410-DB8370CCDCAB",
typeid:4,
uuid:"855C8F1D-3BF5-4960-B1CD-1FABAADAA373"
},
{
cssPosition:"80,-1,-1,15,160,20",
dataProviderID:"vl_cod_alterna",
formIndex:1,
location:"10,10",
onDataChangeMethodID:"E68C6CC9-1648-4BEF-B410-DB8370CCDCAB",
typeid:4,
uuid:"975F8D7F-D562-4AE0-922E-55281EA4B68F"
},
{
cssPosition:"60,-1,-1,185,140,20",
formIndex:4,
location:"10,10",
text:"Nombre",
transparent:true,
typeid:7,
uuid:"9B4E04DD-F47E-4963-8C2E-F67DB58DEEEA"
},
{
cssPosition:"0,0,-1,0,642,40",
location:"10,10",
styleClass:"banner",
text:"Productos",
typeid:7,
uuid:"9C2ECC4A-385E-4C90-AA47-02867F047306",
verticalAlignment:1
},
{
cssPosition:"-1,0,0,0,642,53",
location:"10,10",
styleClass:"banner",
typeid:7,
uuid:"9F29825F-F867-4EE6-B42F-1B02967E109E",
verticalAlignment:1
},
{
borderType:"TitledBorder,Filtros,0,0,Segoe UI,0,12,#000000",
cssPosition:"39,-1,-1,5,906,71",
lineSize:1,
location:"10,10",
name:"rec_filtros",
typeid:21,
uuid:"DEC915E0-CADF-4097-BD7C-E4EAEDEFC672"
},
{
cssPosition:"79,-1,-1,591,73,20",
dataProviderID:"vl_codigo",
formIndex:2,
location:"10,10",
onDataChangeMethodID:"E68C6CC9-1648-4BEF-B410-DB8370CCDCAB",
typeid:4,
uuid:"E8F06BC0-4BC1-4BB5-BB94-F611F76A6ADC"
},
{
cssPosition:"80,-1,-1,387,196,20",
dataProviderID:"vl_categoria",
displayType:2,
editable:false,
formIndex:1,
location:"10,10",
onDataChangeMethodID:"E68C6CC9-1648-4BEF-B410-DB8370CCDCAB",
typeid:4,
uuid:"F1106A74-4256-4CFE-AF1C-14A3FEE99204",
valuelistID:"DD55DE8C-F374-430E-BCCC-490C6F9231DB"
},
{
cssPosition:"490,-1,-1,160,150,35",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"160",
right:"-1",
top:"490",
width:"150"
},
formIndex:2,
imageStyleClass:"fas fa-bolt",
location:{
x:10,
y:10
},
onActionMethodID:"B40BC8FC-8667-4AAC-BB6B-C3728B79D1B9",
text:"Añadir"
},
location:"10,10",
name:"btn_0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"FCFA9C3D-E20B-4B0A-B464-F1E7AAB5CAC0"
}
],
name:"devolucion_ver_ventas_nuevo_prod",
navigatorID:"-1",
onShowMethodID:"3E6EE5D1-ABC9-4AEB-9E65-2922C30E8F11",
showInMenu:true,
size:"926,535",
typeid:3,
uuid:"FCC4FE32-E05E-49EE-A708-333EE6687A47"