var App;

var OS = Ti.Platform.osname;
var topStoriesContainer;

var ti = {};

var titles = [{
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
}];

function createTopStoriesGUI() {
	topStoriesContainer = Ti.UI.createView({
		width : '100%',
		height : Ti.UI.FILL,
		left : 0,
		top : 0,
	});
}

function buildTopStoriesGUI() {
	ti = {

		feedsContainer : Ti.UI.createScrollView({
			width : '100%',
			height : '53%',
			left : 0,
			top : '47%',
			layout : 'vertical'
		}),

		scrollableView : Ti.UI.createScrollableView({
			showPagingControl : false,
			width : '100%',
			height : '47%',
			left : 0,
			top : 0,
			currentPage : 2
		}),

		coco : Ti.UI.createView({
			width : '100%',
			height : Ti.UI.FILL,
			left : 0,
			top : 0,
			backgroundImage : '/images/no_image.png'
		}),

		realFood : Ti.UI.createView({
			width : '100%',
			height : Ti.UI.FILL,
			left : 0,
			top : 0,
			backgroundImage : '/images/no_image.png'
		}),

		medWatch : Ti.UI.createView({
			width : '100%',
			height : Ti.UI.FILL,
			left : 0,
			top : 0,
			backgroundImage : '/images/no_image.png'
		}),

		altHealth : Ti.UI.createView({
			width : '100%',
			height : Ti.UI.FILL,
			left : 0,
			top : 0,
			backgroundImage : '/images/no_image.png'
		}),

		susAgri : Ti.UI.createView({
			width : '100%',
			height : Ti.UI.FILL,
			left : 0,
			top : 0,
			backgroundImage : '/images/no_image.png'
		}),

		createdHealth : Ti.UI.createView({
			width : '100%',
			height : Ti.UI.FILL,
			left : 0,
			top : 0,
			backgroundImage : '/images/no_image.png'
		}),

		cocoBottom : Ti.UI.createView({
			width : '100%',
			height : '22%',
			left : 0,
			bottom : 0,
			backgroundColor : '#729C39',
		}),

		realFoodBottom : Ti.UI.createView({
			width : '100%',
			height : '22%',
			left : 0,
			bottom : 0,
			backgroundColor : '#729C39',
		}),

		medWatchBottom : Ti.UI.createView({
			width : '100%',
			height : '22%',
			left : 0,
			bottom : 0,
			backgroundColor : '#729C39',
		}),

		altHealthBottom : Ti.UI.createView({
			width : '100%',
			height : '22%',
			left : 0,
			bottom : 0,
			backgroundColor : '#729C39',
		}),

		susAgriBottom : Ti.UI.createView({
			width : '100%',
			height : '22%',
			left : 0,
			bottom : 0,
			backgroundColor : '#729C39',
		}),

		createdHealthBottom : Ti.UI.createView({
			width : '100%',
			height : '22%',
			left : 0,
			bottom : 0,
			backgroundColor : '#729C39',
		}),

		//===============TITLES====================
		cocoTitle : Titanium.UI.createLabel({
			color : "white",
			text : 'Cocunut Health',
			font : {
				fontSize : '20sp',
				fontFamily : 'Helvetica Neue',
			},
			textAlign : 'center',
		}),
		realFoodTitle : Titanium.UI.createLabel({
			color : "white",
			text : 'Real Food Nutrition',
			font : {
				fontSize : '20sp',
				fontFamily : 'Helvetica Neue',
			},
			textAlign : 'center',
		}),
		medWatchTitle : Titanium.UI.createLabel({
			color : "white",
			text : 'Medicine Watch',
			font : {
				fontSize : '20sp',
				fontFamily : 'Helvetica Neue',
			},
			textAlign : 'center',
		}),
		altHealthTitle : Titanium.UI.createLabel({
			color : "white",
			text : 'Alternative Health',
			font : {
				fontSize : '20sp',
				fontFamily : 'Helvetica Neue',
			},
			textAlign : 'center',
		}),
		susAgriTitle : Titanium.UI.createLabel({
			color : "white",
			text : 'Sustainable Agriculture',
			font : {
				fontSize : '20sp',
				fontFamily : 'Helvetica Neue',
			},
			textAlign : 'center',
		}),

		createdHealthTitle : Titanium.UI.createLabel({
			color : "white",
			text : 'Create4Health',
			font : {
				fontSize : '20sp',
				fontFamily : 'Helvetica Neue',
			},
			textAlign : 'center',
		}),

		upArrowI : Ti.UI.createView({
			width : '18dp',
			height : '8dp',
			bottom : '0',
			backgroundImage : '/images/up-arrow@2x.png',
		}),
		upArrowII : Ti.UI.createView({
			width : '18dp',
			height : '8dp',
			bottom : '0',
			backgroundImage : '/images/up-arrow@2x.png',
		}),
		upArrowIII : Ti.UI.createView({
			width : '18dp',
			height : '8dp',
			bottom : '0',
			backgroundImage : '/images/up-arrow@2x.png',
		}),
		upArrowIV : Ti.UI.createView({
			width : '18dp',
			height : '8dp',
			bottom : '0',
			backgroundImage : '/images/up-arrow@2x.png',
		}),
		upArrowV : Ti.UI.createView({
			width : '18dp',
			height : '8dp',
			bottom : '0',
			backgroundImage : '/images/up-arrow@2x.png',
		}),
		upArrowVI : Ti.UI.createView({
			width : '18dp',
			height : '8dp',
			bottom : '0',
			backgroundImage : '/images/up-arrow@2x.png',
		}),

		//==============CREATE BULLETS VIEW HERE================
		bulletView : Ti.UI.createView({
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
			top : '32%',
		}),

		bulletI : Ti.UI.createView({
			width : '8dp',
			height : '8dp',
			top : '0',
			left : '0',
			backgroundImage : '/images/bullet.png',
			index : 0,
			id : "bullet"
		}),

		bulletII : Ti.UI.createView({
			width : '8dp',
			height : '8dp',
			top : '0',
			left : '12dp',
			backgroundImage : '/images/bullet.png',
			index : 1,
			id : "bullet"
		}),

		bulletIII : Ti.UI.createView({
			width : '8dp',
			height : '8dp',
			top : '0',
			left : '24dp',
			backgroundImage : '/images/bulletActive.png',
			index : 2,
			id : "bullet"
		}),

		bulletIV : Ti.UI.createView({
			width : '8dp',
			height : '8dp',
			top : '0',
			left : '36dp',
			backgroundImage : '/images/bullet.png',
			index : 3,
			id : "bullet"
		}),

		bulletV : Ti.UI.createView({
			width : '8dp',
			height : '8dp',
			top : '0',
			left : '48dp',
			backgroundImage : '/images/bullet.png',
			index : 4,
			id : "bullet"
		}),

		bulletVI : Ti.UI.createView({
			width : '8dp',
			height : '8dp',
			top : '0',
			left : '60dp',
			backgroundImage : '/images/bullet.png',
			index : 5,
			id : "bullet"
		}),

	};

	ti.bulletView.add(ti.bulletI);
	ti.bulletView.add(ti.bulletII);
	ti.bulletView.add(ti.bulletIII);
	ti.bulletView.add(ti.bulletIV);
	ti.bulletView.add(ti.bulletV);
	ti.bulletView.add(ti.bulletVI);

	ti.cocoBottom.add(ti.cocoTitle);
	ti.realFoodBottom.add(ti.realFoodTitle);
	ti.medWatchBottom.add(ti.medWatchTitle);
	ti.altHealthBottom.add(ti.altHealthTitle);
	ti.susAgriBottom.add(ti.susAgriTitle);
	ti.createdHealthBottom.add(ti.createdHealthTitle);

	ti.cocoBottom.add(ti.upArrowI);
	ti.realFoodBottom.add(ti.upArrowII);
	ti.medWatchBottom.add(ti.upArrowIII);
	ti.altHealthBottom.add(ti.upArrowIV);
	ti.susAgriBottom.add(ti.upArrowV);
	ti.createdHealthBottom.add(ti.upArrowVI);

	ti.coco.add(ti.cocoBottom);
	ti.realFood.add(ti.realFoodBottom);
	ti.medWatch.add(ti.medWatchBottom);
	ti.altHealth.add(ti.altHealthBottom);
	ti.susAgri.add(ti.susAgriBottom);
	ti.createdHealth.add(ti.createdHealthBottom);

	ti.scrollableView.views = [ti.coco, ti.realFood, ti.medWatch, ti.altHealth, ti.susAgri, ti.createdHealth];

	topStoriesContainer.add(ti.scrollableView);
	topStoriesContainer.add(ti.bulletView);
};

