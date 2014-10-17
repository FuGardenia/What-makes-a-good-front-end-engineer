[CoffeeScript](http://coffee-script.org/)
===
省略 

    var 
    function
---

	= ( ) -> 
    #{ }

函数
---
	//coffeeScript
	fill = (container, liquid = "coffee") ->
  	"Filling the #{container} with #{liquid}..."

	//javascript
	var fill;

	fill = function(container, liquid) {
	  if (liquid == null) {
	    liquid = "coffee";
	  }
	  return "Filling the " + container + " with " + liquid + "...";
	};

对象和数组
---
	//coffeeScript
	song = ["do", "re", "mi", "fa", "so"]

	singers = {Jagger: "Rock", Elvis: "Roll"}

	bitlist = [
	  1, 0, 1
	  0, 0, 1
	  1, 1, 0
	]

	kids =
	  brother:
	    name: "Max"
	    age:  11
	  sister:
	    name: "Ida"
	    age:  9

	//javascript
	var bitlist, kids, singers, song;

	song = ["do", "re", "mi", "fa", "so"];

	singers = {
	  Jagger: "Rock",
	  Elvis: "Roll"
	};

	bitlist = [1, 0, 1, 0, 0, 1, 1, 1, 0];

	kids = {
	  brother: {
	    name: "Max",
	    age: 11
	  },
	  sister: {
	    name: "Ida",
	    age: 9
	  }
	};

词法作用域和变量安全
---
永远不需要自己去写 var.

	outer = 1
	changeNumbers = ->
	  inner = -1
	  outer = 10
	inner = changeNumbers()

if, else, unless 和条件赋值
---
	//coffeescript
	mood = greatlyImproved if singing

	if happy and knowsIt
	  clapsHands()
	  chaChaCha()
	else
	  showIt()

	date = if friday then sue else jill

	//javscript
	var date, mood;

	if (singing) {
	  mood = greatlyImproved;
	}

	if (happy && knowsIt) {
	  clapsHands();
	  chaChaCha();
	} else {
	  showIt();
	}

	date = friday ? sue : jill;

变参(splats)
---



循环和推导式
---


CoffeeScript	JavaScript
is					===
isnt				!==
not					!
and					&&
or					||
true, yes, on		true
false, no, off		false
@, this				this
of					in
in					no JS equivalent
a ** b				Math.pow(a, b)
a // b				Math.floor(a / b)
a %% b				(a % b + b) % b


