const express = require('express');
var request = require('request');
const app = express();
const port = 5000;

app.post('/asdf', function (req, res) {
    var results = 'Hello World!';
    res.send(results);
});

app.get('/qwer', function (req, res) {
    request('https://pokeapi.co/api/v2/pokemon/', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var parsedBody = JSON.parse(body);
            res.send(parsedBody);
        }
    })
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));