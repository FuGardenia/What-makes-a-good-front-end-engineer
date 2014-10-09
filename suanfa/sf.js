//http://www.cnblogs.com/yjmyzz/archive/2013/05/21/3091653.html
/*查找*/
/*
入门级算法
-线性查找
-时间复杂度O(n)
--相当于算法界中的HelloWorld
*func:lineSearch
*method:A为数组 x为要搜索的值
*
*/
function lineSearch(A,x){
	for (var i = 0; i < A.length; i++) {
		if(A[i] == x){
			return i;
		}
	};
	return -1;
}

/*
二分查找(又称折半查找) 
- 适用于已排好序的线性结构 
- 时间复杂度O(logN)
*/
function binarySearch(A,x){
	var low = 0,
		high = A.length - 1;
	while (low <= high){
		var mid = Math.floor((low + high) / 2);

		if(x == A[mid]){
			return mid;
		}
		if(x < A[mid]){
			high = mid - 1;
		}else{
			low = mid +1;
		}
	}
	return -1;
}

/*排序*/
/*
冒泡排序 
A数组，默认 正序 true 倒叙，
-- 时间复杂度O(n^2)
*/
function swap(A,i,j){
	var x;
	x = A[i];
	A[i] = A[j];
	A[j] = x;
	console.log(A);
}
function bubbleSort(A){
	for (var i = 0; i < A.length; i++) {
		var sorted = true;
		 //内循环是倒着来的
		for (var j = A.length - 1; j >i; j--) {
			if(arguments[1]){
				if (A[j] < A[j-1]){
					swap(A, j, j-1);
					sorted = false;
				}
			}else{
				if (A[j] > A[j-1]){
					swap(A, j, j-1);
					sorted = false;
				}
			}
		};
		if(sorted) {
			return A;
		}
	};
}
/*
 选择排序 ??
 - 时间复杂度O(n^2)
*/

function selectionSort(A){
	for (var i = 0; i < A.length; i++) {
		var k = i;
		for (var j = i+1;j < A.length;j++){

			if( A[j] < A[k] ){
				k = j;
			}
		}
		if(k != 1){
			var t = A[k];
			A[k] = A[i];
			A[i] = t;
			//console.log(A);
		}
	};
	return A;
}
/*
 插入排序 
 - 时间复杂度O(n^2)

//插入排序
//假定当前元素之前的元素已经排好序，先把自己的位置空出来，
//然后前面比自己大的元素依次向后移，直到空出一个"坑"，
//然后把目标元素插入"坑"中
*/

function insertSort(A){
	for (var i = 0; i < A.length; i++) {
		var x = A[i];
		for (var j = i-1; j>=0 && A[j]>x; j--){
			A[j + 1] = A[j];
		}
		if(A[j+1] != x){
			A[j+1] = x;
			console.log(A);
		}
	};
	return A;
}

/*
字符串反转
- 时间复杂度O(logN)
//字符串反转(比如：ABC -> CBA)
*/
function inverse(s){
	var arr = s.split('');
	var i = 0,j = arr.length - 1;
	while (i<j){
		var t = arr[i];
		arr[i] = arr[j];
		arr[j] = t;
		i++;
		j--;
	}
	return arr.join('');
}

/*
《高性能JavaScript》
JavaScript合并排序实现，递归算法
*/

function merge(left,right){
	var result = [];
	while(left.length>0 && right.length>0){
		if(left[0] < right[0]){
			result.push(left.shift());
		}else{
			result.push(right.shift());
		}
	}
	return result.concat(left).concat(right);
}

function mergeSort(items){
	if(items.length == 1){
		return items;
	}

	var middle = Math.floor(items.length/2),
		left = items.slice(0,middle),
		right = items.slice(middle);
	return merge(mergeSort(left),mergeSort(right));
}
/*
 关于稳定性排序的一个结论：

基于比较的简单排序算法，即时间复杂度为O(N^2)的排序算法，通常可认为均是稳定排序

其它先进的排序算法，比如归并排序、堆排序、桶排序之类（通常这类算法的时间复杂度可优化为n*LogN），通常可认为均是不稳定排序
*/
/*
《高性能JavaScript》
迭代实现
*/

function merSort(items){
	if(items.length == 1){
		return items;
	}
	var work = [];
	for(var i=0,len=items.length;i<len;i++){
		work.push([items[i]]);
	}

	work.push([]);//如果数组长度为奇数
	for(var lim=len;lim>1;lim=(lim+1)/2){
		for(var j=0,k=0;k<lim;j++,k+=2){
			work[j] = merge(work[k],work[k+1]);
		}
		work[j] = [];
	}

	return work[0];
}


/*单链表的实现*/
function print(msg) {
	document.write(msg);
}

function println(msg) {
	print(msg + "<br/>");
}

//节点类
var Node = function (v){
	this.data = v; //节点值
	this.next = null; //后继节点
}

//单链表
var SingleLink = function () {
	this.head = new Node(null);//约定头节点仅占位，不存值

	//插入节点
	this.insert = function (v) {
		var p = this.head;
		while( p.next != null){
			p = p.next;
		}
		p.next = new Node(v);
	}
	//删除指定位置的节点
	this.removeAt = function (n) {
		if (n <= 0){
			return;
		}
		var preNode  this.getNodeByIndex(n-1);
		preNode.next = preNode.next.next;
	}
}