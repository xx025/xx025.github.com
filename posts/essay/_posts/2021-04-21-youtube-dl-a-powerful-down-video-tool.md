安装：`pip install youtube-dl`

下载：`youtube-dl url(视频地址)`

​	如：`youtube-dl https://www.bilibili.com/video/BV16K4y1o7zm`

项目地址：https://github.com/ytdl-org/youtube-dl

---

1. 下载路径的设置

   默认下载路径是当前所在目录，通过pwd命令可以查看当前目录路径

   1. 可用通过cd命令进入目标目录执行下载命令

      如：`youtube-dl https://www.bilibili.com/video/BV16K4y1o7zm`

   2. 通过设置-o参数指定下载路径

      ````
      youtube-dl -o 'Path(路径)\%(title)s.%(ext)s' url(视频地址)
      ````

      如：`youtube-dl -o 'D:\Download\youtube-dl\%(title)s.%(ext)s' https://www.bilibili.com/video/BV16K4y1o7zm`

   3. 通过设置默认路径位置

      配置：`C:\Users\username(用户名)\AppData\Roaming\youtube-dl\config.txt`（如果不存在需要自行创建）

      `config.txt`写入内容如下

      ````
      -o 'Path(目录)\%(title)s.%(ext)s'
      ````

      如：`-o 'D:\Download\youtube-dl\%(title)s.%(ext)s'`





