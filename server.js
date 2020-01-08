var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

const port = 3002;
var app = new express();
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    res.sendFile('/search.html', { root: __dirname });
});

app.post('/Search', function(req, res) {
    var request = require('request');
    request('http://www.google.com', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Print the google web page.
        }
    });


});

app.listen(port, function() {
    console.log('Node start on port : ' + port);
});