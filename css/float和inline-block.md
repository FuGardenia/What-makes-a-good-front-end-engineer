float和inline-block
===
[应不应该使用inline-block代替float](http://www.w3cplus.com/css/inline-blocks.html)

[去除inline-block元素间间距的N种方法](http://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)

#####什么时候使用，
1. 使用inline-block：当你需要控制元素的垂直对齐跟水平排列时，使用inline-block。
2. 使用浮动：当你需要让元素环绕某一个元素时，或者需要支持旧版本ie，或者不想处理inline-block带来的空白问题时，使用浮动。

####float:left | right | none | inherit; 属性


<style type="text/css">
.space a {
    display: inline-block;
    padding: .5em 1em;
    background-color: #cad5eb;
}

	.div1{
		width: 25%;
		height: 50px;
		background-color: #999;
		border: 1px #000 solid;
		float: left;
	}
	.div0{
		clear: both;
	}
	.div3
	{
		width: 90px;
		height: 90px;
		background-color: red;
		border: 1px #000 solid;
	}
	.div4{
		width: 50px;
		height: 50px;
		background-color: #666;
		border: 1px #000 solid;
	}
	.div6{
		height: 70px;
	}
</style>

<div class="space">
    <a href="##">inline-block</a>
    <a href="##">display</a>
    <a href="##">float</a>
</div>


<div class="float-div">
	<div class="div1"></div>
	<div class="div1 div6"></div>
	<div class="div1"></div>
	<div class="div1"></div>
	<div class="div1"></div>
	<div class="div1"></div>
	<div class="div3"></div>
</div>
<div style="clear:both"></div>
布局时，在浮动模块之后需要使用`clear:both;`清除浮动

<div class="float-div">
	<div class="div1"></div>
	<div class="div1 div6"></div>
	<div class="div1"></div>
	<div class="div1"></div>
	<div class="div1"></div>
	<div class="div1"></div>
	<div class="div0"></div>
	<div class="div3"></div>
</div>


####display:inline-block | none | block | inline | ...; 属性

<style type="text/css">
	.div2{
		width: 25%;
		height: 50px;
		background-color: #ddd;
		border: 1px #000 solid;
		display: inline-block;
	}
	.div6{
		height: 70px;
	}
</style>
<div class="inline-block-div">
	<div class="div2"></div>
	<div class="div2 div6"></div>
	<div class="div2"></div>
	<div class="div2"></div>
	<div class="div2"></div>
	<div class="div2"></div>
	<div class="div3"></div>
</div>
#####`inline-block` IE6、7支持好

	display:inline-block;
	*display:inline;
	*zoom:1;

#####去除`inline-block`之间的间隙
移除空格(写div时不换行，或者使用`<!-- -->`)
---
	<div class="space">
    <a href="##">惆怅</a
    ><a href="##">淡定</a
    ><a href="##">热血</a>
	</div>

或者是借助HTML注释：

	<div class="space">
	    <a href="##">惆怅</a><!--
	    --><a href="##">淡定</a><!--
	    --><a href="##">热血</a>
	</div>

使用margin负值
---
需要按照各浏览器不同设置

	.space a {
	    display: inline-block;
	    margin-right: -3px;
	}

<div class="inline-block-div">
	<div class="div2"></div
	><div class="div2"></div
	><div class="div2"></div
	><div class="div2"></div
	><div class="div2"></div
	><div class="div2"></div
	><div class="div3"></div>
</div>