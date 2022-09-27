$(window).on('scroll',function(){
    if ($(window).scrollTop() > 45){
        $('.secondheader').addClass('.colorHeader');
    }
    else{
        $('.secondheader').removeClass('.colorHeader');
    }
});
$(document).ready(function() {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        pauseOnHover: false,
        dots: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 6
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      });      
});