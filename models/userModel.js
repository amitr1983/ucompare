const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
    email: { type: String, unique: true},
    password: String,
    first_name: String,
    last_name: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    usertype: String
});

userSchema.pre('save', function (next) {
    const user = this;

    bcrypt.genSalt(10, function (err, salt) {
        if (err) { return next(err); }

        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) { return next(err); }

            user.password = hash;
            next();
        })
    });
});

userSchema.methods.comparePasswords = function (password, callback) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        if (err) { return callback(err); }

        callback(null, isMatch);
    });
}

// Export the model
module.exports = mongoose.model('User', userSchema);