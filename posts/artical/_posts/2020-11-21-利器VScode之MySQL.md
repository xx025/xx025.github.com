1. 首先需要安装三个扩展  
    1. SQLTools
    2. SQLTools MySQL/MaraDB
    3. SQL Formatter  
    >附:这个格式化起来比较美观,也可以不安转,第一个扩展也附带格式化功能

    - 三个扩展如下图
        ![D1R3JP.jpg](https://s3.ax1x.com/2020/11/21/D1R3JP.jpg)

2. 对扩展进行些许配置  
    >附:如果没安装SQL Formatter就无需配置了

    进入SQLTools扩展设置将SQLtoolsFormat Language项下的sql移除,这样可以保证SQL Formatter正常工作
    - 具体设置项如下图,已移除sql项
    ![D1f02V.jpg](https://s3.ax1x.com/2020/11/21/D1f02V.jpg)

3. 建立新的连接
    1. 点击VScode活动栏SQLTools
    2. 在出现的页面中点击CONNECTIONS栏中的Add new connections
    3. 在新页面中选择MySQL
    - 操作参考如下图
    ![D15pNj.png](https://s3.ax1x.com/2020/11/21/D15pNj.png)

4. 连接数据库
    - 在下图填入一些具体信息进行连接测试并连接并保存即可

    注意两点:

    >1. 数据库名称虽然可以填连接下的任意数据库,但最好是常用数据库,否则需要一直使用use命令选择要使用的其他数据库

    >2. 在填入密码的时候最好同时选择保存密码

    ![D15dPA.png](https://s3.ax1x.com/2020/11/21/D3VkkD.jpg)


    
