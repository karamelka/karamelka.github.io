$(function() {

    $(window).on('load', function () {
        var $preloader = $('#page-preloader'),
            $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });

    $(".carusel_1").slick( {
        slidesToShow:1,
        slidesToScroll:1,
        fade:true,
        prevArrow: '<a href="#" class="arrow_cont prev"><img src="imges/left_arrow.png" alt="" class="customer_arrow" /></a>',
        nextArrow: '<a href="#" class="arrow_cont next"><img src="imges/ right_arrow.png" alt=""  class="customer_arrow" /></a>'
    });

    $('[href^="#"]').on('click', function (e) {
        var slide = $($(this).attr('href'));
        var track = slide.parents('.slick-track');
        if(track.length) {
            var slider = track.parents('.slick-slider');
            var slideNum = track.children().index(slide);
            slider.slick('slickGoTo', slideNum, true);
        }
    });

    $('[data-phonemask]').inputmask("+380(99)999-99-99");

    $('[href^="#"]').on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });


    $('td[class]').on('click', function (e) {
        $('#myModal').modal('show');
    });

    $('#callbackForm').on('submit', function (e) {
        e.preventDefault();
        var form = $(this);
        console.log(form.serializeArray());
        $.post('callback.php', form.serializeArray(), function (data) {
            console.log(data);
            form.find('#submitText').text(data);
        });
    });
});
