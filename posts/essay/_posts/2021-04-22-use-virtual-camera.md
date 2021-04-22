
1. 可使用软件（免费or付费）：

   【推荐】 manycam:    https://manycam.com/  

    OBS Studio:     https://obsproject.com/

    等等。。（有一款国内开发的也很好用，忘记名字了）


---

油猴插件：https://www.tampermonkey.net/

脚本：https://greasyfork.org/zh-CN/scripts/425335-lechuangxc

---

### 进阶：

1. 默认相机


    chrome 配置默认相机（地址栏打开）：chrome://settings/content/camera

    其他浏览器类似，设置页面搜索camera 或摄像头


2. 软件配置


    OBS配置可能比较复杂建议使用manyCam

    OBS配置参考：https://tieba.baidu.com/p/6707071068

    else,可能需要在【设备管理器】暂时禁用系统相机


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


    

