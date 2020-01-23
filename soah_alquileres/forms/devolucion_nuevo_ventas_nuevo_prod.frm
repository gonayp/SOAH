customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/prod_productos",
encapsulation:36,
items:[
{
cssPosition:"0,0,-1,0,642,40",
location:"10,10",
styleClass:"banner",
text:"Productos",
typeid:7,
uuid:"1BE90B18-EBAC-460D-BF68-5312C545C3AC",
verticalAlignment:1
},
{
cssPosition:"80,-1,-1,15,160,20",
dataProviderID:"vl_cod_alterna",
formIndex:1,
location:"10,10",
onDataChangeMethodID:"10458941-3EE0-45AF-B59E-BAD3B6E2D0A6",
typeid:4,
uuid:"2575CE63-7C13-4033-AE2B-CAE91E5B2563"
},
{
cssPosition:"58,-1,-1,673,80,20",
formIndex:11,
text:"Estado",
transparent:true,
typeid:7,
uuid:"25EC4F1B-5AD0-4662-8ABF-4DE330BC8B6C"
},
{
cssPosition:"-1,0,0,0,642,53",
formIndex:1,
location:"10,10",
styleClass:"banner",
typeid:7,
uuid:"369A5801-022D-4000-A848-C47FE3DBD0A6",
verticalAlignment:1
},
{
cssPosition:"60,-1,-1,15,140,20",
formIndex:4,
location:"10,10",
text:"Código Alternativo",
transparent:true,
typeid:7,
uuid:"4DE9C8F5-DAA2-4A01-84FD-F14E447C1117"
},
{
cssPosition:"59,-1,-1,591,67,20",
formIndex:5,
location:"10,10",
text:"Código",
transparent:true,
typeid:7,
uuid:"4E97E3F2-EC38-46F9-9F4B-891D34E5E107"
},
{
cssPosition:"80,-1,-1,387,196,20",
dataProviderID:"vl_categoria",
displayType:2,
editable:false,
formIndex:1,
location:"10,10",
onDataChangeMethodID:"10458941-3EE0-45AF-B59E-BAD3B6E2D0A6",
typeid:4,
uuid:"4EA79E33-1B06-4330-A261-C50DBECEA558",
valuelistID:"DD55DE8C-F374-430E-BCCC-490C6F9231DB"
},
{
cssPosition:"80,-1,-1,185,196,20",
dataProviderID:"vl_nombre",
formIndex:1,
location:"10,10",
onDataChangeMethodID:"10458941-3EE0-45AF-B59E-BAD3B6E2D0A6",
typeid:4,
uuid:"53B30079-4E7B-4C2B-A661-78A36F20E862"
},
{
cssPosition:"78,-1,-1,673,140,20",
dataProviderID:"vl_estado",
displayType:2,
editable:false,
formIndex:6,
onDataChangeMethodID:"10458941-3EE0-45AF-B59E-BAD3B6E2D0A6",
typeid:4,
uuid:"57F206E5-BCEC-4A74-BBDD-FFDBCC5136D5",
valuelistID:"DF787460-AF05-4DA4-A94A-6A37E23E1B1C"
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
uuid:"5A013CD9-7A73-48F8-BE4C-54286A920B4D"
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
svyUUID:"A65B28A9-BE49-48A1-8D71-53A1ABDA6232",
width:"100"
},
{
dataprovider:"producto_cod_alternativo",
headerStyleClass:"cell_center_header",
headerText:"Cod. Alternativo",
styleClass:"cell_center",
svyUUID:"00B5BFB0-617E-4C17-97B7-01C1D5808DC6",
width:"150"
},
{
dataprovider:"producto_nombre",
headerStyleClass:"cell_left_header",
headerText:"Producto",
styleClass:"cell_left",
svyUUID:"BF403F75-C8F9-4C3A-90B7-582B388F5436",
valuelist:null,
width:"200"
},
{
dataprovider:"prod_productos_to_prod_categoria.categoria_nombre",
headerStyleClass:"cell_left_header",
headerText:"Categoría",
styleClass:"cell_left",
svyUUID:"2779EE38-C9DB-450B-A4C2-48FE80BD53FC",
valuelist:"ACE19FE9-7C0F-403B-8EAD-6ED6484D62BB",
width:"150"
},
{
dataprovider:"producto_precio_base",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Precio Base",
styleClass:"cell_right",
svyUUID:"BB46103F-8C97-413F-8943-A018CD68F1A7",
width:"100"
},
{
dataprovider:"producto_cod_barras",
headerStyleClass:"cell_center_header",
headerText:"Código Barras",
styleClass:"cell_center",
svyUUID:"94EA34E1-63C1-49F4-82D6-EFBE3DB4687C",
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
onCellDoubleClick:"10B2C3F5-DC59-4A0D-8CC7-2A6F6A8D5376",
pageSize:0
},
location:"10,10",
name:"table_equipos",
typeName:"servoyextra-table",
typeid:47,
uuid:"9FD18DF4-EBFA-412B-BC1E-56F9612EBCC7"
},
{
cssPosition:"60,-1,-1,387,140,20",
formIndex:4,
location:"10,10",
text:"Categoría",
transparent:true,
typeid:7,
uuid:"A998EE0A-CBBD-43FA-961B-2159E967B582"
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
onActionMethodID:"277BA789-9794-4194-B95B-09DCD81054BA",
toolTipText:"Limpiar busquedas"
},
location:"10,10",
name:"button_0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"AAD4E83B-B8E0-46FD-80B0-9D415FBEBC40"
},
{
cssPosition:"79,-1,-1,591,73,20",
dataProviderID:"vl_codigo",
formIndex:2,
location:"10,10",
onDataChangeMethodID:"10458941-3EE0-45AF-B59E-BAD3B6E2D0A6",
typeid:4,
uuid:"C5A20F13-D688-4DFF-8545-7E9B6B0CC632"
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
onActionMethodID:"743D4890-3E75-468D-B732-067A64DBC7FA",
text:"Añadir"
},
location:"10,10",
name:"btn_0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"CFC96E69-20AF-4967-B4C8-272F10BE24E9"
},
{
cssPosition:"60,-1,-1,185,140,20",
formIndex:4,
location:"10,10",
text:"Nombre",
transparent:true,
typeid:7,
uuid:"DE475B03-EE0B-4E38-9365-7C34F95D7C25"
},
{
borderType:"TitledBorder,Filtros,0,0,Segoe UI,0,12,#000000",
cssPosition:"39,-1,-1,5,906,71",
lineSize:1,
location:"10,10",
name:"rec_filtros",
typeid:21,
uuid:"E7208D6F-7587-485C-8688-830170CA1830"
},
{
height:535,
partType:5,
typeid:19,
uuid:"F1C5571F-E4B7-4735-AA5B-D735C94961EF"
}
],
name:"devolucion_nuevo_ventas_nuevo_prod",
navigatorID:"-1",
onShowMethodID:"A45B92BC-C76C-4BA5-8556-8ADA6A82F9A6",
showInMenu:true,
size:"926,535",
typeid:3,
uuid:"2AC1D3DB-732F-481A-A244-DA38BE4628BB"