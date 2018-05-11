// Controller for Search page
var MongoClient = require('mongodb').MongoClient
  , Server = require('mongodb').Server;


exports.searchProduct = function (req, res, next) {

  var api_key = ""
  var api_secret = ""

  MongoClient.connect(process.env.MONGODB_URI, function(err, db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('apiKeys');

    collection.find().toArray(function(err, kittens) {
      api_key = kittens[0].accessKey
      api_secret = kittens[0].secretKey
 

        console.log(api_key)
        console.log(api_secret)
  
        var sem3 = require('semantics3-node')(api_key,api_secret);
        var Semantics3 = require('semantics3-node-client');

        const product = req.query.q;
       
        sem3.products.products_field( "search", product );
        // sem3.products.products_field( "sort", "price", "asc" );
        sem3.products.products_field( "activeproductsonly", 1);
        sem3.products.products_field( "isactive", true);

      // Run the request
        sem3.products.get_products(
           function(err, products) {
             if (err) {
               console.log("Couldn't execute request: get_products");
               return;
            }
          // View results of the request
          console.log( "Results of request:\n" + JSON.stringify( products ) );
          res.json(products)
         }
       );
     });    
  });
}
