
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

	
	
// code from http://www.franckmaurin.com/the-parallax-effects-with-jquery/
// The plugin code
(function($){
    $.fn.parallax = function(options){
        var $$ = $(this);
        offset = $$.offset();
        var defaults = {
            "start": 0,
            "stop": offset.top + $$.height(),
            "coeff": 0.95
        };
        var opts = $.extend(defaults, options);
        return this.each(function(){
            $(window).bind('scroll', function() {
                windowTop = $(window).scrollTop();
                if((windowTop >= opts.start) && (windowTop <= opts.stop)) {
                    newCoord = windowTop * opts.coeff;
                    $$.css({
                        "background-position": "0 "+ newCoord + "px"
                    });
                }
            });
        });
    };
})(jQuery);

// call the plugin
$('.section').parallax({ "coeff":-0.65 });
$('.section .inner').parallax({ "coeff":1.15 });

// end of plug in code	


}); //doc ready