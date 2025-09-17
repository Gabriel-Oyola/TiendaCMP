const { default: mongoose } = require('mongoose');
var moongose = require('mongoose');
var Schema = moongose.Schema; 

var CarritoSchema = Schema({
    producto : {type: Schema.ObjectId, ref: 'Producto', require: true}, 
    variedad : {type: Schema.ObjectId, ref: 'variedad', require: true}, 
    cantidad : {type: Number, require: true}, 
    cliente : {type: Schema.ObjectId, ref: 'cliente', require: true}, 
    createdAt: {type: Date, default: Date.now}
});
 
module.exports = mongoose.model('carrito', CarritoSchema);