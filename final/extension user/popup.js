document.addEventListener("DOMContentLoaded", function() {
    var applyBtn = document.getElementById('applyBtn');
  
    applyBtn.addEventListener('click', function() {
      var bgColor = document.getElementById('bgColor').value;
      var textColor = document.getElementById('textColor').value;
      var linkColor = document.getElementById('linkColor').value;
  
      chrome.runtime.sendMessage({
        action: "injectStyles",
        bgColor: bgColor,
        textColor: textColor,
        linkColor: linkColor
      });
    });
  });
  