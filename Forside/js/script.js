var $booking = $('.lftbtn');
var $takeaway = $('.rgtbtn');
var $widget = $('.instawidget');

$widget.waypoint(function (direction) {
  if (direction == 'down') {
    $booking.addClass('js-lftbtn');
    $takeaway.addClass('js-rgtbtn');
    console.log('waypoint')
  }else {
    $booking.removeClass('js-lftbtn');
    $takeaway.removeClass('js-rgtbtn');
    console.log('waypoint2')
  }
},{offset:'92%'});

// $("#navtoggle").change(function () {
//  if ($(this).is(":checked")) {
//    $(".navbg").addClass("red");
//  } else {
//    $(".navbg").removeClass("red");
//  }
//});

//$(window).scroll(function() {

//    if ($(this).scrollTop()>-1)
//     {
//    $(".navbg").addClass("red");
//     }
//    else
//     {
//    $(".navbg").removeClass("red");
//     }
// });
