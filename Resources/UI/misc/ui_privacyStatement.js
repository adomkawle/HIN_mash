var App;

var OS = Ti.Platform.osname;
var privacy_container;
var ti = {};

function createprivacyGUI() {

	ti = {
		privacyText : Titanium.UI.createLabel({
			color : "#ADADAD",
			font : {
				fontSize : '13sp',
				fontFamily : 'Helvetica Neue',
			},
			top : '5dp',
			left : '5%',
			width : '90%',
			text : "\nHealth Impact News Daily does not use third party advertisers that use tracking cookies. As such, the only information that we collect is your email address, if you opt in to receive email news updates, or if you contact us and wish for us to reply. We use a secure server dedicated to mailing lists which prevents spammers from gaining access to it, and we do not share, sell, or distribute the email addresses entered on this site for the sole purpose of receiving Health Impact News updates, or requesting information from us via our contact form. In short, we are SPAM FREE and dedicated to protecting your privacy."
		}),
	};

}

function buildprivacyUI() {

}

exports.getPrivacyGUI = function() {
	return ti.privacyText;
};

exports.initialize = function(app) {
	App = app;
	createprivacyGUI();
};
