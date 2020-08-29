const MongoClient = require('mongodb').MongoClient;

const test = require('assert');

// Connection url
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Connect using MongoClient
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
    test.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    findDocuments(db, function () {
        client.close();
    });
});

const insertDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');

    // Insert some documents
    collection.insertMany([
        {
            name: "Apple",
            score: 10,
            review: "Yummy fruit"
        },
        {
            name: "Orange",
            score: 5,
            review: "Kinda sour"
        },
        {
            name: "Banana",
            score: 9,
            review: "Great stuff"
        }
    ], function (err, result) {
        test.equal(err, null);
        test.equal(3, result.result.n);
        test.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
};

const findDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');

    // Find some documents
    collection.find({}).toArray(function (err, fruits) {
        test.equal(err, null);
        console.log("Found the following records");
        console.log(fruits)
        callback(fruits);
    });
}