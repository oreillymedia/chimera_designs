var script = document.createElement('script');
script.src = 'http://jqueryjs.googlecode.com/files/jquery-1.2.6.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var myLocation = $("h2.title");
var myTD = $("div.navheader table tr:first-of-type td");
document.getElementById("the_first_thing_id2").innerHTML = "myLocation";
myTD.innerHTML = myLocation;
