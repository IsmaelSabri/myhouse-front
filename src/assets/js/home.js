function saveService() {
  document.getElementById("oculto").click();
}
//bypass to see the ad
function runPopup() {
  document.getElementById("linkPopup").click();
}
function cuoreLike() {}
//modal newHome
/*$(".modal-toggle").on("click", function (e) {
  e.preventDefault();
  $(".modal").toggleClass("is-active");
});*/
//search filters
/*$('.filters-toggle').on('click', function(e) {
  e.preventDefault();
  $('.static-modal').toggleClass('is-active');
});*/
function runModal() {
  $(".modal").toggleClass("is-active");
}

function closeModal() {
  $(".modal").removeClass("is-active");
}
// reset checkboxes & check venta by default - filters-form
function uncheck() {
  $(":checkbox").prop("checked", false).parent().removeClass("active");
  $(":radio").prop("checked", false).parent().removeClass("active");
  $("#two.saleRadio").prop("checked", true);
  $(".p-icon-wrapper").trigger('click');
  $(".p-icon-wrapper").trigger('click');
}
// bulma nav
$(document).ready(function() {
  $(".navbar-burger").click(function() {
      $(".navbar-burger, .navbar-menu", $(this).closest('.navbar')).toggleClass("is-active");
  });
});
// select
//jquery modal
$(".contact__form-privacy a").click(function (e) {
  e.preventDefault();
  $("body").toggleClass("is-fixed");
  $(".modal__gray-back").fadeIn(300);
  return false;
});

$(".modal__close-btn").click(function (e) {
  $("body").toggleClass("is-fixed");
  $(".modal__gray-back").fadeOut(300);
});