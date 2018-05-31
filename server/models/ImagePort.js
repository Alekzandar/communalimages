var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema for image gallery
var ImagePort = new Schema({
  url: {
    type: String
  },
  width: {
      type: Number
  },
  height: {
      type: Number
  }
},{
    collection: 'images'
});

module.exports = mongoose.model('ImagePort', ImagePort);