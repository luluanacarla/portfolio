$(document).ready(function(){
	console.log("teste")
    var scrolltimer2;

    window.addEventListener('scroll', function(){
	    clearTimeout(scrolltimer2);

	    scrolltimer2 = setTimeout(function(){
	        if ($(window).scrollTop() > 0) {
	            $('#header').addClass('sticky');
	        } else {
	            $('#header').removeClass('sticky');
	        }
	    },200);
	}, false);

	runTyping();

	function runTyping() {
		var element = document.querySelector('#output');
		var typeSpeed = 100; // 80 ms
		var deleteSpeed = 30; // 30 ms
		var deleteAfter = 1000; // 1 second
		var items = [
		  "I code cool websites, SPAs and PWAs",
		  "I build trendy mobile apps",
		  "I enjoy learning",
		  "I read a lot in my spare time",
		  "I like everything food related"
		];
		/* END SETTINGS */

		var sentence = 0;
		var currentChar = 0;
		var direction = 1;
		var deleteInterval = null;

		function type() {
		  if (sentence >= items.length) {
		    sentence = 0;
		  }

		  var chars = items[sentence].split("");

		  setTimeout(function() {
		    if (currentChar >= chars.length) {
		      setTimeout(function() {
		        sentence++;

		        deleteInterval = setInterval(function() {
		        	element.innerHTML = element.innerHTML.substr(0, currentChar - 1);
		          	
		          currentChar--;

		          if (currentChar == 1) {
		            clearInterval(deleteInterval);
		            type();
		          }
		        }, deleteSpeed);
		      }, deleteAfter);

		      return;
		    }

		    element.innerHTML += chars[currentChar];
		    currentChar++;

		    type();
		  }, typeSpeed);
		}

		type();
	}

	// header scroll to section
	$('#header').find('a').click(function(e){     
	    e.preventDefault();
	    var target = $(this).attr('href');
        $(target).goTo();
	});

	(function($) {
	    $.fn.goTo = function() {
	        $('html, body').animate({
	            scrollTop: ( $(this).offset().top - 65) + 'px'
	        }, 'slow');
	        return this;
	    }
	})(jQuery);
});