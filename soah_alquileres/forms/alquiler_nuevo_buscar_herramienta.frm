customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/herr_equipo",
encapsulation:36,
items:[
{
cssPosition:"129,-1,-1,226,140,20",
dataProviderID:"vl_estado",
displayType:2,
editable:false,
formIndex:6,
onDataChangeMethodID:"CA757FBC-A833-413D-ACEF-49FC506030CF",
typeid:4,
uuid:"10F7E78B-2751-40AE-A5A8-BB39E62C97C2",
valuelistID:"DF787460-AF05-4DA4-A94A-6A37E23E1B1C"
},
{
cssPosition:"109,-1,-1,371,236,20",
formIndex:8,
text:"Codígo de Barras",
transparent:true,
typeid:7,
uuid:"2890ADA0-E675-4FD3-8137-4BF520782317"
},
{
cssPosition:"109,-1,-1,75,111,20",
formIndex:7,
text:"Alimentación",
transparent:true,
typeid:7,
uuid:"2A7D7232-D80A-4B77-B401-DC208ADBB0A6"
},
{
borderType:"TitledBorder,Filtros,0,0,Segoe UI,0,12,#000000",
cssPosition:"39,-1,-1,65,808,120",
lineSize:1,
location:"10,10",
name:"rec_filtros",
typeid:21,
uuid:"33F5D6E7-69D6-42EB-941C-A07D1788055E"
},
{
height:545,
partType:5,
typeid:19,
uuid:"35D59A94-92E4-4C88-9D76-C5A1870CDB0E"
},
{
cssPosition:"129,-1,-1,371,236,20",
dataProviderID:"vl_cod_barras",
onDataChangeMethodID:"CA757FBC-A833-413D-ACEF-49FC506030CF",
typeid:4,
uuid:"3610AF94-D3EC-4BC5-A520-7C37FC9326C3"
},
{
cssPosition:"60,-1,-1,226,140,20",
formIndex:4,
location:"10,10",
text:"Herramienta",
transparent:true,
typeid:7,
uuid:"3D571B5E-D2D3-4D30-AD91-A2D93471CAD2"
},
{
cssPosition:"60,-1,-1,428,140,20",
formIndex:4,
location:"10,10",
text:"Marca",
transparent:true,
typeid:7,
uuid:"3D8D2CBA-1FB6-4BBB-A0DD-88F488596E94"
},
{
cssPosition:"60,-1,-1,634,140,20",
formIndex:8,
location:"10,10",
text:"Modelo",
transparent:true,
typeid:7,
uuid:"477D8900-722C-41F3-A851-6B5E5ACD40DD"
},
{
cssPosition:"109,-1,-1,226,80,20",
formIndex:11,
text:"Estado",
transparent:true,
typeid:7,
uuid:"5480AA30-0848-4D4D-9AEF-741CFC58DFE0"
},
{
cssPosition:"129,-1,-1,75,140,20",
dataProviderID:"vl_alimentacion",
displayType:2,
editable:false,
formIndex:1,
onDataChangeMethodID:"CA757FBC-A833-413D-ACEF-49FC506030CF",
typeid:4,
uuid:"5533125C-B14C-47AE-B27E-133E880C1FCE",
valuelistID:"DC2759E2-2C02-42DC-BA8A-7141AC76753F"
},
{
cssPosition:"164,0,0,65,951,364",
json:{
columns:[
{
dataprovider:"equipo_cod_barras",
headerStyleClass:"cell_center_header",
headerText:"Cod. Barras",
styleClass:"cell_center",
svyUUID:"B93C0A87-2955-447B-95F9-32438C1DDAA8",
width:"130"
},
{
dataprovider:"herramienta_id",
headerStyleClass:"cell_left_header",
headerText:"Herramienta",
styleClass:"cell_left",
svyUUID:"CB661C01-892F-4FF6-9791-C07420B18BF4",
valuelist:"B3969C5F-97AB-4E17-A40B-AEED01B21300",
width:"175"
},
{
dataprovider:"marca_id",
headerStyleClass:"cell_left_header",
headerText:"Marca",
styleClass:"cell_left",
svyUUID:"82B6B67A-C86F-4EF8-B1A4-EDB8AA71CEF7",
valuelist:"ACE19FE9-7C0F-403B-8EAD-6ED6484D62BB",
width:"130"
},
{
dataprovider:"modelo_id",
headerStyleClass:"cell_left_header",
headerText:"Modelo",
styleClass:"cell_left",
svyUUID:"292BCA71-E273-4AC7-BF5C-2831DFFFB8D4",
valuelist:"A1941DA9-AB5C-4C1A-8839-CA661BD429C1",
width:"150"
},
{
dataprovider:"equipo_estado",
headerStyleClass:"cell_left_header",
headerText:"Estado",
styleClass:"cell_left",
svyUUID:"45D5F040-11F7-4964-8D40-E696A10E593B",
valuelist:"DF787460-AF05-4DA4-A94A-6A37E23E1B1C",
width:"100"
},
{
dataprovider:"equipo_precio_base",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Precio Base",
styleClass:"cell_right",
svyUUID:"D0924EEB-450D-4D63-BA10-71E0D3FE862B",
width:"100"
}
],
cssPosition:{
bottom:"0",
height:"364",
left:"65",
right:"0",
top:"164",
width:"951"
},
enableColumnResize:true,
formIndex:0,
location:{
x:10,
y:10
},
onCellDoubleClick:"0AFE9873-B49D-45EF-8E65-B247489BD20C",
pageSize:0
},
location:"10,10",
name:"table_equipos",
typeName:"servoyextra-table",
typeid:47,
uuid:"5B3C24A0-7FD4-4B91-9C5F-5DC1EC9FF796"
},
{
cssPosition:"40,-1,0,0,60,59",
location:"10,10",
styleClass:"banner",
typeid:7,
uuid:"6BF18031-8FA4-4AAC-9F08-FCFF4E1E73E7",
verticalAlignment:1
},
{
cssPosition:"80,-1,-1,428,196,20",
dataProviderID:"vl_marca",
displayType:10,
formIndex:1,
location:"10,10",
onDataChangeMethodID:"717E16BA-D6AA-41B5-9CFA-E4A3CC6AAB03",
typeid:4,
uuid:"6C3CB37E-4B5C-4D25-877B-6F41839F6078",
valuelistID:"1EF96E34-ADD0-456F-B844-3C9E7675166F"
},
{
cssPosition:"85,-1,-1,5,45,35",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"5",
right:"-1",
top:"85",
width:"45"
},
formIndex:2,
imageStyleClass:"fas fa-bolt",
location:{
x:10,
y:10
},
onActionMethodID:"6DCFF2A7-1A71-4356-9AEC-DCF2CB0C6508",
toolTipText:"Añadir"
},
location:"10,10",
name:"btn_0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"7A65DD29-939B-40E8-8808-D056771204D1"
},
{
cssPosition:"129,-1,-1,612,192,20",
dataProviderID:"vl_num_serie",
formIndex:4,
onDataChangeMethodID:"CA757FBC-A833-413D-ACEF-49FC506030CF",
typeid:4,
uuid:"7D44F747-0149-4DEE-9FE8-3654E048717A"
},
{
cssPosition:"60,-1,-1,75,140,20",
formIndex:4,
location:"10,10",
text:"Código Alternativo",
transparent:true,
typeid:7,
uuid:"7D93398D-6ECB-4ED1-9AD5-F86D3E94A6B7"
},
{
cssPosition:"80,-1,-1,75,140,20",
dataProviderID:"vl_cod_alterna",
formIndex:1,
location:"10,10",
onDataChangeMethodID:"CA757FBC-A833-413D-ACEF-49FC506030CF",
typeid:4,
uuid:"7DD8B94D-EAC5-478F-8AC4-ACD9D729EDA3"
},
{
cssPosition:"45,-1,-1,5,45,35",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"5",
right:"-1",
top:"45",
width:"45"
},
formIndex:1,
imageStyleClass:"fas fa-times",
location:{
x:10,
y:10
},
onActionMethodID:"DCAE5D92-F11A-49E3-B45E-5BEC5A8F1CAA",
toolTipText:"Cancelar"
},
location:"10,10",
name:"button_2",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"8DD7F1AE-BD53-4DCF-861F-BC82E5098A76"
},
{
cssPosition:"0,0,-1,0,642,40",
location:"10,10",
styleClass:"banner",
text:"Buscar Herramienta",
typeid:7,
uuid:"947B909A-D67D-4DEC-A17E-F52DB094D904",
verticalAlignment:1
},
{
cssPosition:"109,-1,-1,612,180,20",
formIndex:9,
text:"Número de Serie",
transparent:true,
typeid:7,
uuid:"B0FC55B5-B7C4-44E6-AA7E-9325A1C7C3C4"
},
{
cssPosition:"79,-1,-1,802,60,20",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"20",
left:"802",
right:"-1",
top:"79",
width:"60"
},
formIndex:1,
imageStyleClass:"fas fa-sync",
location:{
x:10,
y:10
},
onActionMethodID:"5AF0BE5C-0D24-4CE6-8A4A-6989393D9E29",
toolTipText:"Limpiar busquedas"
},
location:"10,10",
name:"button_0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"B2E242D9-1143-4BAA-ACCE-370C6C783B8C"
},
{
cssPosition:"80,-1,-1,634,164,20",
dataProviderID:"vl_modelo",
displayType:10,
formIndex:7,
location:"10,10",
onDataChangeMethodID:"CA757FBC-A833-413D-ACEF-49FC506030CF",
typeid:4,
uuid:"B77551E2-DE63-4400-820B-E450AB39B182",
valuelistID:"C4E64E1F-4C47-4959-B6B3-3918FF5507AE"
},
{
cssPosition:"80,-1,-1,226,196,20",
dataProviderID:"vl_herramienta",
displayType:10,
formIndex:1,
location:"10,10",
onDataChangeMethodID:"72F037A8-5B42-4581-B933-78B17311502D",
typeid:4,
uuid:"FFD9AC78-3012-4815-8A20-256C74F82341",
valuelistID:"B3969C5F-97AB-4E17-A40B-AEED01B21300"
}
],
name:"alquiler_nuevo_buscar_herramienta",
navigatorID:"-1",
onShowMethodID:"D30FF3F2-E3D7-42C4-9C98-0DE82D66EB2D",
scrollbars:36,
showInMenu:true,
size:"951,545",
typeid:3,
uuid:"1C3A751F-DEDF-4AB0-B694-BC9C00485AE3"