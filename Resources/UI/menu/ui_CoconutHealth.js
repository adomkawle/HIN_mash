var App;

var OS = Ti.Platform.osname;
var ti = {};

function createCoconutHealthGUI() {

	ti = {
		CoconutHealth : Ti.UI.createScrollView({
			width : '100%',
			height : Ti.UI.FILL,
			left : 0,
			top : 0,
			layout : 'vertical'
		}),
	};

}

function buildCoconutHealthUI() {

	var APP_DATA = Ti.App.Properties.getList('App_DATA');

	for (var i = 0, j = APP_DATA.length; i < j; i++) {

		if (APP_DATA[i].cat == "Coconut Health") {

			var container = Ti.UI.createView({
				width : '100%',
				height : '120dp',
				header : APP_DATA[i].cat,
				desc_text : APP_DATA[i].desc,
				newsImage : APP_DATA[i].image
			});

			var rightArrow = Ti.UI.createView({
				backgroundImage : '/images/arrow-right.png',
				width : '8dp',
				height : '12dp',
				right : '5dp',
				header : APP_DATA[i].cat,
				desc_text : APP_DATA[i].desc,
				newsImage : APP_DATA[i].image
			});

			var name = Titanium.UI.createLabel({
				color : "#3A4052",
				text : APP_DATA[i].title,
				font : {
					fontSize : '14sp',
					fontFamily : 'Helvetica Neue',
				},
				width : '65%',
				left : '30%',
				height : '45%',
				top : '5%',
				header : APP_DATA[i].cat,
				desc_text : APP_DATA[i].desc,
				newsImage : APP_DATA[i].image
			});

			var details = Titanium.UI.createLabel({
				color : "#ADADAD",
				text : APP_DATA[i].desc,
				font : {
					fontSize : '12sp',
					fontFamily : 'Helvetica Neue',
				},
				width : '65%',
				left : '30%',
				top : '51%',
				height : '26%',
				header : APP_DATA[i].cat,
				desc_text : APP_DATA[i].desc,
				newsImage : APP_DATA[i].image
			});

			var pubDate = Titanium.UI.createLabel({
				color : "#ADADAD",
				text : APP_DATA[i].pubDate,
				font : {
					fontSize : '11sp',
					fontFamily : 'Helvetica Neue',
				},
				width : '65%',
				left : '30%',
				bottom : '5dp',
				header : APP_DATA[i].cat,
				desc_text : APP_DATA[i].desc,
				newsImage : APP_DATA[i].image
			});

			var image = Ti.UI.createImageView({
				image : APP_DATA[i].image,
				left : '5%',
				top : '8%',
				width : '60dp',
				height : '60dp',
				header : APP_DATA[i].cat,
				desc_text : APP_DATA[i].desc,
				newsImage : APP_DATA[i].image
			});

			var seperator_line = Ti.UI.createView({
				backgroundColor : '#E5E5E5',
				bottom : '0',
				left : '0',
				width : '100%',
				height : '2dp',
			});

			container.add(name);
			container.add(details);
			container.add(pubDate);
			container.add(image);
			container.add(rightArrow);
			container.add(seperator_line);

			ti.CoconutHealth.add(container);
		}
	};

}

exports.getCoconutHealthGUI = function() {
	ti.CoconutHealth.removeAllChildren();
	buildCoconutHealthUI();
	return ti.CoconutHealth;
};

function eventListenersCoconutHealth() {
	ti.CoconutHealth.addEventListener('click', function(e) {
		if (e.source.header != undefined) {
			App.UI.storiesDetails.getstoriesDetailsComp(e.source);
		}
	});
}

exports.initialize = function(app) {
	App = app;
	createCoconutHealthGUI();
	eventListenersCoconutHealth();
};
