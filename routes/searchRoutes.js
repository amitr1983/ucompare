'use strict';

module.exports = function(app) {
  var searchPage = require('../controllers/searchController');
  
  app.route('/search')
    .get(searchPage.searchProduct)
};