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


/**
 * Forms
 */
$(document).ready(function () {
  $('.js-form').submit(function (e) { 
    e.preventDefault();
    var form = $(this);

    var validator = form.validate({
      rules: {
        'form-client-name': {
          required: true,
          minlength: 3,
          maxlength: 20,
          lettersonly: true,
        },
        'form-client-phone': {
          required: true,
        },
      },
      messages: {
        'form-client-name': {
          required: 'Обязательное поле',
          minlength: jQuery.validator.format('Слишком короткое имя'),
          maxlength: jQuery.validator.format('Слишком длинное имя'),
          lettersonly: jQuery.validator.format('Допускается только текст'),
        },
        'form-client-phone': {
          required: 'Обязательное поле',
        },
      },
    });

    if(form.valid()) {
      $.ajax({
        url : 'post.php',
        type: 'POST',
        data: $(this).serialize(),
      }).done(function(res) {
        answer(res);
      });
    }

    function answer(res) {
      if (res === 'done') {
        alert('Отправлено');
      }
      if (res === 'error') {
        alert('Ошибка, попробуйте снова');
      }
    }
  });
});
