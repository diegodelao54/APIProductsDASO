const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const res = require('express/lib/response');
const app = express();


app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());
app.use(cors());

const db_manager = require('./persistence/dbmanager');

///////////////////////// CRUD //////////////////////////

//CREADTE----------->POST
app.post('/products',(req,res) =>{
    db_manager.products_create(req,res)
});

//READ----------->GET
app.get('/products',(req,res) =>{
    db_manager.products_read(req,res)
});

//UPDATE----------->PUT
app.put('/products',(req,res) =>{
    db_manager.products_update(req,res)
});

//DELETE----------->DELETE
app.delete('/products',(req,res) =>{
    db_manager.products_delete(req,res)
});


app.get('/', (req, res) =>{
    res.send("Hello Word :v");
});

// Settings port
app.set('port', process.env.PORT || 8985);

// llama al puerto escucha o starting server

app.listen(app.get('port'), () => {
    console.log('API running on port: '+app.get('port'));
});

