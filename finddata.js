// finds one data entry in database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
	if(err) throw err;

	var dbObj = db.db("mydb");
	
	dbObj.collection("games").findOne({}, function(err, res){
		if(err) throw err;
		console.log(res.game);
		db.close();
	});
});