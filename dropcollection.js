// drop collection
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
	if(err) throw err;

	var dbObj = db.db("mydb");
	
	dbObj.dropCollection("games", function(err, delOK){
		if(err) throw err;
		if(delOK) console.log("Collection deleted");
		db.close();
	});
});