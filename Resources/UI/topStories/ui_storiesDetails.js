var App;
var OS = Ti.Platform.osname;
var ti = {};

function createstoriesDetailsComp() {

	ti = {

		container : Ti.UI.createScrollView({
			width : '100%',
			top : '45dp',
			layout : 'vertical',
			height : Ti.UI.FILL,
			scrollType : 'vertical',
			contentHeight : 'auto',
		}),

		img_TopBar : Ti.UI.createView({
			backgroundColor : "#4A8F21",
			top : 0,
			width : '100%',
			height : '45dp'
		}),

		storiesDetails_win : Titanium.UI.createWindow({
			backgroundColor : '#FFFFFF',
			navBarHidden : (OS == "android" ) ? true : false,
			modal : (OS == "android" ) ? true : false,
			orientationModes : [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT],
		}),

		win_title : Titanium.UI.createLabel({
			color : "white",
			font : {
				fontSize : '22sp',
				fontFamily : 'Helvetica Neue',
			},
			textAlign : 'center',
			width : 'auto',
		}),

		back : Titanium.UI.createView({
			left : '15dp',
			height : '30dp',
			width : '18dp',
			backgroundImage : '/images/top-bar-back.png',
			bubbleParent : false
		}),

		recipeImage : Titanium.UI.createImageView({
			width : '100%',
			//height : '35%',
			left : '0',
			top : '0',
			image : '/images/no_image.png',
		}),

		detailsScrollContainer : Ti.UI.createScrollView({
			width : '100%',
			height : Ti.UI.FILL,
			top : '5dp',
			scrollType : 'vertical',
			contentHeight : 'auto',
		}),

		detailsText : Titanium.UI.createLabel({
			color : "#ADADAD",
			font : {
				fontSize : '12sp',
				fontFamily : 'Helvetica Neue',
			},
			top : '5dp',
			left : '5%',
			width : '90%'
		}),

	};
};

function buildstoriesDetailsComp() {
	
	if (OS == 'android') {
		ti.recipeImage.height = '35%';
	};

	ti.img_TopBar.add(ti.back);
	ti.img_TopBar.add(ti.win_title);
	ti.storiesDetails_win.add(ti.img_TopBar);

	//ti.detailsScrollContainer.add(ti.detailsText);
	ti.container.add(ti.recipeImage);
	ti.container.add(ti.detailsText);
	
	ti.storiesDetails_win.add(ti.container);

}

function eventListenersstoriesDetails() {
	ti.back.addEventListener('click', function() {
		ti.storiesDetails_win.close();
	});
};

exports.getstoriesDetailsComp = function(details_data) {
	ti.win_title.text = details_data.header;
	ti.detailsText.text = details_data.desc_text;
	ti.recipeImage.image = details_data.newsImage;
	
	ti.storiesDetails_win.open();

};

exports.initialize = function(app) {
	App = app;
	createstoriesDetailsComp();
	buildstoriesDetailsComp();
	eventListenersstoriesDetails();

	if (OS == 'iphone' || OS == 'ipad') {
		ti.storiesDetails_win.top = '20dp';
	};

};

