var express = require('express');
var app = express();
// bodyParser = require('body-parser');

// mongoose = require('mongoose'),
// Task = require('./api/models/globalbankersCarModel'), //created model loading here
// bodyParser = require('body-parser');

// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb'); 

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

var routes = require('./api/routes/globalbankersRoutes'); //importing route
routes(app); //register the route

 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })