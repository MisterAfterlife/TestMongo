// insert one data entry into database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
	if(err) throw err;

	var dbObj = db.db("mydb");
	var myDataObj = [
	//	{_id:"1", game: "Doki Doki Literature Club", genre: "Psychological Horror"}, // to add unique id
		{game: "Doki Doki Literature Club", genre: "Psychological Horror"},	
		{game: "Train Simulator 2018", genre: "Simulation"},	
		{game: "Rocket League", genre: "Sports"},
		{game: "Overwatch", genre: "FPS"},
		{game: "Palladins", genre: "Not Overwatch"}
	];
	
	dbObj.collection("games").insertMany(myDataObj, function(err, res){
		if(err) throw err;
		console.log("Number of Games Inserted " + res.insertedCount);
		db.close();
	});
});