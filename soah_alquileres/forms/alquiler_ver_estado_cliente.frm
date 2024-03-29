customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/vent_comprobantes",
encapsulation:36,
items:[
{
cssPosition:"9,-1,-1,115,115,20",
text:"Total Facturado",
transparent:true,
typeid:7,
uuid:"217B3D4B-DFC7-4C3A-929A-8D26CFEA1449"
},
{
cssPosition:"9,-1,-1,245,80,20",
text:"Total",
transparent:true,
typeid:7,
uuid:"25AF0658-5CC4-41EE-944E-A2560E006354"
},
{
cssPosition:"9,-1,-1,5,100,20",
text:"Total Alquileres",
transparent:true,
typeid:7,
uuid:"49A8AE02-7308-48E2-9D06-C8514169B507"
},
{
height:480,
partType:5,
typeid:19,
uuid:"62D622F6-10B4-414B-B1D6-942C0F7FE346"
},
{
cssPosition:"29,-1,-1,245,140,20",
dataProviderID:"vl_total",
format:"#,###.00",
horizontalAlignment:4,
typeid:4,
uuid:"9312108B-1F1A-4D6F-8385-1EF9C069986F"
},
{
cssPosition:"29,-1,-1,115,106,20",
dataProviderID:"vl_total_fact",
format:"#,###.00",
horizontalAlignment:4,
typeid:4,
uuid:"A09F68F2-6BFD-4DC9-BBDC-6DB810DE2DBD"
},
{
cssPosition:"29,-1,-1,5,99,20",
dataProviderID:"vl_total_alquiler",
format:"#,###.00",
horizontalAlignment:4,
typeid:4,
uuid:"AF442A80-8525-48CE-B115-555A97FDC21B"
},
{
cssPosition:"60,-1,8,0,638,100",
json:{
columns:[
{
dataprovider:"calc_num_comprobante",
headerStyleClass:"cell_center_header",
headerText:"Comprobante",
styleClass:"cell_center",
svyUUID:"DB3C59AE-349D-4407-A2E3-D9EDA157433F",
width:"100"
},
{
dataprovider:"comp_fecha_emision",
format:"dd/MM/yy HH:mm",
headerStyleClass:"cell_center_header",
headerText:"Fecha",
styleClass:"cell_left",
svyUUID:"5869D54C-37B5-4F8E-8658-34A39DB48033",
width:"150"
},
{
dataprovider:"comp_codigo",
headerStyleClass:"cell_left_header",
headerText:"Tipo",
styleClass:"cell_left",
svyUUID:"4C185075-A0BD-47F6-B767-FF0CE82FD2C8",
valuelist:"F10C06F6-DA7F-44B6-B37D-24DF30F65A58",
width:"150"
},
{
dataprovider:"comp_imp_total",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Total",
styleClass:"cell_right",
svyUUID:"AB3A585A-A5FE-4E3D-A8AC-F8D385DA00F8",
width:"150"
}
],
cssPosition:{
bottom:"8px",
left:"0px",
min-height:"100px",
position:"absolute",
top:"60px",
width:"638px"
},
enableColumnResize:true,
onCellDoubleClick:null,
pageSize:0,
tabSeq:-2
},
name:"table_1",
typeName:"servoyextra-table",
typeid:47,
uuid:"D96A7EE0-F273-459A-AE30-939521F3B6BA"
}
],
name:"alquiler_ver_estado_cliente",
namedFoundSet:"separate",
navigatorID:"-1",
onShowMethodID:"28F0621D-402E-4815-A526-47688D8A1FAF",
showInMenu:true,
typeid:3,
uuid:"58BC0029-3028-4041-8CB7-16E5D6028137"