

#### 计算属性 ```computed```

#### 事件监听
* v-on 

* 缩写 @
* 参数
  * 模版没有使用函数调用，只绑定了函数名
    * 方法有一个接收参数 - DOM Event对象
    * 方法多于一个接收参数 - 第一个为 Event对象，后面undefined(参数命令为$event也不会影响第一个参数为实际接收事件对象的参数)
  
  * 模版有使用函数调用,必须使用$event显示传递DOM实际对象，否则接收不到
* 修饰符
  * ```stop``` 阻止冒泡时间
  * ```prevent``` 阻止默认时间  如 submit类型按钮提交
  * ```keycode``` 监听按键
  * ```.native``` 监听组件元素


#### filters 过滤器