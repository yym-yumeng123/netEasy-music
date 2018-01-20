### 链接二维码
![](https://i.loli.net/2018/01/18/5a605e4728bb4.png)

### netEasy-music
网易云音乐移动端

- 百分百像素级还原
- flex布局
- 原生js实现
- 模拟数据

```
防止margin合并
.noCollapse::after{
  content:'';
  display:table;
}
.noCollapse::before{
  content:'';
  display:table;
}
```

```
背景模糊 变暗

filter: blur(100px) brightness(.2);
```


遇到问题待修改:
1. 网速慢时图片闪烁
2. 使用函数节流,减少搜索时请求次数
3. transform动画是否会覆盖以前的transform
4. git问题
```
$ git pull

Pull is not possible because you have unmerged files.
Please, fix them up in the work tree, and then use 'git add/rm <file>'
as appropriate to mark resolution, or use 'git commit -a'

应该是因为local文件冲突了

解决方法：
1.pull会使用git merge导致冲突，需要将冲突的文件resolve掉 git add -u, git commit之后才能成功pull.
2.如果想放弃本地的文件修改，可以使用git reset --hard FETCH_HEAD，FETCH_HEAD表示上一次成功git pull之后形成的commit点。然后git pull.
注意：
git merge会形成MERGE-HEAD(FETCH-HEAD) 。git push会形成HEAD这样的引用。HEAD代表本地最近成功push后形成的引用。
```
5. 填数据时js里a的链接相对于html写的,没有考虑是填充后的路径