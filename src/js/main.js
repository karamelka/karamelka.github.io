$(function () {
    $('.GallerySlider').slick({
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade:true,
        prevArrow: '<a href="#" class="arrow_cont prev"><img src="dist/images/back.svg" alt="" class="customer_arrow" /></a>',
        nextArrow: '<a href="#" class="arrow_cont next"><img src="dist/images/next.svg" alt=""  class="customer_arrow" /></a>'
    });

    $('.ReviewsSlider').slick({
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade:true,
        prevArrow: '<a href="#" class="arrow_cont prev"><img src="dist/images/back.svg" alt="" class="customer_arrow" /></a>',
        nextArrow: '<a href="#" class="arrow_cont next"><img src="dist/images/next.svg" alt=""  class="customer_arrow" /></a>'
    });

});

