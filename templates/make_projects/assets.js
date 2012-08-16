var script = document.createElement('script');
script.src = 'http://jqueryjs.googlecode.com/files/jquery-1.2.6.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function init() {

var elem = $(".sect1");

$(".sect1").each(function() {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(this).offset().top;
    var elemBottom = elemTop + $(this).height();

    var isVisible = ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    if  isVisible = true {
    var myLocation = $(this).children("div.titlepage div div h2.title");
    $("div.navheader table tr:first-of-type td").append( ": ", myLocation.html() );
    return false;
    }
    
});

}

window.onload = init;