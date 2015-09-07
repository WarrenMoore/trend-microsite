// jQuery(document).ready(function($){

//   // Touch friendly expanded nav
//   $('ul.navmenu li span').click(function(event){

//     event.preventDefault();

//     // get the child of the clicked menu switch
//     var child_menu = $(this).parent().parent().children('ul');

//     // get the parent link of the clicked menu switch
//     var parent_link = $(this).parent();

//     // check if it's currently open or closed
//     if ( child_menu.hasClass('childopen') ) {
//       // if it's open, close it

//       // remove any "active" class from parent item
//       $(parent_link).removeClass('active');
//       // hide child menu
//       $(child_menu).removeClass('childopen');
//       // set this open menu switch to +
//       $(this).html('+');

//     } else {
//       // if it's closed, open it

//       // hide any open child menus
//       $('ul.navmenu ul').removeClass('childopen');
//       // set any open menu switch symbols back to +
//       $('ul.navmenu li span').html('+');
//       // remove any existing "active" class from menus
//       $('.active').removeClass('active');

//       // add "active" class to this parent item
//       $(parent_link).addClass('active');
//       // show correct child menu
//       $(child_menu).addClass('childopen');
//       // set this open menu switch to -
//       $(this).html('-');

//       return false;

//     }

//   });

//   $('.navicon').click(function(){
    
//     if ( $('.navmenu').css('display') == 'none' ) {

//       $('.navmenu').addClass('show');
//       $('.navicon').removeClass('closed').addClass('open');
//       $('.navicon').children('.fa').removeClass('fa-navicon').addClass('fa-close');

//     } else {

//       $('.navmenu').removeClass('show');
//       $('.navicon').removeClass('open').addClass('closed');
//       $('.navicon').children('.fa').removeClass('fa-close').addClass('fa-navicon');

//     }

//   });

//();

  //Stripes jQuery
(function($) { 
  $(document).ready(function(){

    var $trigger = $('#main'),
        $menu = $('#menu');
    
    $(window).scroll(function(){   
        // console.log($(this).scrollTop(), $main.offset().top);

       if ($(this).scrollTop() > $trigger.offset().top) {
          $menu.addClass('sticky');
          // $menu.fadeIn(500);
       } else {
          $menu.removeClass('sticky');
          // $menu.fadeOut(500);
      }
    });


// Accordion

// $(document).ready(function() {
//       $('.nav-toggle').click(function(){
//       //get collapse content selector
//       var collapse_content_selector = $(this).attr('href');         
          
//       //make the collapse content to be shown or hide
//       var toggle_switch = $(this);
//       $(collapse_content_selector).toggle(function(){
//         if($(this).css('display')=='none'){
//                                 //change the button label to be 'Show'
//         toggle_switch.html('Show the Agenda');
//         }else{
//                                 //change the button label to be 'Hide'
//         toggle_switch.html('Hide the Agenda');
//         }
//       });
//       });
        
//     }); 

          $(window).resize(function() {
    var extra = $('.strip-parent').height() * Math.tan(20);
    // $('.strip-parent > .strip').css('left', extra / 2);
    $('.strip-parent > .strip > .bg-img').css('left', -(extra / 2)).width('calc(100% + ' + extra + 'px');
      }).resize();
  

  });

  /*
   * Venue Map
   */ 

   var venueMap = $('.venue .map'),
       venueMapButton = $('.venue-subinfo .button');

   venueMapButton.on('click', function(e) {
      e.preventDefault();

      venueMap.toggleClass('open');

      if (venueMap.hasClass('open')) {
        venueMapButton.text('Close map');
      } else {
        venueMapButton.text('Open map');
      }
   }); 

/*
 * Morph button code
 */

   /* Invite button */
  var docElem = window.document.documentElement, didScroll, scrollPosition;

  // trick to prevent scrolling when opening/closing button
  function noScrollFn() {
    window.scrollTo( scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0 );
  }

  function noScroll() {
    window.removeEventListener( 'scroll', scrollHandler );
    window.addEventListener( 'scroll', noScrollFn );
  }

  function scrollFn() {
    window.addEventListener( 'scroll', scrollHandler );
  }

  function canScroll() {
    window.removeEventListener( 'scroll', noScrollFn );
    scrollFn();
  }

  function scrollHandler() {
    if( !didScroll ) {
      didScroll = true;
      setTimeout( function() { scrollPage(); }, 60 );
    }
  };

  function scrollPage() {
    scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
    didScroll = false;
  };

  scrollFn();

  [].slice.call( document.querySelectorAll( '.morph-button, .nate' )).forEach( function( bttn ) {
    morphingButton = new UIMorphingButton( bttn, {
      closeEl : '.icon-close',
      onBeforeOpen : function() {
        // don't allow to scroll
        noScroll();
      },
      onAfterOpen : function() {
        // can scroll again
        canScroll();
      },
      onBeforeClose : function() {
        // don't allow to scroll
        noScroll();
      },
      onAfterClose : function() {
        // can scroll again
        canScroll();
      }
    } );
  } );

  morphButton = $('.morph-button');

  $('.open-login-morph').on('click', function(e) {
      morphingButton.toggle();
      e.preventDefault();
  });



  var jumpTo = $('.jump-to'),
      jumpToButton = $('.jump-to-button'),
      jumpToClose= $('.jump-to-close');

  jumpToButton.on('click', function(e) {
    jumpTo.toggleClass('open');

    e.preventDefault();
  });

  jumpToClose.on('click', function(e) {
    jumpTo.toggleClass('open');

    e.preventDefault();
  });

  /*
   * Scroll to
   */

   $(".scroll-to-next-event").click(function (e){
        $('html, body').animate({
            scrollTop: $(".next-event").offset().top
        }, 2000);

        e.preventDefault();
    });


   /*
    * Agenda
    */

    var accordion = $('.showing');
    var list = $('.list');

    accordion.click(function(e){
      console.log('working');
          list.stop(false, true).slideToggle(function(){
          console.log('animation complete!');

          });
        e.preventDefault();

    });

})(jQuery);


//   // Responsive iframes
//   function responsiveIframe() {
//     $('iframe').each(function(){
//       var iw = $(this).width();
//       var ih = $(this).height();
//       var ip = $(this).parent().width();
//       var ipw = ip/iw;
//       var ipwh = Math.round(ih*ipw);
//       $(this).css({
//         'width': ip,
//         'height' : ipwh,
//       });
//     });
//   }

//   responsiveIframe();

//   // Trigger video resize if browser is resized
//   $(window).resize(function(){
//     responsiveIframe();
//   });

//   // Watch body height to see if font size settings are changed
//   var watch_el = $('body');
//   var el_height = watch_el.innerHeight();

//   window.setInterval(function(){
//     var new_height = watch_el.innerHeight();
//     if ( new_height != el_height ) {
//       el_height = new_height;
//       responsiveIframe();
//     }
//   }, 200);

// });