function eventListenersTopStories() {

	Ti.App.addEventListener('SET_FEEDS_DATA', function() {

		var APP_DATA = Ti.App.Properties.getList('App_DATA');
		
		
		Ti.API.info(' JSON DATA '+JSON.stringify(APP_DATA));

		for (var i = 0, j = APP_DATA.length; i < j; i++) {

			if (APP_DATA[i].cat == "Medicine Watch") {

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

				ti.feedsContainer.add(container);
			}
		};

		topStoriesContainer.add(ti.feedsContainer);
	});

	ti.bulletView.addEventListener('click', function(e) {
		ti.scrollableView.setCurrentPage(e.source.index);
		var index = e.source.index;

		if (e.source.id == 'bullet') {

			for (var i = 0, j = ti.bulletView.getChildren().length; i < j; i++) {

				if (ti.bulletView.getChildren()[i].index == e.source.index) {
					ti.bulletView.getChildren()[i].backgroundImage = '/images/bulletActive.png';
				} else {
					ti.bulletView.getChildren()[i].backgroundImage = '/images/bullet.png';
				};
			};
			ti.feedsContainer.removeAllChildren();
			setFeedsDataForCategories(titles[index].title);
		}

	});

	ti.scrollableView.addEventListener('scrollend', function(e) {

		var index = e.currentPage;
		for (var i = 0, j = ti.bulletView.getChildren().length; i < j; i++) {

			if (ti.bulletView.getChildren()[i].index == e.currentPage) {
				ti.bulletView.getChildren()[i].backgroundImage = '/images/bulletActive.png';
			} else {
				ti.bulletView.getChildren()[i].backgroundImage = '/images/bullet.png';
			};
		};

		ti.feedsContainer.removeAllChildren();
		setFeedsDataForCategories(titles[index].title);

	});

	ti.feedsContainer.addEventListener('click', function(e) {
		App.UI.storiesDetails.getstoriesDetailsComp(e.source);
	});

}

function setFeedsDataForCategories(category) {

	var APP_DATA = Ti.App.Properties.getList('App_DATA');

	for (var i = 0, j = APP_DATA.length; i < j; i++) {

		if (APP_DATA[i].cat == category) {

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

			ti.feedsContainer.add(container);
		}
	};

	topStoriesContainer.add(ti.feedsContainer);
}

exports.getTopStoriesGUI = function() {
	return topStoriesContainer;
};

exports.initialize = function(app) {
	App = app;
	createTopStoriesGUI();
	buildTopStoriesGUI();
	eventListenersTopStories();
};
