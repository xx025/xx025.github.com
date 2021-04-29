

1. **如需远程协助请安装ToDesk：[ToDesk官网](https://www.todesk.com/)**

2. **如果您不具备安装和使用一款软件的基本能力，本人不建议使用**


---

1. 安装Edge(大概率电脑自带了)\火狐或chrome等任意一款浏览器 \

    **原则上除下图以外的都可以**

    **如果安装了就进行第二步**

    ![](https://cdn.jsdelivr.net/gh/xx025/cloudimg@main/img/20210426140546.png)


2. 安装虚拟相机ManyCam: [官网](https://manycam.com/) \ [下载](https://download3.manycams.com/installer/ManyCamSetup.exe)

    1. 安装完之后将一张大头照设置为虚拟摄像头显示内容

    2. <font color="#dd0000">安装完请先进去课程观看页观看是否设置成功</font> 

    ![](https://cdn.jsdelivr.net/gh/xx025/cloudimg@main/img/20210426140437.png)




3. 安装 [油猴插件Tampermonkey](https://www.tampermonkey.net/) 
    
    \ 有替代品，个人推荐，更多见 [Greasfork官网](https://greasyfork.org/zh-CN)

    支持浏览器：Tampermonkey 是一款免费的浏览器扩展和最为流行的用户脚本管理器，它适用于 Chrome, Microsoft Edge, Safari, Opera Next, 和 Firefox。\

    ![](https://cdn.jsdelivr.net/gh/xx025/cloudimg@main/img/2021-04-24_07-01-02.png)




4. [安装脚本](https://greasyfork.org/zh-CN/scripts/398362-lechuangxc)


    最后一步啦：[安装脚本](https://greasyfork.org/zh-CN/scripts/398362-lechuangxc)

    ![](https://cdn.jsdelivr.net/gh/xx025/cloudimg@main/img/20210424070254.png)

5. <font color="green">如果第二步没问题，那么一切就绪，只需登录打开点击一个视频播放，剩下的事情全部交给JavaScript脚本完成</font>


---

# 进阶：

1. 可使用软件（免费or付费）：

   【推荐，简洁易操作】 manycam:    https://manycam.com/  

    【功能强大】OBS Studio:     https://obsproject.com/

    等等。。（有一款国内开发的也很好用，忘记名字了）



1. 默认相机


    chrome 配置默认相机（地址栏打开）：chrome://settings/content/camera

    其他浏览器类似，设置页面搜索camera 或摄像头


2. 软件配置


    1. OBS配置可能比较复杂建议使用manyCam

    2. OBS比较强大但配置复杂
    
        OBS支持多种媒体格式也支持各种高阶设置
     
        OBS配置参考：  
            1. https://tieba.baidu.com/p/6707071068  
            2. https://www.bilibili.com/read/cv6583793


    3. 可能需要在【设备管理器】暂时禁用系统相机


3. 调试

   chrome调用摄像头并拍照： https://blog.csdn.net/frank_fong/article/details/88861658

    ```html
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>摄像头拍照</title>
    </head>
    <body>
    <video id="video" width="480" height="320" controls>
    </video>
    <div>
        <button id="capture">拍照</button>
    </div>
    <canvas id="canvas" width="480" height="320"></canvas>
    <script>
        //访问用户媒体设备的兼容方法
        function getUserMedia(constraints, success, error) {
        if (navigator.mediaDevices.getUserMedia) {
            //最新的标准API
            navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
        } else if (navigator.webkitGetUserMedia) {
            //webkit核心浏览器
            navigator.webkitGetUserMedia(constraints,success, error)
        } else if (navigator.mozGetUserMedia) {
            //firfox浏览器
            navigator.mozGetUserMedia(constraints, success, error);
        } else if (navigator.getUserMedia) {
            //旧版API
            navigator.getUserMedia(constraints, success, error);
        }
        }
    
        let video = document.getElementById('video');
        let canvas = document.getElementById('canvas');
        let context = canvas.getContext('2d');
    
        function success(stream) {
        //兼容webkit核心浏览器
        let CompatibleURL = window.URL || window.webkitURL;
        //将视频流设置为video元素的源
        console.log(stream);
    
        //video.src = CompatibleURL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
        }
    
        function error(error) {
        console.log(`访问用户媒体设备失败${error.name}, ${error.message}`);
        }
    
        if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
        //调用用户媒体设备, 访问摄像头
        getUserMedia({video : {width: 480, height: 320}}, success, error);
        } else {
        alert('不支持访问用户媒体');
        }
    
        document.getElementById('capture').addEventListener('click', function () {
        context.drawImage(video, 0, 0, 480, 320);      
        })
    </script>
    </body>

    ```

附加：  
   
   HTML5视频变速(最高X16)：https://github.com/igrigorik/videospeed


    

