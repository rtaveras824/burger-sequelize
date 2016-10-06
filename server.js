"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');

const port = process.env.PORT || 8080;
const routes = require('./controllers/burgers_controller.js');

const app = express();

// To show files in public folder
app.use(express.static(process.cwd() + '/public'));

// To use methods like PUT and DELETE
app.use(methodOverride('_method'));

// To use for POST method
app.use(bodyParser.urlencoded({ extended: false }));

// View template engine of choice
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use('/', function(req, res) {
	var object = { bacon: true };
	res.render('index', object);
});

const controller = require('./controllers/burgers_controller.js');

app.listen(port, function() {
	console.log('Listening on port', port, 'ya doofus.');
});