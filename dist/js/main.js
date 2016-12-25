var videoPlayer;
function onYouTubeIframeAPIReady() {
	videoPlayer = new YT.Player('videoIframe', {
		videoId: 'jVnXbCvOST0',
		height: 1366,
		width: 768,
		playerVars: {
			controls: 0,
			info: 0,
			wmode: 'transparent',
			cc_load_policy: 0,
			disablekb: 0,
			fs: 0,
			iv_load_policy: 3,
			loop: 1,
			modestbranding: 1,
			rel: 0,
			showinfo: 0
		},
		events: {
			onReady: function (event) {
			},
			onStateChange: function (event) {
				if (event.data == 2 || event.data == -1 || event.data == 0) {
					$('#videoBlock').removeClass('VideoBlock_active');
				} else {
					$('#videoBlock').addClass('VideoBlock_active');
				}
			}
		}
	});
}

$(function () {
	var videoIframe = $('#videoIframe'),
			videoPlayBtn = $('#videoPlayBtn'),
			videoBlock = $('#videoBlock');
	
	videoPlayBtn.on('click', function (e) {
		e.preventDefault();
		if (videoPlayer && videoPlayer.playVideo) {
			videoPlayer.playVideo();
			videoBlock.addClass('VideoBlock_active');
		} else {
			// вывести ошибку
		}
	});
});

$(function () {
	$(window).on('scroll', function (e) {
		var offset = $('body').scrollTop();
		var header = $('.Header');
		if (offset > 111) {
			header.addClass('Header_mini');
		} else {
			header.removeClass('Header_mini');
		}
	});
	$(window).trigger('scroll');
});

$(function () {
	$('[href^=anchor]').on("click", function (event) {
		event.preventDefault();
		var minus = $(window).width() >= 992 ? 56 : 0;
		var id = $(this).attr('href').split(':')[1];
		var top = $(id).offset().top - minus;
		
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

$(function () {
	var map = new GMaps({
		div: '#map',
		lat: 48.9914536,
		lng: 30.9259439,
		zoom: 6
	});
	map.addMarker({
		lat: 46.4298563,
		lng: 30.710569,
		infoWindow: {
			content: 'М.ОДЕСА <br> вул.Космонавтiв, 36, 3 поверх, каб.301'
		},
		icon: 'dist/images/MainPage/pin-icon.svg'
	});
	map.addMarker({
		lat: 49.8332015,
		lng: 24.0356443,
		infoWindow: {
			content: 'М.ЛЬВІВ <br> пл.Петрушевича, 3'
		},
		icon: 'dist/images/MainPage/pin-icon.svg'
	});
	map.addMarker({
		lat: 49.8314239,
		lng: 23.9809149,
		infoWindow: {
			content: 'М.ЛЬВІВ <br> вул.Зигзаг, 5'
		},
		icon: 'dist/images/MainPage/pin-icon.svg'
	});
	map.addMarker({
		lat: 49.8020175,
		lng: 24.0354238,
		infoWindow: {
			content: 'М.ЛЬВІВ <br> вулиця Хуторівка, 40а'
		},
		icon: 'dist/images/MainPage/pin-icon.svg'
	});
	
	map.addMarker({
		lat: 48.9218664,
		lng: 24.6960201,
		infoWindow: {
			content: 'М.ІВАНО-ФРАНКІВСЬК <br> вул.Пилипа Орлика, 10/11'
		},
		icon: 'dist/images/MainPage/pin-icon.svg'
	});
})

$(document).ready(function() {
	$('a[name=modal]').click(function(e) {
		e.preventDefault();
		var id = $(this).attr('href');

		var maskHeight = $(document).height();
		var maskWidth = $(window).width();

		$('#mask').css({'width':maskWidth,'height':maskHeight});

		$('#mask').fadeIn(1000);
		$('#mask').fadeTo("slow",0.8);

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