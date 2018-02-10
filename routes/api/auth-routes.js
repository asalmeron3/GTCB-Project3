const express = require('express');
const passport = require('passport');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../../config/database');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const billController = require('../../controllers/billsController');
require('../../config/passport')(passport);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/signup', function(req, res) {
  if(!req.body.username || !req.body.password){
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      name: req.body.name,
      picURL:req.body.picURL
    });
    newUser.save(function(err) {
      if(err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      var token = jwt.sign({data: newUser}, config.secret);
      res.json({success: true, msg: 'Successfully created new user.',token: 'JWT ' + token });
    });
  }
});

router.post('/login', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user){
    if (err) throw err;
    if(!user){
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      //check if the password matches
      user.comparePassword(req.body.password, function(err, isMatch){
        if(isMatch && !err){
          //if user is found and password is right create a token
          var token = jwt.sign({data: user}, config.secret, { expiresIn: 604800});
          //return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

router.get('/userPage/:name', passport.authenticate('jwt',{session: false}), function(req, res){
  var token = getToken(req.headers);
  if(token){
    const decode = jwt.decode(token, config.secret);
    User.findOne({ name:decode.name }, function(err, doc){
      if (err){
        return res.json({success: false, msg: 'Failed. Try again.'});
      }
      res.json({success: true, msg:"Successful"});
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unathorized'});
  }
});

router.post('/location', function(req, res) {
  User.findOneAndUpdate({ _id: req.params.id }, {$set: {"location": req.body.location}}, function(err, doc){
    if(err){
      return res.json(err);
    } else{
     res.json({success: true, msg:"Successful"});
    }
  });
});

router.post('/pic', function(req, res){
  User.findOneAndUpdate({ _id: req.params.id }, {$set: {"UserPic": req.body.picURL}}, function(err, doc){
    if(err){
      return res.json(err);
    } else{
     res.json(doc);
    }
  });
});

router.get('/location', function(req, res) {
  User.findOne({ _id: req.params.id }, function(err, doc){
    if(err){
      return res.json(err);
    } else{
     res.json(doc);
    }
  });
});

module.exports = router;