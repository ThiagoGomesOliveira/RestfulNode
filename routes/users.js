let Nedb = require('nedb');
let db = new Nedb({
    filename: 'users.db',
    autoload: true
});

module.exports = (app) => {

    app.get('/users', (req, res) => {

         // comando equivalente ao select sem where no banco e ordenando pelo nome.
        db.find({}).sort({name: 1}).exec((err,users) =>{

            if(err){
                console.log('error'+ err);
                res.status(400);
                res.json({error: err});
            }else{
                res.status(200);
                res.setHeader('Content-type', 'Application/json');
                res.json([{users}])
            }

        })

      
    });


    app.post('/users', (req, res) => {

        db.insert(req.body, (err, user) => {

            if (err) {
                res.status(400);
                res.json({ error: err })
                console.log("error", err);
            } else {
                res.status(200);
                res.json(user)
            }

        })


    });

}