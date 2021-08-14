var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
//var db = mongojs('localhost:27017/', ['mydb']);

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// Get All Tasks
router.get('/tasks', function(req, res, next){
    MongoClient.connect(url, function(err, db) {
        //console.log("client connected", typeof db);
        if (err) throw err;
        var dbo = db.db("FAQdb");
        //dbo.collection("tasks").find({}, function(err, result) 
        dbo.collection("faq").find().toArray().then(items => {
            console.log(`Successfully found ${items.length} documents.`)
            res.send(items);
            db.close();
        });
        
    });
    //res.send('hi anam');
});


module.exports = router;