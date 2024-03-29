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
onActionMethodID:"9BCB3F55-FF2D-48AF-9548-D6F4E3A66599",
toolTipText:"Volver"
},
location:"10,10",
name:"button_2",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"08B03EF6-0492-479A-A8F4-169E2A7816FF"
},
{
cssPosition:"81,-1,-1,226,140,20",
dataProviderID:"vl_fecha_fin",
displayType:5,
formIndex:4,
format:"dd/MM/yy|mask",
onDataChangeMethodID:"C0CD9304-4801-40A5-8F2A-1D8C5A511C3D",
typeid:4,
uuid:"12F25D7A-72DE-426B-863E-12345BCFBC3E"
},
{
height:482,
partType:5,
typeid:19,
uuid:"20F66233-44BC-4C8B-913E-59AF71BE7000"
},
{
cssPosition:"82,-1,-1,379,196,20",
dataProviderID:"vl_cliente",
formIndex:1,
location:"10,10",
onDataChangeMethodID:"C0CD9304-4801-40A5-8F2A-1D8C5A511C3D",
typeid:4,
uuid:"3B0522A4-EFD1-40D9-9D69-38C828B19510"
},
{
borderType:"TitledBorder,Filtros,0,0,Segoe UI,0,12,#000000",
cssPosition:"39,-1,-1,69,760,71",
lineSize:1,
location:"10,10",
typeid:21,
uuid:"5A009C5B-E947-4A4A-BCAF-9D52AABB6357"
},
{
cssPosition:"39,-1,0,0,60,443",
location:"10,10",
styleClass:"banner",
typeid:7,
uuid:"70ABC50D-A36E-4688-8904-A413E12B388F",
verticalAlignment:1
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
onActionMethodID:"1FB14B63-779B-4EAD-9CB9-82098099864C",
toolTipText:"Limpiar busquedas"
},
location:"10,10",
name:"button_0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"808571B1-A1BB-4B3E-A79C-26EF9594874A"
},
{
cssPosition:"61,-1,-1,81,119,20",
formIndex:3,
text:"Fecha Inicial",
transparent:true,
typeid:7,
uuid:"9C8C1BCB-46F2-4A56-B349-A1E49816D082"
},
{
cssPosition:"62,-1,-1,379,140,20",
formIndex:4,
location:"10,10",
text:"Cliente",
transparent:true,
typeid:7,
uuid:"A0D40495-F3FA-4B8B-B216-8D1068D06444"
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
svyUUID:"BCC816AB-2096-4DE9-A809-34AE818C35D1",
width:"150"
},
{
dataprovider:"cliente_id",
headerStyleClass:"cell_left_header",
headerText:"Cliente",
styleClass:"cell_left",
svyUUID:"05BDDD6B-4DDF-442C-97AD-556777121DB6",
valuelist:"AC2E1B90-8F1D-4F2F-8176-0F118C8B06F6",
width:"200"
},
{
dataprovider:"comp_fecha_emision",
format:"dd/MM/yy",
headerStyleClass:"cell_center_header",
headerText:"Fecha",
styleClass:"cell_center",
svyUUID:"B175E7ED-24EC-4B82-9227-A0DBB048FBA2",
width:"150"
},
{
dataprovider:"comp_imp_total",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Importe",
styleClass:"cell_right",
svyUUID:"64FC7E38-E383-41C3-A65B-B51DD1144A30",
width:"150"
},
{
dataprovider:"comp_estado_id",
headerStyleClass:"cell_center_header",
headerText:"Estado",
styleClass:"cell_center",
svyUUID:"C15770D5-76F4-4092-937E-5FC6F575D455",
valuelist:"315CF69D-3DF4-474B-9752-158384395DEB",
width:"200"
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
onCellDoubleClick:"926D62E5-4F09-424F-A8DC-96A34B86733B",
pageSize:0
},
location:"10,10",
name:"table_3",
typeName:"servoyextra-table",
typeid:47,
uuid:"A2666294-88A2-417A-B811-DC97B580C482"
},
{
cssPosition:"0,3,-1,0,642,40",
location:"10,10",
styleClass:"banner",
text:"Anticipos",
typeid:7,
uuid:"CEFDCFFC-3D4D-4BCE-9FC6-938CD7DB3605",
verticalAlignment:1
},
{
cssPosition:"61,-1,-1,226,95,20",
formIndex:4,
text:"Fecha Final",
transparent:true,
typeid:7,
uuid:"DD8EC116-1B61-4485-84DF-E0C02F5FF495"
},
{
cssPosition:"81,-1,-1,81,140,20",
dataProviderID:"vl_fecha_ini",
displayType:5,
formIndex:2,
format:"dd/MM/yy|mask",
onDataChangeMethodID:"C0CD9304-4801-40A5-8F2A-1D8C5A511C3D",
typeid:4,
uuid:"F7F68F0A-2DB4-42A6-896B-BA4F167E4714"
}
],
name:"anticipos_main",
namedFoundSet:"separate_anticipos",
navigatorID:"-1",
onShowMethodID:"8F9CBA99-81F3-4B55-BE35-1CC57931F8D8",
showInMenu:true,
size:"869,482",
typeid:3,
uuid:"FC2581E3-70B4-4A9B-B811-2B21BF8791B3"