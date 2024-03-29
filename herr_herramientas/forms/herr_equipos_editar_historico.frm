customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/herr_historicos",
encapsulation:4,
items:[
{
cssPosition:"10,-1,-1,13,168,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"13",
right:"-1",
top:"10",
width:"168"
},
imageStyleClass:"fas fa-pencil-alt",
onActionMethodID:"ED4B53DC-F838-4DC9-A8F5-9887E036DBD3",
styleClass:"btn btn-default btn-success",
text:"Nuevo Registro"
},
name:"btn_nuevo",
styleClass:"btn btn-default btn-success",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"1D937990-04D8-45DA-B087-2F1C5D24FD60"
},
{
height:482,
partType:5,
typeid:19,
uuid:"58283715-CEB3-4F34-B111-FFCB24249B78"
},
{
cssPosition:"50,1,0,0,575,364",
formIndex:1,
json:{
columns:[
{
dataprovider:"hist_tipo",
headerStyleClass:"cell_left_header",
headerText:"Tipo",
styleClass:"cell_left",
svyUUID:"80D9E41A-5CC2-46F2-BD29-8F4DAA6999EB",
valuelist:"D3BA0029-E890-47C0-AF29-3F90D156F207",
width:"200"
},
{
dataprovider:"hist_fecha",
format:"dd/MM/yy",
headerStyleClass:"cell_center_header",
headerText:"Fecha",
styleClass:"cell_center",
svyUUID:"02E67F81-4FB3-4038-9BBA-E8ACA57379E2",
width:"150"
},
{
dataprovider:"hist_observacion",
headerStyleClass:"cell_left_header",
headerText:"Observaciones",
styleClass:"cell_left",
svyUUID:"B45747F1-CA4F-4993-B098-6DD1FA253C1F",
width:"300"
}
],
cssPosition:{
bottom:"0",
height:"364",
left:"0",
right:"1",
top:"50",
width:"575"
},
enableColumnResize:true,
formIndex:1,
location:{
x:10,
y:10
},
onCellDoubleClick:"7FBCCEE3-CC63-452A-878F-43CAA47A7930",
pageSize:0
},
location:"10,10",
name:"table_3",
typeName:"servoyextra-table",
typeid:47,
uuid:"8A8FB7AB-F4FB-45AC-B801-FB896D5861E9"
}
],
name:"herr_equipos_editar_historico",
navigatorID:"-1",
showInMenu:true,
typeid:3,
uuid:"02F11BE0-E3E4-40C3-A3D0-D741439CFDFC"