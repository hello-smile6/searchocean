
function engineSel() {
    engine = document.getElementById("enginebar").value;
    console.log(engine);
}

function search() {
    var searchterm = document.getElementById("searchbar").value;
    window.location.replace(engine + searchterm);
}

function hideAdvert() {
    var x = document.getElementById("pop");
    x.style.display = "none";
}

engine = "https://google.com/search?q="

function google() {
    engine = "https://google.com/search?q="
}

function ddg() {
    engine = "https://duckduckgo.com/?q="
}

function bing() {
    engine = "https://bing.com/?q="
}

function qwant() {
    engine = "https://qwant.com/?q="
}