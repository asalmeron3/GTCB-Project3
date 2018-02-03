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
      password: req.body.password,
      email: req.body.email,
      name: req.body.name
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

router.post('/location', passport.authenticate('jwt',{session: false}), function(req, res){
  var token = getToken(req.headers);
  if(token){
    const decode = jwt.decode(token, config.secret);
    User.findOneAndUpdate({ name:decode.name }, {$set: {"location":req.body.location}}, function(err, doc){
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
    return headers.authorization;
  } else {
    return null;
  }
};
router.post("/pic", passport.authenticate('jwt',{session: false}), function(req, res){
  var token = getToken(req.headers);
  if(token){
    User.findOneAndUpdate({ _id: req.params.id }, {$set: {"UserPic":req.body.picURL}}, function(err, doc){
      if (err){
        return res.json({success: false, msg: 'Failed. Try again.'});
      }
      res.json({success: true, msg:"Successful"});
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unathorized'});
  }
});

router.get('/location', passport.authenticate('jwt',{session: false}), function(req, res){
  var token = getToken(req.headers);
  if(token){
    User.findOne({ _id: req.params.id }, function(err, doc){
      if (err){
        return res.json({success: false, msg: 'Failed. Try again.'});
      }
      res.json({success: true, msg:"Successful"});
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unathorized'});
  }
});

router.get('/bills/:id', passport.authenticate('jwt',{session: false}), function(req, res){
  var token = getToken(req.headers);
  if(token){
    User.findOne({ _id: req.params.id }, function(err, doc){
      if (err){
        return res.json({success: false, msg: 'Failed. Try again.'});
      }
      res.json({success: true, msg:"Successful"});
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unathorized'});
  }
});

// router.get("/twitterfeed/",function(req,res){
//   var client = new Twitter({
//   consumer_key: 'Jt9yYf668aUb6RxopZGaIbcu6',
//   consumer_secret: 'YhC4qwiPjMe9XPsNavevK2sLZExqwdjXZsfmXdErM0Uo8uMa7b',
//   access_token_key: '918600732126990336-Bd3bPVEOFTogb7yq4mf6xaYg0hj6zxM',
//   access_token_secret: 'Lf3n1k06KcH6K8rLzmXd40FZN0ZhjrJ2YGxr6L6JMQhpg'
// });
//   var params = {screen_name: req.body.twitterHandle};
//   client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if (!error) {
//       console.log(tweets);
//       res.json({data:tweets});
//     }
//   });


// });

module.exports = router;