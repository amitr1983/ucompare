'use strict';

module.exports = function(app) {
  var Search = require('../controllers/SearchController');

  app.route('/search')
    .get(Search.searchProduct)
};