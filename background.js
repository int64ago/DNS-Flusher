var flashAndReload = function() {
  var bm = chrome.benchmarking,
      tabs = chrome.tabs;
  if(!bm){
    tabs.create({ url: 'https://goo.gl/vSh9im' });
    return;
  }
  bm.clearHostResolverCache();
  bm.closeConnections();
  tabs.reload();
};

chrome.browserAction.onClicked.addListener(function(){
  flashAndReload();
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    'title': 'Flush DNS and reload'
  });
});

chrome.contextMenus.onClicked.addListener(function() {
  flashAndReload();
});

chrome.commands.onCommand.addListener(function(cmd) {
  if (cmd === 'flash-and-reload') {
    flashAndReload();
  }
});