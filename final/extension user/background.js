chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "injectStyles") {
      chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        if (tabs.length > 0) {
          var currentTabId = tabs[0].id;
          var bgColor = request.bgColor;
          var textColor = request.textColor;
          var linkColor = request.linkColor;
  
          chrome.scripting.executeScript({
            target: { tabId: currentTabId },
            func: function(bgColor, textColor, linkColor) {
              // Console log for troubleshooting
              console.log("Adding class:", document.documentElement.classList);
  
              var style = `
                /* More specific selector (optional) */
                .custom-style body { background-color: ${bgColor} !important; }
                p, a, span { color: ${textColor}; }
                a { color: ${linkColor}; }
              `;
  
              var styleElement = document.createElement('style');
              styleElement.textContent = style;
              document.documentElement.classList.add('custom-style');
              document.documentElement.appendChild(styleElement);
            },
            args: [bgColor, textColor, linkColor]
          });
        } else {
          console.error("No active tab found!");
        }
      });
    }
  });