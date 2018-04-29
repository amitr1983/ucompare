const jwt = require('jwt-simple');
const User = require('../models/userModel');
const config = require('../config/main');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

exports.signin = function (req, res, next) {
    res.status(200).json({
      message: "Successful",
      token: tokenForUser(req.user),
      success: 1,
      user: req.user
    })
}

exports.signup = function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const address = req.body.address;
    const state = req.body.state;
    const city = req.body.city;
    const zip = req.body.zip;
    const usertype = req.body.usertype

    if (!email || !password) {
        return res.status(422).send({error: 'You must provide email and password'});
    }

    User.findOne({ email: email}, function(err, existingUser) {
        if (err) { return next(err); }

        if (existingUser) {
            return res.status(422).send({error: 'Email is in use'});
        }

        const user = new User({
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
            address: address,
            city: city,
            state: state,
            zip: zip,
            usertype: usertype
        });

        user.save(function(err){
            if (err) { return next(err); }
            
            res.json({token: tokenForUser(user)});
        });
    });

}

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.user_info = function(req, res) {
  const email = req.params.email;

  User.findOne( {email: email}, { "password": 0 }, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.isAuthenticated = function(req, res, next) {

    if (req.user)
      return next();

    res.redirect('/signin');
  };