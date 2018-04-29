var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  path = require('path'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  validator = require('express-validator'),
  jwt = require('jsonwebtoken'),
  fs = require('fs'),
  https = require('https'),
  forceSsl = require('express-force-ssl'),
  morgan = require('morgan'); 

var productRoutes = require('./routes/indexRoutes');
var userRoutes = require('./routes/userRoutes');
var searchRoutes = require('./routes/searchRoutes');
var wishListRoutes = require('./routes/wishListRoutes');

// read cert files
var key = fs.readFileSync('cert/private.key');
var cert = fs.readFileSync( 'cert/mydomain.crt' );

// Option using cert files
var options = {
  key: key,
  cert: cert
};
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;

var mongoDB = process.env.MONGODB_URI


mongoose.connect(mongoDB);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());	
app.set('view engine', 'ejs'); // set up ejs 
// app.use(forceSsl);

productRoutes(app);
userRoutes(app);
searchRoutes(app);
wishListRoutes(app);

// app.listen(port);

var server = https.createServer(options, app).listen(443, function(){
    console.log("server started at port 443");
});

// console.log("UCompare web server started on: " + port)
