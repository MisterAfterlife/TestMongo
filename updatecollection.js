// update collection
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
	if(err) throw err;

	var dbObj = db.db("mydb");
	var querydata = {genre: "Not Overwatch"};
	var newdata = {genre: "Better Battleborn"};
	var update = {$set:newdata};
	
	
	dbObj.collection("games").updateOne(querydata, update, function(err, res){
		if(err) throw err;
		console.log("Document Updated");
		db.close();
	});
});