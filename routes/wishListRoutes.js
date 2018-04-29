'use strict';
module.exports = function(app) {
  const WishList = require('../controllers/wishListController');

 app.route('/api/wishlist')
    .get(WishList.list_all_wishlist)

  app.route('/api/wishlist/:wishlistId')
    .get(WishList.view_a_wishlist)

  app.route('/api/wishlist/add')
    .post(WishList.add_new_wishlist)

  app.get('/wishlist', function (req, res) {
        res.render('wishList.ejs');
    });

  app.route('/api/wishlist/delete/:wishlistid')
    .delete(WishList.delete_a_wishlist);
};