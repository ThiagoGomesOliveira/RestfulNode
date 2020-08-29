let Nedb = require('nedb');
let db = new Nedb({
    filename: 'users.db',
    autoload: true
});

module.exports = (app) => {

    let route = app.route('/users')
    route.get((req, res) => {

        // comando equivalente ao select sem where no banco e ordenando pelo nome.
        db.find({}).sort({ name: 1 }).exec((err, users) => {

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200);
                res.setHeader('Content-type', 'Application/json');
                res.json([{ users }])
            }

        })


    });


    route.post((req, res) => {

        db.insert(req.body, (err, user) => {

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200);
                res.json(user)
            }

        })


    });

    let routeId = app.route('/users/:id');

    routeId.get((req, res) => {

        db.findOne({ _id: req.params.id }).exec((err, user) => {

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200);
                res.json(user)
            }

        })

    })

}