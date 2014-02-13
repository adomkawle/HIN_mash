var App;

var OS = Ti.Platform.osname;
var terms_container;
var ti = {};

function createtermsGUI() {

	ti = {
		termsText : Titanium.UI.createLabel({
			color : "#ADADAD",
			font : {
				fontSize : '13sp',
				fontFamily : 'Helvetica Neue',
			},
			top : '5dp',
			left : '5%',
			width : '90%',
			text : "\nScope of this Statement– By entering and continuing to use the Web Site from which you reached this Statement, you agree to the terms of this Statement. \n\nYou can return to the page from which you accessed this page by using your Internet browser “Back” button. \n\nHealth Impact News Daily reserves all rights. \n\nTerms and Conditions (Disclaimers) \n\nNone of the editors or representatives of Health Impact News Daily are licensed medical doctors. No personnel of Health Impact News Daily may diagnose or treat medical ailments or diseases. Persons requiring medical attention should consult a licensed medical doctor. \n\nThe content in the web site linked to this Statement are intended only for residents of the United States and other jurisdictions where providing such information is lawful. \n\nAccess to and use of this site are subject to the following terms and conditions and all applicable laws. You may browse this site for personal entertainment and information. The contents of the sites which link to this Statement include copyright materials that are either used with permission or are offered under the Fair Use exception. \n\nMany of the articles on this site are linked to external sites where the content originates. Health Impact News Daily has no responsibility for content on other web sites that you may find or access when using Health Impact News Daily. Material available on or through other web sites may be protected by copyright and the intellectual property laws of the United States and/or other countries. The terms of use of those web sites, and not Health Impact News Daily Terms of Use, govern your use of that material. \n\nWe make no warranties or representations about the accuracy or completeness of this site content or of the content of any site or sites linked to or from this site. Neither Health Impact News nor any of its affiliates shall be liable for any direct, incidental, consequential, indirect or punitive damages arising out of access to or use of any content of this site or the content of any \n\nAny third-party materials to which links on these sites point, or which may be accessible through these sites, are the sole responsibility of those posting such materials; this site and its affiliates do not endorse or adopt any information or claims contained in such third party sites."
		}),
	};

}

function buildtermsUI() {

}

exports.getTermsGUI = function() {
	return ti.termsText;
};

exports.initialize = function(app) {
	App = app;
	createtermsGUI();
};
