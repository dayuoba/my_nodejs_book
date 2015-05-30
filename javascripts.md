# Javascript相关

###函数自调用时函数表达式和函数声明的区别

所有的function 开头的都是函数声明，在解释的时候会预处理放入堆栈
```
function () {

}
//or
function foo() {

}
```
这种写法的函数声明不会被执行，直到被显示的调用 foo();
函数表达式则不同，如：
```
var foo = function() {

};
+function() {

}
-function() {

}
(function() {

})

//以上即为函数表达式
```
当以表达式(expression)开头时，语句被解释为一个表达式，自然而然会把后面的函数声明当做表达式去处理，这时候，如上，函数声明的部分会当做一个函数返回就像是`(return function() {})`。也只有这种情况才能在表达式的后面加括号来达到函数自调用的目的
```
+function() {
  console.log('will be invoked');
}();
-function() {
  console.log('will be invoked');
}();
(function () {
  console.log('will be invoked');
})();

//注意下面的区别
function() {
  console.log('won't be invoked');
}()
//语句是函数声明，最后面的括号会被忽略
```