var express = require('express');
var app = express();

var port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');


var users = [
			{ id:1, name: 'thinh'},
			{ id:2, name: 'duy'}
		];

app.get('/', function(req, res) {
	res.render('index', {
		name: 'Duy'
	});
});

app.get('/users', function(req, res) {
	res.render('users/index', {
		users: users
	});
});

app.get('/users/search', function(req, res) {
	var q = res.query.q;
	var matchedUser = users.filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('users/index', {
		users: matchedUser
	});
})


app.listen(port, function() {
	console.log('Server listening on port' + port);
});