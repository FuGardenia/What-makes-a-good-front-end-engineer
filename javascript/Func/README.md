javascript方法
===
它存在于当前上下文的任意一个地方，即使在函数定义体的上面被调用也是对的.


	fun();    //能够正常运行，因为fun方法在这行代码运行前已经被创建了
	function fun(){
	    ...
	}

由于var定义了一个声明语句，对变量fun的解析是在代码运行之前，因此fun变量在代码运行时已经被定义过了。

但是由于赋值语句只在运行时执行，因此在相应代码执行之前，fun的值缺省为undefined。

	fun;    //'undefined'
	fun();    //出错：TypeError
	var fun = function() { ... };

另外一个特殊的情况是将命名函数赋给一个变量。

bar函数在函数声明外是不可见的，这是因为我们已经把函数赋值给了fun；然后在bar函数内部依然可见。

这是由于JavaScript的命名处理所致，函数名在函数内总是可见的。

	var fun = function bar(){
	    bar();    //正常运行
	}
	bar();    //出错：ReferenceError