var mySwiper = new Swiper('.swiper-container', {
  slidesPerView:1,
  loop:true,
  navigation:{
    nextEl:'.arrow',
    prevEl:'.arrowprev'
  },
  breakpoints: {
      // when window width is >= 640px
      540: {
        slidesPerView: 3
      }
  }
}); 
var menubtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.header');
menubtn.addEventListener('click', function(){
  menubtn.classList.toggle('menu-btn-active');
  menu.classList.toggle('header-active');
});
$(document).ready(function(){
  $("a.photo").fancybox({
    transitionIn:'elastic',
    transitionOut:'elastic'
  });
});