//document.addEventListener('keydown', (event) => { if (event.key == "Escape") document.querySelector('#source').value = "" })


let s = document.createElement("div");
s.id = "youtubeplayer"
let container = document.querySelector("body > div.container")
container.parentNode.insertBefore(s, container);


let tag = document.createElement('script');
tag.id = "youtubescript"
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


let player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('youtubeplayer', {
		height: '450',
		width: '600',
		//videoId: videoId,
		//playerVars: { 'autoplay': 1 },
		events: {
			'onReady': onPlayerReady,
		}
	});
	window['XXXXX'] = player;
}

function onPlayerReady(event) {
	let videoId = 'M7lc1UVf-VE'
	let urlParamStr = window.location.search
	let startSeconds = 0

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
		if (params.reactyoutube) {
			videoId = params.reactyoutube.replace(/.*%3D/g, '');
		}
		if (params.reactyoutubetime) {
			try {
				let startSecArray = params.reactyoutubetime.split('%3A')
				startSeconds = startSecArray[0] * 60 + parseInt(startSecArray[1])
			} catch (e) {
				console.log(e)
			}
		}
	}
	player.loadVideoById(videoId, startSeconds)
	console.log("onPlayerReady")
	window['XXXXXREADY'] = true;
}

let reactyoutube = document.createElement("div");
reactyoutube.id = "reactyoutube"
let youtubeplayer = document.querySelector("#youtubeplayer")
youtubeplayer.parentNode.insertBefore(reactyoutube, youtubeplayer.nextSibling);

// let deeplIframeTag = document.createElement("iframe")
// deeplIframeTag.title="deepl"
// deeplIframeTag.src="https://www.deepl.com/ja/translator"
// deeplIframeTag.width=1000
// deeplIframeTag.height=500
// deeplIframeTag.onload=function(){
// 	let textInput=document.querySelector("#reactyoutube input[type=text]")
// 	textInput.focus()
// 	textInput.blur();
// 	window.scrollTo(0, 0);
// 	document.querySelector("div.frame").scrollTop=0
// }
// let deeplTarget=document.querySelector(".gp-footer")
// if(deeplTarget!=null){
//   deeplTarget.parentNode.insertBefore(deeplIframeTag, deeplTarget);
// }

let reactscriptCss = document.createElement("link");
let commoncss = "main.5f361e03.chunk.css"
let commonjs = "2.2d39b0ee.chunk.js"
let mainjs = "main.6ee5005b.chunk.js"

reactscriptCss.href = "https://litghtedblue.github.io/react-youtube/static/css/" + commoncss;
reactscriptCss.rel = "stylesheet"
document.body.appendChild(reactscriptCss);
let reactscript1 = document.createElement("script");

reactscript1.src = "https://litghtedblue.github.io/react-youtube/static/js/" + commonjs;
document.body.appendChild(reactscript1);
let reactscript2 = document.createElement("script");

reactscript2.src = "https://litghtedblue.github.io/react-youtube/static/js/" + mainjs;
document.body.appendChild(reactscript2);

//runtime-mainかも　変わって動かなくなるかも
!function (e) { function t(t) { for (var n, l, a = t[0], f = t[1], i = t[2], p = 0, s = []; p < a.length; p++)l = a[p], Object.prototype.hasOwnProperty.call(o, l) && o[l] && s.push(o[l][0]), o[l] = 0; for (n in f) Object.prototype.hasOwnProperty.call(f, n) && (e[n] = f[n]); for (c && c(t); s.length;)s.shift()(); return u.push.apply(u, i || []), r() } function r() { for (var e, t = 0; t < u.length; t++) { for (var r = u[t], n = !0, a = 1; a < r.length; a++) { var f = r[a]; 0 !== o[f] && (n = !1) } n && (u.splice(t--, 1), e = l(l.s = r[0])) } return e } var n = {}, o = { 1: 0 }, u = []; function l(t) { if (n[t]) return n[t].exports; var r = n[t] = { i: t, l: !1, exports: {} }; return e[t].call(r.exports, r, r.exports, l), r.l = !0, r.exports } l.m = e, l.c = n, l.d = function (e, t, r) { l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, l.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, l.t = function (e, t) { if (1 & t && (e = l(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var r = Object.create(null); if (l.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var n in e) l.d(r, n, function (t) { return e[t] }.bind(null, n)); return r }, l.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return l.d(t, "a", t), t }, l.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, l.p = "./"; var a = this["webpackJsonpreact-youtube"] = this["webpackJsonpreact-youtube"] || [], f = a.push.bind(a); a.push = t, a = a.slice(); for (var i = 0; i < a.length; i++)t(a[i]); var c = f; r() }([])
