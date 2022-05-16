var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title: "Dwiern"});
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/forgot', function(req, res, next) {
  res.render('forgot');
});

router.get('/mainpage', function(req, res, next) {
  res.render('mainpage');
});

router.post('/mainpage',function(req,res,next) {
  let data = req.body;
  if (data.User === "") {
    res.render('signup',{error:"invalid user"});
    return;
  }
  if (data.Password === "") {
    res.render('signup',{error:"invalid password"});
    return;
  }
  if (data.Email === "") {
    res.render('signup',{error:"invalid email"});
    return;
  }
  res.render('mainpage');
});

module.exports = router;
