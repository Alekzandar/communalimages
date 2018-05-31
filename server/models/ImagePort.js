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
    collection: 'images' //stored in /images in database extension
});

//export to easily build schema

module.exports = mongoose.model('ImagePort', ImagePort);