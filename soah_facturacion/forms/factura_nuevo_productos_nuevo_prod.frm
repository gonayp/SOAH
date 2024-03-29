customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/prod_productos",
encapsulation:36,
items:[
{
cssPosition:"60,-1,-1,15,140,20",
formIndex:8,
location:"10,10",
text:"Código Alternativo",
transparent:true,
typeid:7,
uuid:"07AF8786-A512-4907-8C49-BCA40B43239C"
},
{
borderType:"TitledBorder,Filtros,0,0,Segoe UI,0,12,#000000",
cssPosition:"39,-1,-1,5,906,71",
formIndex:2,
lineSize:1,
location:"10,10",
name:"rec_filtros",
typeid:21,
uuid:"150CC8E9-780A-41ED-9674-C490080AD02A"
},
{
cssPosition:"80,-1,-1,185,196,20",
dataProviderID:"vl_nombre",
formIndex:5,
location:"10,10",
onDataChangeMethodID:"ACE25657-B49F-4803-A54B-913AB9C87505",
typeid:4,
uuid:"18BB53E8-FA52-4709-BB14-307E6FEA6390"
},
{
cssPosition:"56,-1,-1,839,60,44",
json:{
cssPosition:{
bottom:"-1",
height:"44",
left:"839",
right:"-1",
top:"56",
width:"60"
},
formIndex:0,
imageStyleClass:"fas fa-sync",
location:{
x:10,
y:10
},
onActionMethodID:"64151F63-7E8C-45F7-AC79-4647023302C6",
toolTipText:"Limpiar busquedas"
},
location:"10,10",
name:"button_0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"1911EF76-4F76-4E0A-8AD9-B7E6C8510BD7"
},
{
cssPosition:"79,-1,-1,591,73,20",
dataProviderID:"vl_codigo",
formIndex:6,
location:"10,10",
onDataChangeMethodID:"ACE25657-B49F-4803-A54B-913AB9C87505",
typeid:4,
uuid:"2DA494AA-DC1C-421F-BE9F-44998D9B1790"
},
{
cssPosition:"59,-1,-1,591,67,20",
formIndex:10,
location:"10,10",
text:"Código",
transparent:true,
typeid:7,
uuid:"307CD138-A4BF-4F0A-9D46-8A3101DFAE90"
},
{
cssPosition:"0,0,-1,0,642,40",
formIndex:1,
location:"10,10",
styleClass:"banner",
text:"Productos",
typeid:7,
uuid:"3112A2E2-AC70-4FC2-AEB0-88681419772B",
verticalAlignment:1
},
{
cssPosition:"80,-1,-1,387,196,20",
dataProviderID:"vl_categoria",
displayType:2,
editable:false,
formIndex:3,
location:"10,10",
onDataChangeMethodID:"ACE25657-B49F-4803-A54B-913AB9C87505",
typeid:4,
uuid:"3A963E91-4551-4609-B495-2C244143B17D",
valuelistID:"DD55DE8C-F374-430E-BCCC-490C6F9231DB"
},
{
cssPosition:"60,-1,-1,387,140,20",
formIndex:9,
location:"10,10",
text:"Categoría",
transparent:true,
typeid:7,
uuid:"61A7C99D-7874-4058-AF46-CB2EAE38985C"
},
{
cssPosition:"58,-1,-1,673,80,20",
formIndex:12,
text:"Estado",
transparent:true,
typeid:7,
uuid:"8ED331B2-E35A-457E-B376-4598675EDEAA"
},
{
cssPosition:"60,-1,-1,185,140,20",
formIndex:7,
location:"10,10",
text:"Nombre",
transparent:true,
typeid:7,
uuid:"95AA7B92-2833-4F91-9DC6-9CB950295585"
},
{
cssPosition:"490,-1,-1,5,150,35",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"5",
right:"-1",
top:"490",
width:"150"
},
formIndex:1,
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
uuid:"ADF7E1AE-E6B5-4BF0-BDBF-2260BA5E6D16"
},
{
height:535,
partType:5,
typeid:19,
uuid:"B764C572-F76E-476C-B7B5-99E34FF0C13A"
},
{
cssPosition:"-1,0,0,0,642,53",
location:"10,10",
styleClass:"banner",
typeid:7,
uuid:"C06622F0-CF97-4505-B98A-F73C73145AC8",
verticalAlignment:1
},
{
cssPosition:"80,-1,-1,15,160,20",
dataProviderID:"vl_cod_alterna",
formIndex:4,
location:"10,10",
onDataChangeMethodID:"ACE25657-B49F-4803-A54B-913AB9C87505",
typeid:4,
uuid:"CB64418F-0F2C-45DC-8158-2755C17565D3"
},
{
cssPosition:"490,-1,-1,160,150,35",
formIndex:3,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"160",
right:"-1",
top:"490",
width:"150"
},
formIndex:3,
imageStyleClass:"fas fa-bolt",
location:{
x:10,
y:10
},
onActionMethodID:"3AD51A51-AA14-465D-9818-166038AFB760",
text:"Añadir"
},
location:"10,10",
name:"btn_0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"CD3B5373-8008-49BC-8591-9F183B55E803"
},
{
cssPosition:"124,0,52,0,575,364",
formIndex:2,
json:{
columns:[
{
dataprovider:"producto_codigo",
headerStyleClass:"cell_center_header",
headerText:"Código",
styleClass:"cell_center",
svyUUID:"FCD7245C-6289-48FD-98FB-EC34CB254275",
width:"100"
},
{
dataprovider:"producto_cod_alternativo",
headerStyleClass:"cell_center_header",
headerText:"Cod. Alternativo",
styleClass:"cell_center",
svyUUID:"5C79AAB0-CA27-4941-9D74-16B7F7021A51",
width:"150"
},
{
dataprovider:"producto_nombre",
headerStyleClass:"cell_left_header",
headerText:"Producto",
styleClass:"cell_left",
svyUUID:"7155A834-C507-4D43-96D1-0D436D04BE1B",
valuelist:null,
width:"200"
},
{
dataprovider:"prod_productos_to_prod_categoria.categoria_nombre",
headerStyleClass:"cell_left_header",
headerText:"Categoría",
styleClass:"cell_left",
svyUUID:"91A2AB78-AFE6-48E8-9A11-F8A96A8AA04B",
valuelist:"ACE19FE9-7C0F-403B-8EAD-6ED6484D62BB",
width:"150"
},
{
dataprovider:"producto_precio_base",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Precio Base",
styleClass:"cell_right",
svyUUID:"9A5468F6-E12A-4C32-BE7D-0A1F20719812",
width:"100"
},
{
dataprovider:"producto_cod_barras",
headerStyleClass:"cell_center_header",
headerText:"Código Barras",
styleClass:"cell_center",
svyUUID:"42258BDC-531F-4A24-B41E-879673C20100",
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
formIndex:2,
location:{
x:10,
y:10
},
onCellDoubleClick:"C4C796B8-7BF4-41BB-8584-54EB82FED6B4",
pageSize:0
},
location:"10,10",
name:"table_equipos",
typeName:"servoyextra-table",
typeid:47,
uuid:"D215547D-6B22-4F90-938E-AC02F9E160EE"
},
{
cssPosition:"78,-1,-1,673,140,20",
dataProviderID:"vl_estado",
displayType:2,
editable:false,
formIndex:11,
onDataChangeMethodID:"ACE25657-B49F-4803-A54B-913AB9C87505",
typeid:4,
uuid:"D4CA1185-8886-42DE-B016-D8640CC10107",
valuelistID:"DF787460-AF05-4DA4-A94A-6A37E23E1B1C"
}
],
name:"factura_nuevo_productos_nuevo_prod",
navigatorID:"-1",
onShowMethodID:"38F34177-78CF-4CF7-8BBD-409286503A49",
showInMenu:true,
size:"926,535",
typeid:3,
uuid:"C549FBB2-FCE6-486E-A725-AACAFB776960"