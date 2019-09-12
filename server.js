var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Email = require('./api/models/emailsModel'), //loads created model
    bodyParser = require('body-parser');


//connects to database my adding url to mongoose instance
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Emaildb1');

//installs bodyParser to make request bodies available under req.body property
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//enables CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//registers the routes in the server
var routes = require('./api/routes/emailsRoutes');
routes(app);

app.listen(port);

console.log('emails app server started on port: ' + port);

