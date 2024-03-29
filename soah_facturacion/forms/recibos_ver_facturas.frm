customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/vent_comprobantes_recibo",
encapsulation:44,
items:[
{
cssPosition:"2,0,0,0,575,364",
formIndex:1,
json:{
columns:[
{
dataprovider:"vent_comprobantes_recibo_to_vent_comprobantes_facturas.calc_num_comprobante",
headerStyleClass:"cell_center_header",
headerText:"Comprobante",
styleClass:"cell_center",
svyUUID:"4E25E83B-6468-4100-B82F-B1D2CA798571",
width:"200"
},
{
dataprovider:"vent_comprobantes_recibo_to_vent_comprobantes_facturas.comp_fecha_emision",
format:"dd/MM/yy",
headerStyleClass:"cell_center_header",
headerText:"Fecha",
styleClass:"cell_center",
svyUUID:"3FEE145F-17FD-41D9-8952-995E070AAF0C",
width:"150"
},
{
dataprovider:"vent_comprobantes_recibo_to_vent_comprobantes_facturas.comp_imp_total",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Importe",
styleClass:"cell_right",
svyUUID:"54AEF57E-3E93-4503-B5C3-39D9E4E52DFA",
width:"100"
},
{
dataprovider:"comp_importe",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Aplicado",
styleClass:"cell_right",
svyUUID:"B89FE683-8699-493E-99CE-0D621AB95C00",
width:"150"
}
],
cssPosition:{
bottom:"0",
height:"364",
left:"0",
right:"0",
top:"2",
width:"575"
},
enableColumnResize:true,
formIndex:1,
location:{
x:10,
y:10
},
onCellDoubleClick:"CBB3FA6B-85A3-4B45-A707-740482F892A5",
pageSize:0
},
location:"10,10",
name:"table_3",
typeName:"servoyextra-table",
typeid:47,
uuid:"08654A13-D863-4857-B9C3-1EFDC52FB34C"
},
{
height:482,
partType:5,
typeid:19,
uuid:"D3C39279-A628-4FB2-8830-FBAEAB02F386"
}
],
name:"recibos_ver_facturas",
navigatorID:"-1",
showInMenu:true,
typeid:3,
uuid:"678530C0-0BF3-4FFC-BF75-2CFA5602D806"