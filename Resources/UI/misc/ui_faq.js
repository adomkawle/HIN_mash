var App;

var OS = Ti.Platform.osname;
var FAQ_container;
var ti = {};

function createFAQGUI() {
	ti = {
		FAQ_Text : Titanium.UI.createLabel({
			color : "#ADADAD",
			font : {
				fontSize : '18sp',
				fontFamily : 'Helvetica Neue',
			},
			top : '5dp',
			//left : '5%',
			width : '90%',
			text : "\nIn-Progress",
			textAlign : 'center'
		}),
	};
}

function buildFAQUI() {
}

exports.getFAQGUI = function() {
	return ti.FAQ_Text;
};

exports.initialize = function(app) {
	App = app;
	createFAQGUI();
}; 