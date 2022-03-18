<!--
 * @Description:
 * @Version: 2.0
 * @Author: Yaowen Liu
 * @Date: 2021-10-18 16:22:04
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2022-03-18 14:44:09
-->

# Vue3 瀑布流组件

#### vue3 waterfall plugin, support PC and mobile, support animate.css.,lazyload, vue3 瀑布流插件，支持 PC 和移动端，支持 animate 的所有动画效果，支持图片懒加载

[在线演示地址](https://heikaimu.github.io/vue3-waterfall-plugin/preview/index.html)

[vue2 版本](https://github.com/heikaimu/vue-waterfall-plugin)

#### 本地浏览

本地运行

```js
// 安装依赖
npm install
// 运行项目
npm run dev
```

#### 插件安装

```
yarn add vue-waterfall-plugin-next
```

#### 引入

```js
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'
```

#### 使用

```js
data: {
  list: [
    {
      src: "xxxx.jpg",
      ...
    }
    ...
  ]
}
```

`item` 所有数据, `url` 图片资源, `index` 卡片索引 
```html
<Waterfall :list="list">
  <template #item="{ item, url, index }">
    <div class="card">
      <LazyImg :url="url" />
      <p class="text">这是内容</p>
    </div>
  </template>
</Waterfall>
```
#### 全部参数

| Name              | Type    | Default     | Description                                                                               |
| ----------------- | ------- | ----------- | ----------------------------------------------------------------------------------------- |
| list              | Array   | []          | 列表数据                                                                                  |
| rowKey            | String  | id          | 数据唯一的字段，比如列表里面的id, 如果要删除卡片，该字段为必填                                     |
| imgSelector       | String  | src         | 图片字段选择器，主要用与监控图片加载完成触发重新排版，如果层级较深，使用 xxx.xxx.xxx 方式 |
| width             | Number  | 200         | 卡片在 PC 上的宽度                                                                        |
| breakpoints       | Object  | breakpoints | 自定义行显示个数，主要用于对移动端的适配                                                  |
| gutter            | Number  | 10          | 卡片之间的间隙                                                                            |
| hasAroundGutter   | Boolean | true        | 容器四周是否有 gutter 边距                                                                |
| animationEffect   | String  | fadeIn      | 卡片入场动画，默认只有 fadeIn，引入 animation.css 后可使用其他动画                        |
| animationDuration | Number  | 1000        | 动画执行时间（单位毫秒）                                                                  |
| animationDelay    | Number  | 300         | 动画延迟（单位毫秒）                                                                      |
| backgroundColor   | String  | #fff        | 背景颜色                                                                                  |
| loadProps         | Object  | {}          | 加载的图片和失败的图片                                                                       |
| lazyload          | Boolean | true        | 是否开启懒加载                                                                       |
| delay             | Number  | 600         | 布局刷新的防抖时间，默认600ms内没有再次触发才刷新布局。（图片加载完成；窗口宽度；list、width、gutter、hasAroundGutter变化均会触发刷新） |

断点具体配置
```js
breakpoints: {
  1200: { //当屏幕宽度小于等于1200
    rowPerView: 4,
  },
  800: { //当屏幕宽度小于等于800
    rowPerView: 3,
  },
  500: { //当屏幕宽度小于等于500
    rowPerView: 2,
  }
}
```

加载参数具体配置
```js
import loading from 'assets/loading.png'
import error from 'assets/error.png'
loadProps: {
  loading,
  error
}
```