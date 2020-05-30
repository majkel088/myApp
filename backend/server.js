var mysql = require('mysql');
const express = require('express');
const app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
const port = 5000;

const connections = [];

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'nodelogin'
});

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/loggin', function (request, response) {
	if (request.session.loggedin) {
		response.send(request.session.username);
	} else {
		response.send("Zaloguj się!");
	}
	response.end();
});

app.get('/logout', function (request, response) {
	if (request.session.loggedin){
		request.session.loggedin = false;
		return response.redirect('http://localhost:3000/');
	} else {
		response.send("Musisz się najpierw zalogować!");
	}
	response.end();
});

app.post('/auth', function (request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
			if (results.length === 1) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Nieprawidłowa nazwa użytkownika/hasło!');
			}
			response.end();
		});
	} else {
		response.send('Podaj nazwę użytkownika/hasło!');
		response.end();
	}
});

app.get('/singup', function (request, response) {
	response.sendFile(path.join(__dirname + '/reg.html'));
});

app.post('/singup', function (request, response) {
	connection.query('SELECT * FROM accounts WHERE username = ?', [request.body.username], function (error, results, fields) {
		if (error) {
			console.error(error.message);
		} if (results.length) {
			response.send('Ta nazwa użytkownika jest już w użyciu!')
			response.redirect('/singup');
		}
		else {
			var users = {
				"username": request.body.username,
				"password": request.body.password,
				"email": request.body.email,
				"first_name": request.body.first_name,
				"last_name": request.body.last_name
			}
			connection.query('INSERT INTO accounts SET ?', users, function (error, results, fields) {
				response.redirect('/');
			});
		}
	});
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));