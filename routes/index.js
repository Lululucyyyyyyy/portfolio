const express = require('express');
const router = express.Router();
const nodeCookie = require('node-cookie');

router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

module.exports = router;