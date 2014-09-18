
$( document ).ready(function() {
	
	var headimg = ['cod.jpg' , 'amw_bf.jpg' , 'main01.jpg' , 'amw_pc.jpg'];
	var indexnum = 0;
	var headPath = 'images/bg/';
// function for slider buttons	
	$( '.headbtnright' ).click(function() {
		
		$( '#headImg' ).fadeOut(500, function() {
			
			$( '#headImg' ).attr( 'src', headPath + headimg[indexnum]); // indexnum is array, for headimg variable array passing
				
			indexnum++; // increase by 1
			if(indexnum > 3) {indexnum = 0} // if indexnum is greater than 3, next number is 0
			$( '#headImg' ).fadeIn(500);
		});
	});
	
	$( '.headbtnleft' ).click(function() {
		
		$( '#headImg' ).fadeOut(500, function() {
			
			$( '#headImg' ).attr( 'src', headPath + headimg[indexnum]); // indexnum is array, for headimg variable array passing
					
			indexnum--; // decrease by 1
			if(indexnum < 0) {indexnum = 3} // if indexnum is less than 3, next number is 0
			$( '#headImg' ).fadeIn(500);
		});
	});
// end button functions


	var $window = $(window); //You forgot this line in the above example

	$('section[data-type="background"]').each(function(){
	var $bgobj = $(this); // assigning the object
		$(window).scroll(function() {
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!
		var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';
		// Move the background
		$bgobj.css({ backgroundPosition: coords });
		});
	});
	
	


// end of plug in code	


}); //doc ready