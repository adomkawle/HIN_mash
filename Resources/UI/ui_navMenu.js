var App;
var navMenu;

var navBarData = {
	"Menu" : [{
		title : 'Home'
	}, {
		title : 'About Us'
	}, {
		title : 'Coconut Health'
	}, {
		title : 'Real Food Nutrition'
	}, {
		title : 'Medicine Watch'
	}, {
		title : 'Alternative Health'
	}, {
		title : 'Sustainable Agriculture'
	}, {
		title : 'Created4Health'
	}, {
		title : 'FAQ'
	}, {
		title : 'Contact'
	}, {
		title : 'Privacy Statement'
	}, {
		title : 'Terms of Use'
	}],
};

var OS = Ti.Platform.osname;

function createNavMenu() {
	var navWin = Titanium.UI.createWindow({
		navBarHidden : true,
	});

	if (OS == 'android') {
		navMenu = Ti.UI.createScrollView({
			height : Ti.UI.FILL,
			width : '60%',
			right : '-60%',
			top : '45dp',
			layout : 'vertical',
			scrollingEnabled : true,
			horizontalWrap : true,
			disableBounce : true,
			backgroundColor : '#2c2a28'
		});
	} else {
		navMenu = Ti.UI.createScrollView({
			height : Ti.UI.FILL,
			width : '60%',
			left : '60%',
			top : '45dp',
			//left : 0,
			layout : 'vertical',
			scrollingEnabled : true,
			horizontalWrap : true,
			disableBounce : true
		});
	};

	for (n in navBarData) {

		var grp_section = Ti.UI.createView({
			height : '46dp',
			width : '100%',
			backgroundColor : '#181818'
		});

		var lbl = Ti.UI.createLabel({
			color : "white",
			text : n,
			font : {
				fontSize : '16sp',
				fontFamily : 'Helvetica Neue'
			},
			left : '10dp',
		});

		var grp_sep = Ti.UI.createView({
			//bottom : '0',
			height : '2dp',
			width : '100%',
			backgroundImage : '/images/menu-divider-line.png'
		});

		//grp_section.add(lbl);
		//grp_section.add(grp_sep);
		//navMenu.add(grp_section);
		//navMenu.add(grp_sep);

		for (var i = 0, j = navBarData[n].length; i < j; i++) {

			var dataRow = Ti.UI.createView({
				hasChild : true,
				height : '45dp',
				width : '100%',
				title : navBarData[n][i].title,
				index : i,
				//backgroundColor : '#2c2a28'
				backgroundImage : '/images/menu-bg@2x.png',
				backgroundRepeat : true
			});

			var title = Ti.UI.createLabel({
				color : "white",
				text : navBarData[n][i].title,
				font : {
					fontSize : '16sp',
					fontFamily : 'Helvetica',
					//fontWeight : 'bold'
				},
				left : '10dp',
				title : navBarData[n][i].title,
				index : i
			});

			var row_sep = Ti.UI.createView({
				//bottom : '0',
				height : '2dp',
				width : '100%',
				backgroundImage : '/images/menu-divider-line.png'
			});

			dataRow.add(title);
			//dataRow.add(row_sep);

			navMenu.add(dataRow);
			//navMenu.add(row_sep);

		}
	}

}

function getOrientation(o) {
	switch (o) {
		case Titanium.UI.PORTRAIT: {
			return 'portrait';
		}
		case Titanium.UI.UPSIDE_PORTRAIT: {
			return 'portrait';
		}
		case Titanium.UI.LANDSCAPE_LEFT: {
			return 'landscape';
		}
		case Titanium.UI.LANDSCAPE_RIGHT: {
			return 'landscape';
		}
	}
}

Ti.Gesture.addEventListener('orientationchange', function(e) {

	var orientation = getOrientation(e.orientation);

	if (orientation == 'landscape') {

		navMenu.height = '83%';
	} else {
		navMenu.height = '100%';
	}

});

exports.getNavMenu = function() {

	return navMenu;
};

exports.initialize = function(app) {
	App = app;
	createNavMenu();
};
