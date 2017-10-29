//this is where we will set up our server to listen for incoming
//requests using the Express library

var express = require('express');
var app = express();

//serve the files on local server
app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 3000);
