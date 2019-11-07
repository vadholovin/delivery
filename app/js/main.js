/**
 * #Menu
 */
$(document).ready(function () {
  $('.hamburger').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.mobile-nav').toggleClass('is-open');
  });

  $('.menu-mobile__link').click(function (e) {
    $('.hamburger').removeClass('is-active');
    $('.mobile-nav').removeClass('is-open');
  });
});


/**
 * Reviews
 */
$(document).ready(function () {
  $('.js-reviews-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: $('#reviews-carousel-nav .carousel-nav__btn-prev'),
    nextArrow: $('#reviews-carousel-nav .carousel-nav__btn-next'),
  });
});



/**
 * Animated Scroll To Anchor
 */
(function(){

  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 80,
  });

})();


/**
 * #Inputmask
 */
$(document).ready(function () {
  $('.js-phone-mask').inputmask('+7 (999) 999-99-99');
});