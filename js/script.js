// JavaScript Document

$( document ).ready(function() {
	
// menu script
	$( '.menuopt' ).click(function() {
		$( '.menuopt ul' ).slideToggle(500);
		$( '.menuopt' ).toggleClass( 'menuoptActive' );
	});
	
	
// portMenu	
	$( '.portMenu' ).click(function() {
        $( '.portMenu p' ).slideToggle(500);
    });


// ajax load call for portfolio work	
	$( '#amwBOF' ).click(function() {
        $( '#workImg' ).load( 'ajaxWork.html #amwBOFImg' );
        $( '#workDesc' ).load( 'ajaxWork.html #amwBOFDesc' );
        $( '.header' ).load( 'ajaxWork.html #amwHead' );
    });
	
	$( '#amwPTCH' ).click(function() {
        $( '#workImg' ).load( 'ajaxWork.html #amwPTCHImg' );
        $( '#workDesc' ).load( 'ajaxWork.html #amwPTCHDesc' );
        $( '.header' ).load( 'ajaxWork.html #amwHeadPTCH' );
    });
	
	$( '#kaoCA' ).click(function() {
        $( '#workImg' ).load( 'ajaxWork.html #kaoCAImg' );
        $( '#workDesc' ).load( 'ajaxWork.html #kaoCADesc' );
        $( '.header' ).load( 'ajaxWork.html #kaoHeadCA' );
    });
	
	$( '#gannett' ).click(function() {
        $( '#workImg' ).load( 'ajaxWork.html #gannettImg' );
        $( '#workDesc' ).load( 'ajaxWork.html #gannettDesc' );
        $( '.header' ).load( 'ajaxWork.html #gannettHead' );
    });
	
	$( '#mVideo' ).click(function() {
        $( '#workImg' ).load( 'ajaxWork.html #mVideoVid' );
        $( '#workDesc' ).load( 'ajaxWork.html #mVideoDesc' );
        $( '.header' ).load( 'ajaxWork.html #mVideoHead' );
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

 
    

	
	
	
	
	var headimg = ['cod.jpg' , 'amw_bf.jpg' , 'main01.jpg' , 'amw_pc.jpg' , 'amw_vid.jpg' , 'photomain.jpg'];
	var indexnum = 0;
	var headPath = 'images/bg/';
// function for slider buttons	
	$( '.headbtnright' ).click(function() {
		
		$( '#headImg' ).fadeOut(500, function() {
			
			$( '#headImg' ).attr( 'src', headPath + headimg[indexnum]); // indexnum is array, for headimg variable array passing
				
			indexnum++; // increase by 1
			if(indexnum > 5) {indexnum = 0} // if indexnum is greater than 3, next number is 0
			$( '#headImg' ).fadeIn(500);
		});
	});
	
	$( '.headbtnleft' ).click(function() {
		
		$( '#headImg' ).fadeOut(500, function() {
			
			$( '#headImg' ).attr( 'src', headPath + headimg[indexnum]); // indexnum is array, for headimg variable array passing
					
			indexnum--; // decrease by 1
			if(indexnum < 0) {indexnum = 5} // if indexnum is less than 3, next number is 0
			$( '#headImg' ).fadeIn(500);
		});
	});
// end button functions


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

	


}); //doc ready