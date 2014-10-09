// JavaScript Document

$( document ).ready(function() {
	
// menu script
	$( '.menuopt' ).click(function() {
		$( '.menuopt ul' ).slideToggle(500);
		$( '.menuopt' ).toggleClass( 'menuoptActive' );
	});
	


// below, port menu and ajax calls commented out, moved to jjBoot.js inside a directive to work with angularJS
// saved here as a reference file	
// portMenu	
// 	$( '.portMenu' ).click(function() {
//         $( '.portMenu p' ).slideToggle(500);
//     });


// // ajax load call for portfolio work	
// 	$( '#amwBOF' ).click(function() {
//         $( '#workImg' ).load( 'ajaxWork.html #amwBOFImg' );
//         $( '#workDesc' ).load( 'ajaxWork.html #amwBOFDesc' );
//         $( '.header' ).load( 'ajaxWork.html #amwHead' );
//     });
	
// 	$( '#amwPTCH' ).click(function() {
//         $( '#workImg' ).load( 'ajaxWork.html #amwPTCHImg' );
//         $( '#workDesc' ).load( 'ajaxWork.html #amwPTCHDesc' );
//         $( '.header' ).load( 'ajaxWork.html #amwHeadPTCH' );
//     });
	
// 	$( '#kaoCA' ).click(function() {
//         $( '#workImg' ).load( 'ajaxWork.html #kaoCAImg' );
//         $( '#workDesc' ).load( 'ajaxWork.html #kaoCADesc' );
//         $( '.header' ).load( 'ajaxWork.html #kaoHeadCA' );
//     });
	
// 	$( '#gannett' ).click(function() {
//         $( '#workImg' ).load( 'ajaxWork.html #gannettImg' );
//         $( '#workDesc' ).load( 'ajaxWork.html #gannettDesc' );
//         $( '.header' ).load( 'ajaxWork.html #gannettHead' );
//     });
	
// 	$( '#mVideo' ).click(function() {
//         $( '#workImg' ).load( 'ajaxWork.html #mVideoVid' );
//         $( '#workDesc' ).load( 'ajaxWork.html #mVideoDesc' );
//         $( '.header' ).load( 'ajaxWork.html #mVideoHead' );
//     });
    
	
	
// 	var headimg = ['cod.jpg' , 'amw_bf.jpg' , 'main01.jpg' , 'amw_pc.jpg' , 'amw_vid.jpg' , 'photomain.jpg'];
// 	var indexnum = 0;
// 	var headPath = 'images/bg/';
// // function for slider buttons	
// 	$( '.headbtnright' ).click(function() {
		
// 		$( '#headImg' ).fadeOut(500, function() {
			
// 			$( '#headImg' ).attr( 'src', headPath + headimg[indexnum]); // indexnum is array, for headimg variable array passing
				
// 			indexnum++; // increase by 1
// 			if(indexnum > 5) {indexnum = 0} // if indexnum is greater than 3, next number is 0
// 			$( '#headImg' ).fadeIn(500);
// 		});
// 	});
	
// 	$( '.headbtnleft' ).click(function() {
		
// 		$( '#headImg' ).fadeOut(500, function() {
			
// 			$( '#headImg' ).attr( 'src', headPath + headimg[indexnum]); // indexnum is array, for headimg variable array passing
					
// 			indexnum--; // decrease by 1
// 			if(indexnum < 0) {indexnum = 5} // if indexnum is less than 3, next number is 0
// 			$( '#headImg' ).fadeIn(500);
// 		});
// 	});
// end button functions




	


}); //doc ready