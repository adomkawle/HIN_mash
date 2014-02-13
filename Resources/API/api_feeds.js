var osname = Ti.Platform.osname;
var App;
//=================================================
// SET GLOBAL DATA==============================
var config_API = require('config/cfg_api');
config_API.set(this);
//=================================================

var RSS_URL = 'http://healthynews2day.com/feed/';
var MONTH_MAP = {
	JAN : 1,
	FEB : 2,
	MAR : 3,
	APR : 4,
	MAY : 5,
	JUN : 6,
	JUL : 7,
	AUG : 8,
	SEP : 9,
	OCT : 10,
	NOV : 11,
	DEC : 12
};

var getRssText = function(item, key) {
	return osname === 'mobileweb' ? item.getElementsByTagName(key).item(0).textContent : item.getElementsByTagName(key).item(0).text;
};

var parseDate = function(dateString) {
	var dateParts = dateString.split(' ');
	var timeParts = dateParts[4].split(':');
	return MONTH_MAP[dateParts[2].toUpperCase()] + '/' + dateParts[1] + ' ' + timeParts[0] + ':' + timeParts[1];
};

exports.loadRssFeed = function(o, tries) {

	tries = tries || 0;
	Ti.API.info(' RSS '+RSS_URL);
	HTTP_FEEDS.open('GET', RSS_URL);
	HTTP_FEEDS.onload = function(e) {
		
		Ti.API.info(' RSS FEEDS XML '+this.responseXML);
		
		var xml = this.responseXML;
		if (xml === null || xml.documentElement === null) {
			if (tries < 3) {
				tries++;
				exports.loadRssFeed(o, tries);
				return;
			} else {
				alert('Error reading RSS feed. Make sure you have a network connection and try refreshing.');
				if (o.error) {
					o.error();
				}
				return;
			}
		}

		var items = xml.documentElement.getElementsByTagName('item');
		var data = [];

		var category = [];

		for (var i = 0; i < items.length; i++) {
			var item = items.item(i);
		
			try {
				var thumbnails = item.getElementsByTagName("media:thumbnail");
				if (thumbnails && thumbnails.length > 0) {
					image = thumbnails.item(0).getAttribute("url");
				}
			} catch (e) {
				image = '/images/no_image.png';
			}
			
			var desc = getRssText(item, 'description').toString().split("<div>");
			var length_desc = desc.length;
			

			data.push({
				title : getRssText(item, 'title'),
				link : getRssText(item, 'link'),
				pubDate : parseDate(getRssText(item, 'pubDate')),
				cat : getRssText(item, 'category'),
				desc : desc[ Number(length_desc) - 1 ],
				image : image,
			});

		}
		if (o.success) {
			Ti.API.info(' FEEDS DATA ' + JSON.stringify(data));
			
			Ti.App.Properties.setList('App_DATA', data);
			
			o.success(data);
		}
	};
	HTTP_FEEDS.onerror = function(e) {
		if (o.error) {
			o.error();
		}
	};

	if (o.start) {
		o.start();
	}
	HTTP_FEEDS.send();
};

exports.initialize = function(app) {
	App = app;
};
