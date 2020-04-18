document.addEventListener('keydown', (event) => { if (event.key == "Escape") document.querySelector('#source').value = "" })


let s = document.createElement("div");
s.id = "youtubeplayer"
let container=document.querySelector("body > div.container")
container.parentNode.insertBefore(s, container);


let tag = document.createElement('script');
tag.id="youtubescript"
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


let player;
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

let reactyoutube = document.createElement("div");
reactyoutube.id = "reactyoutube"
let youtubeplayer=document.querySelector("#youtubeplayer")
youtubeplayer.parentNode.insertBefore(reactyoutube, youtubeplayer.nextSibling);


let reactscriptCss = document.createElement("link");
reactscriptCss.href = "https://litghtedblue.github.io/react-youtube/static/css/main.5f361e03.chunk.css";
reactscriptCss.rel = "stylesheet"
document.body.appendChild(reactscriptCss);

let reactscript1 = document.createElement("script");
reactscript1.src = "https://litghtedblue.github.io/react-youtube/static/js/2.b0db29c0.chunk.js";
document.body.appendChild(reactscript1);
let reactscript2 = document.createElement("script");
reactscript2.src = "https://litghtedblue.github.io/react-youtube/static/js/main.f23140d0.chunk.js";
document.body.appendChild(reactscript2);

