#HTML
>
[DOCTYPE](#DOCTYPE)
>
[标签](#biaoqian)
>>[块级元素](#kuaijiyuansu)<br/>
[行级元素](#hangjiyuansu)<br/>
[行内元素与块级函数的三个区别](#khqubie)<br/>
[可变元素列表](#kebianyuansu)<br/>
[行内元素转换为块级元素](#zhuanhuan)<br/>
>
[XHTML需注意](#xhtml)
>
[语义化](#yuyihua)

<a href="" id="DOCTYPE"></a>
##DOCTYPE
标签完整格式为<!DOCTYPE>只有确定了一个正确的文档类型，超文本标记语言或可扩展超文本标记语言中的标签和层叠样式表才能生效，甚至对JavaScript脚本都会有所影响。

HTML5

	<!DOCTYPE html>

XHTML 有多个

	Strict 严格
	Transitional 过渡
	Frameset 框架

<a id="biaoqian" ></a>
##标签
###按性质划分
<a id="kuaijiyuansu" ></a>
####标签块级元素Block-Level
>

	<address>	定义地址
	<caption>	定义表格标题
	<dd>	定义列表中定义条目
	<div>	定义文档中的分区或节
	<dl>	定义列表
	<dt>	定义列表中的项目
	<fieldset>	定义一个框架集
	<form>	创建 HTML 表单
	<h1>	定义最大的标题
	<h2>	定义副标题
	<h3>	定义标题
	<h4>	定义标题
	<h5>	定义标题
	<h6>	定义最小的标题
	<hr>	创建一条水平线
	<legend>	元素为 fieldset 元素定义标题
	<li>	标签定义列表项目
	<noframes>	为那些不支持框架的浏览器显示文本，于 frameset 元素内部
	<noscript>	定义在脚本未被执行时的替代内容
	<ol>	定义有序列表
	<ul>	定义无序列表
	<p>	标签定义段落
	<pre>	定义预格式化的文本
	<table>	标签定义 HTML 表格
	<tbody>	标签表格主体（正文）
	<td>	表格中的标准单元格
	<tfoot>	定义表格的页脚（脚注或表注）
	<th>	定义表头单元格
	<thead>	标签定义表格的表头
	<tr>	定义表格中的行
<a id="hangjiyuansu" ></a>
####行级元素Inline-Level
>

	<a>	标签可定义锚
	<abbr>	表示一个缩写形式
	<acronym>	定义只取首字母缩写
	<b>	字体加粗
	<bdo>	可覆盖默认的文本方向
	<big>	大号字体加粗
	<br>	换行
	<cite>	引用进行定义
	<code>	定义计算机代码文本
	<dfn>	定义一个定义项目
	<em>	定义为强调的内容
	<i>	斜体文本效果
	<img>	向网页中嵌入一幅图像
	<input>	输入框
	<kbd>	定义键盘文本
	<label>	标签为 input 元素定义标注（标记）
	<q>	定义短的引用
	<samp>	定义样本文本
	<select>	创建单选或多选菜单
	<small>	呈现小号字体效果
	<span>	组合文档中的行内元素
	<strong>	语气更强的强调的内容
	<sub>	定义下标文本
	<sup>	定义上标文本
	<textarea>	多行的文本输入控件
	<tt>	打字机或者等宽的文本效果
	<var>	定义变量

<a id="kebianyuansu"></a>
####可变元素列表
可变元素为根据上下文语境决定该元素为块元素或者内联元素
>

	<button>	按钮
	<del>	定义文档中已被删除的文本
	<iframe>	创建包含另外一个文档的内联框架（即行内框架）
	<ins>	标签定义已经被插入文档中的文本
	<map>	客户端图像映射（即热区）
	<object>	object对象
	<script>	客户端脚本

<a id="khqubie" ></a>
#####行内元素与块级函数的三个区别

1. 行内元素与块级元素直观上的区别
	行内元素会在一条直线上排列，都是同一行的，水平方向排列
	块级元素各占据一行，垂直方向排列。块级元素从新行开始结束接着一个断行。

2. 块级元素可以包含行内元素和块级元素。行内元素不能包含块级元素。

3. 行内元素与块级元素属性的不同，主要是盒子模型属性上
	行内元素设置width无效，height无效(可以设置line-height)，margin上下无效，padding上下无效

<a href="" id="zhuanhuan"></a>
#####行内元素转换为块级元素

	display:block;

###按语义划分
+ Headings: h1, h2, h3, h4, h5, h6
+ Paragraphs: p
+ Text Formatting: em, strong, sub, del, ins, small
+ Lists: ul, li, ol, dl, dt, dd
+ Tables: table, thead, tbody, tr, th, td
+ Forms and Input: form, input, select, textarea
+ Others: div, span, a, img, <!---->
+ HTML5: header, footer, article, section

<a href="" id="xhtml"></a>
#XHTML需注意
XHTML 于2000年的1月26日成为 W3C 标准。W3C 将 XHTML 定义为最新的HTML版本。XHTML 将逐渐取代 HTML。XHTML是通过把 HTML 和 XML 各自的长处加以结合形成的。XHTML 语法规则如下：

+ 属性名和标签名称必须小写
+ 属性值必须加引号
+ 属性不能简写
+ 用 Id 属性代替 name 属性
+ XHTML 元素必须被正确地嵌套
+ XHTML 元素必须被关闭

<a id="yuyihua" ></a>
#[标签的语义化](http://www.cnblogs.com/freeyiyi1993/p/3615179.html)

> 好处

>> 便于开发者阅读和写出更优雅的代码

>> 让浏览器的爬虫和机器很好地解析

>> 没有CSS的情况下，页面也能呈现出很好地内容结构

>> 用户体验

>> 有利于SEO

>> 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）

>> 便于团队开发和维护

**为表达语义而标记文档，而不是为了样式。**结构良好的文档可以向浏览器传达尽可能多的语义，不论是浏览器位于掌上电脑还是时髦的桌面图形浏览器。结构良好的文档都能向用户传达可视化的语义，即使是在老的浏览器，或是在被用户关闭了 CSS 的现代浏览器中。同时结构良好的HTML代码也有助于搜索引擎索引你的网站。

+ 不要使用table布局，table是用来表格显示的。
+ 不要到处滥用div标签，div是用来分块用的。
+ 尽可能少的使用无语义的标签div和span
+ 不要使用样式标签，如font, center, big, small, b, i，样式可以用CSS来控制，b和i可以用strong和em来代替。
+ 不要使用换行标签`<br />`和空格来控制样式，请用CSS。
+ 尽量不要使用内联CSS
+ 使用表格时，标题要用caption，表头用thead，主体部分用tbody包围，尾部用tfoot包围。表头和一般单元格要区分开，表头用th，单元格用td；
+ 表单域要用fieldset标签包起来，并用legend标签说明表单的用途；
+ 每个input标签对应的说明文本都需要使用label标签，并且通过为input设置id属性，在lable标签中设置for=someId来让说明文本和相对应的input关联起来。



