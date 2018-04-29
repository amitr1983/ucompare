'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WishListSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  brand: {
    type: String,
  },
  sem3_id: {
    type: String,
  },
  images_uri: {
    type: Schema.Types.Mixed,
  },
    site_details: {
    type: Schema.Types.Mixed,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
    image: {
    type: Schema.Types.Mixed,
  }
});

module.exports = mongoose.model('WishList', WishListSchema);