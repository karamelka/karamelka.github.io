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
