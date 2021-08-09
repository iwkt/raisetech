$('.js-hover-child').hide()
$(function () {
  //マウスを乗せたら発動
  $('.js-hover-parent').hover(function () {
    $(this).children('.js-hover-child').slideDown(300);
    //ここにはマウスを離したときの動作を記述
  }, function () {
    $(this).children('.js-hover-child').slideUp(10);
  });
});