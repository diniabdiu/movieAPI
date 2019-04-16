var express = require('express');
var app = express();
var request = require('request');



app.listen(3000, process.env.IP, function() {
    console.log('Movie app has started!');
});