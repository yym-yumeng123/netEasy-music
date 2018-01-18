

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
		 