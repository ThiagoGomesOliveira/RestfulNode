const  express = require('express');
const server = express();




server.get('/', (req,res) =>{
 
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.send('<h1>RestFul</h1>')

})


server.get('/users', (req,res) =>{

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

server.listen('3000','127.0.0.1', (req,res) =>{

    console.log("Servidor rodando...!");
})