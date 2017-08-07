var path = require("path");

//Two routes.

module.exports = function(app) {

	//A GET route to /survey which should display the survey page	
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	//A default USE route that leads to home.html
	app.use( function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

}
