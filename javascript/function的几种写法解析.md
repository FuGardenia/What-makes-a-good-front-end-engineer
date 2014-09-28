理解分析function
===
1、基本函数
	
	function a(){
		console.log("Hello World!");
	}
运行
>  
	a; 
> 
  function a(){
		console.log("Hello World!");
	}

> 
	a();
>
Hello World!

2、带参数函数

	function a(b){
		console.log(a);
	}
运行
>
	a(3);
3

3、字面量形式申明函数

	var a = function b(c){
		console.log(c);
	}
运行
> 
	a
function b(c){
		console.log(c);
	}
>   
	a(3);
3
>
	b(3);
undefined

4、

	var a = function(){
		console.log("c");
	}