'use strict';
module.exports = function(app) {
  const WishList = require('../controllers/wishListController');
  const User = require('../controllers/userController');

  function isAuthenticated(req, res, next) {

    if (req.user)
      return next();

    res.redirect('/signin');
  }

 app.route('/api/wishlist')
    .get(WishList.list_all_wishlist)

  app.route('/api/wishlist/:wishlistId')
    .get(WishList.view_a_wishlist)

  app.route('/api/wishlist/add')
    .post(WishList.add_new_wishlist)

  app.get('/wishlist', User.isAuthenticated, function (req, res) {
        res.render('wishList.ejs');
    });

  app.route('/api/wishlist/delete/:wishlistid')
    .delete(WishList.delete_a_wishlist);
};