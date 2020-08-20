const  express = require('express');

const routeIndex = require('./routes/index');
const routeUsers = require('./routes/users')

const app = express();


app.use(routeIndex);
app.use('/users',routeUsers);





app.listen('3000','127.0.0.1', (req,res) =>{

    console.log("Servidor rodando...!");
})