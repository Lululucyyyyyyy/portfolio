const express = require('express');
const router = express.Router();
const nodeCookie = require('node-cookie');

router.get('/', function(req, res, next) {
  res.render('index.ejs');
});
/**
router.get('/about', function(req, res, next){
  console.log('line 8 sent to about');
  res.render('about.ejs');
});

router.get('/education', function(req, res, next){
  console.log('line 13 sent to education');
  res.render('education.ejs');
})

router.get('/achievements', function(req, res, next){
  console.log('line 18 sent to achievements');
  res.render('achievements.ejs');
})

router.get('/projects', function(req, res, next){
  console.log("line 23 sent to add");
  res.render('projects.ejs');
});

router.get('/skills', function(req, res, next){
  console.log("line 28 sent to skills")
  res.render('skills.ejs');
})**/

module.exports = router;