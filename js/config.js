//=====================================================
// browser
//=====================================================
var ua = navigator.userAgent.toLowerCase();
var ver = navigator.appVersion.toLowerCase();

var isMSIE = (ua.indexOf('msie') > -1) && (ua.indexOf('opera') == -1); // IE(11以外)
var isIE6 = isMSIE && (ver.indexOf('msie 6.') > -1); // IE6
var isIE7 = isMSIE && (ver.indexOf('msie 7.') > -1); // IE7
var isIE8 = isMSIE && (ver.indexOf('msie 8.') > -1); // IE8
var isIE9 = isMSIE && (ver.indexOf('msie 9.') > -1); // IE9
var isIE10 = isMSIE && (ver.indexOf('msie 10.') > -1); // IE10
var isIE11 = (ua.indexOf('trident/7') > -1); // IE11
var isIE = isMSIE || isIE11;　// IE
var isEdge = (ua.indexOf('edge') > -1); // Edge
 
// Google Chrome
var isChrome = (ua.indexOf('chrome') > -1) && (ua.indexOf('edge') == -1);
// Firefox
var isFirefox = (ua.indexOf('firefox') > -1);
// Safari
var isSafari = (ua.indexOf('safari') > -1) && (ua.indexOf('chrome') == -1);
// Opera
var isOpera = (ua.indexOf('opera') > -1);
 
$(function() {
  if (isOpera) {
    $("body").addClass("opera");
  } else if (isIE) {
    $("body").addClass("ie");
  } else if (isChrome) {
    $("body").addClass("chrome");
  } else if (isSafari) {
    $("body").addClass("safari");
  } else if (isEdge) {
    $("body").addClass("edge");
  } else if (isFirefox) {
    $("body").addClass("firefox");
  } else {
    return false;
  }
});
//=====================================================
// mobile
//=====================================================
var _ua = (function(u){
  return {
    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) 
	|| u.indexOf("ipad") != -1
	|| (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
	|| (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
	|| u.indexOf("kindle") != -1
	|| u.indexOf("silk") != -1
	|| u.indexOf("playbook") != -1,
	Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
	|| u.indexOf("iphone") != -1
	|| u.indexOf("ipod") != -1
	|| (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
	|| (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
	|| u.indexOf("blackberry") != -1
  }
})(window.navigator.userAgent.toLowerCase());
$(function(){
if( _ua.Mobile ){
	$('body').addClass('mobile');
} else if ( _ua.Tablet ){
	$('body').addClass('tablet');
} else {
	$('body').addClass('pc');
}
});
//=====================================================
// nav
//=====================================================
$(function(){
  var movefun = function( event ){
    event.preventDefault();
  };
  var btn = '.hamburger';
  var nav = '.main_nav_container';
  $(btn).on('click',function(){
    $('html, body').toggleClass('nav-open');
    $(this).toggleClass('is-active');
    if( $('body').hasClass('nav-open') ) {
      $(nav).fadeIn();
      if( $('body').hasClass('mobile') ) {
        window.addEventListener( 'touchmove' , movefun , { passive: false } );
      }
    } else {
      $(nav).fadeOut();
      if( $('body').hasClass('mobile') ) {
        window.removeEventListener( 'touchmove' , movefun, { passive: false } );
      }
    }
  });
  $(window).on('resize',function(){
    if(window.matchMedia('(min-width:768px)').matches){
      $('html, body').removeClass('nav-open');
      $(btn).removeClass('is-active');
      $(nav).show();
    } else {
      if( !$('body').hasClass('nav-open') ) {
        $(nav).hide();
      }
    }
  });
  if( $('body').hasClass('renovation') ) {
    $('.in_link').on('click',function(){
      if( $('body').hasClass('nav-open') ) {
        $('html, body').removeClass('nav-open');
        $(btn).removeClass('is-active');
        $(nav).fadeOut();
        if( $('body').hasClass('mobile') ) {
          window.removeEventListener( 'touchmove' , movefun, { passive: false } );
        }
      }
      var speed = 400;
      var target = $(this).data('target');
      var position = $(target).offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  }
  if( $('body').hasClass('safari') ) {
    history.replaceState(null, document.getElementsByTagName('title')[0].innerHTML, null);
    window.addEventListener('popstate', function() {
      $('html, body').removeClass('nav-open');
      $(btn).removeClass('is-active');
      $(nav).hide();
      if( $('body').hasClass('mobile') ) {
        window.removeEventListener( 'touchmove' , movefun, { passive: false } );
      }
    }, false);
  }
});
//=====================================================
// nav for tablet
//=====================================================
$(function(){
  if( $('body').hasClass('tablet') ) {
    $('.sub_nav').attr('href', 'javascript:void(0)')
    $('.sub_nav').on('click',function(){
      $(this).parent('li').toggleClass('on');
    });
  }
});
//=====================================================
// vegas
//=====================================================
$(function(){
  if( $('body').hasClass('home') ) {
    $('#top_scroll').vegas({
      slides: [
        { src: 'images/main01.jpg' },
        { src: 'images/main02b.jpg' },
        { src: 'images/main03.jpg' },
        { src: 'images/main04.jpg' }
      ],
      timer: false,
      firstTransition: 'fade',
      delay: 5200,
      transition: 'fade',
      transitionDuration: 4000
    });
  }
});
//=====================================================
// tel ctl
//=====================================================
$(function(){
  if( $('body').hasClass('mobile') ) {
    $('#footer .tel a:first-of-type').addClass('btn')
  }
});
//=====================================================
// page top
//=====================================================
$(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$('.back-top').fadeIn();
		} else {
			$('.back-top').fadeOut();
		}
	});
	$('.back-top').click(function () {
		$('html,body').animate({ scrollTop: 0 });
		return false;
	});
});
//=====================================================
// usemap
//=====================================================
$(function(){
  $('img[usemap]').rwdImageMaps();
});