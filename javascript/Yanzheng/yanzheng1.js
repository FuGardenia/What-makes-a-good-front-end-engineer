function Field (params) {
	this.field_id = params.fid; //要验证的字段的ID
	this.validators = params.val; //验证对象数组
	this.on_suc = params.suc;   //验证成功时候执行的事件
	this.on_error = params.error;  //验证失败的时候执行的事件
	this.checked = false;   //是否通过验证
}
//加入validate方法
Field.prototype.validate = function() {
	///循环每一个验证器
	for(item in this.validators){
		//给验证器附加验证成功和验证失败的回调事件
		this.set_callback(this.validators[item]);
		//执行验证器上的Validate方法，验证是否符合规则
		if (!this.validators[item].validate(this.data())) {
			break;//一旦任意一个验证器失败就停止
		};
	}
};
//获取字段值的方法
Field.prototype.data = function() {
	return document.getElementById(this.field_id).value;
};

//验证器回调函数的方法set_callback
Field.prototype.set_callback = function(val) {
	var self = this;  //换一个名字来存储this，防止函数的闭包中会覆盖这个名字
	val.on_suc = function () {//验证成功执行的方法
		self.checked = true;//将字段设置为验证成功
		self.on_suc(val.tips);//执行验证成功事件
	}
	val.on_error = function() {
		self.checked = false;
		self.on_error(val.tips);
	};
};

//验证器
/*
长度验证、
必填验证、
正则表达式验证、
自定义函数验证、
ajax远程验证
*/

//长度验证类
function Len_val(min_1,max_1,tip){
	this.min_v = min_1;
	this.max_v = max_1;
	this.tips = tip;
	this.on_suc = null;
	this.on_error = null;
}

Len_val.prototype.validate = function(fd) {
	if(fd.length<this.min_v|| fd.length>this.max_v){
		this.on_error();
		return false;
	}
	this.on_suc();
	return true;
};

//正则表达式验证器
function Exp_val (expresion,tip) {
	this.exps = expresion;
	this.tips = tip;
	this.on_suc = null;
	this.on_error = null;
}

Exp_val.prototype.validate = function (fd) {
	if(!fd){
		this.on_suc();
		return true;
	}
	if(this.exps.test(fd)){
		this.on_suc();
		return true;
	}else{
		this.on_error();
		return false;
	}
}

//远程验证器
function Remote_val(url,tip){
	this.p_url = url;
	this.tips = tip;
	this.on_suc = null;
	this.on_error = null;
}
Remote_val.prototype.validate = function(fd){
	var self = this;
	//jquery的ajax方法
	$.post(this.p_url, {f : fd}, function(data) {
		if(data.rs){
			self.on_suc();
			return;
		}else{
			self.on_error();
		}
	},"json");
	return false;
}

//自定义函数验证器
function Man_val(tip,func) {
	this.tips = tip;
	this.val_func = func;
	this.on_suc = null;
	this.on_error = null;
};
Man_val.prototype.validate = function (fd) {
	if(this.val_func(fd)){
		this.on_suc();
	}else{
		this.on_error();
	}
};

//用一个userform的类来做一个入口，在构造的时候传入Field对象的列表,
//并且将每一个控件的onblur事件绑定到validate的包装器上.

function UserForm(items){
	this.f_item =items;
	for (var i=0;i < this.f_item.length; i++) {
		var fc = this.get_check(this.f_item[i]);
		$("#"+this.f_item[i].field_id).blur(fc);
	};
}
//绑定验证时间的处理器，为了避开循环对闭包的影响
UserForm.prototype.get_check = function(v){
	return function(){
		v.validate();
	}
}

//定义一个方法来绑定提交按钮的onclick事件
UserForm.prototype.set_submit = function(bid,bind){
	var self = this;
	$("#"+bid).click(function() {
		if(self.validate()){
			bind();
		}
	});
}

//UserForm的validate方法
////验证所有的字段
UserForm.prototype.validate = function() {
	for(var i in this.f_item){//循环每一个验证器
		this.f_item[i].validate();//再检测一遍
		if(!this.f_item[i].checked){
			return false;//如果错误就返回失败，阻止提交
		}
	}
	return true;//一个都没错就返回成功执行提交
};
