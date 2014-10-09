浏览器本地存储
===
[常用浏览器本地存储的几种方案对比](http://daybook.diandian.com/post/2013-05-23/40050598904)

[兼容多浏览器的本地存储](http://blog.csdn.net/laner0515/article/details/21541211)

cookie
---
如果cookie不设定时间的话就表视它的生命周期为浏览器会话的期间,只要关闭IE,cookie就消失了
这种cookie被称为会话cookie.其一般不保存在硬盘上.而是保存在内存中.

弊端：泄露隐私。

如果设置了过期时间.那么浏览器会把cookie保存到硬盘中,再次打IE时会依然有效.直到它的有效期
超时;

注:存储在硬盘中的cookie可以在不同IE间共享;

Flash ShareObject
---
缺点：需要安装Flash插件。

Google Gear
---
缺点：需要安装Gear组件。

userData
---
缺点：它仅在IE下有效。

sessionStorage
---
缺点：IE不支持、不能实现数据的持久保存。

globalStorage
---
缺点：IE不支持。

localStorage
---
缺点：低版本浏览器不支持。

结论：
Flash shareobject是不错的选择，如果你不想在页面上嵌入Flash，可以结合使用userData(IE6+)和globalStorage(Firefox2+)和localStorage(chrome3+)实现跨浏览器。


服务器端存储session
===
流程：

1. 当新客户端发送一个HTTP请求时服务端会创建一个session.

2. 并分配一个sessionID作为服务端来客户端的识别,session对象会保存在服务端.
(此时session对象处天NEW STATE状态,如果调用 session.isNew()则返回true.)

3. 当服务器处理完后,会将sessionID同reponse 一起传回客户端,并将其存到cookie中;

4. 当客户端再发送请求的时候.会将sessionID连同request一起发送给服务端;

5. 服务端再根据传过来的sessionID将这次request与保存在服务端的session对象联系起来.(此时的session对象已不是NEW STATE状态.)

这样循环多次.直到超时或销毁.

注:当禁用cookie时，是不能使用session的;

如果在禁用cookie下使用session，把sessionID附着在URL中。
