/**
 * @properties={type:8,typeid:36,uuid:"FE22B727-266F-4859-A3D6-EC4A083EED8E"}
 */
function calc_stock_x_depot()
{
var cantidad = 0
	
	var nRecordCount = 0
	nRecordCount = prod_productos_to_deposito_stock.getSize();
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = prod_productos_to_deposito_stock.getRecord(index);
		if(myRecord.deposito_id == globals.vg_deposito){
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

/**
 * @properties={type:8,typeid:36,uuid:"8D2C4CD3-6EB0-454C-9DB0-AC50B0DC8611"}
 */
function calc_stock()
{
	
	var cantidad = 0
	
	var nRecordCount = 0
	nRecordCount = prod_productos_to_deposito_stock.getSize();
	for (var index = 1; index <= nRecordCount; index++) {
		var myRecord = prod_productos_to_deposito_stock.getRecord(index);
		if(myRecord.ds_tipo == 1){
			cantidad += myRecord.ds_cantidad
		}
		else{
			cantidad -= myRecord.ds_cantidad
		}
	}
	
	return cantidad
}
