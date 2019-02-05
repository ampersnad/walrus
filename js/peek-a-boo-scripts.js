$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });


  $(".fade-click").click(function() {
    $("#fading").fadeToggle();

  });


});
