$(function() {
	
	var headings = $("h2.title").toArray().reverse();
	var currentHeading = null;
	
	$(document).scroll(function() {
		
		var window_top = $(document).scrollTop();

		var newHeading = _.find(headings, function(header) {
				return window_top >= $(header).position().top;
		});
		
		if(newHeading !== currentHeading)
		{
			$("div.navheader table tr:first td").html($(newHeading).text());
		}

	});
	
});
