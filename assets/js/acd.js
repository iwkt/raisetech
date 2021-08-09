// jquery ///////////////////////
$('.js-acd_child').hide()
$('.js-acd_parent').on('click', function () {
  $(this).next().slideToggle(300);
})