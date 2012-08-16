var script = document.createElement('script');
script.src = 'http://jqueryjs.googlecode.com/files/jquery-1.2.6.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function init() {

$("body").scroll(function() {
	$(".sect1").each(function() {
    	var docViewTop = $(window).scrollTop();
    	var docViewBottom = docViewTop + $(window).height();

   		var elemTop = $(this).offset().top;
    	var elemBottom = elemTop + $(this).height();

    	if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
    		var myLocation = $(this).find("h2.title");
    		$("div.navheader table tr:first-of-type td").append( ": ", myLocation.html() );
    	};
    
	});
});

}

window.onload = init;