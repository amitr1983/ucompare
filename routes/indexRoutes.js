'use strict';
module.exports = function(app) {
  var indexPage = require('../controllers/indexController');

 	app.get('/', function (req, res) {
        res.render('viewSearchResult.ejs');
    });
    
    app.get('/view', function (req, res) {
        res.render('viewSearchResult.ejs');
    });
};