$('.slide-show').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
   useTransform: true,
    speed: 300,
    nextArrow: true,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slide-show',
    centerMode: true,
    focusOnSelect: true,
  });  