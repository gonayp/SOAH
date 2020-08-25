customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/logisticadh/rentalreturn",
encapsulation:108,
items:[
{
height:792,
partType:5,
typeid:19,
uuid:"0658F890-B728-4BF7-86F4-C373BC2051A5"
},
{
cssPosition:"56,-1,-1,575,140,20",
dataProviderID:"vl_fecha_fin",
displayType:5,
formIndex:4,
format:"dd/MM/yy|mask",
onDataChangeMethodID:"B249CB48-4547-4BCE-A985-5911937A9A78",
typeid:4,
uuid:"490EBDF9-D5B8-45CF-9E90-672242B6CD51"
},
{
cssPosition:"100,0,-1,0,636,542",
json:{
columns:[
{
dataprovider:"internalid",
headerText:"internalID",
svyUUID:"F01B0A0E-BE7A-4CF1-9118-2D4F93F4DEA5",
width:"100"
},
{
dataprovider:"custcode",
headerText:"custCode",
svyUUID:"6D27591F-E638-4E41-9195-B8B1AC6F5B3A",
width:"100"
},
{
dataprovider:"rentalreturn_to_customer_1_devolucion_to_cliente.name",
headerText:"Nombre Cliente",
svyUUID:"C01655A8-E3DF-4F18-9654-41E8B7B68D6F",
width:"200"
},
{
dataprovider:"status",
headerText:"status",
svyUUID:"E38AE936-FD94-4C0A-A6D8-CE811A79F2AF",
width:"80"
},
{
dataprovider:"transdate",
format:"dd/MM/yy",
headerText:"transDate",
svyUUID:"4D65A2B5-EB58-44C7-8D93-9F29A52CB6A1",
width:"100"
},
{
dataprovider:"calc_hora",
headerText:"Hora",
svyUUID:"302543BC-D734-4F82-A408-16C5AD52CC6E",
width:"100"
},
{
dataprovider:"sernr",
headerText:"serNr",
svyUUID:"A59A5D41-C346-491D-AC9F-BFEEA8971A19",
width:"150"
},
{
dataprovider:"subtotal",
format:"#,###.00",
headerText:"subTotal",
svyUUID:"0A2B93BF-4CD1-4326-90E5-584D8045C5D0",
width:"150"
},
{
dataprovider:"vattotal",
format:"#,###.00",
headerText:"vatTotal",
svyUUID:"52B8061D-9745-4376-9680-AD47641DD817",
width:"150"
},
{
dataprovider:"total",
format:"#,###.00",
headerText:"total",
svyUUID:"D3621576-85D1-4344-8988-6B35219B8C4D",
width:"150"
},
{
dataprovider:"salessubtotal",
format:"#,###.00",
headerText:"salesSubTotal",
svyUUID:"23E17894-8456-4048-92BA-23A011159686",
width:"150"
},
{
dataprovider:"salesvat",
format:"#,###.00",
headerText:"salesVat",
svyUUID:"7E421671-B4A3-4D84-9E2E-65A46F68C580",
width:"150"
},
{
dataprovider:"salestotal",
format:"#,###.00",
headerText:"salesTotal",
svyUUID:"7FFB53BE-56D0-4FA4-9A15-CC189C859E43",
width:"150"
},
{
dataprovider:"rentalsalessubtotal",
format:"#,###.00",
headerText:"rentalSalesSubTotal",
svyUUID:"E935BC64-D6B8-4F58-81E7-7BFB8C8C284A",
width:"150"
},
{
dataprovider:"rentalsalesvat",
format:"#,###.00",
headerText:"rentalSalesVat",
svyUUID:"B7FD60A8-7754-40BD-8DCA-2F299A917AF5",
width:"150"
},
{
dataprovider:"rentalsalestotal",
format:"#,###.00",
headerText:"rentalSalesTotal",
svyUUID:"313D4885-36E7-4F74-A33A-F8C49613AABC",
width:"150"
},
{
dataprovider:"labels",
headerText:"labels",
svyUUID:"A276AA1C-8810-4985-BEC4-E7A4451345FF",
width:"200"
},
{
dataprovider:"user",
headerText:"user",
svyUUID:"9C04CEAD-88DF-4181-98C3-8528644B10D5",
width:"80"
},
{
dataprovider:"computer",
headerText:"computer",
svyUUID:"5AC1F211-68CE-4E86-B30C-674A475FBA0F",
width:"100"
},
{
dataprovider:"origintype",
headerText:"OriginType",
svyUUID:"896F907C-4C8C-4A27-845A-E08FCBBD3638",
width:"100"
}
],
cssPosition:{
bottom:"-1",
height:"542",
left:"0",
right:"0",
top:"100",
width:"636"
},
pageSize:null
},
name:"table_1",
typeName:"servoyextra-table",
typeid:47,
uuid:"5C6560AE-E943-4292-B48C-D16615BFC618"
},
{
cssPosition:"56,-1,-1,430,140,20",
dataProviderID:"vl_fecha_ini",
displayType:5,
formIndex:2,
format:"dd/MM/yy|mask",
onDataChangeMethodID:"B249CB48-4547-4BCE-A985-5911937A9A78",
typeid:4,
uuid:"60BCA612-3CA7-4BA4-A435-B1C485E9BA32"
},
{
cssPosition:"9,-1,-1,208,207,79",
fontType:"0,0,31,Dialog",
text:"Devoluciones",
typeid:7,
uuid:"6FB2A34D-FEB1-47A3-A9DF-6B92EBE6359E"
},
{
cssPosition:"647,0,-317,0,637,145",
items:[
{
containsFormID:"712C117E-E65B-41CF-BCE2-7D8E84824E2C",
location:"249,671",
relationName:"rentalreturn_to_rentalreturnsalesrow_1_devoluciones_to_ventas",
text:"Ventas",
typeid:15,
uuid:"0D35CF13-6338-4E2B-9991-C719CA585F16"
},
{
containsFormID:"16D4E979-4500-47F5-8B8F-8453F79386C4",
location:"169,671",
relationName:"rentalreturn_to_rentalreturnitemrow_1_devolucion_to_item",
text:"Alquilados",
typeid:15,
uuid:"D5B0A49A-B295-4404-A319-8C014E68EB5C"
}
],
name:"tabs",
printable:false,
transparent:true,
typeid:16,
uuid:"8113A2E4-083C-4953-AE6D-7A4C06C07812"
},
{
cssPosition:"9,-1,-1,17,176,50",
json:{
cssPosition:{
bottom:"-1",
height:"50",
left:"17",
right:"-1",
top:"9",
width:"176"
},
imageStyleClass:"fas fa-reply",
onActionMethodID:"89643959-E1E8-486B-A62F-FD8B8B29BD3A",
tabSeq:-2,
text:"Volver"
},
name:"btn_nuevo_clientec",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"9CEAA9DF-8035-4E49-8FCD-0E4E2273D875"
},
{
cssPosition:"36,-1,-1,575,95,20",
formIndex:4,
text:"Fecha Final",
transparent:true,
typeid:7,
uuid:"A5DFC672-82E2-44DE-81C3-62DC3E5841FD"
},
{
cssPosition:"36,-1,-1,430,119,20",
formIndex:3,
text:"Fecha Inicial",
transparent:true,
typeid:7,
uuid:"DF7CB26D-B35E-4421-979D-FB73029AE2CA"
}
],
name:"devoluciones",
navigatorID:"-1",
onShowMethodID:"FA1F6D13-A859-4E57-9084-3BFFF94169AE",
showInMenu:true,
size:"756,792",
typeid:3,
uuid:"35BA99E1-FB4D-414B-9FAD-519F1184BD3A"