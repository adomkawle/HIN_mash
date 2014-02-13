

// SETUP SEARCH HTTP CLIENT ====================================
  var HTTP_MENU = Ti.Network.createHTTPClient();
  var HTTP_FEEDS = Ti.Network.createHTTPClient();
  
// =============================================================

exports.set = function(module) {
  module.HTTP_MENU = HTTP_MENU;
  module.HTTP_FEEDS = HTTP_FEEDS;
};