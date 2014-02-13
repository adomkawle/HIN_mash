


var App;

var home = require('/UI/ui_home');
var navMenu = require('/UI/ui_navMenu');
var webView = require('/UI/ui_webView');
var aboutUS = require('/UI/misc/ui_about');
var contactUS = require('/UI/misc/ui_contact');
var FAQ = require('/UI/misc/ui_faq');
var privacy = require('/UI/misc/ui_privacyStatement');
var terms = require('/UI/misc/ui_termsOfUse');

//====CREATE TOP STORIES VIEW====
var topStories = require('/UI/topStories/ui_topStories');
var storiesDetails = require('/UI/topStories/ui_storiesDetails');

//====MENU OPTION GUI====
var altHealth = require('/UI/menu/ui_AlternativeHealth');
var cocoHealth = require('/UI/menu/ui_CoconutHealth');
var createdHealth = require('/UI/menu/ui_Created4Health');
var medWatch = require('/UI/menu/ui_MedicineWatch');
var realFood = require('/UI/menu/ui_RealFoodNutrition');
var susAgri = require('/UI/menu/ui_SustainableAgriculture');

exports.altHealth = altHealth;
exports.cocoHealth = cocoHealth;
exports.createdHealth = createdHealth;
exports.medWatch = medWatch;
exports.realFood = realFood;
exports.susAgri = susAgri;


exports.home = home;
exports.navMenu = navMenu;

exports.webView = webView;

exports.aboutUS = aboutUS;
exports.contactUS = contactUS;
exports.FAQ = FAQ;
exports.privacy = privacy;
exports.terms = terms;

exports.topStories = topStories;
exports.storiesDetails = storiesDetails;


/*
 * UI initialization
 */
exports.initialize = function(app) {
	
	App = app;
	navMenu.initialize(App);
	home.initialize(App);
	
	//=======MENU GUI INITIALIZATION=======
	altHealth.initialize(App);
	cocoHealth.initialize(App);
	createdHealth.initialize(App);
	medWatch.initialize(App);
	realFood.initialize(App);
	susAgri.initialize(App);
	//======================================
	
	aboutUS.initialize(App);
	contactUS.initialize(App);
	FAQ.initialize(App);
	privacy.initialize(App);
	terms.initialize(App);
	
	topStories.initialize(App);
	storiesDetails.initialize(App);
	
	webView.initialize(App);
};

