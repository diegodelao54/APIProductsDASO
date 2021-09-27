var mongoose = require('mongoose');
const products = require('./products');
//ruta de la base de datos
var dev_db_url = "mongodb://localhost:27017/db_diego";

var mongoDB = process.env.MONGODB_URI || dev_db_url

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB conecction error : '));

var Products = require('./products');

///////////////// CRUD OPERATIONS ///////////////////////////
//create 

exports.products_create = function(req, res)
{
    var products = new Products({
        name:req.body.name,
        _id:req.body.id,
        price:req.body.price,
        stock: req.body.stock
    });
   
    products.save(function(err)
    {
        if(err)
        {
            res.status(500).send({message: err.message})
            //return next(err);
        }
        res.send({'message':'Product Create'});
    });

}

//read 

exports.products_read = function(req, res)
{
    Products.findById(req.query.id, function(err,products){
        if(err)
        {
            return next(err);
        }
        res.send(products)
    });
}

//update 

exports.products_update = function(req, res)
{
    Products.findByIdAndUpdate(req.body.id, {$set:req.body}, function(err,products){
        if(err)
        {
            return next(err);
        }
        res.send({'message':'Product Update'})
    });
}

//Delete 

exports.products_delete = function(req, res)
{
    Products.findByIdAndRemove(req.query.id, function(err,products){
        if(err)
        {
            return next(err);
        }
        res.send({'message':'Product DELETE'})
    });
}
