var script = document.createElement('script');
script.src = 'http://jqueryjs.googlecode.com/files/jquery-1.2.6.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

window.onload = function() {
var myLocation = $("h2.title").first();
var myTD = $("div.navheader table tr:first-of-type td");
document.getElementById("whenever_you_ad").innerHTML = myLocation;
myTD.innerHTML = myLocation;
}