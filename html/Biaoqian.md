标签
===

code pre
---
在介绍语言技术的网站中，必免不了在网页中显示一些计算机专业的编程代码，当代码为一行代码时，你就可以使用`<code>`标签了，如下面例子：

	<code>var i=i+300;</code>
注意：在文章中一般如果要插入多行代码时不能使用`<code>`标签了。
语法：

	<code>代码语言</code>
注：如果是多行代码，可以使用`<pre>`标签。

	<pre>
		function niHao(){
			alert("Hello");
		}
	</pre>

label
---
label标签不会向用户呈现任何特殊效果，它的作用是为鼠标用户改进了可用性。如果你在 label 标签内点击文本，就会触发此控件。就是说，当用户单击选中该label标签时，浏览器就会自动将焦点转到和标签相关的表单控件上（就自动选中和该label标签相关连的表单控件上）。

	<label for="male">男</label>
  	<input type="radio" name="sex" id="male" />