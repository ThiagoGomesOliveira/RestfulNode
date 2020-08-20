let express = require('express')
let routes = express.Router();


routes.get('/', (req,res) =>{
 
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.send('<h1>RestFul</h1>')

});

module.exports = routes;