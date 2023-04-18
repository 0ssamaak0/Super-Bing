// wait 5 seconds for the page to load
setTimeout(function () {
    // get the search box
    var searchBox = document.querySelectorAll(".cib-serp-main")[0].shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector("#searchbox");
    // set the max length to 25000
    searchBox.maxLength = 25000;

    // get the letter counter
    var letterCounter = document.querySelectorAll(".cib-serp-main")[0].shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector(".letter-counter").childNodes[2];

    // set the letter counter to 25000
    letterCounter.textContent = 25000;
}, 5000);