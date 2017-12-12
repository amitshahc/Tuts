const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

let url = 'mongodb://@localhost:27017/';

MongoClient.connect(url, (err, client) => {
    try {
        assert.equal(null, err);

        dblink = client.db('pro');
        //console.log("connected db", dblink);

        exports.insert = function(data) {

            let tbl = dblink.collection('rev');
            //console.log(tbl.find({a:1}));
            tbl.update({ a: 1 }, {$set: {b:1}}).catch((e) => {throw e;});

            //tbl.update({ a: 1 }, { $set: { b: 1 } });

            //console.log("Inserted");
            client.close();
        }
        
    } catch (err) {
        console.error("DB error: ", err.message);
    }

})