function render_comment(comment, el)
{
	var child_el = $("<div class='comment'>"+comment.body+"</div>");
	if(comment.user)
	{
		child_el.prepend("<img src='http://www.gravatar.com/avatar/"+comment.user.md5_email+"?s=32&d=identicon' />");
	}
	
	if(comment.children.length > 0)
	{
		$.each(comment.children, function(index, value) { 
			render_comment(value, child_el);
		});
	}
	el.append(child_el);
}

function find_isbn()
{
	var url = window.location.href;
	var regexp = /books\/(\d+)\//;
	var match = regexp.exec(url);
	return match[1];
}

function find_chapter()
{
	var url = window.location.href;
	var regexp = /\/books\/(\d+)\/(.+).xhtml/;
	var match = regexp.exec(url);
	return match[2];
}

function add_comment_form()
{
	var root = $("body");
	var form = $("<form id='comment_form' action='books/"+find_isbn()+"/comments' method='POST'></form>");
	form.append("<textarea name='comment[body]'>Write your comment here</textarea><br />");
	form.append("<input type='hidden' name='comment[file]' value='"+find_chapter()+"' />")
	form.append("<input type='submit' value='Submit' />")
	root.append(form);
}

function add_advertisement()
{
	$("<a href='http://oreilly.com/velocity/'><img src='http://orm-social-book-dev.s3.amazonaws.com/advertising/velocity-ad.jpg' style='float: right; margin-left: 10px; margin-bottom: 10px;' /></a>").insertAfter(".titlepage:first");
}

function enable_scroll_check()
{
	//TODO: get back button working
	/*
	$(window).bind('popstate',function(){
	  //console.log(history);
	 // history.back();

	  //console.log($(previousElement));
	  //$("html. body").scrollTop($(previousElement).position().top - 210)
	});*/
	
	
	// we reverse in order to run detect on collection
	var allHeaders = $("div[id]").toArray().reverse(); 
	
	// cache placement results
	_.each(allHeaders, function(header) {
		header.top = $(header).position().top;
	});

	var previousElement;
	
	$(document).scroll(function(){
	  
		var window_top = $(document).scrollTop();
	  
		var currentElement = _.find(allHeaders, function(header) {
			return window_top >= header.top;
		});
		
		if(currentElement && currentElement !== previousElement)
		{
			history.pushState({ path: $(currentElement).attr("id") }, '', document.location.pathname+'#'+$(currentElement).attr("id"));
			//$.post("/books/<book_isbn>/readlog", {"page": page, "section": $(currentElement).attr("id")});
			previousElement = currentElement;
		}
		// if we're at the top
		else if(!currentElement && previousElement)
		{
			previousElement = null;
			history.pushState({ path: $(currentElement).attr("id") }, '', document.location.pathname);
		}
	
	});
}

var API_ENDPOINT = "http://orm-searchapi.herokuapp.com/api/v0.1/products";
var next_link = API_ENDPOINT
var previous_link = API_ENDPOINT

   // http://stackoverflow.com/questions/1714786/querystring-encoding-of-a-javascript-object
var serialize = function(obj) {
   var str = [];
   for(var p in obj)
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
   return str.join("&");
    }

function add_search_bar()
{
	$("header").prepend("<form>\
	<input id='q' type=text/>\
	<div style='display:none'>\
	sorted by:\
	<select id='sort' >\
	<option value='relevance'>Relevance</option>\
	<option value='authors'>Author(s)</option>\
	<option value='title'>Title</option>\
	</select>\
	returning\
	<select id='limit' >\
	<option value='5'>5</option>\
	<option value='10'>10</option>\
	<option value='20'>20</option>\
	</select>\
	values at a time.\
	</div>\
	<input value='Search' type=submit text='Start Searching' onClick='remote_search(); return false'/>\
	</form>\
	<ul id='search_results'></ul> ");
}

//Calls the search function and lists the results
function remote_search(qry) {
 if (!qry) {
  var qs = {
   'q': $("#q").val(),
   'sort': $("#sort").val(),
   'limit': $("#limit").val()
  }
  qry = serialize(qs)
 }
   val = $.ajax({
      type: 'get',
      url: API_ENDPOINT,
      data: qry,
      dataType: 'jsonp',
      success: function(data) {
       $("#search_results").text("");
       $.each(data.results, function() {
        var s = "<li>"
        s += "<img src='" + this.cover_url + "'/>"
        s += "<a href='" + this.link + "'>" + this.title + "</a> by " + this.authors + ". "
          s += this.description
          s += "</li>"
        $("#search_results").append(s);
       });
       previous_link = data.previous_query;
       next_link = data.next_query;

      $("#search_results").prepend("<a href='#' id='hide_search'>dismiss</a>");
      $("#search_results").show();

      $("#hide_search").click(function(){ $("#search_results").hide(); return false; });
       return false;
      }
   });
   return false;
}

$(function() {
	
	add_comment_form();
	
	$.getJSON('/books/'+find_isbn()+'/comments/'+find_chapter()+'.json', function(data) {
	 	var root = $("body");
	  $.each(data, function(index, value) { 
			render_comment(value, root);
		});
	});
	
	if(find_chapter() == "ch04")
	{
		add_advertisement();
	}
	
	add_search_bar();
	
	enable_scroll_check();
});