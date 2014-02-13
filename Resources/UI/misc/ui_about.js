var App;

var OS = Ti.Platform.osname;
var aboutUS_container;
var ti = {};

function createAboutUSGUI() {

	ti = {
		aboutUsText : Titanium.UI.createLabel({
			color : "#ADADAD",
			font : {
				fontSize : '13sp',
				fontFamily : 'Helvetica Neue',
			},
			top : '5dp',
			left : '5%',
			width : '90%',
			text : "\nHealth Impact News Daily brings you the latest news regarding issues that impact your health you may find difficult to find in other media sources. \n\nIn our Medicine Watch category we bring you the latest news regarding the dangers of prescription drugs, which some statistics now list as the 3rd or 4th leading cause of death in the U.S., as well as the latest news on the vaccine conflict. \n\nIn our Real Food Nutrition category we bring you news about traditional foods that are truly healthy, as opposed to modern mass-produced factory foods. We also cover the truth regarding saturated fats and the faulty cholesterol theory of heart disease, and we cover the issues concerning consumer demand for raw milk and the opposition to it. \n\n The Sustainable Agriculture section brings news and commentary regarding important issues facing us in the 21st century regarding farming and our food sources. We publish the truth regarding genetically modified food, and information showing how sustainable agriculture is the way the world has produced food throughout human history, and is the hope for our food sources tomorrow. \n\nWe cover topics in Alternative Health such as whole food nutrition, herbs, vitamins, fitness, complimentary medicine, naturopathy, osteopathy, Traditional Chinese Medicine, homeopathy, environmental medicine and much more! \n\nIn our Coconut Health section, we are the leaders on the Internet regarding all the latest research and testimonials regarding the health properties of coconuts, particularly coconut oil. You can find much of this information on CoconutDiet.com and CoconutOil.com. The editors have been publishing the truth regarding the health benefits of coconut oil since the year 2000, starting the current day Coconut Oil Revolution. \n\nThe Created4Health section features the writings of the editor regarding the spiritual side of health, based on the writings of the ancient scriptures known today as The Bible, the all-time best-selling book in human history. We also cover important news topics related to “creation” or “intelligent design”, as opposed to the modern day academic propaganda of Darwinian evolution that is forced upon people through government funded education. As was documented in the Ben Stein documentray “Expelled“, alternative views to Darwinian evolution are censored in the academic arena. They will not be censored on this site.  The spiritual topics written by the editor are found on the Create4Health website.\n\n Our Video section will feature interviews, documentaries, and other interesting clips from the above categories and topics that you probably will not find in many other news media sites. \n\nWhy do we publish these stories? We learned first hand in the late 1990s and early 2000 that the truth regarding health and nutrition about fats and oils was NOT being published in the mainstream media. Living in the rural Philippines taught us a lot about native nutrition in general, and coconut oil in particular. Seeing people in their 70s and 80s who had consumed large amounts of saturated fats their entire lives still living and working on the farm instead of resting in nursing homes was a real eye-opener. It led Brian to start studying the whole issue of fats and oils, and the lipid theory of heart disease. He started publishing this research on the Internet, and when he and Marianita started offering organic Virgin Coconut Oil in the US market, the testimonies started pouring in. The Coconut Oil revolution had begun. \n\nThere are many other issues regarding your health that are NOT being published in the mainstream media today, due to political and economic reasons, NOT scientific reasons. We will publish the truth on this website. \n\n Editors: \n\nBrian Shilhavy, CEO Tropical Traditions \n\nMarianita Shilhavy, Certified Nutritionist/Dietician in the Philippines"
		}),
	};

}

function buildAboutUSUI() {

}

exports.getAboutUSGUI = function() {
	return ti.aboutUsText;
};

exports.initialize = function(app) {
	App = app;
	createAboutUSGUI();
};
