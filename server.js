var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  path = require('path'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  validator = require('express-validator'),
  jwt = require('jsonwebtoken'),
  morgan = require('morgan'); 

var productRoutes = require('./routes/indexRoutes');
var userRoutes = require('./routes/userRoutes');
var searchRoutes = require('./routes/searchRoutes');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;

var mongoDB = process.env.MONGODB_URI

mongoose.connect(mongoDB);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());	
app.set('view engine', 'ejs'); // set up ejs 

productRoutes(app);
userRoutes(app);
searchRoutes(app);

app.listen(port);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

console.log("UCompare web server started on: " + port)
