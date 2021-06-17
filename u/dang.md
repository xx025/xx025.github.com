### 当当网项目：

---

- 设计模式：MVC

![](https://cdn.jsdelivr.net/gh/xx025/cloudimg/img/20210617122749.png)



---

![](https://cdn.jsdelivr.net/gh/xx025/cloudimg/img/20210617124045.png)

---



1. 当当网首页的功能（所有的图书显示在首页的页面上）
   1. 数据库中用到库dang，表d_book，和数据准备好
   2. C控制层 - - `com/lddx/web/DangListServlet.java`
   3. M模型层 -- `com/lddx/dao/DangDao.java`
   4. V视图层 -- `web/booklist.jsp`

2. 节省金额的小数位数处理一下

   DecimalFormat 是 NumberFormat 的一个具体子类，用于格式化十进制数字。

   ```java
   double saveMoney = b.getFixedPrice() - b.getDangPrice();
   DecimalFormat df = new DecimalFormat("#.##");//保留两位小数
   String strMoney = df.format(saveMoney);
   ```

3. 分页查询

   1. C -- `com/lddx/web/BookListServlet1.java`

   2. M -- `com/lddx/dao/impl/BookDaoImpl.java`

      ```java
      String sql = "select * from d_book limit ?,?";
      PreparedStatement prep = con.prepareStatement(sql);
      prep.setInt(1, start);
      prep.setInt(2, num);
      ```

   3. V -- `web/booklist.jsp`

4. 注册页面
   1. 验证码

      1. C控制层 - - `com/lddx/web/CodeImageServlet.java`

   2. 邮箱、昵称等验证

      1. 前端验证邮箱、昵称等格式

         正则：`web/js/register.js`

      2. 后端邮箱查重

         C控制层：`com/lddx/web/CheckEmailServlet.java`

   3. 注册功能

      1. C控制层：-- `com/lddx/web/RegisterServlet.java`
      2. V视图层: -- `web/register.jsp`
      3. M模型层：-- `com.lddx.dao.impl.UserDaoImpl#saveUser`

5. 登陆页面

   C控制层：`com/lddx/web/LoginServlet.java`

   1. 邮箱，密码的登录验证

      `com.lddx.service.UserService#hasUser`

   2. 登录成功，欢迎昵称

      ```java
      //把user对象放入域对象中request，session，ServletContext
      HttpSession session = request.getSession();
      session.setAttribute("user", user);
      ```

      ```jsp
       <c:otherwise>
      <span class="little_n"> 亲，欢迎${user.nickname}
       </c:otherwise>
      ```

   3. 退出的功能

      C控制层：`com/lddx/web/LogoutServlet.java`

6. 购物车的相关功能

   ```java
   session.setAttribute("cart", cart);
   ```

   1. 首页点击购买的功能

      C控制层：`com/lddx/web/BuyServlet.java`

   2. 购物车结算

      C控制层：`com/lddx/web/OrderServlet.java`

      V视图层:`web/order_info.jsp`

   3. 购物车删除

      C控制层：`com/lddx/web/CartDeleteServlet.java`

      V视图层：`web/cart.jsp`

      