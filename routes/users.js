let express = require('express');
let route = express.Router();


route.get('/', (req,res) =>{

    res.statusCode =200;
    res.setHeader('Content-type','Application/json');
    res.json([{
        users:{
            name:'Thiago Gomes Oliveira',
            email:'thiago.blu1988@gmail.com',
            id:1
        }
    }])
});


route.get('/admin', (req,res) =>{

    res.statusCode =200;
    res.setHeader('Content-type','Application/json');
    res.json([{
        admin:{
            name:'Thiago Gomes Oliveira',
            email:'thiago.blu1988@gmail.com',
            id:1
        }
    }])
});
module.exports = route;