$(function(){
  (function (){
    var html = document.getElementsByTagName('html')||[];
    html[0].classList.add('enable-javascript');
    window.addEventListener("load", function(){
      html[0].classList.add('window-load');
    }, false);
  })();

  $(window).on('load',function(){
    var slider = $('.slider').slick({
      dots: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      cssEase: 'linear',
      });
    $('.backtop').change(function() {
      slider.slick('setPosition');
   });

   $slider.on('beforeChange',function(event, slick, currentSlide, nextSlide){
    if(nextSlide > 0 ) {
      $slider.slick('slickSetOption', 'autoplaySpeed', 8000, true)
    }
  });
  });  

  $('a img').hover(function(){
    $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
      }, function(){
        if (!$(this).hasClass('currentPage')) {
          $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
        }
     });
});
