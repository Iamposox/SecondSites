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
      640:{
        slidesPerView:2
      },
      720:{
        slidesPerView:2
      },
      768:{
        slidesPerView:2
      },
      840:{
        slidesPerView:2
      },
      960:{
        slidesPerView:3
      },
      1200:{
        slidesPerView:3
      },
      1600:{
        slidesPerView:4
      }
    }
  });
}
var menubtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.numberlink');
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