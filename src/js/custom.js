//---------------slick slider js
$().ready(function(){
    $('.slider-content-js').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      infinite: true,
      fade: true,
      autoplay:true,
      autoplaySpeed:2000,
    });
  });

  // --------services slider
  $('.slider-nav1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: true,
    focusOnSelect: true,
    autoplay:true,
    autoplaySpeed:2000,
  });
  //--------------recent-work-profile-----------
  $('.work-slider-nav').slick({
      dots: true,
      arrows: true,
      slidesToShow: 1,
      infinite: true,
      fade: true,
      focusOnSelect: true,
      autoplay:true,
      autoplaySpeed:2000,
  });