var express = require('express');
var app = express();
var request = require('request');
app.set('view engine', 'ejs');

app.get('/search', function(req, res) {
    res.render('search');
});

app.get('/results', function(req, res) {
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);         
            res.render('results', {data});
        }

 
    });
});

app.listen(3100, process.env.IP, function() {
    console.log('Movie app has started!');
});


// var express = require('express');
// var app = express();
// var request = require('request');
// app.set('view engine', 'ejs');

// app.get('/results', function(req, res) {
//     res.render('results');
// });

// app.post('/results', function(req, res) {
//     var newmoviee = req.params.newmovie;
//     request(`http://www.omdbapi.com/?s=${newmoviee}&apikey=thewdb`, function(error, response, body) {
//         if(!error && response.statusCode == 200) {
//             var newmoviee = JSON.parse(body);         
//         }
//         newmoviee.push(newmovie);

//     });
//     res.render('/results', {newmoviee});
// });

// app.get()
// app.listen(3100, process.env.IP, function() {
//     console.log('Movie app has started!');
// });