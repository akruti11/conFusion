$(document).ready(function() {
  $("#carouselButton").click(function() {
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
      $("#mycarousel").carousel('pause');
      $("#carouselButton").children("span").removeClass('fa-pause');
      $("#carouselButton").children("span").addClass('fa-play');
    } else if ($("#carouselButton").children("span").hasClass('fa-play')) {
      $("#mycarousel").carousel('cycle');
      $("#carouselButton").children("span").removeClass('fa-play');
      $("#carouselButton").children("span").addClass('fa-pause');
    }
  });

  $("#login_button").click(function() {
    $("#loginModal").modal('show');
  });

  $("#close_login_modal1").click(function(){
    $("#loginModal").modal('hide');
  });

  $("#close_login_modal2").click(function(){
    $("#loginModal").modal('hide');
  });

  $("#reserve_modal_button").click(function() {
    $("#reserveModal").modal('show');
  });

  $("#cancel_reservation_modal1").click(function(){
    $("#reserveModal").modal('hide');
  });

  $("#cancel_reservation_modal2").click(function(){
    $("#reserveModal").modal('hide');
  });
});
