customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/deposito_stock",
encapsulation:36,
items:[
{
cssPosition:"0,2,-1,0,642,40",
location:"10,10",
styleClass:"banner",
text:"Movimientos de stock",
typeid:7,
uuid:"0FC07AC1-4EBC-4F76-A525-181BA794F625",
verticalAlignment:1
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
onActionMethodID:"6962949B-14D5-4F31-8EFD-F84356A5896C",
toolTipText:"Nuevo"
},
location:"10,10",
name:"btn_nuevo",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"205106A6-8F66-452A-9570-1372ACE0DD77"
},
{
cssPosition:"80,-1,-1,388,196,20",
dataProviderID:"vl_nombre",
formIndex:1,
location:"10,10",
onDataChangeMethodID:"8C543E78-3C85-4C29-BD1A-EB0355E59CFB",
typeid:4,
uuid:"2C70F4FB-F996-4B89-9662-835BC59215AA"
},
{
cssPosition:"80,-1,-1,81,140,20",
dataProviderID:"vl_fecha_ini",
displayType:5,
formIndex:2,
format:"dd/MM/yy",
onDataChangeMethodID:"8C543E78-3C85-4C29-BD1A-EB0355E59CFB",
typeid:4,
uuid:"3E512375-1D20-4805-B109-B242774986A4"
},
{
height:482,
partType:5,
typeid:19,
uuid:"68F3F246-387B-4C59-91D6-3C5954136D95"
},
{
cssPosition:"60,-1,-1,388,140,20",
formIndex:4,
location:"10,10",
text:"Producto",
transparent:true,
typeid:7,
uuid:"7FFB12D0-5D3E-4603-9931-BF41FFEAB449"
},
{
cssPosition:"39,-1,0,0,60,443",
location:"10,10",
styleClass:"banner",
typeid:7,
uuid:"849EA0D7-354E-4956-8BE3-64D24A79900C",
verticalAlignment:1
},
{
cssPosition:"65,-1,-1,674,43,35",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"674",
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
onActionMethodID:"59B9074E-6413-488E-B8C7-27B9652DA2F3",
toolTipText:"Limpiar busquedas"
},
location:"10,10",
name:"button_0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"94CA6FE2-FC98-456C-9944-49ECE1D22246"
},
{
cssPosition:"60,-1,-1,226,95,20",
formIndex:4,
text:"Fecha Final",
transparent:true,
typeid:7,
uuid:"A4BF1044-245C-4C1C-9A2F-A88FC4AD9ABD"
},
{
cssPosition:"60,-1,-1,81,119,20",
formIndex:3,
text:"Fecha Inicial",
transparent:true,
typeid:7,
uuid:"B69DF046-AB44-44BD-AA65-BB2B7555B0A3"
},
{
cssPosition:"80,-1,-1,226,140,20",
dataProviderID:"vl_fecha_fin",
displayType:5,
formIndex:4,
format:"dd/MM/yy",
onDataChangeMethodID:"8C543E78-3C85-4C29-BD1A-EB0355E59CFB",
typeid:4,
uuid:"B7B55458-9254-459C-ABA8-F0F88FC6B2A3"
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
imageStyleClass:"fas fa-share-square",
location:{
x:10,
y:10
},
onActionMethodID:"1D4D57B0-C0B6-4D46-816A-348C40A2644B",
toolTipText:"Movimiento entre depósitos"
},
location:"10,10",
name:"btn_nuevoc",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"D3F58D87-FACC-48B3-BD51-F8BC3C3AD2D3"
},
{
borderType:"TitledBorder,Filtros,0,0,Segoe UI,0,12,#000000",
cssPosition:"39,-1,-1,69,670,71",
lineSize:1,
location:"10,10",
typeid:21,
uuid:"D99A529A-C9E5-438B-8926-18F32857AD41"
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
onActionMethodID:"50D1D34A-F17D-49EC-B708-7AF44C1B651D",
toolTipText:"Volver"
},
location:"10,10",
name:"button_2",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"EBDCA528-64B0-44E1-9C51-5EEE71AB6DC0"
},
{
cssPosition:"115,0,0,60,575,364",
formIndex:1,
json:{
columns:[
{
dataprovider:"ds_fecha",
format:"dd/MM/yy HH:mm",
headerStyleClass:"cell_center_header",
headerText:"Fecha",
styleClass:"cell_center",
svyUUID:"A95E9E33-FC2F-4A71-977F-47DF1B08E06D",
width:"150"
},
{
dataprovider:"deposito_stock_to_deposito.deposito_nombre",
headerStyleClass:"cell_left_header",
headerText:"Depósito",
styleClass:"cell_left",
svyUUID:"1F3E3681-BC7A-4FD9-BC0F-4873E0B14091",
width:"100"
},
{
dataprovider:"deposito_stock_to_prod_productos.producto_nombre",
headerStyleClass:"cell_left_header",
headerText:"Producto",
styleClass:"cell_left",
svyUUID:"CBB92EAA-6BD0-44D9-A828-54E67A9905C6",
width:"200"
},
{
dataprovider:"ds_cantidad",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Cantidad",
styleClass:"cell_right",
svyUUID:"96ACF7D2-C38E-4750-A26A-A235F230D514",
width:"100"
},
{
dataprovider:"ds_tipo",
headerStyleClass:"cell_left_header",
headerText:"Tipo",
styleClass:"cell_left",
svyUUID:"B430C4FF-D136-4EC0-AC93-2DF8636FB4CB",
valuelist:"36872F56-DEA8-411D-A036-3F9D709422F3",
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
onCellDoubleClick:"AA66D511-1BCD-4D43-A470-E5C97A6A46CC",
pageSize:0
},
location:"10,10",
name:"table_3",
typeName:"servoyextra-table",
typeid:47,
uuid:"FD07ED95-D110-4E01-BEAB-6701590323B1"
}
],
name:"stock_movimientos",
navigatorID:"-1",
onShowMethodID:"5165B028-3B46-424E-B86E-033BE586D1EE",
showInMenu:true,
size:"754,482",
typeid:3,
uuid:"F2B2BE12-939D-4F17-8403-4568D9E6264E"