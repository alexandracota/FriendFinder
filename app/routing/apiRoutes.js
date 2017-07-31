//Two routes.

	//A GET route with url /api/friends. This will be used to dislpay the JSON of all of the available friends.
	//A POST route with url /api/friends. This will be used to handle incoming survey results and handle compatibility logic.

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('The GET request works!');
});

app.listen(3000, function() {
	console.log('Listening on port 3000');
});