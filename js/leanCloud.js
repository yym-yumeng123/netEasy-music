

//初始化
var APP_ID = 'eNuy1gIwgY9cI6KeKsGfw3Mr-gzGzoHsz';
var APP_KEY = 'DX4tkQ07mmA8cQHGujuTa6aT';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

//最新音乐加载
// var SongObject = AV.Object.extend('Song');  // 选择表名
// var songOBject = new SongObject();  // 生成一条数据
// songOBject.save({
//   name: '智商二五零',
//   singer: '华晨宇',
//   cover: '//i.loli.net/2017/10/08/59da11c5b94f3.jpg',
//   url: 'http://owyvuq3lo.bkt.clouddn.com/%E6%99%BA%E5%95%86%E4%BA%8C%E4%BA%94%E9%9B%B6.m4a'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })

//推荐歌单加载数据
// var PlayObject = AV.Object.extend('Playlist');  // 选择表名
// var PlayOBject = new PlayObject();  // 生成一条数据
// PlayOBject.save({
//   title: '等你下课！',
//   src: 'https://i.loli.net/2018/01/18/5a601088b0a59.jpg'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })

let $olSongs = $("ol#songs")
let $songImg =$("ol#song-img") 
// 使用数据
var query = new AV.Query('Song');
query.find().then(function (results) {
	// loading加载成功干掉
	$("#songs-loading").remove()
	for (var i = 0; i < results.length; i++) {
		let song = results[i].attributes
		let li = `
			<li>
				<h3>${song.name}</h3>
				<p>
					<svg class="icon icon-sq">
						<use xlink:href="#icon-sq"></use>
					</svg>
					${song.singer}-${song.name}
				</p>
				<a class="playButton" href="#">
					<svg class="icon icon-play">
						<use xlink:href="#icon-play"></use>
					</svg>
				</a>
			</li>
		`
		$olSongs.append(li)
	}
}, function (error) {
	alert("获取歌曲失败")
});
// 填充推荐歌单数据
var queryS = new AV.Query('Playlist')
queryS.find().then(function (result) {
	for (var i = 0; i < result.length; i++) {
		let songImg = result[i].attributes
		let liImg = `
			<li>
				<div class="cover">
					<img src="${songImg.src}" alt="我的封面">
				</div>
				<p>${songImg.title}</p>
			</li>
		`
		$songImg.append(liImg)
	}
}, function (error) {
	alert("获取歌曲失败")
});

//搜索
$("input.search-input").on('input',function(e){
	let $input = $(e.currentTarget)
	let value = $input.val().trim()  // 防止输入空格
	if (value === '') {return}
	// 查询字符串
	var query = new AV.Query('Song');
	query.contains('name', value);

	query.find().then(function (results) {
		$("#searchResult").empty()
		//搜索没有结果
		if (results.length === 0) {
			$("#searchResult").html("没有结果")
		}else{
			//有结果
			for (var i = 0; i < results.length; i++) {
	    		let song = results[i].attributes
	    		let li = `
					<li data-id="${results[i].id}">
						<a href="song.html?id=${results[i].id}">
							搜索"${song.name} - ${song.singer}"
						</a>
					</li>
	    		`
	    		$('#searchResult').append(li)
	    	}
		}
    	
	});
})

