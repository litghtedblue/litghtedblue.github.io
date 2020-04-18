document.addEventListener('keydown', (event) => { if (event.key == "Escape") document.querySelector('#source').value = "" })


var firstScriptTag = document.getElementsByTagName('script')[0];

var s = document.createElement("div");
s.id = "youtubeplayer"
firstScriptTag.parentNode.insertBefore(s, firstScriptTag);

var tag = document.createElement('script');
tag.id="youtubescript"
tag.src = "https://www.youtube.com/iframe_api";
var container=document.querySelector("body > div.container")
container.parentNode.insertBefore(tag, container);


var player;
function onYouTubeIframeAPIReady() {
	var videoId = 'M7lc1UVf-VE'
	let urlParamStr = window.location.search

	if (urlParamStr) {
		//?を除去
		urlParamStr = urlParamStr.substring(1)

		let params = {}

		//urlパラメータをオブジェクトにまとめる
		urlParamStr.split('&').forEach(param => {
			const temp = param.split('=')
			//pramsオブジェクトにパラメータを追加
			params = {
				...params,
				[temp[0]]: temp[1]
			}
		})
		if (params.url) {
			videoId = params.url.replace(/.*%3D/g, '');
		}
	}
	player = new YT.Player('youtubeplayer', {
		height: '450',
		width: '600',
		videoId: videoId,
		playerVars: { 'autoplay': 1 },
		events: {
			'onReady': onPlayerReady,
			// 'onStateChange': onPlayerStateChange
		}
	});
	window['XXXXX'] = player;
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	// event.target.playVideo();
	// window['XXXXX'] = player;
	console.log("onPlayerReady")
	window['XXXXXREADY'] = true;
}