## 解决 "Can't find module 'xxx'" 的办法



### 这可能是node中最好解决的错误了 

> 此种错误只会发生在以下这种情况下
```

var xxx = require('xxx');

```
当nodejs报错以`'Can't find module xxx'`输出到控制台的时候，恭喜你，这是一个最容易解决的错误

你会看到类似下面这样的报错
```
module.js:340

throw err;

^

Error: Cannot find module 'data'

at Function.Module._resolveFilename (module.js:338:15)

at Function.Module._load (module.js:280:25)

at Module.require (module.js:364:17)

at require (module.js:380:17)

at Object.<anonymous> (/home/tom/workspace/project/src/test.js:1:74)

at Module._compile (module.js:456:26)

at Object.Module._extensions..js (module.js:474:10)

at Module.load (module.js:356:32)

at Function.Module._load (module.js:312:12)

at Function.Module.runMain (module.js:497:10)


```

你需要做的事从顶部开始查找，直到你看到第一个完整的路径像下面这样


```
at Object.<anonymous> (/home/tom/workspace/project/src/test.js:1:74)
```
>这是你项目的根目录 `/home/tom/workspace/project/` , 然后看紧跟着项目根目录的下一个目录是神马，这里的情况是: `src/test.js:1:74`.
再来看看最上面的报错`Cannot find module 'data'`,缺少的模块的名字是'data',[1]如果这个名字在`package.json->dependences:{}中,恭喜你你只需要`sudo npm install data`就可以了.如果不是缺少npm依赖的情况，那么就只有一种可能了，就是我们`require`自己写的模块的时候出错了，一种是路径下还没此文件，还有一种情况就是路径写错了囧.
当然还有一种情况也比较好处理,看下面的示例：

```

at Object.<anonymous> (/home/tom/workspace/project/node_modules/xxx_module/xxxx.js:1:74)

```

如果你看到这样的关键字: `node_modules`,这是一个npm包内部的错误最简单的办法:

```
#:sudo rm -r rootpath/node_modules


#:sudo npm install(in rootpath)

```





