/*
webpack几个版本的比较
*/
1. loader的配置不同


/*
tree shaking
*/
;(function() {
    /*
      1.为什么要进行tree shaking
       我们项目中没有使用到的代码在打包的时候丢弃掉，只保留我们引入了的JS代码和css代码。
       1.1：JS的tree shaking ---> UglifyjsWebpackPlugin 
       1.2: CSS的tree shaking ---> purifycss-webpack 配合 glob-all来实现 。
    */ 
})

/*
shimming
*/
;(function(){
    /*
    webpack可以识别commonJs，Es6 and ES2015模块语法，
    使用场景：
    1. 然而第三方库可能会有一些全局依赖
    或者需要导出一些全局变量，shimming就是要处理这些不符合规范的东西。需要编写具有良好的封闭性
    彼此隔离的模块
    2. 
     加载polyfills(填充)
    shim 是一个库(library)，它将一个新的 API 引入到一个旧的环境中，而且仅靠旧的环境中已有的手段实现。polyfill 就是一个用在浏览器 API 上的 shim。
    我们通常的做法是先检查当前浏览器是否支持某个 API，如果不支持的话就加载对应的 polyfill。
    然后新旧浏览器就都可以使用这个 API 了。
    */
})