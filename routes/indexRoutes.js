'use strict';
module.exports = function(app) {
  var indexPage = require('../controllers/indexController');

 app.route('/')
    .get(indexPage.show_home)
    
    app.get('/view', function (req, res) {
        res.render('viewSearchResult.ejs');
    });
};