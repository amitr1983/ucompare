'use strict';
const Search = require('../controllers/SearchController');

module.exports = function(app) {
  var indexPage = require('../controllers/indexController');

  app.route('/search')
    .get(Search.searchProduct)
};