customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/vent_comprobantes",
encapsulation:44,
items:[
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
onActionMethodID:"A51A8BC4-F48C-4E43-B239-4C97201DCF7F",
toolTipText:"Volver"
},
location:"10,10",
name:"button_2",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"19C970DF-1797-4EBC-85E3-0DE28D4E3213"
},
{
cssPosition:"62,-1,-1,379,140,20",
formIndex:4,
location:"10,10",
text:"Cliente",
transparent:true,
typeid:7,
uuid:"29AF0CC5-9117-4831-8FC2-E7447410A805"
},
{
cssPosition:"61,-1,-1,226,95,20",
formIndex:4,
text:"Fecha Final",
transparent:true,
typeid:7,
uuid:"2C406461-03D0-4DD0-BA36-E1E4591F008E"
},
{
cssPosition:"82,-1,-1,379,196,20",
dataProviderID:"vl_cliente",
formIndex:1,
location:"10,10",
onDataChangeMethodID:"0F451246-1918-4CB4-A821-9D24E905CE01",
typeid:4,
uuid:"4C499935-DCC5-47BB-830E-EC635B6ACD14"
},
{
cssPosition:"39,-1,0,0,60,443",
location:"10,10",
styleClass:"banner",
typeid:7,
uuid:"57C94F36-AF8D-4568-B1DD-DDBC629AA43D",
verticalAlignment:1
},
{
cssPosition:"81,-1,-1,226,140,20",
dataProviderID:"vl_fecha_fin",
displayType:5,
formIndex:4,
format:"dd/MM/yy",
onDataChangeMethodID:"0F451246-1918-4CB4-A821-9D24E905CE01",
typeid:4,
uuid:"5E153A64-5491-44B1-A2EB-F86F4C938744"
},
{
height:482,
partType:5,
typeid:19,
uuid:"6EC4F071-92F1-465C-9490-E84935651270"
},
{
cssPosition:"67,-1,-1,773,43,35",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"773",
right:"-1",
top:"67",
width:"43"
},
formIndex:1,
imageStyleClass:"fas fa-sync",
location:{
x:10,
y:10
},
onActionMethodID:"D789D2E6-E124-415C-AD10-98887540E163",
toolTipText:"Limpiar busquedas"
},
location:"10,10",
name:"button_0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"AEBE42AE-CEB7-468E-A127-CD168C4C2189"
},
{
cssPosition:"81,-1,-1,81,140,20",
dataProviderID:"vl_fecha_ini",
displayType:5,
formIndex:2,
format:"dd/MM/yy",
onDataChangeMethodID:"0F451246-1918-4CB4-A821-9D24E905CE01",
typeid:4,
uuid:"B12ACF65-FA13-480C-8787-65CB48BDFD50"
},
{
borderType:"TitledBorder,Filtros,0,0,Segoe UI,0,12,#000000",
cssPosition:"39,-1,-1,69,760,71",
lineSize:1,
location:"10,10",
typeid:21,
uuid:"DBF68E96-7B8B-4255-913D-DF3A364BEE17"
},
{
cssPosition:"115,0,0,60,575,364",
formIndex:1,
json:{
columns:[
{
dataprovider:"calc_num_comprobante",
headerStyleClass:"cell_center_header",
headerText:"Comprobante",
styleClass:"cell_center",
svyUUID:"462FCD9E-F850-4C98-B7EE-B700E80E1290",
width:"150"
},
{
dataprovider:"cliente_id",
headerStyleClass:"cell_left_header",
headerText:"Cliente",
styleClass:"cell_left",
svyUUID:"10CB2EF7-07F1-4185-89FF-0E2D6B0F176C",
valuelist:"AC2E1B90-8F1D-4F2F-8176-0F118C8B06F6",
width:"200"
},
{
dataprovider:"comp_fecha_emision",
format:"dd/MM/yy",
headerStyleClass:"cell_center_header",
headerText:"Fecha",
styleClass:"cell_center",
svyUUID:"9FC8C7A3-D489-42F6-A8B8-FB01C03B8DFD",
width:"150"
},
{
dataprovider:"comp_imp_total",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Importe",
styleClass:"cell_right",
svyUUID:"ED24D84C-C8E8-4EB1-AFCE-2871CF79DC20",
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
onCellDoubleClick:"30FE2348-8064-462C-9B20-AE338697078A",
pageSize:0
},
location:"10,10",
name:"table_3",
typeName:"servoyextra-table",
typeid:47,
uuid:"E3C0E97B-9FB2-46F0-A03A-2CD5C74ABA67"
},
{
cssPosition:"61,-1,-1,81,119,20",
formIndex:3,
text:"Fecha Inicial",
transparent:true,
typeid:7,
uuid:"E602C4A1-6E1C-480A-95B5-D40B3DDECB02"
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
onActionMethodID:"8881793D-4912-43D0-8113-A6F241C23249",
toolTipText:"Nuevo"
},
location:"10,10",
name:"btn_0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"E8DE9B97-454C-47C6-9FAE-BCD22DCF3E92"
},
{
cssPosition:"0,3,-1,0,642,40",
location:"10,10",
styleClass:"banner",
text:"Recibos",
typeid:7,
uuid:"ECD9B02B-C3CD-4885-95A7-38E85075C02C",
verticalAlignment:1
}
],
name:"recibos_main",
namedFoundSet:"separate_recibos",
navigatorID:"-1",
onShowMethodID:"F0164243-2696-43D8-8448-E5DBC55EC670",
showInMenu:true,
size:"869,482",
typeid:3,
uuid:"D175CA14-9E95-4777-B76F-DF3B861607B3"