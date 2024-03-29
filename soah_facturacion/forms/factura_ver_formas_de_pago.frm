customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/vent_comp_forma_pago",
encapsulation:44,
items:[
{
height:285,
partType:5,
typeid:19,
uuid:"01186097-7EEE-4FF5-B491-305F37C5C174"
},
{
cssPosition:"6,0,5,3,842,470",
json:{
columns:[
{
dataprovider:"comp_forma_pago_id",
headerText:"ID",
svyUUID:"E45F8B12-8818-42DF-9C79-83BD357780ED",
width:"80"
},
{
dataprovider:"forma_pago_id",
headerText:"Tipo",
svyUUID:"1FB04254-B8D3-4C6B-88C6-584AC5BB739A",
valuelist:"58C10213-F215-4BA5-A422-4D5E7502D9C0",
width:"200"
},
{
dataprovider:"forma_pago_imp",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Importe",
styleClass:"cell_right",
svyUUID:"F251F1AE-D10E-47BF-883B-FA1D0A166E3F",
width:"150"
},
{
dataprovider:"vent_comp_forma_pago_anticipo_to_vent_comprobantes.calc_num_compr_sin_codig",
headerStyleClass:"cell_center_header",
headerText:"Nro. Anticipo",
styleClass:"cell_center",
svyUUID:"2D6FDF46-5443-4566-9FE4-240B3CACC479",
width:"200"
},
{
dataprovider:"vent_comp_forma_pago_to_cheq_cheques.cheque_numero",
headerStyleClass:"cell_center_header",
headerText:"Nro. Cheque",
styleClass:"cell_center",
svyUUID:"5FE7880A-0014-4B4C-8809-46EE785654DE",
width:"200"
}
],
cssPosition:{
bottom:"5",
height:"470",
left:"3",
right:"0",
top:"6",
width:"842"
},
pageSize:null
},
name:"table_1",
typeName:"servoyextra-table",
typeid:47,
uuid:"4D4123E2-29FE-467D-98ED-81E3E2FEB1EC"
}
],
name:"factura_ver_formas_de_pago",
navigatorID:"-1",
onShowMethodID:"FAEC52B7-A79C-499E-9DCF-4EA140CFDBEF",
scrollbars:32,
showInMenu:true,
size:"846,480",
typeid:3,
uuid:"31B83BD6-CCF9-4E41-8259-1FC126215D60"