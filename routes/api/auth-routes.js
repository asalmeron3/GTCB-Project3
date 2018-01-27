const express = require('express');
const passport = require('passport');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../../config/database');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');
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
      password: req.body.password
    });
    newUser.save(function(err) {
      if(err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successfully created new user.'});
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
          const token = jwt.sign(user, config.secret);
          //return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

router.post('/location', passport.authenticate('jwt',{session: false}), function(req, res){
  var token = getToken(req.headers);
  if(token){
    User.findOneAndUpdate({ _id: req.params.id }, {$set: {"location":req.body.location}}, function(err, doc){
      if (err){
        return res.json({success: false, msg: 'Failed. Try again.'});
      }
      res.json({success: true, msg:"Successful"});
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unathorized'});
  }
});

/*router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});*/

getToken = function(headers) {
  if(headers && headers.authorization) {
    const parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};


module.exports = router;