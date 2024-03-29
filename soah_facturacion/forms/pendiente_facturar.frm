customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/vent_clientes",
encapsulation:108,
items:[
{
cssPosition:"59,-1,-1,342,221,20",
dataProviderID:"vl_incluir_alquileres",
displayType:4,
formIndex:1,
onDataChangeMethodID:"DE54D50D-9477-4B4F-B404-EE5E9F55E80E",
text:"Incluir alquileres pendientes",
toolTipText:"Si no esta seleccionada, solo mostrara clientes con devoluciones pendientes de facturar",
typeid:4,
uuid:"002CA075-07FB-4A40-A89B-9F98D6AA1625"
},
{
cssPosition:"-1,-1,3,66,80,20",
dataProviderID:"aggr_cantidad",
editable:false,
formIndex:3,
horizontalAlignment:4,
typeid:4,
uuid:"058CDC39-EBA1-4A03-A970-3A15408BAA09"
},
{
cssPosition:"67,-1,-1,583,43,35",
formIndex:1,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"583",
right:"-1",
top:"67",
width:"43"
},
formIndex:1,
imageStyleClass:"fas fa-sync",
onActionMethodID:"43FD29C1-A4A8-49CB-B873-49F11C9A0BA0",
toolTipText:"Limpiar busquedas"
},
name:"button_1c",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"07F15098-5502-48D4-86D8-F6EF6DF37B1B"
},
{
borderType:"TitledBorder,Filtros,0,0,Segoe UI,0,12,#000000",
cssPosition:"41,-1,-1,67,565,71",
lineSize:1,
location:"275,56",
typeid:21,
uuid:"182DD799-9C66-4584-A759-E9F116D54508"
},
{
cssPosition:"-1,-1,23,66,80,20",
formIndex:5,
text:"Cantidad",
transparent:true,
typeid:7,
uuid:"24DCC77C-8B46-4554-A87D-8FC56704EABA"
},
{
cssPosition:"61,-1,-1,73,80,20",
formIndex:3,
text:"Código",
transparent:true,
typeid:7,
uuid:"26AF4516-2664-47C7-9255-3599B69F32C2"
},
{
cssPosition:"-1,0,0,61,642,53",
location:"10,10",
styleClass:"banner-darck",
typeid:7,
uuid:"376BDEFB-F170-40B5-8FB3-C222864FE423",
verticalAlignment:1
},
{
cssPosition:"81,-1,-1,73,80,20",
dataProviderID:"vl_codigo",
formIndex:2,
onDataChangeMethodID:"DE54D50D-9477-4B4F-B404-EE5E9F55E80E",
typeid:4,
uuid:"8157F479-B607-4CF0-9BEF-52B44670DE79"
},
{
height:480,
partType:5,
typeid:19,
uuid:"9D24307E-AB8C-4D89-A09D-0076101EB796"
},
{
cssPosition:"61,-1,-1,163,140,20",
formIndex:4,
text:"Nombre",
transparent:true,
typeid:7,
uuid:"B13CF159-5035-48F3-88C4-23EBE837E5F4"
},
{
cssPosition:"0,0,-1,0,642,40",
location:"10,10",
styleClass:"banner",
text:"Pendiente de Facturar",
typeid:7,
uuid:"B24EFA6A-FC4F-4A3C-B65B-A409CE513A07",
verticalAlignment:1
},
{
cssPosition:"82,-1,-1,342,221,20",
dataProviderID:"vl_facturacion_parcial",
displayType:4,
formIndex:1,
onDataChangeMethodID:"DE54D50D-9477-4B4F-B404-EE5E9F55E80E",
text:"Clientes con facturación parcial",
toolTipText:"Incluye clientes que tengan el valor de facturacion parcial activo en los datos del cliente",
typeid:4,
uuid:"C271E499-1B5E-4D71-B291-2DE396ED635E"
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
onActionMethodID:"C37B5D4E-E3C6-40BD-8D4A-29F6DB32A7E2",
toolTipText:"Volver"
},
location:"10,10",
name:"button_2",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"E6DA39F4-1D26-4A8E-89E1-E3CB2ADC237A"
},
{
cssPosition:"115,0,53,60,200,100",
json:{
columns:[
{
styleClass:"fa fa-dollar",
svyUUID:"A5A238B5-D0F8-4BA8-A908-EB39C3454C5A",
width:"40"
},
{
dataprovider:"cliente_codigo",
format:"####",
headerStyleClass:"cell_center_header",
headerText:"Código",
styleClass:"cell_center",
svyUUID:"73257D25-EDAB-4DF6-A8EC-8DD9A9145424",
width:"80"
},
{
dataprovider:"vent_clientes_to_core.core_nombre",
headerStyleClass:"cell_left_header",
headerText:"Cliente",
styleClass:"cell_left",
svyUUID:"A16DDC37-BC96-4FEE-A09E-64BE3A32744D",
width:"200"
},
{
dataprovider:"calc_pendiente",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Pendiente",
styleClass:"cell_right",
svyUUID:"D037DA8C-B43B-4E03-920B-5744F8030DF3",
width:"150"
},
{
dataprovider:"calc_pendiente_devoluciones",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Devoluciones",
styleClass:"cell_right",
svyUUID:"7778B9FF-8827-4655-9513-C7243DFC7EC3",
width:"150"
},
{
styleClass:"fas fa-eye",
svyUUID:"80001497-7003-46A3-8A6B-8C9E566BD18A",
width:"40"
},
{
dataprovider:"calc_pendiente_alquileres",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Alquileres",
styleClass:"cell_right",
svyUUID:"A7894FC8-4F36-4802-B2C1-C446059C6880",
width:"150"
},
{
styleClass:"fas fa-eye",
svyUUID:"904F5A11-3383-4F0F-9445-FE6D3DFAA7B6",
width:"40"
}
],
cssPosition:{
bottom:"53",
height:"100",
left:"60",
right:"0",
top:"115",
width:"200"
},
onCellClick:"CD5294CE-79E4-4262-B811-2402E935C12F",
pageSize:0
},
name:"table_2",
typeName:"servoyextra-table",
typeid:47,
uuid:"ECAC046C-D95D-4522-8591-FD0A35B4EECC"
},
{
cssPosition:"39,-1,0,0,60,443",
location:"10,10",
styleClass:"banner",
typeid:7,
uuid:"F91BA1F7-D388-407E-AE62-9C3A59B13DCC",
verticalAlignment:1
},
{
cssPosition:"81,-1,-1,163,140,20",
dataProviderID:"vl_nombre",
formIndex:1,
onDataChangeMethodID:"DE54D50D-9477-4B4F-B404-EE5E9F55E80E",
typeid:4,
uuid:"FA2B4198-D478-419F-B056-63450A1CAC97"
}
],
name:"pendiente_facturar",
namedFoundSet:"separate",
navigatorID:"-1",
onShowMethodID:"7E87AEDF-3698-4B3A-9225-F9E9077AE11A",
showInMenu:true,
typeid:3,
uuid:"7CCDE1DE-354D-4C3B-9B21-F22568A0972D"