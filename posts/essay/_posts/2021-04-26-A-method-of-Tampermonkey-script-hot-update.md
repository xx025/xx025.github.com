# 一种油猴（Tampermonkey）脚本热更新的方法

>有些时候我们希望为用户解决更多的麻烦，就比如油猴脚本的更新，在一定的编写经历中我发现了一种脚本热更新的方法。

**其原理也很简单，就是：每次打开网页都请求新的脚本。**


较为简单的我们可以使用`@require`属性,这样脚本每次执行的时候我们都会向其指向的地址请求外部资源。和这种方法类似的还用另一种小技巧来实现,就是每次脚本执行只做一件事情，就是向html head 标签中插入一个新的`<script >` 标签,指向一个外部资源地址（同时这种方法还可以用于脚本开发的本地测试，<font color="#dd0000">和绕过GreasyFork的require安全限制</font>）。

上面的两种方案都有一个不好的地方——缓存的存在使得浏览器可能并不及时请求新的脚本资源。这样我们就有了新的小技巧，这种小技巧可以用在插入`<script>`标签这中方法。我们可以为请求地址加上一个参数就比如
```js
<script type="text/javascript" src="url?动态的参数"></script>
```

通过这种设置就解决了浏览器缓存的问题，实现油猴脚本每次都请求新的脚本。

至于用于热更新脚本的存储地址，我知道的可以选择的有GresyFork提供的库功能(去掉版本号即可)，也可以存储在github上使用jsDelivr 提供的CDN加速（但jsDelivr不能提供及时的更新有可能最高长达24小时的更新时延，建议选择前一种，这样间接的又没有违反GreasyFork安全限制）
```
jsdelivr链接写法：https://cdn.jsdelivr.net/gh/用户名/库名@main/路径/xx.js
greasfork连接写法：https://greasyfork.org/scripts/xxx/code/xxx.js[把官方提供的删掉版本号即可]
```

一个例子：

```
// ==UserScript==
// @name         new
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  description
// @author       you
// @match        *://*/*
// @grant        none
// ==/UserScript==
window.onload = (function () {
    function appendJQCDN(src) {
        var head = document.head || document.getElementsByTagName('head')[0];
        if (src.indexOf("js") == -1) { //css
            var style = document.createElement('style');
            style.setAttribute("rel", "stylesheet");
            style.setAttribute("href", src);
            head.appendChild(style);
        } else {
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.setAttribute("src", src);
            head.appendChild(script);
        }
    };
    let nocache = new Date().getTime();
    let url = "http://code.jquery.com/jquery-migrate-1.2.1.min.js";//真正的脚本地址
    appendJQCDN(url + "?" + nocache);
})();
```






