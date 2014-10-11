几何形状用JS继承实现.md
===
![几何图形](../../images/ct.gif)

<code>
<p>
//形状

	function Shape(edge){
		this.edge = edge;
	}
//获取图形的周长

	Shape.prototype.getC =  function(){
		return -1;
	}
//获取形状的面积，类似于接口中的方法，这里先返回-1

	Shape.prototype.getArea  =  function(){
		return -1;
	}
		
	Shape.prototype.getEdge = function() //返回形状的边有多少条
	{ 
		return this.edge; 
	}

//椭圆

	function Ellipse(w,h){
		Shape.call(this,0);
		this.w = w;
		this.h = h;
	}

	Ellipse.prototype = new Shape();

	Ellipse.prototype.getC = function(){
		return 2*Math.PI*this.h/2 + 4*(this.h/2-this.w/2);
		
	}
	
	Ellipse.prototype.getArea = function(){
		return Math.PI*this.w/2*this.h/2;
	}

//圆形基于形状

	function Circle(radius){
			Shape.call(this,0);
			this.radius = radius;
	}

	Circle.prototype = new Shape();
	/*A的prototype为B的一个实例，可以理解A将B中的方法和属性全部克隆了一遍。*/

	Circle.prototype.getC = function(){
		return 2*Math.PI * this.radius;
		
	}
	
//圆形基于椭圆

	function Circle(radius){
			Shape.call(this,0);
			this.radius = radius;
	}

	Circle.prototype = new Shape();
/*A的prototype为B的一个实例，可以理解A将B中的方法和属性全部克隆了一遍。*/

	Circle.prototype.getC = function(){
		return 2*Math.PI * this.radius;
		
	}
	Circle.prototype.getArea = function(){
		return Math.PI * this.radius * this.radius;
	}
	


//多边形

	function Polygon(){
		
	}
	
//三角形

	function Triangle(a,b,c){
		Shape.call(this,3);
		this.a = a;
		this.b = b;
		this.c = c;
	}
	Triangle.prototype = new Shape();
	Triangle.prototype.getC = function(){
		if(this.c){
			return this.a + this.b + this.c;
		}else{
			return Math.sqrt(this.a*this.a + this.b*this.b) + this.a + this.b;
		}
	}
	Triangle.prototype.getArea = function(){
		if(this.c){
			var p = (this.a + this.b + this.c)/2;
		return 	Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
		}else{
			return this.a*this.b/2;	
		}
	}
//矩形

	function Rect(a,b){
			Shape.call(this,4);
			this.a = a;
		 	this.b = b;
	}
	Rect.prototype = new Shape();
	Rect.prototype.getC = function(){
		return 2*(this.a+this.b);	
		
	}
	Rect.prototype.getArea = function(){
		return this.a * this.b;		
	}

//五边形


//正方形

	function Square(a){
		 	Rect.call(this,a,a);
			this.a = a;
	}
	Square.prototype = new Rect();

		

			var c = new Square(3);
			document.getElementById('write').innerText = "周长为："+c.getC()
			+ "\n面积为："+c.getArea()
				+ "\n边:"+c.getEdge();

</p>
</code>
				