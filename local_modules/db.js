var mongojs = require("mongojs");
var databaseUrl = "theBlogProject";
var collections = ["posts"];
var db = mongojs(databaseUrl, collections);

module.exports = db;
