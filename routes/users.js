let Nedb = require('nedb');
let db = new Nedb({
    filename: 'users.db',
    autoload: true
});

module.exports = (app) => {

    app.get('/users', (req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-type', 'Application/json');
        res.json([{
            users: {
                name: 'Thiago Gomes Oliveira',
                email: 'thiago.blu1988@gmail.com',
                id: 1
            }
        }])
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