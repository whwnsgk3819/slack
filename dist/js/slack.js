"use strict";$(document).ready(function(){new Swiper(".world__slider",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".new__mobile-slider",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var n=$(".side-menu"),e=$(".nav__toggle-btn"),i=$(".side-menu__close-btn");e.click(function(){n.addClass("on")}),i.click(function(){n.removeClass("on")})});