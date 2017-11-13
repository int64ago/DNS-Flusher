var flashAndReload = function(noReload) {
  var bm = chrome.benchmarking,
      tabs = chrome.tabs;
  if(!bm){
    tabs.create({ url: 'https://goo.gl/vSh9im' });
    return;
  }
  bm.clearHostResolverCache();
  bm.closeConnections();
  if (!noReload && tabs) {
    tabs.reload({ bypassCache: true });
  }
  console.log('[flashAndReload]');
};

chrome.browserAction.onClicked.addListener(function(){
  flashAndReload();
});

chrome.contextMenus.create({
  'title': 'Flush DNS and reload'
});

chrome.contextMenus.onClicked.addListener(function() {
  flashAndReload();
});

chrome.commands.onCommand.addListener(function(cmd) {
  if (cmd === 'flash-and-reload') {
    flashAndReload();
  }
});

var options = {
  enable: localStorage.getItem('auto.refresh.enable') === 'true',
  interval: (localStorage.getItem('auto.refresh.interval') || 0) / 1,
};

var autoReload = null;

function clearAutoReload() {
    clearInterval(autoReload);
    autoReload = null;
    console.log('[AutoReload] stop');
}

function setAutoReload(options) {
  if (options.enable && options.interval) {
    if (autoReload) {
      clearAutoReload();
    }
    autoReload = setInterval(() => {
      flashAndReload(true);
    }, options.interval * 1000);
    console.log('[AutoReload] start');
  } else if (autoReload) {
    clearAutoReload();
  }
}

setAutoReload(options);

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    setAutoReload(message);
});