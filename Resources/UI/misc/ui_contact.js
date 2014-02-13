var App;

var OS = Ti.Platform.osname;
var contactUS_container;
var ti = {};

function createContactUSGUI() {
	ti = {
		contactText : Titanium.UI.createLabel({
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

function buildContactUSUI() {
}

exports.getContactUSGUI = function() {
	return ti.contactText;
};

exports.initialize = function(app) {
	App = app;
	createContactUSGUI();
}; 