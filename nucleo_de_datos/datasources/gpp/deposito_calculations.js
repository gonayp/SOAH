/**
 * @properties={type:8,typeid:36,uuid:"AD54A813-9CE1-4C31-BA13-852108A6C140"}
 */
function calc_cantidad_x_prod()
{
	
	var cantidad = 0
	
	var nRecordCount = 0
	nRecordCount = deposito_to_deposito_stock.getSize();
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = deposito_to_deposito_stock.getRecord(index);
		if(myRecord.producto_id == globals.vg_producto){
			if(myRecord.ds_tipo == 1){
				cantidad += myRecord.ds_cantidad
			}
			else{
				cantidad -= myRecord.ds_cantidad
			}
		}
	}
	
	return cantidad
}
