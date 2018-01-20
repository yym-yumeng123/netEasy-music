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


	imagesInit.call(undefined,cover)
	initPlayer.call(undefined,url)
	initText(name,lyric)
})

// 歌词数据
function initText(name,lyric){
	$('.lyric > h1').text(name)
	parseLyric(lyric)
}

function imagesInit(cover) {
 	// 添加css伪类
     var s="<style type='text/css' > .page::before{ background:transparent url(\""+cover+"\")no-repeat center;background-size: cover; } </style>";
     $('head').append(s)
    document.querySelector('#bg').src = cover;
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

//歌词
function parseLyric(lyric){
	//解构
	let array = lyric.split('\n')
	// 正则匹配分开时间[ ]和歌词
	let regex = /^\[(.+)\](.*)$/
	//遍历数组,得到时间和歌词
	array = array.map(function(string,index){
		let matches = string.match(regex)
		if (matches) {
			return {time:matches[1],words:matches[2]}
		}
	})
	let $lyric = $('.word')
	array.map(function(object){
		// 创建p标签
		
		if (!object) {return}
		let $p = $('<p/>')
		//给每一个标签自定义时间属性,然后的文本内容是words
		$p.attr('data-time',object.time).text(object.words)
		//插入div
		$p.appendTo($lyric.children('.lines'))
	})
}
