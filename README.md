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


问题待修改:
1. 网速慢时图片闪烁
2. 使用函数节流,减少搜索时请求次数
3. transform动画是否会覆盖以前的transform

