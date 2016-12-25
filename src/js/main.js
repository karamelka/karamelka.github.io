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


$(document).ready(function() {
    $('a[name=modal]').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href');

        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $('#mask').css({'width':maskWidth,'height':maskHeight});

        $('#mask').fadeIn(1000);
        $('#mask').fadeTo("slow",0.3);

        var winH = $(window).height();
        var winW = $(window).width();

        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);

        $(id).fadeIn(2000);

    });

    $('.window .close').click(function (e) {
        e.preventDefault();
        $('#mask, .window').hide();
    });

    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    });

});


