
var App;

//=================================================
// GET ALL API FILES FOR INITIALIZING API==========

var navMenu = require("/API/api_menu");
var feeds = require("/API/api_feeds");

exports.navMenu = navMenu;
exports.feeds = feeds;

//=================================================
// INITIALIZE API==============================
exports.initialize = function(app) {
		App = app;
		navMenu.initialize();
		feeds.initialize();
};
