原型(prototype)
===
【对象】Object();        <br/>
【工厂模式】createObject(name, age);<br/>
【构造函数】Box(name, age);        <br/>
【对象冒充】        <br/>
【原型prototype】        <br/>
【字面量方式创建原型】<br/>

面向对象
--------
###【对象】Object();
	var box = new Object(); //创建一个 Object 对象
	box.name = 'Lee'; //创建一个 name 属性并赋值
	box.age = 100; //创建一个 age 属性并赋值
	box.run = function () { //创建一个 run()方法并返回值
		return this.name + this.age + '运行中...';
	};
	alert(box.run; //输出属性和方法的值
	alert(box.run()); //输出属性和方法的值

>

	var box2 = box; //得到 box 的引用
	box2.name = 'Jack'; //直接改变了 name 属性
	alert(box2.run()); //用 box.run()发现 name 也改变了

想创建一个类似的对象， 就会产生大量的代码。

	var box2 = new Object();
	box2.name = 'Jack';
	box2.age = 200;
	box2.run = function () {
		return this.name + this.age + '运行中...';
	};
	alert(box2.run()); //这样才避免和 box 混淆，从而保持独立

> 
解决多个类似对象声明的问题

###【工厂模式】  解决实例化对象产生大量重复的问题

	function createObject(name, age) { //集中实例化的函数
		var obj = new Object();
		obj.name = name;
		obj.age = age;
		obj.run = function () {
			return this.name + this.age + '运行中...';
		};
		return obj;
	}

>

	var box1 = createObject('Lee', 100); //第一个实例
	var box2 = createObject('Jack', 200); //第二个实例
	alert(box1.run());
	alert(box2.run()); //保持独立

>

工厂模式解决了**实例化重复**问题，但是无法解决**识别问题**。

	alert(typeof box1); //Object
	alert(box1 instanceof Object); //true
	alert(typeof box2); //Object
	alert(box2 instanceof Object); //true


###【构造函数】创建特定对象，解决**对象实例化问题**，同时解决了**识别问题**

	function Box(name, age) { //构造函数模式
			this.name = name;
			this.age = age;
		this.run = function () {
			return this.name + this.age + '运行中...';
		};
	}

	function Desk(name, age) { //构造函数模式
			this.name = name;
			this.age = age;
		this.run = function () {
			return this.name + this.age + '运行中...';
		};
	}

	var box1 = new Box('Lee', 100); //new Box()即可
	var box2 = new Box('Jack', 200);
	var box3 = new Desk('Jack', 200);
	alert(box1.run());
	alert(box1 instanceof Object); //true
	alert(box1 instanceof Box);
	alert(box2 instanceof Box); 
	alert(box3 instanceof Box);  //flase//很清晰的识别他不从属于 Box

1. 构造函数方法没有显示的创建对象(new Object())；
2. 直接将属性和方法赋值给 this 对象；
3. 没有 renturn 语句。

构造函数的方法有一些规范：

1. 函数名和实例化构造名相同且大写
2. 通过构造函数创建对象，必须使用 new 运算符。


###【对象冒充】

	var O = new Object();
	Box.call(O,'li','25');

	var box1 = new Box('Lee', 100); //传递一致
	var box2 = new Box('Lee', 100); //同上
	alert(box1.name == box2.name); //true，属性的值相等
	alert(box1.run == box2.run); //false，方法其实也是一种**引用地址**
	alert(box1.run() == box2.run()); //true，方法的值相等，因为传参一致

###【原型prototype】
***所有实例共享属性和方法***

多了两个属性,<br/>
__proto__属性是实例指向原型对象的一个指针，<br/>
它的作用就是指向构造函数的原型属性 constructor。<br/>

判断一个对象是否指向了该构造函数的原型对象， 可以使用 isPrototypeOf()方法来测试。

	alert(Box.prototype.isPrototypeOf(box)); //只要实例化对象，即都会指向

可以通过对象实例访问保存在原型中的值， <br/>但却不能访问通过对象实例重写原
型中的值。

如何判断属性是在构造函数的***实例***里，还是在原型里？可以使用 hasOwnProperty()函数
来验证：

	alert(box.hasOwnProperty('name')); //实例里有返回 true，否则返回 false

in 操作符会在通过对象能够访问给定属性时返回 true， 无论该属性存在于***实例***中还是***原
型***中。

	alert('name' in box); //true，存在实例中或原型中

	function isProperty(object, property) { //判断原型中是否存在属性
		return !object.hasOwnProperty(property) && (property in object);
	}



###【字面量方式创建原型】更好的体现封装的效果， 并且减少不必要的输入
重写的原型会切断之前的原型

	function Box() {};
	Box.prototype = { //使用字面量的方式
		name : 'Lee',
		age : 100,
		run : function () {
			return this.name + this.age + '运行中...';
		}
	};

