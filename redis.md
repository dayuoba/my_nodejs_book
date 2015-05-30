#Redis 几种常见数据类型及相关操作

##The **set**

>Set 是没有重复元素的结合

commands: `sadd` `sismember` `smembers` `sunion` `srem`

```

redis-client

//添加一个元素
>sadd user 'tom'

1
//查看元素是否是集合中的一员，说白了就像exists()函数
>sismember user 'tom'

1
//查看所有元素
>smembers user 

'tom'

>sadd user 'dayu'

1

>smembers user

'tom' 'dayu'

>sadd user2 'mike'

1
//合并集合
>sunion user user2

'tom' 'dayu' 'mike'
//删除一个元素
>srem user 'tom'

1

//同时也可以尝试尝试 scard和smove 命令

```



##The list

>只需要记住一些常用操作就行啦:
list的的相关命令都是以**l**开头的代表List，有时候有些操作会被误认为left.

```

redis-cli

//lpush  在如果讲list中的元素理解为从左到右排列的话，push操作会在左侧（开始处）插入一个元素。

>lpush users 'tom'

1

>lpush users 'mike'

1

//rpush 在list结尾处插入一个元素

>rpush users 'lily'

1
//lrange 给定两个参数来获得参数之间的所有元素，如果第二个参数是-1那么代表返回从第一个参数开始到list的结尾。

>lrange users 0 -1

'tom' 

'mike' 

'lily'

//尝试一下下面两个命令吧。

>lpop users

>rpop users

```


##The easiest，the key-value

>Redis中最易用的类型:

```

redis-cli

>set foo 'foo'

1

>set foo2 1

1

>get foo

'foo'

>incr foo2

2

>incr foo2

3

>decr foo2

2

>del foo

1

>get foo

nil

```

So easy!



