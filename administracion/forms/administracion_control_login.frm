customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/usuarios_login",
encapsulation:44,
items:[
{
cssPosition:"80,-1,-1,223,140,20",
dataProviderID:"vl_fecha_final",
displayType:5,
formIndex:4,
onDataChangeMethodID:"C5DB7A2E-2FE7-4E82-B548-221CF496EC8A",
typeid:4,
uuid:"0B53F252-BEEB-42DA-9736-59D818BD7B9A"
},
{
cssPosition:"80,-1,-1,378,196,20",
dataProviderID:"vl_nombre",
formIndex:1,
location:"10,10",
onDataChangeMethodID:"C5DB7A2E-2FE7-4E82-B548-221CF496EC8A",
typeid:4,
uuid:"3DC99811-898C-482E-B47B-A13773D92C9B"
},
{
borderType:"TitledBorder,Filtros,0,0,Segoe UI,0,12,#000000",
cssPosition:"39,-1,-1,69,564,71",
lineSize:1,
location:"10,10",
typeid:21,
uuid:"47F57AE1-D378-467E-85A4-FD466983857D"
},
{
cssPosition:"39,-1,0,0,60,443",
location:"10,10",
styleClass:"banner",
typeid:7,
uuid:"4A41D6B7-FB9C-4914-8D06-359C8D835FAF",
verticalAlignment:1
},
{
cssPosition:"65,-1,-1,583,43,35",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"583",
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
onActionMethodID:"9D2C845F-6099-420C-AFF5-D7366E25C2DD",
toolTipText:"Limpiar busquedas"
},
location:"10,10",
name:"button_0",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"52DFE65C-29F3-44DB-A3EC-45C5BB4D14D5"
},
{
cssPosition:"80,-1,-1,78,140,20",
dataProviderID:"vl_fecha_inicial",
displayType:5,
formIndex:2,
onDataChangeMethodID:"C5DB7A2E-2FE7-4E82-B548-221CF496EC8A",
typeid:4,
uuid:"74D11029-F203-4E19-BF27-E3976B1C63B4"
},
{
height:482,
partType:5,
typeid:19,
uuid:"7E971636-BA09-4920-85BD-B72177ABAF73"
},
{
cssPosition:"60,-1,-1,78,119,20",
formIndex:3,
text:"Fecha Inicial",
transparent:true,
typeid:7,
uuid:"9834BC46-B7FA-491E-8C05-6D9B79C0885E"
},
{
cssPosition:"115,0,0,60,575,364",
formIndex:1,
json:{
columns:[
{
dataprovider:"login_fecha",
format:"dd/MM/yy HH:mm",
headerStyleClass:"cell_center_header",
headerText:"Fecha",
styleClass:"cell_center",
svyUUID:"873059BD-C883-4123-88F3-474CBF07925A",
width:"150"
},
{
dataprovider:"usuario_nombre",
headerStyleClass:"cell_left_header",
headerText:"Nombre",
styleClass:"cell_left",
svyUUID:"28432086-2F26-4FFF-8BB6-348FA84E9C22",
width:"200"
},
{
dataprovider:"login_ip",
headerStyleClass:"cell_center_header",
headerText:"IP",
styleClass:"cell_center",
svyUUID:"5AF75982-EB70-4847-921C-D038D1D0A95D",
width:"150"
},
{
dataprovider:"login_observacion",
headerStyleClass:"cell_left_header",
headerText:"Observación",
styleClass:"cell_left",
svyUUID:"E59C0474-72DF-4A8C-9406-B7D76A1BB565",
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
onCellDoubleClick:"CDC20384-8352-42C8-839F-22FFA91A0F21",
pageSize:0
},
location:"10,10",
name:"table_3",
typeName:"servoyextra-table",
typeid:47,
uuid:"A4E38126-796F-4705-BE23-F05977CCEA37"
},
{
cssPosition:"60,-1,-1,378,140,20",
formIndex:4,
location:"10,10",
text:"Nombre",
transparent:true,
typeid:7,
uuid:"C867A937-8990-488B-A2F2-334BD5E5C1DD"
},
{
cssPosition:"0,2,-1,0,642,40",
location:"10,10",
styleClass:"banner",
text:"Control de Login",
typeid:7,
uuid:"CA8DB5B1-CEB0-4F02-8C53-891A5DB7069E",
verticalAlignment:1
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
onActionMethodID:"4D96C974-AEC1-4DD0-9C11-95BBEF1377B1",
toolTipText:"Volver"
},
location:"10,10",
name:"button_2",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"D3C1C4F0-A58B-4E4B-87F3-EBF9F72813D8"
},
{
cssPosition:"60,-1,-1,223,95,20",
formIndex:4,
text:"Fecha Final",
transparent:true,
typeid:7,
uuid:"E8DC3F52-FFB9-437E-B1A3-3FD70A0D9CF0"
}
],
name:"administracion_control_login",
navigatorID:"-1",
onShowMethodID:"794196D8-8723-46F2-8002-1ACB1832F9ED",
showInMenu:true,
typeid:3,
uuid:"29604132-1AA5-4941-B899-D76CA08323C0"