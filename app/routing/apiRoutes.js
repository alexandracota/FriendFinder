// var path = require("path");

var friendsData = require("../data/friends.js");

module.exports = function(app) {


	//TWO ROUTES

	///////THIS WORKS! DON'T TOUCH!////////
	//A GET route with url /api/friends. This will be used to dislpay the JSON of all of the available friends.
	app.get('/api/friends', function(req, res) {
		res.json(friendsData);
	});


	//A POST route with url /api/friends. This will be used to handle incoming survey results and handle compatibility logic.
	app.post('/api/friends', function(req, res) {
		console.log('POST FRIENDS HERE')
		var addFriend = req.body;
		addFriend.routeName = addFriend.name.replace(/\s+/g, "").toLowerCase();

		console.log(addFriend);
		friendsData.push(addFriend);
		res.json(addFriend);

		//convert all scores into a single array of numbers.
		
		//Loop through all other friends scores and compare scores one by one.
		//Add up the differences to calculate the totalDifference
	});


};
