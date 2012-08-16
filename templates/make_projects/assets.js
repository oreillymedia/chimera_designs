javascript:var s=document.createElement('script');
s.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js');
document.getElementsByTagName('body')[0].appendChild(s);
alert('thank you for using jquery!');
void(s);

var myPath = String(window.location);
var myPathArray = myPath.split("/");
var myLocation = myPathArray.shift();
var myTD = $("div.navheader table tr:first-of-type td");
