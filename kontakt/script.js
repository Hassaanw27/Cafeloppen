$("#navtoggle").change(function () {
  if ($(this).is(":checked")) {
    $(".navbg").addClass("red");
  } else {
    $(".navbg").removeClass("red");
  }
});
