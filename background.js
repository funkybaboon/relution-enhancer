console.log('background.js');

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function matchUrl(currentUrl) {
  var loginUrl =
    escapeRegExp("https://") +
    '[^\\.]+' +
    escapeRegExp(".relution.io/relution/portal/#/login");
  loginUrl = new RegExp(loginUrl);

  return result = loginUrl.test(currentUrl);
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log('background.js - addListener');

  if (changeInfo.status == 'complete' && tab.active) {


    if (matchUrl(tab.url)) {
      console.log('background.js - executeScript');

      chrome.tabs.executeScript(null, {file: 'script.js'});
    }


  }
});

