// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//= require jquery
//= require rails-ujs
//= require activestorage

//= require_tree .

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


