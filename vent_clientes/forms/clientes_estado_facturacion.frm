customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/vent_comprobantes",
encapsulation:36,
items:[
{
cssPosition:"59,-1,-1,5,131,20",
text:"Notas de Crédito",
transparent:true,
typeid:7,
uuid:"0AF31038-23BF-469A-9DCC-DCA832591F3E"
},
{
cssPosition:"163,0,2,0,635,100",
json:{
columns:[
{
dataprovider:"calc_num_comprobante",
headerStyleClass:"cell_center_header",
headerText:"Comprobante",
styleClass:"cell_center",
svyUUID:"6F4ED0D0-ED74-4667-8FF5-2F0F5B49B0D5",
width:"150"
},
{
dataprovider:"comp_fecha_emision",
format:"dd/MM/yy",
headerStyleClass:"cell_center_header",
headerText:"Fecha",
styleClass:"cell_center",
svyUUID:"1F22367B-F9F8-4FF2-9D11-3AFA2223A39D",
width:"150"
},
{
dataprovider:"comp_fecha_vencimiento",
format:"dd/MM/yy",
headerStyleClass:"cell_center_header",
headerText:"Vencimiento",
styleClass:"cell_center",
svyUUID:"35DABD8D-0620-4B80-9DCA-EBA244238664",
width:"150"
},
{
dataprovider:"calc_dias_vencimiento",
format:"####",
headerStyleClass:"cell_right_header",
headerText:"Días vencidos",
styleClass:"cell_right",
styleClassDataprovider:"calc_estilo_dias_vencidos",
svyUUID:"BA1A0754-7626-45D2-B519-BCB447D5B7D7",
width:"130"
},
{
dataprovider:"comp_codigo",
headerStyleClass:"cell_left_header",
headerText:"Tipo",
styleClass:"cell_left",
svyUUID:"AC83FCE5-A23A-4BB8-9418-780F6D7B9781",
valuelist:"F10C06F6-DA7F-44B6-B37D-24DF30F65A58",
width:"150"
},
{
dataprovider:"comp_imp_total",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Total",
styleClass:"cell_right",
styleClassDataprovider:"calc_estilo_codigo",
svyUUID:"15186A19-0BA2-4BA6-B891-F547690F7126",
width:"150"
},
{
dataprovider:"calc_saldo",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Saldo",
styleClass:"cell_right",
svyUUID:"7A48E8FA-52C5-4853-B333-289F69445A49",
width:"150"
},
{
dataprovider:"calc_acumulado",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Acumulado",
styleClass:"cell_right",
svyUUID:"0F4033C1-92B0-473D-B15D-34D0DB678E92",
width:"150"
}
],
cssPosition:{
bottom:"2",
height:"100",
left:"0",
right:"0",
top:"163",
width:"635"
},
enableColumnResize:true,
onCellDoubleClick:"0048DE29-8994-4EFF-9B91-84B312A81675",
pageSize:0,
tabSeq:-2
},
name:"table_1",
typeName:"servoyextra-table",
typeid:47,
uuid:"0ED26550-A5B5-478E-9ECC-B369E473A5C0"
},
{
cssPosition:"84,-1,-1,5,131,20",
text:"Anticipos",
transparent:true,
typeid:7,
uuid:"0F0F8BAC-D5E7-46D1-8E85-53370C53C6B2"
},
{
cssPosition:"34,-1,-1,5,131,20",
text:"Facturas pendientes",
transparent:true,
typeid:7,
uuid:"21887FC6-5562-4C05-B401-2520404B6D8A"
},
{
cssPosition:"117,-1,-1,5,131,20",
text:"Total",
transparent:true,
typeid:7,
uuid:"21BF9EE7-43D8-4923-8AA1-7507699376ED"
},
{
cssPosition:"9,-1,-1,141,99,20",
dataProviderID:"vl_total_alquiler",
editable:false,
format:"#,###.00",
horizontalAlignment:4,
typeid:4,
uuid:"482CECAB-BA4F-4012-8C8C-68C531345A0E"
},
{
cssPosition:"84,-1,-1,245,45,20",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"20",
left:"245",
right:"-1",
top:"84",
width:"45"
},
formIndex:2,
imageStyleClass:"fas fa-eye",
location:{
x:10,
y:10
},
onActionMethodID:"FF6AA061-7FF3-4B3C-BDFF-DBEDE0FBBE06",
styleClass:"btn btn-default btn-success",
tabSeq:5
},
location:"10,10",
name:"btn_anticipos",
styleClass:"btn btn-default btn-success",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"490F4A33-7F09-418E-B03B-82290FEF58D2"
},
{
cssPosition:"59,-1,-1,141,99,20",
dataProviderID:"vl_total_credito",
editable:false,
format:"#,###.00",
horizontalAlignment:4,
typeid:4,
uuid:"4BF2F4E7-C0FB-4C2A-A02A-69C7DE23A313"
},
{
cssPosition:"9,-1,-1,5,131,20",
text:"Devoluciones pendientes",
transparent:true,
typeid:7,
uuid:"53BBA2BE-EED2-42C0-B4E8-EA73E1501AC0"
},
{
cssPosition:"84,-1,-1,141,99,20",
dataProviderID:"vl_anticipos",
editable:false,
format:"#,###.00",
horizontalAlignment:4,
typeid:4,
uuid:"62C233A7-4760-4504-A9BA-534F022D7DB3"
},
{
cssPosition:"34,-1,-1,245,45,20",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"20",
left:"245",
right:"-1",
top:"34",
width:"45"
},
formIndex:2,
imageStyleClass:"fas fa-eye",
location:{
x:10,
y:10
},
onActionMethodID:"FF6AA061-7FF3-4B3C-BDFF-DBEDE0FBBE06",
styleClass:"btn btn-default btn-success",
tabSeq:5
},
location:"10,10",
name:"btn_facturas",
styleClass:"btn btn-default btn-success",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"77D53F36-F3CD-4698-8C21-A073486FA60B"
},
{
cssPosition:"117,-1,-1,141,99,20",
dataProviderID:"vl_total",
editable:false,
format:"#,###.00",
horizontalAlignment:4,
typeid:4,
uuid:"8F87295D-49BA-4B59-85B7-5E2C74198C40"
},
{
cssPosition:"34,-1,-1,141,99,20",
dataProviderID:"vl_total_fact",
editable:false,
format:"#,###.00",
horizontalAlignment:4,
typeid:4,
uuid:"BC157BD3-09E8-4436-93A2-D7EBD8881F98"
},
{
cssPosition:"10,-1,-1,245,45,20",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"20",
left:"245",
right:"-1",
top:"10",
width:"45"
},
formIndex:2,
imageStyleClass:"fas fa-eye",
location:{
x:10,
y:10
},
onActionMethodID:"FF6AA061-7FF3-4B3C-BDFF-DBEDE0FBBE06",
styleClass:"btn btn-default btn-success",
tabSeq:5
},
location:"10,10",
name:"btn_devoluciones",
styleClass:"btn btn-default btn-success",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"E124537A-28E3-442F-8638-4524F2A99924"
},
{
height:480,
partType:5,
typeid:19,
uuid:"E37D887B-25D5-4C70-9296-F61773DDD938"
},
{
cssPosition:"59,-1,-1,245,45,20",
formIndex:2,
json:{
cssPosition:{
bottom:"-1",
height:"20",
left:"245",
right:"-1",
top:"59",
width:"45"
},
formIndex:2,
imageStyleClass:"fas fa-eye",
location:{
x:10,
y:10
},
onActionMethodID:"FF6AA061-7FF3-4B3C-BDFF-DBEDE0FBBE06",
styleClass:"btn btn-default btn-success",
tabSeq:5
},
location:"10,10",
name:"btn_nc",
styleClass:"btn btn-default btn-success",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"E51FF149-3280-4CC2-84C6-99F890143187"
}
],
name:"clientes_estado_facturacion",
navigatorID:"-1",
onShowMethodID:"60957936-B61C-4987-8DFE-A2FFDCDD2EDD",
showInMenu:true,
typeid:3,
uuid:"6E3783B7-4564-4251-8208-692B694C3416"