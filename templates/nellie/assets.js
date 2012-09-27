$(function() {
	// hide the legalnotices
	$(".titlepage .copyright").click(function() {
		$(".titlepage .legalnotice").toggle();
	});
});

var style1 = document.getElementByClass('style1link');
style1.onclick = changestyle1;

function changestyle1() {
  document.getElementByClass('button1').style.transition-property = 'width';
}

var style2 = document.getElementByClass('style2link');
style2.onclick = changestyle2;

function changestyle2() {
  document.getElementByClass('button1').style.transition-property = 'border';
}

var style3 = document.getElementByClass('style3link');
style3.onclick = changestyle3;

function changestyle3() {
  document.getElementByClass('button1').style.transition-property = 'background-color';
}

var style4 = document.getElementByClass('style4link');
style4.onclick = changestyle4;

function changestyle4() {
document.getElementByClass('button1').style.transition-duration = '0s';
}

var style5 = document.getElementByClass('style5link');
style5.onclick = changestyle5;

function changestyle5() {
document.getElementByClass('button1').style.transition-duration = '2s';
}

var style6 = document.getElementByClass('style6link');
style6.onclick = changestyle6;

function changestyle6() {
document.getElementByClass('button1').style.transition-duration = '4s';
}

var style7 = document.getElementByClass('style7link');
style7.onclick = changestyle7;

function changestyle7() {
document.getElementByClass('button1').style.transition-timing-function = 'ease-in';
}

var style8 = document.getElementByClass('style8link');
style8.onclick = changestyle8;

function changestyle8() {
document.getElementByClass('button1').style.transition-timing-function = 'ease-out';
}

var style9 = document.getElementByClass('style9link');
style9.onclick = changestyle9;

function changestyle9() {
document.getElementByClass('button1').style.transition-timing-function = 'ease-in-out';
}

var style10 = document.getElementByClass('style10link');
style10.onclick = changestyle10;

function changestyle10() {
document.getElementByClass('button1').style.transition-delay = '0s';
}

var style11 = document.getElementByClass('style11link');
style11.onclick = changestyle11;

function changestyle11() {
document.getElementByClass('button1').style.transition-delay = '2s';
}

var style12 = document.getElementByClass('style12link');
style12.onclick = changestyle12;

function changestyle12() {
document.getElementByClass('button1').style.transition-delay = '4s';
}