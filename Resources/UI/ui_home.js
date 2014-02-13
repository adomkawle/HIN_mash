var App;
var navBarAdded = false;
var OS = Ti.Platform.osname;
var noNetworkMessage;

var OSNo;
var whichScreenToSearch = 'Home';

var isTablet;

Ti.UI.backgroundColor = '#4A8F21';

if (OS == 'android') {

	OSNo = 1;

} else {
	OSNo = 2;
};

var ti = {};
var search = {};

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

var navMenuView;

var LeftNameToggle = true;

function createUIComps() {

	search = {

		searchContainerHome : Ti.UI.createView({
			backgroundColor : 'transparent',
			height : '36dp',
			left : '50dp',
			width : '70%',
			visible : false
		}),

		searchIconHome : Ti.UI.createView({
			height : '28dp',
			width : '28dp',
			backgroundImage : '/images/search.png',
			left : '5dp',
		}),

		resetHome : Titanium.UI.createView({
			right : 0,
			width : '20dp',
			height : '20dp',
			backgroundImage : '/images/close.png',
		}),

		searchTextField : Ti.UI.createTextField({
			left : '35dp',
			width : Ti.UI.FILL,
			backgroundColor : 'transparent',
			hintText : 'Search',
			color : "white",
			returnKeyType : Ti.UI.RETURNKEY_SEARCH
		}),

		search_bottomBar : Ti.UI.createView({
			height : "2dp",
			bottom : '0',
			left : '0',
			width : '100%',
			backgroundColor : "white",
		}),
	};

	noNetworkMessage = Ti.UI.createView({
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

	noNetworkMessage.add(name);
	noNetworkMessage.add(seperator_line);

	ti = {

		activityIndicator : Ti.UI.createActivityIndicator({
			font : {
				fontFamily : 'Helvetica Neue',
				fontSize : '18sp',
				//fontWeight : 'bold'
			},
			color : 'black',
			width : '280dp',
			message : '  Loading...',
			style : (OS == "android") ? Ti.UI.ActivityIndicatorStyle.DARK : Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
		}),

		indView : Titanium.UI.createView({
			height : '60dp',
			width : '180dp',
			borderWidth : '1',
			backgroundColor : 'white',
			borderColor : '#636363',
			borderRadius : 15,
			opacity : 0.7
		}),

		activityIndicatorView : Ti.UI.createView({
			backgroundColor : '#636363',
			opacity : '0.9',
			left : '0',
			width : '100%',
			height : '100%',
			top : '0',
		}),

		shadowView : Ti.UI.createView({
			backgroundColor : 'transparent',
			left : '60%',
			width : '25%',
			height : '100%',
			top : '45dp',
		}),

		//====Main GUI====

		main_home : Ti.UI.createView({
			backgroundColor : '#FFFFFF',
			left : '0',
			width : '100%',
			height : Ti.UI.FILL,
			top : '45dp',
		}),

		cocoHealth : Ti.UI.createView({
			backgroundColor : '#FFFFFF',
			left : '0',
			width : '100%',
			height : Ti.UI.FILL,
			top : '45dp',
			visible : false
		}),

		realFood : Ti.UI.createView({
			backgroundColor : '#FFFFFF',
			left : '0',
			width : '100%',
			height : Ti.UI.FILL,
			top : '45dp',
			visible : false
		}),

		medWatch : Ti.UI.createView({
			backgroundColor : '#FFFFFF',
			left : '0',
			width : '100%',
			height : Ti.UI.FILL,
			top : '45dp',
			visible : false
		}),

		altHealth : Ti.UI.createView({
			backgroundColor : '#FFFFFF',
			left : '0',
			width : '100%',
			height : Ti.UI.FILL,
			top : '45dp',
			visible : false
		}),

		susAgri : Ti.UI.createView({
			backgroundColor : '#FFFFFF',
			left : '0',
			width : '100%',
			height : Ti.UI.FILL,
			top : '45dp',
			visible : false
		}),

		create4Health : Ti.UI.createView({
			backgroundColor : '#FFFFFF',
			left : '0',
			width : '100%',
			height : Ti.UI.FILL,
			top : '45dp',
			visible : false
		}),

		aboutUS : Ti.UI.createScrollView({
			width : '100%',
			height : Ti.UI.FILL,
			top : '45dp',
			scrollType : 'vertical',
			contentHeight : 'auto',
			visible : false
		}),

		FAQ : Ti.UI.createScrollView({
			width : '100%',
			height : Ti.UI.FILL,
			top : '45dp',
			scrollType : 'vertical',
			contentHeight : 'auto',
			visible : false
		}),

		termsOfUse : Ti.UI.createScrollView({
			width : '100%',
			height : Ti.UI.FILL,
			top : '45dp',
			scrollType : 'vertical',
			contentHeight : 'auto',
			visible : false
		}),

		privacyStatement : Ti.UI.createScrollView({
			width : '100%',
			height : Ti.UI.FILL,
			top : '45dp',
			scrollType : 'vertical',
			contentHeight : 'auto',
			visible : false
		}),

		contact : Ti.UI.createScrollView({
			width : '100%',
			height : Ti.UI.FILL,
			top : '45dp',
			scrollType : 'vertical',
			contentHeight : 'auto',
			visible : false
		}),

		title : Titanium.UI.createLabel({
			color : "white",
			text : 'Top Stories',
			font : {
				fontSize : '22sp',
				fontFamily : 'Helvetica Neue',
				//fontWeight : 'bold'
			},
			textAlign : 'center',
			width : Ti.UI.SIZE,
			//left : '60dp'
		}),

		topBarClickView : Titanium.UI.createView({
			backgroundColor : 'transparent',
			top : 0,
			width : '200dp',
			height : '45dp',
			left : '0',
		}),

		appName : Titanium.UI.createLabel({
			color : "#000000",
			text : 'Web',
			font : {
				fontSize : '16sp',
				fontFamily : 'Helvetica Neue',
				//fontWeight : 'bold'
			},
			textAlign : 'center',
			width : 'auto',
			right : '10dp'
		}),

		appImage : Ti.UI.createImageView({
			image : '/images/top-bar-menu.png',
			height : '25dp',
			width : '33dp',
			left : '10dp',
		}),

		img_TopBar : Ti.UI.createView({
			backgroundColor : "#4A8F21",
			top : 0,
			width : '100%',
			height : '45dp'
		}),

		icon : Titanium.UI.createView({
			left : (OS == 'android') ? null : '15dp',
			right : (OS == 'android') ? '15dp' : null,
			height : '23dp',
			width : '28dp',
			backgroundImage : '/images/main-menu@2x.png',
			bubbleParent : false
		}),

		firstWin : Titanium.UI.createWindow({
			backgroundColor : '#FFFFFF',
			navBarHidden : (OS == "android" ) ? true : false,
			exitOnClose : true,
			modal : (OS == "android" ) ? true : false,
			orientationModes : [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT]
		}),

		topBarEdge : Ti.UI.createView({
			bottom : '0',
			height : '2dp',
			width : '100%',
			backgroundColor : "#6D6D6D",//(OS == "android" ) ? "black" : "#007AFF",
		}),

		searchIcon : Titanium.UI.createView({
			right : (OS == "iphone" ) ? '15dp' : '',
			height : '28dp',
			width : '28dp',
			backgroundImage : '/images/search.png',
			bubbleParent : false
		}),

	};

};

function buildUI() {

	search.searchContainerHome.add(search.searchIconHome);
	search.searchContainerHome.add(search.searchTextField);
	search.searchContainerHome.add(search.resetHome);
	search.searchContainerHome.add(search.search_bottomBar);

	ti.img_TopBar.add(search.searchContainerHome);

	if (OS == 'android') {
		ti.searchIcon.right = null;
		ti.searchIcon.left = '15dp';
	};

	ti.img_TopBar.add(ti.title);
	ti.img_TopBar.add(ti.icon);
	ti.img_TopBar.add(ti.searchIcon);

	ti.firstWin.add(ti.img_TopBar);

	ti.img_TopBar.add(ti.topBarEdge);

	ti.firstWin.add(ti.main_home);
	ti.firstWin.add(ti.aboutUS);
	ti.firstWin.add(ti.FAQ);
	ti.firstWin.add(ti.contact);
	ti.firstWin.add(ti.privacyStatement);
	ti.firstWin.add(ti.termsOfUse);

	ti.firstWin.add(ti.cocoHealth);
	ti.firstWin.add(ti.realFood);
	ti.firstWin.add(ti.medWatch);
	ti.firstWin.add(ti.altHealth);
	ti.firstWin.add(ti.susAgri);
	ti.firstWin.add(ti.create4Health);

	ti.indView.add(ti.activityIndicator);
	ti.activityIndicatorView.add(ti.indView);

	ti.firstWin.add(navMenuView);

}

var NavMenu_Show = function() {

	if (OS == 'android') {
		navMenuView.animate({
			right : '0',
			duration : 150,
			curve : Ti.UI.ANIMATION_CURVE_EASE_IN
		});

		ti.firstWin.add(ti.shadowView);
		ti.shadowView.left = '0';
		ti.shadowView.width = '40%';
	} else {
		navMenuView.animate({
			left : '0',
			duration : 150,
			curve : Ti.UI.ANIMATION_CURVE_EASE_IN
		});
		//setTimeout(function() {
		ti.firstWin.add(ti.shadowView);
		//}, 150);
		ti.shadowView.left = '60%';
		ti.shadowView.width = '40%';

	};

};

var NavMenu_Hide = function() {

	if (OS == 'android') {

		navMenuView.animate({
			right : '-60%',
			duration : 150,
			curve : Ti.UI.ANIMATION_CURVE_EASE_IN
		});

		setTimeout(function() {
			ti.firstWin.remove(ti.shadowView);
		}, 200);

	} else {

		navMenuView.animate({
			left : '-60%',
			duration : 150,
			curve : Ti.UI.ANIMATION_CURVE_EASE_IN
		});

		ti.shadowView.animate({
			left : '0',
			duration : 150,
			curve : Ti.UI.ANIMATION_CURVE_EASE_IN
		});

		setTimeout(function() {
			ti.firstWin.remove(ti.shadowView);
		}, 200);
	};

};

function eventListeners() {

	ti.icon.addEventListener('click', function() {

		if (LeftNameToggle == true) {

			NavMenu_Show();
			LeftNameToggle = false;

		} else {
			NavMenu_Hide();
			LeftNameToggle = true;
		}

	});

	ti.shadowView.addEventListener('click', function() {

		if (LeftNameToggle == false) {
			NavMenu_Hide();
			LeftNameToggle = true;
		}

	});

	navMenuView.addEventListener('click', function(e) {

		if (e.source.title != "" && e.source.title != undefined && e.source.title != null) {
			ti.title.text = e.source.title;

			for (var i = 0, j = navMenuView.getChildren().length; i < j; i++) {

				if (navMenuView.getChildren()[i].title == e.source.title) {
					navMenuView.getChildren()[i].backgroundImage = '/images/menu-bg-active@2x.png';
				} else {
					navMenuView.getChildren()[i].backgroundImage = '/images/menu-bg@2x.png';
				};
			};

			if (e.source.title == "Home") {

				ti.title.text = 'Top Stories';
				ti.main_home.visible = true;
				ti.aboutUS.visible = false;
				ti.FAQ.visible = false;
				ti.contact.visible = false;
				ti.privacyStatement.visible = false;
				ti.termsOfUse.visible = false;
				ti.cocoHealth.visible = false;
				ti.realFood.visible = false;
				ti.medWatch.visible = false;
				ti.altHealth.visible = false;
				ti.susAgri.visible = false;
				ti.create4Health.visible = false;

			} else if (e.source.title == "About Us") {

				ti.searchIcon.visible = false;
				search.searchContainerHome.visible = false;

				ti.title.text = 'About Us';
				ti.main_home.visible = false;
				ti.aboutUS.visible = true;
				ti.FAQ.visible = false;
				ti.contact.visible = false;
				ti.privacyStatement.visible = false;
				ti.termsOfUse.visible = false;
				ti.cocoHealth.visible = false;
				ti.realFood.visible = false;
				ti.medWatch.visible = false;
				ti.altHealth.visible = false;
				ti.susAgri.visible = false;
				ti.create4Health.visible = false;

				ti.aboutUS.add(App.UI.aboutUS.getAboutUSGUI());

			} else if (e.source.title == "FAQ") {

				ti.searchIcon.visible = false;
				search.searchContainerHome.visible = false;

				ti.title.text = 'FAQ';
				ti.main_home.visible = false;
				ti.aboutUS.visible = false;
				ti.FAQ.visible = true;
				ti.contact.visible = false;
				ti.privacyStatement.visible = false;
				ti.termsOfUse.visible = false;
				ti.cocoHealth.visible = false;
				ti.realFood.visible = false;
				ti.medWatch.visible = false;
				ti.altHealth.visible = false;
				ti.susAgri.visible = false;
				ti.create4Health.visible = false;

				ti.FAQ.add(App.UI.FAQ.getFAQGUI());

			} else if (e.source.title == "Contact") {

				ti.searchIcon.visible = false;
				search.searchContainerHome.visible = false;

				ti.title.text = 'Contact';
				ti.main_home.visible = false;
				ti.aboutUS.visible = false;
				ti.FAQ.visible = false;
				ti.contact.visible = true;
				ti.privacyStatement.visible = false;
				ti.termsOfUse.visible = false;
				ti.cocoHealth.visible = false;
				ti.realFood.visible = false;
				ti.medWatch.visible = false;
				ti.altHealth.visible = false;
				ti.susAgri.visible = false;
				ti.create4Health.visible = false;

				ti.contact.add(App.UI.contactUS.getContactUSGUI());

			} else if (e.source.title == "Privacy Statement") {

				ti.searchIcon.visible = false;
				search.searchContainerHome.visible = false;

				ti.title.text = 'Privacy Statement';
				ti.main_home.visible = false;
				ti.aboutUS.visible = false;
				ti.FAQ.visible = false;
				ti.contact.visible = false;
				ti.privacyStatement.visible = true;
				ti.termsOfUse.visible = false;
				ti.cocoHealth.visible = false;
				ti.realFood.visible = false;
				ti.medWatch.visible = false;
				ti.altHealth.visible = false;
				ti.susAgri.visible = false;
				ti.create4Health.visible = false;

				ti.privacyStatement.add(App.UI.privacy.getPrivacyGUI());

			} else if (e.source.title == "Terms of Use") {

				ti.searchIcon.visible = false;
				search.searchContainerHome.visible = false;

				ti.title.text = 'Terms of Use';
				ti.main_home.visible = false;
				ti.aboutUS.visible = false;
				ti.FAQ.visible = false;
				ti.contact.visible = false;
				ti.privacyStatement.visible = false;
				ti.termsOfUse.visible = true;
				ti.cocoHealth.visible = false;
				ti.realFood.visible = false;
				ti.medWatch.visible = false;
				ti.altHealth.visible = false;
				ti.susAgri.visible = false;
				ti.create4Health.visible = false;

				ti.termsOfUse.add(App.UI.terms.getTermsGUI());

			} else if (e.source.title == "Coconut Health") {

				ti.title.text = 'Coconut Health';
				ti.main_home.visible = false;
				ti.aboutUS.visible = false;
				ti.FAQ.visible = false;
				ti.contact.visible = false;
				ti.privacyStatement.visible = false;
				ti.termsOfUse.visible = false;
				ti.cocoHealth.visible = true;
				ti.realFood.visible = false;
				ti.medWatch.visible = false;
				ti.altHealth.visible = false;
				ti.susAgri.visible = false;
				ti.create4Health.visible = false;

				ti.cocoHealth.add(App.UI.cocoHealth.getCoconutHealthGUI());

			} else if (e.source.title == "Real Food Nutrition") {

				ti.title.text = 'Real Food Nutrition';
				ti.main_home.visible = false;
				ti.aboutUS.visible = false;
				ti.FAQ.visible = false;
				ti.contact.visible = false;
				ti.privacyStatement.visible = false;
				ti.termsOfUse.visible = false;
				ti.cocoHealth.visible = false;
				ti.realFood.visible = true;
				ti.medWatch.visible = false;
				ti.altHealth.visible = false;
				ti.susAgri.visible = false;
				ti.create4Health.visible = false;

				ti.realFood.add(App.UI.realFood.getRealFoodGUI());

			} else if (e.source.title == "Created4Health") {

				ti.title.text = 'Created4Health';
				ti.main_home.visible = false;
				ti.aboutUS.visible = false;
				ti.FAQ.visible = false;
				ti.contact.visible = false;
				ti.privacyStatement.visible = false;
				ti.termsOfUse.visible = false;
				ti.cocoHealth.visible = false;
				ti.realFood.visible = false;
				ti.medWatch.visible = false;
				ti.altHealth.visible = false;
				ti.susAgri.visible = false;
				ti.create4Health.visible = true;

				ti.create4Health.add(App.UI.createdHealth.getCreated4HealthGUI());

			} else if (e.source.title == "Medicine Watch") {

				ti.title.text = 'Medicine Watch';
				ti.main_home.visible = false;
				ti.aboutUS.visible = false;
				ti.FAQ.visible = false;
				ti.contact.visible = false;
				ti.privacyStatement.visible = false;
				ti.termsOfUse.visible = false;
				ti.cocoHealth.visible = false;
				ti.realFood.visible = false;
				ti.medWatch.visible = true;
				ti.altHealth.visible = false;
				ti.susAgri.visible = false;
				ti.create4Health.visible = false;

				ti.medWatch.add(App.UI.medWatch.getMedicineWatchGUI());

			} else if (e.source.title == "Alternative Health") {

				ti.title.text = 'Alternative Health';
				ti.main_home.visible = false;
				ti.aboutUS.visible = false;
				ti.FAQ.visible = false;
				ti.contact.visible = false;
				ti.privacyStatement.visible = false;
				ti.termsOfUse.visible = false;
				ti.cocoHealth.visible = false;
				ti.realFood.visible = false;
				ti.medWatch.visible = false;
				ti.altHealth.visible = true;
				ti.susAgri.visible = false;
				ti.create4Health.visible = false;

				ti.altHealth.add(App.UI.altHealth.getAlternateHealthGUI());

			} else if (e.source.title == "Sustainable Agriculture") {

				ti.title.text = 'Sustainable Agriculture';
				ti.main_home.visible = false;
				ti.aboutUS.visible = false;
				ti.FAQ.visible = false;
				ti.contact.visible = false;
				ti.privacyStatement.visible = false;
				ti.termsOfUse.visible = false;
				ti.cocoHealth.visible = false;
				ti.realFood.visible = false;
				ti.medWatch.visible = false;
				ti.altHealth.visible = false;
				ti.susAgri.visible = true;
				ti.create4Health.visible = false;

				ti.susAgri.add(App.UI.susAgri.getSusAgriGUI());

			}

			if (LeftNameToggle == false) {
				NavMenu_Hide();
				LeftNameToggle = true;
			};

		};

	});

	Ti.Gesture.addEventListener('orientationchange', function(e) {

		var orientation = getOrientation(e.orientation);

		if (orientation == 'landscape') {

			if (OS == 'iphone' || OS == 'ipad') {
				ti.firstWin.fullscreen = true;
				ti.firstWin.modal = false;
				ti.firstWin.top = '20dp';
			}
		} else {
			if (OS == 'iphone' || OS == 'ipad') {
				ti.firstWin.fullscreen = true;
				ti.firstWin.modal = false;
			}
		}

	});

	ti.firstWin.addEventListener('open', function() {

		Ti.App.fireEvent('STARTSPINNER');
		ti.main_home.add(App.UI.topStories.getTopStoriesGUI());

		Ti.App.fireEvent('SET_FEEDS_DATA');
		Ti.App.fireEvent('STOPSPINNER');

		/*		if (Ti.Network.online) {
		 Ti.API.info('ONLINE');
		 App.API.feeds.loadRssFeed({
		 success : function(data) {
		 Ti.API.info('SUCCESS');
		 Ti.App.fireEvent('SET_FEEDS_DATA');
		 Ti.App.fireEvent('STOPSPINNER');
		 }
		 });
		 } else {
		 Ti.App.fireEvent('SET_FEEDS_DATA');
		 Ti.App.fireEvent('STOPSPINNER');
		 }
		 */

		if (OS == 'iphone' || OS == 'ipad') {
			ti.firstWin.top = '20dp';
		} else {
			ti.firstWin.backgroundColor = '#E5E5E5';
		};

	});

	ti.searchIcon.addEventListener('click', function() {
		search.searchContainerHome.visible = true;
		ti.searchIcon.visible = false;
		ti.title.visible = false;
	});

	search.resetHome.addEventListener('click', function() {
		search.searchTextField.blur();
		search.searchContainerHome.visible = false;
		search.searchTextField.value = "";
		ti.searchIcon.visible = true;
		ti.title.visible = true;
		whichScreenToSearch = ti.title.text;

		if (whichScreenToSearch == "Home") {
			
		} else if (whichScreenToSearch == "Coconut Health") {
			
		} else if (whichScreenToSearch == "Created4Health") {
			
		} else if (whichScreenToSearch == "Medicine Watch") {
			
		} else if (whichScreenToSearch == "Alternative Health") {
			
		} else if (whichScreenToSearch == "Real Food Nutrition") {
			
		}

	});

	Ti.App.addEventListener("STARTSPINNER", function() {

		ti.firstWin.add(ti.activityIndicatorView);
		ti.activityIndicator.show();

	});

	Ti.App.addEventListener("STOPSPINNER", function() {

		ti.firstWin.remove(ti.activityIndicatorView);
		ti.activityIndicator.hide();

	});

};

exports.getAppWindow = function() {
	return ti.firstWin;
};

exports.initialize = function(app) {
	App = app;

	navMenuView = App.UI.navMenu.getNavMenu();
	if (OS == 'android') {
		navMenuView.right = '-60%';
	} else {
		navMenuView.left = '-60%';
	};

	createUIComps();
	eventListeners();
	buildUI();
	ti.firstWin.open();

};
