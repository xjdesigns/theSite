// angular add for routing to theSite 10/06

var jjBoot = angular.module('jjBoot', ['ngRoute']);


jjBoot.config(function ($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'home.html',
		// controller: 'indexCtrl'
	});
	// $routeProvider.when('/about', {
	// 	templateUrl: 'about.html',
	// 	// controller: 'aboutCtrl'
	// });
	$routeProvider.when('/work', {
		templateUrl: 'work.html',
		// controller: 'workCtrl'
	});
	$routeProvider.when('/skills', {
		templateUrl: 'skills.html',
		// controller: 'skillsCtrl'
	});

	$routeProvider.otherwise({ redirectTo: '/home' });
});

// jjBoot.controller('indexCtrl', function(){

// });
// jjBoot.controller('aboutCtrl', function(){

// });
// jjBoot.controller('workCtrl', function(){

// });
// jjBoot.controller('skillsCtrl', function(){

// });

jjBoot.directive('jHeader', function() {
	return {
		link: function(scope, element, attr) {

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
		} //end link
	} //end return
});

// fix found from https://github.com/amowu/angular-skrollr-directive.git
jjBoot.directive('skrollr', function() {
	return {
		link: function(scope, element, attr) {
			skrollr.init();
			// uncomment below to grab values of scroll from top
			// $(document).scroll(function() {
			//     console.log($(document).scrollTop());
			// 	})
		}
	}
});

jjBoot.directive('pMenu', function() {
	return {
		link: function(scope, element, attr) {
			// portMenu	
			$( '.portMenu' ).click(function() {
		        $( '.portMenu p' ).slideToggle(500);
		    });
		}
	}
});

jjBoot.directive('jAjax', function() {
	return {
		link: function(scope, element, attr) {
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
		}
	}
});



