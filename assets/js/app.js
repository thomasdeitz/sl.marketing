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
	
	function isScrolledPastInitialView(id) {
	  var elemBottom = document.getElementById(id).getBoundingClientRect().bottom;
	  var isNotVisible = elemBottom < 0; 
	  if (isNotVisible) {
	      document.getElementsByTagName('body')[0].classList.add("past-initial");
	  } else {
		  document.getElementsByTagName('body')[0].classList.remove("past-initial");
	  }
	}
	
	function isScrolledPastHeader(id) {
	  var elemTop = document.getElementById(id).getBoundingClientRect().top;
	  var isNotVisible = elemTop < -50; 
	  if (isNotVisible) {
	      document.getElementsByTagName('body')[0].classList.add("past-header");
	  } else {
		  document.getElementsByTagName('body')[0].classList.remove("past-header");
	  }
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
	window.onscroll = function() {onScroll("p");onScroll("li"); isScrolledPastInitialView('hero'); isScrolledPastHeader('hero');};
	
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