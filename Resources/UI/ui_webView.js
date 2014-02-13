var App;
var OS = Ti.Platform.osname;
var ti = {};

var container;

function createWebGUIComp() {

	ti = {

		img_TopBar : Ti.UI.createView({
			backgroundColor : "#4A8F21",
			top : 0,
			width : '100%',
			height : '45dp'
		}),

		webView_win : Titanium.UI.createWindow({
			backgroundColor : '#FFFFFF',
			navBarHidden : (OS == "android" ) ? true : false,
			modal : (OS == "android" ) ? true : false,
			orientationModes : [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT]
		}),

		win_title : Titanium.UI.createLabel({
			color : "white",
			text : 'Recipes',
			font : {
				fontSize : '22sp',
				fontFamily : 'Helvetica Neue',
			},
			textAlign : 'center',
			width : 'auto',
			left : '45dp',
			width : '85%'
		}),

		back : Titanium.UI.createView({
			left : '15dp',
			height : '36dp',
			width : '21dp',
			backgroundImage : '/images/top-bar-back.png',
			bubbleParent : false
		}),

		webView : Titanium.UI.createWebView({
			top : '45dp',
			height : Ti.UI.FILL,
			width : '100%',
			url : ''
		})

	};

	container = Ti.UI.createView({
		width : '94%',
		left : '3%',
		height : '50dp',
		top : '55dp',
		visible : false
	});

	var name = Titanium.UI.createLabel({
		color : "#011024",
		text : "Sorry, Network connection is not available!",
		font : {
			fontSize : '16sp',
			fontFamily : 'Helvetica Neue',
		},
		width : '90%',
		left : '5%',
	});

	var seperator_line = Ti.UI.createView({
		backgroundColor : '#E5E5E5',
		bottom : '0',
		left : '0',
		width : '100%',
		height : '2dp',
	});

	container.add(name);
	container.add(seperator_line);

};

function buildWebGUIComp() {
	ti.img_TopBar.add(ti.back);
	ti.img_TopBar.add(ti.win_title);

	ti.webView_win.add(ti.img_TopBar);
	ti.webView_win.add(ti.webView);
	ti.webView_win.add(container);
}

function eventListenersWebGUI() {
	ti.back.addEventListener('click', function() {
		ti.webView_win.close();
	});
};

exports.getWebGUIComp = function(data) {
	ti.webView_win.open();
	ti.win_title.text = data.text;

	var isOnline = Ti.App.Properties.getString('ONLINE');

	if (Ti.Network.online) {
		
		container.visible = false;
		ti.webView.visible = true;
		ti.webView.url = data.url;

	} else  {
		
		container.visible = true;
		ti.webView.visible = false;
		
	}

};

exports.initialize = function(app) {
	App = app;
	createWebGUIComp();
	buildWebGUIComp();
	eventListenersWebGUI();

	if (OS == 'iphone' || OS == 'ipad') {
		ti.webView_win.top = '20dp';
	};

};

