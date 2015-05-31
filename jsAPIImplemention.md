##JS中API的接口设计

js中是比较灵活的比如：实现一个类（或者是对象）
```
var Person = function(options) {
	    this.name = options.name;
	        this.age = options.age;
		    //methods
		        this.say = function(str) {
				        console.log(str);
					    }
}
//这种方式和java中的类声明很相似。比较大的区别在于java中的类声明更严谨一些，因为可以实现private属性或方法
var dayu = new Person({name: 'yuyang', age:27});
dayu.say(dayu.name);
还有一种直接构建接口对象方式，如:
var Person = {
	name: '',
	age: 0,
	say: function(str) {
		console.log(str);
	}
};

Person.name = 'dayu';
Person.age = 27;
Person.say(Person.name);
```
如果以严谨的多态的考虑可能第一种方式更好。因为当我们需要实例的时候可以
通过构造方法来更方便的构造有差异的实例。
然而快速的原型是提高开发效率的非常有效的方法。所以具体如何取舍，更多的在于设计者对项目的设计考虑。
对第一种的补充:
```
//通过原型链来初始化实例方法。
Person.prototype.do = function() {
	//do sth. here
}
//整体实现类似这样：
var Person = function(options) {
	this.name = options.name;
	this.age = options.age;
}
Person.prototype.say = function(str) {
	console.log(str);
};
//关于原型链的知识可能以后单独整理
```
最后说说我为什么在习题3中那样设计：
```
var async = {
	//init here
	//在对象声明的内部只写状态和属性。
	//比如
	status: 0,
	loaded: false
};
//外部逐条写方法。
async.tasks = function(arr, callback) {
	var complete = 0;
	var tasks = arr.length;
	var results = [];

	arr.foreach(function iterator(task, index) {
		task(done, index);
	});

	function done(result) {
		complete ++;
		results.push(result);
		if (complete === tasks)
			callback(results);
	}
}
```
在对象内部写对象的结构，在外部写方法，分开的写法我认为可读性更高,当我们去查看一个包（文件）的时候很容易去直观的找到接口方法，和接口对象的内部数据结构（状态，属性）
写个长点的对比：
```
//1st
var person = {
	name: '',
	age: '',
	settings: {
	//
	},
	childs: [
	0,
	1
	//..
	],
	//@Description this is a function output sth.
	//@Params  [String] string
	//@return
	//@author
	say: function() {

	},
	//@Description this is a function output sth.
	//@Params  [String] string
	//@return
	//@author
	do: function() {

	},
	//@Description this is a function output sth.
	//@Params  [String] string
	//@return
	//@author
	foo: function() {

	},
};
```
```
//2nd 
var Person = {
	name: '';
	age: '';
	childs: [

	],
	settgins: {

	}
};

//@Description this is a function output sth.
//@Params  [String] string
//@return
//@author
 Person.say = function() {

 };
//@Description this is a function output sth.
//@Params  [String] string
//@return
//@author
Person.do = function() {

};
//@Description this is a function output sth.
//@Params  [String] string
//@return
//@author
Person.foo = function() {

};
```
