(this["webpackJsonpreact-youtube"]=this["webpackJsonpreact-youtube"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(8),r=n.n(o),l=(n(14),n(2)),s=n(3),u=n(1),c=n(4),p=n(5),m=(n(15),n(6)),h=function(e){Object(p.a)(n,e);var t=Object(c.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.getListeners().forEach((function(t){var n=Object(m.a)(t,2),a=n[0],i=n[1];e.props.eventTarget.addEventListener(a,i)}))}},{key:"componentWillUnmount",value:function(){var e=this;this.getListeners().forEach((function(t){var n=Object(m.a)(t,2),a=n[0],i=n[1];e.props.eventTarget.removeEventListener(a,i)}))}},{key:"getListeners",value:function(){var e=this;return Object.keys(this.props).filter((function(e){return e.startsWith("on")||"keydown"===e})).map((function(t){return t.startsWith("on")?[t.slice(2).toLowerCase(),e.props[t]]:[t,e.props[t]]}))}},{key:"render",value:function(){return null}}]),n}(i.a.Component),y=function(e){Object(p.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={youtubeurl:"blb3X5zpdpU",time:102,replayNum:50,replayDuration:4,caption:!0,speed:1,timerRemain:0,timerRemainTime:0},a.onChangeUrl=a.onChangeUrl.bind(Object(u.a)(a)),a.onChangeTime=a.onChangeTime.bind(Object(u.a)(a)),a.onChangeReplayNum=a.onChangeReplayNum.bind(Object(u.a)(a)),a.onChangeReplayDuration=a.onChangeReplayDuration.bind(Object(u.a)(a)),a.onReplay=a.onReplay.bind(Object(u.a)(a)),a.onReplay5=a.onReplay5.bind(Object(u.a)(a)),a.setTextInputRef=function(e){a.textInput=e},a.initialFocus=function(){a.textInput&&a.textInput.focus(),a.textInput.blur(),window.scrollTo(0,0),a.translateDiv.scrollTop=0},a.timerList=[],a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){if(e.state.timerRemain>0){var t=e.state.time+e.state.replayDuration-window.XXXXX.getCurrentTime(),n=Math.trunc(10*t)/10;e.setState({timerRemainTime:n})}}),100)}},{key:"componentWillUnmount",value:function(){}},{key:"onChangeUrl",value:function(e){var t=this,n=e.target.value.replace(/.*=/g,"");this.setState({youtubeurl:n,time:0},(function(){window.XXXXX.loadVideoById(t.state.youtubeurl,t.state.time),t.initialFocus()}))}},{key:"onChangeTime",value:function(e){this.setState({time:parseFloat(e.target.value)})}},{key:"onChangeReplayNum",value:function(e){this.setState({replayNum:parseInt(e.target.value)})}},{key:"onChangeReplayDuration",value:function(e){this.setState({replayDuration:parseFloat(e.target.value)})}},{key:"onReplay",value:function(e){window.XXXXX.seekTo(this.state.time,!0),[-1,0,2,5].indexOf(window.XXXXX.getPlayerState())>=0&&(console.log("playvideo"),window.XXXXX.playVideo())}},{key:"onReplay5",value:function(e){this.clearAllTimer(),this.onReplay(),this.setState({timerRemain:this.state.replayNum-1}),this.onReplay5SetInterval(this.state.replayNum-1)}},{key:"onReplay5SetInterval",value:function(e){var t=this,n=0;this.timerList.push(setInterval((function(){if(0!==t.timerList.size){console.log("onReplay5SetInterval");var a=t.state.time+t.state.replayDuration;window.XXXXX.getCurrentTime()>a&&(console.log("clearInterval"),t.clearAllTimer(),t.setState({timerRemain:e}),e>0&&(t.onReplay(),t.onReplay5SetInterval(e-1))),n++>2e3&&(console.log("clearInterval exceed"),t.clearAllTimer())}}),200))}},{key:"clearAllTimer",value:function(){this.timerList.concat().forEach((function(e){clearInterval(e)})),this.timerList=[]}},{key:"typeOf",value:function(e){return toString.call(e).slice(8,-1).toLowerCase()}},{key:"keyProc",value:function(e,t){console.log(e+" pressed"),console.log(Object.prototype.toString.call(t.target)),console.log(t.target.nodeType),console.log(this.typeOf(t.target)),"Escape"===e&&t.target.blur(),"htmlbodyelement"===this.typeOf(t.target)?("k"===e&&(console.log("state:"+window.XXXXX.getPlayerState()),[-1,0,2,5].indexOf(window.XXXXX.getPlayerState())>=0&&(console.log("playvideo"),window.XXXXX.playVideo()),[1].indexOf(window.XXXXX.getPlayerState())>=0&&window.XXXXX.pauseVideo(),this.clearAllTimer(),this.setState({timerRemain:0,timerRemainTime:0})),"c"===e&&this.setState({caption:!this.state.caption}),"s"===e&&(1===this.state.speed?(window.XXXXX.setPlaybackRate(.25),this.setState({speed:.25})):(window.XXXXX.setPlaybackRate(1),this.setState({speed:1}))),"r"===e&&(this.clearAllTimer(),this.setState({timerRemain:0,timerRemainTime:0}),this.onReplay()),"l"===e&&(this.clearAllTimer(),this.onReplay5()),"t"===e&&this.setState({time:window.XXXXX.getCurrentTime()}),"h"===e&&window.XXXXX.seekTo(window.XXXXX.getCurrentTime()-2,!0),"j"!==e&&"ArrowLeft"!==e||window.XXXXX.seekTo(window.XXXXX.getCurrentTime()-1,!0)):console.log("body\u3067\u306f\u306a\u3044\u305f\u3081keyevent\u7121\u8996")}},{key:"render",value:function(){var e,t=this;return i.a.createElement("div",{className:"App"},i.a.createElement(h,{eventTarget:document,keydown:function(e){return t.keyProc(e.key,e)}}),i.a.createElement("div",{id:"hidecap",style:{position:"absolute",top:"370px",left:"0px",backgroundColor:"#CCCCFF",width:"700px",height:"70px",display:this.state.caption?"none":""}}),i.a.createElement("button",{type:"button",style:{position:"absolute",top:"590px",left:"200px",backgroundColor:"#CCCCFF",width:"100px",height:"70px"},onClick:this.initialFocus},"focus\u30ed\u30b9\u30c8"),i.a.createElement("input",{type:"text",name:"youtubeurl",size:"20",ref:this.setTextInputRef,value:this.state.youtubeurl,onChange:this.onChangeUrl}),i.a.createElement("input",{type:"number",name:"time",size:"20",value:this.state.time,onChange:this.onChangeTime}),i.a.createElement("input",{type:"number",name:"replayNum",size:"20",value:this.state.replayNum,onChange:this.onChangeReplayNum}),i.a.createElement("input",{type:"number",name:"replayDuration",size:"20",value:this.state.replayDuration,onChange:this.onChangeReplayDuration}),i.a.createElement("button",{type:"button",onClick:this.onReplay},"replay"),i.a.createElement("button",{type:"button",onClick:this.onReplay5},"replayNum"),i.a.createElement("label",null,"timer\u6b8b"+this.state.timerRemain),i.a.createElement("label",null,"timer\u6b8b"+((e=this.state.timerRemainTime)>1?Math.trunc(e):Math.trunc(e)===e?e+".0":e)),i.a.createElement("div",{id:"wrapper",style:{height:"400px",overflowY:"scroll"},ref:function(e){t.translateDiv=e}},i.a.createElement("iframe",{title:"translate",onLoad:this.initialFocus,src:"https://translate.google.co.jp/",width:"1000",height:"500"}),i.a.createElement("iframe",{title:"deepl",onLoad:this.initialFocus,src:"https://www.deepl.com/ja/translator",width:"1000",height:"500"})))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.9fb094f2.chunk.js.map