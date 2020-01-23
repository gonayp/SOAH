customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/cmpr_comprobantes_productos",
encapsulation:36,
items:[
{
cssPosition:"1,0,0,0,575,364",
formIndex:1,
json:{
columns:[
{
dataprovider:"comp_prod_nombre",
headerStyleClass:"cell_left_header",
headerText:"Nombre",
styleClass:"cell_left",
svyUUID:"CDDCC1D5-DB32-4D6B-BA52-51B16E6582AF",
width:"200"
},
{
dataprovider:"comp_prod_unidad",
headerStyleClass:"cell_left_header",
headerText:"Unidad",
styleClass:"cell_left",
svyUUID:"47A908A0-63B0-4037-A781-1DFA3E438209",
width:"150"
},
{
dataprovider:"comp_cantidad",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Cantidad",
styleClass:"cell_right",
svyUUID:"BC6D6610-5062-45B8-B0B4-A650034CCFF1",
width:"150"
},
{
dataprovider:"comp_precio",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Precio",
styleClass:"cell_right",
svyUUID:"F71582C9-0157-4656-A590-1A4162E26365",
width:"100"
},
{
dataprovider:"calcTotal",
format:"#,###.00",
headerStyleClass:"cell_right_header",
headerText:"Total",
styleClass:"cell_right",
svyUUID:"89D18095-E5C5-4C20-82F6-DB51A56ECDFD",
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
uuid:"580742FA-AE9E-46B6-8427-0E3D8F380D02"
},
{
height:482,
partType:5,
typeid:19,
uuid:"DD2B9968-CA4C-4872-A66D-5B8CAEEECA66"
}
],
name:"comprobante_ver_productos",
navigatorID:"-1",
onShowMethodID:"E84724A6-DBF8-48D2-994E-722CC94AFE7D",
showInMenu:true,
typeid:3,
uuid:"C98BA0B9-10A9-47D8-A5E4-C270DCFD40BE"