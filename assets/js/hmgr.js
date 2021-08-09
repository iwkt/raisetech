document.addEventListener('DOMContentLoaded',function(){
  const menu = document.querySelector('#js-drawer--mobile')
  const navopen = document.querySelector('#navOpen')

  navopen.addEventListener('click', function(){

    if (navopen.classList.contains('is-open') == true) {
      $('.js-acd_child').hide()
      this.classList.remove('is-open')
      menu.classList.remove('is-open')
    }else {
      this.classList.add('is-open')
      menu.classList.add('is-open')
    }

  });
});
