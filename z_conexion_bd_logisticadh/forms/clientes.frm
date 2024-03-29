customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/logisticadh/customer",
encapsulation:108,
items:[
{
cssPosition:"39,-1,-1,400,80,19",
formIndex:5,
text:"Codigo",
transparent:true,
typeid:7,
uuid:"297693AA-AD98-4493-80D3-B1CC331AB942"
},
{
cssPosition:"59,-1,-1,400,80,19",
dataProviderID:"vl_codigo",
onDataChangeMethodID:"2DA4DFF0-17A0-4158-9642-15673CAB6A51",
typeid:4,
uuid:"35F2E617-1046-474A-902C-932E6BD77E94"
},
{
cssPosition:"100,0,278,0,634,300",
json:{
columns:[
{
dataprovider:"internalid",
headerText:"internalid",
svyUUID:"F0CDAA00-F3F1-4472-949D-9768AAD2740E",
width:"100"
},
{
dataprovider:"code",
headerText:"code",
svyUUID:"CD85A741-75CE-498F-B531-3B1E89E95B85",
width:"150"
},
{
dataprovider:"fantasyname",
headerText:"fantasyname",
svyUUID:"C3BD4590-73DD-4C67-85D5-6B2CFD9D8D14",
width:"200"
},
{
dataprovider:"name",
headerText:"name",
svyUUID:"4F207C8F-1190-49A9-B895-3091B38178F5",
width:"200"
},
{
dataprovider:"mobile",
headerText:"mobile",
svyUUID:"7A0D7630-957D-43CF-B6B4-4C5705EEB25D",
width:"200"
},
{
dataprovider:"taxregnr",
headerText:"Taxregnr  Documento",
svyUUID:"2F0D60C6-6B47-467A-9154-E80D1BF6DE05",
width:"150"
},
{
dataprovider:"warning",
headerText:"Warning",
svyUUID:"96556427-EE84-4809-A2BB-E8515E8AE011",
width:"150"
},
{
dataprovider:"email",
headerText:"email",
svyUUID:"3DAB9E42-2EC9-4FC6-96ED-0D4F56938CD7",
width:"150"
},
{
dataprovider:"zipcode",
headerText:"zipcode",
svyUUID:"443D08A7-6F89-4FD8-A5E4-7E4C420B5BB8",
width:"150"
},
{
dataprovider:"taxregtype",
headerText:"taxregtype",
svyUUID:"3742041A-89FA-4ECD-81BC-B576F885673E",
width:"100"
},
{
dataprovider:"closed",
headerText:"closed",
svyUUID:"3461019A-B7C9-48F9-BC61-5480CE965F38",
width:"100"
},
{
dataprovider:"address",
headerText:"address",
svyUUID:"39E9D541-63FB-4D3F-8BD0-511FC96C1FA6",
width:"150"
},
{
dataprovider:"attachflag",
headerText:"attachflag*",
svyUUID:"EC6360D9-77E2-42A1-838E-82D0E5473DB2",
width:"100"
},
{
dataprovider:"taxreg2type",
headerText:"taxreg2type*",
svyUUID:"45FE3C56-F324-40C2-9EC5-D4EA06FBF813",
width:"150"
},
{
dataprovider:"syncversion",
headerText:"syncversion*",
svyUUID:"A8CD264D-B577-4492-94DF-1F57AB55EBF0",
width:"100"
},
{
autoResize:true,
dataprovider:"comment",
headerText:"comment",
svyUUID:"A828B983-17AF-4907-B7A5-E8B7F8D24E11",
width:null
}
],
cssPosition:{
bottom:"278",
height:"300",
left:"0",
right:"0",
top:"100",
width:"634"
},
pageSize:null
},
name:"table_4",
typeName:"servoyextra-table",
typeid:47,
uuid:"7C9928A2-2174-4025-A402-AFC273735EE4"
},
{
cssPosition:"13,-1,-1,205,181,79",
fontType:"0,0,31,Dialog",
text:"Clientes",
typeid:7,
uuid:"89832B4F-9987-40F4-9D78-1449A0636E99"
},
{
cssPosition:"39,-1,-1,500,80,19",
formIndex:6,
text:"Nombre",
transparent:true,
typeid:7,
uuid:"8BDBDAED-FA31-47B9-935E-06BDD58E8E2C"
},
{
cssPosition:"59,-1,-1,500,140,19",
dataProviderID:"vl_nombre",
onDataChangeMethodID:"2DA4DFF0-17A0-4158-9642-15673CAB6A51",
typeid:4,
uuid:"A5BE7226-30DE-4EC4-BBCC-F49E18D7A694"
},
{
height:480,
partType:5,
typeid:19,
uuid:"ADA31C85-B27E-453E-9485-BA3D991C9BCE"
},
{
cssPosition:"13,-1,-1,14,176,50",
json:{
cssPosition:{
bottom:"-1",
height:"50",
left:"14",
right:"-1",
top:"13",
width:"176"
},
imageStyleClass:"fas fa-reply",
onActionMethodID:"8F3CCD9A-ACC0-419F-BFC2-0668EC4564E4",
tabSeq:-2,
text:"Volver"
},
name:"btn_nuevo_clientec",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"C422B5BA-B07C-4E86-8934-1F1C5BE9512B"
},
{
cssPosition:"-1,0,10,0,640,268",
items:[
{
containsFormID:"11341302-69D9-4800-8642-5C5FDAC9EBF3",
location:"86,382",
relationName:"customer_to_salesorder_1_cliente_to_ordenesventa",
text:"Ordenes Venta",
typeid:15,
uuid:"5C38041B-5CA2-4072-B1A8-F2AD9DD8B2C8"
},
{
containsFormID:"713C7B0A-00E7-4E13-A19B-8838ED655910",
location:"199,380",
relationName:"customer_to_attach_1_cliente_to_adjunto",
text:"adjuntos",
typeid:15,
uuid:"700D734A-8F9E-4226-8FF2-5A759CA5F47D"
}
],
name:"tabs",
printable:false,
transparent:true,
typeid:16,
uuid:"FE6477DE-030F-4E4A-A963-92DA846BD459"
}
],
name:"clientes",
navigatorID:"-1",
onShowMethodID:"B090E2C2-6E5D-4CC0-867E-C76495D88956",
showInMenu:true,
size:"641,480",
typeid:3,
uuid:"BB1864A4-FC33-4437-87DB-F9C98D048B3E"