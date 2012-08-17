// first of all you were including JQuery in a couple lines of code here. That's not needed, as it's 
// already included by the Rails app on the page. I'm including a bunch of libraries: JQuery, underscore and backbone

$(function() {
	
	var defaultText = $("div.navheader table tr:first td").first().text();
	var headings = $("h2.title").toArray().reverse();
	var currentHeading = null;
	
	$(document).scroll(function() {
		
		var window_top = $(document).scrollTop();

		var newHeading = _.find(headings, function(header) {
				return window_top >= $(header).position().top;
		});
		
		if(!newHeading)
		{
			$("div.navheader table tr:first td").html(defaultText);
		}
		else if(newHeading !== currentHeading)
		{
			$("div.navheader table tr:first td").html($(newHeading).text());
		}

	});
	
});
