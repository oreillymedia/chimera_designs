$(function() {
	// hide the legalnotices
	$(".titlepage .copyright").click(function() {
		$(".titlepage .legalnotice").toggle();
	});
});

$(function() {
$('.style1link a.ulink').attr('target','');
});

$(function() {
	$('.style1link a.ulink').click(function() {
		$('.button1').css('transition-property','width');
		$('.button1').css('-moz-transition-property','width');
		$('.button1').css('-webkit-transition-property','width');
		$('.button1').css('-o-transition-property','width');
	});
});

$(function() {
	$('.style2link a.ulink').click(function() {
		$('.button1').css('transition-property','background-color');
		$('.button1').css('-moz-transition-property','background-color');
		$('.button1').css('-webkit-transition-property','background-color');
		$('.button1').css('-o-transition-property','background-color');
	});
});

$(function() {
	$('.style3link a.ulink').click(function() {
		$('.button1').css('transition-duration','2s');
		$('.button1').css('-moz-transition-duration','2s');
		$('.button1').css('-webkit-transition-duration','2s');
		$('.button1').css('-o-transition-duration','2s');
	});
});

$(function() {
	$('.style4link a.ulink').click(function() {
		$('.button1').css('transition-duration','4s');
		$('.button1').css('-moz-transition-duration','4s');
		$('.button1').css('-webkit-transition-duration','4s');
		$('.button1').css('-o-transition-duration','4s');
	});
});

$(function() {
	$('.style5link a.ulink').click(function() {
		$('.button1').css('transition-timing-function','ease-out');
		$('.button1').css('-moz-transition-timing-function','ease-out');
		$('.button1').css('-webkit-transition-timing-function','ease-out');
		$('.button1').css('-o-transition-timing-function','ease-out');
	});
});

$(function() {
	$('.style6link a.ulink').click(function() {
		$('.button1').css('transition-timing-function','ease-in-out');
		$('.button1').css('-moz-transition-timing-function','ease-in-out');
		$('.button1').css('-webkit-transition-timing-function','ease-in-out');
		$('.button1').css('-o-transition-timing-function','ease-in-out');
	});
});

$(function() {
	$('.style4link a.ulink').click(function() {
		$('.button1').css('transition-delay','2s');
		$('.button1').css('-moz-transition-delay','2s');
		$('.button1').css('-webkit-transition-delay','2s');
		$('.button1').css('-o-transition-delay','2s');
	});
});

$(function() {
	$('.style4link a.ulink').click(function() {
		$('.button1').css('transition-delay','4s');
		$('.button1').css('-moz-transition-delay','4s');
		$('.button1').css('-webkit-transition-delay','4s');
		$('.button1').css('-o-transition-delay','4s');
	});
});

$('.reset').click(function() {
    location.reload();
	});


