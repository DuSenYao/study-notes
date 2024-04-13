# Vite

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Vite](#vite)
  - [一. 基础使用](#一-基础使用)
    - [1.1 样式方案](#11-样式方案)
      - [1.1.1 CSS 预处理器](#111-css-预处理器)
      - [1.1.2 CSS Modules](#112-css-modules)
      - [1.1.3 PostCSS](#113-postcss)
      - [1.1.4 CSS In JS](#114-css-in-js)
      - [1.1.5 CSS 原子化框架](#115-css-原子化框架)
      - [1.1.5.1 Tailwind CSS](#1151-tailwind-css)
    - [1.2 代码规范](#12-代码规范)
    - [1.3 静态资源](#13-静态资源)
      - [1.3.1 JSON 加载](#131-json-加载)
      - [1.3.2 Web Worker 脚本](#132-web-worker-脚本)
      - [1.3.3 Web Assembly 文件](#133-web-assembly-文件)
      - [1.3.4 其他静态资源](#134-其他静态资源)
    - [1.4 预构建](#14-预构建)

<!-- /code_chunk_output -->

## 一. 基础使用

```sh
# 安装
npm i -g vite

# 项目初始化
pnpm create vite
```

### 1.1 样式方案

原生 CSS 缺点：

- **开发体验欠佳**：比如原生 CSS 不支持选择器的嵌套。
- **样式污染**：如果出现同样的类名，很容易造成不同的样式互相覆盖和污染。
- **浏览器兼容**。为了兼容不同的浏览器，需要对一些属性（如 transition）加上不同的浏览器前缀。
- **打包后的代码体积**：如果不用任何的 CSS 工程化方案，所有的 CSS 代码都将打包到产物中，即使有部分样式并没有在代码中使用，导致产物体积过大。

针对如上原生 CSS 的痛点，社区中诞生了不少解决方案，常见的有 5 类：

- **CSS 预处理器**：主流的包括 Sass/Scss、Less 和 Stylus。这些方案各自定义了一套语法，让 CSS 也能使用嵌套规则，甚至能像编程语言一样定义变量、写条件判断和循环语句，大大增强了样式语言的灵活性，解决原生 CSS 的开发体验问题。

- **CSS Modules**：能将 CSS 类名处理成哈希值，这样就可以避免同名的情况下样式污染的问题。

- **CSS 后处理器 PostCSS**：用来解析和处理 CSS 代码，可以实现的功能非常丰富，比如将 px 转换为 rem、根据目标浏览器情况自动加上类似于--moz--、-o-的属性前缀等等。

- **CSS in JS 方案**：主流的包括 emotion、styled-components 等等，顾名思义，这类方案可以实现直接在 JS 中写样式代码，基本包含 CSS 预处理器和 CSS Modules 的各项优点，非常灵活，解决了开发体验和全局样式污染的问题。

- **CSS 原子化框架**：如 Tailwind CSS、Windi CSS，通过类名来指定样式，大大简化了样式写法，提高了样式开发的效率，主要解决了原生 CSS 开发体验的问题。

#### 1.1.1 CSS 预处理器

Vite 本身对 CSS 各种预处理器语言（Sass/Scss、Less 和 Stylus）做了内置支持。

由于 Vite 底层会调用 CSS 预处理器的官方库进行编译，而 Vite 为了实现按需加载，并没有内置这些工具库，而是让用户根据需要安装。因此，首先安装 Sass 的官方库。

所有预处理器选项还支持 additionalData 选项，可以用于为每个样式内容注入额外代码（最好是变量）。

> **注意**：如果注入的是实际的样式而不仅仅是变量时，那么这些样式将会在最终的打包产物中重复出现。

```ts
// ...
export default defineConfig({
  // ...
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "/@/styles/variable.scss";`
      }
    }
  }
});
```

#### 1.1.2 CSS Modules

CSS Modules 在 Vite 也是一个开箱即用的能力，Vite 会对后缀带有 `.module` 的样式文件自动应用 CSS Modules。

也可以在配置文件中的 css.modules 选项来配置 [CSS Modules](https://cn.vitejs.dev/guide/features.html#css-modules) 的功能，比如下面这个例子:

```ts
export default {
  css: {
    modules: {
      // 一般可以通过 generateScopedName 属性来对生成的类名进行自定义
      // 其中，name 表示当前文件名，local 表示类名
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    }
  }
};
```

#### 1.1.3 PostCSS

一般可以通过 `postcss.config.ts` 来配置 postcss，不过在 Vite 配置文件中已经提供了 PostCSS 的配置入口，可以直接在 Vite 配置文件中进行操作。

> **注意**：vite.config.ts 优先级高于 postcss.config.ts。

1. 安装一个常用的 PostCSS 插件，这个插件主要用来自动为不同的目标浏览器添加样式前缀，解决的是浏览器兼容性的问题。

   ```sh
   pnpm i autoprefixer -D
   ```

2. 在 vite.config.ts 中接入这个插件

   ```ts
   import autoprefixer from 'autoprefixer';

   export default {
     css: {
       // 进行 PostCSS 配置
       postcss: {
         plugins: [
           autoprefixer({
             // 指定目标浏览器
             overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
           })
         ]
       }
     }
   };
   ```

由于有 CSS 代码的 AST (抽象语法树)解析能力，PostCSS 可以做的事情非常多，甚至能实现 CSS 预处理器语法和 CSS Modules，社区当中也有不少的 PostCSS 插件，[常见的插件](https://www.postcss.parts/)还包括：

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)：用来将 px 转换为 rem 单位，在适配移动端的场景下很常用。
- [postcss-preset-env](https://github.com/csstools/postcss-preset-env)：通过它，可以编写最新的 CSS 语法，不用担心兼容性问题。
- [cssnano](https://github.com/cssnano/cssnano)：主要用来压缩 CSS 代码，跟常规的代码压缩工具不一样，它能做得更加智能，比如提取一些公共样式进行复用、缩短一些常见的属性值等等。

#### 1.1.4 CSS In JS

社区中有两款主流的 CSS In JS 方案：

- styled-components
- emotion

对于 CSS In JS 方案，在构建侧需要考虑选择器命名问题、DCE（Dead Code Elimination 即无用代码删除）、代码压缩、生成 SourceMap、服务端渲染（SSR）等问题，而 styled-components 和 emotion 已经提供了对应的 babel 插件来解决这些问题，在 Vite 中要做的就是集成这些 babel 插件。

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      babel: {
        // 加入 babel 插件
        plugins: [
          // 适配 styled-component
          "babel-plugin-styled-components"
          // 适配 emotion
          "@emotion/babel-plugin"
        ]
      },
      // 注意: 对于 emotion，需要单独加上这个配置
      // 通过 `@emotion/vue` 包编译 emotion 中的特殊 jsx 语法
      jsxImportSource: "@emotion/vue"
    })
  ]
})
```

#### 1.1.5 CSS 原子化框架

在目前的社区当中，CSS 原子化框架主要有：

- **Tailwind CSS**
- **unocss**

#### 1.1.5.1 Tailwind CSS

1. 安装依赖

   ```sh
   pnpm install -D tailwindcss postcss autoprefixer
   ```

2. 新建两个配置文件 tailwind.config.js 和 postcss.config.js：

   ```js
   // tailwind.config.js
   module.exports = {
     content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     theme: {
       extend: {}
     },
     plugins: []
   };

   // postcss.config.js
   // 从中可以看到，Tailwind CSS 的编译能力是通过 PostCSS 插件实现的
   // 而 Vite 本身内置了 PostCSS，因此可以通过 PostCSS 配置接入 Tailwind CSS
   module.exports = {
     plugins: {
       tailwindcss: {},
       autoprefixer: {}
     }
   };
   ```

3. 在项目的入口 CSS 中引入必要的样板代码

   ```js
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### 1.2 代码规范

- 在 Vite 中接入 ESLint

  1. 安装 [vite-plugin-eslint](https://github.com/gxmari007/vite-plugin-eslint)

     ```sh
     pnpm i vite-plugin-eslint -D
     ```

  2. 在 vite.config.ts 中配置

     ```ts
     import eslint from 'vite-plugin-eslint';

     export default defineConfig({
       plugins: [eslint()]
     });
     ```

- 在 Vite 中接入 Stylelint

  1. 安装依赖

     ```sh
     pnpm i vite-plugin-stylelint -D
     ```

  2. 在 vite.config.ts 中配置

     ```ts
     import stylelint from 'vite-plugin-stylelint';

     export default defineConfig({
       plugins: [
         stylelint({
           exclude: /windicss|node_modules/
         })
       ]
     });
     ```

### 1.3 静态资源

静态资源处理是前端工程经常遇到的问题，在真实的工程中不仅仅包含了动态执行的代码，也不可避免地要引入各种静态资源，如图片、JSON、Worker 文件、Web Assembly 文件等等。

而静态资源本身并不是标准意义上的模块，因此对它们的处理和普通的代码是需要区别对待的。一方面需要解决资源加载的问题，对 Vite 来说就是如何将静态资源解析并加载为一个 ES 模块的问题；另一方面在生产环境下还需要考虑静态资源的部署问题、体积问题、网络性能问题，并采取相应的方案来进行优化。

#### 1.3.1 JSON 加载

Vite 中已经内置了对于 JSON 文件的解析，底层使用 @rollup/pluginutils 的 dataToEsm 方法将 JSON 对象转换为一个包含各种具名导出的 ES 模块：

```js
import { version } from '../../../package.json';
```

也可以在 vite.config.ts 中禁用按名导入的方式：

```ts
{
  json: {
    stringify: true;
  }
}
```

这样会将 JSON 的内容解析为 `export default JSON.parse("xxx")`，这样会比转译成对象字面量性能更好，尤其是当 JSON 文件较大的时候。

#### 1.3.2 Web Worker 脚本

Vite 推荐使用**通过构造器导入**，一个 Web Worker 可以使用 new Worker() 和 new SharedWorker() 导入。与 [worker 后缀](https://cn.vitejs.dev/guide/features.html#import-with-query-suffixes)相比，这种语法更接近于标准。

```js
const worker = new Worker(new URL('./worker.js', import.meta.url));

// worker 构造函数会接受可以用来创建 “模块” worker 的选项
const worker2 = new Worker(new URL('./worker.js', import.meta.url), {
  type: 'module'
});
```

#### 1.3.3 Web Assembly 文件

预编译的 .wasm 文件可以通过 `?init` 来导入。默认导出一个初始化函数，返回值为所导出 wasm 实例对象的 Promise：

```js
import init from './example.wasm?init';

init().then((instance) => {
  instance.exports.test();
});
```

init 函数还可以将传递给 WebAssembly.instantiate 的导入对象作为其第二个参数：

```js
init({
  imports: {
    someFunc: () => {
      /* ... */
    }
  }
}).then(() => {
  /* ... */
});
```

在生产构建当中，体积小于 assetInlineLimit 的 .wasm 文件将会被内联为 base64 字符串。否则，它们将作为资源复制到 dist 目录中，并按需获取。

#### 1.3.4 其他静态资源

除了上述的一些资源格式，Vite 也对下面几类格式提供了内置的支持:

- **媒体类文件**：mp4、webm、ogg、mp3、wav、flac 和 aac。
- **字体类文件**：woff、woff2、eot、ttf 和 otf。
- **文本类**：包括 webmanifest、pdf 和 txt。

也就是说，可以在 Vite 将这些类型的文件当做一个 ES 模块来导入使用。

```js
import imgUrl from './img.png';
document.getElementById('hero-img').src = imgUrl;
```

如果项目中还存在其它格式的静态资源，可以通过 [assetsInclude](https://cn.vitejs.dev/config/shared-options.html#assetsinclude) 配置让 Vite 来支持加载：

```js
export default defineConfig({
  assetsInclude: ['**/*.gltf']
});
```

Vite 中引入静态资源时，也支持在路径最后添加一些特殊的查询参数可以更改资源被引入的方式：

```js
// 显式加载资源为一个 URL
import assetAsURL from './asset.js?url';
// 以字符串形式加载资源
import assetAsString from './shader.glsl?raw';
// 加载为 Web Worker
import Worker from './worker.js?worker';
// 在构建时 Web Worker 内联为 base64 字符串
import InlineWorker from './worker.js?worker&inline';
```

### 1.4 预构建

Vite 是一个提倡 no-bundle 的构建工具，相比于传统的 Webpack，能做到开发时的模块按需编译，而不用先打包完再加载。

模块代码其实分为两部分：

- **源代码**，也就是业务代码
- **第三方依赖的代码**，即 node_modules 中的代码。所谓的 no-bundle 只是对于源代码而言，对于第三方依赖而言，Vite 还是选择 bundle（打包），并且使用速度极快的打包器 Esbuild 来完成这一过程，达到秒级的依赖编译速度。
