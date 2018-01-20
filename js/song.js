// 获取url 的id
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

let id = getParameterByName('id');
var query = new AV.Query('Song');
query.get(id).then(function(song){
	// 解构获取歌曲url
	let {url,lyric,cover,name,singer} = song.attributes


	initPlayer.call(undefined,url)
	initText(name,lyric)
})
function initText(name,lyric){
	$('.lyric > h1').text(name)
	parseLyric(lyric)
}
// 初始化暂停播放
function initPlayer(url){
	let audio = document.createElement("audio")
	audio.src = url;
	audio.oncanplay = function(){
		audio.play()
		$('section.disk').addClass('playing')
		$('section.disk').removeClass('pause')
	}
	$(".icon-pause").on('click',function(){
		audio.pause()
		$('section.disk').removeClass('playing')
		$('section.disk').addClass('pause')
	})
	$(".icon-bofang").on('click',function(){
		audio.play()
		$('section.disk').addClass('playing')
		$('section.disk').removeClass('pause')
	})
}

function parseLyric(lyric){
	let parts = lyric.split("\n")

	let regex = /^\[(.+)\](.*)$/;
	parts = parts.map(function(string,index){
		let matches = string.match(regex)
		if (matches) {
			return {
				time: matches[1],
				words: matches[2]
			}
		}
	})
	let $word= $('.word')
	array.map(function(object){
		if (!object) {return}
		let $p = $('<p/>')
		$p.attr('data-time,object.time').text(object.words)
		$p.appendTo($lyric.children('.lines'))
	})
}
