---
title: Vue-router
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Vue-router](#vue-router)
  - [一. 基础](#一-基础)
    - [1.1 安装](#11-安装)
    - [1.2 起步](#12-起步)
      - [1.2.1 HTML](#121-html)
      - [1.2.2 JS](#122-js)
    - [1.3 动态路由匹配](#13-动态路由匹配)
      - [1.3.1 响应路由参数的变化](#131-响应路由参数的变化)
      - [1.3.2 捕获所有路由或 404 Not found 路由](#132-捕获所有路由或-404-not-found-路由)
      - [1.3.3 高级匹配模式](#133-高级匹配模式)
      - [1.3.4 匹配优先级](#134-匹配优先级)
    - [1.4 嵌套路由](#14-嵌套路由)
    - [1.5 编程式的导航](#15-编程式的导航)
      - [1.5.1 `router.push(location, onComplete?, onAbort?)`](#151-routerpushlocation-oncomplete-onabort)
      - [1.5.2 `router.replace(location, onComplete?, onAbort?)`](#152-routerreplacelocation-oncomplete-onabort)
      - [1.5.3 `router.go(n)`](#153-routergon)
      - [1.5.4 操作 History](#154-操作-history)
    - [1.6 命名路由](#16-命名路由)
    - [1.7 命名视图](#17-命名视图)
      - [1.7.1 嵌套命名视图](#171-嵌套命名视图)
    - [1.8 重定向和别名](#18-重定向和别名)
      - [1.8.1 重定向](#181-重定向)
      - [1.8.2 别名](#182-别名)
    - [1.9 路由组件传参](#19-路由组件传参)
      - [1.9.1 布尔模式](#191-布尔模式)
      - [1.9.2 对象模式](#192-对象模式)
      - [1.9.2 函数模式](#192-函数模式)
    - [1.10 HTML5 History 模式](#110-html5-history-模式)
      - [1.10.1 后端配置例子](#1101-后端配置例子)
      - [1.10.2 警告](#1102-警告)
  - [二. 进阶](#二-进阶)
    - [2.1 导航守卫](#21-导航守卫)
      - [2.1.1 全局前置守卫](#211-全局前置守卫)
      - [2.2.2 全局解析守卫](#222-全局解析守卫)
      - [2.2.3 全局后置钩子](#223-全局后置钩子)
      - [2.2.4 路由独享的守卫](#224-路由独享的守卫)
      - [2.2.5 组件内的守卫](#225-组件内的守卫)
      - [2.2.6 完整的导航解析流程](#226-完整的导航解析流程)
    - [2.2 路由元信息](#22-路由元信息)
    - [2.3 过渡动效](#23-过渡动效)
      - [2.3.1 单个路由的过渡](#231-单个路由的过渡)
      - [2.3.2 基于路由的动态过渡](#232-基于路由的动态过渡)
    - [2.4 数据获取](#24-数据获取)
      - [2.4.1 导航完成后获取数据](#241-导航完成后获取数据)
      - [2.4.2 在导航完成前获取数据](#242-在导航完成前获取数据)
    - [2.5 滚动行为](#25-滚动行为)
      - [2.5.1 异步滚动](#251-异步滚动)
      - [2.5.2 平滑滚动](#252-平滑滚动)
    - [2.6 路由懒加载](#26-路由懒加载)
      - [2.6.1 把组件按组分块](#261-把组件按组分块)
    - [2.7 导航故障](#27-导航故障)
      - [2.7.1 检测导航故障](#271-检测导航故障)
      - [2.7.2 `NavigationFailureType`](#272-navigationfailuretype)
      - [2.7.3 导航故障的属性](#273-导航故障的属性)

<!-- /code_chunk_output -->

# Vue-router

## 一. 基础

### 1.1 安装

**直接下载 / CDN**
[https://unpkg.com/vue-router/dist/vue-router.js](https://unpkg.com/vue-router/dist/vue-router.js)

[Unpkg.com](https://unpkg.com/) 提供了基于 NPM 的 CDN 链接。上面的链接会一直指向在 NPM 发布的最新版本。也可以像 `https://unpkg.com/vue-router@2.0.0/dist/vue-router.js` 这样指定 版本号 或者 Tag。

在 Vue 后面加载 `vue-router`，它会自动安装的：

```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>
```

**NPM**:

```sh
npm install vue-router
```

如果在一个模块化工程中使用它，必须要通过 `Vue.use()` 明确地安装路由功能：

```js
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
```

如果使用全局的 script 标签，则无须如此 (手动安装)。

**Vue CLI**
如果有一个正在使用 Vue CLI 的项目，可以以项目插件的形式添加 Vue Router。CLI 可以生成上述代码及两个示例路由。它**也会覆盖你的 App.vue**，因此请确保在项目中运行以下命令之前备份这个文件：

```sh
vue add router
```

**构建开发版**
如果想使用最新的开发版，就得从 GitHub 上直接 clone，然后自己 build 一个 vue-router。

```sh
git clone https://github.com/vuejs/vue-router.git node_modules/vue-router
cd node_modules/vue-router
npm install
npm run build
```

### 1.2 起步

用 Vue.js + Vue Router 创建单页应用，感觉很自然：使用 Vue.js ，已经可以通过组合组件来组成应用程序，当要把 Vue Router 添加进来，需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router 在哪里渲染它们。下面是个基本例子：

#### 1.2.1 HTML

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
```

#### 1.2.2 JS

```js
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 还可以传别的配置参数
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app');

// 现在，应用已经启动了！
```

通过注入路由器，可以在任何组件内通过 `this.$router` 访问路由器，也可以通过 `this.$route` 访问当前路由：

```js
// Home.vue
export default {
  computed: {
    username() {
      // 很快就会看到 `params` 是什么
      return this.$route.params.username;
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    }
  }
};
```

在 router 实例中，`this.$router` 和 `router` 使用起来完全一样。使用 `this.$router` 的原因是并不想在每个独立需要封装路由的组件中都导入路由。

> 注意 : 当 `<router-link>` 对应的路由匹配成功，将自动设置 class 属性值 `.router-link-active`。查看 [API 文档](https://router.vuejs.org/zh/api/#router-link) 学习更多相关内容。

### 1.3 动态路由匹配

经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，可以在 `vue-router` 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：

```js
const User = {
  template: '<div>User</div>'
};

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
});
```

现在呢，像 `/user/foo` 和 `/user/bar` 都将映射到相同的路由。

一个“路径参数”使用冒号 `:` 标记。当匹配到一个路由时，参数值会被设置到 `this.$route.params`，可以在每个组件内使用。于是，可以更新 User 的模板，输出当前用户的 ID：

```js
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
};
```

可以在一个路由中设置多段“路径参数”，对应的值都会设置到 `$route.params` 中。例如：

| 模式                          | 匹配路径            | $route.params                        |
| ----------------------------- | ------------------- | ------------------------------------ |
| /user/:username               | /user/evan          | { username: 'evan' }                 |
| /user/:username/post/:post_id | /user/evan/post/123 | { username: 'evan', post_id: '123' } |

除了 `$route.params` 外，`$route` 对象还提供了其它有用的信息，例如，`$route.query` (如果 URL 中有查询参数)、`$route.hash` 等等。可以查看 [API 文档](https://router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1) 的详细说明。

#### 1.3.1 响应路由参数的变化

提醒一下，当使用路由参数时，例如从 `/user/foo` 导航到 `/user/bar`，**原来的组件实例会被复用**。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。**不过，这也意味着组件的生命周期钩子不会再被调用**。

复用组件时，想对路由参数的变化作出响应的话，可以简单地 watch (监测变化) `$route` 对象：

```js
const User = {
  template: '...',
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
    }
  }
};
```

或者使用 `beforeRouteUpdate` 导航守卫：

```js
const User = {
  template: '...',
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
  }
};
```

#### 1.3.2 捕获所有路由或 404 Not found 路由

常规参数只会匹配被 `/` 分隔的 URL 片段中的字符。如果想匹配**任意路径**，可以使用通配符 (\*)：

```js
{
  // 会匹配所有路径
  path: '*',
}
{
  // 会匹配以 `/user-` 开头的任意路径
  path: '/user-*',
}
```

当使用通配符路由时，请确保路由的顺序是正确的，也就是说含有通配符的路由应该放在最后。路由 `{ path: '*' }` 通常用于客户端 404 错误。如果使用了 History 模式，请确保正确配置服务器。

当使用一个通配符时，`$route.params` 内会自动添加一个名为 `pathMatch` 参数。它包含了 URL 通过通配符被匹配的部分：

```js
// 给出一个路由 { path: '/user-*' }
this.$router.push('/user-admin');
this.$route.params.pathMatch; // 'admin'
// 给出一个路由 { path: '*' }
this.$router.push('/non-existing');
this.$route.params.pathMatch; // '/non-existing'
```

#### 1.3.3 高级匹配模式

`vue-router` 使用 [path-to-regexp](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0) 作为路径匹配引擎，所以支持很多高级的匹配模式，例如：可选的动态路径参数、匹配零个或多个、一个或多个，甚至是自定义正则匹配。查看它的[文档](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0#parameters)学习高阶的路径匹配。

#### 1.3.4 匹配优先级

有时候，同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。

### 1.4 嵌套路由

实际生活中的应用界面，通常由多层嵌套的组件组合而成。同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件，例如：

```sh
/user/foo/profile                     /user/foo/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

借助 `vue-router`，使用嵌套路由配置，就可以很简单地表达这种关系。

```html
<div id="app">
  <router-view></router-view>
</div>
```

```js
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
};

const router = new VueRouter({
  routes: [{ path: '/user/:id', component: User }]
});
```

这里的 `<router-view>` 是最顶层的出口，渲染最高级路由匹配到的组件。同样地，一个被渲染组件同样可以包含自己的嵌套 `<router-view>`。例如，在 User 组件的模板添加一个 `<router-view>`：

```js
const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
};
```

要在嵌套的出口中渲染组件，需要在 `VueRouter` 的参数中使用 `children` 配置：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
});
```

> 注意 : **以 / 开头的嵌套路径会被当作根路径。 这可以充分的使用嵌套组件而无须设置嵌套的路径**。

会发现，`children` 配置就是像 `routes` 配置一样的路由配置数组，所以，可以嵌套多层路由。

此时，基于上面的配置，当访问 `/user/foo` 时，`User` 的出口是不会渲染任何东西，这是因为没有匹配到合适的子路由。如果想要渲染点什么，可以提供一个 空的 `子路由`：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: User,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: '', component: UserHome }

        // ...其他子路由
      ]
    }
  ]
});
```

### 1.5 编程式的导航

除了使用 `<router-link>` 创建 a 标签来定义导航链接，还可以借助 `router` 的实例方法，通过编写代码来实现。

#### 1.5.1 `router.push(location, onComplete?, onAbort?)`

> 注意：**在 Vue 实例内部，可以通过 `$router` 访问路由实例。因此可以调用 `this.$router.push`**。

想要导航到不同的 URL，则使用 `router.push` 方法。这个方法会向 `history` 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。

当点击 `<router-link>` 时，这个方法会在内部调用，所以说，点击 `<router-link :to="...">` 等同于调用 `router.push(...)`。

| 声明式                    | 编程式             |
| ------------------------- | ------------------ |
| `<router-link :to="..."`> | `router.push(...)` |

该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如：

```js
// 字符串
router.push('home');

// 对象
router.push({ path: 'home' });

// 命名的路由
router.push({ name: 'user', params: { userId: '123' } });

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' } });
```

> 注意：**如果提供了 `path`，`params` 会被忽略，上述例子中的 `query` 并不属于这种情况。取而代之的是下面例子的做法，需要提供路由的 `name` 或手写完整的带有参数的 `path`**：

```js
const userId = '123';
router.push({ name: 'user', params: { userId } }); // -> /user/123
router.push({ path: `/user/${userId}` }); // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId } }); // -> /user
```

> 同样的规则也适用于 `router-link` 组件的 `to` 属性。

在 2.2.0+，可选的在 `router.push` 或 `router.replace` 中提供 `onComplete` 和 `onAbort` 回调作为第二个和第三个参数。这些回调将会在导航成功完成 (在所有的异步钩子被解析之后) 或终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的时候进行相应的调用。在 3.1.0+，可以省略第二个和第三个参数，此时如果支持 `Promise`，`router.push` 或 `router.replace` 将返回一个 Promise。

> 注意 : 如果目的地和当前路由相同，只有参数发生了改变 (比如从一个用户资料到另一个 /users/1 -> /users/2)，需要使用 `beforeRouteUpdate` 来响应这个变化 (比如抓取用户信息)。

#### 1.5.2 `router.replace(location, onComplete?, onAbort?)`

跟 `router.push` 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

| 声明式                            | 编程式                |
| --------------------------------- | --------------------- |
| `<router-link :to="..." replace>` | `router.replace(...)` |

#### 1.5.3 `router.go(n)`

这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 `window.history.go(n)`。

```js
// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1);

// 后退一步记录，等同于 history.back()
router.go(-1);

// 前进 3 步记录
router.go(3);

// 如果 history 记录不够用，那就默默地失败
router.go(-100);
router.go(100);
```

#### 1.5.4 操作 History

`router.push`、 `router.replace` 和 `router.go` 跟 `window.history.pushState`、 `window.history.replaceState` 和 `window.history.go` 比较类似，实际上它们确实是效仿 `window.history` API 的。

因此，如果已经熟悉 Browser History APIs，那么在 Vue Router 中操作 history 就是超级简单的。

> 还有值得提及的，Vue Router 的导航方法 (push、 replace、 go) 在各类路由模式 (history、 hash 和 abstract) 下表现一致。

### 1.6 命名路由

有时候，通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候。可以在创建 Router 实例的时候，在 `routes` 配置中给某个路由设置名称。

```js
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
});
```

要链接到一个命名路由，可以给 `router-link` 的 to 属性传一个对象：

```html
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
```

这跟代码调用 `router.push()` 是一回事：

```js
router.push({ name: 'user', params: { userId: 123 } });
```

这两种方式都会把路由导航到 `/user/123` 路径。

### 1.7 命名视图

有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如创建一个布局，有 `sidebar` (侧导航) 和 `main` (主内容) 两个视图，这个时候命名视图就派上用场了。可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果 `router-view` 没有设置名字，那么默认为 `default`。

```html
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```

一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 `components` 配置 (带上 s)：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    }
  ]
});
```

#### 1.7.1 嵌套命名视图

有可能使用命名视图创建嵌套视图的复杂布局。这时也需要命名用到的嵌套 `router-view` 组件。以一个设置面板为例：

```js
/settings/emails                                       /settings/profile
+-----------------------------------+                  +------------------------------+
| UserSettings                      |                  | UserSettings                 |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
| | Nav | UserEmailsSubscriptions | |  +------------>  | | Nav | UserProfile        | |
| |     +-------------------------+ |                  | |     +--------------------+ |
| |     |                         | |                  | |     | UserProfilePreview | |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
+-----------------------------------+                  +------------------------------+
```

- Nav 只是一个常规组件。
- UserSettings 是一个视图组件。
- UserEmailsSubscriptions、UserProfile、UserProfilePreview 是嵌套的视图组件。

`UserSettings` 组件的 `<template>` 部分应该是类似下面的这段代码：

```html
<!-- UserSettings.vue -->
<div>
  <h1>User Settings</h1>
  <nav-bar />
  <router-view />
  <router-view name="helper" />
</div>
```

然后可以用这个路由配置完成该布局：

```js
{
  path: '/settings',
  // 也可以在顶级路由就配置命名视图
  component: UserSettings,
  children: [{
    path: 'emails',
    component: UserEmailsSubscriptions
  }, {
    path: 'profile',
    components: {
      default: UserProfile,
      helper: UserProfilePreview
    }
  }]
}
```

### 1.8 重定向和别名

#### 1.8.1 重定向

重定向也是通过 `routes` 配置来完成，下面例子是从 `/a` 重定向到 `/b`：

```js
const router = new VueRouter({
  routes: [{ path: '/a', redirect: '/b' }]
});
```

重定向的目标也可以是一个命名的路由：

```js
const router = new VueRouter({
  routes: [{ path: '/a', redirect: { name: 'foo' } }]
});
```

甚至是一个方法，动态返回重定向目标：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/a',
      redirect: to => {
        // 方法接收 目标路由 作为参数
        // return 重定向的 字符串路径/路径对象
      }
    }
  ]
});
```

> 注意 : [导航守卫](#21-导航守卫)并没有应用在跳转路由上，而仅仅应用在其目标上。在下面这个例子中，为 `/a` 路由添加一个 `beforeEnter` 守卫并不会有任何效果。

其它高级用法，请参考[例子](https://github.com/vuejs/vue-router/blob/dev/examples/redirect/app.js)。

#### 1.8.2 别名

“重定向”的意思是，当用户访问 `/a`时，URL 将会被替换成 `/b`，然后匹配路由为 `/b`，那么“别名”又是什么呢？

**`/a` 的别名是 `/b`，意味着，当用户访问 `/b` 时，URL 会保持为 `/b`，但是路由匹配则为 `/a`，就像用户访问 `/a` 一样**。

上面对应的路由配置为：

```js
const router = new VueRouter({
  routes: [{ path: '/a', component: A, alias: '/b' }]
});
```

“别名”的功能可以自由地将 UI 结构映射到任意的 URL，而不是受限于配置的嵌套路由结构。

更多高级用法，请查看[例子](https://github.com/vuejs/vue-router/blob/dev/examples/route-alias/app.js)。

### 1.9 路由组件传参

在组件中使用 `$route` 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。

使用 `props` 将组件和路由解耦：

**取代与 `$route` 的耦合**

```js
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
};
const router = new VueRouter({
  routes: [{ path: '/user/:id', component: User }]
});
```

**通过 `props` 解耦**

```js
const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>'
};

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User, props: true },

    // 对于包含命名视图的路由，必须分别为每个命名视图添加 `props` 选项：
    {
      path: '/user/:id',
      components: { default: User, sidebar: Sidebar },
      props: { default: true, sidebar: false }
    }
  ]
});
```

这样便可以在任何地方使用该组件，使得该组件更易于重用和测试。

#### 1.9.1 布尔模式

如果 `props` 被设置为 `true`，`route.params` 将会被设置为组件属性。

#### 1.9.2 对象模式

如果 `props` 是一个对象，它会被按原样设置为组件属性。当 `props` 是静态的时候有用。

```js
const router = new VueRouter({
  routes: [
    {
      path: '/promotion/from-newsletter',
      component: Promotion,
      props: { newsletterPopup: false }
    }
  ]
});
```

#### 1.9.2 函数模式

可以创建一个函数返回 `props`。这样便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。

```js
const router = new VueRouter({
  routes: [
    {
      path: '/search',
      component: SearchUser,
      props: route => ({ query: route.query.q })
    }
  ]
});
```

URL `/search?q=vue` 会将 `{query: 'vue'}` 作为属性传递给 `SearchUser` 组件。

> 注意 : 请尽可能保持 `props` 函数为无状态的，因为它只会在路由发生变化时起作用。如果需要状态来定义 `props`，请使用包装组件，这样 Vue 才可以对状态变化做出反应。

更多高级用法，请查看[例子](https://github.com/vuejs/vue-router/blob/dev/examples/route-props/app.js)。

### 1.10 HTML5 History 模式

`vue-router` 默认 `hash` 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。

如果不想要很丑的 hash，可以用路由的 **history** 模式，这种模式充分利用 `history.pushState` API 来完成 URL 跳转而无须重新加载页面。

```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

当使用 `history` 模式时，URL 就像正常的 url，例如 `http://yoursite.com/user/id`，也好看！

不过这种模式要玩好，还需要后台配置支持。因为应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 `http://oursite.com/user/id` 就会返回 404，这就不好看了。

所以，要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 `index.html` 页面，这个页面就是 app 依赖的页面。

#### 1.10.1 后端配置例子

> 注意：下列示例假设在根目录服务这个应用。如果想部署到一个子目录，需要使用 Vue CLI 的 `publicPath` 选项 和相关的 `router base property`。还需要把下列示例中的根目录调整成为子目录 (例如用 `RewriteBase /name-of-your-subfolder/` 替换掉 `RewriteBase /`)。

**Apache**:

```Apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

除了 `mod_rewrite`，也可以使用 `FallbackResource`。

**nginx**:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**原生 Node.js**:

```js
const http = require('http');
const fs = require('fs');
const httpPort = 80;

http
  .createServer((req, res) => {
    fs.readFile('index.html', 'utf-8', (err, content) => {
      if (err) {
        console.log('We cannot open "index.html" file.');
      }

      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });

      res.end(content);
    });
  })
  .listen(httpPort, () => {
    console.log('Server listening on: http://localhost:%s', httpPort);
  });
```

**基于 Node.js 的 Express**:

对于 Node.js/Express，请考虑使用 `connect-history-api-fallback` 中间件。

**Internet Information Services (IIS)**:

1. 安装 [IIS UrlRewrite](https://www.iis.net/downloads/microsoft/url-rewrite)
2. 在网站根目录中创建一个 `web.config` 文件，内容如下：

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <configuration>
   <system.webServer>
    <rewrite>
      <rules>
        <rule name="Handle History Mode and custom 404/500" stopProcessing="true">
          <match url="(.*)" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
   </system.webServer>
   </configuration>
   ```

**caddy**:

```caddy
rewrite {
    regexp .*
    to {path} /
}
```

**Firebase 主机**:

在 `firebase.json` 中加入：

```json
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

#### 1.10.2 警告

给个警告，因为这么做以后，服务器就不再返回 404 错误页面，因为对于所有路径都会返回 `index.html` 文件。为了避免这种情况，应该在 Vue 应用里面覆盖所有的路由情况，然后在给出一个 `404` 页面。

```js
const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '*', component: NotFoundComponent }]
});
```

或者，如果使用 Node.js 服务器，可以用服务端路由匹配到来的 URL，并在没有匹配到路由的时候返回 404，以实现回退。更多详情请查阅 [Vue 服务端渲染文档](https://ssr.vuejs.org/zh/)。

## 二. 进阶

### 2.1 导航守卫

正如其名，`vue-router` 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。有多种机会植入路由导航过程中：全局的, 单个路由独享的, 或者组件级的。

记住**参数或查询的改变并不会触发进入/离开的导航守卫**。可以通过观察 `$route` 对象来应对这些变化，或使用 `beforeRouteUpdate` 的组件内守卫。

#### 2.1.1 全局前置守卫

可以使用 `router.beforeEach` 注册一个全局前置守卫：

```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```

当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 `resolve` 完之前一直处于 等待中。

每个守卫方法接收**三个参数**：

- `to: Route` : 即将要进入的目标 [路由对象](https://router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1)

- `from: Route` : 当前导航正要离开的路由

- `next: Function` : 一定要调用该方法来 **resolve** 这个钩子。执行效果依赖 `next` 方法的调用参数。

  - `next()` : 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 **confirmed** (确认的)。

  - `next(false)` : 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 `from` 路由对应的地址。

  - `next('/')` 或者 `next({ path: '/' })` : 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。可以向 `next` 传递任意位置对象，且允许设置诸如 `replace: true`、`name: 'home'` 之类的选项以及任何用在 `router-link 的 to prop` 或 `router.push` 中的选项。

  - `next(error)` : (2.4.0+) 如果传入 `next` 的参数是一个 `Error` 实例，则导航会被终止且该错误会被传递给 `router.onError()` 注册过的回调。

**确保 `next` 函数在任何给定的导航守卫中都被严格调用一次。它可以出现多于一次，但是只能在所有的逻辑路径都不重叠的情况下，否则钩子永远都不会被解析或报错**。这里有一个在用户未能验证身份时重定向到 `/login` 的示例：

```js
// BAD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' });
  // 如果用户未能验证身份，则 `next` 会被调用两次
  next();
});
```

```js
// GOOD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' });
  else next();
});
```

#### 2.2.2 全局解析守卫

在 2.5.0+ 可以用 `router.beforeResolve` 注册一个全局守卫。这和 `router.beforeEach` 类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。

#### 2.2.3 全局后置钩子

也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 `next` 函数也不会改变导航本身：

```js
router.afterEach((to, from) => {
  // ...
});
```

#### 2.2.4 路由独享的守卫

可以在路由配置上直接定义 `beforeEnter` 守卫：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
});
```

这些守卫与全局前置守卫的方法参数是一样的。

#### 2.2.5 组件内的守卫

最后，可以在路由组件内直接定义以下路由导航守卫：

- `beforeRouteEnter`
- `beforeRouteUpdate` (2.2 新增)
- `beforeRouteLeave`

```js
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
};
```

`beforeRouteEnter` 守卫 不能 访问 `this`，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。

不过，可以通过传一个回调给 `next` 来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。

```js
beforeRouteEnter (to, from, next) {
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}
```

> 注意 : `beforeRouteEnter` 是支持给 `next` 传递回调的唯一守卫。对于 `beforeRouteUpdate` 和 `beforeRouteLeave` 来说，`this` 已经可用了，所以不支持传递回调，因为没有必要了。

```js
beforeRouteUpdate (to, from, next) {
  // just use `this`
  this.name = to.params.name
  next()
}
```

这个 `beforeRouteLeave` 离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 `next(false)` 来取消。

```js
beforeRouteLeave (to, from, next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    return next();
  }
  next(false);
}
```

#### 2.2.6 完整的导航解析流程

1. 导航被触发。
2. 在失活的组件里调用 `beforeRouteLeave` 守卫。
3. 调用全局的 `beforeEach` 守卫。
4. 在重用的组件里调用 `beforeRouteUpdate` 守卫 (2.2+)。
5. 在路由配置里调用 `beforeEnter`。
6. 解析异步路由组件。
7. 在被激活的组件里调用 `beforeRouteEnter`。
8. 调用全局的 `beforeResolve` 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 `afterEach` 钩子。
11. 触发 DOM 更新。
12. 调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入。

### 2.2 路由元信息

定义路由的时候可以配置 `meta` 字段：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'bar',
          component: Bar,
          // a meta field
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
});
```

那么如何访问这个 `meta` 字段呢？

首先，称呼 `routes` 配置中的每个路由对象为 **路由记录**。路由记录可以是嵌套的，因此，当一个路由匹配成功后，可能匹配多个路由记录

例如，根据上面的路由配置，`/foo/bar` 这个 URL 将会匹配父路由记录以及子路由记录。

一个路由匹配到的所有路由记录会暴露为 `$route` 对象 (还有在导航守卫中的路由对象) 的 `$route.matched` 数组。因此，需要遍历 `$route.matched` 来检查路由记录中的 `meta` 字段。

下面例子展示在全局导航守卫中检查元字段：

```js
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 此路由需要验证，请检查是否已登录
    // 如果没有，请重定向到登录页面。
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // 确保一定要调用 next()
  }
});
```

### 2.3 过渡动效

`<router-view>` 是基本的动态组件，所以可以用 `<transition>` 组件给它添加一些过渡效果：

```html
<transition>
  <router-view></router-view>
</transition>
```

[Transition](./Vue.md#三-过渡-动画) 的所有功能 在这里同样适用。

#### 2.3.1 单个路由的过渡

上面的用法会给所有路由设置一样的过渡效果，如果想让每个路由组件有各自的过渡效果，可以在各路由组件内使用 `<transition>` 并设置不同的 name。

```js
const Foo = {
  template: `
    <transition name="slide">
      <div class="foo">...</div>
    </transition>
  `
};

const Bar = {
  template: `
    <transition name="fade">
      <div class="bar">...</div>
    </transition>
  `
};
```

#### 2.3.2 基于路由的动态过渡

还可以基于当前路由与目标路由的变化关系，动态设置过渡效果：

```html
<!-- 使用动态的 transition name -->
<transition :name="transitionName">
  <router-view></router-view>
</transition>
```

```js
// 接着在父组件内
// watch $route 决定使用哪种过渡
watch: {
  '$route' (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  }
}
```

### 2.4 数据获取

有时候，进入某个路由后，需要从服务器获取数据。例如，在渲染用户信息时，需要从服务器获取用户的数据。可以通过两种方式来实现：

- **导航完成之后获取**：先完成导航，然后在接下来的组件生命周期钩子中获取数据。在数据获取期间显示“加载中”之类的指示。

- **导航完成之前获取**：导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航。

从技术角度讲，两种方式都不错 —— 就看想要的用户体验是哪种。

#### 2.4.1 导航完成后获取数据

当使用这种方式时，会马上导航和渲染组件，然后在组件的 `created` 钩子中获取数据。这有机会在数据获取期间展示一个 loading 状态，还可以在不同视图间展示不同的 loading 状态。

假设有一个 `Post` 组件，需要基于 `$route.params.id` 获取文章数据：

```html
<template>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>
```

```js
export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null
    };
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      // 将getPost替换为 数据获取 util / API 包装器
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.post = post;
        }
      });
    }
  }
};
```

#### 2.4.2 在导航完成前获取数据

通过这种方式，在导航转入新的路由前获取数据。可以在接下来的组件的 `beforeRouteEnter` 守卫中获取数据，当数据获取成功后只调用 `next` 方法。

```js
export default {
  data () {
    return {
      post: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, next) {
    getPost(to.params.id, (err, post) => {
      next(vm => vm.setData(err, post))
    })
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  beforeRouteUpdate (to, from, next) {
    this.post = null
    getPost(to.params.id, (err, post) => {
      this.setData(err, post)
      next()
    })
  },
  methods: {
    setData (err, post) {
      if (err) {
        this.error = err.toString()
      } else {
        this.post = post
      }
    }
  }
}`
```

> 注意 : 在为后面的视图获取数据时，用户会停留在当前的界面，因此建议在数据获取期间，显示一些进度条或者别的指示。如果数据获取失败，同样有必要展示一些全局的错误提醒。

### 2.5 滚动行为

使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。vue-router 能做到，而且更好，它可以自定义路由切换时页面如何滚动。

> **注意: 这个功能只在支持 `history.pushState` 的浏览器中可用**。

当创建一个 Router 实例，可以提供一个 `scrollBehavior` 方法：

```js
const router = new VueRouter({
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
  }
})
```

`scrollBehavior` 方法接收 `to` 和 `from` 路由对象。第三个参数 `savedPosition` 当且仅当 `popstate` 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。

这个方法返回滚动位置的对象信息，长这样：

- `{ x: number, y: number }`
- `{ selector: string, offset? : { x: number, y: number }}` (offset 只在 2.6.0+ 支持)

如果返回一个 falsy 的值，或者是一个空对象，那么不会发生滚动。

```js
scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
```

对于所有路由导航，简单地让页面滚动到顶部。

返回 `savedPosition`，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样：

```js
scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
```

如果要模拟“滚动到锚点”的行为：

```js
scrollBehavior (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash
    }
  }
}
```

还可以利用[路由元信息](#22-路由元信息)更细颗粒度地控制滚动。查看[完整例子](https://github.com/vuejs/vue-router/blob/dev/examples/scroll-behavior/app.js)。

#### 2.5.1 异步滚动

也可以返回一个 Promise 来得出预期的位置描述：

```js
scrollBehavior (to, from, savedPosition) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ x: 0, y: 0 })
    }, 500)
  })
}
```

将其挂载到从页面级别的过渡组件的事件上，令其滚动行为和页面过渡一起良好运行是可能的。但是考虑到用例的多样性和复杂性，仅提供这个原始的接口，以支持不同用户场景的具体实现。

#### 2.5.2 平滑滚动

只需将 `behavior` 选项添加到 `scrollBehavior` 内部返回的对象中，就可以为支持它的浏览器启用原生平滑滚动：

```js
scrollBehavior (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash,
      behavior: 'smooth'
    }
  }
}
```

### 2.6 路由懒加载

当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

结合 Vue 的异步组件和 Webpack 的代码分割功能，轻松实现路由组件的懒加载。

首先，可以将异步组件定义为返回一个 Promise 的工厂函数 (该函数返回的 Promise 应该 resolve 组件本身)：

```js
const Foo = () =>
  Promise.resolve({
    /* 组件定义对象 */
  });
```

第二，在 Webpack 2 中，可以使用动态 import 语法来定义代码分块点 (split point)：

```js
import('./Foo.vue'); // 返回 Promise
```

> 注意 : 如果使用的是 Babel，将需要添加 syntax-dynamic-import 插件，才能使 Babel 可以正确地解析语法。

结合这两者，这就是如何定义一个能够被 Webpack 自动代码分割的异步组件。

```js
const Foo = () => import('./Foo.vue');
```

在路由配置中什么都不需要改变，只需要像往常一样使用 Foo：

```js
const router = new VueRouter({
  routes: [{ path: '/foo', component: Foo }]
});
```

#### 2.6.1 把组件按组分块

有时候想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用 命名 chunk，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)。

```js
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue');
const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue');
const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue');
```

Webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。

### 2.7 导航故障

当使用 `router-link` 组件时，Vue Router 会自动调用 `router.push` 来触发一次导航。 虽然大多数链接的预期行为是将用户导航到一个新页面，但也有少数情况下用户将留在同一页面上：

- 用户已经位于他们正在尝试导航到的页面
- 一个导航守卫通过调用 `next(false)` 中断了这次导航
- 一个导航守卫抛出了一个错误，或者调用了 `next(new Error())`

当使用 `router-link` 组件时，这些失败都不会打印出错误。然而，如果使用 `router.push` 或者 `router.replace` 的话，可能会在控制台看到一条 "Uncaught (in promise) Error" 这样的错误，后面跟着一条更具体的消息。

#### 2.7.1 检测导航故障

导航故障是一个 `Error` 实例，附带了一些额外的属性。要检查一个错误是否来自于路由器，可以使用 `isNavigationFailure` 函数：

```js
import VueRouter from 'vue-router';
const { isNavigationFailure, NavigationFailureType } = VueRouter;

// 正在尝试访问 admin 页面
router.push('/admin').catch(failure => {
  if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
    // 向用户显示一个小通知
    showToast('Login in order to access the admin panel');
  }
});
```

> 提示 : 如果忽略第二个参数：`isNavigationFailure(failure)`，那么就只会检查这个错误是不是一个导航故障。

#### 2.7.2 `NavigationFailureType`

NavigationFailureType 可以帮助开发者来区分不同类型的导航故障。有四种不同的类型：

- `redirected` ：在导航守卫中调用了 `next(newLocation)` 重定向到了其他地方。
- `aborted` ：在导航守卫中调用了 `next(false)` 中断了本次导航。
- `cancelled` ：在当前导航还没有完成之前又有了一个新的导航。比如，在等待导航守卫的过程中又调用了 `router.push`。
- `duplicated` ：导航被阻止，因为已经在目标位置了。

#### 2.7.3 导航故障的属性

所有的导航故障都会有 `to` 和 `from` 属性，用来表达这次失败的导航的当前位置和目标位置。

```js
// 正在尝试访问 admin 页面
router.push('/admin').catch(failure => {
  if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
    failure.to.path; // '/admin'
    failure.from.path; // '/'
  }
});
```

在所有情况下，`to` 和 `from` 都是规范化的路由位置。
