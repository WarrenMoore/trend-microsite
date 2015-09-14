  //Stripes jQuery
(function($) { 
  $(document).ready(function(){

    var $trigger = $('#main'),
        $menu = $('#menu');
        $window = $(window),
        stickyactive = false, 
        triggeroffset = $trigger.offset().top;
    
    $window.scroll(function(){   
        // console.log($(this).scrollTop(), $main.offset().top);

       if ($window.scrollTop() > triggeroffset && !stickyactive) {
          $menu.addClass('sticky');
          stickyactive = true;
          return;
       }
       if($window.scrollTop() < triggeroffset && stickyactive){
                  $menu.removeClass('sticky');
                  stickyactive = false;
                  return;
       }
    });

          $window.resize(function() {
    var extra = $('.strip-parent').height() * Math.tan(20);
    // $('.strip-parent > .strip').css('left', extra / 2);
    $('.strip-parent > .strip > .bg-img').css('left', -(extra / 2)).width('calc(100% + ' + extra + 'px');
      triggeroffset = $trigger.offset().top;
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
 * Register popup
 */

var inviteButton = $('.invite-popup .button');

inviteButton.magnificPopup({
  type: 'inline',
  mainClass: 'mfp-fade'
});

  

  /*
   * Jump to
   */

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
        }, 1300);

        e.preventDefault();
    });


   /*
    * Agenda
    */

    var accordion = $('.accordion'),
        accordionTitle = accordion.find('.title p');
        accordionList = accordion.find('.list');

    accordion.click(function(e){
        accordionList.stop(false, true).slideToggle(function(){
            if (accordion.hasClass('open')) {
                accordionTitle.text('Show the Agenda');
            } else {
                accordionTitle.text('Hide the Agenda');
            }

            accordion.toggleClass('open');
        });

        e.preventDefault();
    });
    
//   /*
//    * Accordion
//    */
   
   
  //     var venueMap = $('.list'),
  //     venueMapButton = $('.showing');

  // venueMapButton.on('click', function(e) {
  //    e.preventDefault();

  //    venueMap.toggleClass('.list');

  //    if (venueMap.hasClass('.showing')) {
  //      venueMapButton.text('Show the Agenda');
  //    } else {
  //      venueMapButton.text('Hide the Agenda');
  //    }
  // }); 

})(jQuery);