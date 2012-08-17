// first of all you were including JQuery in a couple lines of code here. That's not needed, as it's 
// already included by the Rails app on the page. I'm including a bunch of libraries: JQuery, underscore and backbone

// This anonymous function will get called by JQuery when the document loads. It's a faster
// and better way than using window.onload
$(function() {
	
	// first grab the default text from the table title.
	var defaultText = $("div.navheader table tr:first td").first().text();
	
	// now find all the headings in the document. We do this now, and not inside of the scroll function, as
	// that would be really slow. The headings won't move in position, so we just find all of them in the beginning.
	var headings = $("h2.title").toArray().reverse();
	
	// don't worry too much about this, as it's just for speed. Run through all elements and save their position
	// in a variable in themselves. If we did this, jquery would have to calculate their position 100 times a second
	/// in the scroll function, and its not needed, as the heading positions won't change. _.each is a function from 
	// the underscore library
	_.each(headings, function(header) {
		header.top = $(header).position().top;
	});
	
	// we use this variable to save the current closest heading to the document top. Only if the heading changes, 
	// we will update the text. Otherwise we would be updating the table text on every scroll
	var currentHeading = null;
	
	// whenever the document scrolls, call this function
	$(document).scroll(function() {
		
		// get the number of pixels above the screen
		var window_top = $(document).scrollTop();

		// find the first heading in the array where the header top is less than the window_top. _.find is a function from the
		// underscore library that will find the first item where the iterator function returns true
		var newHeading = _.find(headings, function(header) {
				return header.top <= window_top;
		});
		
		// if there is not any heading with a top less than the window_top, just show the default text
		if(!newHeading)
		{
			$("div.navheader table tr:first td").html(defaultText);
		}
		// otherwise if it's not the same heading as last scroll, update with heading title
		else if(newHeading !== currentHeading)
		{
			$("div.navheader table tr:first td").html(defaultText + ": " + $(newHeading).text());
			currentHeading = newHeading;
		}

	});
	
});
