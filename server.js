//dependenies
var express = require('express'),
	cors = require('cors'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

//instantiate express
var app = express();

//middleware
app.use(express.static(__dirname + '/src/public'))
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

//connection
var port = process.env.PORT || 9345;

app.listen(port, function() {
	console.log("I'm listening on port: " + port);
})
