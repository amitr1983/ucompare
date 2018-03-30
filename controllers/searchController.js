// Controller for Search page

exports.searchProduct = function (req, res, next) {
  var api_key = '';
  var api_secret = '';
  var sem3 = require('semantics3-node')(api_key,api_secret);
  var Semantics3 = require('semantics3-node-client');

  const product = req.query.q;
 
  sem3.products.products_field( "search", product );

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
}