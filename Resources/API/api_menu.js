var App;

//=================================================
// SET GLOBAL DATA==============================
var config_API = require('config/cfg_api');
config_API.set(this);
//=================================================

exports.getNavMenu = function() {


};

function stripslashes(str) {
	return (str + '').replace(/\\(.?)/g, function(s, n1) {
		switch (n1) {
			case '\\':
				return '\\';
			case '0':
				return '\u0000';
			case '':
				return '';
			default:
				return n1;
		}
	});
}

HTTP_MENU.onload = function() {
};

exports.initialize = function(app) {
	App = app;
};

