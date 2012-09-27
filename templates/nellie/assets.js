$(function() {
	// hide the legalnotices
	$(".titlepage .copyright").click(function() {
		$(".titlepage .legalnotice").toggle();
	});
});

//$(function() {
//	alert('hello');
//});

$(function() {
$(".coderunner .ulink").attr("target","_self");
});

//$(function() {
//	$('.style6link a.ulink').click(function() {
//	alert('success');
//	});
//});

$(function() {
	$('.style6link a.ulink').click(function() {
		$('.button1').css('transition-duration','4s');
		$('.button1').css('-moz-transition-duration','4s');
		$('.button1').css('-webkit-transition-duration','4s');
		$('.button1').css('-o-transition-duration','4s');
	});
});