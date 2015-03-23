// Preloader
$(window).load(function() {
    $('#status').delay(2800).fadeOut('slow');
	$('#preloader').fadeIn("slow").delay(3150).fadeOut('slow');
	$('body').delay(350).css({'overflow-y':'visible'});
});

// Site Blur On Social Button Hover
$(document).ready(function () {
	var timer = 0;
	$(".blurMe .github a").hover(
		function () {
			clearTimeout(timer);
			$("#mainScene").toggleClass("blur1");
		},
		function () {
				$("#mainScene").toggleClass("blur1");

	});
});

$(document).ready(function () {
	var timer = 0;
	$(".blurMe .linkedin a").hover(
		function () {
			clearTimeout(timer);
			$("#mainScene").toggleClass("blur2");
		},
		function () {
				$("#mainScene").toggleClass("blur2");

	});
});

$(document).ready(function () {
	var timer = 0;
	$(".blurMe .behance a").hover(
		function () {
			clearTimeout(timer);
			$("#mainScene").toggleClass("blur3");
		},
		function () {
				$("#mainScene").toggleClass("blur3");

	});
});

$(document).ready(function () {
	var timer = 0;
	$("nav#menu-12 .icon-about").hover(
		function () {
			clearTimeout(timer);
			$("#mainScene").toggleClass("realBlur1");
		},
		function () {
				$("#mainScene").toggleClass("realBlur1");

	});
});

$(document).ready(function () {
	var timer = 0;
	$("nav#menu-12 .icon-work").hover(
		function () {
			clearTimeout(timer);
			$("#mainScene").toggleClass("realBlur2");
		},
		function () {
				$("#mainScene").toggleClass("realBlur2");

	});
});

$(document).ready(function () {
	var timer = 0;
	$("nav#menu-12 .icon-journal").hover(
		function () {
			clearTimeout(timer);
			$("#mainScene").toggleClass("realBlur3");
		},
		function () {
				$("#mainScene").toggleClass("realBlur3");

	});
});

$(document).ready(function () {
	var timer = 0;
	$("nav#menu-12 .icon-nuketown").hover(
		function () {
			clearTimeout(timer);
			$("#mainScene").toggleClass("realBlur4");
		},
		function () {
				$("#mainScene").toggleClass("realBlur4");

	});
});

$(document).ready(function () {
	var timer = 0;
	$("nav#menu-12 .icon-contact").hover(
		function () {
			clearTimeout(timer);
			$("#mainScene").toggleClass("realBlur5");
		},
		function () {
				$("#mainScene").toggleClass("realBlur5");

	});
});

$(document).ready(function () {
	var timer = 0;
	$("button").hover(
		function () {
			clearTimeout(timer);
			$("#mainScene").toggleClass("realBlur6");
		},
		function () {
				$("#mainScene").toggleClass("realBlur6")

	});
});


$(document).ready(function (){
			var BV,
		    isTouch = Modernizr.touch;
			var BV = new $.BigVideo({useFlashForFirefox:false, forceAutoplay:isTouch, container: $('#mainScene')});
			var $bigImage = $("#mainScene");
			BV.init();
				
				if (Modernizr.touch) {
				
					BV.show('video/bgFallback.gif');
				} else {
					
						BV.show(
	        				{type: "video/mp4",  src: "video/bgMP4.mp4", type: "video/webm", src: "video/bgWEBM.webm" }, {ambient:true, doLoop:true}
						);
						
					$bigImage
					.css('position','relative')
					$(window).on('resize', adjustImagePositioning);
		    	}
		    
			    function adjustImagePositioning() {
				    
				    $bigImage.each(function(){
				        var $img = $(this),
				            img = new Image();
				
				        img.src = $img.attr('src');
				
				        var windowWidth = $window.width(),
				            windowHeight = $window.height(),
				            r_w = windowHeight / windowWidth,
				            i_w = img.width,
				            i_h = img.height,
				            r_i = i_h / i_w,
				            new_w, new_h, new_left, new_top;
				
				        if( r_w > r_i ) {
				            new_h   = windowHeight;
				            new_w   = windowHeight / r_i;
				        }
				        else {
				            new_h   = windowWidth * r_i;
				            new_w   = windowWidth;
				        }
				
				        $img.css({
				            width   : new_w,
				            height  : new_h,
				            left    : ( windowWidth - new_w ) / 2,
				            top     : ( windowHeight - new_h ) / 2
				        })
				
				    });
			
			}

});


$(document).ready(function (){
	
	var SidebarMenuEffects = (function() {
	 	function hasParentClass( e, classname ) {
			if(e === document) return false;
			if( classie.has( e, classname ) ) {
				return true;
			}
			return e.parentNode && hasParentClass( e.parentNode, classname );
		}
		
		function mobilecheck() {
			var check = false;
			(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
			return check;
		}
	
		function init() {
	
			var container = document.getElementById( 'st-container' ),
				menuButton = document.querySelector('button[data-effect="st-effect-12"]'),
				foxyBox = document.querySelector('nav#menu-12'),
				buttons = Array.prototype.slice.call( document.querySelectorAll( '#st-trigger-effects > button' ) ),
				eventtype = mobilecheck() ? 'touchstart' : 'click',
				resetMenu = function() {

					setTimeout( function() {
					classie.remove( menuButton, 'menuButtonShrink' );
					classie.remove( foxyBox, 'shadowBox' );
					classie.remove( container, 'st-menu-open' );
				$("nav.cl-effect-6").stop(true,true).css('opacity', '1').animate({marginTop: '4em',
																				 opacity: 0 }, 85);	
					}, 15 );
				},
				bodyClickFn = function(evt) {
					if( !hasParentClass( evt.target, 'st-menu' ) ) {
						resetMenu();
						document.removeEventListener( eventtype, bodyClickFn );
					}
				};
	
			buttons.forEach( function( el, i ) {
				var effect = el.getAttribute( 'data-effect' );
	
				el.addEventListener( eventtype, function( ev ) {
					ev.stopPropagation();
					ev.preventDefault();
					container.className = 'st-container';
					classie.add( container, effect );
					setTimeout( function() {
						classie.add( menuButton, 'menuButtonShrink' );
						classie.add( container, 'st-menu-open' );
						classie.add( foxyBox, 'shadowBox' );
						
						$("nav.cl-effect-6").stop(true,true).css('opacity', '0').animate({marginTop: '0em',
														     						opacity: 1 }, 400);
						
					}, 25 );
					document.addEventListener( eventtype, bodyClickFn );
				});
			} );
	
		}
	
		init();
	
	})();
});
