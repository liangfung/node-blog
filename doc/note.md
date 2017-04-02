## DRY 
**DRY**-don't repeat yourself  把同样的变量抽象出来，不要出现两次

## 抽象中间件


### 要点
1. 在本次的代码当中，把**读取静态资源**的逻辑抽象出来，封装在一个叫做staticFun的模块当中

2. 由于还没有用到promise，所以写成了fs.readFileSync的方法，**同步**读取文件
    - **注意**
    - fs.readFile() 为异步方法， 需要写入*回调函数*
    - fs.redaFileSync() 为同步方法，没有回答函数的概念

3. path.resolve(a,b,c), 以cd的概念去理解，其实就是字符串拼接的方法

4. process.cwd()

5. 日后重构路由分发