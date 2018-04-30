const Authentication = require('../controllers/userController');
const passportService = require('../config/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });



module.exports = function (app) {
    var redirect_uri=process.env.COGNITO_REDIRECT_URI;
    var client_id = process.env.GOGNITO_CLIENT_ID;

    app.get('/signup', function (req, res) {
        res.send({ message: 'Please create a new account using post request to /signup and pass email & password params' });
    });

    app.get('/signin', function (req, res) {
        res.redirect("https://ucompare.auth.us-east-1.amazoncognito.com/login?redirect_uri=${process.env.COGNITO_REDIRECT_URI}&response_type=code&client_id=${process.env.GOGNITO_CLIENT_ID}")
    });

    app.post('/signin', requireSignin, Authentication.signin);

    app.post('/signup', Authentication.signup);

    app.route('/user')
    .get(Authentication.list_all_users, requireAuth)

    app.route('/user/:email')
    .get(Authentication.user_info)

    app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
    });
}