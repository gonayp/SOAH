customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/vent_comprobante_productos",
encapsulation:36,
items:[
{
height:482,
partType:5,
typeid:19,
uuid:"446F3A07-6324-4A9C-B2D7-1F1D9FE41BE1"
},
{
cssPosition:"1,0,0,0,575,364",
formIndex:1,
json:{
columns:[
{
dataprovider:"vent_comprobante_productos_to_prod_productos.producto_codigo",
headerStyleClass:"cell_center_header",
headerText:"Código",
styleClass:"cell_center",
svyUUID:"BB8FBE2B-C9F3-415E-B779-6B33B9E2409F",
width:"100"
},
{
dataprovider:"comp_prod_nombre",
headerStyleClass:"cell_left_header",
headerText:"Nombre",
styleClass:"cell_left",
svyUUID:"263BD0CB-A7BD-4CB5-850A-97C83D355F8B",
width:"200"
},
{
dataprovider:"comp_prod_unidad",
headerStyleClass:"cell_left_header",
headerText:"Unidad",
styleClass:"cell_left",
svyUUID:"012CE593-CB42-47C4-92DA-E4B0B508CB7A",
width:"150"
},
{
dataprovider:"comp_cantidad",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Cantidad",
styleClass:"cell_right",
svyUUID:"4CE6F6DA-F96F-407E-B1E3-E9272662BC7D",
width:"150"
},
{
dataprovider:"comp_precio",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Precio",
styleClass:"cell_right",
svyUUID:"7FA9DAAC-C19C-43C8-9639-0FD74184C9BA",
width:"100"
},
{
dataprovider:"calc_total",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Total",
styleClass:"cell_right",
svyUUID:"68E2AB48-CBF6-4AFF-ABC1-75D058449BBA",
width:"150"
}
],
cssPosition:{
bottom:"0",
height:"364",
left:"0",
right:"0",
top:"1",
width:"575"
},
enableColumnResize:true,
formIndex:1,
location:{
x:10,
y:10
},
onCellDoubleClick:null,
pageSize:0
},
location:"10,10",
name:"table_3",
typeName:"servoyextra-table",
typeid:47,
uuid:"E7DC59EC-5D55-4CAE-8087-62E1EA730A85"
}
],
name:"factura_devolucion_ver_ventas",
navigatorID:"-1",
onShowMethodID:"175CFE7C-64D5-483B-AC30-765C6B1DBF61",
showInMenu:true,
typeid:3,
uuid:"2B9B13A9-227E-41A8-9A92-F8FC45403DD3"