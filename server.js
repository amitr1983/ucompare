const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  jwt = require('jsonwebtoken'),
  session = require('express-session'),
  mongoose = require('mongoose');

var productRoutes = require('./routes/indexRoutes');
var userRoutes = require('./routes/userRoutes');


productRoutes(app);
userRoutes(app);

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

var mongoDB = "mongodb://localhost/Ucomparedb"
// var mongoDB = process.env.MONGODB_URI

mongoose.connect(mongoDB);

app.listen(port, function() {
  console.log('listening on 3000')
})

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

console.log("UCompare web server started on: " + port)

