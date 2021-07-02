1. 可使用软件（免费or付费）：
   1. 【推荐，简洁易操作】 ManyCam:    https://manycam.com/  
   2. 【功能强大】OBS Studio:     https://obsproject.com/
   3. 【国产软件也很好用，支持视频照片】MVBOX：http://www.mvbox.cn/
2. 默认相机


    chrome 配置默认相机（地址栏打开）：chrome://settings/content/camera
    
    其他浏览器类似，设置页面搜索camera 或摄像头

3. 软件配置


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




​    



