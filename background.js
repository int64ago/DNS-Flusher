var	bm = chrome.benchmarking,
		tabs = chrome.tabs;

chrome.browserAction.onClicked.addListener(function(){
	if(!bm){
		tabs.create({ url: 'https://goo.gl/vSh9im' });
		return;
	}
	bm.clearHostResolverCache();
	bm.closeConnections();
	tabs.reload();
});