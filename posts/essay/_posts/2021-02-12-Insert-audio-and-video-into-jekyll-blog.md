---

layout: post
title: 怎么向jekyll博客中插入音频（MP3、MP4等）
---

参考这两篇文章

- [jekyll个人博客中添加音乐播放插件](https://juejin.cn/post/6844903693754564616)
- [pen embed](https://jekyllcodex.org/without-plugin/open-embed/#)

通过上面的文章大概就知道如何插入mp3文件



当然看完上两篇文章中写的，也就明白了插入媒体文件时怎样一回事

---

下面是我插入的一个音乐和一个视频：

<p>https://cdn.jsdelivr.net/gh/xx025/cloudimg/img/20210128125550.mp4</p>


电影：恶人报喜

<p>https://cdn.jsdelivr.net/gh/xx025/cloudimg/img/20210212074612.mp3?autoplay=1&loop=1</p>


歌曲：Dream It Possible

---

向网上的很多关于html5教程选择一个通过了解[`HTML 5 视频`](https://www.w3school.com.cn/html5/html_5_video.asp) 和[`HTML 5 音频`](https://www.w3school.com.cn/html5/html_5_audio.asp) 也就知道了如何控制音频媒体的播放设置，就比如本文中的自动播放的音乐

我在文章中插入的连接格式如下

```html
<p>https://cdn.jsdelivr.net/gh/xx025/cloudimg/img/20210128125550.mp4</p>
<p>https://cdn.jsdelivr.net/gh/xx025/cloudimg/img/20210212074612.mp3?autoplay=1&loop=1</p>
```



在`open-embed.html`添加和改写的两个函数如下

```html
    function mp3_embed() {
        var p = document.getElementsByTagName('p');
        for (var i = 0; i < p.length; i++) {
            if (p[i].innerHTML.indexOf('.mp3') !== -1) {
                var mp3 = p[i].innerHTML.split('?');
                var mp3url = mp3[0];
                var mp3par = ' ';
                if (mp3.length == 2) {
                    if (mp3[1].indexOf('autoplay=1') > -1) mp3par += ' autoplay ';
                    if (mp3[1].indexOf('loop=1') > -1) mp3par += ' loop ';
                    if (!(mp3[1].indexOf('controls=0') > -1)) mp3par += ' controls ';
                    if (mp3[1].indexOf('preload=1') > -1) mp3par += ' preload ';
                    console.log(mp3par)
                }
                var newInnerHTML = `<audio ${mp3par} > <source src="${mp3url}" type="audio/mpeg">Your browser does not support the audio element.</audio>  `;
                p[i].innerHTML = newInnerHTML;
            }
        }
    }
    mp3_embed();
    function mp4_embed() {
        var p = document.getElementsByTagName('p');
        for (var i = 0; i < p.length; i++) {
            if (p[i].innerHTML.indexOf('.mp4') !== -1) {
                var mp4 = p[i].innerHTML.split('?');
                var mp4url = mp4[0];
                var mp4par = "controls"
                var newInnerHTML = `<video ${mp4par} style="width:100%; height:100%; object-fit: fill;"> <source src="${mp4url}" type="video/mp4"> Your browser does not support the video tag. </video>`;
                p[i].innerHTML = newInnerHTML;

            }
        }
    }
    mp4_embed();
```

其中第一个函数是改写的mp3播放，第二个是mp4播放，我改写的这两个可能有时候并不能正常工和视频作，但只要通过学习HTML5音频理解其中代码段的含义改写并不是一件复杂的事


如果只想像我这样简单的设置复制上面的两个函数覆盖掉文章开始提到的文章中`open-embed.html`文件中mp3_embed()就好了