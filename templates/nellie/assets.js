// runes thing //

$(function() {
	// hide the legalnotices
	$(".titlepage .copyright").click(function() {
		$(".titlepage .legalnotice").toggle();
	});
});

// css coderunner //

$(function() {
$('.style1link a.ulink').attr('target','');
});

$(function() {
	$('.style1link a.ulink').click(function() {
		$('.button1').css('transition-property','width');
		$('.button1').css('-moz-transition-property','width');
		$('.button1').css('-webkit-transition-property','width');
		$('.button1').css('-o-transition-property','width');
		$('.style1link').css('border','2px solid black');
		$('.style2link').css('border','1px solid #888');
	});
});

$(function() {
	$('.style2link a.ulink').click(function() {
		$('.button1').css('transition-property','background-color');
		$('.button1').css('-moz-transition-property','background-color');
		$('.button1').css('-webkit-transition-property','background-color');
		$('.button1').css('-o-transition-property','background-color');
		$('.style1link').css('border','1px solid #888');
		$('.style2link').css('border','2px solid black');
	});
});

$(function() {
	$('.style3link a.ulink').click(function() {
		$('.button1').css('transition-duration','2s');
		$('.button1').css('-moz-transition-duration','2s');
		$('.button1').css('-webkit-transition-duration','2s');
		$('.button1').css('-o-transition-duration','2s');
		$('.style3link').css('border','2px solid black');
		$('.style4link').css('border','1px solid #888');
	});
});

$(function() {
	$('.style4link a.ulink').click(function() {
		$('.button1').css('transition-duration','4s');
		$('.button1').css('-moz-transition-duration','4s');
		$('.button1').css('-webkit-transition-duration','4s');
		$('.button1').css('-o-transition-duration','4s');
		$('.style3link').css('border','1px solid #888');
		$('.style4link').css('border','2px solid black');
	});
});

$(function() {
	$('.style5link a.ulink').click(function() {
		$('.button1').css('transition-timing-function','ease-out');
		$('.button1').css('-moz-transition-timing-function','ease-out');
		$('.button1').css('-webkit-transition-timing-function','ease-out');
		$('.button1').css('-o-transition-timing-function','ease-out');
		$('.style5link').css('border','2px solid black');
		$('.style6link').css('border','1px solid #888');
	});
});

$(function() {
	$('.style6link a.ulink').click(function() {
		$('.button1').css('transition-timing-function','ease-in-out');
		$('.button1').css('-moz-transition-timing-function','ease-in-out');
		$('.button1').css('-webkit-transition-timing-function','ease-in-out');
		$('.button1').css('-o-transition-timing-function','ease-in-out');
		$('.style5link').css('border','1px solid #888');
		$('.style6link').css('border','2px solid black');
	});
});

$(function() {
	$('.style7link a.ulink').click(function() {
		$('.button1').css('transition-delay','2s');
		$('.button1').css('-moz-transition-delay','2s');
		$('.button1').css('-webkit-transition-delay','2s');
		$('.button1').css('-o-transition-delay','2s');
		$('.style7link').css('border','2px solid black');
		$('.style8link').css('border','1px solid #888');
	});
});

$(function() {
	$('.style8link a.ulink').click(function() {
		$('.button1').css('transition-delay','4s');
		$('.button1').css('-moz-transition-delay','4s');
		$('.button1').css('-webkit-transition-delay','4s');
		$('.button1').css('-o-transition-delay','4s');
		$('.style7link').css('border','1px solid #888');
		$('.style8link').css('border','2px solid black');
	});
});

$(function() {
	$('.reset').click(function() {
    	location.reload();
    	$('.style1link').css('border','1px solid #888');
    	$('.style2link').css('border','1px solid #888');
    	$('.style3link').css('border','1px solid #888');
    	$('.style4link').css('border','1px solid #888');
    	$('.style5link').css('border','1px solid #888');
    	$('.style6link').css('border','1px solid #888');
    	$('.style7link').css('border','1px solid #888');
    	$('.style8link').css('border','1px solid #888');
	});
});