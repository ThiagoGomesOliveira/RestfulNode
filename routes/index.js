module.exports =  (app) =>{

    app.get('/', (req,res) =>{
 
        res.statusCode = 200;
        res.sendFile(__dirname + '/src/index.html')
    });


}