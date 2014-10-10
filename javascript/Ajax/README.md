AJAX
===
实现异步调用和局部刷新。

1. 创建XMLHttpRequest对象，也就是创建一个异步调用对象

	var xhr = createXHR();

2. 创建一个新的HTTP请求，并指定该HTTP请求的方法，URL及验证信息

	xhr.open('get','demo.php',false);
	//请求类型（get post）、请求URL、是否异步
3. 设置响应HTTP请求状态变化的函数

	
4. 发送HTTP请求

	xhr.send(null);

5. 获取异步调用返回的数据

	<table   style="border:1px #000 solid;">
	<tr><td>属性名</td> <td>说明</td></tr>
	<tr><td>responseText</td> <td>作为响应主体被返回的文本</td></tr>
	<tr><td>responseXML</td> <td> 如果响应主体内容类型是"text/xml"或"application/xml"，则返回包含响应数据的 XML DOM 文档</td></tr>
	<tr><td>status</td> <td>响应的 HTTP 状态</td></tr>
	<tr><td>statusText</td> <td>HTTP 状态的说明</td></tr>
	</table>

		同步调用固然简单，但使用异步调用才是我们真正常用的手段。使用异步调用的时候，
		需要触发 readystatechange 事件，然后检测 readyState 属性即可。这个属性有五个值：

	<table  style="border:1px #000 solid;">
	<tr><td>值</td> <td>状态</td> <td>说明</td></tr>
	<tr><td>0</td> <td>未初始化</td> <td>尚未调用 open()方法</td></tr>
	<tr><td>1</td> <td>启动</td> <td>已经调用 open()方法，但尚未调用 send()方法</td></tr>
	<tr><td>2</td> <td>发送</td> <td>已经调用 send()方法，但尚未接受响应</td></tr>
	<tr><td>3</td> <td>接受</td> <td>已经接受到部分响应数据</td></tr>
	<tr><td>4</td> <td>完成</td> <td>已经接受到全部响应数据，而且可以使用</td></tr>
	</table>

6. 使用javascript和DOM实现局部刷新

	实例

		addEvent(document, 'click', function () {
			var xhr = new createXHR();
			xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					alert(xhr.responseText);
				} else {
					alert('数据返回失败！状态代码：' + xhr.status + '状态信息：'
					+ xhr.statusText);
				}
			}
			};
			xhr.open('get', 'demo.php?rand=' + Math.random(), true);
			xhr.send(null);
		});

jQuery Ajax
===
<style type="text/css">
table {
display: table;
border-collapse: separate;
border-spacing: 2px;
border-color: gray;
}
table {
font-family: Arial, Helvetica, sans-serif;
margin-top: 10px;
border-collapse: collapse;
border: 1px solid #888;
width: 100%;
}
table th {
vertical-align: baseline;
padding: 5px 15px 5px 5px;
background-color: #ccc;
border: 1px solid #888;
text-align: left;
}
table td {
vertical-align: text-top;
padding: 5px 15px 5px 5px;
background-color: #efefef;
border: 1px solid #aaa;
}
</style>
<table class="dataintable">

<tbody><tr>

<th>函数</th>

<th>描述</th>

</tr>



<tr>

<td><a href="http://www.w3cschool.cn/ajax_ajax.html" title="jQuery ajax - ajax() 方法">jQuery.ajax()</a></td>

<td>执行异步 HTTP (Ajax) 请求。</td>

</tr>



<tr>

<td><a href="http://www.w3cschool.cn/ajax_ajaxcomplete.html" title="jQuery ajax - ajaxComplete() 方法">.ajaxComplete()</a></td>

<td>当 Ajax 请求完成时注册要调用的处理程序。这是一个 Ajax 事件。</td>

</tr>



<tr>

<td><a href="http://www.w3cschool.cn/ajax_ajaxerror.html" title="jQuery ajax - ajaxError() 方法">.ajaxError()</a></td>

<td>当 Ajax 请求完成且出现错误时注册要调用的处理程序。这是一个 Ajax 事件。</td>

</tr>



<tr>

<td><a href="http://www.w3cschool.cn/ajax_ajaxsend.html" title="jQuery ajax - ajaxSend() 方法">.ajaxSend()</a></td>

<td>在 Ajax 请求发送之前显示一条消息。</td>

</tr>



<tr>

<td><a href="http://www.w3cschool.cn/ajax_ajaxsetup.html" title="jQuery ajax - ajaxSetup() 方法">jQuery.ajaxSetup()</a></td>

<td>设置将来的 Ajax 请求的默认值。</td>

</tr>



<tr>

<td><a href="http://www.w3cschool.cn/ajax_ajaxstart.html" title="jQuery ajax - ajaxStart() 方法">.ajaxStart()</a></td>

<td>当首个 Ajax 请求完成开始时注册要调用的处理程序。这是一个 Ajax 事件。</td>

</tr>



<tr>

<td><a href="http://www.w3cschool.cn/ajax_ajaxstop.html" title="jQuery ajax - ajaxStop() 方法">.ajaxStop()</a></td>

<td>当所有 Ajax 请求完成时注册要调用的处理程序。这是一个 Ajax 事件。</td>

</tr>



<tr>

<td><a href="http://www.w3cschool.cn/ajax_ajaxsuccess.html" title="jQuery ajax - ajaxSuccess() 方法">.ajaxSuccess()</a></td>

<td>当 Ajax 请求成功完成时显示一条消息。</td>

</tr>



<tr>

<td><a href="http://www.w3cschool.cn/ajax_get.html" title="jQuery ajax - get() 方法">jQuery.get()</a></td>

<td>使用 HTTP GET 请求从服务器加载数据。</td>

</tr>



<tr>

<td><a href="http://www.w3cschool.cn/ajax_getjson.html" title="jQuery ajax - getJSON() 方法">jQuery.getJSON()</a></td>

<td>使用 HTTP GET 请求从服务器加载 JSON 编码数据。</td>

</tr>



<tr>

<td><a href="http://www.w3cschool.cn/ajax_getscript.html" title="jQuery ajax - getScript() 方法">jQuery.getScript()</a></td>

<td>使用 HTTP GET 请求从服务器加载 JavaScript 文件，然后执行该文件。</td>

</tr>



<tr>

<td><a href="http://www.w3cschool.cn/ajax_load.html" title="jQuery ajax - load() 方法">.load()</a></td>

<td>从服务器加载数据，然后把返回到 HTML 放入匹配元素。</td>

</tr>



<tr>

<td><a href="http://www.w3cschool.cn/ajax_param.html" title="jQuery ajax - param() 方法">jQuery.param()</a></td>

<td>创建数组或对象的序列化表示，适合在 URL 查询字符串或 Ajax 请求中使用。</td>

</tr>



<tr>

<td><a href="http://www.w3cschool.cn/ajax_post.html" title="jQuery ajax - post() 方法">jQuery.post()</a></td>

<td>使用 HTTP POST 请求从服务器加载数据。</td>

</tr>



<tr>

<td><a href="http://www.w3cschool.cn/ajax_serialize.html" title="jQuery ajax - serialize() 方法">.serialize()</a></td>

<td>将表单内容序列化为字符串。</td>

</tr>



<tr>

<td><a href="http://www.w3cschool.cn/ajax_serializearray.html" title="jQuery ajax - serializeArray() 方法">.serializeArray()</a></td>

<td>序列化表单元素，返回 JSON 数据结构数据。</td>

</tr>

</tbody></table>



