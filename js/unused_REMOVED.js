// JavaScript Document

// this is added for locking an element after it scrolls beyong the offset and locks with fixed    
    var title  = $( "#title-anchor" ).offset().top;
    var titleS = { 'position' : 'fixed', 'top' : '90px', 'width' : '60%'};
	var titleT = { 'position' : '', 'top' : '', 'width' : ''};

    $(document).scroll(function(){
        if($(this).scrollTop() > title)
        {   
            $( '.portMenu' ).css( titleS );
        } else {
            $( '.portMenu' ).css( titleT );
        }
    });
	
	// commented out due to conflicts with apple iOS safari
//	var $window = $(window); //You forgot this line in the above example

//	$('section[data-type="background"]').each(function(){
//	var $bgobj = $(this); // assigning the object
//		$(window).scroll(function() {
//		// Scroll the background at var speed
//		// the yPos is a negative value because we're scrolling it UP!
//		var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));
//		// Put together our final background position
//		var coords = '50% '+ yPos + 'px';
//		// Move the background
//		$bgobj.css({ backgroundPosition: coords });
//		});
//	}); 	