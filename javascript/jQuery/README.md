jQuery研究
===
[【前端中文文档】](http://www.css88.com/jqapi-1.9/)

[【jQuery开发教程】](http://www.cnblogs.com/Wayou/p/jquery_plugin_tutorial.html#comment_form_container)

[【241个jquery插件—jquery插件大全】](http://blog.csdn.net/adsdassadfasdfasdf/article/details/5603206)

jQuery插件开发
---
#【设计模式】

jQuery插件开发方式主要有三种

1. 通过 `$.extend()` 来扩展jQuery
2. 通过 `$.fn` 向jQuery添加新的方法
3. 通过 `$.widget()` 应用jQuery UI的不见工厂方式创建

第一种方式简单，仅仅是在jQuery命名空间或者理解成jQuery身上添加了一个静态方法而以。我们调用通过$.extend()添加的函数时直接通过$符号调用（$.myfunction()）而不需要选中DOM元素($('#example').myfunction())。

	$.extend({
	    sayHello: function(name) {
	        console.log('Hello,' + (name ? name : 'Dude') + '!');
	    }
	})
	$.sayHello(); //调用
	$.sayHello('Wayou'); //带参调用

第三种方式是用来开发更高级jQuery部件的，该模式开发出来的部件带有很多jQuery内建的特性，比如插件的状态信息自动保存，各种关于插件的常用方法等。

第二种方式开发：

	$.fn.pluginName = function() {
	    //your code goes here
	}

	$.fn.myPlugin = function() {
	    //在这里面,this指的是用jQuery选中的元素
	    //example :$('a'),则this=$('a')
	    this.css('color', 'red');
	}

	<ul>
		<li>
			<a href="http://www.webo.com/liuwayong">我的微博</a>
		</li>
		<li>
			<a href="http://http://www.cnblogs.com/Wayou/">我的博客</a>
		</li>
		<li>
			<a href="http://wayouliu.duapp.com/">我的小站</a>
		</li>
	</ul>
	<p>这是p标签不是a标签，我不会受影响</p>
	<script src="jquery-1.11.0.min.js"></script>
	<script src="jquery.myplugin.js"></script>
	<script type="text/javascript">
		$(function(){
			$('a').myPlugin();
		})
	</script>


####支持链式调用

我们都知道jQuery一个时常优雅的特性是支持链式调用，选择好DOM元素后可以不断地调用其他方法。

要让插件不打破这种链式调用，只需return一下即可。

	$.fn.myPlugin = function() {
	    //在这里面,this指的是用jQuery选中的元素
	    this.css('color', 'red');
	    return this.each(function() {
	        //对每个元素进行操作
	        $(this).append(' ' + $(this).attr('href'));
	    }))
	}

####让插件接收参数

	$.fn.myPlugin = function(options) {
	    var defaults = {
	        'color': 'red',
	        'fontSize': '12px'
	    };
	    var settings = $.extend(defaults, options);
	    return this.css({
	        'color': settings.color,
	        'fontSize': settings.fontSize
	    });
	}
在处理插件参数的接收上，通常使用jQuery的extend方法，上面也提到过，但那是给extend方法传递单个对象的情况下，这个对象会合并到jQuery身上，所以我们就可以在jQuery身上调用新合并对象里包含的方法了，像上面的例子。当给extend方法传递一个以上的参数时，它会将所有参数对象合并到第一个里。同时，如果对象中有同名属性时，合并的时候后面的会覆盖前面的。

	$('a').myPlugin({
	    'color': '#2C9929',
	    'fontSize': '20px'
	});

####保护好默认参数
一个好的做法是将一个新的空对象做为$.extend的第一个参数，defaults和用户传递的参数对象紧随其后，这样做的好处是所有值被合并到这个空对象上，保护了插件里面的默认值。

	$.fn.myPlugin = function(options) {
	    var defaults = {
	        'color': 'red',
	        'fontSize': '12px'
	    };
	    var settings = $.extend({},defaults, options);//将一个空对象做为第一个参数
	    return this.css({
	        'color': settings.color,
	        'fontSize': settings.fontSize
	    });
	}

####面向对象的插件开发
将需要的重要变量定义到对象的属性上，函数变成对象的方法，当我们需要的时候通过对象来获取，一来方便管理，二来不会影响外部命名空间，因为所有这些变量名还有方法名都是在对象内部。

	//定义Beautifier的构造函数
	var Beautifier = function(ele, opt) {
	    this.$element = ele,
	    this.defaults = {
	        'color': 'red',
	        'fontSize': '12px',
	        'textDecoration':'none'
	    },
	    this.options = $.extend({}, this.defaults, opt)
	}
	//定义Beautifier的方法
	Beautifier.prototype = {
	    beautify: function() {
	        return this.$element.css({
	            'color': this.options.color,
	            'fontSize': this.options.fontSize,
	            'textDecoration': this.options.textDecoration
	        });
	    }
	}
	//在插件中使用Beautifier对象
	$.fn.myPlugin = function(options) {
	    //创建Beautifier的实体
	    var beautifier = new Beautifier(this, options);
	    //调用其方法
	    return beautifier.beautify();
	}


调用

	$(function() {
	    $('a').myPlugin({
	        'color': '#2C9929',
	        'fontSize': '20px',
	        'textDecoration': 'underline'
	    });
	})

###关于命名空间

用自调用匿名函数包裹你的代码

JavaScript中无法用花括号方便地创建作用域，但函数却可以形成一个作用域，域内的代码是无法被外界访问的。如果我们将自己的代码放入一个函数中，那么就不会污染全局命名空间，同时不会和别的代码冲突。

	(function() {
	    //定义Beautifier的构造函数
	    var Beautifier = function(ele, opt) {
	        this.$element = ele,
	        this.defaults = {
	            'color': 'red',
	            'fontSize': '12px',
	            'textDecoration': 'none'
	        },
	        this.options = $.extend({}, this.defaults, opt)
	    }
	    //定义Beautifier的方法
	    Beautifier.prototype = {
	        beautify: function() {
	            return this.$element.css({
	                'color': this.options.color,
	                'fontSize': this.options.fontSize,
	                'textDecoration': this.options.textDecoration
	            });
	        }
	    }
	    //在插件中使用Beautifier对象
	    $.fn.myPlugin = function(options) {
	        //创建Beautifier的实体
	        var beautifier = new Beautifier(this, options);
	        //调用其方法
	        return beautifier.beautify();
	    }
	})();

前面别人写的代码没有用分号结尾，或者前面的代码将window, undefined等这些系统变量或者关键字修改掉了，正好我们又在自己的代码里面进行了使用，那结果也是不可预测的。


我们在代码开头加一个分号，这在任何时候都是一个好的习惯。
>
	;^_^;(function($,window,document,undefined){
	    //我们的代码。。
	    //blah blah blah...
	})(jQuery,window,document);

jQuery也传递进去，道理也是一样的，你不知道在其他什么地方jQuery被修改成了别的什么东西。而至于这个undefined，稍微有意思一点，为了得到没有被修改的undefined，我们并没有传递这个参数，但却在接收时接收了它，因为实际并没有传，所以‘undefined’那个位置接收到的就是真实的'undefined'了。是不是有点hack的味道，值得细细体会的技术，当然不是我发明的，都是从前人的经验中学习。

####关于变量定义及命名

**变量定义：**好的做法是把将要使用的变量名用一个var关键字一并定义在代码开头，变量名间用逗号隔开。原因有二：

一是便于理解，知道下面的代码会用到哪些变量，同时代码显得整洁且有规律，也方便管理，变量定义与逻辑代码分开；
二是因为JavaScript中所有变量及函数名会自动提升，也称之为JavaScript的Hoist特性，即使你将变量的定义穿插在逻辑代码中，在代码解析运行期间，这些变量的声明还是被提升到了当前作用域最顶端的，所以我们将变量定义在一个作用域的开头是更符合逻辑的一种做法。当然，再次说明这只是一种约定，不是必需的。

**变量及函数命名** 一般使用驼峰命名法（CamelCase），即首个单词的首字母小写，后面单词首字母大写，比如resultArray，requestAnimationFrame。对于常量，所有字母采用大写，多个单词用下划线隔开，比如WIDTH=100，BRUSH_COLOR='#00ff00'。当变量是jQuery类型时，建议以$开头，开始会不习惯，但经常用了之后会感觉很方便，因为可以很方便地将它与普通变量区别开来，一看到以$开头我们就知道它是jQuery类型可以直接在其身上调用jQuery相关的方法，比如var $element=$('a'); 之后就可以在后面的代码中很方便地使用它，并且与其他变量容易区分开来。

**引号的使用：** 既然都扯了这些与插件主题无关的了，这里再多说一句，一般HTML代码里面使用双引号，而在JavaScript中多用单引号，比如下面代码所示：


####代码混淆与压缩

通过将代码里面的变量名，方法函数名等等用更短的名称来替换，并且删除注释（如果有的话）删除代码间的空白及换行所得到的浓缩版本。同时由于代码里面的各种名称都已经被替代，别人无法阅读和分清其逻辑，也起到了混淆代码的作用。


