const  express = require('express');
const consign = require('consign');


const app = express();
consign()
  .include('routes')
  .into(app)



app.listen('3000','127.0.0.1', (req,res) =>{

    console.log("Servidor rodando...!");
})