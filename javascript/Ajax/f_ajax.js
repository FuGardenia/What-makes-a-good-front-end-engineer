/*
Asynchronous JavaScript + XML

XMLHttpRequest

var xhr = new XMLHttpRequest();
alert(xhr);
*/
/*创建XMLHttpRequest对象，也就是创建一个异步调用对象*/
function createXHR(){
	if(typeof XMLHttpRequest != 'undefined'){
		return new XMLHttpRequest();
	}else if (typeof ActiveXObject != 'undefined'){
		var versions = [
			'MSXML2.XMLHttp.6.0',
			'MSXML2.XMLHttp.3.0',
			'MSXML2.XMLHttp'
		];

		for(var i=0;i<versions.length;i++){
			try{
				return new ActiveXObject(version[i]);
			}catch(e){
				//跳过
			}
		}
	}else{
		throw new Error('您的浏览器不支持XMLHttpRequest对象！')
	}
}



//名值对编码
function params(data) {
	var arr = [];
	for (var i in data) {
		arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
	}
	return arr.join('&');
}

//封装 Ajax
function ajax(obj) {
	var xhr = new createXHR();
	obj.url = obj.url + "?rand=" +Math.random();
	obj.data = params(obj.data);
	if(obj.method === 'get') {
		obj.url = obj.url.indexOf('?') == -1 ? obj.url + '?' + obj.data : obj.url + '&' + obj.data;
	}

	if(obj.async === true){
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4) callback();
		};
	}
	xhr.open(obj.method,obj.url,obj.async);
	if(obj.method === 'post'){
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhr.send(obj.data);
	}else{
		xhr.send(null);
	}
	if(obj.async === false){
		callback();
	}
	function callback(){
		if(xhr.status == 200){
			obj.success(xhr.responseText);
		}else{
			alert('数据返回失败！状态码：'+xhr.status+',状态信息：'+xhr.statusText);
		}
	}
}


//调用 ajax
/*addEvent(document, 'click', function () { //IE6 需要重写 addEvent
	ajax({
		method : 'get',
		url : 'demo.php',
		data : {
		'name' : 'Lee',
		'age' : 100
	},
	success : function (text) {
		alert(text);
	},
	async : true
	});
});*/
