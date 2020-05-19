const express = require('express');
const app = express();
const port = 5000;

app.post('/asdf', function(req, res) {
    var results='Hello World!';
    res.send(results);
}); 

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));