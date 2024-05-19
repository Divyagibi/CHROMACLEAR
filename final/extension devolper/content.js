// Function to add the necessary SVG filter to the page
function addColorBlindFilter() {
    const svgStr = `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="deuteranopia">
                <feColorMatrix type="matrix" values="0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0"/>
            </filter>
            <filter id="protanopia">
                <feColorMatrix type="matrix" values="0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0"/>
            </filter>
            <filter id="tritanopia">
                <feColorMatrix type="matrix" values="0.95, 0.05, 0, 0, 0 0, 0.433, 0.567, 0, 0 0, 0.475, 0.525, 0, 0 0, 0, 0, 1, 0"/>
            </filter>
        </defs>
    </svg>`;
    const svgElem = document.createElement("div");
    svgElem.innerHTML = svgStr;
    svgElem.style.position = "absolute";
    svgElem.style.width = "0";
    svgElem.style.height = "0";
    document.body.appendChild(svgElem);
}

// Listen for messages from the popup to apply a filter
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "applyFilter") {
        document.body.style.filter = `url('#${request.filterId}')`;
    }
});

addColorBlindFilter();

