(function(){
	// Checks if element are in view
	function isScrolledIntoView(el) {
	  var elemTop = el.getBoundingClientRect().top;
	  var elemBottom = el.getBoundingClientRect().bottom;
	
	  // Only completely visible elements return true:
	  //var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
	  //var isVisible = (elemTop >= window.innerHeight+50);
	  // Partially visible elements return true:
	  var isVisible = elemTop < window.innerHeight-100 && elemBottom >= 0; 
	  return isVisible; 
	}
	
	// Displays elements that are in view 
	function onScroll(cl) {
	  var elem = document.getElementsByTagName(cl);
	
	  for (i = 0; i < elem.length; i++) {
	    if (isScrolledIntoView(elem[i])) {
	      elem[i].classList.add("visible");
	    }
	  }
	}
	
	// Fires display elements in view on scroll
	window.onscroll = function() {onScroll("p");onScroll("li");};
	
	// Removes loading state class once all assets are loaded into the dom
	document.onreadystatechange = function () {
		if(document.readyState === 'complete') {
			document.getElementsByTagName('body')[0].classList.remove('loading');
		}	
		console.log(document.readyState);
	}
	
	// Collects all links on the page
	var allLinks = document.querySelectorAll('a[href]');
})();