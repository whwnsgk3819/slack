
$(document).ready(function(){
    var worldSlider = new Swiper ('.world__slider', {
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
    var newSlider = new Swiper ('.new__mobile-slider', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })

    var $sideMenu = $('.side-menu');
    var $openBtn = $('.nav__toggle-btn');
    var $closeBtn = $('.side-menu__close-btn');

    $openBtn.click(function(){
      $sideMenu.addClass('on');
    })
    $closeBtn.click(function(){
      $sideMenu.removeClass('on');
    })

})