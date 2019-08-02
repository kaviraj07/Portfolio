//--- DEFINE a reusable animation function: ---//
function scrollThere(targetElement, speed) {
    // initiate an animation to a certain page element:
    $('html, body').stop().animate(
      { scrollTop: targetElement.offset().top }, // move window so target element is at top of window
      speed, // speed in milliseconds
      'swing' // easing
    ); // end animate
  } // end scrollThere function definition
  
  
  //--- START SCROLL EVENTS ---//
  // detect a mousewheel event (note: relies on jquery mousewheel plugin):
  $(window).on('mousewheel', function (e) {
  
    // get Y-axis value of each div:
    var div1y = $('#intro').offset().top,
        div2y = $('#about').offset().top,
        div3y = $('#resume').offset().top,
        div4y = $('#contact').offset().top,
        
        // get window's current scroll position:
        lastScrollTop = $(this).scrollTop(),
        // for getting user's scroll direction:
        scrollDirection,
        // for determining the previous and next divs to scroll to, based on lastScrollTop:
        targetUp,
        targetDown,
        // for determining which of targetUp or targetDown to scroll to, based on scrollDirection:
        targetElement;
  
    // get scroll direction:
    if ( e.deltaY > 0 ) {
      scrollDirection = 'up';
    } else if ( e.deltaY <= 0 ) {
      scrollDirection = 'down';
    } // end if
  
    // prevent default behavior (page scroll):
    e.preventDefault();
  
    // condition: determine the previous and next divs to scroll to, based on lastScrollTop:
    if (lastScrollTop === div1y) {
      targetUp = $('#intro');
      targetDown = $('#about');
    } else if (lastScrollTop === div2y) {
      targetUp = $('#intro');
      targetDown = $('#resume');
    } else if (lastScrollTop === div3y) {
      targetUp = $('#about');
      targetDown = $('#contact');
    } else if (lastScrollTop === div4y) {
      targetUp = $('#resume');
      targetDown = $('#contact');
    } else if (lastScrollTop < div2y) {
      targetUp = $('#intro');
      targetDown = $('#about');
    } else if (lastScrollTop < div3y) {
      targetUp = $('#about');
      targetDown = $('#resume');
    } else if (lastScrollTop < div4y) {
      targetUp = $('#resume');
      targetDown = $('#contact');
    } else if (lastScrollTop > div4y) {
      targetUp = $('#contact');
      targetDown = $('#contact');
    } // end else if
  
    // condition: determine which of targetUp or targetDown to scroll to, based on scrollDirection:
    if (scrollDirection === 'down') {
      targetElement = targetDown;
    } else if (scrollDirection === 'up') {
      targetElement = targetUp;
    } // end else if
  
    // scroll smoothly to the target element:
    scrollThere(targetElement, 40);
  
  }); // end on mousewheel event
  //--- END SCROLL EVENTS ---//
  