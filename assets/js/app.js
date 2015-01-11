$(document).ready(function(){
  
  // will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.

});


$( window ).load(function() { 

	// will run once the entire page (images or iframes), not just the DOM, is ready.
	$("#photos img").css("opacity" , "1"); // was obsolete: instead I used css animations fadeIn, now in combination with opacity to make up for the glich.

})