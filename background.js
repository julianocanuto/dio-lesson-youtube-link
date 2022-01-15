console.log('Background page')

chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({
        url: 'http://www.google.com'
    });
});

