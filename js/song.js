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
	let {url} = song.attributes
	let audio = document.createElement("audio")
	audio.src = url;
	audio.oncanplay = function(){
		audio.play()
		$('section.disk').addClass('playing')
	}
	$(".icon-pause").on('click',function(){
		audio.pause()
		$('section.disk').removeClass('playing')
	})
	$(".icon-bofang").on('click',function(){
		audio.play()
		$('section.disk').addClass('playing')
	})
})



