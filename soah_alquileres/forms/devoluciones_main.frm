customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/vent_comprobantes",
encapsulation:44,
items:[
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
onActionMethodID:"3480C0C3-1265-4E3B-9DB6-B20BE4EAE4E9",
toolTipText:"Volver"
},
location:"10,10",
name:"button_2",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"263F352A-1E67-4169-9F4B-CF07E3DA2FE7"
},
{
cssPosition:"39,-1,0,0,60,443",
location:"10,10",
styleClass:"banner",
typeid:7,
uuid:"6647FDB8-FECA-419E-97E1-E652D2534614",
verticalAlignment:1
},
{
cssPosition:"80,-1,-1,565,186,20",
dataProviderID:"vl_estado",
displayType:2,
editable:false,
formIndex:3,
onDataChangeMethodID:"82B3BEDD-C457-4F4C-BBAB-2BB15C9BA303",
typeid:4,
uuid:"6E6C0015-B0B8-45B9-A950-FA16EDE9B56F",
valuelistID:"315CF69D-3DF4-474B-9752-158384395DEB"
},
{
cssPosition:"60,-1,-1,369,80,20",
formIndex:5,
text:"Cliente",
transparent:true,
typeid:7,
uuid:"6FB93669-22AB-46DC-B25F-6FA50A762F36"
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
svyUUID:"4CEDC8A0-3E72-4C88-A1EF-DB20F4861259",
width:"100"
},
{
dataprovider:"vent_comprobantes_to_vent_clientes.vent_clientes_to_core.core_nombre",
headerStyleClass:"cell_left_header",
headerText:"Cliente",
styleClass:"cell_left",
svyUUID:"F382AA03-E330-464C-972C-F207F0E04B2F",
width:"200"
},
{
dataprovider:"comp_fecha_emision",
format:"dd/MM/yy",
headerStyleClass:"cell_center_header",
headerText:"Fecha",
styleClass:"cell_center",
svyUUID:"EFF9AAD4-96A3-420B-965D-F9DC8593764F",
width:"150"
},
{
dataprovider:"vent_comprobantes_to_vent_comprobante_estados.estado_nombre",
headerStyleClass:"cell_center_header",
headerText:"Estado",
styleClass:"cell_center",
svyUUID:"C25FA8E8-32C6-4261-ABC8-3D214BB0BBAF",
width:"150"
},
{
dataprovider:"comp_imp_total",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Total",
styleClass:"cell_right",
svyUUID:"71D24D42-6E67-438E-9A98-A34F53B546A6",
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
onCellDoubleClick:"2CD87C6E-56D1-4408-8D69-FE4EDCD876FE",
pageSize:0
},
location:"10,10",
name:"table_3",
typeName:"servoyextra-table",
typeid:47,
uuid:"7362DFE2-5F38-46FC-BAEE-6D4EC375E1E0"
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
onActionMethodID:"290C1456-3012-46B8-AD3B-8AACA74BB782",
toolTipText:"Nuevo"
},
location:"10,10",
name:"btn_nuevo",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"7E06898E-DBE8-4166-86ED-3DF271B6FB82"
},
{
cssPosition:"0,0,-1,0,642,40",
formIndex:5,
location:"10,10",
styleClass:"banner",
text:"Devoluciones",
typeid:7,
uuid:"82C82AD6-ABA2-4819-8879-CFCB94A812EC",
verticalAlignment:1
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
onActionMethodID:"720FAEAD-0D2B-4492-8FBA-88784B5D9301",
toolTipText:"Limpiar busquedas"
},
location:"10,10",
name:"button_0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"9D80C81D-0C34-4BCD-8ED4-24F553DADF6C"
},
{
borderType:"TitledBorder,Filtros,0,0,Segoe UI,0,12,#000000",
cssPosition:"39,-1,-1,69,773,71",
formIndex:1,
lineSize:1,
location:"10,10",
typeid:21,
uuid:"A43A05AD-D8B5-49F3-9450-3B848DE60135"
},
{
cssPosition:"80,-1,-1,79,140,20",
dataProviderID:"scopes.globals.vg_fecha_rango",
formIndex:2,
horizontalAlignment:0,
onDataChangeMethodID:"-1",
onFocusGainedMethodID:"5257D91A-31AB-4113-B2FA-DC3944FC0DD6",
typeid:4,
uuid:"C4AC8AEE-B0EF-4AEF-B922-86929C2DD6E7"
},
{
cssPosition:"60,-1,-1,565,80,20",
formIndex:5,
text:"Estado",
transparent:true,
typeid:7,
uuid:"C7BC5FF5-99BE-497B-B290-085E219A191D"
},
{
cssPosition:"60,-1,-1,79,119,20",
formIndex:3,
text:"Rango de fechas",
transparent:true,
typeid:7,
uuid:"D07D12F0-A069-40C0-9270-E8D043EB9C8C"
},
{
height:482,
partType:5,
typeid:19,
uuid:"F0DCB567-369C-425A-9F3B-A4BD61718424"
},
{
cssPosition:"80,-1,-1,369,186,20",
dataProviderID:"vl_cliente",
displayType:10,
formIndex:3,
onDataChangeMethodID:"82B3BEDD-C457-4F4C-BBAB-2BB15C9BA303",
typeid:4,
uuid:"FF6EA615-05DA-44A8-935B-000D3978F9CA",
valuelistID:"AC2E1B90-8F1D-4F2F-8176-0F118C8B06F6"
}
],
name:"devoluciones_main",
namedFoundSet:"separate_devoluciones",
navigatorID:"-1",
onShowMethodID:"0E5A4E1E-5517-4EFA-AD33-707750ABD74F",
showInMenu:true,
size:"878,482",
typeid:3,
uuid:"6C672F36-01BC-4184-903C-5D8239ED720E"