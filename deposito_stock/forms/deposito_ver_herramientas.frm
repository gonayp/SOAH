customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/herr_equipo",
encapsulation:44,
items:[
{
cssPosition:"2,0,0,0,575,364",
formIndex:1,
json:{
columns:[
{
dataprovider:"equipo_cod_barras",
headerStyleClass:"cell_center_header",
headerText:"Cod. Barras",
styleClass:"cell_center",
svyUUID:"2CC5C017-AB91-4765-BFFA-89E3BC235800",
width:"150"
},
{
dataprovider:"herr_equipo_to_herr_herramientas.herramienta_nombre",
headerStyleClass:"cell_left_header",
headerText:"Herramienta",
styleClass:"cell_left",
svyUUID:"075FEC93-05ED-4DEA-8A02-2E04D42A9908",
width:"200"
},
{
dataprovider:"herr_equipo_to_herr_marca.marca_nombre",
headerStyleClass:"cell_left_header",
headerText:"Marca",
styleClass:"cell_left",
svyUUID:"CB886A9E-4FDB-46A0-8619-D1804D321CBB",
width:"200"
},
{
dataprovider:"herr_equipo_to_herr_modelo.modelo_nombre",
headerStyleClass:"cell_left_header",
headerText:"Modelo",
styleClass:"cell_left",
svyUUID:"372164E0-E042-4E40-9BAB-A89C1ED63CD4",
width:"200"
},
{
dataprovider:"equipo_estado",
headerStyleClass:"cell_center_header",
headerText:"Estado",
styleClass:"cell_center",
svyUUID:"5D678371-1214-44F8-9BE5-C06CA9ECDC30",
valuelist:"DF787460-AF05-4DA4-A94A-6A37E23E1B1C",
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
onCellDoubleClick:"CDC20384-8352-42C8-839F-22FFA91A0F21",
pageSize:0
},
location:"10,10",
name:"table_3",
typeName:"servoyextra-table",
typeid:47,
uuid:"D8AB9ECE-97C4-47EA-8DDE-D33219C756D8"
},
{
height:482,
partType:5,
typeid:19,
uuid:"F8235924-5A78-45B7-B706-34EB41B34980"
}
],
name:"deposito_ver_herramientas",
navigatorID:"-1",
showInMenu:true,
typeid:3,
uuid:"687CC09A-FFDD-4EF0-A919-CBBC01E78E6F"