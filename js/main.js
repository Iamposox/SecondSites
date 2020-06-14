for(var i=1; i<6;i++)
{
  var mySwiper = new Swiper('.swip'+i,{
    slidesPerView:1,
    loop:true,
    navigation:{
      nextEl:'.arrowswip'+i,
      prevEl:'.arrowprevswip'+i,
    },
    breakpoints: {
      540:{
        slidesPerView:3
      }
    }
  });
}
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