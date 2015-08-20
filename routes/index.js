
//Reqire everything here
var express = require('express');
var router = express.Router();
var db = require("../local_modules/db");


//When home page is requested
router.get('/', function(req, res, next) {
  db.posts.find(function(err, posts) {
    if( err || !posts) {
      console.log("No post found");
      res.render('404');
    }
    else {
      res.render('index', { posts: JSON.stringify(posts), Page: "index" });
    }
  });
});


//Export the module
module.exports = router;
