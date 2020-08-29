
module.exports = (app) =>{

    app.get('/users', (req,res) =>{

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
    
    
    app.get('/users/admin', (req,res) =>{
    
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

}