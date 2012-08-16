var myPath = window.location;
var myPathArray = myPath.split("/");
var myLocation = myPathArray.shift();
document.getElementsByClassName("navheader").getElementsByTagName("table")[0].getElementsByTagName("tr")[0].getElementsByTagName("td")[0].innerHTML=myLocation;
