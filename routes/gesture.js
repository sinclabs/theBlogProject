
//Reqire everything here
var express = require('express');
var router = express.Router();
var db = require("../local_modules/db");



//When home page is requested
router.post('/', function(req, res, next) {
  var user_id = req.body.data
  console.log(user_id);
  res.send("okay"); 
});

router.get('/', function(req, res, next) {
  var user_id = req.body.data
  console.log(user_id);
  res.render('index', { posts: JSON.stringify(user_id), Page: "index" });
});


//Export the module
module.exports = router;
