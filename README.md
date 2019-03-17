# vue_cli3_px_to_rem_h5

### 介绍
移动端H5适配一直是困扰前端工程师的大问题，有关于移动端的布局适配方案一直以来都是众说纷纭，对应的解决方案也是有很多种。从最原始的px => rem => vw，随着viewport单位越来越受到众多浏览器的支持，到目前为止不管是哪一种方案，都还存在一定的缺陷。言外之意，还没有哪一个方案是完美的。

其实用什么方案不是重点，重点是我们究竟怎么去实现从UI设计文档到计算出对应宽高字体大小这个过程。今天我们重点来解决这个痛点。

### 软件架构
本框架是基于VUE CLI3生成的基本模板，集成了Vuex、Vue-router、e2e/unit等基础插件。在此基础上添加了对px到rem单位的自动处理插件


### 安装教程

1. vue create gitee:saqqdy/vue_cli3_px_to_rem_h5 myproject
2. npm install
3. npm run serve

### 使用说明

#### 1.固定宽高比的容器

html
```
<div class="aspectratio">
    <div class="aspectratio-content">
        这里是你的内容
    </div>
</div>
```
css
```
.aspectratio {
    /* 这里只写aspect-ratio属性 */
    aspect-ratio: '16:9';
}
.aspectratio {
    /* 另起一行写其他属性 */
    width: xx;
    height: xx;
    ...
}
```

#### 2.不走自动计算的样式

不需要自动计算的样式请以"ignore"、"hairlines"或者"ig-"开头
html
```
<div class="ig-menu menu">
    <div class="text">
        这里是你的内容
    </div>
</div>
```
css
```
.ig-menu {
    /* 这里的样式px不会被计算成rem */
    width: 100px;
    .text {
        /* 这里的样式px不会被计算成rem */
        font-size: 14px;
    }
}
.menu {
    /* 这里的样式px会被计算成rem */
    height: 100px;
    .text {
        /* 这里的样式px会被计算成rem */
        font-size: 14px;
    }
}
```

### 参与贡献

1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request


### 我的相关

1. 使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2. 我的码云：[https://gitee.com/saqqdy](https://gitee.com/saqqdy)
3. 我的Github：[https://github.com/saqqdy](https://github.com/saqqdy)
4. 我的npm：[https://npmjs.com/~saqqdy](https://npmjs.com/~saqqdy)
5. 我的个人网站 [http://www.saqqdy.com](http://www.saqqdy.com)


