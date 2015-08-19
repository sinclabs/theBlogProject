var express = require('express');
var router = express.Router();

var fs = require('fs');
var jsondata;

fs.readFile('./public/AppData/Data.json', handleFile)
// Write the callback function
function handleFile(err, data) {
    if (err)
      console.log(err);
    jsondata = data
    // You can now play with your datas
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'subbu', Desc: 'This is Subramanian', posts: jsondata });
});

module.exports = router;
