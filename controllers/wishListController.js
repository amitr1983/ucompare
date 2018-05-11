const WishList = require('../models/wishListModel');

exports.add_new_wishlist = function(req, res) {

  var wishListId = req.params.wishListId;
  var sem3_id = req.body.sem3_id;
  var name = req.body.name;
  var description = req.body.description;
  var brand = req.body.brand;
  var price = req.body.price;
  var images_uri = req.body.images_uri;
  var site_details = req.body.site_details
  var image = req.body.image

  var wishlist = new WishList(req.body);

  wishlist.save(function(err, wishlist) {
    console.log(wishlist)
    
        if (err)
        res.send(err);
        res.json({ message: 'wishlist successfully added' });
     });
};

exports.list_all_wishlist = function(req, res) {
  WishList.find({}, function(err, wishlist) {
    if (err)
      res.send(err);
    res.json(wishlist);
  });
};

exports.view_a_wishlist = function(req, res) {
  var wishListId = req.params.wishListId;

  console.log(wishListId)

  WishList.findOne({_id: wishListId}, function(err, wishlist) {
    if (err)
      res.send(err);
    res.json(wishlist);
  });
};

exports.delete_a_wishlist = function(req, res) {

  console.log(req.params.wishlistid)

    WishList.remove({_id: req.params.wishlistid}, (err, todo) => {  

    if (err) return res.status(500).send(err);
    const response = {
        message: "wishlist successfully deleted",
        id: todo._id
    };
    return res.status(200).send(response);
});
}
