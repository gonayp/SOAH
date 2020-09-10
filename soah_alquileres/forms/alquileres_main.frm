customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/vent_comprobantes",
encapsulation:44,
items:[
{
cssPosition:"80,-1,-1,369,186,20",
dataProviderID:"vl_cliente",
displayType:10,
formIndex:3,
onDataChangeMethodID:"61C11FE6-2C7A-42E4-843C-B13DC57B8997",
typeid:4,
uuid:"1225B462-D8FF-4D53-B269-A4E211806FEB",
valuelistID:"AC2E1B90-8F1D-4F2F-8176-0F118C8B06F6"
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
onActionMethodID:"377EE171-9744-484C-ACC6-58A712BE514B",
toolTipText:"Nuevo"
},
location:"10,10",
name:"btn_nuevo",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"140B5945-FA2A-4837-832A-BDC9DAD00787"
},
{
cssPosition:"40,-1,-1,5,45,35",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"5",
right:"-1",
top:"40",
width:"45"
},
formIndex:2,
imageStyleClass:"fas fa-undo-alt",
location:{
x:10,
y:10
},
onActionMethodID:"D19967B7-D0D5-4B69-B25E-CBA76EE828CA",
toolTipText:"Volver"
},
location:"10,10",
name:"button_2",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"187AACED-B8AB-42B9-AB16-D5B5368FC17D"
},
{
cssPosition:"39,-1,0,0,60,443",
location:"10,10",
styleClass:"banner",
typeid:7,
uuid:"52083818-BF6F-4991-83F4-4F5F2D5B0EFA",
verticalAlignment:1
},
{
cssPosition:"60,-1,-1,565,80,20",
formIndex:5,
text:"Estado",
transparent:true,
typeid:7,
uuid:"6DE228C1-7CA7-4914-B628-9A0FBBF72053"
},
{
cssPosition:"60,-1,-1,369,80,20",
formIndex:5,
text:"Cliente",
transparent:true,
typeid:7,
uuid:"762C3536-812C-4B94-A019-CF0211EA6D9A"
},
{
cssPosition:"0,0,-1,0,642,40",
formIndex:5,
location:"10,10",
styleClass:"banner",
text:"Alquileres",
typeid:7,
uuid:"838A004F-E50F-433F-8A1C-D5938F12DB54",
verticalAlignment:1
},
{
cssPosition:"80,-1,-1,565,186,20",
dataProviderID:"vl_estado",
displayType:2,
editable:false,
formIndex:3,
onDataChangeMethodID:"61C11FE6-2C7A-42E4-843C-B13DC57B8997",
typeid:4,
uuid:"8D6E6166-5A80-4D19-B606-ADFED9C0403F",
valuelistID:"315CF69D-3DF4-474B-9752-158384395DEB"
},
{
borderType:"TitledBorder,Filtros,0,0,Segoe UI,0,12,#000000",
cssPosition:"39,-1,-1,69,773,71",
formIndex:1,
lineSize:1,
location:"10,10",
typeid:21,
uuid:"92754AC7-B1A6-4138-A088-2C623F83A6F0"
},
{
height:482,
partType:5,
typeid:19,
uuid:"B3A30D79-6890-4A27-AC17-9B0A3F0D9079"
},
{
cssPosition:"115,0,0,60,575,364",
formIndex:1,
json:{
columns:[
{
dataprovider:"calc_num_compr_sin_codig",
headerStyleClass:"cell_center_header",
headerText:"Número",
styleClass:"cell_center",
svyUUID:"547A3674-A461-48C9-99CE-E414DB09012C",
width:"100"
},
{
dataprovider:"vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_nombre",
headerStyleClass:"cell_left_header",
headerText:"Cliente",
styleClass:"cell_left",
svyUUID:"86519470-EBF8-4FB6-BEFA-B3E36DC8E546",
width:"200"
},
{
dataprovider:"comp_fecha_emision",
format:"dd/MM/yy",
headerStyleClass:"cell_center_header",
headerText:"Fecha",
styleClass:"cell_center",
svyUUID:"86D88B77-2B69-44F0-ACA2-FAC1FCE7E13E",
width:"150"
},
{
dataprovider:"vent_comprobantes_to_vent_comprobante_estados.estado_nombre",
headerStyleClass:"cell_center_header",
headerText:"Estado",
styleClass:"cell_center",
svyUUID:"F932725A-C61B-4246-8E18-FEAC10940A3C",
width:"150"
},
{
dataprovider:"comp_imp_total",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Total",
styleClass:"cell_right",
svyUUID:"AE47CC86-BF3B-4544-9CEB-5A3FA9E83C90",
width:"100"
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
onCellDoubleClick:"6AFF3F62-8BE3-4829-BEDE-A9F5FB5432DF",
pageSize:0
},
location:"10,10",
name:"table_3",
typeName:"servoyextra-table",
typeid:47,
uuid:"BAF6C2F2-BCC6-4ABF-9104-0EF4F8FBC667"
},
{
cssPosition:"80,-1,-1,224,140,20",
dataProviderID:"vl_fecha_fin",
displayType:5,
formIndex:4,
format:"dd/MM/yy|mask",
onDataChangeMethodID:"61C11FE6-2C7A-42E4-843C-B13DC57B8997",
typeid:4,
uuid:"C2472D04-BBE8-44B0-9902-1D60B2EA6DE9"
},
{
cssPosition:"80,-1,-1,79,140,20",
dataProviderID:"vl_fecha_ini",
displayType:5,
formIndex:2,
format:"dd/MM/yy|mask",
onDataChangeMethodID:"61C11FE6-2C7A-42E4-843C-B13DC57B8997",
typeid:4,
uuid:"C7FDE186-6983-4BF9-B19F-FB4E11846E92"
},
{
cssPosition:"60,-1,-1,224,95,20",
formIndex:4,
text:"Fecha Final",
transparent:true,
typeid:7,
uuid:"D6F1CB3A-6043-4427-9A09-1742C635F062"
},
{
cssPosition:"65,-1,-1,785,43,35",
formIndex:3,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"785",
right:"-1",
top:"65",
width:"43"
},
formIndex:3,
imageStyleClass:"fas fa-sync",
location:{
x:10,
y:10
},
onActionMethodID:"84DC622E-7E6C-4635-A36F-C1EFCC1DA2C9",
toolTipText:"Limpiar busquedas"
},
location:"10,10",
name:"button_0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"DE708E9B-A149-4D09-87A1-49AC7BE62077"
},
{
cssPosition:"60,-1,-1,79,119,20",
formIndex:3,
text:"Fecha Inicial",
transparent:true,
typeid:7,
uuid:"FDA76BBF-9942-4E9B-AACE-56F15B6597FF"
}
],
name:"alquileres_main",
namedFoundSet:"separate_alquiler",
navigatorID:"-1",
onShowMethodID:"B0CF5353-037F-4916-85AF-98C84D70F442",
showInMenu:true,
size:"878,482",
typeid:3,
uuid:"C86C252F-1B1E-42D4-AB68-948F4520FC1C"