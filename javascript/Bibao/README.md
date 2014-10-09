闭包(closure)
===
闭包就是将函数内部和函数外部连接起来的一座桥梁。

>最大用处有两个:
	一个是前面提到的可以读取函数内部的变量，
	另一个就是让这些变量的值始终保持在内存中。

###闭包
>

	function f1(){
	　　var n=999;
	　　nAdd=function(){n+=1}
	　　function f2(){
	　　　　alert(n);
	　　}
	　　return f2;
	}
	var result=f1();
	result(); // 999
	nAdd();  //能够访问，因为没有用var 定义，所以是全局变量。
	result(); // 1000
-------
	(function(a){
		this.c = 1; 
		alert(this.c);
	})();
	//1

---------
###闭包与this  

	var name = "The Window";
	var object = {
	　　name : "My Object",
	　　getNameFunc : function(){
	　　　　return function(){
	　　　　　　return this.name;
	　　　　};
	　　}
	};
	alert(object.getNameFunc()());
	//The Window

闭包却在运行时指向window的,因为闭包并不属于这个对象的属性或方法。

	var name = "The Window";
	var object = {
	　　name : "My Object",
	　　getNameFunc : function(){
			var that = this;
	　　　　return function(){
	　　　　　　return that.name;
	　　　　};
	　　}
	};
	alert(object.getNameFunc()());
	//My Object