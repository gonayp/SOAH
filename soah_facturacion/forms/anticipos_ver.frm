customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/gpp/vent_comprobantes",
encapsulation:4,
items:[
{
cssPosition:"234,0,54,60,463,236",
formIndex:14,
items:[
{
containsFormID:"996CE487-B1FD-46F1-9FF6-D98783D9537F",
location:"250,40",
relationName:"vent_comprobantes_anticipo_to_vent_comprobantes_recibo",
text:"Comprobantes",
typeid:15,
uuid:"B2C75405-1CDF-4490-9ED0-37DCEDE761D0"
}
],
name:"tabs",
printable:false,
transparent:true,
typeid:16,
uuid:"0B1089DF-4554-472F-9465-DF1B13340C29"
},
{
cssPosition:"65,-1,-1,111,115,20",
dataProviderID:"comp_numero",
editable:false,
horizontalAlignment:0,
tabSeq:-2,
typeid:4,
uuid:"12B7E95E-776D-4021-9BB7-3AAAD2A9E4B8"
},
{
cssPosition:"120,-1,-1,5,45,35",
formIndex:4,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"5",
right:"-1",
top:"120",
width:"45"
},
formIndex:4,
imageStyleClass:"fas fa-send",
onActionMethodID:"B34D24C0-5053-47D5-9ECB-C554EBA3C387",
tabSeq:-2,
toolTipText:"Enviar por mail",
visible:false
},
name:"btn_mail",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"27321820-AA75-455B-8579-4D9B20D3599C",
visible:false
},
{
cssPosition:"80,-1,-1,5,45,35",
formIndex:4,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"5",
right:"-1",
top:"80",
width:"45"
},
formIndex:4,
imageStyleClass:"fas fa-print",
onActionMethodID:"A443EC81-109C-4BDE-B41E-96ED3313C8E1",
tabSeq:-2,
toolTipText:"Imprimir",
visible:true
},
name:"btn_cancelc",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"3A207B74-7264-4E40-80FB-B3D2810D9BE5"
},
{
cssPosition:"160,-1,-1,65,553,63",
dataProviderID:"comp_observacion",
displayType:1,
editable:false,
scrollbars:32,
tabSeq:7,
typeid:4,
uuid:"3B75018C-2952-41F3-A702-402F1907272B"
},
{
cssPosition:"65,-1,-1,478,140,20",
dataProviderID:"comp_estado_id",
editable:false,
typeid:4,
uuid:"40CA9EE7-0185-4E60-A81F-BA28F3BE88E2",
valuelistID:"315CF69D-3DF4-474B-9752-158384395DEB"
},
{
cssPosition:"45,-1,-1,65,59,20",
formIndex:3,
text:"PV",
transparent:true,
typeid:7,
uuid:"44089D35-1FAD-45A9-B5E4-8BF849CBBEDA"
},
{
cssPosition:"45,-1,-1,478,80,20",
formIndex:18,
text:"Estado",
transparent:true,
typeid:7,
uuid:"50294467-98AA-4903-AB5F-5720785F4ACF"
},
{
cssPosition:"45,-1,-1,304,80,20",
formIndex:15,
text:"Tipo",
transparent:true,
typeid:7,
uuid:"5074F6DD-3BA9-4111-8C30-34BC0DB3D985"
},
{
cssPosition:"40,-1,-1,5,45,35",
formIndex:4,
json:{
cssPosition:{
bottom:"-1",
height:"35",
left:"5",
right:"-1",
top:"40",
width:"45"
},
formIndex:4,
imageStyleClass:"fas fa-undo",
onActionMethodID:"317537CC-A41A-4830-9C89-920FBF407168",
tabSeq:-2,
toolTipText:"Cancelar"
},
name:"btn_cancel",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"60D8F6D8-2443-4FFC-851F-50C60C74A26A"
},
{
cssPosition:"90,-1,-1,210,80,20",
formIndex:4,
tabSeq:-2,
text:"Cliente",
transparent:true,
typeid:7,
uuid:"64AA1B32-BDCF-417B-BEDF-ACF002F020D4"
},
{
cssPosition:"65,-1,-1,304,169,20",
dataProviderID:"comp_codigo",
editable:false,
typeid:4,
uuid:"69EA29B5-55F0-4329-8310-1F9F2CBB6D7A",
valuelistID:"EFFD7044-4535-41C0-9D9C-EE46585B5DDB"
},
{
cssPosition:"0,0,-1,0,642,40",
formIndex:3,
styleClass:"banner",
tabSeq:-2,
text:"Anticipo",
typeid:7,
uuid:"76C1F3C4-2050-4924-B0C4-6AA6F31DF194",
verticalAlignment:1
},
{
cssPosition:"142,-1,-1,65,278,20",
formIndex:11,
tabSeq:-2,
text:"Observaciones",
transparent:true,
typeid:7,
uuid:"7947B888-0E9E-450B-A52C-19B53270C638"
},
{
cssPosition:"-1,-1,24,70,98,20",
formIndex:12,
text:"Total",
transparent:true,
typeid:7,
uuid:"7C13CCD8-61D2-4342-B9DD-B13F7F79A2EB"
},
{
cssPosition:"45,-1,-1,631,80,20",
formIndex:17,
text:"ID",
transparent:true,
typeid:7,
uuid:"7D046FFD-D09B-4642-AFC7-273A78A546E2"
},
{
cssPosition:"-1,-1,4,70,98,20",
dataProviderID:"comp_imp_total",
editable:false,
formIndex:2,
format:"#,###.00",
horizontalAlignment:4,
typeid:4,
uuid:"9926A80A-2870-47CF-A534-59594D622BB3"
},
{
cssPosition:"110,-1,-1,210,263,20",
dataProviderID:"cliente_id",
displayType:10,
editable:false,
name:"f_cliente",
onDataChangeMethodID:"-1",
tabSeq:1,
typeid:4,
uuid:"A519BA93-DA9E-4FF2-B2CA-AFC1FF391396",
valuelistID:"AC2E1B90-8F1D-4F2F-8176-0F118C8B06F6"
},
{
cssPosition:"45,-1,-1,111,80,20",
formIndex:3,
tabSeq:-2,
text:"Número",
transparent:true,
typeid:7,
uuid:"A68D2194-0657-4866-A469-91ECD7B0DBC5"
},
{
cssPosition:"65,-1,-1,65,36,20",
dataProviderID:"comp_pv",
editable:false,
horizontalAlignment:0,
typeid:4,
uuid:"B7CB22AC-46E9-46EE-AA04-4DF75BE7A9C1",
valuelistID:"9FEB7024-5746-401F-BECE-F2404FC96AEC"
},
{
cssPosition:"45,-1,-1,234,63,20",
formIndex:3,
text:"Código",
transparent:true,
typeid:7,
uuid:"C3FDB942-4D1A-4831-ADC5-E4A0A7DB9A43"
},
{
cssPosition:"111,-1,-1,65,140,20",
dataProviderID:"comp_fecha_emision",
editable:false,
format:"dd/MM/yy HH:mm",
name:"f_fecha",
onDataChangeMethodID:"-1",
tabSeq:3,
typeid:4,
uuid:"C469271D-FFC5-4AF1-9734-E23EB9B7016F"
},
{
cssPosition:"65,-1,-1,234,63,20",
dataProviderID:"comp_codigo",
editable:false,
horizontalAlignment:0,
typeid:4,
uuid:"DF831438-E630-49CB-BD47-837B25E1213D"
},
{
cssPosition:"39,-1,0,0,60,59",
styleClass:"banner",
tabSeq:-2,
typeid:7,
uuid:"E782BD78-FBF1-4937-9C44-F2E04AB66FD6",
verticalAlignment:1
},
{
cssPosition:"65,-1,-1,631,46,20",
dataProviderID:"comp_id",
editable:false,
horizontalAlignment:4,
typeid:4,
uuid:"EBA115AA-F4CF-424E-920A-F4DA8A9C345F"
},
{
cssPosition:"91,-1,-1,65,80,20",
formIndex:5,
tabSeq:-2,
text:"Fecha",
transparent:true,
typeid:7,
uuid:"F3A4C856-DFDA-4781-B230-AD0CEACB0339"
},
{
cssPosition:"-1,0,0,0,642,53",
formIndex:1,
location:"10,10",
styleClass:"banner-darck",
tabSeq:-2,
typeid:7,
uuid:"F8721456-5261-4741-8E15-83BDC9649AB7",
verticalAlignment:1
},
{
height:604,
partType:5,
typeid:19,
uuid:"FF057786-2521-4B7F-ADAC-94BFA8EAB163"
}
],
name:"anticipos_ver",
namedFoundSet:"separate_recibos",
navigatorID:"-1",
onShowMethodID:"FF5F1FF6-36B2-4E3A-AA3F-4325FB47387D",
showInMenu:true,
size:"890,550",
typeid:3,
uuid:"76EFFF49-A7C5-48F9-9BEA-EC1286C59CB3"