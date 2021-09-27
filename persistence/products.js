var mongoose = require("mongoose");

var Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    name: {type:String, required:true, max:50},
    _id: {type:String, required:true},
    price: {type:Number, required:true},
    stock : {type:Number, required:true}

});

//exportar el objeto mongoose del metodo model.
//se define una estructura para un objeto.
module.exports = mongoose.model('Products', ProductsSchema);


