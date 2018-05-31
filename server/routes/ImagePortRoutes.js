const express = require('express');
const app = express();
const ImagePortRouter = express.Router();

const ImagePort = require('../models/ImagePort');

ImagePortRouter.route('/add').post(function (req, res) {
  const imageport = new ImagePort(req.body);
  imageport.save()
    .then(imageport => {
        res.json('Server added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

ImagePortRouter.route('/').get(function (req, res) {
    ImagePort.find(function (err, imageports){
    if(err){
      console.log(err);
    }
    else {
      res.json(imageports);
    }
  });
});

ImagePortRouter.route('/edit/:id').get(function (req, res) {
  const id = req.params.id;
  ImagePort.findById(id, function (err, imageport){
      res.json(imageport);
  });
});

ImagePortRouter.route('/update/:id').post(function (req, res) {
    ImagePort.findById(req.params.id, function(err, imageport) {
    if (!imageport)
      return next(new Error('Could not load Document'));
    else {
      imageport.url = req.body.url;
      imageport.width = req.body.width;
      imageport.height = req.body.height;

      imageport.save().then(imageport => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

ImagePortRouter.route('/delete/:id').get(function (req, res) {
    ImagePort.findByIdAndRemove({_id: req.params.id},
       function(err, imageport){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = ImagePortRouter;