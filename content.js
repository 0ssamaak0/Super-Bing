// wait 5 seconds for the page to load
setTimeout(function () {
    // get the search box
    
    var searchBox = document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector("div > div.main-container > div > div.input-row > cib-text-input").shadowRoot.querySelector("#searchbox");
    // set the max length to 25000
    searchBox.maxLength = 25000;

    // get the letter counter
    var letterCounter = document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector("div > div.main-container > div > div.bottom-controls > div.bottom-right-controls > div.letter-counter").childNodes[3];
    // set the letter counter to 25000
    letterCounter.textContent = 25000;
}, 5000);
