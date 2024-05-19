document.getElementById('deuteranopia').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "applyFilter", filterId: "deuteranopia"});
    });
});

document.getElementById('protanopia').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "applyFilter", filterId: "protanopia"});
    });
});

document.getElementById('tritanopia').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "applyFilter", filterId: "tritanopia"});
    });
});
